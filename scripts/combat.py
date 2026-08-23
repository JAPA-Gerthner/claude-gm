"""
Combat resolver for GM sessions.

Resolves a batch of attacks in one call. Outputs results for GM to narrate.

Usage:
  python combat.py --attacks "Kenji:STR3:AC12, Gempachi:STR2:AC12"
  python combat.py --attacks "Kenji:STR3:AC12:adv, Bandit1:DEX2:AC13"
  python combat.py --attacks "Kenji:STR3:AC12:charge"   # BATTERING RAM +2/+2
  python combat.py --attacks "Kenji:STR3:AC12" --damage d8
  python combat.py --attacks "Bandit1:STR2:AC13, Bandit2:STR2:AC13" --target-htk
  python combat.py --attacks "Kenji:STR3:AC12:snapback"  # auto-hit, skip attack roll
  python combat.py --attacks "..." --annihilation        # d20 on hit, 15+ = instant kill
  python combat.py --initiative "Kenji:DEX2, Gempachi:DEX3, Bandit1:DEX2, Bandit2:DEX1"
  python combat.py --breaking-point 5                    # morale check for 5 enemies
  python combat.py --secret --attacks "..."              # hidden from player

Attack format: Name:STAT+mod:AC[:flags]
  Flags: adv, dis, atk+N (attack bonus), dmg+N (damage bonus), snapback (auto-hit)
  Combine: "Kenji:STR3:AC12:atk+2:dmg+2" for charge + bonus

--damage XdY        damage die for all attacks (default: d8)
--damage-mod N      flat damage modifier (stat mod, added automatically from attack stat)
--target-htk        target has HARD TO KILL (d20 17+ = ignore damage)
--cleave            attacker has CLEAVE — not resolved here, just flagged
--annihilation      passive: after each hit that deals damage, d20 15+ = instant kill
--breaking-point N  morale check: roll d20 for N enemies (15+ switch, 10-14 leave, 1-9 unaffected)
"""

import random
import sys
import re


OUTCOMES = ["Crit.Fail", "Fail", "Partial", "Success", "Crit.Success"]

DIFFICULTY_THRESHOLDS = {
    "casual":   [(-8, "Crit.Fail"), (-1, "Fail"), (2, "Partial"), (7, "Success")],
    "standard": [(-6, "Crit.Fail"), (-1, "Fail"), (4, "Partial"), (9, "Success")],
    "hardcore": [(-4, "Crit.Fail"), (-1, "Fail"), (6, "Partial"), (11, "Success")],
}


def margin_outcome(margin, nat_roll=None, difficulty="standard"):
    thresholds = DIFFICULTY_THRESHOLDS.get(difficulty, DIFFICULTY_THRESHOLDS["standard"])

    outcome = "Crit.Success"
    for limit, name in thresholds:
        if margin <= limit:
            outcome = name
            break

    idx = OUTCOMES.index(outcome)
    shifted = False

    if nat_roll == 1 and idx > 0:
        idx -= 1
        shifted = True
    elif nat_roll == 20 and idx < 4:
        idx += 1
        shifted = True

    result = OUTCOMES[idx]
    if shifted:
        result += f" (nat {nat_roll})"
    return result, idx


def parse_damage(s):
    m = re.match(r'^(\d+)?d(\d+)$', s.lower())
    if not m:
        return 1, 8
    return int(m.group(1) or 1), int(m.group(2))


def roll_damage(count, sides, stat_mod, outcome_idx):
    if outcome_idx <= 1:  # crit fail or fail
        return 0, []

    rolls = [random.randint(1, sides) for _ in range(count)]

    if outcome_idx == 2:  # partial — half damage
        total = max(1, (sum(rolls) + stat_mod) // 2)
        return total, rolls
    elif outcome_idx == 4:  # crit — double dice
        extra = [random.randint(1, sides) for _ in range(count)]
        rolls_all = rolls + extra
        total = sum(rolls_all) + stat_mod
        return total, rolls_all
    else:  # success — full damage
        total = sum(rolls) + stat_mod
        return total, rolls


def resolve_attacks(attacks_str, damage_str="d8", damage_mod=0, target_htk=False, secret=False, annihilation=False, cleave=False, difficulty="standard"):
    if secret:
        print("GM SECRETS - DO NOT EXPAND\n" * 5)

    dmg_count, dmg_sides = parse_damage(damage_str)

    entries = [a.strip() for a in attacks_str.split(",")]

    print("=== COMBAT RESOLUTION ===\n")

    for entry in entries:
        parts = entry.split(":")
        if len(parts) < 3:
            print(f"  Invalid: {entry} (need Name:STATmod:AC[:flags])")
            continue

        name = parts[0]
        stat_str = parts[1].upper()
        ac_str = parts[2].upper().replace("AC", "")
        ac = int(ac_str)
        flags = [p.lower() for p in parts[3:]] if len(parts) > 3 else []

        stat_match = re.match(r'([A-Z]+)(\d+)', stat_str)
        if not stat_match:
            print(f"  Invalid stat: {stat_str}")
            continue

        stat_name = stat_match.group(1)
        stat_mod = int(stat_match.group(2))

        atk_bonus = 0
        dmg_bonus = damage_mod
        roll_mode = "normal"
        is_snapback = False
        notes = []
        if cleave:
            notes.append("CLEAVE ready")

        for flag in flags:
            if flag == "adv":
                roll_mode = "advantage"
            elif flag == "dis":
                roll_mode = "disadvantage"
            elif flag == "snapback":
                is_snapback = True
            elif flag == "charge":
                atk_bonus += 2
                dmg_bonus += 2
                notes.append("CHARGE +2/+2")
            elif flag.startswith("atk"):
                m = re.match(r'atk([+-]?\d+)', flag)
                if m:
                    atk_bonus += int(m.group(1))
            elif flag.startswith("dmg"):
                m = re.match(r'dmg([+-]?\d+)', flag)
                if m:
                    dmg_bonus += int(m.group(1))

        # Snapback: auto-hit, skip attack roll, force Success outcome
        if is_snapback:
            nat = 0
            outcome = "Success"
            outcome_idx = 3  # Success index
            total = ac  # irrelevant but consistent
            margin = 0

            # Damage (always full, outcome_idx=3=Success)
            total_dmg, dmg_rolls = roll_damage(dmg_count, dmg_sides, stat_mod + dmg_bonus, outcome_idx)

            # Hard to Kill check
            htk_blocked = False
            if target_htk and total_dmg > 0:
                htk_roll = random.randint(1, 20)
                if htk_roll >= 17:
                    htk_blocked = True
                    notes.append(f"HTK d20={htk_roll} BLOCKED")
                else:
                    notes.append(f"HTK d20={htk_roll} pass")

            # Output
            notes_str = f" ({', '.join(notes)})" if notes else ""
            print(f"  {name} [{stat_name}] AUTO-HIT (SNAPBACK)")

            if total_dmg > 0:
                if htk_blocked:
                    print(f"    Damage: {dmg_rolls} +{stat_mod + dmg_bonus} = {total_dmg} -> IGNORED (Hard to Kill)")
                else:
                    print(f"    Damage: {dmg_rolls} +{stat_mod + dmg_bonus} = {total_dmg}{notes_str}")

                    # Annihilation check
                    if annihilation and not htk_blocked:
                        ann_roll = random.randint(1, 20)
                        if ann_roll >= 15:
                            print(f"    >> ANNIHILATED (d20={ann_roll})")
                        else:
                            print(f"    Annihilation d20={ann_roll} -- no")

            print()
            continue

        # Roll attack
        if roll_mode == "advantage":
            r1, r2 = random.randint(1, 20), random.randint(1, 20)
            nat = max(r1, r2)
            roll_note = f"ADV [{r1},{r2}]->{nat}"
        elif roll_mode == "disadvantage":
            r1, r2 = random.randint(1, 20), random.randint(1, 20)
            nat = min(r1, r2)
            roll_note = f"DIS [{r1},{r2}]->{nat}"
        else:
            nat = random.randint(1, 20)
            roll_note = str(nat)

        total = nat + stat_mod + atk_bonus
        margin = total - ac
        outcome, outcome_idx = margin_outcome(margin, nat, difficulty)

        # Damage
        total_dmg, dmg_rolls = roll_damage(dmg_count, dmg_sides, stat_mod + dmg_bonus, outcome_idx)

        # Hard to Kill check
        htk_blocked = False
        if target_htk and total_dmg > 0:
            htk_roll = random.randint(1, 20)
            if htk_roll >= 17:
                htk_blocked = True
                notes.append(f"HTK d20={htk_roll} BLOCKED")
            else:
                notes.append(f"HTK d20={htk_roll} pass")

        # Output
        notes_str = f" ({', '.join(notes)})" if notes else ""
        print(f"  {name} [{stat_name}] d20={roll_note} +{stat_mod + atk_bonus} = {total} vs AC {ac}")
        print(f"    Margin {'+' if margin >= 0 else ''}{margin} -> {outcome}")

        if total_dmg > 0:
            if htk_blocked:
                print(f"    Damage: {dmg_rolls} +{stat_mod + dmg_bonus} = {total_dmg} -> IGNORED (Hard to Kill)")
            else:
                print(f"    Damage: {dmg_rolls} +{stat_mod + dmg_bonus} = {total_dmg}{notes_str}")

                # Annihilation check
                if annihilation:
                    ann_roll = random.randint(1, 20)
                    if ann_roll >= 15:
                        print(f"    >> ANNIHILATED (d20={ann_roll})")
                    else:
                        print(f"    Annihilation d20={ann_roll} -- no")
        elif outcome_idx <= 1:
            print(f"    Miss{notes_str}")

        # Crit fail/success effects
        if outcome_idx == 0:
            print(f"    >> CRIT FAIL -- consequence needed")
        elif outcome_idx == 2:
            print(f"    >> PARTIAL -- half damage, GM picks complication")
        elif outcome_idx == 4:
            print(f"    >> CRIT -- double dice + bonus effect")

        print()

    print("=== END ===")


def resolve_initiative(init_str):
    entries = [e.strip() for e in init_str.split(",")]
    results = []

    for entry in entries:
        parts = entry.split(":")
        name = parts[0]
        stat_match = re.match(r'[A-Z]*(\d+)', parts[1].upper()) if len(parts) > 1 else None
        mod = int(stat_match.group(1)) if stat_match else 0

        roll = random.randint(1, 20)
        total = roll + mod
        results.append((total, roll, mod, name))

    results.sort(key=lambda x: -x[0])

    print("=== INITIATIVE ===\n")
    for i, (total, roll, mod, name) in enumerate(results, 1):
        print(f"  {i}. {name}: d20={roll} +{mod} = {total}")
    print("\n=== END ===")


def resolve_breaking_point(n):
    print(f"=== BREAKING POINT (morale check for {n} enemies) ===\n")

    switches = 0
    leaves = 0
    unaffected = 0

    for i in range(1, n + 1):
        roll = random.randint(1, 20)
        if roll >= 15:
            result = "SWITCHES (joins your side)"
            switches += 1
        elif roll >= 10:
            result = "LEAVES (exits combat)"
            leaves += 1
        else:
            result = "UNAFFECTED"
            unaffected += 1
        print(f"  Enemy {i}: d20={roll} -> {result}")

    print(f"\n  Summary: {switches} switch, {leaves} leave, {unaffected} unaffected")
    print("\n=== END ===")


def main():
    args = sys.argv[1:]

    secret = "--secret" in args
    target_htk = "--target-htk" in args
    annihilation = "--annihilation" in args
    cleave = "--cleave" in args

    attacks_str = None
    init_str = None
    breaking_point_n = None
    damage_str = "d8"
    damage_mod = 0
    difficulty = "standard"

    i = 0
    while i < len(args):
        if args[i] == "--attacks" and i + 1 < len(args):
            attacks_str = args[i + 1]
            i += 2
        elif args[i] == "--initiative" and i + 1 < len(args):
            init_str = args[i + 1]
            i += 2
        elif args[i] == "--breaking-point" and i + 1 < len(args):
            breaking_point_n = int(args[i + 1])
            i += 2
        elif args[i] == "--damage" and i + 1 < len(args):
            damage_str = args[i + 1]
            i += 2
        elif args[i] == "--damage-mod" and i + 1 < len(args):
            damage_mod = int(args[i + 1])
            i += 2
        elif args[i] == "--difficulty" and i + 1 < len(args):
            difficulty = args[i + 1].lower()
            i += 2
        else:
            i += 1

    if breaking_point_n is not None:
        resolve_breaking_point(breaking_point_n)
    elif init_str:
        resolve_initiative(init_str)
    elif attacks_str:
        resolve_attacks(attacks_str, damage_str, damage_mod, target_htk, secret, annihilation, cleave, difficulty)
    else:
        print("Usage:")
        print('  python combat.py --attacks "Name:STATmod:AC, ..."')
        print('  python combat.py --attacks "Name:STATmod:AC:snapback"  # auto-hit')
        print('  python combat.py --initiative "Name:DEXmod, ..."')
        print('  python combat.py --breaking-point N                   # morale check for N enemies')
        print('  python combat.py --attacks "..." --damage d10 --target-htk')
        print('  python combat.py --attacks "..." --annihilation       # d20 on hit, 15+ = instant kill')


if __name__ == "__main__":
    main()
