"""
NPC generator for GM sessions.

Usage:
  python scripts/npc.py                    # random NPC with all rolls
  python scripts/npc.py --gender male      # specify gender (male/female)
  python scripts/npc.py --count 3          # generate 3 NPCs
  python scripts/npc.py --secret           # hidden from player
  python scripts/npc.py --samurai          # use samurai clan surnames
  python scripts/npc.py --ninja            # use ninja code names
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


def generate_npc(gender=None, name_pool="common"):
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
    print(f"===")
    print()


def main():
    args = sys.argv[1:]

    secret = "--secret" in args
    count = 1
    gender = None
    name_pool = "common"

    i = 0
    while i < len(args):
        if args[i] == "--count" and i + 1 < len(args):
            count = int(args[i + 1])
            i += 2
        elif args[i] == "--gender" and i + 1 < len(args):
            gender = args[i + 1].lower()
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
        generate_npc(gender, name_pool)


if __name__ == "__main__":
    main()
