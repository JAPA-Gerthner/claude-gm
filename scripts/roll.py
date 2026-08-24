"""
Dice roller for GM sessions.

Usage:
  python roll.py d20                    # single d20
  python roll.py 2d8                    # 2d8 summed
  python roll.py d20 d20 d6             # multiple dice, each separate
  python roll.py 3d20                   # 3 separate d20s (listed)
  python roll.py d20 --adv              # 2d20 take best
  python roll.py d20 --dis              # 2d20 take worst
  python roll.py d20 --mod 3            # d20+3
  python roll.py d20 --mod 3 --dc 12    # d20+3 vs DC 12, show margin and outcome
  python roll.py d30                    # d30 for Devil's Bargain etc.
  python roll.py --hard-to-kill         # d20, 17+ = "IGNORED"
  python roll.py --quality              # item quality roll (d20 -> tier)
  python roll.py d20 --volatility 2 --mod 3 --dc 14  # ★★: d20+3 + random(-2..+2) vs DC 14
  python roll.py d20 --trickster --mod 3 --dc 12     # trickster: d20+3 + random(-2..+2) vs DC 12
  python roll.py d20 --volatility 3 --trickster --mod 4 --dc 16  # stacked: random(-5..+5)!
"""

import random
import sys
import re


def parse_die(s):
    m = re.match(r'^(\d+)?d(\d+)$', s.lower())
    if not m:
        return None
    count = int(m.group(1)) if m.group(1) else 1
    sides = int(m.group(2))
    return count, sides


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

    outcomes_ordered = ["Crit.Fail", "Fail", "Partial", "Success", "Crit.Success"]
    idx = outcomes_ordered.index(outcome)

    if nat_roll == 1 and idx > 0:
        idx -= 1
        outcome = outcomes_ordered[idx] + " (nat 1 shift)"
    elif nat_roll == 20 and idx < 4:
        idx += 1
        outcome = outcomes_ordered[idx] + " (nat 20 shift)"

    return outcome


def main():
    args = sys.argv[1:]

    adv = "--adv" in args
    dis = "--dis" in args
    htk = "--hard-to-kill" in args
    quality = "--quality" in args

    mod = 0
    dc = None
    volatility = 0
    trickster = "--trickster" in args
    difficulty = "standard"

    clean_args = []
    i = 0
    while i < len(args):
        if args[i] == "--mod" and i + 1 < len(args):
            mod = int(args[i + 1])
            i += 2
        elif args[i] == "--dc" and i + 1 < len(args):
            dc = int(args[i + 1])
            i += 2
        elif args[i] in ("--volatility", "--stunt") and i + 1 < len(args):
            volatility = int(args[i + 1])
            i += 2
        elif args[i] == "--difficulty" and i + 1 < len(args):
            difficulty = args[i + 1].lower()
            i += 2
        elif args[i].startswith("--"):
            i += 1
        else:
            clean_args.append(args[i])
            i += 1

    chaos_range = volatility + (2 if trickster else 0)
    vol_mod = 0
    trick_mod = 0
    if volatility:
        vol_mod = random.randint(-volatility, volatility)
    if trickster:
        trick_mod = random.randint(-2, 2)
    chaos_total = vol_mod + trick_mod
    mod += chaos_total

    if volatility or trickster:
        parts = []
        if volatility:
            stars = "★" * volatility
            sign = f"+{vol_mod}" if vol_mod >= 0 else str(vol_mod)
            parts.append(f"{stars} {sign}")
        if trickster:
            sign = f"+{trick_mod}" if trick_mod >= 0 else str(trick_mod)
            parts.append(f"TRICKSTER {sign}")
        total_sign = f"+{chaos_total}" if chaos_total >= 0 else str(chaos_total)
        label = " + ".join(parts)
        if volatility and trickster:
            label += f" = {total_sign}"
        print(f"VOLATILITY: {label}")

    if htk:
        roll = random.randint(1, 20)
        if roll >= 17:
            print(f"HARD TO KILL: d20={roll} >= 17 -> DAMAGE IGNORED")
        else:
            print(f"HARD TO KILL: d20={roll} < 17 -> damage applies")
        return

    if quality:
        roll = random.randint(1, 20)
        if roll <= 3:
            tier = "FLAWED -- works but has drawback"
        elif roll <= 7:
            tier = "WORN -- slightly worse than standard"
        elif roll <= 14:
            tier = "STANDARD -- as listed"
        elif roll <= 19:
            tier = "QUALITY -- slightly better than standard"
        else:
            tier = "EXCEPTIONAL -- notable improvement + unique trait"
        print(f"ITEM QUALITY: d20={roll} -> {tier}")
        return

    if not clean_args:
        clean_args = ["d20"]

    for die_str in clean_args:
        parsed = parse_die(die_str)
        if not parsed:
            print(f"Unknown die: {die_str}")
            continue

        count, sides = parsed

        if adv and sides == 20 and count == 1:
            r1, r2 = random.randint(1, 20), random.randint(1, 20)
            best = max(r1, r2)
            total = best + mod
            print(f"ADV: d20=[{r1}, {r2}] take {best}" + (f" +{mod} = {total}" if mod else f" = {best}"))
            nat = best
            if dc:
                margin = total - dc
                print(f"  vs DC {dc}: {'+' if margin >= 0 else ''}{margin} -> {margin_outcome(margin, nat, difficulty)}")

        elif dis and sides == 20 and count == 1:
            r1, r2 = random.randint(1, 20), random.randint(1, 20)
            worst = min(r1, r2)
            total = worst + mod
            print(f"DIS: d20=[{r1}, {r2}] take {worst}" + (f" +{mod} = {total}" if mod else f" = {worst}"))
            nat = worst
            if dc:
                margin = total - dc
                print(f"  vs DC {dc}: {'+' if margin >= 0 else ''}{margin} -> {margin_outcome(margin, nat, difficulty)}")

        elif count > 1 and sides == 20:
            rolls = [random.randint(1, sides) for _ in range(count)]
            print(f"{count}d{sides}: {rolls}")
            if mod:
                totals = [r + mod for r in rolls]
                print(f"  +{mod} each: {totals}")
            if dc:
                for idx, r in enumerate(rolls):
                    total = r + mod
                    margin = total - dc
                    print(f"  [{idx+1}] {total} vs DC {dc}: {'+' if margin >= 0 else ''}{margin} -> {margin_outcome(margin, r, difficulty)}")

        elif count > 1:
            rolls = [random.randint(1, sides) for _ in range(count)]
            total = sum(rolls) + mod
            print(f"{count}d{sides}: {rolls} = {sum(rolls)}" + (f" +{mod} = {total}" if mod else ""))

        else:
            roll = random.randint(1, sides)
            total = roll + mod
            if mod:
                print(f"d{sides}: {roll} +{mod} = {total}")
            else:
                print(f"d{sides}: {roll}")
            if dc:
                margin = total - dc
                print(f"  vs DC {dc}: {'+' if margin >= 0 else ''}{margin} -> {margin_outcome(margin, roll, difficulty)}")


if __name__ == "__main__":
    main()
