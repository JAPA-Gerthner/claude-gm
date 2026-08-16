# GM Skill — Text-based RPG for Claude Code

Rules and commands for playing text-based RPG with Claude as Game Master.

**Session language:** Russian
**Storage language:** English (for token efficiency)

## Structure

```
claude-gm/
├── gm-skill.md              # Core GM rules
├── feedback-reviewer.md     # Feedback analysis with 5-agent panel
├── ruleset-designer.md      # Ruleset development pipeline
├── scripts/
│   ├── roll.py              # Dice roller (d20, adv/dis, DC, margin, stunt, quality)
│   ├── combat.py            # Batch attack resolver (initiative, damage, HTK)
├── rulesets/
│   ├── INDEX.md             # One-line index of all rulesets
│   ├── battletech.md        # MechWarrior Feudal Drama
│   ├── blades-lite.md       # Haunted Industrial Heists
│   ├── cthulhu.md           # Cosmic Horror
│   ├── cursed-seas.md       # Golden Age of Piracy
│   ├── cyberpunk-red.md     # Dark Future
│   ├── dark-souls.md        # Undead Curse and Pattern Mastery
│   ├── deadlands.md         # Horror-Western
│   ├── deus-ex.md           # Conspiracy Thriller
│   ├── disco-elysium.md     # Skills as Inner Voices
│   ├── exalted.md           # Demigods Reborn
│   ├── harry-potter.md      # Wizarding World
│   ├── persona.md           # School Life meets Shadow World
│   ├── runeterra.md         # League of Legends
│   ├── sanguo.md            # Three Kingdoms China
│   ├── scp.md               # Bureaucratic Horror
│   ├── sengoku.md           # Warring States Japan
│   ├── shadowrun-lite.md    # Magic + Cyber + Corps
│   ├── stalker.md           # Chernobyl Exclusion Zone
│   ├── star-wars.md         # Galaxy Far Far Away
│   ├── vtm.md               # Vampire: The Masquerade
│   ├── warhammer-40k.md     # Grimdark far future
│   ├── warhammer-fantasy.md # IRON LAW: Old World
│   ├── witcher.md           # Monster Hunters
│   └── xianxia.md           # Path of Immortality
├── .claude/
│   └── commands/
│       └── rp/              # Slash commands
│           ├── start.md     # /rp:start — begin session
│           ├── sheet.md     # /rp:sheet
│           ├── npc.md       # /rp:npc
│           ├── factions.md  # /rp:factions
│           ├── chapter.md   # /rp:chapter
│           ├── recap.md     # /rp:recap
│           ├── map.md       # /rp:map
│           ├── save.md      # /rp:save
│           ├── load.md      # /rp:load
│           ├── saves.md     # /rp:saves
│           ├── save-delete.md # /rp:save-delete
│           ├── gm.md        # /rp:gm
│           ├── fairplay.md  # /rp:fairplay
│           ├── feedback.md  # /rp:feedback
│           └── help.md      # /rp:help
├── saves/                   # Session saves
└── feedback/                # Player feedback storage
```

## Installation

```bash
git clone git@github.com:JAPA-Gerthner/claude-gm.git
```

Commands live in `.claude/commands/` — Claude Code picks them up automatically when you open the repo.

## Commands

| Command | Description |
|---------|-------------|
| `/rp:start` | Start new session |
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
| `/rp:fairplay` | Audit GM decision for fiat vs honest play |
| `/rp:feedback` | Save feedback about session |
| `/rp:help` | Command reference |

## Mechanics

### Core (gm-skill.md)

- Margin-based rolls (5 outcomes: Crit.Fail / Fail / Partial / Success / Crit)
- DC scale: 5 / 8 / 12 / 16 / 20 / 24 / 28+
- Partial Success — fail-forward with complications
- Unified CLOCKS (Companion, Faction, Item, Location, Threat)
- Stat thresholds at 4/6/8/10 — fixed abilities per stat
- Heroism — reward for consistent roleplay, doubles all rolls for one prompt
- CUSTOM CONTENT — Buff+Debuff items, Quality Tiers
- Devil's Bargain — advantage + guaranteed complication
- Combat, magic, social, death saves

### Scripts (scripts/)

Real randomness via Python:

```bash
python scripts/roll.py d20 --mod 3 --dc 12              # d20+3 vs DC 12
python scripts/roll.py d20 --adv --mod 4 --dc 14         # advantage
python scripts/roll.py d20 --trickster --mod 3 --dc 12   # WIS 4 perk: chaos ±2
python scripts/roll.py d20 --volatility 2 --mod 3 --dc 14  # ruleset ★★: chaos ±2
python scripts/roll.py d20 --volatility 3 --trickster --mod 4 --dc 16  # stacked: ±5!
python scripts/roll.py --quality                          # item quality tier
python scripts/combat.py --attacks "PC:STR3:AC12, NPC:DEX2:AC13" --damage d8
python scripts/combat.py --initiative "PC:DEX2, NPC:DEX4"
```

### Rulesets (rulesets/)

26 complete setting packs — pick one at session start.

**battletech.md** — MechWarrior Feudal Drama:
- The Sync (mech-pilot bond 0-10), Ghost Sync, phantom pain
- Honor (faction-specific codes with Paradoxes)
- Heat Clock, 5 Great Houses + Clans, Solaris VII
- Intrigue (Favor/Nemesis/Contracts/Marriage/HPG)
- For: Game of Thrones with giant robots

**blades-lite.md** — Haunted Industrial Heists:
- Doskvol: eternal night, ghosts, lightning barriers
- Score Cycle: Freeplay → Score → Downtime
- Crew/Heat/Wanted mechanics, Stress/Trauma
- 7 Playbooks, 6 Crew types, Occult system
- For: heists, gang warfare, occult mysteries

**cthulhu.md** — Cosmic Horror (Lovecraft):
- Three Axes system (Reality/Time/Identity) instead of Sanity
- GM Deception Budget, Mythos Knowledge anti-XP
- 9 End States, 6 Roles
- For: epistemological horror, tragedy simulator

**cursed-seas.md** — Golden Age of Piracy (Fantasy):
- The Debt (sea keeps score), Voyage Cycle, Ship Traits
- Ship mechanics, naval combat, boarding
- Infamy, Pirate Code, Curses, Bestiary, Voodoo
- For: treasure hunts, revenge, fleet building

**cyberpunk-red.md** — Dark Future (R. Talsorian):
- 10 Roles, Humanity/Cyberpsychosis
- Quick-Jack Netrunning, Night City
- Gig cycle, Street Cred, Heat mechanics
- For: edgerunner mercs, corporate espionage

**dark-souls.md** — Undead Curse and Pattern Mastery:
- Telegraph System (GM describes tell before attack)
- Death Loop, Soul Echo, Hollowing Track
- Stamina, phase bosses, weapon upgrades, 7 Covenants
- For: brutal boss fights, earned victories

**deadlands.md** — Horror-Western (Pinnacle Deadlands):
- The Deal: every supernatural power feeds the Reckoners
- Fear Level (0-6 regional), Dominion (Harrowed demon struggle)
- 5 Arcane Backgrounds (Huckster/Blessed/Harrowed/Mad Scientist/Shaman)
- Western Showdown (Staredown/Draw/Aftermath), Grit
- For: horror-western, frontier lawman, Harrowed redemption

**deus-ex.md** — Conspiracy Thriller:
- Paranoia System: Trust Clocks, Suspicion, Chaos Principle
- Augmentation, Integration/Neuropozyne, 6 Roles
- For: conspiracies, transhumanism

**disco-elysium.md** — Skills as Inner Voices (ZA/UM):
- 24 skills as arguing personalities in the detective's head
- Thought Cabinet, Ideology, Copotype, Health/Morale dual tracks
- Five-layer case structure, Session Zero awakening
- For: political tragedy, amnesiac detective noir

**exalted.md** — Demigods Reborn (White Wolf Exalted):
- Stunt System: ★/★★/★★★ chaos modifier (--stunt 1/2/3, random -N..+N)
- Essence 1-10 power scale, Charms, 3 Sorcery circles
- Great Curse: Limit 0-10, Virtue Flaws, Limit Break
- 6 Exalt Types (Solar/Lunar/Dragon-Blooded/Sidereal/Abyssal/Infernal)
- For: mythic demigod drama, nation-building, tragic power fantasy

**harry-potter.md** — Wizarding World:
- The Descent (dark temptation 0-10, Stain mechanic)
- Bonds (love as power, rate-limited)
- 4 Houses (rebalanced), Unforgivable Curses, 7 Heritage options
- For: school drama, Auror campaign, Order resistance

**persona.md** — School Life meets Shadow World (Atlus):
- Arcana Loyalty with 5 Clusters, [ARCANA, STAT] format
- Allies with permadeath, Time Pressure (16 actions/week)
- Shadow World procedural exploration, Velvet Room hub
- For: JRPG drama, school life + dungeon crawling

**runeterra.md** — League of Legends (All Regions):
- Power Tier (Human/Hero/Legend), 15 Magic Traditions
- Champion Encounters (Legendary Actions), 13 Regions
- For: champion encounters, cross-regional adventure

**sanguo.md** — Three Kingdoms China:
- Virtue system (Ren/Yi/Zhi/Xin/Yong), 36 stratagems
- Wuxia martial arts, brotherhood oaths
- For: Romance of Three Kingdoms

**scp.md** — Bureaucratic Horror:
- Usefulness vs Liability (corporate survival)
- Processing Clock, Hume Levels, O5 Council
- Clearance levels, [REDACTED] mechanic, 6 Roles
- For: containment operations, procedural horror

**sengoku.md** — Warring States Japan:
- Honor as social capital (0-10)
- 5-stance tactical combat, giri obligations
- Retainers, rivals, clans
- For: samurai drama, ronin noir

**shadowrun-lite.md** — Magic + Cyber + Corps:
- 8 Archetypes, Essence/Magic system, 5 metatypes
- Quick-Jack Matrix with Trace Clock
- For: shadowrunners, corporate espionage

**stalker.md** — Chernobyl Exclusion Zone (S.T.A.L.K.E.R.):
- Emission Clock, Zombification Clock, Radiation tracking
- 10 Factions, Job Cycle, "Reach the Center" 20-session campaign
- For: artifact hunting, Zone survival

**star-wars.md** — Galaxy Far Far Away (All Eras):
- Force Alignment (-10 to +10), Temptation, Strain
- 5 Campaign Frameworks, GRIT for non-Force users
- Lightsaber Forms, Vehicle combat
- For: rebellion, smuggling, Force drama

**vtm.md** — Vampire: The Masquerade:
- Three Currencies (Hunger/Humanity/Willpower), Push
- Beast Voice × Humanity matrix, Night Cycle
- Arcade Disciplines, 8 generators
- For: urban horror, political intrigue

**warhammer-fantasy.md** — IRON LAW (The Old World):
- Three Forces (Order/Corruption/Decay), Push
- Condition/HP bridge, Faction Drift
- Fate/Fortune, Marks & Disorders, Winds of Magic
- For: grim dark fantasy, transformation drama

**warhammer-40k.md** — Grimdark Far Future:
- IRON WILL: Control/Warp/Entropy (all hostile)
- Scar System, Mission Cycle, Rank
- For: military campaigns, Inquisitorial investigations

**witcher.md** — Monster Hunters (Sapkowski + CDPR):
- The Path + Lesser Evil, Hunt Cycle
- 6 Schools, Signs, Toxicity, alchemy
- For: monster contracts, grim moral choices

**xianxia.md** — Path of Immortality:
- Three-clock engine (Cultivation/Deviation/Dao Heart)
- Tribulations at 3/6/9/10, Karma, Five Elements cycles
- 7 Paths, Sects, Jianghu Rules, Secret Realms
- For: cultivation fantasy, sect politics, ascension

### Ruleset Tier List

Quality rating based on: unique mechanics, central pressure, internal coherence, atmosphere tools, playability, depth vs complexity.

**S-Tier (Exemplary)**
| Ruleset | Why |
|---------|-----|
| sengoku | Perfect honor/stance/giri integration. Duel system is benchmark. |
| harry-potter | The Descent encodes "darkness seduces through efficacy, love redeems through sacrifice." Interlocking Bond/Patronus/Unforgivable systems. |
| battletech | The Sync fuses pilot identity with mech combat while faction-specific honor codes deliver "Game of Thrones with giant robots" across political, martial, and personal dimensions. |
| xianxia | Three-clock engine (Cultivation/Deviation/Dao Heart) transforms xianxia's core tensions into interlocking mechanical dials that generate emergent cultivation stories. |
| scp | Usefulness vs Liability — bureaucracy as horror. Processing Clock. Genius. |
| star-wars | Force Alignment + Temptation + Strain. Era selection. GRIT for non-Force balance. |
| dark-souls | Telegraph System + Hollowing Track. Kingdom/Boss/Enemy generators. Five campaign frameworks. Every cycle unique. |
| disco-elysium | 24 skills-as-inner-voices. Thought Cabinet / Ideology / Copotype interlock. 10 districts, case generators, replayable detective noir. |
| vtm | Three Currencies (Hunger/Humanity/Willpower), Push, Beast Voice × Humanity matrix, Night Cycle, 8 generators. |
| warhammer-fantasy | IRON LAW. Three Forces (Order/Corruption/Decay), Push, Condition/HP bridge, Drift, Path of Blood/Hunger. |
| warhammer-40k | IRON WILL. Control/Warp/Entropy (all hostile), Scar System, Mission Cycle, Rank, 8-15 session lifespan. |
| deadlands | The Deal — every power feeds the Reckoners you fight; Fear/Dominion/Backlash clocks create inescapable Faustian tension across five arcane traditions. |
| exalted | The Stunt/Mote/Limit triangle — audacity fuels power fuels madness — with six mechanically distinct Exalt types and the Great Curse as inescapable central pressure engine. |

**A-Tier (Strong)**
| Ruleset | Why |
|---------|-----|
| witcher | The Path + Lesser Evil as structural mechanic. Hunt Cycle, Toxicity, bestiary. S-tier core, Factions need mechanization. |
| cursed-seas | The Debt (sea keeps score), Voyage Cycle, Ship Traits. S-tier core, tone presets need mechanical teeth. |
| stalker | The Call (Zone addiction 0-10), Withdrawal, Emission/Zombification Clocks. S-tier core, tracking overhead. |
| sanguo | 36 stratagems, brotherhood oaths. Duels slightly simpler than could be. |
| cyberpunk-red | Humanity/cyberpsychosis, Heat/Cred. Overloaded with reference data. |
| shadowrun-lite | Magic+Matrix+cyber in parallel. Trace Clock. |
| blades-lite | Stress/Trauma, Heat/Wanted, occult. Close to original. |
| deus-ex | Trust Clocks, Integration/Neuropozyne. Too many weapon tables. |
| cthulhu | Three hidden axes, Deception Budget, flowcharts. High GM load. |
| persona | Arcana Loyalty + Clusters, Time Pressure, Ally permadeath. |
| runeterra | Power Tier + 15 Magic Traditions + Champion Encounters. Comprehensive but no signature mechanic. |

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

## Feedback

Collect and analyze player feedback systematically.

**Saving feedback:**
- Use `/rp:feedback` during or after session
- Feedback saved to `feedback/[date]-[topic].md`
- Auto-captures context (scene, ruleset, recent rolls)

**Reviewing feedback:**
- Run `feedback-reviewer.md` when you have 5-10 items
- Launches 5 expert agents in parallel:
  - Mechanics Expert
  - Pacing Expert
  - Narrative Expert
  - UX Expert
  - Devil's Advocate
- Produces consensus verdict: Fix / Don't Fix / Investigate / Subjective
- Outputs specific action items with file paths

## Token Efficiency

All rulesets stored in English (~30-50% fewer tokens than Russian).
Session plays in Russian — language note in each file.

**Optimal ruleset size:** 1500-2000 lines (~10-14k tokens)
- Full depth: complete mechanics, factions, generators, signature systems
- Small rulesets (~500 lines) lack depth
- Over 2000 lines: diminishing returns, look for cuts

Typical context usage (1M context):
- gm-skill.md: ~6k tokens
- Full ruleset (1500-2000 lines): ~10-14k tokens
- Long campaign save (30h): ~15-20k tokens
- Total: ~3-4% of 1M context

## Commit Conventions

```
[core]     — Core GM system (gm-skill.md, scripts/, .claude/commands/)
[rulesets] — New or updated rulesets
[fix]      — Bug fixes
[docs]     — Documentation only
[save]     — Session saves
```
