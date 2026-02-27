# FROSTPUNK

Frozen steampunk survival. City is the character. Community over individual.
For: city management, survival drama, moral dilemmas, expedition adventures.

**Session language:** Russian
**Key insight:** City = ONE ENTITY with stats. No need to simulate every citizen — "the city must survive" closes context limitations BY DESIGN.

---

## SETTING OVERVIEW

### Era and Premise
- Alternate 1886-1888. Volcanic winter. Sun dims. Temperature plummets.
- British Empire remnants flee to prepared Generator sites in the Frostlands.
- Each Generator sustains 50-600 people. Most die within weeks.
- Survivors face impossible choices: humanity vs survival.

### Themes
- Community vs Individual (the city always comes first)
- Order vs Faith (two paths to control)
- Hope vs Despair (emotional economy)
- Warmth vs Cold (the eternal struggle)
- The Question: "The city survived. But was it worth it?"

### Technology Level
- Steam-powered everything (Generator, automatons, prosthetics)
- Coal as lifeblood (no coal = death)
- Experimental tech: Tesla-style generators, mechanical limbs, flying scouts
- No gunpowder weapons — too cold, unreliable ignition
- Melee, crossbows, steam-powered tools

### Timeline
| Date | Event |
|------|-------|
| 1882 | First frost anomalies. Scientists warn of cooling |
| 1883 | Krakatoa eruption amplifies volcanic winter |
| 1884 | European crops fail. Mass starvation begins |
| 1885 | Generator Project initiated. Sites prepared in Arctic |
| 1886 | Great Exodus. Millions flee north with generators |
| 1886-87 | The Long Dark. Most die. Few settlements survive |
| 1887 | Temperature stabilizes at -40°C. Survivors adapt |
| 1888 | The Great Storm approaches (campaign climax) |

### Old World Echoes
- **British Empire:** Primary source of refugees and technology
- **London:** Frozen solid. Population dead. Last ships departed October 1886. No return possible.
- **Other Powers:** Rumors of French and German Generators. American colonies may have fled south. No confirmed contact.
- **Class System:** Nobility lost privilege; skill and will matter now
- **Religion:** Traditional faith vs New Faith (survival cults)
- **Knowledge:** Engineers are the new priests; books are treasures

---

## THE GENERATOR

### Generator Stats
Central entity. If Generator dies, everyone dies.

| Stat | Range | Description |
|------|-------|-------------|
| Power Level | 0-4 | Heat output (0=off, 4=overdrive) |
| Efficiency | 0-100% | Coal consumption rate |
| Structural Integrity | 0-100% | Damage from overuse/sabotage |
| Coal Reserve | Units | Daily consumption = Power Level × 10 |

### Power Levels
| Level | Temperature Bonus | Coal/Day | Risk |
|-------|-------------------|----------|------|
| 0 | +0°C | 0 | City freezes |
| 1 | +10°C | 10 | Minimal heat |
| 2 | +20°C | 20 | Comfortable |
| 3 | +30°C | 30 | Warm, wasteful |
| 4 (Overdrive) | +40°C | 50 | 10% integrity loss/day |

### Generator Events (d6 when stressed)
1. Minor malfunction — 1 day repair
2. Efficiency drop — -20% until fixed
3. Coal surge — double consumption today
4. Heat fluctuation — random zone goes cold
5. Structural damage — -10% integrity
6. Critical failure — Generator offline 1d4 hours

### Generator Repair (Individual Mode)
When Generator fails, engineers must fix it.

| Problem | INT Check DC | Time | Materials |
|---------|--------------|------|-----------|
| Minor malfunction | 10 | 4 hours | None |
| Efficiency drop | 12 | 8 hours | 5 steel |
| Heat fluctuation | 14 | 2 hours | None |
| Structural damage | 16 | 1 day | 20 steel |
| Critical failure | 18 | 2 hours | 10 steel |

Failure on repair check: +2 hours, can retry.
Critical failure (nat 1): Additional -5% integrity.
Critical success (nat 20): Half time, no materials needed.

---

## CITY AS ENTITY

### City Stats
The city is a CHARACTER with its own sheet.

| Stat | Range | Description |
|------|-------|-------------|
| Population | Number | Living citizens |
| Hope | 0-100 | Collective morale. 0 = exodus/rebellion |
| Discontent | 0-100 | Anger level. 100 = overthrow/riot |
| Sickness | Number | Citizens currently ill |
| Graves | Number | Total dead (affects Hope) |

### Population Tiers
| Population | City Type | Complexity |
|------------|-----------|------------|
| 50-100 | Outpost | Simple decisions |
| 100-250 | Settlement | Faction tensions |
| 250-400 | Small City | Political intrigue |
| 400-600 | Large City | Full management |
| 600+ | Metropolis | Epic scale |

### Hope Triggers
| Event | Hope Change |
|-------|-------------|
| Food rations increased | +5 |
| Sick healed | +2 per person |
| Law passed (good) | +5 to +10 |
| Expedition returns with survivors | +10 |
| Generator stable through storm | +5 |
| Child born | +3 |
| Death | -2 per person |
| Food shortage | -5 |
| Law passed (harsh) | -5 to -10 |
| Failed expedition (all dead) | -15 |
| Cannibalism discovered | -20 |

### Discontent Triggers
| Event | Discontent Change |
|-------|-------------------|
| Extended shift forced | +5 |
| Rations cut | +10 |
| Citizen executed | +5 to +15 |
| Unfair law | +10 |
| Propaganda | -5 |
| Public punishment | -5 (but +5 if unjust) |
| Festival/ceremony | -10 |
| Leader admits mistake | -5 |

### Crisis Thresholds
| Condition | Effect |
|-----------|--------|
| Hope < 20 | Daily exodus risk (d20, 15+ = families leave) |
| Hope = 0 | Mass exodus or leadership challenge |
| Discontent > 80 | Protests, work stoppages |
| Discontent = 100 | Riot or coup attempt |

---

## RESOURCES

### Core Resources
| Resource | Unit | Daily Need | Source |
|----------|------|------------|--------|
| Coal | Tons | Power Level × 10 | Mines, piles, expeditions |
| Food | Rations | Population × 1 | Hunters, hothouses, expeditions |
| Wood | Units | Variable | Sawmills, expeditions |
| Steel | Units | Variable | Steelworks, expeditions |
| Steam Cores | Rare | — | Expeditions only |

### Resource Scarcity Effects
| Shortage | Effect |
|----------|--------|
| Coal (0) | Generator dies in 1 day |
| Food (< 50%) | Sickness +10%, Discontent +10 |
| Food (0) | Starvation deaths (10%/day), Hope -20 |
| Wood (0) | No construction |
| Steel (0) | No advanced buildings |
| Steam Cores (0) | No automatons/advanced tech |

### Ration Levels
| Level | Food/Person | Effect |
|-------|-------------|--------|
| Full | 1 | Normal |
| Reduced | 0.5 | Discontent +5, Sickness +5% |
| Emergency | 0.25 | Discontent +15, Sickness +15% |
| Starvation | 0 | Deaths begin |

---

## TEMPERATURE SYSTEM

### Temperature Clock
Central mechanic. Everything revolves around cold.

| Temperature | Zone Status | Effects |
|-------------|-------------|---------|
| -20°C | Comfortable | Normal operations |
| -30°C | Chilly | +5% sickness risk |
| -40°C | Cold | +15% sickness, work slowdown |
| -50°C | Freezing | +30% sickness, frostbite risk |
| -60°C | Deadly | Outdoor work impossible, deaths |
| -70°C | Extinction | Even heated buildings dangerous |
| -80°C and below | The Great Storm | Total crisis |

### Heat Zones
Buildings have heat levels based on distance from Generator.

| Zone | Distance | Base Temp Modifier |
|------|----------|-------------------|
| Core | Adjacent to Generator | +Generator bonus |
| Inner | 1 ring out | +Generator bonus -10°C |
| Middle | 2 rings out | +Generator bonus -20°C |
| Outer | 3+ rings out | +Generator bonus -30°C |

### Heating Sources
| Source | Bonus | Requirement |
|--------|-------|-------------|
| Steam Hub | +15°C to zone | Coal, steel |
| Heater in building | +10°C | Coal (small) |
| Brazier | +5°C (outdoor) | Wood |
| Body heat (crowding) | +5°C | 150%+ capacity |

### Frostbite and Death
| Condition | Trigger | Effect |
|-----------|---------|--------|
| Mild frostbite | 4+ hours in Freezing (-50°C) | -1 to physical tasks |
| Severe frostbite | 8+ hours in Freezing | Amputation risk (CON save DC 15) |
| Hypothermia | 2+ hours in Deadly (-60°C) | Death without rescue |
| Frozen solid | 30 min in Extinction (-70°C+) | Instant death |

### Deadly Zone (-60°C) Mechanics
Unprotected outdoor work at -60°C:
- **Hour 1:** CON save DC 15. Failure = frostbite.
- **Hour 2:** CON save DC 18. Failure = hypothermia (death in 2 hours).
- **Hour 3+:** Automatic hypothermia. Death without rescue.
- **City Mode:** 5% of outdoor workers develop frostbite per day at -60°C. 2% die.

At -70°C (Extinction): Even heated buildings require CON save DC 12 every 4 hours. Outdoor = instant frostbite, death in 1 hour.

---

## BUILDINGS

### Essential Buildings
| Building | Cost | Effect |
|----------|------|--------|
| Tent | 10 wood | Houses 10, no heating |
| Bunkhouse | 25 wood | Houses 20, minimal heating |
| House | 40 wood, 10 steel | Houses 10, good heating |
| Medical Post | 30 wood, 10 steel | Treats 10 sick |
| Infirmary | 50 wood, 30 steel, 1 core | Treats 30 sick |
| Cookhouse | 40 wood | Prepares food |
| Workshop | 30 wood, 15 steel | Enables construction |
| Beacon | 20 wood, 10 steel | Enables expeditions |

### Production Buildings
| Building | Cost | Output |
|----------|------|--------|
| Coal Mine | 50 wood, 30 steel | 50 coal/day |
| Coal Thumper | 30 wood, 20 steel, 1 core | 80 coal/day (needs gatherers) |
| Sawmill | 30 wood, 15 steel | 40 wood/day |
| Steelworks | 60 wood, 40 steel, 1 core | 30 steel/day |
| Hunter's Hut | 30 wood | 20 food/day |
| Hothouse | 40 wood, 30 steel, 1 core | 40 food/day (coal-heated) |

### Special Buildings
| Building | Cost | Effect |
|----------|------|--------|
| Watchtower | 20 wood, 10 steel | Early storm warning |
| Propaganda Center | 40 wood, 20 steel | -5 Discontent/day |
| Temple | 50 wood, 30 steel | +5 Hope/day (Faith) |
| Guard Tower | 30 wood, 20 steel | Enforce laws (Order) |
| Automaton Factory | 100 wood, 80 steel, 5 cores | Build automatons |

---

## AUTOMATONS

### Automaton Stats
Steam-powered mechanical workers. Tireless but expensive.

| Stat | Value |
|------|-------|
| Work Output | Equal to 5 workers |
| Coal Consumption | 5/day |
| Maintenance | 5 steel/week |
| Heat Immunity | Works in any temperature |
| Speed | 1 hex/day (expeditions) |

### Automaton Types
| Type | Cost | Function |
|------|------|----------|
| Worker | 3 cores, 50 steel | General labor |
| Medical | 4 cores, 60 steel | Assists doctors (+10 patients) |
| Scout | 4 cores, 40 steel | Expedition (slow but tireless) |
| Engineer | 5 cores, 70 steel | Construction boost |

### Automaton Issues (d6 monthly)
1. Oil freeze — offline 1 day
2. Gear strip — 10 steel repair
3. Boiler leak — reduced output 50%
4. Logic error — wanders off, rescue needed
5. Power surge — damages nearby building
6. Perfect function — no issues

### Automaton Ethics
- Workers fear replacement
- Engineers love them
- Faith sees them as soulless / blessed tools
- "Can a machine sin? Can it save us?"

---

## SICKNESS AND MEDICAL

### Sickness Mechanics
| Condition | Cause | Effect | Treatment |
|-----------|-------|--------|-----------|
| Frostbite | Cold exposure | -1 physical, amputation risk | Warmth, time |
| Hypothermia | Severe cold | Death in hours | Emergency heat |
| Coal Lung | Mine work | Chronic -1 CON | None (permanent) |
| Starvation | No food | -1 all stats/day | Food |
| Infection | Wounds, surgery | Fever, death risk | Medical post |
| Despair | Hope 0 | Suicide risk | Hope restoration |

### Medical Capacity
| Facility | Capacity | Healing Rate |
|----------|----------|--------------|
| None | 0 | Natural only (10%/week) |
| Medical Post | 10 | 30%/day |
| Infirmary | 30 | 50%/day |
| Infirmary + Automaton | 40 | 60%/day |

### Amputation Rules
When radical treatment is law:
- Frostbitten limbs removed (survival +80%)
- Prosthetics available (steam-powered)
- -1 to relevant stat permanently
- Psychological trauma (Hope -2 personal)

### Prosthetics
| Type | Cost | Effect |
|------|------|--------|
| Wooden Limb | 5 wood | Basic function, -1 stat |
| Steam Arm | 10 steel, 1 core | Full function, maintenance |
| Steam Leg | 15 steel, 1 core | Full function, maintenance |
| Mechanical Hand | 5 steel | Grip strength, no fine work |

### Mass Death Events
Mass death penalties REPLACE individual death penalties (no stacking).

| Deaths (single event) | Hope Change | Notes |
|-----------------------|-------------|-------|
| 1-5 | -5 total | Individual mourning |
| 6-15 | -10 total | Funeral decision needed |
| 16-30 | -20 total | Mass grave required |
| 30+ | -30 total (cap) | City trauma, maximum loss |

Daily Hope loss from deaths capped at -30 to prevent instant game over.

---

## LAWS SYSTEM

### Law Mechanics
Laws shape the city. Each law:
- Requires crisis or justification
- Has immediate effect
- May unlock further laws
- Affects Hope/Discontent
- Cannot be repealed

### Adaptation Laws (Neutral)
| Law | Effect | Cost |
|-----|--------|------|
| Emergency Shift | 24-hour work (once) | +20% output, +10 Discontent |
| Extended Shift | 14-hour workdays | +30% output, +5 Discontent |
| Child Labor (Safe) | Children gather/cook | +15 workers, -5 Hope |
| Child Labor (All) | Children work everywhere | +30 workers, -10 Hope |
| Radical Treatment | Amputate vs die | Saves lives, -5 Hope |
| Organ Transplants | Harvest the dead | Medical boost, -10 Hope |
| Soup | Stretch food 50% | -5 Discontent (hungry) |
| Sawdust Food | Stretch food 100% | Sickness +10% |

### Order Path
Discipline. Control. Efficiency. Fear.

| Law | Effect | Prerequisite |
|-----|--------|--------------|
| Neighborhood Watch | Citizens report each other | — |
| Guard Force | Armed enforcers | Watch |
| Watchtower Network | Monitor all zones | Guard Force |
| Morning Gathering | Daily propaganda | Guard Force |
| Pledge of Loyalty | Swear or face suspicion | Gathering |
| Forceful Persuasion | Torture for information | Guard Force |
| Prison | Detain troublemakers | Guard Force |
| Public Execution | Ultimate punishment | Prison |
| New Order | Total dictatorship | All Order laws |

**Order Effects:**
- Discontent easier to suppress
- Hope harder to maintain
- Efficiency through fear
- Endpoint: Authoritarian state

### Faith Path
Unity. Purpose. Divine mandate. Zealotry.

| Law | Effect | Prerequisite |
|-----|--------|--------------|
| Evening Prayers | Daily gathering | — |
| Temple | Place of worship | Prayers |
| House of Healing | Faith + medicine | Temple |
| Shrines | Religious symbols everywhere | Temple |
| Faith Keepers | Spiritual enforcers | Temple |
| Public Penance | Confess and atone | Keepers |
| Righteous Denunciation | Heresy hunting | Keepers |
| The Temple Guard | Armed zealots | Keepers |
| New Faith | Theocratic rule | All Faith laws |

**Faith Effects:**
- Hope easier to maintain
- Discontent builds underground
- Unity through belief
- Endpoint: Theocracy

### Crossing the Line
Both paths have a final law that makes you question everything:
- **New Order:** You become a dictator. "The city survived. But you created a prison."
- **New Faith:** You become a prophet-god. "The city survived. But you created a cult."

GM asks at campaign end: "Was it worth it?"

---

## FACTIONS

### The Engineers
- **Role:** Technical elite, maintain Generator
- **Want:** Rational decisions, preserve knowledge
- **Fear:** Anti-intellectualism, religious rule
- **Leader archetype:** Chief Engineer (pragmatic, cold)

### The Workers
- **Role:** Labor force, majority
- **Want:** Fair treatment, hope for future
- **Fear:** Exploitation, child death
- **Leader archetype:** Foreman (angry, protective)

### The Faithful
- **Role:** Spiritual guidance, morale
- **Want:** Purpose through belief
- **Fear:** Godlessness, meaningless death
- **Leader archetype:** Preacher (charismatic, zealous)

### The Order-Keepers
- **Role:** Security, discipline
- **Want:** Stability at any cost
- **Fear:** Chaos, rebellion
- **Leader archetype:** Captain (cold, efficient)

### The Desperate
- **Role:** Sick, grieving, homeless
- **Want:** Basic survival
- **Fear:** Being abandoned
- **No leader:** Disorganized, easily manipulated

### Faction Tensions
| Event | Workers | Engineers | Faithful | Order |
|-------|---------|-----------|----------|-------|
| Child labor | -20 | +10 | -10 | +5 |
| Emergency shift | -15 | +15 | 0 | +10 |
| Temple built | -5 | -10 | +20 | 0 |
| Guard force | 0 | +5 | 0 | +20 |
| Automaton priority | -10 | +20 | -5 | +5 |

### Faction Clocks
Each faction has a 6-segment clock. Fill = crisis.

**Workers Clock (Strike)**
+1: Extended shifts, child labor, ration cuts
-1: Fair law, holiday, leader listens
Full: General strike. No work until demands met.

**Engineers Clock (Sabotage)**
+1: Anti-intellectual laws, faith priority, generator neglected
-1: Research funded, automatons built, respect shown
Full: Key engineer defects or sabotages.

**Faith Clock (Schism)**
+1: Faith suppressed, Order laws, blasphemy unpunished
-1: Temple built, ceremonies held, faith path laws
Full: Religious split. Two factions now.

**Order Clock (Coup)**
+1: Order ignored, criminals unpunished, chaos events
-1: Order laws passed, punishment given, stability
Full: Captain attempts military takeover.

### Faction Events (d6 when clock at 4+)
1. Delegation demands meeting
2. Work slowdown (faction area)
3. Underground pamphlets
4. Leader makes speech (Hope ±5)
5. Inter-faction fight
6. Clock advances +1

---

## EXPEDITIONS

### Expedition Mode
When players zoom in from City Management.

**Scout Team (3-5 people):**
- Leader (decision maker)
- Medic (treats injuries)
- Engineer (repairs, salvage)
- Guards (protection)

### Expedition Stats
| Stat | Description |
|------|-------------|
| Supplies | Days of food/fuel (each unit = 1 day) |
| Speed | Hexes per day (default 2, sled 3, automaton 1) |
| Morale | Team spirit (0 = mutiny/abandon) |
| Cargo | What they're carrying |

### Frostland Sites (Detailed)

**Frozen Convoy**
- Distance: 1-3 days
- Find: 10-30 supplies, 0-2 survivors, journals
- Risk: Low
- Hook: "Who were they? Where were they going?"

**Lost Expedition**
- Distance: 3-5 days
- Find: 1-3 steam cores, 0-5 survivors, maps
- Risk: Medium (wildlife, weather)
- Hook: "Our scouts. We sent them weeks ago."

**Weather Station**
- Distance: 5-7 days
- Find: Storm predictions, scientific data, 1 core
- Risk: Medium
- Hook: "If we can reach it, we'll know when storms come."

**Tesla City (Ruined)**
- Distance: 7-10 days
- Find: Advanced tech, 5+ cores, grim knowledge
- Risk: High (radiation, madness)
- Hook: "They pushed too far. But their discoveries..."

**Winterhome (Sister City)**
- Distance: 10+ days
- Find: Massive resources OR refugees OR nothing
- Risk: Variable
- Hook: "Our sister settlement. Are they still alive?"

**The Ark**
- Distance: 15+ days
- Find: Seed vault, botanical knowledge, hope
- Risk: Extreme
- Hook: "If spring ever comes, we need seeds."

### Expedition Complications (d10)
| Roll | Complication |
|------|--------------|
| 1 | Blizzard — shelter or die |
| 2 | Crevasse — lose 1 supply, rescue needed |
| 3 | Wolf pack — fight or flee |
| 4 | Polar bear — major threat |
| 5 | Equipment breaks — repair DC 15 |
| 6 | Team member sick — return or leave |
| 7 | Wrong map — 1 day lost |
| 8 | Resource found — +1d6 supplies |
| 9 | Clear weather — +1 hex today |
| 10 | Sled tracks — another expedition nearby |

### Expedition Morale
| Condition | Morale Change |
|-----------|---------------|
| Find survivors | +10 |
| Find only bodies | -5 |
| Teammate dies | -15 |
| Successful hunt | +5 |
| Get lost | -5 |
| Return home in sight | +10 |

When Morale hits 0:
- Team may mutiny
- Abandon mission
- Turn back against orders
- Worst case: fight over supplies

### Expedition Events (d20)
| Roll | Event |
|------|-------|
| 1 | Whiteout — lost 1d4 days |
| 2-3 | Equipment failure — repair or abandon |
| 4-5 | Frostbite — team member injured |
| 6-7 | Wildlife — wolves or bears |
| 8-9 | Nothing — empty wastes |
| 10-12 | Minor find — supplies (1d6 units) |
| 13-14 | Frozen bodies — burial decision |
| 15-16 | Survivor(s) — 1d4 people |
| 17-18 | Cache — 2d6 supplies |
| 19 | Steam core — rare find |
| 20 | Major discovery — site or survivors |

### Survivor Integration
| Survivors Returning | City Effect |
|--------------------|-------------|
| 1-5 | +5 Hope, minor resource strain |
| 6-15 | +10 Hope, noticeable strain |
| 16-30 | +15 Hope, housing crisis |
| 30+ | +20 Hope, potential faction conflict |

---

## STORMS

### Storm Levels
| Level | Temperature | Duration | Warning |
|-------|-------------|----------|---------|
| Minor | -50°C | 1-2 days | 1 day |
| Moderate | -60°C | 2-3 days | 2 days |
| Severe | -70°C | 3-5 days | 3 days |
| The Great Storm | -80°C to -120°C | 7+ days | 5 days |

### Storm Events (d12 during storm)
| Roll | Event |
|------|-------|
| 1 | Building collapse |
| 2-3 | Supply cache buried |
| 4-5 | Workers trapped |
| 6-7 | Generator strain |
| 8-9 | Sickness outbreak |
| 10 | Refugee arrival |
| 11 | Morale crisis |
| 12 | Miracle — storm breaks early |

### The Great Storm
Final scenario climax. 7+ days of -80°C to -120°C.
- All outdoor work stops
- Generator at overdrive risks explosion
- Stored resources only
- Hope/Discontent swing wildly
- Survival = victory

---

## DAILY EVENTS (d20)

| Roll | Event |
|------|-------|
| 1 | Death — citizen dies (accident/sickness) |
| 2 | Fight — workers brawl, injuries |
| 3 | Theft — food stolen, investigation |
| 4 | Sickness — outbreak in district |
| 5 | Breakdown — building needs repair |
| 6 | Complaint — delegation demands change |
| 7 | Shortage — resource runs low |
| 8 | Accident — workplace injury |
| 9 | Cold snap — temperature drops suddenly |
| 10 | Nothing — quiet day |
| 11 | Birth — child born (+3 Hope) |
| 12 | Recovery — sick citizens heal |
| 13 | Discovery — cache found in city |
| 14 | Efficiency — workers exceed quota |
| 15 | Volunteer — citizen offers service |
| 16 | Reconciliation — faction tension eases |
| 17 | Innovation — engineer suggests improvement |
| 18 | Return — lost expedition member found |
| 19 | Windfall — resource bonus |
| 20 | Hope — citizens spontaneously celebrate |

---

## MORAL DILEMMAS

### Format
Present dilemma → player chooses → consequences unfold.

### Classic Dilemmas
| Dilemma | Choice A | Choice B |
|---------|----------|----------|
| **The Scout** | Save 1 wounded scout (risk 3 others) | Leave scout, return safely |
| **The Generator** | Overdrive (save city, risk explosion) | Let buildings freeze |
| **The Food** | Full rations (run out tomorrow) | Half rations (survive but suffer) |
| **The Sick** | Treatment (use resources) | "Radical treatment" (amputate) |
| **The Criminal** | Prison (ongoing cost) | Public execution (fear) |
| **The Children** | School (future) | Work (survival now) |
| **The Refugees** | Accept (strain resources) | Refuse (condemn to death) |
| **The Automaton** | Build automaton (cores) | More workers (risk lives) |

### Advanced Dilemmas
| Dilemma | Stakes | Complexity |
|---------|--------|------------|
| **Winterhome** | Sister city falling. Send help (weaken us) or let them die? | High |
| **The Londoners** | Group wants to return to London. Let them go (morale hit) or force stay? | Medium |
| **The Cannibals** | Survivors found ate the dead. Accept them? Execute? Exile? | High |
| **The Core** | One steam core. Automaton (efficiency) or prosthetics (humanity)? | Medium |
| **The Faith Split** | Orthodox vs New Faith. Side with one? Both? Neither? | High |
| **The Engineer's Secret** | Chief Engineer hid fatal flaw in Generator. Reveal (panic) or hide (risk)? | Critical |
| **The Child's Testimony** | Child accuses foreman of theft. Believe child (workers angry) or foreman? | Medium |
| **The Last Ship** | Ship arrives with 100 refugees. We can feed 50. Choose who lives? | Extreme |

### Dilemma Resolution
After choice:
1. Immediate mechanical effect (Hope, Discontent, resources)
2. NPC reactions (faction loyalty shifts)
3. Long-term consequence (revealed later)
4. Memory (affects epilogue questions)

---

## NPC TEMPLATES

### City Leader (Player or NPC)
- **Background:** Engineer / Military / Doctor / Politician / Worker
- **Trait:** Pragmatic / Idealistic / Ruthless / Compassionate
- **Fear:** Personal (death) / City (failure) / Moral (becoming monster)

### Key NPCs (generate 5-6)
| Role | Archetype | Faction |
|------|-----------|---------|
| Chief Engineer | Cold pragmatist | Engineers |
| Captain | Strict disciplinarian | Order |
| Preacher | Passionate believer | Faith |
| Foreman | Protective of workers | Workers |
| Doctor | Overworked healer | Neutral |
| Scout Leader | Brave explorer | Expeditions |

### NPC Generation (d6 each)
**Motivation:**
1. Family safety
2. City survival
3. Personal power
4. Religious calling
5. Scientific truth
6. Redemption

**Secret:**
1. Committed crime in old world
2. Lost entire family
3. Terminal illness
4. Underground faith/ideology
5. Hoarding supplies
6. Planning escape

### Named NPCs (Ready to Use)

**Margaret Shaw — Chief Engineer**
- Background: London University, designed Generator 4
- Trait: Cold, brilliant, haunted by deaths from her designs
- Want: Prove the Generator works perfectly
- Secret: Knows critical flaw, hides it "for morale"
- Faction: Engineers (leader)

**Father Ezekiel — The Preacher**
- Background: Anglican priest who lost faith, found new one
- Trait: Charismatic, genuinely caring, slowly radicalizing
- Want: Give people hope through belief
- Secret: Doubts constantly, fears he's building a cult
- Faction: Faith (leader)

**Thomas Burke — Captain of the Watch**
- Background: Army sergeant, survivor of London riots
- Trait: Strict, efficient, "order saves lives"
- Want: Prevent chaos at any cost
- Secret: Executed a man wrongly in the old world
- Faction: Order (leader)

**Anna Kowalska — Worker Foreman**
- Background: Polish immigrant, factory worker
- Trait: Fierce protector of workers, distrusts elites
- Want: Fair treatment for the working class
- Secret: Her son died in a mine collapse she blames on engineers
- Faction: Workers (leader)

**Dr. James Whitmore — Chief Medical Officer**
- Background: Military surgeon, seen too much death
- Trait: Exhausted, cynical, still saves every life he can
- Want: Enough medicine, enough beds, enough time
- Secret: Addicted to laudanum (manages pain from frostbite)
- Faction: Neutral

**Samuel "Frostwalker" Green — Scout Leader**
- Background: Arctic explorer before the frost
- Trait: Quiet, competent, respects the cold
- Want: Find other survivors, map the frostlands
- Secret: Found another city — it was dead, he didn't tell anyone
- Faction: Expeditions

### Quick NPC Stats (Individual Mode)
| NPC | STR | DEX | CON | INT | WIS | CHA | HP | AC |
|-----|-----|-----|-----|-----|-----|-----|----|----|
| Margaret Shaw | 8 | 10 | 8 | 16 | 12 | 10 | 40 | 10 |
| Father Ezekiel | 9 | 10 | 10 | 12 | 14 | 16 | 50 | 10 |
| Thomas Burke | 14 | 12 | 14 | 10 | 10 | 10 | 70 | 12 |
| Anna Kowalska | 12 | 10 | 14 | 10 | 12 | 12 | 70 | 10 |
| Dr. Whitmore | 9 | 14 | 10 | 14 | 12 | 10 | 50 | 11 |
| Samuel Green | 12 | 14 | 14 | 10 | 14 | 8 | 70 | 12 |

**Typical NPCs (tier-based):**
- Worker: STR 12, CON 12, HP 60, AC 10
- Engineer: INT 14, DEX 12, HP 40, AC 10
- Guard: STR 14, DEX 12, HP 70, AC 12
- Scout: DEX 14, CON 14, HP 60, AC 11

---

## CITY PRESETS

### New Manchester (Standard)
- Population: 80
- Resources: 200 coal, 100 food, 50 wood, 20 steel
- Buildings: Generator, 8 tents, cookhouse
- Hope: 50 | Discontent: 20
- Day: 1 | Temperature: -30°C
- Situation: "Just arrived. Build or die."

### Winterhome Refugees (Hard)
- Population: 200
- Resources: 50 coal, 30 food, 10 wood, 5 steel
- Buildings: Generator (damaged -30% integrity), ruins
- Hope: 20 | Discontent: 60
- Day: 15 | Temperature: -50°C
- Situation: "Our city fell. We found another Generator. Can we rebuild?"

### The Ark (Survival)
- Population: 40 (scientists)
- Resources: 300 coal, 50 food, 20 wood, 30 steel, 10 cores
- Buildings: Generator, laboratories, seed vault
- Hope: 60 | Discontent: 10
- Day: 1 | Temperature: -40°C
- Situation: "Save the seeds. Save humanity's future."

### Last Autumn (Prequel)
- Population: 150 workers
- Resources: Unlimited from London (for now)
- Buildings: Construction site, Generator incomplete
- Hope: 70 | Discontent: 30
- Day: 1 | Temperature: -10°C
- Situation: "Build the Generator before winter comes."

---

## CAMPAIGN STRUCTURES

### The First Week
Tutorial scenario. Learn mechanics.
- Day 1: Arrival, assess situation
- Day 2-3: Build essentials
- Day 4-5: First shortage crisis
- Day 6-7: First law decision

### The Settlement
Standard campaign. 30-50 days.
- Establish city
- Navigate crises
- Build toward self-sufficiency
- Face The Great Storm

### The Expedition
Player-focused campaign.
- Scout team finds other Generators
- Moral choices about other cities
- Return with survivors/tech/warnings
- City fate in background

### The Last City
Epic campaign. Multiple scenarios.
- Your city contacts others
- Trade, conflict, refugees
- One by one, others fall
- Your city: last hope for humanity

---

## ENDGAME

### Victory Conditions
- Survive The Great Storm
- Population > 50
- Hope > 0
- Generator intact

### Defeat Conditions
- Generator destroyed
- Population = 0
- Hope = 0 and exodus complete
- Discontent = 100 and overthrown

### Epilogue Questions
After survival, GM asks:
1. "How many graves in your cemetery?"
2. "What laws define your city?"
3. "Who did you become?"
4. "The city survived. But was it worth it?"

### Legacy Score
| Factor | Points |
|--------|--------|
| Population survived | +1 per 10 people |
| Hope at end | +Hope value |
| No executions | +20 |
| No child labor | +15 |
| No organ harvests | +10 |
| Stayed human | +50 |

---

## QUICK REFERENCE

### Daily Cycle
1. **Dawn:** Temperature check, resource consumption
2. **Morning:** Work assignments, events
3. **Afternoon:** Production, construction progress
4. **Evening:** Event roll, Hope/Discontent adjustment
5. **Night:** Sickness check, death check

### Critical Numbers
- Generator Power 2 = comfortable
- -40°C = work slowdown
- -60°C = deaths begin
- Hope < 20 = exodus risk
- Discontent > 80 = riot risk

### Resource Priorities
1. Coal (Generator lives)
2. Food (People eat)
3. Wood (Buildings)
4. Steel (Advanced)
5. Steam Cores (Rare)

### Law Decision Framework
Ask: "Does this save lives now at moral cost later?"
If yes → valid Frostpunk dilemma.

---

## TWO PLAY MODES

### City Management Mode (Zoom Out)
- City is the character
- Track: Population, Hope, Discontent, Resources
- Time scale: Days
- Focus: Laws, construction, survival

### Individual Mode (Zoom In)
- Player is one person
- Track: Personal stats (STR/DEX/CON/INT/WIS/CHA from gm-skill.md)
- Time scale: Hours/minutes
- Focus: Expeditions, personal drama, critical missions

### Switching Modes
- Major decisions → City Mode
- Personal stakes → Individual Mode
- Expedition → Individual Mode
- Storm → City Mode
- Seamless transition based on dramatic needs

### Individual Mode Mechanics

**Personal Stats (from gm-skill.md)**
- STR: Physical labor, combat, carrying
- DEX: Repairs, surgery, stealth
- CON: Cold resistance, disease, endurance
- INT: Engineering, medical, problem-solving
- WIS: Leadership, perception, morale
- CHA: Negotiation, inspiration, faction influence

**Hit Points and Defense**
- HP = CON × 5 (per gm-skill.md)
- AC = 10 + DEX modifier
- Heavy Clothing: +2 AC, -1 DEX
- Fur Coat: +1 AC, cold resistance +1 tier

**Cold Exposure Clock (Individual)**
6-segment clock. Fills based on exposure:
- Chilly (-30°C): +1 segment / 4 hours
- Cold (-40°C): +1 segment / 2 hours
- Freezing (-50°C): +1 segment / hour
- Deadly (-60°C): +2 segments / hour
- Extinction (-70°C): +3 segments / hour

Clock effects:
- 1-2 segments: Uncomfortable, -1 to focus tasks
- 3-4 segments: Frostbite risk, CON save DC 12 or -1 to physical
- 5 segments: Hypothermia begins, CON save DC 15 or collapse
- 6 segments: Unconscious, death in 1 hour without warmth

Clearing clock: 1 segment per hour near heat source.

**Personal Hope Triggers**
| Event | Personal Hope Change |
|-------|---------------------|
| Find survivor | +10 |
| Teammate dies | -15 |
| Return home in sight | +10 |
| Lost / whiteout | -10 |
| Successful hunt | +5 |
| Find only bodies | -5 |
| Rescue someone | +10 |
| Make impossible choice | -5 (even if "right") |
| Hot meal, warm shelter | +5 |

**Individual Roles**
| Role | Key Stats | Special |
|------|-----------|---------|
| Engineer | INT, DEX | Repair +2, can fix Generator |
| Doctor | INT, WIS | Heal +2, diagnose conditions |
| Worker | STR, CON | Labor +2, cold resistant |
| Scout | DEX, CON | Travel +1 hex/day, tracking |
| Leader | CHA, WIS | Inspire (Hope +5 local), commands |
| Guard | STR, DEX | Combat +2, enforce laws |

**Individual Combat**
Rare but brutal. Cold makes everything harder.

| Weapon | Damage | Notes |
|--------|--------|-------|
| Fists | 1d4 | Always available |
| Knife | 1d6 | Common |
| Pick/Axe | 1d8 | Mining tool |
| Steam Crossbow | 2d6 | Rare, needs maintenance |
| Steam Hammer | 2d8 | Engineering tool, heavy |

**Cold Penalties in Combat**
| Temperature | Penalty |
|-------------|---------|
| -30°C or warmer | None |
| -40°C | -1 to all rolls |
| -50°C | -2 to all rolls |
| -60°C | -4 to all rolls, frostbite risk |
| -70°C | Combat nearly impossible |

**Individual Hope (Personal Morale)**
Separate from city Hope. Affects personal performance.
- Starts at: 50
- Maximum: 100
- At 0: Despair (suicidal, abandon mission, give up)

---

## SPECIAL EVENTS

### Scripted Events (Campaign Milestones)

**Day 5: The First Death**
- Someone dies (accident, cold, sickness)
- City faces mortality together
- Hope -5, but leaders have choice of response

**Day 15: The Delegation**
- Workers or Engineers demand change
- Negotiate, comply, or refuse
- Sets tone for faction relations

**Day 20: Winterhome Falls (News)**
- Scouts bring word: sister city destroyed
- Hope -10, Discontent +10
- Refugees coming? Prepare or refuse?

**Day 30: The Londoners**
- Group wants to return to London
- Let them go (lose people, morale hit)?
- Force them to stay (law)?
- Prove city worth staying for?

**Day 40+: The Great Storm Warning**
- 5-7 days warning
- Final preparations
- Laws get extreme
- Who you become is revealed

### Random Major Events (d10, use sparingly)
1. Automaton goes rogue — rampage in district
2. Coal seam collapse — miners trapped
3. Food spoilage — half rations forced
4. Religious vision — faction split possible
5. Murder — investigation needed
6. Fire — building destroyed
7. Refugee wave — 30+ people arrive
8. Supply cache — major find
9. Spy — someone serves another city
10. Miracle — unexpected survival/discovery

---

## GM TOOLS

### Session Zero Questions
1. "What kind of leader will you be?"
2. "What happened to your family?"
3. "What skill do you bring to the city?"
4. "What line will you never cross?"
5. "What would make survival meaningless?"

### Pacing Guidelines
| Days 1-7 | Tutorial. Basic survival. |
| Days 8-15 | Faction tensions emerge. |
| Days 16-25 | First major crisis. Laws harden. |
| Days 26-35 | External threats (refugees, news). |
| Days 36-45 | Preparation for storm. |
| Days 46+ | The Great Storm. Endgame. |

### Hope/Discontent Balance
- If Hope consistently high: introduce tragedy
- If Discontent consistently high: offer relief valve
- If both extreme: major crisis imminent
- Perfect balance is boring — oscillate

### NPC Death Guidelines
- Named NPCs should die for story reasons
- Random deaths for city statistics
- Player-attached NPCs: warning before death
- "The cold doesn't care about your feelings"

### The Golden Rule
Every decision should have:
1. A practical cost
2. A moral cost
3. No perfect answer

*If there's a perfect answer, it's not a Frostpunk dilemma.*

---

*"The city survived. But was it worth it?"*
