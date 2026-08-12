"""
NPC generator for GM sessions.

Usage:
  python scripts/npc.py                    # random NPC with all rolls
  python scripts/npc.py --gender male      # specify gender (male/female)
  python scripts/npc.py --count 3          # generate 3 NPCs
  python scripts/npc.py --secret           # hidden from player
  python scripts/npc.py --samurai          # use samurai clan surnames
  python scripts/npc.py --ninja            # use ninja code names
  python scripts/npc.py --companion        # NPC with bond stat & ability
  python scripts/npc.py --companion --bond-stat STR  # companion with specific bond stat
  python scripts/npc.py --companion --count 3  # 3 companion NPCs
"""

import random
import sys

NAMES_MALE = ["Takeshi", "Kenji", "Hiroshi", "Ryu", "Saburo",
              "Noboru", "Ichiro", "Tetsu", "Shin", "Musashi"]

NAMES_FEMALE = ["Akiko", "Yuki", "Hanako", "Tomoe", "Sakura",
                "Kaede", "Rei", "Hana", "Chiyo", "Rin"]

SURNAMES_COMMON = ["Tanaka", "Yamamoto", "Watanabe", "Kobayashi", "Hayashi", "Shimizu"]

SURNAMES_SAMURAI = ["Oda", "Takeda", "Uesugi", "Tokugawa", "Hojo",
                    "Shimazu", "Date", "Mori", "Sanada", "Maeda"]

CODENAMES_NINJA = ["Shadow", "Spider", "Crow", "Mist", "Viper", "Ghost"]

MOTIVATIONS = ["Revenge", "Money", "Honor restored", "Protection", "Freedom", "Power"]

BOND_STATS = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]

BOND_ABILITIES = {
    "STR": [
        "WALL BREAKER — 1/combat. Destroy cover or barrier automatically.",
        "SHOULDER CHARGE — 1/combat. Knock one enemy prone, no save.",
        "HURL OBJECT — 1/combat. Throw a heavy object at one enemy. Deals damage and staggers them for 1 round.",
        "FORCED ENTRY — 1/scene. Smash through a locked door, gate, or barricade without a roll.",
        "IRON TOSS — 1/combat. Grab and throw one human-sized enemy into another. Both take damage.",
    ],
    "DEX": [
        "SMOKE SCREEN — 1/combat. All allies disengage without opportunity attacks.",
        "QUICK DRAW — 1/scene. Draw weapon and attack in same action, +2 to hit.",
        "LIGHT FINGERS — 1/scene. Steal or plant one small item on a target without being noticed.",
        "TUMBLE PAST — 1/combat. Move through enemy lines untouched. Reach any target this round.",
        "SNAP SHOT — 1/combat. Interrupt an enemy action with a ranged attack. If it hits, their action fails.",
        "VANISH — 1/scene. Slip away from sight in a moment of distraction. Cannot be found for 1 round.",
    ],
    "CON": [
        "BODY SHIELD — 1/combat. Intercept one attack targeting an ally. Take the damage instead.",
        "IRON GRIP — 1/combat. Grapple one enemy automatically. They cannot move for 1 round.",
        "SHAKE IT OFF — 1/combat. Ignore one poison, stun, or bleed effect currently active.",
        "LAST STAND — 1/combat. When reduced below half HP, gain +2 to all rolls until end of combat.",
        "HOLD THE LINE — 1/combat. Brace in a doorway or chokepoint. No enemy can pass for 2 rounds.",
    ],
    "INT": [
        "TACTICAL ADVICE — 1/scene. One ally gets +3 to their next roll.",
        "WEAK POINT — 1/combat. Identify enemy vulnerability. Next attack against that enemy: advantage.",
        "TRAP SENSE — 1/scene. Deduce the mechanism of one trap or puzzle. Reveal how to disarm or solve it.",
        "BATTLE PLAN — 1/combat. Before combat begins, rearrange ally turn order however the party wants.",
        "RECALL LORE — 1/scene. Know one useful fact about a creature, faction, or location. GM provides it honestly.",
        "READ THE ROOM — 1/scene. Analyze a social or tactical situation. GM reveals one hidden detail.",
    ],
    "WIS": [
        "DANGER SENSE — 1/scene. Warn party of ambush or trap. Auto-success on one perception check.",
        "CALM PRESENCE — 1/scene. Remove fear or panic from one ally.",
        "TRACKER'S EYE — 1/scene. Pick up a trail that has gone cold. Learn which direction a target went.",
        "GUT FEELING — 1/scene. Ask the GM if a specific NPC is lying. Get an honest answer.",
        "NATURE'S AID — 1/scene. Find useful herbs, shelter, or clean water in the wild without a roll.",
    ],
    "CHA": [
        "DISTRACTION — 1/combat. Draw enemy attention. One enemy has disadvantage on next attack.",
        "RALLY — 1/combat. One ally gets +2 to all rolls until end of their next turn.",
        "FAST TALK — 1/scene. Stall one NPC with conversation for up to 1 minute. They won't act or leave.",
        "TAUNT — 1/combat. Force one enemy to target this companion on their next turn instead of an ally.",
        "SMOOTH OVER — 1/scene. De-escalate a tense social encounter. Hostile NPCs become merely unfriendly.",
    ],
}

TRAIT_SCALE = {
    (1, 4): "bad",
    (5, 8): "weak",
    (9, 12): "average",
    (13, 16): "good",
    (17, 20): "excellent"
}


def trait_label(roll):
    for (lo, hi), label in TRAIT_SCALE.items():
        if lo <= roll <= hi:
            return label
    return "?"


def generate_npc(gender=None, name_pool="common", companion=False, forced_bond_stat=None):
    if gender is None:
        gender = random.choice(["male", "female"])

    if gender == "male":
        first = random.choice(NAMES_MALE)
    else:
        first = random.choice(NAMES_FEMALE)

    if name_pool == "samurai":
        last = random.choice(SURNAMES_SAMURAI)
        name = f"{last} {first}"
    elif name_pool == "ninja":
        code = random.choice(CODENAMES_NINJA)
        name = f'"{code}" {first}'
    else:
        last = random.choice(SURNAMES_COMMON)
        name = f"{last} {first}"

    honesty = random.randint(1, 20)
    courage = random.randint(1, 20)
    loyalty = random.randint(1, 20)
    motivation = random.choice(MOTIVATIONS)

    print(f"=== NPC: {name} ({gender}) ===")
    print(f"  Honesty:    d20={honesty:2d} ({trait_label(honesty)})")
    print(f"  Courage:    d20={courage:2d} ({trait_label(courage)})")
    print(f"  Loyalty:    d20={loyalty:2d} ({trait_label(loyalty)})")
    print(f"  Motivation: {motivation}")

    if companion:
        bond_stat = forced_bond_stat if forced_bond_stat else random.choice(BOND_STATS)
        bond_ability = random.choice(BOND_ABILITIES[bond_stat])
        print(f"  Bond Stat:    {bond_stat}")
        print(f"  Bond Ability: {bond_ability}")

    print(f"===")
    print()


def main():
    args = sys.argv[1:]

    secret = "--secret" in args
    companion = "--companion" in args
    count = 1
    gender = None
    name_pool = "common"
    bond_stat = None

    i = 0
    while i < len(args):
        if args[i] == "--count" and i + 1 < len(args):
            count = int(args[i + 1])
            i += 2
        elif args[i] == "--gender" and i + 1 < len(args):
            gender = args[i + 1].lower()
            i += 2
        elif args[i] == "--bond-stat" and i + 1 < len(args):
            bond_stat = args[i + 1].upper()
            i += 2
        elif args[i] == "--samurai":
            name_pool = "samurai"
            i += 1
        elif args[i] == "--ninja":
            name_pool = "ninja"
            i += 1
        else:
            i += 1

    if secret:
        print("GM SECRETS - DO NOT EXPAND\n" * 5)

    for _ in range(count):
        generate_npc(gender, name_pool, companion, bond_stat)


if __name__ == "__main__":
    main()
