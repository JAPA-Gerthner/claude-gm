# GM Skill — Text-based RPG for Claude Code

Rules and commands for playing text-based RPG with Claude as Game Master.

**Session language:** Russian
**Storage language:** English (for token efficiency)

## Structure

```
gm-skill/
├── gm-skill.md              # Core GM rules
├── feedback-reviewer.md     # Feedback analysis with 5-agent panel
├── ruleset-designer.md      # Ruleset development pipeline
├── rulesets/
│   ├── drafts/              # Work-in-progress rulesets
│   ├── sengoku.md           # Warring States Japan (honor, stance combat)
│   ├── sanguo.md            # Three Kingdoms China (virtue, strategy)
│   ├── battletech-commander.md  # Mech mercenary company
│   ├── vtm.md               # Vampire: The Masquerade
│   ├── warhammer-fantasy.md # Old World (corruption, Chaos, factions)
│   ├── warhammer-40k.md     # Grimdark far future (Imperium, Chaos, Xenos)
│   ├── cursed-seas.md       # Golden Age of Piracy (fantasy)
│   ├── witcher.md           # Monster Hunters (Sapkowski + CDPR)
│   ├── cyberpunk-red.md     # Dark Future (R. Talsorian 2020/RED/2077)
│   ├── shadowrun-lite.md    # Magic + Cyber + Corps (Simplified Shadowrun)
│   ├── frostpunk.md         # Frozen Steampunk Survival (City as Entity)
│   ├── blades-lite.md       # Haunted Industrial Heists (Doskvol)
│   ├── deus-ex.md           # Conspiracy Thriller (Paranoia, Augmentation)
│   ├── scp.md               # Bureaucratic Horror (Foundation, Containment)
│   ├── cascade.md           # Cinematic Dieselpunk (Post-Signal, Adrenaline)
│   ├── cthulhu.md           # Cosmic Horror (Three Axes, Deception Budget)
│   ├── disco-elysium.md     # Skills as Inner Voices (Thought Cabinet, Ideology)
│   ├── persona.md           # School Life meets Shadow World (Arcana Loyalty, Ally Death)
│   └── runeterra.md         # League of Legends (Power Tier, 15 Magic Traditions)
├── .claude/
│   └── commands/
│       ├── rp.md            # Main /rp command
│       └── rp/              # Subcommands
│           ├── sheet.md
│           ├── npc.md
│           ├── factions.md
│           ├── chapter.md
│           ├── recap.md
│           ├── map.md
│           ├── save.md
│           ├── load.md
│           ├── saves.md
│           ├── save-delete.md
│           ├── gm.md
│           ├── fairplay.md
│           ├── feedback.md
│           └── help.md
├── feedback/                # Player feedback storage
├── saves/                   # Session saves
└── README.md
```

## Installation

```bash
git clone git@github.com:JAPA-Gerthner/claude-gm.git
```

Commands live in `.claude/commands/` — Claude Code picks them up automatically when you open the repo.

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
| `/rp:fairplay` | Audit GM decision for fiat vs honest play |
| `/rp:feedback` | Save feedback about session |
| `/rp:help` | Command reference |

## Mechanics

### Core (gm-skill.md)

- Margin-based rolls (5 outcomes: Crit.Fail / Fail / Partial / Success / Crit)
- DC scale: 5 / 8 / 12 / 16 / 20 / 24 / 28+
- Partial Success — fail-forward with complications
- Unified CLOCKS (Companion, Faction, Item, Location, Threat)
- TENSION METER — hidden pressure accumulator
- CUSTOM CONTENT — Buff+Debuff items, Quality Tiers
- Combat, magic, social, heroism

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

**cursed-seas.md** — Golden Age of Piracy (Fantasy):
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

**blades-lite.md** — Haunted Industrial Heists:
- Doskvol: eternal night, ghosts, lightning barriers
- Score Cycle: Freeplay → Score → Downtime
- Crew/Heat/Wanted mechanics, Stress/Trauma
- 7 Playbooks (Cutter, Hound, Leech, Lurk, Slide, Spider, Whisper)
- 6 Crew types (Assassins, Bravos, Cult, Hawkers, Shadows, Smugglers)
- Occult system: ghosts, demons, electroplasm, binding
- For: heists, gang warfare, occult mysteries, urban survival

**deus-ex.md** — Conspiracy Thriller:
- Era 2027-2052, nano-augmentation revolution
- Paranoia System: Trust Clocks, Suspicion, Chaos Principle
- Augmentation with Integration/Rejection mechanics
- Neuropozyne dependency, corporate factions
- 6 Roles (Agent, Hacker, Smuggler, Exec, Journalist, Mercenary)
- For: conspiracies, transhumanism, corporate espionage

**scp.md** — Bureaucratic Horror:
- Modern era, SCP Foundation personnel
- Usefulness vs Liability core system (corporate survival)
- Clearance levels, [REDACTED] mechanic
- Anomaly classification (Safe/Euclid/Keter), Hume levels
- Processing Clock, internal politics, O5 Council
- 6 Roles (D-Class, Researcher, Security, MTF, Site Staff, Ethics)
- For: containment operations, internal investigations, procedural horror

**cascade.md** — Cinematic Dieselpunk Action:
- Era 2024, 35 years after The Signal killed electronics
- Adrenaline system (action rewards momentum)
- 4 crystal colors, zone mechanics, chimera transformations
- 12 named corporations, stalker guilds, black markets
- 7 regions (Americas, Japan, Africa, Europe, Russia, Arabia, Pacific)
- 6 Roles (Driver, Stalker, Wrench, Gunhand, Face, Sawbones)
- For: road warriors, artifact hunters, dieselpunk action cinema

**cthulhu.md** — Cosmic Horror (Lovecraft):
- Era 1920s, New England (Arkham, Innsmouth, Dunwich, Kingsport)
- Three Axes system (Reality/Time/Identity) instead of Sanity
- GM Deception Budget, Mythos Knowledge anti-XP
- Tomes, Rituals, Cults (Dagon, Silver Twilight, Starry Wisdom)
- 9 End States (Devoured, Possessed, Institutionalized, etc.)
- 6 Roles (Investigator, Academic, Artist, Veteran, Occultist, Heir)
- For: epistemological horror, tragedy simulator, solo investigation

**disco-elysium.md** — Skills as Inner Voices (ZA/UM):
- Era post-revolution Revachol, Martinaise district
- 24 skills as arguing personalities in the detective's head
- Thought Cabinet internalization, 4-track Ideology system
- Copotype emerges from playstyle, Health/Morale dual death tracks
- No combat focus — investigation through dialogue and failure
- Session Zero awakening template, five-layer case structure
- For: political tragedy, internal conflict, amnesiac detective noir

**persona.md** — School Life meets Shadow World (Atlus Persona series):
- Modern Japan, high school setting with hidden supernatural layer
- Arcana Loyalty system with 5 Clusters (SPARK/BOND/ORDER/SHADOW/VOID)
- All actions use [ARCANA, STAT] format — combat, social, exploration
- Allies with permadeath, relationship maintenance required
- Time Pressure: 16 actions/week, Exam failures = Game Over
- Soul weapon with Arcana-based visuals, Essences (4 tattoo slots)
- Velvet Room as quest hub (Igor + generated Attendants)
- Shadow World procedural exploration with layer difficulty scaling
- For: JRPG drama, school life + dungeon crawling, identity themes

**runeterra.md** — League of Legends (All Regions):
- Power Tier system (Human/Hero/Legend), stat caps, ability unlocks
- 15 magic traditions with unique mechanics (Hextech, Void, Black Mist, etc.)
- Champion encounter rules (Legendary Actions, Resistance, Lair Actions)
- 4 Corruption clocks with staged effects and defined reduction
- 13 regions, 6 campaign frameworks, Timeline
- For: champion encounters, cross-regional adventure, rise to legend

**stalker.md** — Chernobyl Exclusion Zone (S.T.A.L.K.E.R. + Roadside Picnic):
- Era 2006-2026, Zone around Chernobyl NPP
- Emission Clock, Zombification Clock, Radiation tracking
- Anomalies (5 types) with artifact spawning system
- 10 Factions with reputation system (-3 to +5)
- Job Cycle (Acquisition → Travel → Execution → Extraction → Settlement)
- 4 Backgrounds (Ex-Military, Scientist, Criminal, Rookie)
- "Reach the Center" 20-session campaign
- For: artifact hunting, faction warfare, Zone survival, post-apocalyptic horror

**star-wars.md** — Galaxy Far Far Away (All Eras):
- Era selection: Old Republic, Clone Wars, Imperial, New Republic, Sequel
- Force Alignment spectrum (-10 Dark to +10 Light) with temptation mechanics
- Force Strain system, Lightsaber Forms (I-VII)
- 5 Campaign Frameworks (Rebel Cell, Smuggler, Bounty Hunter, Jedi/Sith, Mandalorian)
- 8 Roles with unique specials, GRIT system for non-Force users
- Vehicle combat with shields, system damage, boarding
- 12 species, factions with reputation, Imperial Heat clock
- For: rebellion, smuggling, Force drama, galactic adventure

**dark-souls.md** — Undead Curse and Pattern Mastery (DS1/DS2/DS3):
- Souls as dual currency (XP + money in one pool)
- Death Loop with Soul Echo retrieval mechanic
- Hollowing Track (CHA/WIS degradation → character loss)
- Telegraph System for boss fights (GM describes tell before resolution)
- Stamina system (every action costs, depletion = stagger)
- Phase-based bosses with momentum combat
- Weapon upgrades, infusion paths, status buildup (Bleed, Poison, Curse)
- 7 Covenants with rank rewards, Sin tracking
- For: brutal boss fights, earned victories, cryptic lore exploration

### Ruleset Tier List

Quality rating based on: unique mechanics, atmosphere tools, playability, depth vs complexity.

**S-Tier (Exemplary)**
| Ruleset | Why |
|---------|-----|
| sengoku | Perfect honor/stance/giri integration. Duel system is benchmark. |
| witcher | Hunt Cycle, Toxicity, bestiary with tactics. Preparation gameplay. |
| cursed-seas | Infamy, Curses, Ship Traits. Perfect atmosphere/mechanics balance. |
| frostpunk | "City as character". Hope/Discontent, Laws, two play modes. Design philosophy. |
| scp | Usefulness vs Liability — bureaucracy as horror. Processing Clock. Genius. |
| star-wars | Force Alignment + Temptation + Strain. Era selection. GRIT for non-Force balance. |
| dark-souls | Telegraph System + Hollowing Track. Kingdom/Boss/Enemy generators. Five campaign frameworks. Every cycle unique. |
| disco-elysium | 24 skills-as-inner-voices. Thought Cabinet / Ideology / Copotype interlock. 10 districts, case generators, replayable detective noir. |
| vtm | Beast Voice, Night Cycle, Arcade Disciplines (3 lvl), Masquerade Heat, global clans, 8 generators. |

**A-Tier (Strong)**
| Ruleset | Why |
|---------|-----|
| sanguo | 36 stratagems, brotherhood oaths. Duels slightly simpler than could be. |
| battletech | Company management, politics, contracts. Combat deliberately abstract. |
| warhammer-fantasy | Corruption, Winds of Magic, factions. Could be shorter. |
| warhammer-40k | Psychic Perils, Guard Orders. Too similar to Fantasy. |
| cyberpunk-red | Humanity/cyberpsychosis, Heat/Cred. Overloaded with reference data. |
| shadowrun-lite | Magic+Matrix+cyber in parallel. Trace Clock. |
| blades-lite | Stress/Trauma, Heat/Wanted, occult. Close to original. |
| deus-ex | Trust Clocks, Integration/Neuropozyne. Too many weapon tables. |
| cascade | GRIT + ADRENALINE cycle. Bloated auxiliary systems. |
| cthulhu | Three hidden axes, Deception Budget, flowcharts. High GM load. |
| stalker | Emission/Zombification Clocks, Radiation tracking. Thorough but not innovative. |
| persona | Arcana Loyalty + Clusters, Time Pressure, Ally permadeath. 1710 lines (overlong). |
| runeterra | Power Tier + 15 Magic Traditions + Champion Encounters. Comprehensive but no signature mechanic. 1760 lines. |

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

**Optimal ruleset size:** ~1000 lines (~6-8k tokens)
- Enough for complete mechanics, all factions, weapons, events
- Small rulesets (~500 lines) lack depth
- Large rulesets (1500+) waste context without benefit

Typical context usage:
- gm-skill.md: ~6k tokens
- Full ruleset (1000 lines): ~6-8k tokens
- Long campaign save (30h): ~15-20k tokens
- Total: ~15-17% of 200k context

## Commit Conventions

```
[core]    — Core GM system (gm-skill.md, .claude/commands/)
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
