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
│   ├── china-1900-1952.md   # Warlords, Revolution, Survival
│   ├── pirates.md           # Golden Age of Piracy (fantasy)
│   ├── witcher.md           # Monster Hunters (Sapkowski + CDPR)
│   ├── cyberpunk-red.md     # Dark Future (R. Talsorian 2020/RED/2077)
│   ├── shadowrun-lite.md    # Magic + Cyber + Corps (Simplified Shadowrun)
│   └── frostpunk.md         # Frozen Steampunk Survival (City as Entity)
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

**pirates.md** — Golden Age of Piracy (Fantasy):
- Era 1650-1730, high magic, world travel
- Ship mechanics, naval combat, boarding
- Infamy, Pirate Code, Curses system
- Bestiary (Kraken, Sirens, Davy Jones, Dragon Turtles)
- Voodoo/sea magic rituals
- For: treasure hunts, revenge, fleet building, freedom fights

**witcher.md** — Monster Hunters (Sapkowski + CDPR):
- Era 1200s-1268, before and during Northern Wars
- 6 Witcher Schools (Wolf, Cat, Griffin, Bear, Viper, Manticore)
- Signs magic system, Toxicity, alchemy
- Full bestiary (50+ monsters with tactics)
- Hunt cycle mechanics, moral dilemmas
- For: monster contracts, grim moral choices, lesser evil

**cyberpunk-red.md** — Dark Future (R. Talsorian):
- Era 2045-2077, Time of the Red to Reunification
- 10 Roles (Solo, Netrunner, Tech, Medtech, Media, Exec, Lawman, Fixer, Nomad, Rockerboy)
- Humanity/Cyberpsychosis system, cyberware tables
- Quick-Jack Netrunning (same initiative as meat combat)
- Night City districts, Megacorps, Gangs
- Gig cycle, Street Cred, Heat mechanics
- For: edgerunner mercs, corporate espionage, gang wars

**shadowrun-lite.md** — Magic + Cyber + Corps:
- Era 2070-2080, Sixth World
- 8 Archetypes (Street Sam, Decker, Mage, Shaman, Rigger, Face, Adept, Technomancer)
- Essence/Magic system, 5 metatypes (Human, Elf, Dwarf, Ork, Troll)
- Quick-Jack Matrix with Trace Clock
- Seattle sprawl, Megacorps, Criminal Syndicates, Gangs
- Run Cycle, Street Cred, Heat mechanics
- For: shadowrunners, corporate espionage, magic + chrome

**frostpunk.md** — Frozen Steampunk Survival:
- Era 1886-1888, alternate volcanic winter
- City as Entity (Population, Hope, Discontent, Resources)
- Temperature Clock, Generator mechanics
- Two play modes: City Management + Individual (Expeditions)
- Laws system: Order vs Faith paths
- Two-mode play: Zoom out (city) or zoom in (scout teams)
- For: survival management, moral dilemmas, desperate choices

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
