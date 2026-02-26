# GM Skill — Text-based RPG for Claude Code

Rules and commands for playing text-based RPG with Claude as Game Master.

**Session language:** Russian
**Storage language:** English (for token efficiency)

## Structure

```
gm-skill/
├── gm-skill.md              # Core GM rules
├── rulesets/
│   ├── sengoku.md           # Warring States Japan (honor, stance combat)
│   ├── sanguo.md            # Three Kingdoms China (virtue, strategy)
│   ├── battletech-commander.md  # Mech mercenary company
│   ├── vtm.md               # Vampire: The Masquerade
│   ├── warhammer-fantasy.md # Old World (corruption, Chaos, factions)
│   ├── warhammer-40k.md     # Grimdark far future (Imperium, Chaos, Xenos)
│   └── china-1900-1952.md   # Warlords, Revolution, Survival
├── commands/
│   ├── rp.md                # Main /rp command
│   └── rp/                  # Subcommands
│       ├── sheet.md
│       ├── npc.md
│       ├── factions.md
│       ├── chapter.md
│       ├── recap.md
│       ├── map.md
│       ├── save.md
│       ├── load.md
│       ├── saves.md
│       ├── save-delete.md
│       ├── gm.md
│       └── help.md
├── saves/                   # Session saves
├── setup.sh                 # Installation
└── README.md
```

## Installation

```bash
git clone git@github.com:JAPA-Gerthner/claude-gm.git
cd claude-gm
./setup.sh
```

### What setup does

1. Copies commands to `~/.claude/commands/`
2. Auto-substitutes repository path in commands
3. Creates `saves/` folder

Clone repo anywhere — setup will pick up correct path.

## Commands

| Command | Description |
|---------|-------------|
| `/rp` | Start new session |
| `/rp:sheet` | Character, inventory, party, position |
| `/rp:npc` | All known NPCs |
| `/rp:factions` | Factions and their clocks |
| `/rp:chapter` | Current mission progress |
| `/rp:recap` | Brief session summary |
| `/rp:map` | Known locations and travel options |
| `/rp:save` | Save session |
| `/rp:load [name]` | Load session |
| `/rp:saves` | List saves |
| `/rp:save-delete [name]` | Delete save |
| `/rp:gm [topic]` | Talk to GM outside roleplay |
| `/rp:help` | Command reference |

## Mechanics

### Core (gm-skill.md)

- Attributes (STR, DEX, CON, INT, WIS, CHA)
- d20 rolls with DC gradations
- Combat, magic, social
- Ally and faction clocks
- Heroism system
- Chapter end and leveling

### Rulesets (rulesets/)

Complete setting packs — pick one at session start.

**sengoku.md** — Warring States Japan:
- Honor as social capital (0-10 scale)
- 5-stance tactical combat system
- Retainers, rivals, clans, giri obligations
- For: samurai drama, ronin noir

**sanguo.md** — Three Kingdoms China:
- Virtue system (Ren, Yi, Zhi, Xin, Yong)
- Wuxia martial arts
- Officer relationships, faction wars
- For: Romance of Three Kingdoms

**battletech-commander.md** — Mercenary company:
- Mech contracts and salvage
- Pilot loyalty and death mechanics
- Great House politics
- For: narrative BattleTech, management + story

**vtm.md** — Vampire: The Masquerade:
- Hunger and feeding
- Humanity and the Beast
- Disciplines by clan
- For: urban horror, intrigue

**warhammer-fantasy.md** — The Old World:
- Corruption and Chaos system
- All factions (Empire to Cathay)
- Winds of Magic, miscasts
- Faction relations
- For: grim dark fantasy, Chaos incursions

**warhammer-40k.md** — Grim Darkness of the Far Future:
- All Imperial factions (Guard, Marines, Sisters, Mechanicus, Inquisition)
- Chaos Gods, Favor system, corruption
- Xenos (Eldar with Spirit Stones, Orks, Tau, Necrons)
- Psychic powers with Perils, weapon stats
- For: military campaigns, Inquisitorial investigations, heresy

**china-1900-1952.md** — Warlords, Revolution, Survival:
- 52 years: Boxer Rebellion → Warlord Era → Japanese Invasion → Civil War
- All factions grey (Qing, Warlords, KMT, CCP, Japan)
- Loyalty, Ideology, Survival, Reputation mechanics
- Hyperinflation economics, HOI4 approach to atrocities
- For: soldiers, spies, refugees, revolutionaries

## Saves

Saves stored in `saves/[name].md` inside repo.

Sync via git:
```bash
git add saves/
git commit -m "Save: campaign-name"
git push
```

Save format includes:
- Character and inventory
- Campaign chronicle (full history)
- NPC history (character development)
- Allies and factions
- World state and quests
- Custom mechanics (full rules)

No hard size limit — save as much as needed for full restore.

## Token Efficiency

All rulesets stored in English (~30-50% fewer tokens than Russian).
Session plays in Russian — language note in each file.

**Optimal ruleset size:** ~1000 lines (~6-8k tokens)
- Enough for complete mechanics, all factions, weapons, events
- Small rulesets (~500 lines) lack depth
- Large rulesets (1500+) waste context without benefit

Typical context usage:
- gm-skill.md: ~4.5k tokens
- Full ruleset (1000 lines): ~6-8k tokens
- Long campaign save (30h): ~15-20k tokens
- Total: ~15-17% of 200k context

## Commit Conventions

```
[core]    — Core GM system (gm-skill.md, commands/)
[ruleset] — Update existing ruleset
[new]     — Add new ruleset
[fix]     — Bug fixes
[docs]    — Documentation only
[save]    — Session saves
```

Examples:
```
[core] Add new mechanic to gm-skill.md
[ruleset] Expand warhammer-fantasy (combat, NPCs, fate system)
[new] China 1900-1952: Warlords, Revolution, Survival
[fix] Correct faction clock math in sengoku.md
[docs] Update README with new commands
[save] Campaign: The Long March session 5
```
