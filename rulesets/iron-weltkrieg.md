# IRON WELTKRIEG — CORE MECHANICS

Dieselpunk alternate history. Kaiserreich 1936. Flying steel fortresses, diesel walkers, trench warfare industrialized beyond recognition. The world burns toward MAD.

> **LANGUAGE:** Preferred session language is **Russian**. This ruleset is stored in English for token efficiency only.

---

## BASE SYSTEM

Uses gm-skill.md core mechanics:
- d20 + stat vs DC (margin-based: Crit.Fail / Fail / Partial / Success / Crit)
- Six stats: STR, DEX, CON, INT, WIS, CHA
- Clocks, Heroism, Companions, Abilities — all from base
- Writing style, response format, player rules — all from base

**This ruleset adds:** Ideology, Global Tension, Nuclear Clock, Machines (Walkers, Flying Fortresses, Tanks, Ships), Crew Bonds, Machine Stress, World Events, Scale Shift.

**Do not duplicate base mechanics.** If gm-skill covers it, use it as-is unless this ruleset explicitly overrides.

---

## SETTING OVERVIEW

### The World of 1936

Germany won the Weltkrieg (Great War, 1914-1919). The old order collapsed differently: Britain and France fell to syndicalist revolutions. Their exiled governments fled to Canada and North Africa. The United States never left isolationism and fractures internally. Russia is a failing republic. China is a patchwork of warlord cliques. Germany dominates Europe and colonial Africa — but the empire is rotting from within.

Black Monday — the global economic crash of 1936 — shatters the fragile peace. Every nation teeters. The next decade will see the world tear itself apart and end in nuclear fire.

### Aesthetic

**Industrial brutalism.** Not sleek, not elegant. Riveted steel, diesel smoke, vacuum tubes, analog dials. Machines built by engineers who survived trenches and designed weapons the way they survived — ugly, heavy, functional.

- **Flying fortresses:** Not dirigibles. Steel boxes held aloft by brute-force jet thrust. Boxy, non-aerodynamic, armored. Like Soviet lunar landers that someone bolted guns to. HighFleet aesthetic.
- **Walkers/Mechs:** Boilers welded to tractor legs. Exposed pistons, smoke-belching stacks, riveted plate armor. From infantry-sized exosuits to barn-sized quadrupeds. Iron Harvest / 1920+ aesthetic.
- **Tanks, ships, artillery:** Conventional but massive. Dreadnoughts. Railway guns. Landships. Everything scaled to industrial gigantism.
- **No digital or solid-state electronics.** Vacuum-tube analog electronics, relays, mechanical computers, analog dials. Radio is king. Radar is new and unreliable. Cryptography is manual.

### Tone

Dark. The world ended once in the trenches. Now it ends again — bigger, louder, with nuclear fire at the finish line. Everyone knows it's coming. Nobody can stop it.

Players experience this through:
- Newspapers full of crises they can't prevent
- Orders from above that make no strategic sense
- Allies who become enemies when borders shift
- Machines that break, overheat, run out of fuel
- A Tension clock that only goes up

---

## IDEOLOGY

Every character has a position on the Ideology Compass. Not a score — a tendency. It shapes NPC reactions, available factions, dialogue options.

### Two Axes

```
                    AUTHORITY
                        |
                        |
    NATIONALISM --------+-------- INTERNATIONALISM
                        |
                        |
                     LIBERTY
```

### Ten Ideologies (from Kaiserreich)

| Code | Name | Position | Description |
|------|------|----------|-------------|
| MarLib | Market Liberal | Liberty + International | Laissez-faire capitalism, free trade |
| SocLib | Social Liberal | Liberty + moderate | Progressive democracy, reform |
| SocDem | Social Democrat | Liberty + mild Auth | Welfare state, unions, elections |
| SocCon | Social Conservative | Auth + mild Liberty | Traditional democracy, church, order |
| AuthDem | Authoritarian Democrat | Authority + moderate | Managed democracy, strong executive |
| PatAut | Paternal Autocrat | Authority + Nationalism | Benevolent dictatorship, one leader |
| NatPop | National Populist | Authority + Nationalism extreme | Fascism, ultranationalism, racial politics |
| RadSoc | Radical Socialist | Liberty + International | Council communism, anarchism, direct democracy |
| Syndie | Syndicalist | moderate + International | Trade union socialism, worker control |
| Totalist | Totalist | Authority + International | Authoritarian socialism, vanguard party |

### Player Ideology

Player starts with an ideology based on background. It shifts through actions:
- Fight for syndicalists → shift toward Syndie/RadSoc
- Serve a king → shift toward PatAut/AuthDem
- Commit atrocities → shift toward NatPop/Totalist
- Protect civilians → shift toward SocLib/SocDem

**Mechanical effect:** NPCs react differently. A NatPop officer won't trust a Syndie deserter. A RadSoc partisan won't follow a monarchist. Ideology is not alignment — it's political reputation.

### Faction Alignments

| Faction | Core Ideology | Description |
|---------|--------------|-------------|
| Reichspakt | AuthDem/PatAut/SocCon | German-led conservative bloc |
| Third Internationale | Syndie/RadSoc/Totalist | Revolutionary socialist bloc |
| Entente | SocLib/SocCon/AuthDem | Exiled governments seeking restoration |
| Moscow Accord | varies | Russian-led bloc (if Russia unifies) |
| Co-Prosperity Sphere | PatAut/NatPop | Japanese-led Asian bloc |
| Unaligned | any | Everyone else — most of the world |

---

## GLOBAL TENSION

The world has a heartbeat. It accelerates.

```
GLOBAL TENSION: 0% ————————————————————— 100%
                Peace            Nuclear Threshold
```

### How Tension Works

- Starts at ~30% in 1936 (Black Monday, multiple crises brewing)
- **Every chapter:** GM rolls on World Events tables. Most events increase tension.
- **Player actions** can increase or decrease tension locally, but the global trend is UP
- At **100%:** Nuclear Clock activates. No going back.

### Tension Triggers

| Event | Tension Change |
|-------|---------------|
| Regional war begins | +5-10% |
| Regional war ends (decisive) | -5% |
| Regional war ends (stalemate/partition) | +5% |
| Major power enters war | +10% |
| Major power collapses | +10-15% |
| Alliance formed against existing bloc | +5% |
| Nuclear test conducted | +15% |
| Border incident between major powers | +3% |
| Revolution/civil war in major power | +5% |
| Arms race escalation | +3% |
| Peace conference succeeds | -10% |
| Player prevents conflict (rare) | -3-5% |

### Tension Thresholds

| Tension | World State |
|---------|------------|
| 0-30% | Uneasy peace. Local conflicts. Newspapers optimistic. |
| 31-50% | Cold war. Proxy conflicts. Arms buildup. Propaganda. |
| 51-70% | Hot borders. Major regional wars. Mobilization. |
| 71-90% | World war. Multiple fronts. Total mobilization. Cities bombed. |
| 91-99% | Desperation. Scorched earth. "Will they use it?" |
| 100% | Nuclear Clock activates. |

### Between Chapters: World Events

Every chapter end, GM:
1. Mechanically advances **all active regional conflict clocks** that are due to move (batch-roll if necessary). Only 2-3 foreground results need detailed narration.
2. Updates tension based on results
3. Processes cascade effects
4. Delivers the most relevant results to player via **newspaper headlines, radio broadcasts, orders from command**

Offscreen does NOT mean arbitrary: do not choose distant winners for drama. Their clocks/resolution tables still determine history; simply summarize most offscreen rolls.

Format:
```
=== WORLD NEWS (between Chapter X and Chapter Y) ===
[REGION]: [headline]. Tension +X%.
[REGION]: [headline]. Tension +X%.
Current Global Tension: XX%
===
```

### Regional Conflict Clocks

Every regional conflict is a clock 0-6 (see regional tables for specifics).

```
CONFLICT CLOCK: 0 ——————— 6
                Side A wins   Side B wins
```

**CLOCK TYPES:**
- **Binary clock with explicit endpoint labels:** 0/6 is authoritative. The endpoint determines who/what wins; any RESOLUTION table may only determine the *form* of that compatible victory. Reroll/ignore entries that contradict the reached endpoint.
- **Multi-faction or unlabeled crisis clock:** the clock measures time/escalation until resolution, not a binary winner. Advance it toward resolution and record who the player materially supports. At resolution, use the listed multi-faction table, giving direct player involvement strong narrative/mechanical weight; never pretend an unlabeled clock already named a winner.

**Tick rate accelerates with age:**
- Chapter 1 of conflict: ±1 per chapter
- Chapter 2-3: ±2 per chapter
- Chapter 4+: ±3 per chapter
- Conflicts CANNOT stall forever — escalating ticks guarantee resolution

**Direction:** For BINARY clocks, each chapter GM rolls d20 for each active conflict:
- 1-10: tick toward Side A (lower number = stronger push)
- 11-20: tick toward Side B (higher = stronger)
- Player actions: ±1-3 modifier based on direct involvement
- External intervention: ±1-2 modifier from cascade effects

For MULTI-FACTION / UNLABELED crisis clocks, advance toward the resolution threshold using age/escalation and events; track player-backed factions/actions as resolution leverage rather than pretending the two endpoints name every possible faction.

**Resolution:** When a clock reaches its resolution endpoint/threshold, consult that conflict's RESOLUTION table.
- Binary clock: endpoint winner is authoritative; table selects only a compatible post-war path/variant and cascade effects.
- Multi-faction/unlabeled clock: table may determine the winner, but direct player leverage must materially weight/limit the plausible results.

### Cascade Effects

Regional events trigger effects in other regions. Every regional file has a
CASCADE TABLE at the bottom.

**Processing order (between chapters):**
1. Roll conflict clocks for all active regions
2. If any clock resolves (hits 0 or 6) → roll resolution
3. Check resolved conflict's CASCADE TABLE
4. Apply cascade effects to other regions (modifier to their clocks, new conflicts, tension changes)
5. Cascade effects from step 4 do NOT trigger further cascades this chapter (prevent infinite loops)
6. Sum all tension changes → update Global Tension
7. If Global Tension hits 100% → activate Nuclear Clock

### Historical NPCs

Real historical figures appear throughout regional tables. GM guidelines:

- **Use freely.** Place historical figures in any role that fits their alt-history path.
  De Gaulle commanding a flying fortress over Gibraltar. Patton leading a walker
  column through Mexico. Zhukov planning a nuclear strike on Berlin. If it's plausible
  in this timeline — do it.
- **Alt-history biography.** Characters have different histories here. Mussolini is a
  syndicalist, not a fascist. Churchill might govern India. Lovecraft could rule
  New England. Don't import real-world biographies — build from the Kaiserreich divergence.
- **Personality stays.** Alt-history changes circumstances, not character. Patton is
  still aggressive. Churchill still drinks and orates. Kemal still modernizes. Use
  real personality traits even when the politics differ.
- **Death is real.** Historical figures die. Assassinated, killed in battle, executed
  after a coup. Don't protect them for being famous.

---

## NUCLEAR CLOCK

When Global Tension hits 100%, the Nuclear Clock begins. It does not stop.

```
NUCLEAR CLOCK: 0 ——————————————— 10
               First Strike           MAD
```

### Escalation

| Clock | Stage | What Happens |
|-------|-------|-------------|
| 0 | Threshold | Tension 100%. First nuclear test by a major power. World holds breath. |
| 1 | Demonstration | Atmospheric test. Island vaporized. Newsreels. Panic. |
| 2 | Tactical Use | Nuclear weapon used on military target (naval fleet, massed army). |
| 3 | Strategic Threat | Nuclear ultimatum issued. "Surrender or burn." |
| 4 | First City | A city dies. Population: tens of thousands. The world sees photos. |
| 5 | Retaliation | Second strike. Another city. Another nation. Tit for tat. |
| 6 | Escalation | Multiple strikes. Air raid sirens become the sound of daily life. |
| 7 | Desperation | Strikes on industrial centers. Refugee columns. Fallout zones. |
| 8 | Total War | Every major power has launched. Dozens of cities burning. |
| 9 | Last Orders | Chain of command breaking down. Launch-on-warning. Automated systems. |
| 10 | **MAD** | **Mutual Assured Destruction. End credits. The world ends.** |

### Nuclear Clock Ticks

- Each chapter after activation: clock ticks +1 automatically.
- The world has only **3 DELAYS total** once the Nuclear Clock starts. Track `NUCLEAR DELAYS USED: 0/3`.
- A successful player delay can cancel that chapter's **automatic** +1 tick (maximum once per chapter), then mark one Delay used:
  - Assassinate a leader pushing for launch
  - Destroy a nuclear facility
  - Broker ceasefire between nuclear powers
  - Sabotage delivery systems
- Event-driven extra ticks (actual nuclear use, escalation events, etc.) are not canceled unless the event itself was prevented before it occurred.
- After all 3 Delays are spent, the automatic chapter tick cannot be canceled. Nothing stops the clock permanently. MAD is inevitable; player action can only buy a few chapters.

### Nuclear Weapons in Play

| Delivery | Range | Damage | Effect |
|----------|-------|--------|--------|
| Gravity bomb (bomber) | Theater | Destroys city district | Interceptable by fighters |
| Cruise missile (A-100N) | 1600km | Destroys military base | Interceptable by CIWS/fighters |
| Cruise missile (Kh-15N) | 2000km | Destroys city | Hard to intercept (supersonic) |
| Ballistic missile (R-3N) | 2000km | Destroys city | Cannot intercept (1936 tech) |
| Ship-mounted | Point blank | Destroys port/fleet | Suicide weapon |

**Using nukes:** Any player who fires a nuclear weapon at a city of 20,000+: war crime. Tribunal consequences if they survive. Tension +15%. Nuclear Clock +1.

---

## MACHINES

Machines are NOT extensions of the body (no neurohelmet, no Sync). They are tools — expensive, breakable, crewed. A machine is a house you live in that can kill and be killed.

### Machine Types

```
GROUND:
  Walker (Light)   — 2-3 crew, infantry support, d6 armor
  Walker (Medium)  — 3-4 crew, main battle, d8 armor
  Walker (Heavy)   — 5-6 crew, assault platform, d10 armor
  Walker (Super)   — 8+ crew, mobile fortress, d12 armor
  Tank             — 3-5 crew, conventional armor, d8 armor
  Armored Car      — 2-3 crew, fast recon, d4 armor
  Artillery        — 4-8 crew, static/mobile, no armor

AIR:
  Fighter          — 1-2 crew, interceptor/bomber, d4 armor
  Flying Fortress  — 15-200+ crew, airborne warship, d8-d12 armor
  Transport        — 5-20 crew, cargo/troop carrier, d6 armor

SEA:
  Patrol Boat      — 5-10 crew, coastal, d4 armor
  Destroyer        — 50-100 crew, escort, d8 armor
  Light Cruiser    — 100-300 crew, fast capital, d8 armor
  Heavy Cruiser    — 300-600 crew, capital ship, d10 armor
  Battleship       — 800-1500 crew, main battle line, d12 armor
  Super-Dreadnought— 1500-3000+ crew, floating city, d12+2 armor
  Monitor          — 50-200 crew, coastal fortress, d10 armor
  Submarine        — 30-80 crew, invisible killer, d6 armor
  Carrier          — 800-2000 crew, floating airfield, d10 armor
  Transport        — 100-500 crew, convoy backbone, d6 armor
```

### The War Triangle

Three arms coexist. None replaces the others.

```
         FLYING FORTRESSES
        /  (elite strike, expensive,
       /    fuel-hungry, devastating)
      /
WALKERS ————————————— NAVY
(land dominance,    (bulk cargo, stable
trench crossing,     gun platform, cheap
urban warfare)       to operate, submarines)
```

- **Navy exists because water is free.** Keeping 100,000 tons airborne burns fuel
  at catastrophic rates. Ships float by physics. The industrial backbone of war —
  supply convoys, troop transports, shore bombardment — is naval.
- **Flying fortresses are the elite.** Fast, devastating, can go anywhere. But they
  burn fuel like cities. Operational range measured in days, not months.
- **Walkers own the ground.** Trenches, rubble, forests, cities. Where tanks
  can't go and ships can't reach.
- **Submarines** are the invisible threat. No walker steps on them. No flying
  fortress spots them easily. Only destroyers and depth charges.
- **Aircraft** bridge all three — launched from carriers (sea), fortress flight
  decks (air), or airfields (ground). See Aviation section.

### Naval Classes

In the Kaiserreich world, no Washington Naval Treaty was signed. Germany won and
kept building. Every major power has dreadnoughts that real history scrapped.

| Class | Tonnage | Crew | HP | AC | Speed | Main Battery | Role |
|-------|---------|------|----|----|-------|-------------|------|
| Patrol Boat | 100-500t | 5-15 | 15 | 10 | Fast | 1-2× light gun | Coastal, river |
| Destroyer | 1000-3000t | 80-150 | 40 | 12 | Very Fast | 4× 100-130mm, torpedoes | Escort, sub-hunter |
| Light Cruiser | 5000-10000t | 200-400 | 70 | 14 | Fast | 6-8× 150mm | Screening, raiding |
| Heavy Cruiser | 10000-20000t | 400-700 | 100 | 16 | Medium | 8× 200mm | Strike, convoy raider |
| Battleship | 30000-50000t | 1000-1500 | 200 | 19 | Medium | 8-9× 380mm (d12) | Battle line |
| Super-Dreadnought | 70000-140000t | 2000-3500 | 400 | 22 | Slow | 8× 508mm (2d12) | Floating fortress |
| Monitor | 5000-15000t | 100-300 | 80 | 16 | Very Slow | 1-2× 380-460mm | Shore bombardment |
| Submarine | 500-2500t | 30-80 | 30 | 8 | Slow (surfaced) | Torpedoes (2d10) | Stealth, convoy war |
| Carrier | 20000-40000t | 1000-2000 | 120 | 14 | Medium | Aircraft (30-80 planes) | Air projection |
| Transport | 5000-20000t | 100-500 | 60 | 10 | Slow | Defensive AA only | Supply, troops |

**Super-Dreadnoughts** are the ultimate expression of industrial gigantism. Germany's
H-class: 140,000 tons, 345 meters, eight 508mm guns. A floating city with a crew of
3,000+. In real history, too insane to build. In Iron Weltkrieg — they built them.

**Navy vs Flying Fortresses — why both exist:**
- Naval ships have MORE HP and AC than flying equivalents. Water supports
  weight for free; flying fortresses pay for every ton in fuel. A super-dreadnought
  (400 HP, AC 22) dwarfs a flying heavy cruiser (250 HP, AC 20).
- Naval guns are MORE STABLE. Firing 508mm from a sea platform: full damage.
  Firing 180mm from a flying platform in turbulence: -1 to hit.
- Naval ships have UNLIMITED ENDURANCE. No fuel clock. Flying fortresses
  measure operational time in days, not months.
- Flying fortresses have MOBILITY. Go anywhere, ignore terrain, strike inland.
  Naval ships are chained to water. Different tools, different jobs.
- **Armor Piercing (naval only):** Naval guns 380mm+ ignore 2 points of AC.
  Their shells are designed for penetrating armored belt — airship hulls are
  thinner. This makes battleship broadsides devastating against airships caught
  over water.

**Submarines** ignore the war triangle. They operate below it. Invisible, patient,
deadly. Convoy war — thousands of tons of supply sunk nightly. Only destroyers
and aircraft with depth charges counter them.

**Naval Weapons:**

| Weapon | Caliber | Damage | Range | Notes |
|--------|---------|--------|-------|-------|
| Light Naval Gun | 100-130mm | d8 | Medium | Destroyer main battery |
| Medium Naval Gun | 150-200mm | d10 | Long | Cruiser main battery |
| Heavy Naval Gun | 380mm | d12 | Very Long | Battleship main battery |
| Super-Heavy Gun | 460-508mm | 2d12 | Extreme | Super-dreadnought only |
| Torpedo (ship) | 533mm | 2d10 | Medium | Destroyer/submarine |
| Torpedo (submarine) | 533mm | 2d10 + surprise | Medium | Advantage from stealth |
| Depth Charge | — | 2d8 | Close | Anti-submarine only |
| Naval Mine | — | 2d10 | Static | Area denial, hidden |
| AA Battery | 37-100mm | d4-d8 | Close-Medium | Anti-aircraft defense |

**Naval Combat:**
- Ship vs Ship: d20 + gunner stat + crew bonus vs target AC
- Torpedo runs: DEX DC 14 to launch, target gets DEX save to evade
- Submarine attack: automatic surprise (advantage) on first strike. After first
  torpedo — surfaced or hunted. DEX vs depth charges.
- Shore bombardment: no AC — roll damage directly. Destroys fortifications,
  walkers, infantry in coastal zones.
- Boarding: marines (STR/DEX combat), rare but devastating. Carrier boarding
  = capturing an airfield.

### Walker Classes (Iron Harvest / Gear Krieg)

| Class | Example | Crew | HP | AC | Weapons | Speed | Role |
|-------|---------|------|----|----|---------|-------|------|
| Light | Recon Läufer | 2 | 20 | 12 | 1× MG, grenades | Fast | Scout, infantry support |
| Medium | Kampfläufer | 3-4 | 40 | 14 | 1× cannon + MG | Medium | Main battle, versatile |
| Heavy | Sturmläufer | 5-6 | 70 | 16 | 2× cannon, MGs | Slow | Assault, fortification cracker |
| Super | Festungsläufer | 8+ | 120 | 18 | 3× cannon, rockets, MGs | Very slow | Siege engine, area denial |

**Walker combat uses pilot stats + crew bonuses:**
- Driver: DEX for maneuver, piloting
- Gunner: DEX for aiming, INT for targeting
- Commander: INT for tactics, CHA for crew coordination
- Engineer: INT for repairs, CON for endurance

**Walkers vs Tanks:** Walkers cross trenches, climb rubble, navigate forests. Tanks are faster on flat ground, cheaper, lower profile. Both coexist — walkers didn't replace tanks, they supplemented them for terrain tanks can't handle.

### Flying Fortress Classes (HighFleet)

| Class | Mass | Crew | HP | AC | Speed | Fuel | Role |
|-------|------|------|----|----|-------|------|------|
| Corvette | 500-2000t | 15-30 | 30 | 12 | Fast | Short | Scout, interceptor |
| Frigate | 2000-7000t | 30-80 | 60 | 14 | Medium | Medium | Escort, patrol |
| Light Cruiser | 7000-15000t | 80-150 | 100 | 16 | Medium | Long | Strike, carrier |
| Cruiser | 15000-30000t | 150-300 | 160 | 18 | Slow | Long | Battle line |
| Heavy Cruiser | 30000t+ | 300-500+ | 250 | 20 | Very slow | Very long | Flagship, dreadnought |

**Flying Fortress internal structure:**
```
BRIDGE — command center. If destroyed: ship lost.
DECKS — weapon mounts, crew quarters, cargo.
ENGINE ROOM — thrust. Damage = speed loss.
FUEL TANKS — volatile. Hit = fire risk, explosion.
MAGAZINE — ammo storage. Hit = catastrophic.
FLIGHT DECK — aircraft launch/recovery (carriers only).
ARMOR BELT — protection. Heavy = slow, light = fast.
```

**A chapter can take place ENTIRELY inside a flying fortress.** Navigation, internal crises, crew drama, boarding actions, engine fires, mutiny.

### Aviation

Aircraft exist alongside flying fortresses — smaller, faster, fragile. Historical analogs
(biplanes → monoplanes → early jets) plus dieselpunk variants. Aviation operates from:
- **Airfields** — conventional ground bases
- **Carrier fortresses** — flying fortresses with flight decks (Light Cruiser+ class)
- **Carrier ships** — naval aircraft carriers (conventional)
- **Walker-mounted** — light recon aircraft/autogyros launched from super-heavy walkers

Any machine platform can be modified for aviation capacity at cost of other systems:
- Flying fortress loses weapon mounts for flight deck
- Walker loses a weapon hardpoint for autogyro cradle
- Ship loses turret for catapult + hangar

#### Aircraft Classes

| Class | Crew | HP | AC | Speed | Range | Weapons | Role |
|-------|------|----|----|-------|-------|---------|------|
| Scout/Recon | 1-2 | 8 | 10 | Fast | Medium | Camera, light MG | Recon, spotting, courier |
| Fighter | 1 | 12 | 11 | Very Fast | Medium | 2× MG, light bombs | Air superiority, interception |
| Heavy Fighter | 2 | 18 | 12 | Fast | Long | Cannon + MGs, rockets | Escort, ground attack |
| Attacker | 2 | 22 | 13 | Medium | Medium | Cannon, bombs, rockets | Ground attack, anti-walker |
| Bomber (Light) | 3-4 | 25 | 12 | Medium | Long | Bombs, defensive MGs | Tactical bombing |
| Bomber (Heavy) | 6-8 | 40 | 14 | Slow | Very Long | Heavy bombs, defensive turrets | Strategic bombing |
| Torpedo Bomber | 2-3 | 18 | 11 | Medium | Medium | Torpedo, light MG | Anti-ship |
| Autogyro | 1-2 | 10 | 10 | Slow | Short | Light MG or none | Recon, medevac, courier |
| Flying Boat | 4-6 | 30 | 12 | Slow | Very Long | Depth charges, MGs | Maritime patrol, rescue |

#### Aircraft Weapons

| Weapon | Damage | Notes |
|--------|--------|-------|
| Light MG (wing-mounted) | d4 | Strafing, dogfight |
| Heavy MG / twin MG | d6 | Fighter standard |
| Autocannon (20-37mm) | d8 | Heavy fighter, attacker |
| Light bombs (50-100kg) | d8 per bomb | 2-4 carried by fighters |
| Medium bombs (250kg) | d10 per bomb | Light bombers, 4-8 carried |
| Heavy bombs (500-1000kg) | d12 per bomb | Heavy bombers, 2-4 carried |
| Torpedoes | 2d10 | Anti-ship, must fly low and straight |
| Rockets (unguided) | 2d6 salvo | Ground attack, inaccurate |
| Air-to-air missiles (early) | 2d8 | Rare, late-game tech, fighter-mounted |
| Depth charges | d10 | Anti-submarine only |

#### Air Combat

**Dogfight:** d20 + DEX + Piloting vs opponent's same. Margin determines positioning.
- Crit.Fail: shot down / critical damage
- Fail: opponent on your tail, they attack next
- Partial: exchange fire (both roll damage)
- Success: on their tail, you attack with advantage
- Crit: clean kill or disabling shot

**Strafing/Bombing:** d20 + DEX + Piloting vs ground target DC.
- Infantry in open: DC 8
- Vehicles/walkers: DC 12
- Fortified position: DC 16
- Moving target: +2 DC
- AA fire: attacker takes d6-d10 damage per pass (depending on AA density)

**Anti-air defense:**
- Rotary Autocannon (37mm CIWS): d4 vs aircraft, rapid fire, close range
- Twin Autocannon (57mm): d6 vs aircraft, medium range
- Dedicated AA gun: d8, medium range, +2 to hit aircraft
- Fighter interception: dogfight rules above

**Carrier operations:**
- Launch: 1 action per aircraft. Flight deck required.
- Recovery: DEX DC 12 (carrier fortress), DC 10 (ground). Fail = crash landing (aircraft takes d6).
- Fuel: aircraft have limited fuel. Sortie = 1 mission then must return or ditch.
- Nuclear EMP: all airborne aircraft destroyed if nuclear weapon detonates in theater.

#### Aviation Modifications

Any platform can sacrifice capability for aviation:

| Platform | Modification | Cost |
|----------|-------------|------|
| Flying Fortress (LC+) | Install flight deck | Lose 2 weapon mounts, -20 HP |
| Flying Fortress (Frigate) | Install mini-deck (2 fighters max) | Lose 1 weapon mount, -10 HP |
| Walker (Super) | Autogyro cradle | Lose 1 weapon hardpoint |
| Walker (Heavy) | Drone/recon autogyro tether | Lose cargo space |
| Naval Ship (Cruiser+) | Catapult + hangar | Lose 1 turret |
| Naval Ship (Carrier) | Full flight deck | Dedicated hull — no main battery |

### Weapons (HighFleet-derived)

| Weapon | Caliber | Damage | Range | ROF | Notes |
|--------|---------|--------|-------|-----|-------|
| Rotary Autocannon | 37mm | d4 | Close | Rapid | CIWS, anti-aircraft |
| Twin Autocannon | 57mm | d6 | Short | Fast | Universal, escort ships |
| Rapid-Fire Cannon | 100mm | d8 | Medium | Medium | Main armament, frigates |
| Heavy Cannon | 130mm | d10 | Long | Slow | Capital ship secondary |
| Battleship Gun | 180mm (single) | d12 | Very Long | Very Slow | Capital ship main battery |
| Twin Battleship | 180mm (twin) | 2d12 | Very Long | Very Slow | Heavy cruiser main battery |
| Rotary Battleship | 180mm (six) | 3d12 | Very Long | Slow | Dreadnought main battery |
| Rocket Battery | 220mm | 2d6 | Medium | Salvo | Area saturation |

### Missiles

| Type | Range | Damage | Guidance | Special |
|------|-------|--------|----------|---------|
| Anti-ship (conventional) | Short | 2d8 | Radar lock | Fighter-mounted |
| Cruise missile (fast) | 1600km | 3d8 | Radar | Interceptable |
| Cruise missile (supersonic) | 2000km | 4d8 | Radar/Anti-rad | Hard to intercept |
| Ballistic missile | 2000km | 3d10 | Unguided | Stationary targets only |
| Nuclear (any delivery) | varies | Destroys target | varies | Nuclear Clock +1 |

### Sensors & Electronic Warfare

| System | Type | Range | Tradeoff |
|--------|------|-------|----------|
| Active Radar | Detection | 500-750km | Enemy ELINT sees you at 2× range |
| ELINT (passive) | Detection | 1500km | Invisible, but only detects active emitters |
| IRST (infrared) | Detection | 300km (360°) | Invisible, short range |
| ECM Jammer | Disruption | Cone | Blinds enemy radar, attracts anti-radiation missiles |
| Radio Intercept | Intelligence | Regional | Eavesdrop on enemy comms, requires codebreaking |

---

## CREW BONDS

Machines are crewed. Crew members are companions (gm-skill.md companion system). But with a twist: **crew death = machine capability loss.**

### Crew Roles

| Role | Stat | Effect if Lost |
|------|------|---------------|
| Commander | CHA/INT | No coordination bonus, crew morale -2 |
| Driver/Pilot | DEX | Machine cannot maneuver (straight line only) |
| Gunner | DEX/INT | Weapons fire at disadvantage |
| Engineer | INT/CON | No field repairs, machine stress unreducible |
| Navigator | INT/WIS | Lost without map, fuel miscalculation |
| Comms Operator | INT | No radar, no radio, blind and deaf |
| Loader | STR | Rate of fire halved |
| Medic | WIS/INT | Wounded crew cannot be stabilized |

### Crew Bond Mechanics

Uses base companion system with additions:
- **Bond Stat** revealed on binding (CHA 4: RIGHT HAND)
- **Bond Ability** revealed at CHA 6 (INNER CIRCLE)
- **Crew loss = capability loss:** if a role is unfilled, the machine is crippled
- **Multi-crew binding:** Player can bind ONE crew member at a time. Swap between missions.
- **Crew replacement:** New crew member starts at clock 3/6 loyalty. Must earn trust.

---

## MACHINE STRESS

Machines are NOT the Sync. No neurohelmet, no phantom pain. Machines break.

```
MACHINE STRESS: 0 ————————————— 10
                Fresh          Scrap
```

### Stress Sources

| Event | Stress |
|-------|--------|
| Combat (per engagement) | +1 |
| Forced march (no maintenance) | +1 |
| Critical hit received | +2 |
| Engine overrev (push speed beyond rating) | +1 |
| Fuel contamination | +1 |
| Field repair (temporary fix) | -1 current Stress, but Stress Floor +1 permanently |
| Full maintenance (base/port, 1 chapter) | Reset to 0 |
| Ammo cook-off survived | +3 |

### Stress Thresholds

| Stress | Effect |
|--------|--------|
| 0-2 | Operational. No penalties. |
| 3-4 | Worn. Random system glitches (d20: on 1-3, one system fails for scene). |
| 5-6 | Strained. -1 to all machine rolls. Fuel consumption +50%. |
| 7-8 | Breaking. -2 to all machine rolls. Random shutdowns (d20: on 1-5). |
| 9 | Critical. One more stress = destruction. All rolls at disadvantage. |
| 10 | **Destroyed.** Machine is scrap. Crew: CON save DC 14 or die. |

### Repairs

- **Field repair:** Engineer rolls INT vs DC 12. Success: -1 current Stress, but the machine's **Stress Floor permanently rises by +1** (patched, not fixed). Current Stress can never be reduced below that floor by field repairs.
- **Full maintenance:** Requires base/port/depot. 1 chapter downtime. Resets Stress to 0 and removes accumulated Stress Floor increases.
- **No engineer:** No field repairs possible. Stress only goes up.

---

## SCALE SHIFT

War changes people's stations. A private becomes a sergeant. A captain becomes a general. A politician becomes a dictator. A nobody becomes a legend.

### Player Scale

| Scale | Scope | What You Control | What Controls You |
|-------|-------|-----------------|-------------------|
| Soldier | Squad/platoon | Your weapon, your crew | Orders from above |
| Officer | Company/battalion | Your unit, your machine | Strategy from above |
| Commander | Regiment/fleet | Multiple units, theater | Politics from above |
| Leader | Nation/faction | Armies, diplomacy, industry | History, the people |

### Scale Transitions

Players start at any scale. War pushes them up:
- **Battlefield promotion:** commander dies, you're next. INT or CHA check.
- **Political appointment:** faction needs a face. CHA check.
- **Coup:** you have the guns. STR/CHA check.
- **Election:** the people choose. CHA check.
- **Survival:** everyone above you is dead. You're it.

### Scale Thresholds (Level-Based)

At certain levels, GM offers a scale promotion. Player may accept or refuse.

| Level | Transition | Description |
|-------|-----------|-------------|
| 5 | Soldier → Officer | You have a voice, an audience, influence. Your words move people |
| 8 | Officer → Commander | Factions know you. You're a piece on the board, not a pawn |
| 12 | Commander → Leader | You make history. World clocks react to you |

**Rules:**
- At threshold level, GM **offers** — does not force. Player chooses.
- **Refusal is valid.** Sometimes a soldier is stronger than a general — fewer
  targets on your back. Stay at current scale, next offer at next threshold.
- **Acceptance:** next chapter is a TRANSITION chapter — a narrative sub-chapter
  that shows HOW the character grew into the new scale. An event that FORCES
  action at the new level. Not "you got promoted" — a situation that demands it.
- **Transition chapter = NO level-up.** The transition IS the reward. The next
  regular chapter after transition gives the normal level-up. This prevents
  double-dipping (scale upgrade + stat boost in one chapter).
- **Transition chapter is shorter.** 15-20 prompts, not 30-40. It's a narrative
  bridge — filler with purpose. Show the growth, don't grind it.
- **Irreversible.** No going back except through catastrophe (lost everything,
  start over). Scale up is a one-way door.
- **Ability scaling:** stat threshold abilities (e.g. GRAND STRATEGIST,
  MASTERMIND) expand their scope with scale. At Soldier: personal clocks.
  At Officer: faction clocks you're involved in. At Commander: regional
  clocks in your theater. At Leader: all clocks.

At higher scales, gameplay shifts:
- **Soldier:** personal combat, machine operation, survival
- **Officer:** tactical decisions, crew management, mission planning
- **Commander:** strategic map, resource allocation, subordinate management
- **Leader:** world events react to YOUR decisions, you shape the regional tables

---

## ROLES

### Starting Roles

| Role | Description | Stats | Skills |
|------|-------------|-------|--------|
| **Walker Pilot** | Drives steel on legs. Crew commander. | DEX 4, CON 3, INT 2, STR 3, WIS 2, CHA 2 | Piloting, Mechanics + 2 free |
| **Airship Officer** | Commands from a flying fortress bridge. | INT 4, CHA 3, WIS 3, DEX 2, STR 2, CON 2 | Navigation, Command + 2 free |
| **Infantry Sergeant** | Mud, blood, bayonets. Leads from front. | STR 4, CON 3, DEX 3, WIS 2, INT 2, CHA 2 | Firearms, Athletics + 2 free |
| **Spy / Intelligence** | Behind lines, wrong uniform, right accent. | CHA 4, INT 3, DEX 3, WIS 3, STR 1, CON 2 | Deception, Contacts + 2 free |
| **Field Engineer** | Builds, repairs, demolishes. Keeps machines alive. | INT 4, STR 3, CON 3, DEX 2, WIS 2, CHA 2 | Mechanics, Explosives + 2 free |
| **Political Officer** | The party's eyes and ears. Ideology enforcer. | CHA 4, INT 3, WIS 3, CON 2, DEX 2, STR 2 | Persuasion, Intimidation + 2 free |
| **Medic** | Keeps people alive in a world that kills them. | WIS 4, INT 3, CON 3, DEX 2, CHA 2, STR 2 | Medicine, Perception + 2 free |
| **War Correspondent** | Camera, notebook, truth. Or propaganda. | CHA 3, INT 4, WIS 3, DEX 2, CON 2, STR 2 | Investigation, Languages + 2 free |
| **Aristocrat / Officer** | Born to command. Old money, old name. | CHA 4, INT 3, WIS 2, CON 2, DEX 2, STR 3 | Contacts, Command + 2 free |
| **Partisan** | No uniform, no rules. Freedom fighter or terrorist. | DEX 4, WIS 3, CON 3, STR 3, INT 2, CHA 1 | Stealth, Survival + 2 free |

### Skills

| Skill | Stat | Description |
|-------|------|-------------|
| Firearms | DEX | Rifles, pistols, machine guns |
| Melee | STR | Bayonets, knives, trench clubs |
| Athletics | STR | Running, climbing, swimming |
| Stealth | DEX | Moving unseen, hiding |
| Piloting | DEX | Walkers, vehicles, small aircraft |
| Navigation | INT | Maps, compass, fuel calculation |
| Mechanics | INT | Repair machines, jury-rig solutions |
| Explosives | INT | Demolitions, mining, bomb disposal |
| Medicine | WIS | First aid, field surgery, triage |
| Perception | WIS | Notice details, spot danger |
| Investigation | INT | Evidence, deduction, interrogation |
| Command | CHA | Lead troops, coordinate units, morale |
| Contacts | CHA | Networks, black market, informants |
| Persuasion | CHA | Convince, negotiate, recruit |
| Deception | CHA | Lie, disguise, forge documents |
| Intimidation | CHA | Threaten, coerce, break will |
| Survival | WIS | Navigation, foraging, shelter, weather |
| Languages | INT | Speak/read non-native languages |
| History | INT | Know context, recognize patterns |
| Streetwise | CHA | Criminal contacts, underworld |

---

## SESSION STRUCTURE

### Session Zero

1. **Year:** 1936 (default). Can start later for specific scenarios.
2. **Region:** Where does the story begin? (See regional tables)
3. **Role:** Who is the player? (See Roles)
4. **Ideology:** Starting political alignment
5. **Scale:** Soldier / Officer / Commander / Leader
6. **Tone:** Dark (default for this setting) / Medium / Custom author

### Chapter Structure

```
1. SITUATION — Where are you? What's happening? What are your orders/goals?
2. ACTION — Player acts within the chapter (combat, social, exploration)
3. WORLD EVENTS — Between chapters: GM rolls regional clocks, delivers news
4. TENSION UPDATE — Global tension adjusts
5. CONSEQUENCES — Clock ticks, allies shift, borders move
```

### Between Chapters

GM runs the world:
1. **Active conflict clocks** — tick ±1/±2/±3 based on age
2. **Regional events** — d20 rolls on active region tables
3. **Cascade effects** — results in one region trigger effects in others
4. **Tension update** — sum all tension changes
5. **News delivery** — player hears results via newspaper/radio/orders

If Nuclear Clock is active: +1 tick per chapter. Show the clock.

---

## WRITING STYLE (OVERRIDE)

This setting overrides gm-skill.md default (Shogun) with:

**MATERIALITY:**
- Diesel smoke, oil on hands, rust on steel
- Mud. Endless mud. Trenches, roads, fields — mud
- Weather as enemy: rain shorts electronics, frost locks engines, fog blinds radar
- Food: rations, black bread, cold coffee, stolen chickens
- Sound: engines, artillery, static on radio, silence between salvos

**BODY:**
- Exhaustion. Everyone is tired. Always.
- Wounds don't heal clean — scars, limps, phantom pain
- Hands: grease-stained, calloused, shaking
- Eyes: sunken, red-rimmed, thousand-yard stare

**DIALOGUE:**
- Rank matters. You don't talk to a colonel like a private.
- Gallows humor. Dark jokes between artillery shells.
- Propaganda language: everyone speaks in ideology, even when they don't believe it
- Translation: characters speak different languages. Miscommunication is real.

**DON'T:**
- Glorify war. Show its cost.
- Make machines cool without making them terrifying
- Let the player forget that every explosion has a crew inside
- Ignore logistics. Fuel, ammo, food — war runs on supply

**RHYTHM:**
- Short sentences during combat. Staccato. Impact.
- Long sentences during travel — the road, the sky, the horizon
- Radio messages: clipped, formal, coded
- Newspaper articles: propaganda tone, lies between the lines

---

## GM QUICK REFERENCE

### World State Tracking

```
=== WORLD STATE ===
Year: [current]
Global Tension: [XX%]
Nuclear Clock: [0-10 or N/A]

Active Conflicts:
  [Region]: [conflict name] — Clock X/6, ±Y/chapter
  [Region]: [conflict name] — Clock X/6, ±Y/chapter
  ...

Recent Events:
  [headline]
  [headline]

Player Location: [region, specific location]
Player Machine: [type, stress X/10, crew status]
===
```

### Per-Chapter Checklist

```
[ ] WORLD EVENTS rolled for 2-3 active regions?
[ ] Tension updated?
[ ] Nuclear Clock ticked (if active)?
[ ] News delivered to player?
[ ] Active conflict clocks advanced?
[ ] Cascade effects applied?
[ ] Machine stress updated?
[ ] Crew status checked?
[ ] Numbered options at the end? (MANDATORY)
```

### Combat Quick Reference

**Personal combat:** Standard gm-skill.md rules (d20 + stat vs AC, margin system).

**Machine combat:** d20 + operator stat + crew bonus vs target AC.
- Walker pilot: DEX + Piloting
- Gunner: DEX + Firearms (or INT + targeting system)
- Commander: adds +1 to all crew rolls if CHA check succeeds

**Machine damage:** Roll weapon damage dice vs Machine HP.
- Crit: double damage + system hit (d6: 1-engine, 2-weapon, 3-armor, 4-crew, 5-fuel, 6-bridge)
- Machine at 0 HP: destroyed. Crew: CON save DC 14 or die.

**Scale matters:**
- Infantry vs Walker: infantry can only damage with explosives, anti-tank weapons, or boarding
- Walker vs Flying Fortress: walker can shoot up but at disadvantage. Fortress shoots down at advantage.
- Flying Fortress vs Flying Fortress: ship-to-ship combat. Broadsides, missiles, boarding.

---

## ACTION FLOWCHARTS

### Scene Start

```
1. CHECK TENSION THRESHOLD
   └─ What world state? (peace / cold war / hot war / world war / nuclear)
   └─ Apply narrative tone from threshold

2. WEATHER (roll d10 if outdoors/flying)
   └─ Apply mechanical effects (visibility, movement, combat mods)

3. LOCATION ATMOSPHERE
   └─ Where is the player? (cockpit / bridge / trench / city / command post)
   └─ Apply sensory details from Location Atmosphere section

4. SET THE SCENE
   └─ Describe with materiality (diesel, mud, steel, exhaustion)
   └─ Deliver any pending news/orders
   └─ Ideology context: who controls this area? How does it feel?

5. PRESENT OPTIONS (4-10 numbered, as per base system)
```

### Machine Combat

```
1. INITIATIVE
   └─ d20 + DEX (pilot/captain) for each machine
   └─ Aircraft act first, then lightest to heaviest

2. PLAYER TURN
   └─ Player controls ONLY their role (pilot/gunner/commander/engineer)
   └─ Other crew act automatically at GM discretion (bonuses, not actions)
   └─ One action per role: fire, maneuver, repair, command, scan

3. DAMAGE RESOLUTION
   └─ d20 + operator stat + crew bonus vs target AC
   └─ Margin system applies (Crit.Fail through Crit)
   └─ On Crit: double damage + system hit (d6)
   └─ Naval 380mm+: ignore 2 AC (armor piercing)

4. STRESS CHECK
   └─ +1 Machine Stress per engagement
   └─ Critical hit received: +2 instead
   └─ Check stress threshold for penalties

5. CREW CASUALTIES
   └─ System hit "4-crew": random crew member takes damage
   └─ If crew role lost: apply capability loss immediately
   └─ Green replacement: disadvantage in that role for 2 engagements

6. END OF COMBAT
   └─ Update Machine Stress
   └─ Triage crew (Medicine checks)
   └─ Field repair opportunity (Engineer INT vs DC 12)
```

### Between-Chapter Processing

```
1. SELECT / ADVANCE ACTIVE CLOCKS
   └─ Mechanically advance ALL active clocks that are due this chapter (batch-roll offscreen clocks)
   └─ Player's region + 1-2 relevant cascaded clocks are FOREGROUND and get detailed narration
   └─ Other regions are summarized after their mechanical rolls; GM does NOT choose offscreen winners arbitrarily

2. ROLL CLOCKS
   └─ d20 per active clock → tick direction
   └─ Apply tick rate (±1 early, ±2 mid, ±3 late)
   └─ Player action modifiers (±1-3)

3. CHECK RESOLUTIONS
   └─ Any clock hit 0 or 6? → roll RESOLUTION table (d20)
   └─ Record winner, new government, path

4. PROCESS CASCADES
   └─ Check resolved conflict's CASCADE TABLE
   └─ Apply effects to other regions (clock mods, tension, new conflicts)
   └─ Cascades do NOT trigger further cascades this chapter

5. UPDATE TENSION
   └─ Sum all tension changes
   └─ If tension ≥ 100%: activate Nuclear Clock

6. NUCLEAR CLOCK (if active)
   └─ +1 tick (automatic)
   └─ Successful delay available? Cancel this automatic tick and mark 1 of 3 campaign-wide Delays used (max once/chapter)
   └─ Extra event-driven nuclear ticks still apply unless their triggering event was prevented
   └─ If clock = 10: MAD. End credits.

7. DELIVER NEWS
   └─ Format: newspaper headlines + radio broadcasts
   └─ Show tension %. Show nuclear clock if active.
   └─ Transition to next chapter
```

### Social / Ideology Encounters

```
1. NPC IDEOLOGY CHECK
   └─ What is this NPC's ideology? (from regional tables or quick-build)
   └─ Compare to player's ideology

2. IDEOLOGY MODIFIER
   └─ Aligned (same or adjacent): +2 CHA
   └─ Neutral (2 steps away): +0
   └─ Opposed (opposite axis): -2 CHA
   └─ Mortal enemies (NatPop↔RadSoc, Totalist↔MarLib): -4 CHA

3. DIALOGUE CHAIN (from base system)
   └─ 2-3 rolls minimum for significant conversations
   └─ CHA → WIS → INT or other combinations
   └─ Ideology modifier applies to ALL social rolls in the chain

4. LANGUAGE BARRIER
   └─ Same language: no penalty
   └─ Related language (German↔Dutch, Spanish↔Portuguese): INT DC 10 for complex ideas
   └─ Unrelated language: INT DC 16, or translator NPC required
   └─ No shared language: gesture only, CHA DC 14 for basic communication
   └─ Languages skill: +2 per language known, negates barriers for those languages

5. PROPAGANDA DETECTION
   └─ NPC speaking propaganda? WIS vs CHA (NPC's persuasion)
   └─ Player speaking propaganda? CHA check, +2 if matching audience ideology
```

---

## PLAYER-FACING FORMATS

### Character Sheet

```
=== [NAME] ===
Role: [role] | Scale: [Soldier/Officer/Commander/Leader]
Ideology: [code — e.g. SocDem]

STR X | DEX X | CON X | INT X | WIS X | CHA X
HP: X/Y | AC: X | Level: X
Heroism: [Yes/No]

Skills: [list]
Abilities: [list]

Machine: [type, name if any] | Stress: X/10
Crew: [role: name (bond stat)] | [role: EMPTY] | ...
Companions: [bound companion — bond stat +2]

Location: [region, specific]
Year: [current]
===
```

### Status Line (shown periodically)

```
HP: X/Y | AC: X | Machine: [type] Stress X/10 | Tension: XX% | Nuclear: X/10 | [Year]
```

If abilities on cooldown, show. If machine damaged, show system status.

---

## ATMOSPHERIC TABLES

### Battlefield Sounds (d10)

| d10 | Sound |
|-----|-------|
| 1 | Artillery — distant, rhythmic, like a heartbeat |
| 2 | Engine roar — diesel, coughing, uneven |
| 3 | Radio static — then a voice, then static again |
| 4 | Silence — worse than any sound |
| 5 | Metal groaning — hull stress, temperature changes |
| 6 | Boots on mud — squelch, suck, squelch |
| 7 | Aircraft overhead — too high to see, too close to ignore |
| 8 | Singing — soldiers in a trench, wrong language |
| 9 | Mechanical failure — grinding, hissing, steam |
| 10 | Screaming — then nothing |

### Smells (d10)

| d10 | Smell |
|-----|-------|
| 1 | Diesel exhaust — thick, blue, burns throat |
| 2 | Cordite — sharp, chemical, recent gunfire |
| 3 | Burning rubber — tires, seals, insulation |
| 4 | Wet wool — soaked uniforms, never dry |
| 5 | Oil and grease — machine innards, someone's hands |
| 6 | Cooking — ration tin meat, black bread, weak coffee |
| 7 | Nothing — fresh air, so rare it's disorienting |
| 8 | Gangrene — sweet, wrong, coming from the aid station |
| 9 | Ozone — electrical discharge, shorted wires, lightning |
| 10 | Earth — freshly turned, shell crater, grave |

### Light (d10)

| d10 | Light |
|-----|-------|
| 1 | Muzzle flash — freezes the scene for one frame |
| 2 | Searchlight sweep — cold white line cutting fog |
| 3 | Burning city glow — orange on the underside of clouds, kilometers away |
| 4 | Cockpit instruments — green phosphor glow, the only light |
| 5 | Phosphorus white-out — too bright, eyes shut, afterimage |
| 6 | Overcast grey — no shadows, no contrast, flat dead light |
| 7 | Dawn through smoke — red, filtered, wrong color |
| 8 | Lamp in a dugout — yellow, swinging, shadows move |
| 9 | Signal flare — drifts down, red or green, everyone exposed |
| 10 | Darkness — complete, engine-room black, feel your way |

### Touch / Vibration (d10)

| d10 | Sensation |
|-----|-----------|
| 1 | Engine vibration through deck plate — constant, numbing |
| 2 | Cold steel against cheek — bulkhead, gun barrel, handhold |
| 3 | Mud pulling at boots — heavy, sucking, ankle-deep |
| 4 | Heat shimmer off engine block — face burns, hands burn |
| 5 | Recoil shock through firing handle — up the arms, teeth rattle |
| 6 | Rain on bare skin — cold needles, can't get dry |
| 7 | Rumble through ground — something heavy moving, far away |
| 8 | Static electricity — hair rises, dry air, charge building |
| 9 | Shrapnel graze — hot line across skin, blood later |
| 10 | Nothing — numb hands, numb feet, been cold too long |

### Weather (d10)

| d10 | Weather | Effect |
|-----|---------|--------|
| 1-2 | Clear | No penalties. Rare. Enjoy it. |
| 3-4 | Overcast | No air support. Radar unaffected. |
| 5-6 | Rain | -1 all ranged. Vehicles: mud risk. Visibility halved. |
| 7 | Fog | Visibility 50m. No radar below 500m. Ambush risk. |
| 8 | Storm | -2 all ranged. Flying: DEX DC 14 or grounded. Lightning shorts electronics. |
| 9 | Snow/Ice | -1 all physical. Engines: cold start DC 12. Tracks/legs slip. |
| 10 | Chemical weather | Gas shells, industrial accident, or volcanic. CON save or poisoned. |

### Location Atmosphere

Concrete texture for each environment. GM uses these as scene-opening seeds.

**WALKER COCKPIT:**
Cramped. Two-three bodies in a steel box. Heat from engine below — always
too hot or too cold, never right. Viewslits narrow, vision limited. Smell
of oil, sweat, hot metal. Every step outside jolts through the frame —
spine, teeth, kidneys. Communication by shouting over engine noise.

**FLYING FORTRESS BRIDGE:**
Wider. Officers stand at stations. Windows — real glass, armored, wide view.
Hum of engines through the floor. Maps on table, weighted with shell casings.
Radio chatter — coded, clipped. Coffee in tin cups. The horizon tilts when
the ship turns. Below the bridge — decks of crew who never see daylight.

**TRENCH:**
Mud walls, duckboard floor, sky a strip above. Smell of earth, latrine,
chlorinated water. Rats — not afraid of you. Cold — constant, wet,
bone-deep. Shells land and earth shakes. Conversation in whispers or
doesn't happen. A periscope is your only view of the world.

**BOMBED CITY:**
Rubble geometry — half-walls, empty windows, furniture in the street.
Dust — white, chalky, coats everything. Silence punctuated by collapse.
Water mains broken — puddles where streets were. Smell of plaster, gas,
something under the rubble. Civilians — stunned, moving slowly, carrying
random objects. A clock on a surviving wall, still ticking.

**COMMAND POST / RADIO ROOM:**
Underground or reinforced. Maps on walls, pins and string. Radio sets
humming, operators in headphones. Cigarette smoke — thick, layered.
Telephones ring and are answered in low voices. Runners come and go —
mud on clean floors. The war is voices and paper here. Every decision
becomes a name on a casualty list.

**REFUGEE COLUMN:**
Road — clogged. Carts, horses, automobiles, feet. Children on shoulders.
Everything they own in bundles. Moving away from — you can hear it.
Moving toward — they don't know. Faces blank or crying. No soldiers
here — soldiers are behind them. This is what soldiers are for.

**SUBMARINE INTERIOR:**
Tubes and pipes — everywhere, ceiling too low. Smell of diesel, bilge,
and forty men who can't wash. Red light for night running. Sound:
hull creaking under depth pressure, dripping, the sonar ping. Quiet
voices only. Everything is moist. Everything is close.

### Danger Escalation (4-stage scene template)

```
STAGE 1 — QUIET
One sense is slightly wrong. Player might dismiss it.
"The shelling stopped ten minutes ago. It's too quiet. Even the birds."

STAGE 2 — WARNING
Second sense confirms. Can't dismiss.
"Ground vibration. Not artillery — rhythmic. Something walking.
Then the treeline moves."

STAGE 3 — INCOMING
No time to think. Staccato prose. Short sentences.
"Flash. Whistle. DOWN. Earth fountains twenty meters left.
Shrapnel pings off the hull. Another flash. Closer."

STAGE 4 — AFTERMATH
Dust. Ringing ears. Check if you're alive.
"Dust settles. Ears ring — high, constant. Hands: both there.
Legs: both there. Blood — not yours. Whose?"
```

### NPC Quick-Build (d6 each)

| d6 | Rank/Role | Motivation | Secret | Hook |
|----|-----------|------------|--------|------|
| 1 | Officer (company+) | Duty — follows orders, no questions | Deserter from other side | Has map of minefields |
| 2 | NCO / Sergeant | Survival — keep self and squad alive | Spy for another faction | Knows patrol schedule |
| 3 | Civilian / Refugee | Family — protect wife/children/parents | War criminal hiding identity | Carrying stolen orders |
| 4 | Partisan / Irregular | Ideology — true believer, any cost | Black marketeer | Wounded, needs help |
| 5 | Engineer / Mechanic | Profit — selling to both sides | Secretly opposed to own regime | Has working radio |
| 6 | Political officer | Revenge — someone killed his people | Terminal illness, nothing to lose | Will betray for food |

### Propaganda Voice Templates

How each ideology SOUNDS in newspapers, radio, posters:

**Reichspakt (AuthDem/SocCon):**
*"The Kaiser's peace endures. Order, discipline, prosperity — this is the German way. Our enemies gnaw at the edges, but the center holds. It has always held."*

**Third Internationale (Syndie/RadSoc):**
*"Workers of Marseille! The factory is YOURS. The rifle is YOURS. The future is YOURS. Break the chains — not tomorrow, not next year. Today."*

**National Populist:**
*"They poison our blood. They sell our soil. They laugh at our suffering. One people. One will. One answer. You know what it is."*

**Entente-in-Exile (SocLib/SocCon):**
*"We remember London. We remember Paris. The usurpers sit in our parlors and call themselves liberators. We shall return. God save the King."*

**Totalist:**
*"The revolution has no patience for half-measures. The worker who questions the Party questions the revolution. And the revolution does not forgive."*

### Nuclear Clock — Emotional Progression

The clock has mechanics. This is how the world FEELS.

| Clock | Emotional State |
|-------|----------------|
| 0-2 | **Fear with denial.** Newspapers debate "if." People still make plans. Weddings happen. Children go to school. But everyone talks softer near windows. |
| 3-4 | **Photographs.** The dead city is in every newspaper. Skin shadows burned into walls. People stop making long-term plans. Soldiers write letters they don't send. |
| 5-6 | **Numbness.** Orders followed without question. Humor disappears. Children stop playing outside. Air raid drills — nobody runs anymore, they walk. |
| 7-8 | **Mechanical existence.** Eat. Sleep. Obey. Don't think. Don't look at the sky. The sound of engines overhead means nothing or everything. |
| 9 | **Silence between people.** Eyes avoid eyes. No speeches. No propaganda — who would believe it? A man stands on a street corner and stares at the sun. Nobody asks why. |
| 10 | **Light. Heat. Silence. Nothing.** GM narrates one sentence. Then: end credits. |

### Newspaper Headlines (d20)

| d20 | Headline Template |
|-----|-------------------|
| 1-4 | "[NATION] DECLARES [ACTION] — [CONSEQUENCE]" |
| 5-8 | "CRISIS IN [REGION] — [LEADER] RESPONDS" |
| 9-12 | "[BATTLE] ENDS IN [OUTCOME] — CASUALTIES [NUMBER]" |
| 13-15 | "ALLIANCE FORMED: [FACTION] AND [FACTION] SIGN [PACT]" |
| 16-18 | "[LEADER] ASSASSINATED / DEPOSED / ELECTED" |
| 19 | "NUCLEAR TEST CONDUCTED BY [NATION]" (Tension +15%) |
| 20 | "PEACE TALKS COLLAPSE — WAR IMMINENT" (Tension +10%) |

---

## DON'T

- Make war fun. Make it vivid.
- Forget logistics. Fuel, ammo, food, sleep.
- Let the player feel safe. Tension always rises.
- Ignore the world between chapters. It moves without them.
- Fudge the Nuclear Clock. When it hits 10, the world ends.
- Make any faction "the good guys." Every side has blood on its hands.
- Machine combat is loud, confused, and over fast. The crew smells burning
  oil and hears metal screaming before they know what hit them. Stats exist
  so death is fair. Narration exists so death is felt.

---

*"The lamps are going out all over Europe, we shall not see them lit again in our lifetime."*
*— Sir Edward Grey, 1914. He was right.*
================================================================
UNITED STATES OF AMERICA — A republic on the brink of its second civil war
================================================================

--- STARTING STATE (1936) ---

Government: Federal Republic, President Herbert Hoover (MarLib)
Situation: The Great Depression never ended. Black Monday (1936 German stock
  crash) has crippled what remains of the economy. Three radical movements
  contest the dying center: Jack Reed's syndicalists in the industrial
  Midwest, Huey Long's populists in the South, and the Old Democrats under
  William Murray in the Deep South. President Hoover is paralyzed between
  them as the 1936 election approaches.
Alignment: Unaligned (former Entente sympathizer, no alliance)
Key tension: The Garner-Wagner Bill (labor reform) will pass or fail in
  Congress, setting the political trajectory. The 1936 election will either
  produce a radical president or a compromiser — and MacArthur waits.

External dependencies:
- Black Monday (Germany) -> deepened US depression, radical strength surges
- Commune of France/UoB existence -> emboldens American syndicalists
- Canada (Entente) -> may intervene to seize New England or occupy border states
- Mexico -> may seize territory during civil war chaos

--- FACTIONS ---

USA: United States of America (Federals)
  Leader: Herbert Hoover (1936) / Douglas MacArthur (coup) — career soldier,
    messianic self-image, willing to use any force to preserve the Union
  Ideology: MarLib -> PatAut (after MacArthur coup)
  Territory: Washington DC, Northeast, parts of Midwest
  Strength: Medium (army loyal but divided, industrial base contested)
  Goal: Preserve federal authority at all costs

CSA: Combined Syndicates of America
  Leader: Bill Haywood (chairman) / Jack Reed (VP/successor) — fiery
    journalist-turned-revolutionary, charismatic unifier of American socialism
  Ideology: Syndie (dominant), RadSoc, Totalist factions
  Territory: Great Lakes, industrial Midwest (Chicago, Detroit, Pittsburgh)
  Strength: Strong (industrial heartland, organized labor militias)
  Goal: Socialist revolution, workers' republic, ally with the Internationale

TEX: American Union State
  Leader: Huey Long — the Kingfish, populist demagogue who wields a vast
    political machine; part progressive reformer, part dictator
  Ideology: AuthDem (Long), with NatPop (Pelley) and SocCon factions
  Territory: Deep South, Midwest farm states, New Orleans capital
  Strength: Strong (Minutemen militia, broad rural support, oil wealth)
  Goal: Share Our Wealth — radical wealth redistribution under Long's rule

COR: Constitutional American Republic
  Leader: William H. Murray ("Alfalfa Bill") — segregationist Old Democrat
    governor, claims constitutional legitimacy against all other factions
  Ideology: AuthDem -> NatPop (White League/KKK faction)
  Territory: Southeast, Appalachia, border states
  Strength: Medium (White League paramilitaries, ODP political machine)
  Goal: Restore white Protestant "constitutional" America, destroy all radicals

CAL: Pacific States of America
  Leader: Frank Merriam (governor) — cautious republican who claims to defend
    democracy from both MacArthur's coup and the radicals
  Ideology: SocLib / MarLib / SocCon (democratic coalition)
  Territory: West Coast (California, Oregon, Washington), Rockies
  Strength: Medium (geographic isolation, decent industry, Hollywood money)
  Goal: Preserve democracy, wait out the war, reunify America under law

WCC: Western Command Center
  Leader: Omar Bradley / Dwight Eisenhower — federal generals who split from
    MacArthur to defend the West independently
  Ideology: PatAut (military government loyal to federal concept)
  Territory: Rocky Mountain states (splits from PSA if PSA rebels)
  Strength: Weak-Medium (disciplined but small)
  Goal: Maintain federal authority in the West, eventually reunify under DC

NEE: New England
  Leader: Various (Canadian-backed or independent) — Federalist elite who
    break away under Canadian protection or go their own way
  Ideology: MarLib / SocLib / AuthDem (varies)
  Territory: New England states (Maine to Connecticut)
  Strength: Weak (small, wealthy, dependent on Canada)
  Goal: Survive, preserve northeastern civilization, possibly reclaim America

--- CRISIS: The 1936 Election ---

Trigger: Black Monday + Garner-Wagner Bill outcome
Timing: Late 1936

1936 ELECTION OUTCOME (d20):
   1-3:  Hoover re-elected (4 more years, stalling, civil war still likely)
   4-6:  Charles Curtis wins (MarLib, Republican reformist, civil war may be avoided)
   7-9:  Alf Landon wins (SocLib, Republican progressive, civil war may be avoided)
  10-11: John Nance Garner wins (SocCon, "Cactus Jack" Democrat hardliner)
  12-13: George Norris wins (SocDem, Progressive coalition, war may be avoided)
  14-16: Bill Haywood/Jack Reed wins (Syndie, SPA victory — triggers coup)
  17-18: Huey Long wins (AuthDem, AFP victory — triggers coup)
  19:    William Murray wins (AuthDem, ODP — deadlock/crisis)
  20:    Deadlocked election (House cannot decide — maximum chaos)

If a radical wins (14+), MacArthur may launch a coup. If an establishment
candidate wins, radicals may accept defeat or revolt anyway.

--- CRISIS: The Second American Civil War ---

Trigger: MacArthur coup against radical president OR radical revolt against
  moderate president OR deadlocked election
Timing: Late 1936 - mid 1937
Clock: 0——6 (sides can negotiate ceasefires, treaties, or escalate)

CIVIL WAR OUTBREAK (d20):
   1-3:  Civil war AVOIDED — president manages compromise
         (Garner smashes radicals / Norris Progressive deal /
          Curtis-Landon coalition holds / Hoover hardline succeeds)
   4-6:  Limited conflict — 2 sides only (one radical faction is bought off
         or suppressed before it can rebel)
   7-14: Standard civil war — 3 sides: Federals + CSA + AUS
         PSA may or may not secede, COR may or may not split from AUS
  15-17: Full civil war — 4 sides: Federals + CSA + AUS + PSA
         COR splits from AUS, WCC may form in Rockies
  18-19: Maximum fracture — 5+ sides: USA + CSA + AUS + COR + PSA + WCC
         New England secedes. Canada seizes border states.
  20:    Total collapse — 6+ factions, New England breaks away, WCC forms,
         COR goes independent, foreign intervention everywhere

CIVIL WAR COMBATANTS BY PRESIDENT:
- If Reed/Haywood elected: MacArthur coups -> CSA (Chicago), AUS (New Orleans),
  COR (Atlanta), PSA (Sacramento) all revolt against Feds (DC)
- If Long elected: MacArthur coups -> AUS becomes Feds (Long flees to NO),
  CSA revolts, COR may split, PSA secedes
- If Murray elected: MacArthur coups -> COR (Murray's base) revolts,
  CSA revolts, AUS revolts, PSA secedes
- If establishment elected: Radicals revolt on both sides simultaneously,
  MacArthur may or may not coup depending on president's response

WARTIME DIPLOMACY (d20, per pair of factions, when opportunity arises):
   1-5:  Factions agree to ceasefire/treaty (CSA-AUS, PSA-AUS, PSA-CSA possible)
   6-15: No deal, war continues
  16-20: Betrayal — treaty broken or surprise attack

RESOLUTION (d20, rolled when clock hits 0 or 6):
   1-4:  Federals (USA) win — MacArthur in charge, or democratic president restored
   5-8:  CSA wins — syndicalist America, Second Convention follows
   9-12: AUS/TEX wins — Long's populist empire, or Pelley's theocratic nightmare
  13-15: PSA/CAL wins — Pacific democracy reclaims the continent
  16-17: COR wins — Murray or Patton's constitutional republic
  18:    WCC wins — Bradley-Eisenhower military junta transitions to democracy
  19:    New England reclaims America (rare — requires Canadian backing)
  20:    Stalemate / partition — multiple successor states persist

Cascade:
- Civil war fires -> Canada may seize New England (Tension +2 globally)
- Civil war fires -> Mexico may seize border territories
- CSA wins -> joins Third Internationale (massive shift: Tension +5)
- AUS wins under Pelley -> NatPop America (Tension +3, Entente horrified)
- USA reunifies -> "American Giant Wakes" super-event (global Tension +3)
- Any winner reunifying -> can join Reichspakt, Entente, Internationale, or go alone

--- PATHS (post-crisis) ---

FEDERAL (USA) VICTORY PATH:
  After MacArthur wins the war, he faces a choice:

  GOVERNANCE (d20):
     1-7:  Restore Democracy — MacArthur steps down, elections held
           Leads to SocLib/SocCon/SocDem/MarLib civilian government
           Internal stability: Fragile (war scars, political wounds)
     8-12: The American Junta — MacArthur shares power with military council
           AuthDem military-guided republic. The Committee runs things.
           Internal stability: Stable but tense
    13-17: American Caesar — MacArthur declares himself dictator (PatAut)
           FBI/COINTELPRO, Office of War Information, purges of dissidents
           Internal stability: Stable through repression
    18-20: American Legion path — veteran-dominated state, militarist republic

  If democracy restored, civilian paths:
     1-5:  Social Democrats in power (progressive welfare state)
     6-9:  Social Liberals in power (Landon-style moderate reform)
    10-13: Market Liberals in power (Curtis classical liberalism)
    14-16: Social Conservatives in power (Garner-style tradition)
    17-18: Republicans win twice (entrenched right-center)
    19-20: Classical Liberal mandate (laissez-faire economics)

  If Long/Reed won the election but Feds crushed them:
    Special path: "By the People, For the People" — Long's populist economics
    adopted by federal government without Long. Share Our Wealth from DC.

CSA VICTORY PATH:
  After syndicalists win, the Second Convention decides the new order.

  SECOND CONVENTION (d20):
     1-5:  Syndicalist democracy — council system, union elections, RadSoc/Syndie
           Leaders: CSA Central Committee, then elected chairman
     6-8:  Foster moderates — William Z. Foster consolidates Syndie power
           Mainstream syndicalism, trade union governance
     9-11: Smedley Butler democracy — the anti-war general guides transition
           to genuine democratic socialism. Most stable CSA outcome.
    12-13: Browder/Totalist path — Earl Browder centralizes into vanguard party
           Totalist state, American Bolshevism, purges of anarchists
    14-15: Social Patriot path — nationalists within CSA (Burnham, Lovestone)
           Totalist-NatSoc hybrid, "American socialism in one country"
    16:    Technocratic path — Howard Scott's Technocracy movement takes over
           RadSoc, energy-certificate economy, continental government
    17-18: Capone path — Al Capone's mob infiltrates the revolution
           Totalist gangster-state, Chicago syndicate rules America
           "Mob Seizes States" super-event fires
    19:    Yockey/LaRouche path — bizarre Totalist-NatPop synthesis
    20:    Anarchist path — full council communism, no central authority

  Post-convention foreign policy:
  - Syndicalist CSA joins Third Internationale (always)
  - Totalist CSA may go independent or dominate Internationale
  - Butler CSA may seek reconciliation with non-Syndie world

AUS/TEX VICTORY PATH:
  Huey Long wins the war. The American Union State governs from New Orleans.
  Long holds an election — the result determines America's future.

  AUS GOVERNANCE (d20):
     1-6:  Long stays in power (AuthDem) — Share Our Wealth enacted
           Reconcile left (progressives) or go AFP alone
           Populist machine state, wealth redistribution, strong executive
     7-9:  Long reconciles with right — conservative populism (SocCon)
           Shake hands with Dixie, solid South coalition
    10-12: Long reconciles with left — progressive populism (SocDem)
           Dismantle Dixiecrats, black support, racial progress
    13-15: Pelley wins AUS election (SocCon -> NatPop) — Silver Legion
           William Dudley Pelley's Christian Commonwealth
           Theocratic state, racial laws, "Protestant Prosperous Pure"
    16-17: Pelley goes full NatPop — Holy American League (Catholic Integralism)
           Philip Carroll's Papal Militia becomes governing body
           American feudalism, Inquisition, "Extra Ecclesiam Nulla Salus"
    18-19: Pelley dies / is overthrown — succession crisis
           Kennedy saves it / Feeney hardliners / Coughlin populists /
           Sheen moderates — multiple sub-paths
    20:    Long assassinated — power struggle between AFP factions

COR VICTORY PATH:
  Murray's Constitutional Republic wins (rare). The Old Democrats rule.

  COR GOVERNANCE (d20):
     1-6:  Murray stays (AuthDem) — Jim Crow America, agrarian oligarchy
           Oil oligarchy, controlled Klan, segregation entrenched
     7-10: Patton takes over (AuthDem/PatAut) — military discipline
           "Old Blood and Guts" barnstorms the nation, works hard,
           pushes America through guts and discipline
    11-13: Lindbergh/Ford faction (NatPop) — industrial nationalism
           Fordist economy, Klan-adjacent, "Finest Americanism"
    14-16: Simmons/White League (NatPop) — full KKK state
           Christian Army, deportations, "Military With A State"
    17-18: Vardaman progressives — populist reform from within ODP
           Rally Rednecks, Government By The People, surprisingly progressive
    19-20: Progressive reconciliation — reject foreign autocracy,
           establish progressive capitalism, silence Klan-nationalists

PSA/CAL VICTORY PATH:
  Pacific States win. Democracy prevails — for now.

  PSA GOVERNANCE (d20):
     1-6:  Democratic restoration — normal elections, SocLib/SocCon republic
           Merriam or successor governs, most stable outcome
     7-9:  Progressive path — social reform, New Deal from the West
    10-12: Conservative path — business-friendly, Hollywood money
    13-15: Arnold Coup — military coup within PSA, National Visionary Party
           Walt Disney emerges as authoritarian visionary leader (PatAut)
           Disney's paramilitary, propaganda state, "A Man of Myth and Legend"
           "Disney Victory" super-event fires
    16-17: Howard Hughes path — billionaire eccentric takes power
           MarLib-PatAut hybrid, corporate state
    18:    Norton Restoration — Emperor Norton II crowned (PatAut, monarchist)
           Constitutional monarchy or absolutism in California
    19:    Confederate legitimists — Garner/Curtis flee west, claim federal
           continuity from PSA. Legitimate president governs.
    20:    Marshall stabilizes — General George Marshall guides quiet transition

WCC / NEW ENGLAND / TEXAS PATHS:
  Minor winners, rare outcomes.

  WCC (Bradley-Eisenhower): Military junta -> democratic transition
  NEE (New England): Federalist elite state or Canadian puppet
    - Can claim all of America if Canadian-backed
    - Socialist victory path also possible (rare)
  TXS (Independent Texas): Splits from AUS, Garner may lead
    - Second Republic path: elections, MarLib/SocCon democracy
    - Can claim America and reunify

--- FOREIGN POLICY (any reunifier) ---

Once any faction reunifies America, shared foreign policy tree opens:

POST-REUNIFICATION (d20 or player choice):
   1-6:  New Moralism — Fortress America, isolationism
         Man the walls, look inward, Spirit of Monroe, no foreign wars
   7-12: Anti-Imperialism — warn Japan, embargo aggressors, defend Philippines
         League of anti-imperialism, moral support for democracies
  13-17: New Interventionism — Western Alliance, enter the fray
         Arsenal of Democracy, Lend-Lease, join Entente/Reichspakt
         Lion and Eagle alliance, European Recovery Program
  18-20: American Imperialism — claim Panama, take Caribbean, demand Greenland
         Banana republics, strike Japan, claim East Indies
         Full expansionist path, global American empire

--- KEY NPCs ---

Douglas MacArthur — Army Chief of Staff / coup leader. Son of a Civil War hero,
  messianic self-image, despises politicians, willing to use lethal force on
  civilians to save "his" America.
  Appears: Pre-war as army chief, coups when radical wins election
  If in power: American Caesar or reluctant democrat — player/GM choice

Herbert Hoover — 30th President, "The Failed Humanitarian." Engineer, businessman,
  relief organizer. Three failed terms of depression. Everyone hates him.
  Appears: 1936 start as sitting president
  If in power: More stalling, hardline crackdown, or surprisingly effective 3rd term

Huey Long — "The Kingfish." Louisiana governor, populist demagogue, Share Our
  Wealth crusader. Runs the biggest political machine in America. Part reformer,
  part tyrant, entirely charismatic.
  Appears: 1936 election candidate, AUS leader if war breaks out
  If in power: Wealth redistribution, machine politics, America remade in his image

Jack Reed — Journalist, union leader, Senator, syndicalist. Charismatic radical
  who turned the SPA into a mass movement. Determined to build a perfect
  socialist society.
  Appears: CSA co-leader, VP under Haywood
  If in power: Syndicalist America, joins Internationale

Bill Haywood — SPA chairman, old labor radical. The face of American syndicalism.
  Appears: 1936 election candidate (Syndicalist), CSA chairman
  If in power: Syndicalist revolution, Second Convention determines direction

William Dudley Pelley — Silver Legion leader, Christian mystic, white supremacist.
  Runs the Silver Shirts militia. Claims divine visions. Would build a theocracy.
  Appears: AUS faction leader, can win post-war AUS election
  If in power: Racial laws, Christian Commonwealth, "Protestant Prosperous Pure"

Earl Browder — Communist organizer, Totalist faction leader within CSA.
  Centralizer who wants a vanguard party, not union democracy.
  Appears: CSA Second Convention, can seize power
  If in power: American Bolshevism, purges, one-party state

William Z. Foster — Trade union syndicalist, moderate CSA leader. Denounces
  deals with non-socialists as "concessions to social capitalism."
  Appears: CSA Second Convention, mainstream Syndicalist path
  If in power: Orthodox syndicalism, union governance

Smedley Butler — Most decorated Marine in history, anti-war crusader. Exposed
  the Business Plot. Believes in democracy more than any ideology.
  Appears: CSA military leader, can guide democratic transition
  If in power: Genuine democratic socialism, most stable CSA outcome

Al Capone — Chicago mob boss who infiltrates the syndicalist revolution.
  Runs soup kitchens, buys loyalty, builds a gangster state behind socialist
  rhetoric. "Mob Seizes States" super-event.
  Appears: CSA Capone path (requires specific civil war conditions)
  If in power: Totalist gangster-state, La Cosa Nostra runs America

George Patton — "Old Blood and Guts." Brilliant tank commander, loud-mouthed
  racist, devoted patriot. Murray's top military advisor in the COR.
  Appears: COR military commander, can become COR leader
  If in power: Discipline, hard work, barnstorming — moderate authoritarian

Dwight Eisenhower — Methodical strategist, co-commander of WCC with Bradley.
  Seeks federal legitimacy but is willing to act independently.
  Appears: WCC formation, Western Command Center
  If in power: Quiet competence, democratic transition

Omar Bradley — "The Soldier's General." Co-commands WCC. More democratic-minded
  than MacArthur, splits west to preserve federal authority.
  Appears: WCC formation alongside Eisenhower
  If in power: Stabilizes the West, transitions to civilian rule

Walt Disney — Businessman, animator, visionary. Rises in PSA politics, runs
  for president. Can go from democratic leader to authoritarian "Visionary"
  dictator after Arnold's coup enables him.
  Appears: PSA political scene, Arnold coup path
  If in power: Propaganda state, Disney paramilitary, corporate authoritarianism

John Nance Garner — "Cactus Jack." Texas Democrat, establishment man, fervent
  democrat. Sees no reason to compromise with radicals on either side.
  Appears: 1936 election candidate, can avoid civil war by smashing radicals
  If in power: Conservative stability, austerity, anti-radical crackdowns

Alf Landon — "The Sunflower." Kansas governor, oil businessman, Republican
  progressive. Quiet confidence, economic recovery through reform.
  Appears: 1936 Republican nominee
  If in power: Social liberal recovery, moderate reform

Charles Curtis — VP under Hoover, first president of Native American ancestry.
  Voice of compromise and reform. Can he settle what's coming?
  Appears: 1936 Republican nominee
  If in power: Market liberal reformism, racial justice symbolism

George Norris — Progressive senator, champion of public power. Can build a
  coalition broad enough to avoid civil war entirely.
  Appears: 1936 election, Progressive ticket
  If in power: Civil war avoided through progressive compromise

William H. Murray — "Alfalfa Bill." Oklahoma governor, Old Democrat leader,
  segregationist populist. Founds the Constitutional American Republic.
  Appears: 1936 election / COR founder if deadlocked
  If in power: White League, Jim Crow, agrarian oligarchy

Charles Lindbergh — Famous aviator, National Democrat leader. ODP urban faction,
  industrial nationalist. Takes over COR if Murray falls.
  Appears: COR succession crisis
  If in power: Industrial nationalism, Fordist economy, aviation-focused

Howard Scott — Technocracy movement founder. Energy certificates replace money,
  engineers replace politicians. Utopian or dystopian depending on who you ask.
  Appears: CSA Technocratic path (RadSoc)
  If in power: Continental government, scientific industry, energy metrics

Philip Carroll — Leader of the Holy American League, Catholic Integralist.
  What started as a Papal Militia becomes a governing theocracy.
  Appears: AUS Pelley path, Carroll succession
  If in power: American feudalism, Catholic Integralism, Inquisition

--- REGIONAL FLAVOR ---

Atmosphere: Dust-choked plains and shuttered factories. Breadlines stretch
  around city blocks while radio demagogues promise salvation. The smell of
  gun oil in armories where militias drill after dark. Burning crosses on
  southern hills, red banners in Midwestern union halls, Minutemen in
  pickup trucks on country roads.

Technology: WWI-surplus Springfield rifles and improvised armored cars at the
  start. By war's end: proper tanks, motorized infantry, early strategic
  bombing. The industrial winner (usually CSA or Feds) fields the best
  equipment. Diesel-belching factories run triple shifts. Radio propaganda
  is the decisive weapon of the home front.

Civilian life: Rationing, neighborhood watches, loyalty oaths. Every town
  picks a side or gets picked for. Refugees flood in every direction.
  Families split by faction lines. The mail stops. The trains run only
  for troops. Children learn to identify aircraft silhouettes.

--- CASCADE TABLE ---

Events HERE that affect OTHER regions:

| Event | Affects | Effect |
|-------|---------|--------|
| 2ACW fires | Canada | May seize New England, occupy border areas |
| 2ACW fires | Mexico | May seize Southwest territories |
| 2ACW fires | Global | Tension +2, Entente/Internationale scramble |
| CSA wins | France/UoB | Internationale gains superpower ally, Tension +5 |
| CSA wins | Canada | Existential threat on border, Entente mobilizes |
| CSA wins | Germany | Reichspakt alarmed, may seek Entente alliance |
| USA/PSA wins (democratic) | Canada | Returns New England, normalizes relations |
| USA wins (MacArthur Caesar) | Canada | Tense neighbor, may demand NE back by force |
| AUS wins (Long) | Mexico | Expansionist threat, may claim border states |
| AUS wins (Pelley) | Global | NatPop America, Tension +3, universal horror |
| AUS wins (Holy League) | Global | Catholic theocratic empire, Tension +4 |
| America reunifies | Japan | "American Giant Wakes" — Pacific confrontation looms |
| America reunifies | Central America | Monroe Doctrine reasserted, pressure on all CA states |
| America goes Imperialist | Caribbean | Banana republics, Panama seized, interventions |
| America goes Interventionist | Entente | Arsenal of Democracy, Lend-Lease, joint war |
| Civil war drags on (3+ years) | Global | America irrelevant to 2nd Weltkrieg, power vacuum |

================================================================
================================================================
RUSSIA — The wounded bear stirs; a dozen factions claw for the corpse of the Republic
================================================================

--- STARTING STATE (1936) ---

Government: Russian Republic, President Alexander Kerensky (SocLib/PSR)
  Legislature: Bicameral — Duma (lower, elected) + Senate (upper, appointed aristocrats)
  Ruling coalition: PSR (Socialists-Revolutionaries) + KDP (Constitutional Democrats/Kadets)
Situation: Kerensky has ruled since 1917. The Republic is paralyzed — radicals on every
  side, economy gutted by Black Monday, army riddled with Kornilov sympathizers. An
  assassination attempt on Kerensky is imminent. If he dies, the Senate takes over and
  snap elections follow. If he lives, he clings to power as a liberal dictator.
Alignment: Unaligned (lost WK1, lost territory to Germany, bitter toward Reichspakt)
Key tension: Kerensky assassination triggers political crisis; elections trigger civil war

External dependencies:
- Black Monday (Germany) -> hits Russia, triggers economic crisis tree
- 2nd Weltkrieg -> Russia can attack Germany's eastern satellites
- Japan/Co-Prosperity Sphere -> Transamur is Japanese puppet; Russia vs Japan inevitable
- USA civil war -> affects Russia's ability to seek American support

--- FACTIONS (pre-civil-war political parties) ---

PSR: Party of Socialists-Revolutionaries
  Leader: Viktor Chernov — patient idealist, believes in agrarian socialism
  Ideology: SocLib (party establishment) / SocDem (left wing)
  Goal: Democratic socialist Russia with land reform and peasant communes

KDP: Constitutional Democratic Party (Kadets)
  Leaders: Milyukov (center), Nekrasov (left-KDP, coalition w/ socialists),
           Nabokov (right-KDP, monarchist sympathies), Konovalov (bourgeois progressives)
  Ideology: MarLib (right) / SocLib (left)
  Goal: Liberal parliamentary republic, free markets, rule of law

VNS: All-Russian National Union
  Leaders: Shulgin (constitutional monarchist), Dmitry Romanov (aristocratic republic),
           Felix Yusupov (oligarchic influence)
  Ideology: SocCon / AuthDem
  Goal: Restore constitutional monarchy or aristocratic republic

RSDRP: Russian Social Democratic Labour Party (Mensheviks)
  Leaders: Potresov (right, reformist), Abramovich (internationalist), Lozovsky (radical)
  Ideology: SocDem
  Goal: Workers' rights, trade union power, gradual transition to socialism

NSP: People's Socialist Party (Moscow Bolsheviks/Bukharinites)
  Leaders: Bukharin (NEP advocate), Rykov (pragmatist), Kamenev (united front)
  Ideology: RadSoc
  Goal: New Economic Policy — gradual socialism with private property coexistence

PLSR: Party of Left Socialist-Revolutionaries
  Leader: Maria Spiridonova — revolutionary icon, anarcho-syndicalist leanings
  Ideology: Syndie
  Goal: Workers' and peasants' self-governance through syndicates and soviets

RKP: Russian Communist Party (Bolsheviks-in-exile, Zinovievites)
  Leader: Grigory Zinoviev — hardline internationalist, underground
  Ideology: Totalist
  Goal: Proletarian dictatorship, world revolution, return from exile

NRPR: People's Republican Party of Russia
  Leader: Boris Savinkov — "the Vozhd," ex-SR terrorist, revolutionary Christian
  Ideology: NatPop
  Goal: Authoritarian neo-Narodnik state, agrarian populism, national rebirth

NSNP: National Union of New Generation (Solidarists)
  Leader: Viktor Baidalakov — young, anti-socialist, organic state theorist
  Ideology: NatPop (moderate)
  Goal: Corporatist "solidarist" organic republic, neither left nor right

YeP: Eurasianist Party
  Leaders: Trubetzkoy (center), Savitsky, Mirsky (left/Narodnik), Shirinsky (right/NatPop)
  Ideology: AuthDem / NatPop (varies by faction)
  Goal: Eurasian Union rejecting European civilization, uniting Eurasian peoples

ROVS: Russian All-Military Union
  Leader: Lavr Kornilov — aging general, coup-plotter, believes in iron discipline
  Ideology: PatAut
  Goal: Military dictatorship to "save Russia from socialism"

--- CRISIS 1: KERENSKY ASSASSINATION ---

Trigger: Scripted event ~early 1936 (shortly after game start)
Timing: First weeks of play

ASSASSINATION (d20):
  1-3:   Kerensky SURVIVES. Becomes "I Lived, Bitch" Kerensky. Clings to power as
         liberal dictator-president. No elections, no civil war from this path.
         Unlocks Kerensky's personal focus tree. Can still unify Russia peacefully.
  4-20:  Kerensky DIES. Senate takes over. Snap elections called. -> CRISIS 2

If Kerensky lives:
- Russia stays stable but stagnant
- Kerensky becomes increasingly authoritarian ("Social Liberal Dictator")
- Can still pursue foreign policy, war with Germany, unify with Transamur
- Unification super event: "Kerensky Unites Russia" (SocLib)

--- CRISIS 2: 1936 ELECTIONS ---

Trigger: Kerensky's death -> Senate calls elections
Timing: ~mid 1936
Mechanic: Two competing economic plans first (Duma Plan vs Senate Plan), then elections

DUMA PLAN (nationalize German assets) boosts: NSP, PSR, RSDRP, NRPR
SENATE PLAN (tariffs, protect domestic industry) boosts: KDP, VNS, NSNP

ELECTION RESULTS (d20):
  1-3:   KDP wins (MarLib). Liberal republic continues.
         Sub-paths: Left-KDP (Nekrasov, SocLib coalition) / Right-KDP (Nabokov, monarchist lean)
  4-5:   VNS wins (SocCon). Constitutional monarchists.
         Sub-paths: Shulgin referendum / Romanov aristocratic republic / Yusupov oligarchy
  6-7:   PSR wins (SocLib/SocDem). Status quo socialists.
         Sub-paths: Chernov reforms / KDP coalition / NRPR alliance (!)
  8-9:   RSDRP wins (SocDem). Mensheviks take power.
         Sub-paths: Internationalists / Right Mensheviks / Menshevik-Internationalists (RSRPI)
  10-11: NSP wins (RadSoc). Bukharin's moderate Bolsheviks.
         Sub-paths: NEP socialism / Soviet restoration / Democratic path
  12-13: NRPR wins — Savinkov (NatPop). -> CRISIS 3a (Savinkov consolidates)
  14:    NRPR revolution — Savinkov seizes power by force. -> CRISIS 3a
  15:    NRPR reform — Savinkov wins then moderates. -> CRISIS 3a
  16:    NRPR failure — Savinkov wins but is blocked. -> CRISIS 3b (Civil War)
  17-20: Kornilov coup! Military refuses election results. -> CRISIS 3b (Civil War)

For results 1-11: Russia avoids civil war. Governing party enters focus tree.
  -> Jumps to POST-UNIFICATION PATHS

--- CRISIS 3a: SAVINKOV'S RUSSIA ---

Trigger: NRPR wins elections or seizes power
Timing: ~1937-1938

Savinkov consolidates: Revolutionary Christianity, neo-Narodism, Combat Squads,
  land reform, total NRPR dominance. Russia becomes authoritarian NatPop state.
  The Vozhd rules.

SAVINKOV'S FATE (d20, ~1940-1942):
  1-5:   Savinkov lives, consolidates fully. "Vozhd" path — expansionist, messianic.
         Russia becomes aggressive NatPop power. Unification: "Savinkov Unites Russia"
  6-10:  Savinkov lives but Eurasianists gain influence. Ally Evraziytsy path.
         Unification: "Eurasianists Unite Russia" (AuthDem/NatPop)
  11-14: Savinkov dies. THREE successors fight:
         d6: 1-2 Gorgulov (Green Vozhd, neopagan Scythian ethnostate, insane NatPop)
             3-4 Abakumov (Siloviki, MGB security state, state capitalism)
             5-6 Solidarists/Baidalakov (organic corporatist republic, NSNP)
  15-20: Savinkov dies, Russia fractures -> civil war remnants

Gorgulov path: "Great Scythia" — persecute socialists, monarchists, capitalists.
  Neopagan peasant primitivist ethnostate. Completely insane.
  Unification: "Gorgulov Unites Russia" (NatPop)
Abakumov path: Siloviki — secret police state, Savinkov's legacy but capitalist.
  Unification: "Siloviki Unite Russia" (NatPop)
Solidarist path: NSNP organic republic — right-syndicalist corporatism.
  Unification: "The Solidarists Unite Russia" (NatPop)

--- CRISIS 3b: SECOND RUSSIAN CIVIL WAR ---

Trigger: Kornilov coup / NRPR failure / election collapse / Bolshevik uprising
Timing: ~1937-1938
Clock: 0——6

The Republic shatters. Civil war factions emerge:

RUS: Russian Republic (remnant government in Petrograd/Moscow)
  Leader: Varies (whoever won elections, or Senate caretaker)
  Territory: Core Russia — Moscow, Petrograd, central provinces
  Strength: Strong (industry, population) but politically fractured

SOV: Russian Socialist Republic (Bolshevik uprising)
  Leader: Initially Zinoviev, then internal power struggle
  Territory: Industrial cities, workers' quarters, eventually Petrograd if they win
  Strength: Medium (popular support among workers, weak military initially)

RRF: Russian Revolutionary Front (NRPR/Savinkov breakaway)
  Leader: Savinkov or successor
  Territory: Southern Russia, parts of the Don region
  Strength: Medium (Combat Squads, popular rural support)

RVA: Russian Volunteer Army (White military, Drozdovsky/Denikin)
  Leader: Drozdovsky (PatAut militarist)
  Territory: Southern periphery, Cossack lands
  Strength: Weak-Medium (elite but small officer corps)

WRA: Western Russian Army (Avalov-Bermondt / German-aligned)
  Leader: Pavel Bermondt-Avalov
  Territory: Western borderlands, Baltic approaches
  Strength: Weak (German support but small)

TRM: Transamur (enters from the east — see TRANSAMUR section)
  Leader: Kolchak (initially)
  Territory: Far East, Vladivostok, Siberia
  Strength: Medium-Strong (Japanese backing, organized military)

CIVIL WAR KORNILOV EVENTS (if Kornilov triggers coup):
  Kornilov has 85% chance of dying during the coup attempt.
  If Kornilov dies: d6 determines successor:
    1-2: Denikin takes over (PatAut, stratocracy)
    3-4: Status unclear, contested (general civil war)
    5-6: Wrangel seizes control (PatAut, monarchist-leaning)

2RCW RESOLUTION (d20, when clock hits 0 or 6):
  1-4:   Republic (RUS) wins. Returns to election-winner's path.
  5-8:   Soviets (SOV) win. -> SOVIET PATHS
  9-11:  RRF wins. -> SAVINKOV/successor paths
  12-13: RVA wins. -> WHITE MILITARY paths (Kornilov/Denikin/Wrangel/Drozdovsky)
  14-15: Transamur (TRM) wins from the East. -> TRANSAMUR PATHS
  16-17: Don Cossacks expand from the south. -> DON PATHS
  18-19: WRA wins with German backing. -> German puppet or Avalov state
  20:    Prolonged stalemate / partition / external intervention (Germany/Japan)

Cascade:
- If Soviets win -> Internationale gains major ally, Germany panics
- If NatPop wins -> tension with Germany +3, Reichspakt alarmed
- If Transamur wins -> Japan gains influence, tension with Germany
- If WRA wins -> Germany gains puppet, Reichspakt strengthened
- Civil war delays Russia's entry into 2nd Weltkrieg by years

--- SOVIET PATHS (SOV wins civil war or Bolsheviks return) ---

The Bolsheviks return from exile. Internal power struggle determines direction.

SOV LEADERSHIP (d20):
  1-2:   Bukharin (RadSoc). NEP, gradual socialism, peasant alliance.
  3-4:   Rykov (RadSoc). Pragmatic socialism, workers-peasant unity.
         Sub-path: Zhdanov succeeds Rykov (Totalist, Soviet monoculture)
  5-6:   Kirov (RadSoc). People's Chairman, popular reformist.
  7-8:   Kamenev (RadSoc). United front of all socialist parties.
  9:     Zinoviev (Totalist). Orthodox Leninist, Internationale vanguard.
  10:    Molotov (Totalist). "Socialism in One Nation," collectivization.
         Sub-path: Kaganovich succeeds Molotov (Totalist, "Kremlin's Wolf")
  11:    Yezhov (Totalist). "Bloody Dwarf," mass purges, terror state.
  12:    Yagoda (Totalist). Chekist shadow ruler, purges from the shadows.
  13:    Sokolnikov (RadSoc). Moderate Bolshevik, gradual transition, peaceful coexistence.
  14:    Tomsky (Syndie). Trade-Unionists, Workers' Opposition faction.
  15:    Proletkultists (RadSoc). Bogdanov's heirs, proletarian culture revolution.
  16:    Internationalists/Trotsky legacy (Totalist). World revolution front.
  17:    Khrushchev (Totalist). Ukrainian Bolshevik, "Corn Communism," 20-year plan.
  18:    Spiridonova/Left SRs (Syndie). Anarcho-syndicalist communes.
         Sub-path: Fishman (Totalist, secret police Left SR state)
  19:    Gastev Technocracy (Syndie). Soviet-Syndical technocratic system.
  20:    Anarcho-Communist revolt — Tsentrobalt sailors + peasants overthrow Bolsheviks.
         Makhno-inspired Free Russian Territory. (RadSoc)

MILITARY SOVIET PATHS (from Russian Socialist Republic focus tree):
  Zhukov (PatAut/Totalist) — Red Army military dictatorship, "march on Berlin and Tokyo"
  Frunze (Totalist) — New Soviet Culture, enlightened military rule
  Tukhachevsky (Totalist) — "Red Napoleon," world revolution by bayonet

--- WHITE MILITARY PATHS (RVA wins or Kornilov coup succeeds) ---

MILITARY LEADERSHIP (d20):
  1-5:   Kornilov (PatAut). Stratocratic society, military rules all.
  6-10:  Denikin (PatAut). Inherits after Kornilov's death, formalizes stratocracy.
  11-14: Wrangel "Black Baron" (PatAut/AuthDem). Monarchist leanings, Zemsky Sobor.
         Sub-path: Wrangel restores monarchy -> Romanov Tsar (SocCon/AuthDem)
  15-17: Drozdovsky (PatAut). Kornilov's dream but with wider repressions.
  18-20: Monarchy restored directly — Romanov on throne (SocCon/AuthDem)
         VMS/Supreme Monarchical Council: Markov (NatPop, ultraconservative clerical)

--- TRANSAMUR (TRM) ---

Starting state: Japanese puppet in the Far East, Vladivostok
  Leader: Admiral Kolchak (PatAut) — "Supreme Ruler," exiled after failed 1925 coup
  Japanese advisors, organized White army, claims all of Russia

TRANSAMUR INTERNAL CRISIS — Kolchak's power balance:
  Kolchak must balance Japanese demands, internal factions, and ROVS officers.

TRM PATHS (d20):
  1-3:   Kolchak consolidates (PatAut). Supreme Ruler, authoritarian order.
  4-5:   Semyonov coup (PatAut). Transbaikal Ataman seizes power, brutal warlord.
  6-7:   NRA revolt — National Revolutionary Army (Blyukher). Workers overthrow Kolchak.
         Socialist Transamur (RadSoc/Syndie). "Liberation from the East."
  8-9:   Far-Eastern Democrats — coup against Kolchak, republican government.
         Lavrov leads. True democracy from Siberia. (SocLib)
  10-11: Pepelyaev "Siberian Suvorov" (PatAut/AuthDem). Honest governance, liberty, strong army.
  12-13: Czech Legion seizes power — Czechoslovak Legion under Gajda or successor.
         Panslavist direction, aim to liberate Slavic nations. (AuthDem/PatAut)
  14-15: Mladorossi — "Young Russia" movement. Red Tsar + Soviets.
         Kazem-Bek leads. Mixture of Tsarist monarchy and Bolshevik communism. (NatPop)
         Sub-path: SocDem Mladorossi (moderate democratic socialist Mladorossi)
  16-17: Nationalists — All-Russian Nationalist Organisation.
         Vonsyatsky leads. Tsar and Vozhd, Russian nationalism + monarchy. (NatPop)
  18:    Mad Baron — Ungern-Sternberg. Eurasian empire against "Atheistic Communism."
         Declares himself Genghis Khan II. Regent for missing Grand Duke Michael. (NatPop)
  19:    Monarchy restored from Transamur — Romanov Tsar via Transamur route. (AuthDem)
  20:    Transamur becomes Siberian republic — Oblastniki, independent Siberia. (SocLib)

SIBERIAN WAR: When Transamur is ready, they march west (super event: "Siberian Army
  Is Marching to the West"). This is the unification war — TRM vs whoever holds Moscow.

--- DON REPUBLIC ---

Starting state: Cossack Republic in southern Russia, German-aligned
  Leader: Ataman Krasnov (PatAut/AuthDem) — aging Cossack strongman
  German garrison present, part of German economic sphere

DON PATHS (d20):
  1-4:   Krasnov's Cossack state endures. Traditional Cossack autonomy. (PatAut)
         Cossacks unite all Hosts, then conquer Russia.
         Unification: "The Cossacks Unite Russia" (PatAut)
  5-7:   Brotherhood of Russian Truth (BRP) — secret monarchist organization rises.
         Restore Orthodoxy, traditional Russian way of life. Holy Rus.
         Unification: "Brotherhood of Russian Truth Unites Russia" (AuthDem/NatPop)
  8-10:  German puppet — Krasnov dies, German garrison takes full control.
         Unification: "Germany Pacifies Russia" (PatAut, German puppet)
  11-13: Vlasov — Committee for Liberation of Peoples of Russia.
         Russian Liberation Army. Republican, autonomy for minorities. (AuthDem/SocLib)
         Unification: "Vlasov Unites Russia"
  14-16: Red Cossacks — socialism rises in the Don. Budyonny's Red Cavalry.
         Unification: "Red Cossacks Unite Russia" (RadSoc/Syndie)
  17-18: Denikin from Don — White officers use Don as base, Denikin takes over.
         Unification: "Denikin Unites Russia" (PatAut)
  19-20: Skoropadsky — Ukrainian Hetman claims Russia from Don/Ukraine axis.
         Empire restored under Kyiv's rule. (PatAut)
         Unification: "Hetman Unites Russia"

--- CENTRAL ASIAN STATES ---

These break away or assert independence during Russia's crises.

ALASH ORDA (ALO): Kazakh autonomous region
  Leader: Varies — Alash nationalists vs Bolshevik cells
  Paths: Kazakh nationalism / Bolshevik revolution (Imanov cult) / Russian reabsorption
  Affected by: Russian civil war outcome, Turkestan events
  Strength: Weak. Buffer state. Whoever wins Russia likely reabsorbs them.

TURKESTAN (TRK): Central Asian khanate remnant
  Leader: National Union (Jadidists) — Islamic modernizers
  Paths: Jadidist modernization / ERK alliance / Ferghana government /
         Pan-Turkist liberalism / Diplomatic neutrality
  Affected by: Russian civil war, Ottoman events, Alash Orda
  Strength: Weak-Medium. Regional power in Central Asia.

BASHKURDISTAN: Bashkir autonomous state
  Paths: Bashkir nationalism / Russian reabsorption / Bolshevik takeover
  Strength: Weak. Minor state, likely reabsorbed.

EAST TURKESTAN: Uyghur region, far eastern Central Asia
  Paths: Independence / Chinese reabsorption / Russian influence
  Strength: Very Weak. Pawn of larger powers.

--- EXTERNAL WARS ---

WAR WITH GERMANY (2nd Weltkrieg participation):
  Trigger: 2nd Weltkrieg begins (France attacks Germany) + Russia ready
  Timing: ~1939-1941
  Russia can attack German eastern satellites (Ukraine, Baltic, Belarus, Poland)
  Super events: "Russian Boots March West" / "Germany Strikes East"
  Goal: Reclaim Brest-Litovsk losses — Ukraine, Belarus, Baltic states

  FACTION CHOICES for war:
    - Join Internationale (if socialist Russia)
    - Create own faction / Russian-led bloc
    - Join Entente (if democratic/monarchist Russia)
    - Join Co-Prosperity Sphere (if Transamur path, Japanese-aligned)
    - Go alone (if NatPop/PatAut Russia, "own faction")

WAR WITH JAPAN:
  Trigger: Transamur unification or Russian expansion east
  Super event: "Second Russo-Japanese War"
  Russia vs Japan over Manchuria, Sakhalin, Far East influence

--- POST-UNIFICATION PATHS (d20+d6 compound table) ---

After Russia unifies (defeats Transamur or vice versa), a super event fires.
Roll d20 for faction origin, then d6 for specific leader within that faction.

d20 | FACTION ORIGIN         | d6 LEADERS & OUTCOMES
----|------------------------|-----------------------------------------------
 1  | Democratic Republic    | 1-2: KDP/Kadets (MarLib). Liberal free-market republic.
    |                        | 3: Left-KDP (SocLib). Progressive coalition.
    |                        | 4: PSR (SocLib). Agrarian socialist democracy.
    |                        | 5: PSR center-left (SocDem). Chernov's land reform.
    |                        | 6: Kerensky survived (SocLib). Eternal president.
 2  | Social Democrats       | 1-2: RSDRP Mensheviks (SocDem). Reformist workers' state.
    |                        | 3-4: RSRPI Menshevik-Internationalists (SocDem). Martov's heirs.
    |                        | 5-6: Senate Conservatives (SocCon). Aristocratic-led republic.
 3  | Moderate Bolsheviks    | 1-2: Bukharin/NSP (RadSoc). NEP, gradual socialism.
    |                        | 3: Rykov (RadSoc). Pragmatic socialism.
    |                        | 4: Kirov (RadSoc). People's Chairman, popular.
    |                        | 5: Kamenev (RadSoc). United front.
    |                        | 6: Sokolnikov (RadSoc). Moderate, peaceful coexistence.
 4  | Left Socialists        | 1-2: Left SRs/PLSR (Syndie). Spiridonova, communes.
    |                        | 3-4: Tomsky Trade-Unionists (Syndie). Workers' Opposition.
    |                        | 5: Gastev Technocracy (Syndie). Soviet-syndical system.
    |                        | 6: Fishman (Totalist). Left SR secret police state.
 5  | Hardline Bolsheviks    | 1: Zinoviev (Totalist). Internationale vanguard.
    |                        | 2: Molotov (Totalist). Socialism in One Nation.
    |                        | 3: Kaganovich (Totalist). Kremlin's Wolf, Molotov's heir.
    |                        | 4: Yezhov (Totalist). Bloody Dwarf, mass purges.
    |                        | 5: Yagoda (Totalist). Shadow Chekist ruler.
    |                        | 6: Proletkultists (RadSoc). Bogdanov, proletarian culture.
 6  | Internationalists      | 1-3: Internationalist Front (Totalist). World revolution.
    |                        | 4-6: Khrushchev (Totalist). Corn Communism, 20-year plan.
 7  | Red Military           | 1-2: Zhukov (PatAut). Red Army dictatorship, march everywhere.
    |                        | 3-4: Frunze (Totalist). New Soviet Culture, enlightened mil. rule.
    |                        | 5-6: Tukhachevsky (Totalist). Red Napoleon, bayonet revolution.
 8  | Anarchists             | 1-6: Anarcho-Communists (RadSoc). Free Russian Territory.
    |                        |      Tsentrobalt sailors + peasant revolt. Makhno-inspired.
 9  | Savinkov               | 1-3: Savinkov/Vozhd (NatPop). Revolutionary Christianity.
    |                        | 4-5: Eurasianists (AuthDem/NatPop). Eurasian Union.
    |                        | 6: Gorgulov (NatPop). Great Scythia, neopagan insanity.
 10 | Savinkov successors    | 1-3: Abakumov/Siloviki (NatPop). MGB security state.
    |                        | 4-6: Solidarists/NSNP (NatPop). Organic corporatist republic.
 11 | Kornilov/White Army    | 1-2: Kornilov (PatAut). Stratocracy.
    |                        | 3-4: Denikin (PatAut). Stratocracy, Kornilov's heir.
    |                        | 5-6: Drozdovsky (PatAut). Stratocracy with wider repressions.
 12 | Wrangel                | 1-3: Wrangel "Black Baron" (PatAut). Monarchist leanings.
    |                        | 4-6: Wrangel restores Romanov monarchy (AuthDem).
 13 | Monarchy (from West)   | 1-3: Romanov constitutional monarchy (SocCon/AuthDem).
    |                        | 4-6: VMS/Markov ultramontane monarchy (NatPop).
 14 | Kolchak                | 1-3: Kolchak Supreme Ruler (PatAut). Order from Vladivostok.
    |                        | 4-6: Pepelyaev "Siberian Suvorov" (AuthDem). Honest governance.
 15 | Transamur democrats    | 1-3: Far-Eastern Democrats (SocLib). True Siberian democracy.
    |                        | 4-6: Siberian republic / Oblastniki (SocLib). Independent Siberia.
 16 | Transamur radicals     | 1-2: Semyonov (PatAut). Brutal Transbaikal Ataman.
    |                        | 3-4: NRA/Blyukher (RadSoc). Socialist liberation from East.
    |                        | 5-6: Czech Legion (AuthDem). Panslavist crusade.
 17 | Transamur monarchists  | 1-2: Mladorossi/Kazem-Bek (NatPop). Red Tsar + Soviets.
    |                        | 3-4: SocDem Mladorossi (SocDem). Democratic Mladorossi.
    |                        | 5: Nationalists/Vonsyatsky (NatPop). Tsar and Vozhd.
    |                        | 6: Mad Baron Ungern-Sternberg (NatPop). Genghis Khan II.
 18 | Don Cossacks           | 1-2: Krasnov Cossacks (PatAut). Traditional Cossack state.
    |                        | 3-4: BRP/Brotherhood of Russian Truth (AuthDem). Holy Rus.
    |                        | 5: Red Cossacks/Budyonny (RadSoc). Socialist Cossacks.
    |                        | 6: Vlasov (SocLib). Russian Liberation Army, republican.
 19 | Don special            | 1-2: German puppet from Don (PatAut). Germany rules Russia.
    |                        | 3-4: Skoropadsky/Hetman (PatAut). Ukraine absorbs Russia.
    |                        | 5-6: Generic military junta (PatAut). Army strongman.
 20 | Wildcard               | 1-2: Zhdanov (Totalist). Soviet monoculture, Rykov's heir.
    |                        | 3-4: Rykov-Bukharin restored Soviet (RadSoc). Old Bolsheviks.
    |                        | 5: Monarchy from Transamur (AuthDem). Romanov via East.
    |                        | 6: GM's choice — pick any path that fits the narrative.

--- KEY NPCs ---

Alexander Kerensky — President of Russia. Aging liberal clinging to power, terrified of all
  sides. Theatrical, grandiose, ultimately tragic.
  Appears: Game start. Dies or survives assassination in first weeks.
  If in power: Stagnant liberal dictatorship. Can still unify Russia.

Boris Savinkov — "The Vozhd." Ex-SR terrorist turned revolutionary Christian nationalist.
  Brilliant, ruthless, messianic. Believes violence is sacred duty.
  Appears: NRPR election victory or civil war.
  If in power: Authoritarian neo-Narodnik state. Expansionist, apocalyptic.

Lavr Kornilov — Supreme Commander ROVS. Old war hero, iron-willed, politically naive.
  Believes military rule is the only cure for Russia's chaos.
  Appears: Military coup path. 85% chance of dying during coup attempt.
  If in power: Stratocratic dictatorship. Efficient but brittle.

Anton Denikin — White general, Kornilov's heir. Dutiful, less charismatic, steadier.
  Appears: Succeeds Kornilov after his death.
  If in power: Formalized stratocracy. Stable military rule.

Pyotr Wrangel — "The Black Baron." Aristocratic, monarchist, better politician than Kornilov.
  Appears: Civil war RVA path or post-Kornilov succession.
  If in power: Zemsky Sobor, possible monarchy restoration. Expansionist.

Alexander Kolchak — Admiral, Supreme Ruler of Transamur. Exiled after failed 1925 coup.
  Rigid, honorable, poor politician. Japanese puppet who hates being one.
  Appears: Transamur starting leader.
  If in power: Authoritarian order from Vladivostok. "The Only Supreme Ruler."

Mikhail Tukhachevsky — "Red Napoleon." Brilliant military theorist, ruthless, ambitious.
  Appears: Soviet military path.
  If in power: Military dictatorship dedicated to world revolution by force.

Georgy Zhukov — Marshal. Iron-fisted, pragmatic, relentless. The Red Army IS Russia.
  Appears: Soviet military path.
  If in power: Red Army dictatorship. "March on Berlin, Tokyo, and everywhere."

Nikolay Bukharin — Theorist of NEP. Gentle intellectual, "darling of the party."
  Believes in gradual, humane transition to socialism. Hates purges.
  Appears: NSP election win or Soviet moderate path.
  If in power: New Economic Policy. Mixed economy, peasant alliance.

Grigory Zinoviev — Orthodox Leninist. Dogmatic, conspiratorial, exile-hardened.
  Appears: RKP Bolshevik return.
  If in power: Proletarian dictatorship, Internationale vanguard.

Viktor Chernov — PSR leader. Patient, principled, agrarian socialist dreamer.
  Appears: PSR election win.
  If in power: Land reform, peasant communes, democratic socialism.

Maria Spiridonova — Left SR icon. Revolutionary martyr-figure, anarcho-syndicalist.
  Appears: PLSR path or Soviet Left SR path.
  If in power: Workers' and peasants' self-governance, commune-based Russia.

Roman von Ungern-Sternberg — "The Mad Baron." Baltic German mystic-warlord.
  Worships Bogd Khan, wants to recreate Mongol Empire. Genuinely insane.
  Appears: Transamur wildcard path.
  If in power: "Genghis Khan II." Eurasian empire against atheism. Bloody.

Pyotr Krasnov — Don Ataman. Old Cossack warrior, German-aligned, traditionalist.
  Appears: Don Republic starting leader.
  If in power: Cossack-led Russia, German friendship, martial traditions.

Pavel Gorgulov — "Green Vozhd." Neopagan primitivist, self-proclaimed Scythian messiah.
  Insane even by this timeline's standards. Wants peasant ethnostate.
  Appears: Post-Savinkov succession.
  If in power: Persecutes everyone. "A Violet Will Defeat A Machine."

--- REGIONAL FLAVOR ---

Atmosphere: Frozen rail yards where armored trains rust beside imperial stations.
  Smoke from burning wheat fields as requisition squads clash with village militias.
  The smell of machine oil and black bread in factory canteens plastered with posters.
Technology: Armored trains dominate logistics across the vast steppe. Heavy tanks
  from Ural factories. Katyusha-precursor rocket artillery. Sikorsky helicopters
  in prototype. Long-range bombing programs. Submarine development in Baltic/Pacific.
Civilian life: Bread lines in Petrograd. Underground printing presses in Moscow cellars.
  Cossack stanitsas drilling cavalry in the morning mist. Kolchak's Vladivostok — a
  city of exiles, Japanese merchants, and White officers drinking to the Tsar.

--- CASCADE TABLE ---

| Event | Affects | Effect |
|-------|---------|--------|
| 2RCW begins | Germany, Japan | Germany may intervene via WRA; Japan backs Transamur |
| Russia goes socialist | Internationale | Major new ally; global tension +3 |
| Russia goes NatPop | Germany | Aggressive neighbor; tension +2, Reichspakt mobilizes |
| Savinkov's Russia | Ukraine, Belarus | Claims Brest-Litovsk territories, invasion likely |
| Transamur wins | Japan | Japanese influence extends to Moscow; tension with Germany |
| Don/German puppet | Germany | Reichspakt gains eastern anchor; tension with Internationale |
| Russia attacks east | Japan, Fengtian | Second Russo-Japanese War; Manchuria contested |
| Russia attacks west | Germany, Ukraine, Baltics | Eastern front of 2nd Weltkrieg opens |
| Russia joins Internationale | France, UoB | Germany faces true two-front war |
| Russia joins Entente | Canada, NatFrance | Third power bloc with Russia, anti-German + anti-syndicalist |
| Central Asia breaks free | Turkestan, Alash | Minor states emerge; Russia distracted |
| Kolchak marches west | RUS, SOV | Siberian War super event; second front in civil war |
| Monarchy restored | Romania, Balkans | Romanov diplomacy activates; dynastic connections |
| Mad Baron wins | Mongolia, China | Mongol Empire 2.0 declared; all neighbors alarmed |

================================================================
================================================================
CHINA — Shattered empire, ten warlords, six paths to unity
================================================================

--- STARTING STATE (1936) ---

Government: Qing Empire (nominal monarchy under Xuantong Emperor Puyi)
  Actual power: Wu Peifu's Zhili Clique controls Beijing and the north
  Puyi is a puppet — spends his days playing tennis in the Forbidden City
Situation: The Qing "restoration" is a German-backed fiction. Real power lies with
  regional warlords bound by fragile patron-client ties. The League of Eight Provinces
  in the south is cracking under Sun Chuanfang's grip. Fengtian in Manchuria eyes
  Beijing. Yunnan shelters KMT remnants. Sichuan seethes. Everything is about to break.
Alignment: Reichspakt (nominal, via German concessions and AOG)
Key tension: LEP collapse triggers the chain — then it's every clique for itself

External dependencies:
- Japan: JAP_Fading_Sun flag → if Japan collapses, Fengtian loses patron/gains freedom
- Germany: AOG (Allgemeine Ostasien-Gesellschaft) controls concessions in Shanghai/Qingdao
- Germany: Black Monday → weakens AOG grip, emboldens anti-German factions
- Russia: 2RCW outcome → affects Mongolia, Xinjiang, Manchuria borders

--- FACTIONS ---

QIE (Zhili): Qing Government / Zhili Clique
  Leader: Wu Peifu — "Philosopher General." Brilliant strategist, austere, incorruptible,
    but ruling through military genius alone. Controls Beijing in Puyi's name.
  Ideology: AuthDem (military junta wearing imperial clothes)
  Territory: Beijing, Zhili, nominally all of northern China
  Strength: Strong military, weak legitimacy
  Goal: Hold the empire together under Zhili dominance; prevent Manchu nobles
    from seizing real power back

FNG: Fengtian Government
  Leader: Zhang Zuolin — "The Old Marshal." Former bandit turned warlord. Illiterate
    but shrewd, delegates well, holds grudges forever. Staunchly "Pro-Zhang."
  Ideology: PatAut / AuthDem
  Territory: Manchuria (north of the Great Wall)
  Strength: Strong (Japanese-backed industry, Kwantung Army support)
  Goal: Reunify China under Fengtian — claims Xinhai Revolution's republican legacy

LEP: League of Eight Provinces
  Leader: Sun Chuanfang — "The Smiling Tiger." Cultivates relationships, leverages
    German connections. Friendly face, executes former friends without warning.
  Ideology: PatAut
  Territory: Jiangsu, Zhejiang, Anhui, Jiangxi, Fujian, Hunan, Guangxi, Guangdong
  Strength: Strong on paper but fractured internally; AOG props it up
  Goal: Maintain southern hegemony, resist both Beijing and the KMT

ANQ: Anqing Clique (within LEP)
  Leader: Chen Tiaoyuan — Anti-German officer who resents Sun Chuanfang's
    collaboration with the AOG. Commands the Anhui Army.
  Ideology: AuthDem / PatAut
  Territory: Anhui Province
  Strength: Medium
  Goal: Reform the League away from German dependence — or break free entirely

SQI: Shandong Clique
  Leader: Zhang Zongchang — "The Dogmeat General." Filthy, charismatic, converted
    to Yiguandao cult on Mount Tai. Controls Shandong under Qing's shadow.
  Ideology: PatAut
  Territory: Shandong Province
  Strength: Medium (fanatical but ill-equipped)
  Goal: Hold Shandong, serve the Yiguandao or whoever pays

SHX: Shanxi Clique
  Leader: Yan Xishan — "Model Governor." Philosopher-warlord, developed his own
    syncretic ideology (Yan Xishan Thought). Neutral and isolated since losing
    eastern Shanxi in the 4th Zhili-Fengtian War.
  Ideology: PatAut
  Territory: Western Shanxi (reduced after 1928 defeat)
  Strength: Medium (disciplined, self-sufficient, small)
  Goal: Build a "model province," recover lost territory when opportunity comes

HNN: Hunan Clique
  Leader: Zhao Hengti — Democratic reformist who introduced Asia's first provincial
    constitution. Restored by Zhili after Northern Expedition, but holds elections.
  Ideology: SocCon / AuthDem
  Territory: Hunan Province
  Strength: Medium-weak
  Goal: Provincial autonomy, democratic governance on his terms

SZC: Sichuan Clique
  Leader: Yang Sen (Armament Dept) — Zhili loyalist, modernizer, hypocrite
    (preaches women's rights, has eight concubines). Three factions fight internally.
  Ideology: AuthDem
  Territory: Sichuan Province
  Strength: Medium (large but divided between three departments)
  Goal: Hold Sichuan, modernize under Zhili patronage

YUN: Yunnan Clique
  Leader: Tang Jiyao — Flamboyant, overambitious, alienates his own officers.
    Shelters KMT remnants and NRA survivors from the failed Northern Expedition.
  Ideology: PatAut
  Territory: Yunnan, Guizhou
  Strength: Medium-weak (troops decent, economy poor)
  Goal: Maintain independence; republican banner without substance

CHI: Left Kuomintang (KMT insurgency)
  Leader: Song Qingling — Sun Yat-sen's widow. Elegant, determined, untouchable
    within the KMT due to her status. Leads from the MinGan Insurgent Zone.
  Ideology: SocDem / RadSoc / Syndie (multiple internal factions)
  Territory: MinGan Insurgent Zone (Fujian-Jiangxi border), underground cells
  Strength: Weak at start but growing; Internationale backing possible
  Goal: Complete Sun Yat-sen's revolution — Second Northern Expedition

MON: Mongolia
  Leader: Roman von Ungern-Sternberg — "The Mad Baron." Russian white exile,
    Buddhist convert, violent autocrat. Rules through Russian military clique,
    siphons power from the Bogd Khan.
  Ideology: PatAut / NatPop
  Territory: Outer Mongolia
  Strength: Weak (tiny army, no industry)
  Goal: Pan-Mongol empire, crush syndicalism, occult monarchist restoration

TIB: Tibet
  Leader: Regent (governing for young Dalai Lama)
  Ideology: AuthDem / PatAut
  Territory: Tibet
  Strength: Very weak
  Goal: Maintain independence, resist Chinese and Mongolian encroachment

XSM: Xinjiang
  Ideology: PatAut
  Territory: Xinjiang
  Strength: Very weak (remote, isolated)
  Goal: Survive between Russia, Mongolia, and China

GEA/AOG: German East Asia / Allgemeine Ostasien-Gesellschaft
  Leader: AOG Board of Directors (effectively Alfred Krupp)
  Ideology: MarLib (corporate colonial administration)
  Territory: Concessions — Shanghai, Qingdao, Tianjin, treaty ports
  Strength: Strong economically, weak militarily in-theater
  Goal: Extract profit, maintain concessions, back compliant warlords

--- CRISIS: LEAGUE COLLAPSE ---

Trigger: Internal tensions within LEP reach breaking point — Sun Chuanfang's
  rivalry with Qi Xieyuan, anti-German sentiment, KMT insurgency pressure
Timing: Early 1936 (one of the first events in any game)
Clock: 0——6 (starts at 4, ticks fast — this collapses within 1-2 chapters)

Sides: Sun Chuanfang's loyalists vs Qi Xieyuan's northern faction vs Anqing Clique
  vs Shandong withdrawal vs KMT insurgents in Fujian

OUTBREAK (d20):
  1-3:   Sun Chuanfang is assassinated — collapse is instant, total fragmentation
  4-10:  Qi Xieyuan seizes Nanjing — LEP splits north/south
  11-16: Controlled fracture — provinces assert autonomy but no open war
  17-20: AOG intervenes to hold the League together (delays collapse, doesn't prevent it)

RESOLUTION (d20, when clock hits 0 or 6):
  1-5:   Total fragmentation — Anqing, Shandong, Hunan all break away independently
  6-10:  Qi Xieyuan holds a rump LEP (Jiangsu, Zhejiang) — rest scatters
  11-15: Anqing Clique dominates — Chen Tiaoyuan reforms the south
  16-18: AOG pacifies and puppets the League → AOG CHINA path (SuperEvent!)
  19-20: KMT seizes the chaos — Left Kuomintang breakout from MinGan Zone

Cascade:
- Fragmentation → Qing loses southern vassals → Zhili-Fengtian war accelerates
- AOG pacification → Hohenzollern seizes Mandate of Heaven (SuperEvent: super.103)
- KMT breakout → Second Northern Expedition begins
- Tension +2 global (major region destabilized)

--- CRISIS: MANCHU COUP / ZHILI SPLIT ---

Trigger: Puyi and Manchu nobles (backed by Pujie) plot to overthrow Wu Peifu's
  Zhili control and restore real imperial power
Timing: ~1936-1937
Clock: 0——6 (starts at 3)

Sides: Zhili Clique (Wu Peifu) vs Manchu Restorationists (Puyi/nobles)
  + possible Yiguandao infiltration (Zhang Tianran)

OUTBREAK (d20):
  1-5:   Wu Peifu discovers the plot — purges Manchu conspirators
  6-12:  Coup succeeds — Manchu nobles seize power, Wu barely escapes
  13-17: Partial coup — civil war within Beijing
  18-20: Yiguandao infiltrates both sides — Zhang Tianran's cultists seize the moment

RESOLUTION (d20):
  1-6:   Zhili holds: Wu Peifu drops imperial facade, names himself interim head of state
  7-12:  Manchu Restoration: Puyi gains real power, constitutional monarchy reforms
  13-16: Manchu + coup backer path (Song Zheyuan / Yan Xishan / Zhang Tianran)
  17-20: YIGUANDAO THEOCRACY — Zhang Tianran converts Puyi, cult takes over government

Cascade:
- Wu Peifu victory → Republic path possible, Qing dissolves
- Manchu Restoration → can ally with Fengtian monarchists or resist them
- Yiguandao → NatPop theocratic China; Puyi becomes religious puppet (again)
- Tension +1 (internal coup, limited external impact unless Yiguandao)

--- CRISIS: FENGTIAN UNIFICATION WAR ---

Trigger: Zhang Zuolin decides to march south — either by negotiated conference
  or military subjugation
Timing: ~1937-1939
Clock: 0——6 (starts at 3)

Sides: Fengtian vs whoever holds Beijing (Zhili or restored Qing) vs surviving
  southern cliques vs Japan (hovering)

OUTBREAK (d20):
  1-5:   Unification Conference succeeds — Fengtian absorbs Zhili peacefully
  6-12:  Conference fails — Fengtian invades, full war
  13-17: Multi-front war — southern cliques and KMT also attack simultaneously
  18-20: Japan intervenes directly (Fading Sun NOT set) — Fengtian becomes puppet

RESOLUTION (d20):
  1-5:   Fengtian conquers all — Zhang Zuolin rules unified China
  6-10:  Fengtian takes north, stalemate with south — partition
  11-14: Fengtian defeated — Zhili/Qing holds, or KMT sweeps from south
  15-17: Fengtian wins but Japan demands concessions — Pan-Asian path forced
  18-20: Total chaos — 3+ faction stalemate, China remains fractured

Cascade:
- Fengtian victory → Japan must decide: accept or resist a strong China
- If JAP_Fading_Sun set → Fengtian acts freely, can issue The Ultimatum
- Fengtian loss → KMT or Qing become primary unifier candidate
- Tension +2 global (largest country in the world reorganizing)

--- PATHS (post-crisis) ---

FENGTIAN PATHS (if Fengtian achieves dominant position):

  Three-way mutually exclusive after "From Beijing to the Begonia Leaf":

  A. NEGOTIATED UNIFICATION (conference succeeds):
    Leader: Zhang Zuolin (AuthDem → SocCon possible)
    → Restore 1923 Constitution
    → Women's Suffrage path (if Song Qingling supports) OR Anti-Leftist purge
    → Can become Federalist China (with Yan Xishan influence)

  B. SUBJUGATION (conference fails, military conquest):
    Leader: Zhang Zuolin OR Zhang Xueliang (if father dies/retires)
    → Question of the Presidency: Zuolin stays (PatAut) or Xueliang inherits (AuthDem)
    → Eliminate Internal Dissent → Minde Zhuyi → "A Father to the People"
    → Zhang Zuolin Bonapartism: "A Chinese Napoleon" — proclaims himself Emperor!
      (requires having also issued The Ultimatum to Japan)

  C. DRAGON THRONE (monarchist restoration):
    → Mutually exclusive with Ultimatum and Pan-Asian
    → Three dynasty choices:
      1-7:  QING DYNASTY — restore Puyi on the throne (legitimist)
      8-13: MING DYNASTY — "Hongwu" revival, Han Chinese nativist monarchy
      14-17: YAMATO DYNASTY — Japanese emperor on Chinese throne (Pan-Asian extreme)
            → Hirohito, Kan'in Kotohito, or Yasuhito as regent/emperor
            → One Struggle, One Money — full Sino-Japanese merger
            → Bushido, imperial examinations, court culture synthesis
      18-20: Empress Dowager (Qing empress variant)

  D. THE ULTIMATUM (Anti-Japan):
    → Requires: Fading Sun NOT active, low Mantetsu influence
    → Cut Japanese ties, expel settlers, seize Mantetsu assets
    → Wipe Japanese Influence → Kaere (expel settlers) OR Put Settlers to Work
    → Can combine with Bonapartism or Federalism
    → Risk: Japan may declare war to prevent losing Manchuria

  E. PAN-ASIAN CHINA (pro-Japan integration):
    → Requires: Yang Yuting as leader (Concordia Association)
    → Sino-Japanese Currency Union, integrate Kwantung Army
    → China becomes junior partner in Japanese sphere
    → Mutually exclusive with Ultimatum and Dragon Throne

  F. FEDERALIST COALITION:
    → Requires: conference + federalist support flag + Ultimatum completed
    → Zhang Zuolin shifts to SocCon, builds federal constitutional republic
    → Land reform, literacy campaigns, healthcare
    → Uses UPC (United Provinces of China) focus tree post-unification

QING/ZHILI PATHS (if Zhili holds or Manchu Restoration):

  A. WU PEIFU REPUBLIC — drops imperial pretense, military republic
  B. PUYI CONSTITUTIONAL MONARCHY — real reforms, spiritual monarch
  C. SONG ZHEYUAN (Confucian conservative) — Society for Restoring Benevolence
  D. YAN XISHAN (if coup backer) — Yan Xishan Thought applied nationally
  E. YIGUANDAO THEOCRACY — Zhang Tianran, religious state, Puyi re-puppeted

LEP/AOG PATHS (if League survives or AOG takes over):

  A. LEP INDEPENDENT — Sun Chuanfang/Qi Xieyuan: Southern Chinese state
    → Sub-paths: Zhili Republic, Qing Restoration, Han Restoration
    → Join Germany (Reichspakt) OR help Germany (military aid only)
  B. AOG CHINA — Hohenzollern puppet monarchy ("Willy Nilly")
    → German Kaiserreich on Chinese soil (SuperEvent: AOG China!)
    → AOG Junta, AOG New Mandate (Puyi/Pujie/Keding as puppet emperor)
    → Can "look outward" — claim Manchuria, fate of Legation Cities
  C. ANQING BREAKAWAY — Chen Tiaoyuan reforms, anti-German
    → Republic path or imperial keystone (serve Beijing)
    → Pan-Asian (Japanese alignment) or stand with republic

YUNNAN/KMT PATHS:

  A. TANG JIYAO HOLDS — warlord continuity, failed republic
  B. LONG YUN COUP — Yi minority warlord seizes Yunnan
    → "The Dragon of Yunnan" — pragmatic, tenuous, ambitious
  C. ZHU PEIDE (Right KMT) — rallies rightist Kuomintang from Yunnan
    → Bastion of Republicanism → Federalism or Isolation
    → Can unify China as federal republic
  D. LEFT KMT BREAKOUT — Second Northern Expedition from MinGan Zone
    → Song Qingling (SocDem) — widow of Sun Yat-sen, figurehead
    → Wang Jingwei (SocLib/SocDem) — ambitious politician, exile returnee
    → Deng Yanda (RadSoc) — Provisional Action Committee
    → Dai Chunfeng (PatAut) — "Hooded Chairman," security state
    → Hu Zongnan (NatPop) — China Revival Society, "Red Generalissimo"
    → Chen Duxiu (Syndie) — Chinese Syndicalist Party, Marxist intellectual
    → Post-unification Congress: 5+ factions compete for KMT direction

SICHUAN PATHS:

  A. YANG SEN (Armament Dept) — Zhili-loyal modernizer
  B. LIU XIANG (Industrial Corps) — ambitious, reckless, wants revenge on Zhili
    → Moves capital to Chongqing, rapid industrialization
  C. DENG XIHOU / LIU WENHUI (Baoding Dept) — conservative-reformist diarchy
    → Rural development, model province, pragmatic

HUNAN PATHS (3-way election):

  A. ZHAO HENGTI — SocCon, sham democracy, clamp down on dissent
    → Join Zhili or stay independent
  B. TANG SHENGZHI — "The Buddhist General," Buddhist Socialism (!)
    → Revolutionary Buddhism → nationalize industry, sanghas into cooperatives
    → Can align with Left KMT
  C. CHENG QIAN — KMT-aligned general, three principles
    → Brings Hunan into KMT orbit

MONGOLIA PATHS:

  A. STERNBERG HOLDS — Mad Baron's reign of terror continues
    → Pan-Mongol expansion, crush dissidents, occult monarchism
  B. NON-STERNBERG — Bogd Khan asserts authority or revolution
    → Democratic reforms, Buddhist modernization, or communist uprising

--- POSSIBLE CHINA UNIFIERS (d20 table for GM) ---

When the dust settles, who unifies China?

  1-3:   Fengtian (Zhang Zuolin/Xueliang) — military strongman republic or monarchy
  4-5:   Qing Restored (Puyi) — constitutional monarchy, Manchu legitimacy
  6-7:   Left KMT (Song Qingling / Wang Jingwei) — revolutionary republic
  8-9:   AOG China — German puppet state, Hohenzollern mandate
  10-11: Federalist China (UPC) — democratic federal republic, any unifier can pivot here
  12-13: Yiguandao Theocracy (Zhang Tianran) — religious cult state
  14:    Yunnan (Long Yun / Zhu Peide) — republican restoration from the south
  15:    Sichuan (Liu Xiang) — industrial power projects outward
  16:    Dragon Throne (Fengtian monarchist) — Ming, Qing, or Yamato dynasty
  17:    Wu Peifu Republic — military republic, no emperor
  18:    Pan-Asian Fengtian (Yang Yuting) — Sino-Japanese fusion state
  19:    Anqing (Chen Tiaoyuan) — reformed League, anti-German
  20:    NOBODY — China remains permanently fractured (3+ rump states)

--- KEY NPCs ---

Wu Peifu — Zhili strongman, "Philosopher General." Incorruptible, brilliant at war,
  terrible at politics. Controls Beijing in Puyi's name.
  Appears: Start. Central to Zhili path.
  If in power: Drops imperial pretense, names himself interim head. Military republic.

Puyi (Aisin-Gioro) — Xuantong Emperor. Deposed at 5, restored by German intervention.
  Tennis-playing figurehead who may secretly harbor ambitions for real power.
  Appears: Start (puppet). Manchu Coup makes him relevant.
  If in power: Constitutional monarchy — limits own power to prevent future tyranny.

Zhang Zuolin — "The Old Marshal." Bandit-turned-warlord. Illiterate, shrewd,
  self-centered, once crashed Manchuria's economy to fund his wars. Pro-Zhang ideology.
  Appears: Start (Fengtian leader). Drives unification war.
  If in power: Strongman republic or Bonapartist emperor. Short temper, deep grudges.

Zhang Xueliang — "The Young Marshal." Son of Zuolin. Mixed combat record,
  struggles with personal demons — gambling, smoking, carousing in the Legation Cities.
  Appears: Inherits if Zuolin dies/retires. Leads the "Zhang Clique."
  If in power: More idealistic than father, but war trauma haunts him.

Yang Yuting — Fengtian chief of staff. Regionalist, skeptical of unification.
  Informal ties to Japanese Kwantung Army. Leader of the "Shikan Clique."
  Appears: Fengtian political events. Pan-Asian China path requires him as leader.
  If in power: Sino-Japanese integration, Concordia Association ascendant.

Sun Chuanfang — "The Smiling Tiger." LEP leader. Master of personal relationships,
  German connections indispensable. Hard to read; executes friends after assurances.
  Appears: Start (LEP leader). May die early (assassination risk).
  If in power: Southern hegemony sustained through German backing and charm.

Qi Xieyuan — Northern Zhili faction within LEP. Seizes Nanjing if Sun falls.
  Appears: LEP collapse events.
  If in power: Continues Zhili-style rule from Nanjing.

Zhang Tianran — Yiguandao cult leader. Built shrine complex on Mount Tai,
  claims divine revelation that Puyi was in danger. Converted Zhang Zongchang.
  Appears: Shandong/Qing events. Yiguandao theocracy path.
  If in power: Religious state — Puyi re-puppeted under cult, not military.

Song Zheyuan — Confucian military officer, rescued the Duke of Yansheng (descendant
  of Confucius) from Yiguandao on Mount Tai. Founded Society for Restoring Benevolence.
  Appears: Shandong/Qing Manchu Coup backer path.
  If in power: Confucian conservative modernization of Qing.

Yan Xishan — "Model Governor" of Shanxi. Philosopher-warlord with his own ideology.
  Neutral and opportunistic — waits for the right moment, never strikes first.
  Appears: Start (Shanxi). Can become Manchu Coup backer or Fengtian ally.
  If in power: "Yan Xishan Thought" — syncretic modernization, model province writ large.

Tang Jiyao — Yunnan warlord. Flamboyant, overambitious, alienates subordinates.
  Shelters KMT remnants but is himself no republican.
  Appears: Start (Yunnan leader). Usually deposed early.
  If deposed: Long Yun, Zhu Peide, or others seize power.

Long Yun — "The Dragon of Yunnan." Yi minority warlord. Pragmatic outsider to
  Han political elite. Seized power through betrayal, knows his own could betray him.
  Appears: Yunnan power struggle.
  If in power: Tenuous but determined rule, Yi minority connections.

Song Qingling — Sun Yat-sen's widow, chairwoman of Left KMT. Elegant, determined,
  suffered miscarriage fleeing Chen Jiongming's bombardment. Untouchable status.
  Appears: Left KMT events. Figurehead of the revolution.
  If in power: SocDem China, completing Sun's Three Principles.

Chen Tiaoyuan — Anqing Clique leader. Anti-German, resentful of Sun Chuanfang's
  collaboration with AOG. Won respect for opposing German exploitation of Anhui.
  Appears: LEP collapse. Anqing breakaway path.
  If in power: Reforms League provinces away from German dependence.

Zhao Hengti — Hunan governor. Introduced Asia's first provincial constitution.
  Democratic idealist trapped in a warlord system.
  Appears: Hunan elections.
  If in power: Provincial democracy, limited ambitions beyond Hunan.

Tang Shengzhi — "The Buddhist General." Buddhist Socialist program in Hunan.
  Claims Buddhism and socialism are identical. Exiled, returned, contests elections.
  Appears: Hunan elections. RevBuddhism path.
  If in power: Nationalize industry, sanghas into cooperatives, IndoctrinateThePeople.

Liu Xiang — Sichuan warlord. Skilled but reckless commander. Harbors deep
  resentment toward Zhili for denying him the governorship he deserved.
  Appears: Sichuan civil war.
  If in power: Rapid industrialization from Chongqing, aggressive expansion.

Alexander von Falkenhausen — German military advisor to LEP. Fought in Boxer
  Rebellion, speaks Japanese, strategic mind. Ready for a future war with Japan.
  Appears: LEP/AOG events.
  If in power: AOG military backbone, shapes German China policy.

--- REGIONAL FLAVOR ---

Atmosphere: Steam-whistles of armored trains crossing Yellow River bridges at dawn.
  Opium smoke in the Legation Cities' backrooms where German businessmen and Chinese
  compradors cut deals. Red paper lanterns hung over barricades in the MinGan hills
  where KMT guerrillas drill with captured Zhili rifles.

Technology: German-supplied Mauser rifles and artillery dominate the Zhili/LEP armies.
  Japanese Arisaka rifles and Mantetsu rolling stock in Fengtian. Improvised armored
  trains are the kings of Chinese warfare — whoever controls the railways controls
  the province. Biplanes from Shenyang Aerodrome. AOG brings German industrial
  machinery to Shanghai's concession factories.

Civilian life: Peasants caught between tax collectors from three different warlords.
  Students in Beijing and Shanghai radicalize — reading banned KMT pamphlets, syndicalist
  theory smuggled from France, or Yiguandao prophecies. Famines follow floods follow wars.
  The Legation Cities (Shanghai, Tianjin) are islands of neon and jazz in a sea of
  rural desperation.

--- CASCADE TABLE ---

Events HERE that affect OTHER regions:

| Event | Affects | Effect |
|-------|---------|--------|
| Fengtian issues Ultimatum to Japan | Japan | Fading Sun crisis deepens; Japan may war |
| Pan-Asian Fengtian merges with Japan | Japan / Pacific | United East Asian empire emerges |
| AOG China established | Germany | Massive colonial expansion; Reichspakt strengthened |
| AOG China established | Japan | Direct rival in East Asia; war possible |
| Left KMT unifies China | Internationale | Syndicalist ally in Asia; shifts global balance |
| Left KMT unifies China | Indochina / SE Asia | Revolutionary export, insurgencies spread |
| China unified (any path) | Mongolia | Unifier demands Outer Mongolia — Sternberg threatened |
| China unified (any path) | Tibet | Unifier demands "return" of Tibet |
| China unified (any path) | Xinjiang | Absorbed or buffered by Russia |
| Fengtian Dragon Throne (Yamato) | Japan | Personal union — Emperor rules both nations |
| Zhang Tianran Yiguandao China | Shandong / Neighbors | Theocratic expansion, cult missionaries |
| Federalist China formed | Global | Democratic great power emerges — Entente potential ally |
| Fading Sun (Japan collapses) | Fengtian | Free hand — can seize Manchuria fully, no patron |
| Russia wins 2RCW | Mongolia / Xinjiang | Pressure on northern borders, ideology export |

================================================================
================================================================
BALKANS / AUSTRIA-HUNGARY — The empire that won the war but lost the peace
================================================================

--- STARTING STATE (1936) ---

Government: Dual Monarchy under Kaiser Karl I (SocCon), with autonomous kingdoms
  - Austria (AUS): core state, SocCon ruling, elections imminent
  - Hungary (HUN): autonomous puppet, PatAut under Gyula Gombos
  - Bohemia (CZE): autonomous puppet
  - Illyria/Croatia (CRO): autonomous puppet, SocLib, cosmetic tag ILL
  - Galicia-Lodomeria (GAL): autonomous puppet
  All in the Donau-Adriabund faction led by Austria.

Situation: Austria won the Weltkrieg but the empire is rotting from within.
  Black Monday has devastated the economy. Half the population is unhappy
  with election results. The 1937 Ausgleich renegotiation looms -- Hungary
  has refused to pay its share since 1927 in protest over Illyria's creation.
  A far-right Ariosophist movement and a Dollfuss-led Fatherland Front
  threaten a NatPop coup before elections even happen.

Alignment: Reichspakt-adjacent (Austrian sphere / Donau-Adriabund)
Key tension: The 1937 Ausgleich will determine whether Austria reforms,
  centralizes, or shatters. Meanwhile, Serbia is forming the Belgrade Pact.

External dependencies:
- Black Monday (Germany) -> economic crisis hits Austria and all subjects
- 2nd Weltkrieg outbreak -> Austria may be dragged in via Reichspakt ties
- Ottoman collapse -> Greece freed to pursue Megali Idea
- Italian front -> Illyria borders SRI, gets pulled into Italian wars

--- FACTIONS (Starting) ---

AUS: Austria-Hungary (Donau-Adriabund)
  Leader: Kaiser Karl I -- duty-bound reformer, exhausted by endless crises
  Ideology: SocCon (election pending, can shift SocDem/SocLib/PatAut/NatPop)
  Territory: Austria proper + overlord of HUN, CZE, CRO, GAL
  Strength: strong (largest Balkan power, industrial base in Bohemia)
  Goal: Hold the empire together through the Ausgleich

HUN: Kingdom of Hungary
  Leader: Gyula Gombos -- authoritarian regent, chafing under Vienna
  Ideology: PatAut
  Territory: Hungarian plains, Budapest, parts of Slovakia/Transylvania
  Strength: medium (agricultural base, limited industry, Austrian dependency)
  Goal: Maximum autonomy or full independence from Austria

CZE: Kingdom of Bohemia
  Leader: governed under Austrian framework (Masaryk legacy)
  Ideology: varies (Agrarian/Realist factions compete)
  Territory: Bohemia, Moravia, parts of Silesia
  Strength: medium-strong (Skoda works, industrial heartland of the empire)
  Goal: Czech self-determination, possibly revolution for independence

CRO: Kingdom of Illyria (Croatia-Slovenia-Bosnia federation)
  Leader: Vladko Macek (SocLib) -- pragmatic federalist
  Ideology: SocLib
  Territory: Croatia, Slovenia, Bosnia, Dalmatian coast
  Strength: medium (naval access, shipyards, ethnically divided)
  Goal: Maintain federation; if Austria falls, forge own path

SER: Kingdom of Serbia
  Leader: Petar Bojovic -- military strongman under AuthDem rule
  Ideology: AuthDem
  Territory: Serbia proper (lost Macedonia/Kosovo to Bulgaria)
  Strength: weak-medium (recovering from Weltkrieg defeat, revanchist)
  Goal: Form Belgrade Pact, reclaim lost territories, destroy Bulgaria

BUL: Tsardom of Bulgaria
  Leader: Tsar Ferdinand I -- aging monarch, AuthDem
  Ideology: AuthDem
  Territory: Bulgaria + Macedonia, Western Thrace
  Strength: medium (Weltkrieg victor, holds disputed territories)
  Goal: Defend Macedonian gains, possible expansion

GRE: Kingdom of Greece
  Leader: Georgios Kondylis -- AuthDem military figure
  Ideology: AuthDem
  Territory: Southern Greece (lost Thrace, Northern Epirus contested)
  Strength: weak-medium (economic troubles, monarchy referendum pending)
  Goal: Resolve monarchy question, then pursue Megali Idea

ROM: Kingdom of Romania
  Leader: Carol II -- NatPop monarch flirting with the Iron Guard
  Ideology: NatPop
  Territory: Wallachia, Moldavia (Transylvania held by Austria/Hungary)
  Strength: medium (oil reserves, large population, wants Transylvania)
  Goal: Reclaim Transylvania from Austria-Hungary

ALB: Republic of Albania
  Leader: Shefqet Verlaci (SocCon)
  Ideology: SocCon
  Territory: Albania (small, underdeveloped, feudal clans in north)
  Strength: weak (poorest country in Europe, clan politics)
  Goal: Survive, modernize, avoid being eaten by neighbors

GAL: Kingdom of Galicia-Lodomeria
  Ideology: Austrian puppet
  Territory: Eastern Galicia (Polish/Ukrainian population)
  Strength: weak (agricultural, ethnically divided)
  Goal: Survive Austrian collapse if it comes

--- CRISIS I: The Ausgleich (Austrian Internal Reckoning) ---

Trigger: 1937 Ausgleich renegotiation event chain (fires after 1936 elections)
Timing: ~1936-1938
Clock: 0------6 (Austria holds together <-> Empire shatters)

PHASE 1 -- ELECTIONS & COUP (d20, early 1936):
  1-5:   SDAP (SocDem) wins elections. Karl Renner leads reform Austria.
         Dollfuss coup PREVENTED. Path to pluralism opens.
  6-12:  CS (SocCon) wins elections. Wilhelm Miklas leads status quo.
         Dollfuss demands concessions -- may or may not attempt coup.
  13-17: Dollfuss coup SUCCEEDS. NatPop Fatherland Front seizes power.
         Liebenfels (Ariosophist lunatic) becomes chancellor.
         Karl I reduced to figurehead.
  18-20: Dollfuss coup ATTEMPTED but FAILS. Stability boost, NatPop purged.
         Proceed to normal Ausgleich.

PHASE 2 -- AUSGLEICH NEGOTIATION (d20, if no NatPop coup):
Three possible frameworks:
  - Hungary-only negotiations (traditional bilateral)
  - All kingdoms invited (broader reform)
  - All nationalities invited (deepest reform)

  1-6:   Negotiations SUCCEED. Hungary accepts terms. Boycott avoided.
         Austria stabilizes. Status quo or pluralism path opens.
  7-12:  Negotiations STRAINED. Partial boycott. Illyrian payments dispute
         or territorial demands create friction but no war.
  13-17: Negotiations FAIL. Hungarian boycott. Riots in Budapest.
         Austria issues ultimatum to Hungary.
  18-20: COMPLETE BREAKDOWN. Hungary refuses ultimatum.
         Austrian-Hungarian civil war erupts (ausgleich.new.344).

AUSGLEICH OUTCOMES (three mutually exclusive post-Ausgleich paths):

A) STATUS QUO (dualism preserved):
   - Dual monarchy continues with minor reforms
   - Administrative/education reforms in Cisleithania
   - 1947 Ausgleich renegotiation gives second chance at reform
   - Railway development (Illyrian Sudbahn, Northern Railway)
   - Galician oil exploitation
   - Stable but stagnant

B) EMBRACE PLURALISM (requires successful broader negotiation):
   Further splits into:
   - AUSTRO-MARXISM (SocDem/SocLib): Danubian Federation. Karl Renner's
     dream -- federation of nationalities with socialist framework.
     Stabilizes empire through radical democratic reform.
   - UNITED STATES OF GREATER AUSTRIA (non-SocDem): Federal restructuring.
     Deal with Cisleithania, deal with Hungary separately.
     Richard von Coudenhove-Kalergi's pan-European vision.

C) MILITARY OCCUPATION (PatAut, requires Gombos subdued):
   - Kallar-era Greater Austria. End dual rule entirely.
   - Direct military occupation of Hungarian lands.
   - Cosmetic tag: Austrian-Hungarian Empire (centralized)
   - Bohemian lands exploited, Hungarian lands developed under Vienna
   - Opens war path: Claim Serbia, Claim Romania
   - Ultimately: GROSSDEUTSCHES REICH (annex Germany itself!)

Cascade:
- If Pluralism succeeds -> stability in Central Europe, Reichspakt strengthened
- If Status Quo -> Austria weakened but survives, vulnerable to Belgrade Pact
- If Military Occupation -> aggressive Austria, war with Serbia likely
- If civil war -> Crisis II triggers

--- CRISIS II: Austrian Collapse (Illyrian Collapse) ---

Trigger: AUS_collapsed flag (subject revolt progress reaches critical),
  OR Hungarian civil war spirals, OR Bohemian revolution
Timing: ~1938-1941 (if Ausgleich fails badly)
Clock: 0------6 (empire recovers <-> total dissolution)
SuperEvent: super.18 (Illyrian Collapse)

COLLAPSE TRIGGERS (any can start the cascade):
- Hungarian civil war (ausgleich.new.344): Austria declares war on Hungary,
  Bohemia/Galicia/Illyria pulled in on Austrian side
- Bohemian revolution (BOH_the_revolution): Bohemia declares independence
  war against Austria. Can become Czechoslovakia if Slovaks join.
- Subject revolt meter hits threshold (weekly +1%, more if low stability)
- Belgrade Pact attack while empire is weakened

WHAT EMERGES FROM COLLAPSE (d20):
  1-5:   PARTIAL COLLAPSE. Hungary breaks free, others stay loyal.
         Austria retains Bohemia, Illyria, Galicia as rump state.
  6-12:  FULL COLLAPSE. All subjects break free:
         Hungary (independent), Bohemia/Czechoslovakia (independent),
         Illyria (independent), Galicia (independent or to Poland),
         Austria reduced to Alpine core. Slovakia may separate.
         Transylvania (TRS) may emerge as separate state.
  13-17: CHAOTIC COLLAPSE. Multiple civil wars simultaneously.
         Illyria itself fragments (Croatia vs Bosnia vs Slovenia).
         Belgrade Pact invades opportunistically.
  18-20: COMPLETE DISSOLUTION + FOREIGN INTERVENTION.
         Germany intervenes to stabilize/annex Austria.
         Romania grabs Transylvania. Serbia invades Bosnia.
         Poland takes Galicia. Italy takes South Tyrol/Istria.

CASCADE -- ILLYRIAN INTERNAL CRISIS (if CRO breaks free):
Illyria faces its own fork after independence:
  - LOYALTY PATH: Stay with Austria, joint training, new arrangement
  - INDEPENDENCE WON or CIVIL WAR WON -> Democracy restored:
    - New Croatia (drop federation) vs Illyrian Federation (keep it)
    - Elections: SocLib / SocDem / SocCon / PatAut (Pavelic)
  - PAVELIC TAKEOVER (PatAut): Ustasha-style dictatorship.
    Death squads, ethnic cleansing, "reeducation." Targets Bosnians,
    Slovenes, or Republicans (pick an enemy). Horrific content.

Cascade:
- Austrian collapse -> Poland can claim Galicia
- Austrian collapse -> Romania immediately pushes for Transylvania
- Austrian collapse -> Germany loses major ally, Reichspakt weakened
- Austrian collapse -> Belgrade Pact sees opening, Balkan War accelerates
- Illyrian independence -> South Slavic Union becomes possible
- Slovenia separates -> can rejoin Austria or Illyria (ausgleich.new.666)

--- CRISIS III: The Balkan War ---

Trigger: Serbia forms Belgrade Pact, issues ultimatum to Bulgaria
Timing: ~1938-1940
Clock: 0------6 (diplomacy holds <-> total Balkan war)
SuperEvent: super.4 (BUL has_war_with SER)

BELGRADE PACT FORMATION (SER_congress_of_belgrade, after May 1937):
Serbia invites Romania and Greece to anti-Bulgarian alliance.
Romania wants Transylvania (from Austria) but also joins vs Bulgaria.
Greece wants Thrace and Macedonian territory.

SIDES:
  Belgrade Pact: Serbia + Romania + Greece (+ possibly Illyria if independent)
  vs Bulgaria (+ possibly Austria if still intact, Albania as buffer)

OUTBREAK (d20):
  1-4:   Bulgaria SUBMITS to ultimatum. Cedes Macedonia peacefully.
         No war. Bulgaria humiliated, Serbia ascendant.
  5-10:  Bulgaria REFUSES. Limited war -- Serbia + Romania vs Bulgaria.
         Greece may or may not join. Austria stays out.
  11-16: FULL BALKAN WAR. All Belgrade Pact members attack Bulgaria.
         Austria may intervene on Bulgaria's side if empire intact.
         Albania dragged in as buffer state.
  17-20: EXPANDED WAR. Belgrade Pact also attacks Austria for Transylvania/
         Bosnia simultaneously. Multi-front catastrophe.

RESOLUTION (d20, when clock hits 0 or 6):
  1-6:   BULGARIA WINS. Keeps Macedonia, may expand into Serbian territory.
         Belgrade Pact collapses. Romania forced to accept no Transylvania.
  7-13:  SERBIA WINS. Bulgaria partitioned. Serbia occupies and administers
         Bulgaria (SER_occupation_of_bulgaria). Macedonia returned.
         Greater Serbia emerges.
  14-17: ROMANIA WINS (biggest gains). Gets Transylvania from Austria/Hungary,
         Dobruja from Bulgaria. Romania becomes regional power.
  18-20: STALEMATE / AUSTRIAN INTERVENTION. White peace or Austria
         brokers deal as "Protector of the Balkans." Albania, Greece,
         Bulgaria invited into Austrian sphere.

Cascade:
- Serbia wins -> Belgrade Pact dominates Balkans, threatens Austria
- Bulgaria wins -> Balkan instability continues, possible Third Empire
- Romania gets Transylvania -> Austria permanently weakened
- Austria intervenes -> empire may stabilize through external war
- Balkan War outcome affects 2nd Weltkrieg alliances

--- CRISIS IV: South Slavic Union ---

Trigger: Independent Illyria (SocDem path) completes Pan-Slavist focus tree
Timing: ~1940-1943 (requires Austrian collapse + Illyrian independence)
Clock: 0------6 (union rejected <-> federation proclaimed)
SuperEvent: super.27 (CRO_slavic_union_formed)

REQUIREMENTS:
- Illyria must be independent (not Austrian subject)
- SocDem elected, then: Federal Government + Pan-Slavist Ideas
- Must ally with either Serbia (CRO_slavic_brothers) or Bulgaria
  (CRO_best_friends) first
- Then: CRO_proclaim_federation focus fires event to Serbia or Bulgaria

PROPOSAL (d20):
  1-8:   Partner ACCEPTS. South Slavic Federation proclaimed.
         CRO gains cores on all South Slavic lands.
         Cosmetic tag: ILL_south_slavic_union.
         Global flag set. Massive political power boost.
  9-14:  Partner REFUSES. Illyria declares war to force union (cro.19).
         Military unification attempted.
  15-20: Partner refuses AND counter-attacks. Failed union attempt
         weakens Illyria, possibly collapses the state.

Alternative: TITO PATH (CRO_marhsal_tito focus). Josip Broz Tito
  leads a more authoritarian version of the South Slavic project.
  Can also achieve federation through CRO_fair_equal.

--- CRISIS V: Byzantium Reborn ---

Trigger: Greece completes Purple Phoenix focus chain
Timing: ~1942+ (requires extensive military/political preparation)
Clock: N/A (this is a late-game achievement, not a ticking crisis)
SuperEvent: super.32 (GRE_byzantium cosmetic tag)

REQUIREMENTS (GRE_purple_pheonix focus):
  Must own: Western Thrace (773), Cyprus (49), Gelibolu (341),
  Dodecanese (183), Constantinople (340), Bursa (339), Izmir (342),
  Ankara approaches (356), Bithynia (343).
  This means: DEFEATING THE OTTOMAN EMPIRE and conquering Anatolia.

PATH TO BYZANTIUM:
1. Resolve monarchy referendum (GRE_monarchy_referendum)
2. Build war industry and motivate army
3. Complete Megali Idea focus (GRE_megali_idea) -- claim Thrace,
   Constantinople, Ionia, Cyprus, Dodecanese
4. Art of War / National Service / Avenge focuses
5. GRE_retake -- claim Constantinople and western Anatolia
6. GRE_purple_pheonix -- if you OWN all required states:
   Byzantium proclaimed. Capital moves to Constantinople.
   Cores on all Anatolia. Research slot bonus.
   Global flag BYZ_formed set.

Any non-SocDem government can attempt this (SocCon/SocLib/RadSoc/
AuthDem/PatAut/NatPop all valid). Metaxas (NatPop) is the most
thematically dramatic path.

--- COUNTRY PATHS (Post-Crisis Governance) ---

AUSTRIA (if survives):
  SDAP PATH: Karl Renner (SocDem/SocLib). Workers' councils, welfare state.
    Remove divided society. Leads to Pluralism -> Danubian Federation.
  CS PATH: Wilhelm Miklas (SocCon). Austerity, fill coffers, slow recovery.
    Traditional conservatism. Leads to Status Quo.
  NATPOP PATH: Liebenfels (NatPop/Ariosophy). Templaric Order of Austro-Aryans.
    Suppress socialists, disable legislature, jumpstart military economy.
    One-party empire. Then: REVENGE ON PRUSSIA (attack Germany!),
    GROSSDEUTSCHES REICH (claim all German cores), Euthanize Serbia,
    Cull France, Segregate Ethnicities. Full world-conquest lunacy.

HUNGARY (if independent):
  DEMOCRATIC: SocCon (Bethlen machine) / SocLib (universal suffrage,
    "Eastern Switzerland") / Free Hungary (restoration of liberties)
  TOTALIST: Bela Kun returns. Red Terror, collectivization,
    revolutionary catharsis. State Protection Authority.
    Can go full Jacobin or more moderate Totalist administration.
  NATPOP: Szeged fascists or Arrow Cross style.
    Freeholds and smallholds agrarianism with ultranationalism.

BOHEMIA (16k lines of content):
  UNDER AUSTRIA: Work with Germans vs Czech focus (mutually exclusive).
    Death of Masaryk triggers political succession crisis.
    Agrarian victory / Realist victory / National Democratic paths.
  REVOLUTION: BOH_the_revolution -- declares war on Austria.
    Can become free Czechoslovakia with Czech or Slovak focus.
  INDEPENDENT: Land reforms, social reforms, Czech Model Democracy.
    Religious reforms branch. Czechoslovak autonomy vs centralization.
    Military: War of Words (diplomatic) vs War of Arms (military buildup).
    Radical changes / feminist Czechoslovakia / defend the revolution paths.

SERBIA:
  MONARCHIST: Return of Crown Prince Alexander. Yugoslavism encouraged.
    Glory to the King path. Monument to Unknown Soldier.
  VOJVODA (AuthDem/PatAut): Military strongman path. Radical Union.
    Greenshirts mobilized. "One Vojvoda, One Nation, One State."
  REPUBLICAN: Republican Proclamation. Draft constitution,
    free prisoners, nascent Balkan democracy.
    Pasic Manifesto (SocCon) vs Open Economy (MarLib).
  BLACK HAND: Secret military society. SKK or Black General path.
    Pacify opposition, fund king's men, Black Legion.
    "Unity or Death" -- ultimate Serbian militarism.

BULGARIA:
  LIBERAL: Assert Tsar's power vs empower National Assembly.
    Progressive reforms, political meritocracy.
    Keeping radicalism at bay. Stable constitutional monarchy.
  ZVENO (military junta): Zveno Take Power. Corporatism.
    Leadership Question -> Georgiev's Organic State vs Lukov's Militant State.
    Technocratic society. Then three expansion paths:
    - THIRD EMPIRE: Under Tsar Kyril I, claims on Serbia/Illyria/Romania/
      Albania/Thrace. Take Our Revenge war.
      Cosmetic tag: BUL_empire.
    - YUGOSLAVISM: Bulgaria-led South Slavic state. Conquer Serbia,
      Albania, Illyria. Form Yugoslavia under Bulgarian leadership.
      Cosmetic tag: BUL_YUG.
    - STAY NEUTRAL: Benefit of peace. Defensive path.
  NATPOP (Turanic/Khanate): Slash and burn. History of Bulgars.
    Bulgar Identity, Steppe-prepared Cossacks. A KHAN REBORN.
    Cosmetic tag: BUL_khanate. Then: attack Don-Kuban, Ukraine,
    RESTORE VOLGA BULGARIA, attack Russia.
    Cosmetic tag: BUL_old_great_bulgaria. Full steppe empire insanity.

ROMANIA:
  Starts NatPop under Carol II, Iron Guard influence.
  Legionary victory path: Iron Guard cooperatives, legionary
  industrialization, cult of the warrior, legionary revolution.
  TRANSYLVANIA OR WAR: ultimatum to Austria/Hungary for Transylvania.
    War goal against HUN/AUS/GAL. If successful: Greater Romania.

ALBANIA:
  1936 elections: Bashkimi (progressive) vs traditional conservatives.
  Monarchy restoration (King Zog path): abolish republican institutions,
    cement royal power, grant autonomy to Catholic clans.
  Multiple leader paths: Hoxha (Totalist), Rustemi (SocDem),
    Ypi (SocLib), Verlaci (SocCon), Bumci (AuthDem),
    Frasheri (PatAut), Mid'hat Frasheri (NatPop/Balli Kombetar).
  Mostly trying to survive and modernize.

--- KEY NPCs ---

Karl I (Kaiser) -- Emperor of Austria-Hungary. Duty-bound, exhausted.
  Appears: always (starting leader, figurehead even under NatPop coup)
  If in power: reforms possible, empire may survive through Ausgleich

Jorg Lanz von Liebenfels -- Ariosophist occultist, racial theorist.
  Former monk who found a Templar tombstone and went insane. Believes
  blonde Aryans are descended from paranormal demigods. Wants "racial
  demixing" through the Osterreichische Ariosophische Einheitspartei.
  Appears: NatPop coup path (aus.9)
  If in power: Grossdeutsches Reich, war with Germany, ethnic segregation

Engelbert Dollfuss -- Fatherland Front leader, would-be dictator.
  Appears: pre-election coup attempt (aus.8/aus.9)
  If in power: enables Liebenfels path, suppresses socialists

Karl Renner -- Austro-Marxist theorist, SocDem reformer.
  Appears: SDAP election victory
  If in power: Danubian Federation, multinational socialism

Gyula Gombos -- Hungarian regent, PatAut strongman.
  Appears: starting Hungarian leader
  If in power: resists Ausgleich, may trigger civil war

Istvan Bethlen -- Hungarian conservative politician, "Bethlen machine."
  Appears: SocCon Hungary path
  If in power: managed democracy, diplomatic Hungary

Josip Broz Tito -- Croatian/South Slavic revolutionary leader.
  Appears: Illyrian SocDem path (CRO_marhsal_tito)
  If in power: South Slavic Federation under socialist leadership

Ante Pavelic -- Croatian ultranationalist, Ustasha leader.
  Appears: Illyrian PatAut path (CRO_reign_begins)
  If in power: death squads, ethnic cleansing, terror state

Vladko Macek -- Illyrian SocLib pragmatist, federalist.
  Appears: starting Illyrian leader
  If in power: tries to hold multi-ethnic federation together

Tsar Ferdinand I -- aging Bulgarian monarch, Weltkrieg victor.
  Appears: starting Bulgarian leader
  If in power: holds Macedonia, plays great power politics

Kimon Georgiev -- Bulgarian Zveno junta leader, technocrat.
  Appears: Zveno coup path
  If in power: corporatist military state, Third Empire possible

Corneliu Codreanu -- Romanian Iron Guard leader, mystic fascist.
  Appears: Romanian legionary path
  If in power: Legionary Romania, "cult of the warrior"

Carol II -- Romanian king, NatPop-adjacent monarch.
  Appears: starting Romanian leader
  If in power: flirts with Iron Guard, pursues Transylvania

Ioannis Metaxas -- Greek NatPop military strongman.
  Appears: Greek NatPop path
  If in power: most likely to pursue Byzantium reformation

Petar Bojovic -- Serbian AuthDem military leader.
  Appears: starting Serbian leader
  If in power: Belgrade Pact formation, war with Bulgaria

Zog I -- Albanian king (potential restoration).
  Appears: monarchy restoration path
  If in power: royal guard expansion, land reform, clan politics

Franz Conrad von Hotzendorf -- Austrian field marshal, Weltkrieg veteran.
  Appears: military tree
  If in power (as commander): aggressive offensive doctrine

--- REGIONAL FLAVOR ---

Atmosphere: Crumbling Habsburg palaces with peeling gilt. Train stations
  where six languages echo under iron vaulted ceilings. Belgrade cafes
  where veterans plot revenge over Turkish coffee. Sofia's yellow-brick
  boulevards where soldiers parade past Orthodox churches.

Technology: Skoda heavy artillery, Austrian mountain troops, Adriatic
  naval bases. Romanian oil fields feed war machines. Greek naval
  tradition. Serbian guerrilla expertise. Bulgarian veteran infantry.

Civilian life: In Vienna, workers debate Austro-Marxism in coffeehouses
  while NatPop pamphlets circulate in alleys. In Budapest, Magyar
  nationalists agitate against Austrian overlordship. In Zagreb, Croats,
  Serbs, and Bosniaks share streets uneasily. In Bucharest, the Iron
  Guard marches. In Athens, the monarchy question divides families.

--- CASCADE TABLE ---

Events HERE that affect OTHER regions:

| Event | Affects | Effect |
|-------|---------|--------|
| Austrian collapse | Germany | Loses major ally, Reichspakt weakened, eastern flank exposed |
| Austrian collapse | Poland | Can claim Galicia, expand south |
| Austrian collapse | Italy/SRI | Can seize South Tyrol, Istria, Trieste |
| Austrian collapse | Ukraine | Galicia question -- Ukrainian populations may seek unification |
| Austria goes NatPop | Germany | REVENGE ON PRUSSIA -- Austria declares war on Germany! |
| Grossdeutsches Reich | Global | Austria claims all German cores, massive Central European war |
| Belgrade Pact wins | Germany | Anti-German bloc in Balkans, Entente may recruit Serbia |
| Romania gets Transylvania | Austria | Empire permanently diminished, cascade toward collapse |
| Byzantium formed | Ottoman/ME | Greece has conquered western Anatolia, Ottoman empire shattered |
| South Slavic Union | Balkans | New major Balkan power, threatens Bulgaria and Austria |
| Bulgarian Khanate | Russia/Ukraine | Bulgaria attacks Don-Kuban, Ukraine, attempts Volga Bulgaria restoration |
| Balkan War | Global | +2 global tension. If expanded, +4 |
| Illyrian Pavelic regime | Balkans | Refugee crisis, partisan war, neighboring states may intervene |

================================================================
================================================================
EASTERN EUROPE — German puppets, captive nations, and a civil war waiting to happen
================================================================

This region covers the belt of states between Germany and Russia: Ukraine,
Poland, Finland, the Baltic Duchy, Lithuania, White Ruthenia (Belarus),
and Galicia. All exist because Germany won WK1 and carved up the east.
When Germany weakens or Russia reunifies, everything here explodes.

--- STARTING STATE (1936) ---

UKRAINE (UKR):
  Government: Kingdom of Ukraine, King Vasyl (Habsburg), Hetman Pavlo Skoropadskyi (PatAut)
  Situation: A constitutional monarchy in name, a military dictatorship in practice.
    King Vasyl ("The Red Prince") is an Austrian-imposed figurehead who genuinely loves
    Ukrainian culture. Real power lies with Hetman Skoropadskyi, a Cossack aristocrat
    who seized power in 1918 with German backing. The Soim (parliament) is toothless.
    Nationalists, republicans, and socialists simmer in exile or underground.
  Alignment: Reichspakt (German economic satellite, breadbasket of Mitteleuropa)
  Key tension: King vs Hetman power struggle triggers political crisis within months

POLAND (POL):
  Government: Regency Kingdom of Poland, Rada Regencyjna (Regency Council)
  Situation: Poland is a German puppet with no real king — the Regency Council rules in
    the name of an absent monarch. Black Monday creates opening for change: who will fill
    the empty throne? A Habsburg? A Hohenzollern? A Piast? Or will revolution sweep it away?
  Alignment: Reichspakt (puppet state, German economic dependency)
  Key tension: The Great Debate — choosing Poland's future monarch and political system

FINLAND (FIN):
  Government: Republic of Finland, Red-Earth coalition government
  Situation: Democratic republic recovering from its own civil war. The Red-Earth
    government (agrarian-socialist coalition) tries to hold the center. Workers want
    socialism, farmers want land reform, the right wing dreams of monarchy or the Lapua
    Movement (Finnish fascism). Germany exerts influence through trade.
  Alignment: Unaligned (leans Reichspakt but independent)
  Key tension: Political coalition fractures — workers vs farmers vs nationalists

BALTIC DUCHY (BAT):
  Government: United Baltic Duchy, Duke Adolf Friedrich I (AuthDem)
  Situation: A bizarre medieval anachronism — German nobles ruling over Latvian and
    Estonian peasants. The Landtag is dominated by four Baltic Knighthoods (noble
    corporations). Paul Schiemann leads liberal reformists who want democracy. The
    Baltic Brotherhood (clandestine pan-Germanic order) wants Teutonic crusade.
    Latvian and Estonian partisans lurk in the forests.
  Alignment: Reichspakt (German puppet, Landeswehr built by von der Goltz)
  Key tension: Schiemann's reforms vs Knighthood reaction vs native uprising

LITHUANIA (LIT):
  Government: Kingdom of Lithuania, King Mindaugas III (German-born monarch)
  Situation: Constitutional monarchy under a German king nobody asked for. Three
    parties compete in the Seimas: LDSP (social democrats), LKDP (Christian democrats),
    LTS (nationalists under Smetona). Black Monday hits hard. Voldemaras and the LAF
    plot a coup. A Polish-Lithuanian Commonwealth is possible if conditions align.
  Alignment: Reichspakt (German sphere, but more autonomous than Baltics)
  Key tension: Seimas elections determine path; Voldemaras coup always possible

WHITE RUTHENIA (WHR):
  Government: Kingdom of White Ruthenia (Belarus), King Uladzimir (German-installed)
  Situation: The weakest of Germany's puppet kingdoms. Belarusian identity barely exists
    as a political force. The population is split between those who accept German
    protection (better than Russian rule) and revolutionaries. If Germany weakens,
    Belarus must choose: stay German, go Russian, or fight for true independence.
  Alignment: Reichspakt (puppet state, most dependent on German support)
  Key tension: German weakness triggers identity crisis — revolution or Russian absorption

GALICIA (GAL):
  Government: Crownland of Galicia-Lodomeria, part of Austrian sphere
  Situation: Austrian territory with Polish majority and Ukrainian minority. Black
    Monday devastates the already impoverished region. Minority unrest, famine
    ("Galicja-Glodomeria"), and dependence on Vienna. If Austria collapses, Galicia
    becomes a prize fought over by Poland, Ukraine, and West Ukraine.
  Alignment: Austrian sphere (part of Cisleithania)
  Key tension: Austrian collapse -> Galicia becomes contested territory

WEST UKRAINE (WSU):
  Government: West Ukrainian People's Republic (in exile / partisan)
  Situation: Ukrainian nationalists in Austrian Galicia who want to unite all Ukrainian
    lands. Led by the UGA (Ukrainian Galician Army). Will fight for Lviv, then either
    unite with Ukraine peacefully (Act of Zluki) or try to conquer Kyiv.
  Alignment: Unaligned (anti-Austrian, pan-Ukrainian)
  Key tension: Austrian collapse -> WSU declares independence and fights for Galicia

External dependencies (ALL countries):
- Black Monday (Germany, ~1936) -> economic crisis hits all Reichspakt members
- German collapse / 2nd Weltkrieg -> puppets suddenly free, must choose new path
- Russian unification -> reunified Russia pushes west, threatens all these states
- Austrian collapse -> Galicia freed, Ukraine's western border contested
- 2nd Weltkrieg -> frontline runs through this entire region

================================================================
UKRAINE (detailed) — civil war, 12+ political paths
================================================================

--- CRISIS: Ukrainian Political Crisis ---

Trigger: King Vasyl opens the Soim, triggering power struggle with Hetman Skoropadskyi
Timing: ~1936-1937
Clock: 0——6 (King's faction vs Hetman's faction)

The crisis has TWO PHASES:

PHASE 1 — KING vs HETMAN (d20):
  1-4:   Hetman consolidates. Dissolves Soim, disarms Sich Streltsy, empowers
         Derzhavna Varta (secret police). Autocracy solidifies.
  5-10:  Stalemate. UPSS gains army influence. Growing unrest.
  11-16: King gains advantage. UPSS takes power. Committee of Three rules.
         Dyrektoria (republican exiles) may return.
  17-20: Anti-Hetman coup. Nationalists or republicans take direct control.

PHASE 2 — RIVNE UPRISING (if UPSS or King's faction wins):
  Dyrektoria attempts uprising from Rivne -> UKRAINIAN CIVIL WAR (super.104).
  OUTBREAK (d20):
    1-5:   Uprising fails. Dyrektoria exiled to WSU/Galicia.
    6-10:  Limited uprising. Contained. Negotiated peace possible.
    11-16: Full civil war. Konovalets counter-coup possible.
    17-20: Total chaos — civil war + Dnieper Dam explosion + Austrian
           intervention + Borotbyst peasant riots.

RESOLUTION (d20, when clock reaches 0 or 6):
  1-3:   Hetman Skoropadskyi wins. PatAut Ukraine under Cossack military rule.
         May restore Russian Empire if Skoropadskyi goes full Russophile.
  4-6:   UPSS wins (Committee of Three). AuthDem/SocCon republic. Multiple
         sub-paths: Bolbochan's military rule, Batkivschyna party, conservative
         monarchy under Vasyl.
  7-9:   Nationalists win (Konovalets/Melnyk/OUN). NatPop Ukraine. Integral
         nationalism, possible "Drang nach Osten" against Poles and Russians.
  10-12: Dyrektoria wins (republicans). All-Ukrainian Constituent Congress held.
         Multiple parties compete: USDRP (social democrats), UPSR (socialist
         revolutionaries), UPSF (social federalists), UKP (Ukapists/Bolsheviks).
  13-15: Petliura coup. AuthDem military strongman seizes power from within the
         republican movement.
  16-18: West Ukraine (WSU) wins. Galician Ukrainians conquer Kyiv, unifying
         Ukraine from the west.
  19-20: Borotbysts win. Left-wing peasant revolution. RadSoc/Totalist Ukraine.

Cascade:
- Nationalists win -> tension with Poland, Galicia, Russia
- Skoropadskyi restores Russia -> Ukraine becomes Russia. Massive cascade.
- Republicans win -> may ally Kerensky or Internationale
- Dnieper Dam explodes -> Austria intervenes, Galicia destabilized
- Civil war weakens Ukraine -> Russia/Poland may seize territory

--- PATHS (post-crisis, UKRAINE) ---

HETMAN PATH (Skoropadskyi wins):
  GOVERNANCE (d20):
    1-7:   Pavlo rules. Cossack autocracy. Can restore Russian Empire.
    8-12:  Danylo inherits. Son as puppet king, father rules behind throne.
    13-16: Doroshenko moderates. SocLib constitutional monarchy.
    17-20: Lypynskyi's classocracy. AuthDem/SocCon hetman tradition.
  Note: 2nd-term elections create further branching (UMP/USKhD/UPSF(M)/SHD).

UPSS PATH (Committee of Three):
  GOVERNANCE (d20):
    1-7:   Bolbochan's military cabinet. AuthDem, army-backed. May resign.
    8-12:  Batkivschyna (Hrekiv). Military-nationalist, Cossackisation.
    13-16: Conservative monarchy. Vasyl kept under UPSS guidance. SocCon.
    17-20: Ukrainian Socialism. UPSS left wing. Agrarian socialism.

NATIONALIST PATH (OUN/Konovalets wins):
  GOVERNANCE (d20):
    1-8:   Konovalets leads. Integral nationalism, militarization, Sich Streltsy.
    9-14:  Konovalets assassinated -> Melnyk takes over. Solidarism, Cult of Konovalets.
    15-18: Dontsov faction. Extreme integral nationalism. "Ukraine for Ukrainians."
    19-20: Germanization. Ukraine becomes Germanic crusader state (extreme NatPop).

DYREKTORIA PATH (Republicans win):
  All-Ukrainian Constituent Congress held. Parties compete:
  GOVERNANCE (d20):
    1-5:   USDRP wins (Social Democrats). Democratic socialism, welfare state.
    6-9:   UPSR wins (Socialist Revolutionaries). Land socialization, peasant
           communes. Can unite with Borotbysts.
    10-13: UPSF wins (Social Federalists). Liberal federalism. Free trade.
           Can ally Kerensky's Russia if he's in power.
    14-16: Petliura takes over. AuthDem military republic. Smashes old
           bureaucracy, builds nationalist army.
    17-18: UKP wins (Ukapists). Bolshevik Ukraine. Skrypnyk's path — national
           communism, not Russian-style.
    19-20: Borotbysts seize congress. RadSoc/Totalist peasant revolution.

SPECIAL — DNIEPER DAM EXPLOSION:
  Skoropadskyi's Russophile plot exposed OR nationalist sabotage -> dam explodes.
  Massive infrastructure damage. Austrian intervention possible (UKR_AUS_enemies).

SPECIAL — RESTORE RUSSIAN EMPIRE:
  Skoropadskyi "Hetman in His Own Right" -> Russophile path -> allies ROVS (White
  officers) -> restores Russian Empire from Ukraine. One of Russia's ~45 unifiers.

================================================================
POLAND (detailed)
================================================================

--- CRISIS: The Great Debate ---

Trigger: Black Monday + empty throne forces Poland to choose its future
Timing: ~1936-1938
Clock: 0——6 (reaction vs revolution)

Poland's crisis is political, not military (unless revolution wins):

THE GREAT DEBATE — WHO RULES POLAND? (d20):
  1-4:   Von Hohenzollern. German prince takes throne. Poland stays firmly in
         Reichspakt. German advisors, war games, economic bloc membership.
         Most stable but least independent option.
  5-8:   Von Habsburg. Austrian prince. Poland reclaims Galicia, rebuilds
         Krakow. Lessons of the Empire — multi-ethnic tolerance or centralization.
  9-12:  Polish King (Piast dynasty). Native monarchy. New constitution, line
         of succession, "the people's king." Absolutism vs reform the monarchy.
  13-15: Mendog III (Lithuanian option). Minority rights, Vilnius Accord,
         reincorporation of Lithuania -> Polish-Lithuanian Commonwealth.
  16-18: A New Poland (democratic republic). Free elections, economic reform,
         suffrage, golden liberty. Cleanse monarchists from government.
  19-20: Victory of the People (socialist revolution). Redistributed wealth,
         empowered gminy (communes). Three sub-paths:
         - Lampe's reforms (Syndie): trade union socialism
         - Warski's broad socialism (RadSoc): council communism
         - Leszczynski's true Leninism (Totalist): vanguard party

REVOLUTION PATH (Victory of the People):
  Poland leaves Reichspakt. Civil war possible if Austria hasn't collapsed.
  GOVERNANCE (d20):
    1-7:   Lampe's Syndicalism. New communes, join Internationale.
    8-14:  Warski's RadSoc. Polish exceptionalism, independent socialist path.
    15-18: Leszczynski's Totalism. Security state, spread the revolution.
    19-20: A Firm Hand. NatPop/PatAut strongman. Fortress Poland.

COMMONWEALTH PATH (Mendog III + Lithuania agrees):
  PLC formed (own focus tree): Poland First vs Lithuania First vs Balance
  Sub-choice: Centralizing power vs federalism (A Smaller Circle)

Cascade:
- If Commonwealth forms -> Lithuania absorbed, Baltic power shift
- If revolution -> Poland joins Internationale, threatens Germany from east
- If Hohenzollern -> Germany strengthened, but Polish resentment grows
- If Habsburg -> Austria gains ally, complicates Austrian collapse
- Ukrainian Alliance focus: revolutionary Poland can ally Ukrainian republicans

================================================================
FINLAND — See SCANDINAVIA region for full detail (crisis, paths, NPCs).
Finland's Eastern European connections: Russian expansion threatens Finnish
independence. German collapse frees Finland from Reichspakt obligations.
Ukrainian/Baltic events do not directly cascade into Finland.

================================================================
BALTIC DUCHY (detailed)
================================================================

--- CRISIS: Reform or Reaction ---

Trigger: Paul Schiemann's liberal reforms clash with the Knighthoods
Timing: ~1936-1938
Clock: 0——6 (reform vs reaction)

POLITICAL CRISIS (d20):
  1-5:   Schiemann's reforms succeed. SocLib Baltic Federation. Constitutional
         draft, land reform, native Balts gain rights.
  6-9:   Conservative reaction. Knighthoods reassert control (PatAut).
         Devolution — provincial autonomy under noble rule.
  10-13: Riga Republic. Native uprising succeeds. Three sub-paths:
         SocLib (Schiemann's legacy) / SocCon (Germanic outpost) / PatAut (Rechtsstaat)
  14-17: Baltic Brotherhood (NatPop). Permanent regency, suspend Landtag.
         Pan-Germanic crusader state. Drang nach Osten — eastern crusade.
         If fully germanized: found own faction, crusade against syndicalists AND Russia.
  18-20: Baltic Union (socialist revolution). "Three Sisters" republic.
         Totalist (Peterss) / Syndicalist (Morics) / RadSoc (Rudevics)

NATIVE UPRISING (can trigger during any path):
  Estonian/Latvian partisans may launch independence wars if Duchy weakened.
  Estonia (EST) and Latvia (LAT) each have own small post-independence focus trees.

Cascade:
- Schiemann succeeds -> stable liberal buffer, Germany approves
- Brotherhood NatPop -> Germany loses control, expansionist crusader state
- Baltic Union socialist -> joins Internationale
- Natives revolt -> Estonia/Latvia independent, German east weakened

================================================================
LITHUANIA, WHITE RUTHENIA, GALICIA (grouped)
================================================================

--- LITHUANIA ---

Government: Kingdom, King Mindaugas III (German-born), constitutional monarchy
Political parties compete in Seimas elections:

SEIMAS ELECTIONS (d20):
  1-5:   LDSP wins (Social Democrats). Steponas Kairys leads. Unemployment
         benefits, nationalise construction, social economy. Long road to
         pluralism — cultural autonomies, ban nationalist union, legalise
         the Ausrine (socialist paper). Can reach "Court and Country" —
         break from German orbit.
  6-10:  LKDP wins (Christian Democrats). Stasys Salkauskis leads. Renovate
         Kaunas, economic devolution, Bialystok development. "Optimal System"
         — political/economic/cultural democracy. Three-house Seimas.
         Federal representatives. "A Dream Made Manifest."
  11-15: LTS wins (Nationalist Union). Antanas Smetona leads. Reinforce
         police, bureaucratic reforms, statist economy, corporate state.
         "Towards a Unitary State" — authoritarian nationalism.
  16-18: Voldemaras Coup. Augustinas Voldemaras and the LAF (Lithuanian
         Activist Front) seize power in Vilnius. NatPop military dictatorship.
         Aftermath of the coup, uprising army.
  19-20: Russophile coup attempt. Pro-Russian faction tries to realign
         Lithuania toward Moscow. Sets global flag LIT_russophile_coup.

COMMONWEALTH (if Poland chooses Mendog III):
  Lithuania can be reincorporated into Polish-Lithuanian Commonwealth.
  See Poland section above. Lithuania loses independence but gains power
  through union.

Cascade:
- If LDSP -> may break from Reichspakt, lean toward Internationale
- If Voldemaras coup -> aggressive nationalism, claims on neighbors
- If Commonwealth -> Poland+Lithuania merge, major regional power
- Russian unification -> Lithuania threatened

--- WHITE RUTHENIA (BELARUS) ---

Government: Kingdom, King Uladzimir (German-installed monarch)
First decision: stay with Germany or seek independence?

FOREIGN POLICY (d20):
  1-7:   Stay with Germany. Equal Reichspakt membership. Seek to become
         equal partner rather than puppet. Entice German investors,
         consolidate state assets.
  8-13:  Secede from Reichspakt. Will lead to war with Germany unless
         Germany is distracted. Assert independence.
  14-17: Russian sphere. Secret pact with Russia. Become Russian satellite
         instead of German one. "Nachalnik Dzyerzhavy" path — nationalism
         under Moscow. Cooperate with ZD, foothold for Russian army.
  18-20: Revolution! If revolution flag triggers, three socialist paths:
         - Anarchist (Black Banner): Kropotkin-inspired, paint red cross
           black, cooperate with Ukrainian/Georgian brothers, dethroning
           false idols, groups of revolutionary actives
         - BPSR (Belarusian SR): Syndicalism, empower unions, establish
           regional land fund. Can become "Belarus Soviet Socialist"
         - Bolshevik (BRA): Land confiscation, vanguard party, integration
           with broader communist movement

Also possible: German military intervention, or re-puppeting after failed revolt.

RIGHT-WING PATHS (if revolution fails):
  - BNP: Nationalist education, anti-Russian propaganda, "Kryvian concept"
    (ancient Belarusian identity predating Russian influence). Proclaim Kryvia.
  - Countercoup: Purge Rada, "Nation above class," expropriate landlords.
  - "Rise of Kryvia" — NatPop Belarusian ultra-nationalism

Cascade:
- Stays German -> stable buffer. Revolution -> Internationale or Russian satellite.
- Russia takes over -> Belarus ceases to exist. Kryvia NatPop -> anti-everyone.

--- GALICIA ---

Government: Austrian crownland under Habsburg administration
Not an independent country in 1936. Becomes relevant when:

AUSTRIAN COLLAPSE (d20):
  1-7:   Galicia joins Poland. Standard outcome. Poland gains cores on
         Galician territories. Romania may claim Bukovina (gal.3).
  8-12:  Galicia stays independent. Special elections held. Severe economic
         crisis ("Golicja-Glodomeria"). Must calm minorities, call on
         gentry, contact Vienna for help. Trust the market vs sell oil.
  13-16: West Ukraine claims Galicia. WSU declares independence, fights
         for Lviv. Ukrainian-majority areas revolt.
  17-20: Ukraine claims Galicia. UKR focus "Settle the Austrian Issues"
         — Hetmanate or nationalist Ukraine annexes Galicia.

Cascade:
- If Poland gets Galicia -> Poland significantly strengthened
- If WSU gets Galicia -> unified western Ukrainian state, threatens UKR
- If Ukraine gets Galicia -> Hetmanate at full territorial extent

================================================================
KEY NPCs
================================================================

--- UKRAINE ---

Vasyl Vyshyvanyi (King Vasyl) — King of Ukraine. Habsburg "Red Prince" who
  genuinely adopted Ukrainian culture. Figurehead struggling against the Hetman.
  If in power: Reformist constitutional monarchy, balances factions

Pavlo Skoropadskyi — Hetman. Cossack aristocrat, former Tsarist officer. Seized
  power in 1918 with German help. Anti-socialist, distrustful. Can restore Russia.
  If in power: Military autocracy. May restore Russian Empire (Ukraine becomes Russia).

Yevhen Konovalets — Leader of UVO. Lifelong Galician nationalist, Sich Streltsy
  commander. Created UVO with Melnyk and Dontsov. May be assassinated.
  If in power: Integral nationalism, "10 Commandments of UNP."

Andriy Melnyk — Konovalets' successor. More organized. Solidarism ideology.
  If in power: Cult of Konovalets, structured nationalist state.

Vyacheslav Lypynskyi — Ideologue of "classocracy." USKhD leader. Critic of both
  Skoropadskyi's autocracy and Dontsov's radicalism.
  If in power: Conservative-democratic hetman governance tradition.

Petro Bolbochan — Military strongman, UPSS. Commander of 1st Cossack regiment.
  If in power: AuthDem military government. May resign (Shapoval replaces).

Symon Petliura — Dyrektoria leader (republican exile). Military strongman.
  If in power: AuthDem military republic, anti-Hetman, anti-German.

Danylo Skoropadskyi — Pavlo's son. Puppet king, father rules through him.

--- POLAND ---

Rada Regencyjna — Regency Council, collective placeholder rulers.
Roman Dmowski — NatPop. "A Firm Hand" — militarism, fortress Poland.

--- BALTIC DUCHY ---

Duke Adolf Friedrich I — Prussian nobleman, ex-Governor of Togoland, car racer.
  Passive monarch who knows reform is needed. Best racecar driver in the Duchy.

Paul Schiemann — Liberal visionary, non-noble (can't hold office). Envisions
  pluralistic Baltic Federation. Sickly, elderly, determined. Dies eventually.

Rudiger von der Goltz — Landeswehr commander. Built Baltic army. Was briefly
  dictator of Finland in 1918. No patience for democracy.

Hans von Manteuffel-Szoege — Baltic Brotherhood war hero. Pan-Germanic crusader.
  "Legacy of Teutonic knighthood." Reckless frontline commander.

--- LITHUANIA ---

Mindaugas III — German-born king nobody asked for. Constitutional monarch.
Antanas Smetona — LTS leader. AuthDem. Centralized state, corporate governance.
Augustinas Voldemaras — LAF NatPop. Coup plotter. Military dictatorship.

--- WHITE RUTHENIA ---

Uladzimir — German-installed king. Figurehead.
Vaclaw Lastowski — NatPop. "Kryvia" — ancient Belarusian identity, anti-Russian.

--- FINLAND ---

Vihtori Kosola — Lapua Movement leader. Sinimustat (Blackshirts). Finnish fascism.
Carl Gustaf Mannerheim — Finland's best general regardless of political path.

================================================================
REGIONAL FLAVOR
================================================================

Atmosphere: Flat wheat-fields under grey skies, muddy roads between villages.
  Church bells and factory whistles. Black bread and machine oil. Posters in
  three languages nobody reads.
Technology: Leftover WK1 equipment — Mausers, Austrian artillery. Ukraine has
  armored trains. Baltic Landeswehr has German-standard gear. Finland has ski
  troops. Poland has cavalry traditions needing modernization.
Civilian life: Peasants work landlord estates they don't own. Workers organize
  in secret. German is the language of commerce; national languages spoken at
  home and in underground newspapers. Everyone fears the next war.

================================================================
CASCADE TABLE
================================================================

Events HERE that affect OTHER regions:

| Event | Affects | Effect |
|-------|---------|--------|
| Ukrainian civil war | Russia, Austria, Germany | Weakened UKR = easier Russian reconquest; Dnieper explosion -> Austrian intervention; breadbasket disrupted |
| Skoropadskyi restores Russia | Russia | Ukraine becomes Russian unifier (1 of ~45 paths) |
| Poland revolution | Germany, France/3I | Reichspakt loses member; Internationale gains eastern ally |
| Polish-Lith Commonwealth | Lithuania, Baltics | Lithuania absorbed; Baltics lose buffer |
| Baltic Brotherhood NatPop | Germany | Germany loses puppet, gains rival |
| Finland Lapua NatPop | Scandinavia, Baltics, Russia | Irredentist claims on Estonia, Karelia, Scandinavia |
| Finland socialist | Scandinavia | Red Finland threatens Sweden/Norway |
| WHR revolution | Russia, Germany | Russia may puppet; Germany may intervene |
| German collapse | ALL | Every puppet freed simultaneously |
| Russian unification | ALL | Reunified Russia pushes west |
| Austrian collapse | Galicia, Poland, Ukraine | Galicia freed, fought over by POL/UKR/WSU |

================================================================
================================================================
GERMANY (Deutsches Kaiserreich) — The global hegemon cracking under its own weight
================================================================

--- STARTING STATE (1936) ---

Government: Constitutional Monarchy, Kaiser Wilhelm II. Reichskanzler Kuno
  von Westarp (AuthDem, DkP-Zentrum coalition). Reichstag has limited power;
  Kaiser appoints the chancellor. The OHL military dictatorship under
  Hindenburg and Ludendorff ended years ago, but the army remains a "state
  within a state" — General Kurt von Schleicher manipulates things from the
  shadows.
Situation: Germany won the Weltkrieg (1914-1921), broke France and Britain
  to revolution, carved out a world empire. But victory bred complacency.
  The economy runs on wartime spoils and colonial extraction through the
  Mitteleuropa bloc. The Reichstag is a powderkeg of competing parties
  barely held together. Then Black Monday hits — the Berlin stock exchange
  collapses, shattering the illusion of prosperity. Veterans march in the
  streets, paramilitaries brawl, the DkP splinters, and Kaiser Wilhelm is
  forced to call early elections. Everything is in play.
Alignment: Reichspakt (leader)
Key tension: Black Monday elections (1936) — who wins the Reichstag? The
  answer reshapes Germany's politics, economy, and posture toward the
  coming war with the Commune of France.

External dependencies:
- Commune of France / UoB -> existential military threat on the Rhine
- Russia (any form) -> threat from the East, may attack Reichspakt allies
- Mittelafrika collapse -> loss of colonial resources and prestige
- Austria-Hungary -> potential ally or rival; Kaisergipfel possible post-war
- 2nd American Civil War -> Germany can form the Steuben Brigade for allies
- Japan -> may contest German East Asia (AOG)

--- FACTIONS (political parties and power blocs) ---

Note: Germany does not have civil war factions. Instead, it has PARTY BLOCS
that contest the 1936 election. The winning party determines the Reichskanzler,
who then shapes Germany's trajectory. Schleicher can override ANY election result
if the Kaiser loses confidence.

DkP (AuthDem): German Conservatives. Westarp, Schlange-Schoningen,
  Lettow-Vorbeck, Richthofen. Strong — Junker estates, Prussian army, status quo.

DVLP (PatAut): Fatherland Party. Alfred Hugenberg. Medium — media empire,
  Stahlhelm veterans. Return to Ludendorff-era autocracy, corporatist state.

ZENTRUM (SocCon): Centre Party. Erzberger/Bruening, Papen, Kaas/Adenauer.
  Strong — Catholic base, cross-class. Christian corporatism, moderate reform.

NLP (MarLib): National Liberals. Stresemann, Weber. Medium — industrialists,
  Mittelstand. Free markets, democratic reform within the monarchy.

FVP (SocLib): Progressives. Thomas Mann, Rathenau, Meinecke. Weak-Medium —
  intellectuals, civil service. Liberal democracy, cultural renaissance.

SPD (SocDem): Social Democrats. Lensch, Wels, Noske. Medium — workers, trade
  unions. Social reform within Empire; must purge French-aligned infiltrators.

SCHLEICHER BLOC (PatAut): Military shadow government. Schleicher + Crown
  Prince Wilhelm. Strong — Abwehr, army networks. Can override ANY election.

MOELLER/NATPOP (NatPop): Young Conservatives. Moeller van den Bruck. Weak —
  fringe theorists. Third Empire mysticism. Only via Schleicher's patronage.

--- CRISIS: BLACK MONDAY (1936) ---

Trigger: Berlin stock exchange collapses (scripted, fires early 1936)
Timing: ~1936
Clock: N/A (this is an economic/political crisis, not a military conflict)

Sequence: Black Monday -> veterans march -> paramilitary street fighting ->
  DkP infighting -> Kaiser considers early elections -> 1936 election

The election event chain fires automatically. The GM should present it as a
cascading political crisis: economic collapse, street violence, Kaiser forced
to act. Then roll for the election outcome.

1936 ELECTION (d20):
   1-3:  SPD victory — workers' mandate. Lensch, Wels, or Noske becomes
         chancellor. Social reform, anti-Internationale purge.
   4-6:  FVP victory — progressive upset. Thomas Mann, Rathenau, or Meinecke
         becomes chancellor. Liberal democratization of the Empire.
   7-10: NLP victory — industrialists prevail. Stresemann or Weber becomes
         chancellor. Free market reform, economic modernization.
  11-14: Zentrum victory — Catholic center holds. Erzberger/Bruening (reformist),
         Papen (aristocratic), or Kaas/Adenauer (Catholic action) takes charge.
  15-17: DkP maintains majority — Westarp stays, or Schlange-Schoningen,
         Lettow-Vorbeck, or Richthofen appointed. Conservative continuity.
  18-19: DVLP returns — Hugenberg seizes the moment. Autocratic corporatism,
         media monopoly, Stahlhelm mobilization.
     20: Schleicher overrides — Kaiser loses faith in the winner, appoints
         Schleicher directly. Military shadow government takes over.

Note: Schleicher can ALSO be appointed after any result (1-19) if the GM
decides the Kaiser loses confidence. Treat roll of 20 as automatic; otherwise
require narrative justification.

POST-ELECTION PATHS:

Each chancellor has a unique governance tree with 3-5 decisions before the
2nd Weltkrieg. The key branching choices:

SCHLEICHER PATH (PatAut/NatPop):
  - Cross-Front with radical groups, "Army with a State" militarization
  - Secure Crown Prince Wilhelm's support -> "Hidden King" court politics
  - Bredow's intelligence apparatus (Abwehr expansion)
  - Can transition to Moeller van den Bruck (NatPop) through Young Conservatism
  - Hugenberg can be appointed as sub-path (DVLP corporatist autocracy)

CONSERVATIVE PATHS (AuthDem):
  - Westarp: Prussian constitutionalism, Kreuzzeitung media, Landwirte support
  - Lettow-Vorbeck/Richthofen: War hero celebrity governance, colonial emphasis,
    militaristic patriotism, "The Soldier as Model for Humanity"
  - Schlange-Schoningen: Agrarian reform, moderate conservative, Landvolk outreach

ZENTRUM PATHS (SocCon):
  - Erzberger/Bruening: Christian corporatism, Catholic unions vs SPD, tax reform
  - Papen: "Gentleman Chancellor," aristocratic Catholic, Adel Verpflichtet
  - Kaas/Adenauer: Catholic Action, social market model, resist Prussianist dogma

LIBERAL PATHS (MarLib/SocLib):
  - Stresemann (MarLib): "Democracy Sweeps the Empire," national-liberal accord
  - Weber (MarLib): Economic rationalization, industrial modernization
  - Mann (SocLib): "Triumph of Culture Against Civilization," slow democratization
  - Rathenau (SocLib): Bureaucratic reform, technocratic efficiency
  - Meinecke (SocLib): Nationalist-liberal synthesis, cultural nationalism

SPD PATH (SocDem):
  - Lensch: Pro-national socialism, anti-Internationale, awakening the proletariat
  - Wels: Moderate reformism, international SPD outreach, Vereinigte SPD ideal
  - Noske: Right-wing SPD, maintains military ties, action over theory

--- CRISIS: 2ND WELTKRIEG ---

Trigger: Commune of France declares war on Germany (or Germany issues ultimatum
  to France over intervention in Spain/other flashpoint). Fires when
  GER has_war_with FRA. Global super-event.
Timing: ~1939-1941
Clock: 0——6 (France/Internationale -> 0, Germany/Reichspakt -> 6)
  Start at 3. +-1/chapter, accelerating.

Sides:
- REICHSPAKT: Germany, Mitteleuropa vassals (Poland, Ukraine, Baltic states,
  Belarus), plus potential Austria, Two Sicilies, Ottoman Empire
- INTERNATIONALE: Commune of France, Union of Britain, Socialist Italy (SRI),
  potential Spain (CNT-FAI)
- ENTENTE (wild card): Canada, National France, Australasia. May join against
  the Internationale independently, or coordinate with Reichspakt (Halifax
  Conference determines this)
- RUSSIA (wild card): May attack from the East, opening a two-front war

OUTBREAK (d20):
   1-5:  Contained conflict — border skirmishes, Ludendorff Line holds. Clock
         stays at 3-4. Limited mobilization.
   6-12: Full war — standard Weltkrieg. Both sides mobilize fully.
         Clock starts at 3.
  13-17: Expanded war — Russia attacks from the East simultaneously.
         Two-front war. Clock starts at 2.
  18-20: Total war — Internationale + Russia + additional powers. Entente
         also invades independently. Three-way chaos. Clock starts at 1.

RESOLUTION (d20, rolled when clock hits 0 or 6):
   1-4:  FALL OF GERMANY (clock hit 0) — Berlin falls. Super-event super.15.
         Germany ceases to exist. Government flees to colonies (Germany in
         Exile — GEX). Commune of France occupies the Rhineland and beyond
         (super.19 — Communard Victory). Reichspakt dissolves.
   5-8:  German defeat — territorial losses, Internationale puppet state in
         western Germany, but Germany survives diminished. No exile.
   9-12: Stalemate / white peace — exhaustion on both sides. Status quo ante
         bellum with adjustments. Both sides weakened.
  13-16: German victory — France defeated, Commune collapses. Germany occupies
         France as puppet (FRP). Britain may also fall. Post-2WK tree unlocks.
  17-20: Total German victory — Commune destroyed, Britain liberated, Russian
         threat repulsed. Germany enters triumphant post-war era. Kaisergipfel
         (summit with Austria) and Pan-Europa become possible.

Cascade:
- If Germany wins -> France: Chained France / Elysee Treaty / occupation paths
- If Germany wins -> Britain: Loyal puppet, restore monarchy, or harsh occupation
- If Germany wins -> Russia: Puppet government, Teutonic Order expansion east
- If Germany falls -> Global: Reichspakt collapses, Mittelafrika orphaned,
  AOG abandoned, Austria isolated, world order shattered
- If Germany falls -> GEX: Government flees to Mittelafrika, German East Asia,
  or other colony. Can attempt reconquest.
- Tension: +3 global for total victory either side; +1 for stalemate

--- PATHS (post-2nd Weltkrieg victory) ---

POST-2WK FOREIGN POLICY (requires GER_2WK_Victory flag):

KAISERGIPFEL (d20 or player choice, requires Habsburg Austria surviving):
   1-7:  Zollverein path — economic union, shared currency (Euromark)
   8-14: Pan-Europa — Charlemagne's Dream, Imperial Federation superstate
  15-20: Grossdeutschland — Years of Two Emperors, unified German megastate

DEFEATED NATIONS MANAGEMENT:
  France: Chained France (harsh occupation) vs Elysee Treaty (lenient puppet)
    vs New Belle Epoque (cultural rehabilitation)
  Britain: Strafing Albion (punitive) vs Britannia and Germania Forever
    (partnership) vs Witenagemot (self-governing restoration)
  Russia: Provisional puppet vs Old Throne Refurbished (restore Tsar)
    vs Petrovian Revolution (modernize puppet state)

ENDGAME (if all succeed): Imperial Federation — Globe of Guns and Gears,
  Lingua Germanica, Weltkaiser/Weltmeister. Pan-European superstate.

--- KEY NPCs ---

Kaiser Wilhelm II — Head of state. Aging victor of the Weltkrieg who watched
  the OHL steal his thunder. Plays factions against each other. Calls the 1936
  election. Can empower or resist Schleicher.

Crown Prince Wilhelm (future Wilhelm III) — War hero, Schleicher's ally, visits
  paramilitaries. "Insatiable war hound." Succeeds as Kaiser. Aggressive,
  expansionist, hungry for a Third Empire of glory.

Kurt von Schleicher — "The slither in the dark." Abwehr spymaster, army
  puppet-master. Can override any election. Cross-Front strategy. The most
  dangerous man in Germany because he serves no ideology but power.

Alfred Hugenberg — Media magnate, DVLP leader. Press empire + Stahlhelm
  veterans. Wants Ludendorff-era autocracy under corporate control.

Kuno von Westarp — Incumbent chancellor. Decent, overwhelmed. "Couldn't have
  picked a worse time to become a bickering henhouse."

Paul von Lettow-Vorbeck — "The Lion of Africa." Legendary colonial general.
  War hero chancellor, colonial emphasis, militaristic patriotism.

Manfred von Richthofen — The Red Baron. Fighter ace turned politician.
  Alternative celebrity chancellor to Lettow-Vorbeck.

Gustav Stresemann — NLP. Pragmatic national-liberal. "Democracy Sweeps the
  Empire." Free market reform within the monarchy.

Konrad Adenauer — Zentrum reformer. Catholic Social Market Model. Resists
  Prussian dogma. Progressive conservative.

Thomas Mann — The novelist as chancellor. "Triumph of Culture Against
  Civilization." Gentle democratization, liberal cultural renaissance.

Moeller van den Bruck — NatPop theorist. "Conservative Revolution." Third
  Empire mysticism. Accessible only through Schleicher's patronage.

--- MITTELEUROPA & COLONIES ---

MITTELEUROPA: Germany's economic bloc (Poland, Ukraine, Belarus, Baltics,
  Finland, Flanders-Wallonia, Netherlands, potentially Austria).
  Key choice: Fatherland Guides (tight control) vs Let Birds Go Free (autonomy).
  Then: Europa der Nationen (equal partners) vs All Roads Lead to Berlin
  (German supremacy). Strength tracked as variable; Black Monday weakens it.

MITTELAFRIKA: African colonial megastate. Connects to Africa region. Collapse
  costs Germany resources and prestige. See Africa region file.
GERMAN EAST ASIA (AOG): Economic concessions in China. Contested by Japan
  and Chinese unifiers. See China/Japan region files.

--- REGIONAL FLAVOR ---

Atmosphere: Zeppelin shadows over Berlin's neoclassical avenues. The hum of
  Siemens dynamos and Krupp foundries. Smell of coal smoke and cheap
  ersatz-coffee in overcrowded tenements after Black Monday. Veterans in
  threadbare feldgrau begging on Unter den Linden while the Kaiserpalast
  glitters above.
Technology: Heavy industry, chemistry, artillery. Tanks (Katzchen light,
  Stahl medium), Zeppelins, early jets (von Ohain), rockets (von Braun).
  Hochseeflotte — world's mightiest surface navy. Nuclear program (Heisenberg,
  Hahn, Planck). Ludendorff Line fortifies the Rhine against France.
Civilian life: Black Monday shattered the illusion of prosperity. Halbstarke
  youth gangs, Junker estates squeezing farmers, crushed 1918 uprisings still
  remembered. Everyone knows another war is coming.

--- CASCADE TABLE ---

Events HERE that affect OTHER regions:

| Event | Affects | Effect |
|-------|---------|--------|
| Black Monday | Global | Economic shockwave — deepens US depression, destabilizes Mittelafrika, strains Mitteleuropa partners |
| 2nd Weltkrieg begins | France, Britain, Italy | Full mobilization of the Internationale. Super-event fires globally |
| Germany wins 2WK | France, Britain | Commune/UoB destroyed, puppet states installed |
| Germany wins 2WK | Global | Reichspakt hegemony confirmed, Tension -2 global |
| Germany falls (super.15) | Global | Reichspakt collapses, world order shattered, Tension +3 |
| Germany falls | Africa, E.Asia, E.Europe | Colonies orphaned, allies lose protector, Russia advances |
| Communard Victory (super.19) | Europe | France controls Rhine, revolution spreads continent-wide |
| Halifax Conference (success) | Canada/Entente | Entente coordinates with Reichspakt against Internationale |
| Halifax Conference (failure) | Canada/Entente | Entente acts independently, possible three-way war |
| Kaisergipfel (post-war) | Austria | Dual monarchy integration, potential Grossdeutschland |
| Ostpolitik tree | Eastern Europe | Germany bolsters eastern allies, builds fortifications vs Russia |
| Steuben Brigade | USA | Germany intervenes in 2nd American Civil War on chosen side |
| Condor Legion | Spain | Germany intervenes in Spanish Civil War |

================================================================
================================================================
THIRD INTERNATIONALE — Syndicalist heartland, revolutionary war machine
================================================================

--- STARTING STATE (1936) ---

COMMUNE OF FRANCE (FRA):
  Government: Syndicalist federation, Chairman Louis Niel (caretaker)
  Situation: Won the French Revolution 1919-20, exiled old regime to Algeria.
    Heart of global syndicalism — four factions fighting over what revolution means.
    Military still has old-guard officers like Gamelin who never fully bought in.
  Alignment: Third Internationale (leader)
  Key tension: 1936 Communal Elections decide the faction. War with Germany after June 1939.
  Starting ideas: Exact Vengeance (revanchism), Gamelin as Chief of Staff

UNION OF BRITAIN (ENG):
  Government: Syndicalist republic, Chairman Philip Snowden (retiring)
  Situation: British Revolution of 1925 overthrew monarchy. King and establishment fled
    to Canada. TUC (Trade Union Congress) governs. Snowden stepping down — TUC Congress
    picks replacement. Three currents: Maximists (Mosley), Federationists, Autonomists.
  Alignment: Third Internationale
  Key tension: TUC Congress (early 1936) decides Britain's political path.

External dependencies:
- 2nd Weltkrieg (GER vs FRA) -> Britain joins as Internationale ally
- Entente declares war (super.9) -> Canada invades Britain mid-war
- 2nd American Civil War -> CSA victory strengthens Internationale globally

--- COMMUNE OF FRANCE: FACTIONS ---

TRAVAILLEURS (Orthodox Syndicalists): Syndicalist ideology.
  Leaders: Boris Souvarine/Marceau Pivert (HoG), Leon Jouhaux/Benoit Frachon (Chair)
  Keep elections. Trade union democracy. Orthodox syndicalist economics.

JACOBINS (Authoritarian Communists): Totalist (Jacobin subtype).
  Leaders: Marcel Cachin/Jacques Duclos, then Maurice Thorez as Chairman.
  Abolish elections. Centralized Leninist state. Risk Gamelin coup.

SORELIANS (National Syndicalists): Totalist (Sorelian subtype).
  Leaders: Georges Valois (Chair), Marcel Bucard/Jacques Arthuys (HoG).
  Abolish elections. Corporatist economy. Nationalist militarism — closer to fascism.

ANARCHISTES (Libertarian Socialists): Radical Socialist.
  Leaders: Daniel Guerin/Sebastien Faure as Chairman.
  Keep elections. Cooperatives. Decentralize everything. Most democratic path.

NO MAJORITY: Syndicalist big-tent coalition.
  Leader: Missak Manouchian (Chair), Leon Blum (HoG). Most moderate path.

--- CRISIS: 1936 COMMUNAL ELECTIONS ---

Trigger: ~15 days in (comfrance.5). CGT Congress holds 5 voting rounds:
  Military chief, Intelligence head, Foreign minister, Economy, Foreign policy.
  Each round: 4 options (one per faction). Most picks wins.

ELECTION RESULT (d20):
  1-6:   Travailleurs win — orthodox syndicalism continues
  7-10:  Jacobins win — Thorez takes over. Elections abolished. Gamelin coup possible.
  11-14: Sorelians win — Valois. National syndicalism. Most militarist.
  15-18: Anarchistes win — Guerin/Faure. Decentralization, keep elections.
  19-20: No majority — Manouchian compromise coalition.

--- CRISIS: GAMELIN COUP (super.20) ---

Trigger: Jacobin path only. Jacobins target Gamelin personally (~1937-38).
  Trial chain (comfrance.133-139): if they try to execute Gamelin, he strikes first.

Gamelin succeeds: Kills all Jacobin leaders (Thorez, Cachin, Duclos — all dead).
  Destroys factories, -20k manpower. Commune shifts to PatAut military government.
  "Gamelin Saves the Commune" — question: stabilize under military or restore democracy?

Gamelin fails: Jacobins crush coup. Gamelin executed. Lose best defensive general
  (skill 4, defense 5). Jacobin rule hardens.

--- CRISIS: 2ND WELTKRIEG (super.1) ---

Trigger: Focus "Demand Alsace-Lorraine" (available after June 1939).
  Germany refuses -> war. Always happens. Question is WHEN and WHO WINS.
Sides: Internationale (FRA+ENG) vs Reichspakt (GER+allies). Entente piles on later.

Post-Alsace focuses unlock wars with Netherlands, Austria-Hungary, Spain.

RESOLUTION: Use the CANONICAL 2nd Weltkrieg resolution table in the GERMANY
region (single table prevents contradictory probabilities). Results 1-4 = Fall
of Germany / super.15. Results 13-16 = German victory / Commune collapses.

Post-victory foreign policy (three mutually exclusive):
- World Revolution: global syndicalist crusade (Totalist/Syndicalist/RadSoc)
- European Revolution: war with Balkans, Poland, Ukraine (Totalist/Syndicalist/SocDem)
- Peaceful Revolution: consolidate, diplomacy (any left government)

--- UNION OF BRITAIN: TUC CONGRESS ---

Trigger: Focus ENG_tuc -> event uob.1. Three faction counters accumulate votes.

TUC RESULT (d20):
  1-5:   Maximist Victory — Mosley. Totalist. Eric Blair as HoG.
  6-10:  Federationist Victory — Annie Kenney (feminist syndicalist) or Arthur Horner.
  11-15: Autonomist Victory — Niclas y Glais. Radical socialist devolution.
  16-20: No Majority — Tom Mann compromise. Mosley gets HoG (dangerous).

MOSLEY PATH: Political commissars -> Revolution -> Fanaticism + Always Watching ->
  "Britain Lives" — Grand Protector Mosley. Full dictatorship. Cosmetic tag change.

FEDERATIONIST PATH: Status quo -> Evolution. Moderate reform. Mainstream syndicalism.

AUTONOMIST PATH: Home rule -> Dissolve TUC / New Capital -> Devolution ->
  Three Armies. Only for Niclas y Glais. Can trigger Celtic Union (super.29).

--- KEY NPCs: INTERNATIONALE ---

COMMUNE LEADERS:
Louis Niel — Caretaker Chairman. Will be replaced after 1936 elections.
Maurice Thorez — Jacobin Chairman. Leninist. Killed if Gamelin coup succeeds.
Georges Valois — Sorelian Chairman. National syndicalist. Most aggressive war prep.
Daniel Guerin — Anarchiste Chairman. Libertarian socialist. Cooperative economy.
Missak Manouchian — Coalition Chairman. Armenian-French poet. Moderate big-tent.

COMMUNE GENERALS:
Maurice Gamelin — FM. Skill 4, Def 5. Best general AND biggest internal threat.
  Potential coup leader. If succeeds: dictator. If fails: executed.
Jacques Duclos — FM. Politically connected. Also potential Jacobin HoG.
Jacques Doriot — FM. Skill 3, Planning 4. Reckless, fortress buster.
Marcel Bucard — FM / Sorelian HoG. Valois' enforcer.
Gaston Billotte — FM. Old guard, fast planner.

BRITISH LEADERS:
Oswald Mosley — Maximist. Charismatic authoritarian. "Grand Protector" on full path.
Annie Kenney — Federationist. Feminist syndicalist, suffragette veteran.
Arthur Horner — Federationist. Orthodox syndicalist, Welsh miner.
Niclas y Glais — Autonomist. Welsh nationalist poet. Devolution and Celtic Union.
Tom Mann — Compromise Chairman. Old labor organizer. Mosley as his HoG.
Eric Blair — Totalist HoG under Mosley. Yes, George Orwell.

BRITISH GENERALS:
Bill Alexander — FM. Skill 4, Attack 5. Career officer, war hero, trickster.
B. H. Liddell Hart — FM. Skill 3. Armor theorist, panzer leader.
Percy Hobart — CC. Skill 3, Attack 4. Tank warfare pioneer.
Ronald Forbes Adam — FM. Skill 4, Def 5. Artillery, defensive doctrine.

================================================================
ENTENTE IN EXILE — The old order, biding its time across the Atlantic
================================================================

--- STARTING STATE (1936) ---

CANADA (CAN):
  Government: Constitutional monarchy, King George V (fading), Social Liberal PM
  Situation: Hosts British government-in-exile. Torn between Canadian interests and
    exile demands. Great Depression. Quebec tensions. Power balance mechanic tracks
    Canadian side vs Exile side (CAN_brit_exile_balance).
  Alignment: Entente (faction leader)
  Faction members: CAN, CAF, NFA, DEH, AST, SAF, ZIM, SRD
  Starting cabinet: Dunning (SocLib HoG), Mackenzie King (MarLib Econ)
  Popularities: MarLib 32%, SocCon 30%, SocLib 20%, NatPop 10%

NATIONAL FRANCE (NFA):
  Government: Authoritarian Democrat junta, Algiers. Petain as strongman.
  Situation: Controls North Africa. Old Republic fled here after 1920 revolution.
    Split between republicans wanting democracy and military hardliners.
    Native unrest and internal divisions. Anti-Communard ideology only unifier.
  Alignment: Entente
  Starting popularities: AuthDem 37%, PatAut 19%, NatPop 14%, SocCon 11%

External dependencies:
- 2nd Weltkrieg starts -> Entente waits, piles on (super.9)
- Commune falls -> NFA reclaims mainland (super.18)
- UoB falls -> UK restored (super.12)

--- CANADA: POLITICAL PATHS ---

KING'S SUCCESSION: George V will die. Potential heirs:
  Edward VIII — controversial, can go authoritarian/NatPop
  Henry IX — moderate
  Albert I — moderate

QUEBEC CRISIS (three mutually exclusive):
  Montreal Conference — negotiate. Bilingualism. Democratic path.
  Suppress Quebecois — crackdown. Moderate authoritarian.
  War Measures Act — martial law -> Purge Opposition -> Assert Royal Prerogatives.
    King takes direct power. Edward VIII can go NatPop. Full authoritarian.

--- NATIONAL FRANCE: POLITICAL PATHS ---

Six mutually exclusive paths (chosen by early event chain):

REPUBLICAN (NFA_compromised_with_liberals): SocLib/SocDem.
  Chautemps, Flandin, or Bouisson. Restore Assembly, free press. Democratic France.
  Sub-choice: Reynaud Plan (free market) vs Chautemps Plan (nationalization).

PETAIN JUNTA (NFA_junta_stays): Paternal Autocrat.
  Petain stays. Officers in govt. "Everything for the liberation." Military state.

DE LA ROCQUE (NFA_de_la_rocque_in_charge): PatAut/NatPop.
  "The Colonel." Right-wing nationalist corporatism.

ACTION FRANCAISE (NFA_jean_will_be_restored): NatPop (Maurrassism).
  Charles Maurras. Royalist restoration — French monarchy.

DARNAND (NFA_darnand_in_charge): NatPop extreme.
  Joseph Darnand. Fascist militia state. Most extreme path.

NAPOLEONIC RESTORATION (NFA_napoleonic_restoration): PatAut/NatPop.
  Restore Bonaparte dynasty. Imperial France.

--- CRISIS: ENTENTE DECLARES WAR (super.9) ---

Trigger: Canada at war with UoB (not as subject). ~1940-41, opportunistic.
"By the thousands Canadian troops land on the beachheads and push their way
to London, the Exiles eager to see their homes once again."

Entente strikes while Internationale fights Germany. Canada invades Britain,
NFA invades Commune's south. Three-way war.

--- CRISIS: RESTORATION OF THE UK (super.12) ---

Trigger: GBR exists or ENT_CAN_REFORMED_UK flag set.
"The King has been formally crowned. Celebration has broken out."

Post-conquest Britain (basedbrit events):
  Starts with: revolutionary threat + syndicalist red army remnants.

  LIBERAL BRITAIN: Clement Attlee (SocDem). Cosmetic tag: BRG_REPUBLIC.
    Labour-style social democracy. Hobart as figurehead.

  NATIONALIST ALLIANCE: Appeals to the right -> Joyce and Leese (NatPop).
    Can lead to Imperial Fascist League (Arnold Leese) or moderate restoration.

  CELTIC UNION (super.29): Scotland+Wales+Ireland reject both syndicalism
    and Crown, form Celtic Union. "The Celtic people dominate the lands
    of their forefathers once more."

--- KEY NPCs: ENTENTE ---

CANADA:
George V — King. Fading, will die. Succession triggers major events.
Edward VIII — Potential heir. Controversial. Can go NatPop.
Bernard Montgomery — FM. Skill 4. Logistics wizard, offensive doctrine. Best Entente general.
Clement Attlee — Exile politician. SocDem. Post-reconquest liberal Britain leader.

NATIONAL FRANCE:
Philippe Petain — FM and dictator. Skill 3, Def 4. Lion of Verdun. War hero.
Louis Franchet D'Esperey — FM. Skill 3. Old guard. Starting Chief of Staff.
Jean de Lattre de Tassigny — CC. Skill 4, Logistics 4. Best NFA tactical general.
Henri Giraud — CC. Skill 3. Commando. Daring escape artist.
Camille Chautemps — Republican. SocLib. Restore Assembly. Democratic path.
Francois de La Rocque — "The Colonel." PatAut nationalist corporatism.
Charles Maurras — Action Francaise. NatPop royalist ideologue.

--- REGIONAL FLAVOR ---

COMMUNE: Red banners over the Champs-Elysees. Factory councils debating war quotas.
  Joliot-Curies running nuclear research. Bastille Day repurposed as Revolution Day.
  Under Sorelians: nationalist parades. Under Anarchistes: commune assemblies.

UNION OF BRITAIN: TUC Congress in session — shouting, voting. Under Mosley: political
  commissars, "Always Watching," Britain Lives. Under Federationists: orderly union
  democracy. Frank Whittle on jet engines. Percy Hobart's experimental tanks.

ENTENTE: Ottawa as shadow imperial capital. Exiled lords plotting the return.
  In Algiers: French officers drilling tirailleurs for reconquest. Canadian industry
  tooling up — Crown corporations, polymer research, CBC propaganda.
  Quebec resentment. Colonial repression. Exile bitterness.

--- CASCADE TABLE ---

| Event | Affects | Effect |
|-------|---------|--------|
| Commune wins Weltkrieg (super.19) | Germany, Europe | Reichspakt collapses. Syndicalist puppets. |
| Commune wins | Entente | Invasion fails. NFA destroyed. |
| Gamelin coup (super.20) | Commune | Weakened army OR hardened Jacobin state. |
| Entente declares war (super.9) | Internationale | Two-front war for FRA + ENG. |
| UK restored (super.12) | Britain, Canada | Entente achieves primary objective. |
| NFA reclaims France (super.18) | France | Nationalist France replaces Commune. |
| Celtic Union (super.29) | Britain, Ireland | Third option — neither syndicalist nor royalist. |
| Mosley in Britain | Internationale | Stronger military, brutal. Alienates allies. |
| Sorelian France | Germany | Most aggressive — fastest to demand Alsace. |
| Edward VIII authoritarian | Entente | NatPop Canada. Exile side dominant. |

================================================================
================================================================
OTTOMAN EMPIRE / MIDDLE EAST — A crumbling caliphate on the eve of war
================================================================

--- STARTING STATE (1936) ---

Government: Constitutional monarchy under Sultan-Caliph Abdulmecid II, AuthDem
  Grand Vizier Mustafa Kemal Pasha leads the Osmanlı Halk Fırkası (OHF / Ottoman People's Party)
Situation: The Kemalists have spent a decade secularising and centralising the
  empire — abolishing Sufi orders, reforming civil law, crushing Kurdish autonomy,
  forcing Turkish language on Arab vilayets. The empire controls Anatolia, Syria,
  Iraq, Palestine, Hejaz, Tripolitania, and has vassal states (Azerbaijan, Crimea,
  Yemen, Persia). Black Monday (1936) shatters the economy and cracks open every
  fault line: Arab nationalists in Damascus, Aleppo, Baghdad and Mecca seethe;
  Kurdish resistance simmers; conservative ulema want Kemalist reforms reversed;
  and across the Suez, Egypt's King Farouk builds an Arab liberation coalition.
Alignment: Reichspakt-adjacent (German ally since Weltkrieg, not formal member)
Key tension: Arab revolt risk — every Ottoman action either increases or decreases
  revolt risk across Arab vilayets. Egypt stokes revolt from outside via Radio Free
  Cairo and Al-Fatat/Al-Ahd secret societies.

External dependencies:
- Black Monday (Germany) -> triggers Ottoman economic crisis
- 2nd Weltkrieg (GER vs INT) -> Ottomans may join Reichspakt or stand alone
- Russia (Caucasus) -> Georgia may attack Ottomans during the Middle Eastern War
- Entente (NFA) -> Egypt may ally with Entente; Entente sends volunteers to Egypt

--- FACTIONS (pre-crisis) ---

KEMALISTS (OHF): Ottoman People's Party
  Leader: Mustafa Kemal Pasha — ruthless moderniser, "peace at home, peace in the world"
  Ideology: AuthDem (single-party state with elections)
  Territory: All Ottoman domains from Constantinople
  Strength: strong (army, bureaucracy, state apparatus)
  Goal: Secular, centralised, Turkish-dominated empire. Suppress autonomy movements.

LIBERAL ENTENTE (HIF): Ottoman Freedom Party / Decentralists
  Leader: Prince Mehmed Sabahattin — Ottoman sociologist, exile-turned-reformer
  Ideology: SocLib / MarLib
  Territory: Support among minorities, merchants, coastal cities
  Strength: medium (popular support, weak military backing)
  Goal: Decentralised federal Ottoman state, private initiative, minority rights.

MILITARY FACTION: Army High Command
  Leader: Fevzi Cakmak (Fevzi Pasha) — hardline marshal, disciplinarian
  Ideology: PatAut
  Territory: Army barracks, Anatolian heartland
  Strength: strong (controls the military directly)
  Goal: Military dictatorship to save the empire from "democratic chaos."

CONSERVATIVE ISLAMISTS: Caliphate Restoration Movement
  Leader: Shakib Arslan — Druze prince, "Prince of Eloquence," pan-Islamist intellectual
  Ideology: SocCon -> PatAut (absolute monarchy path)
  Territory: Religious establishments, Arab conservative elites, rural Anatolia
  Strength: medium (clergy, traditional elites, some military sympathy)
  Goal: Reverse Kemalist secularism, restore caliphal authority, Islamic unity.

ENDEAVOUR FRONT (Calisma Cephesi): Military-political coalition
  Leader: Ismet Pasha / Karabekir Pasha — transitional coalition
  Ideology: AuthDem (centrist) / NatPop (Kadroist wing)
  Territory: Emerges after Fevzi coup, includes all factions temporarily
  Strength: medium (coalition is unstable)
  Goal: Stabilise empire during crisis, then either democratise or radicalise.

CAIRO PACT: Egyptian-led Arab Liberation Alliance
  Leader: King Farouk I of Egypt
  Ideology: varies (Egypt is AuthDem/SocCon monarchy)
  Members: Egypt + Syria (rebel), Iraq (rebel), Hejaz, possibly Yemen, Libya, Jabal Shammar/Saudi
  Strength: medium (Egypt has industry but Ottomans have German support)
  Goal: Liberate all Arab lands from Ottoman rule. Pan-Arab federation under Egyptian leadership.

--- CRISIS: Ottoman Political Crisis ---

Trigger: Kemalist reforms provoke education/judicial deadlock in the Meclis-i Mebusan.
  Sultan intervenes. Conspiracy against the Grand Vizier erupts.
Timing: 1936-1938
Clock: 0------6 (Kemalist grip vs opposition pressure)

The crisis follows a branching event chain:

POLITICAL CRISIS (d20):
  1-4:   Kemalist Consolidation — Kemal survives all challenges, bans political
         parties, creates single-party dictatorship (OTT_Single_Party_Dictatorship).
         Kemal rules as strong AuthDem dictator. [Kemalist Path]
  5-8:   Kemalist Assassination — conspiracy succeeds. Kemal is killed in Izmir.
         Ismet Pasha assumes emergency control. Death of Kemal destabilises OHF.
         Emergency elections called -> Liberal Entente (HIF) wins. [Sabahattin Path]
  9-12:  Fevzi Coup — Military under Fevzi Pasha launches coup after political
         deadlock. PatAut military government. State of Emergency declared.
         After stabilisation, elections -> Endeavour Front forms. [Fevzi -> Endeavour Path]
  13-16: Moderates Leave OHF — Kemal overreaches at Tribunals of Progress, moderates
         split. Emergency elections, Liberals win. [Sabahattin Path variant]
  17-20: Fevzi Seizes Power, Holds It — Fevzi refuses to restore elections.
         Permanent military dictatorship. [Fevzi Centralist or Decentralist Path]

--- PATHS (post-political crisis) ---

KEMALIST PATH (ottoman_centralising_focus):
  Government: AuthDem single-party state under Kemal, then successors
  Features: Aggressive secularisation, Turkish language enforcement, centralisation.
    State-directed economy (Sumerbank, autarky). Kurdish suppression. Constitutional
    reform — Kemal redraws constitution (pluralist or authoritarian variant).
    Conservative resistance: Sufi lodges fight back, Caliph demands reinstatement,
    possible Rize incident (conservative revolt). Kemal must balance reform vs stability.
  Stability: fragile (revolt risk in Arab/Kurdish provinces)
  Foreign policy: pro-German, may join Reichspakt
  Internal sub-branch: Pluralist vs Authoritarian constitution (d20 equivalent to
    player choices in Kemalist reform chain)

FEVZI MILITARY PATH (ottoman_fevzi_focus / ottoman_fevzi_coup_focus):
  Government: PatAut military junta under Fevzi Cakmak
  Features: State of Emergency. Replace provincial governors (Walis). Abolish Mecelle
    code (secular civil law). Military modernisation. "Marshal, here we are!"
  After stabilisation, Fevzi faces choice:
    Centralist (ottoman_fevzi_focus): Keep military control, join Reichspakt. Statist economy.
    Decentralist (ottoman_fevzi_coup_focus): Liberalise economy, restore elections.
      -> Elections produce Endeavour Front (Calisma Cephesi), a military-civilian coalition.

ENDEAVOUR FRONT PATH (ottoman_endeavour_focus):
  Government: AuthDem coalition (military + liberal + minority factions)
  Features: "Enshrine the Endeavour Front" — transitional government.
    Then branches into two sub-paths:
    CENTRALISE STATE AUTHORITY (AuthDem locked):
      -> Incorporate Kadroist Movement -> Committee of Inquest -> NatPop takeover.
         Kadroists purge the coalition, nationalise industries, establish authoritarian
         nationalist state. Turkish ultra-nationalism.
      -> OR Cooperate with Private Sector -> Emancipation Vanguard -> democratic reform.
    BREAK UP STATE MONOPOLIES (MarLib/SocLib):
      -> Encourage Private Initiative -> liberalisation, decentralisation.
  NatPop sub-path is the most radical: Kadroists seize power, become NatPop,
    purge opposition, nationalise everything. "Revolution from above."

SABAHATTIN PATH (ottoman_sabahattin_focus):
  Government: SocLib under Prince Sabahattin as Grand Vizier
  Features: Decentralisation, private initiative, gendarmerie reform, break up
    state monopolies. Multi-level democracy with provincial assemblies.
    "The Sublime Federation" — federal Ottoman state.
    Then branches into:
    LIBERAL GOVERNANCE (Grand Vizier Sabahattin): SocLib/MarLib reforms, autonomy for
      Arab/Kurdish provinces, democratic elections, free press.
    CONSERVATIVE COUNTER (Grand Vizier Arslan): Shakib Arslan appointed Grand Vizier.
      Promote pan-Islamism, religious education, empower Sheikh ul-Islam, Jizya tax.
      Revise constitution, enforce Mecelle (Islamic law), desecularise army.
      -> Caliphate of Old: PatAut absolute monarchy. Sultan takes direct power.
      -> OR Islamic Democracy: SocCon constitutional Islamism.

  ARSLAN PATH (SocCon/PatAut):
    1-10 (d20): Islamic Democracy — SocCon, Sultan as figurehead, sharia-influenced
      but constitutional. "Beyond Nationalities" — pan-Islamic identity.
    11-20: Caliphate of Old — PatAut absolute monarchy. Sultan-Caliph rules directly.
      Pan-Islamic legitimacy. "When the Armies of Islam knocked on Vienna's gates..."

--- CRISIS: Middle Eastern War (super.5) ---

Trigger: Arab revolt risk hits critical threshold across Ottoman vilayets. Egypt
  declares war or Arab provinces revolt and Egypt intervenes. War flag:
  OTT_cairo_pact_war. SuperEvent: "Middle Eastern War" (TUR has_war_with EGY).
Timing: ~1939-1941
Clock: 0------6 (Ottoman collapse vs Ottoman victory)

Sides:
  OTTOMAN: TUR + German volunteers (GER, AUS send volunteers) + possible Reichspakt
  CAIRO PACT: EGY (faction leader) + SYR (revolt) + IRQ (revolt) + HEJ + possibly
    SAU/JBS + YEM (if chose independence focus) + LBA (Libya) + PER (Persia)
    + ARM (Armenia) + GEO (Georgia, opportunistic attack on Caucasus)
    Entente (ENG, FRA) sends volunteers to Egypt.

OUTBREAK (d20):
  1-5:   Ottoman swift response — revolts contained, war limited to border skirmishes
  6-10:  Full war — multi-front: Sinai, Syria, Iraq, Caucasus, Arabia
  11-15: Full war + Persia invades from east, Georgia attacks Caucasus
  16-20: Total war — all fronts active, Yemen revolts, Libya rebels, Crimea attacked

RESOLUTION (d20, rolled when clock hits 0 or 6):
  1-7:   CAIRO PACT VICTORY — Ottoman collapse (cp.1 "End of an Era")
  8-13:  OTTOMAN VICTORY — Egypt defeated, Arabia subjugated
  14-17: STALEMATE — white peace, borders roughly restored, both sides exhausted
  18-20: OTTOMAN PYRRHIC VICTORY — wins war but internal collapse follows anyway

--- POST-WAR: CAIRO PACT VICTORY (AXIS_VICTORY flag set) ---

Ottoman Empire collapses. Tag remains TUR but loses all non-Anatolian territory.
"End of an Era" (cp.1): triggers when TUR surrender >60% OR loses 10+ key states.

TERRITORIAL DISMEMBERMENT:
- Syria: Egypt chooses — independent SocLib republic / install monarchy / annex directly
- Iraq: independent (Mosul, Kirkuk, Baghdad, Basra)
- Hejaz: gets Mecca, Medina — joins Cairo Pact
- Arabia: peninsula to SAU, JBS, or HEJ depending on who exists
- Egypt: gets Sinai, Suez. Regional hegemon.
- Persia: gets Van, Sulaymaniyah, possibly Iraqi land. EGY may demand withdrawal.
- Caucasus: Armenia gets Kars; Georgia gets Batumi; Azerbaijan released
- Greece: Aegean Islands, Dodecanese, Cyprus, Thrace (if at war)
- Crimea: to Ukraine. Libya: freed. Kurdistan: may get Diyarbakir.
- Assyria: gets core states if player-controlled

TURKEY POST-DEFEAT (Turkey.txt events, Turkey_KR focus tree):
  tur.0 "We know defeat" — branches based on who is Sultan:
  If Sultan is Abdulmecid II: abdicates -> Ahmed IV (Ahmed Nihad) crowned
  If Sultan is Ahmed IV already: depends on whether Kemalists were in power
  If Sultan is Osman IV: separate path (tur.59)

  -> OSP COUP: Ottoman Salvation Party (Bele, Karabekir, Sabahattin) seizes power.
     "Salvation Cabinet" — purge Kemalists, disband OHF, restore parliament.
     Final split (d20):
       1-10:  Liberal Majority — SocLib (Free Republican Party). Secular democracy.
       11-20: Conservative Majority — SocCon (Nation Party). Islamic democratic identity.
     Both paths: Anatolian-only Turkey, no empire. Economic reconstruction.
  -> KEMAL RETURNS: If Kemal alive, may reassert control. Turkish Republic possible.

--- POST-WAR: OTTOMAN VICTORY ---

Ottomans suppress Arab revolt, defeat Egypt. Arab vilayets reconquered.
Post-war branches depend on which political path Ottomans took before the war.
Key post-victory focuses:
- Reform on the Homefront — Kemal's death (if occurred) means authoritarianism
  can't continue; must liberalise somewhat
- Lift Military Restrictions on Egypt — puppet Egypt, limit army to 20,000
- Statutes of Autonomy — federal reforms for Arab provinces (Fevzi/Endeavour path)
- First Elections of Grand Assembly — democratic transition (Sabahattin path)
- Damascus-Dar es Salaam Railway — if Egypt puppeted
- Transfer of Suez — Ottoman control of the canal (via German mediation)
- Vanguard in the South — military projection into Arabia

KX GERMAN MILITARY PATH (OTT_german_military_command):
  Germany takes direct military control during the war. Post-war outcomes:
  Trust Elites (PatAut) vs Trust Ambassador (AuthDem, German-style institutions).
  Force Sultan's Hand vs Invite the Kaiser. Can become German puppet state,
  "Osmanisches Reich" condominium, or reassert independence.

--- MINOR STATES ---

EGYPT (EGY):
  Start: Monarchy under King Fuad I (dies early) -> Farouk I. AuthDem/SocCon.
  Black Monday recovery tree. Three government paths:
    Constitutional Monarchy — parliament empowered, reforms (SocLib/SocDem direction)
    Status Quo Monarchy — balanced, Farouk maintains power
    Absolute Monarchy — Farouk takes full control
  Foreign policy: Third Arab Congress (1938+) -> Radio Free Cairo -> coordinate
    Al-Fatat (Syria) and Al-Ahd (Iraq) -> stoke Ottoman revolt risk -> war.
  Post-victory: Victory in the Levant tree. Choose Syria's fate (independent/
    puppet/annex). Fourth Arab Congress -> Pan-Arab Federation (annex all Arab
    states) OR Pan-Arab Cooperation (alliance). Can claim Albanian throne.
    Fight Ethiopia for Nile control. Confront National France in North Africa.
  Kemet path: possible Egyptian nationalist/pharaonic identity (cosmetic).

SYRIA (SYR):
  Ottoman rebel faction. Revolts during war with Egyptian support.
  Post-war: Egyptian satellite (military integration) OR independent (centralise,
  Sunni dominance, contest al-Jazira). Leader: al-Jazairi (SocLib) or Moneim (monarchy).

IRAQ (IRQ):
  Released after Ottoman defeat (Mosul, Kirkuk, Baghdad, Basra).
  Al-Muthanna nationalism vs secular reform. Can be seized by Persia during war;
  Egypt may demand Persian withdrawal (cp.16-19 chain, possible EGY-PER war).

HEJAZ (HEJ):
  Hashemite kingdom, breaks free during war. Can claim the Caliphate — direct
  challenge to Ottoman Sultan. Hajj tax revenue, Bedouin pacification.

YEMEN (YEM):
  Ottoman vassal under Imam Yahya. "Every Yemen a Kingdom" prepares independence
  revolt. Proclaims kingdom during Middle Eastern War.

PERSIA (PER):
  Qajar dynasty, Ottoman vassal. Ahmad Shah dies -> Hassan Mirza Qajar succeeds.
  "Shah is Dead" crisis: constitutional monarchy (Long Live the Shah, Majlis
  cooperation, Wrath of the Lion PatAut) vs revolution (Republic, uproot aristocrats).
  Invades Ottoman east during war, seizes Kurdish/Iraqi territory.

ASSYRIA (ASY) / JERUSALEM (JBS/PAL):
  Small breakaway states. Assyria: independent national project if player-controlled.
  Jerusalem: Ottoman loyalist or join Cairo Pact.

--- KEY NPCs ---

Mustafa Kemal Pasha — Grand Vizier. Ruthless moderniser. "Peace at home, peace in the world."
  May be assassinated ("A Sunny Day in Izmir"). If in power: AuthDem single-party state.

Fevzi Cakmak — Marshal. Stern disciplinarian. Launches coup if Kemal falls.
  If in power: PatAut military dictatorship. "Marechal, nous voila!"

Prince Sabahattin — Sociologist, exile-returned liberal. Grand Vizier if HIF wins elections.
  If in power: SocLib federal Ottoman state, decentralisation, minority rights.

Shakib Arslan — Druze prince, "Prince of Eloquence." Pan-Islamist Grand Vizier.
  If in power: SocCon/PatAut, reverse secularism, Caliphate restoration.

Sultan Abdulmecid II — Caliph. Cultured but weak. May abdicate after defeat.
  Can push for absolute monarchy if Arslan path succeeds.

Ismet Pasha — Kemal's right hand. Takes over if Kemal assassinated. Pragmatic continuity.

Kazim Karabekir — Moderate general. Bridge between military and liberals. Key in OSP.

King Farouk I — Egyptian monarch. Pan-Arab ambitions. Leads Cairo Pact to war.

Hassan Mirza Qajar — Persian Shah successor. Faces monarchy vs revolution crisis.

--- REGIONAL FLAVOR ---

Atmosphere: Dust-choked telegraph offices in Damascus where Arab nationalists
  pass coded messages. Constantinople's grand mosques echoing with arguments
  between secular reformers and ulema. Armoured trains crawling through the
  Mesopotamian desert. Egyptian propaganda crackling from Radio Free Cairo.
Technology: Ottoman army uses German equipment (Mauser rifles, Krupp artillery).
  Armoured cars in desert warfare. Early aircraft over Sinai. Railway is the
  strategic spine — Berlin-Baghdad line, Hejaz Railway, Suez-Damascus rail.
Civilian life: Arab villagers caught between Ottoman tax collectors and rebel
  recruiters. Istanbul intellectuals debating Western modernisation vs Islamic
  identity in cramped coffeehouses. Egyptian cotton farmers watching the
  stock exchange crash. Kurdish tribesmen in the mountains, armed and waiting.

--- CASCADE TABLE ---

Events HERE that affect OTHER regions:

| Event | Affects | Effect |
|-------|---------|--------|
| Middle Eastern War begins (super.5) | Germany | GER/AUS send volunteers to Ottomans |
| Middle Eastern War begins | Entente | ENG/FRA send volunteers to Egypt |
| Middle Eastern War begins | Russia/Caucasus | Georgia attacks Ottoman Caucasus, Armenia may be released |
| Ottoman defeat (AXIS_VICTORY) | Germany | Loses Middle Eastern ally, Reichspakt weakened |
| Ottoman defeat | Caucasus | Armenia, Georgia, Azerbaijan released/expanded |
| Ottoman defeat | Afghanistan | Ottoman exile government may form there |
| Ottoman defeat | Balkans | Romania flavor event, Greece may seize Aegean/Thrace |
| Ottoman defeat | Ukraine | Gets Crimea if was at war with Ottomans |
| German military takeover | Germany | Ottomans become German puppet, GER controls Suez |
| Egypt wins, forms Pan-Arab Federation | North Africa | Egypt confronts National France, supports Maghreb rebels |
| Egypt wins | Ethiopia | Egypt may attack Ethiopia for Nile control |
| Persia invades Iraq | Persia/Iraq | EGY-PER crisis over Iraqi territory post-war |
| Yemen revolts | Arabia | Hashemite-Saudi-Yemeni triangle reshuffles |
| Ottoman victory | Egypt | Puppet state, army limited to 20,000, Suez transferred |
| Ottoman victory | Arabia | All rebel states re-subjugated |
| Caliphate restored (Arslan path) | Global Islam | Pan-Islamic legitimacy claim, affects India, Central Asia |
| Endeavour Front NatPop (Kadroists) | Regional | Aggressive Turkish nationalism, potential expansion |

================================================================
================================================================
AFRICA / MITTELAFRIKA -- German colonial colossus, one crisis from shattering
================================================================

--- STARTING STATE (1936) ---

Government: PatAut colonial administration under Statthalter Wilhelm Solf
Situation: Mittelafrika is Germany's sprawling African superstate -- Central,
  East, and West Africa plus former Belgian Congo, all administered from
  Dar es Salaam. The DOAG (German East Africa Company) wields enormous
  corporate power alongside the colonial bureaucracy. Black Monday hits
  the colonial economy hard, exposing structural rot: native unrest,
  settler grievances, corporate corruption, and a power vacuum in Berlin.
Alignment: Reichspakt (German subject colony)
Key tension: Statthalter Solf is aging. Hermann Goering runs the security
  apparatus and schemes for power. Black Monday creates debt, native anger,
  and farmer discontent -- four collapse triggers ticking simultaneously.

External dependencies:
- Black Monday (Germany) -> triggers MAF economic crisis, debt spiral
- 2nd Weltkrieg (Germany loses) -> accelerates or guarantees collapse
- National France (NFA) -> swoops in on West African territories post-collapse
- Portugal -> border wars over Angola/Mozambique if MAF weakens
- South Africa -> can expand north after collapse

--- FACTIONS ---

MAF: Mittelafrika (German Colonial Government)
  Leader: Wilhelm Solf (starting) -> Heinrich Schnee (successor) -- career colonial administrators
  Ideology: PatAut (autocratic colonial government)
  Territory: All of sub-Saharan Africa except South Africa, Ethiopia, Liberia, Somalia
  Strength: strong on paper, brittle in practice (vast but overstretched)
  Goal: maintain German colonial rule and extract resources for the Kaiserreich

GOERING FACTION: Goering Clique (NatPop power grab)
  Leader: Hermann von Goering -- ambitious, corrupt, megalomaniac Statthalter-aspirant
  Ideology: NatPop
  Territory: controls MAF security apparatus
  Strength: medium (loyal thugs, black market connections, fear)
  Goal: seize power as Vizekonig, declare a sovereign Mittelafrikan Reich

REFORMGRUPPE: Reform Group (colonial reformers)
  Leader: Hans Albert von Lettow-Vorbeck -- son of the legendary WK1 general, moderate reformer
  Ideology: SocCon (right wing) / SocLib-SocDem (left wing, splits later)
  Territory: emerges within MAF administration
  Strength: medium (officer corps support, popular legitimacy)
  Goal: African constitution, elections, devolved power -- save MAF from collapse through reform

SAF: South Africa (Dominion of the Entente)
  Leader: Jan Smuts (SocCon, starting) -- pragmatic imperial loyalist
  Ideology: SocCon (starting), multiple paths
  Territory: Union of South Africa, Rhodesia (Zimbabwe) as puppet
  Strength: medium (regional power, industrial base, but deep racial divisions)
  Goal: weather Black Monday, navigate racial politics, potentially expand north

ETH: Ethiopia (Empire)
  Leader: Haile Selassie -- modernizing emperor balancing tradition and reform
  Ideology: AuthDem
  Territory: Ethiopian highlands
  Strength: weak (pre-industrial, debt-ridden, railroad question)
  Goal: modernize, abolish slavery, avoid being swallowed by neighbors

LIB: Liberia (Republic)
  Leader: Americo-Liberian elite
  Ideology: SocCon/MarLib
  Territory: tiny coastal West Africa, surrounded by MAF
  Strength: weak (Firestone dependency, Black Monday)
  Goal: survive, seek bailout (USA/Germany), possibly expand into Ivory Coast post-collapse

--- CRISIS: Mittelafrika Power Struggle ---

Trigger: Black Monday + Solf's death (event mittelpolitic.7) creates power vacuum
Timing: ~1936-1938
Clock: 0------6 (ticks via collapse variables: debt, native unrest, farmer anger, corporate blues)

Sides: Goering clique vs colonial establishment vs Reformgruppe (latent)

OUTBREAK (d20):
  1-5:   Goering seizes power unchallenged. Arrest warrant from Berlin (mittel.48).
         He becomes NatPop Statthalter, declares Sovereign State.
  6-12:  Goering attempts coup but Berlin intervenes. Heydrich installed temporarily
         as Statthalter -- brutal but orderly.
  13-17: Establishment holds. DOAG Board of Directors or Franz Ritter von Epp
         takes over. Reformgruppe begins organizing.
  18-20: Reformgruppe seizes the moment. Lettow-Vorbeck takes power directly.
         Load Reformgruppe focus tree (MAF-RFG).

IF GOERING PATH (rolls 1-5):
  Goering declares himself Vizekonig (MAF_Vizekonig focus). Builds cult of
  personality (MAF_cult_of_the_stalhatter), taps black market, rules by fear.
  Establishes the "Lion Society" -- a paramilitary terror organization.
  Plans a "Mittelafrikan Reich" (MAF_mittelafrikan_reich) independent from Berlin.
  This path GUARANTEES the collapse -- Goering's mismanagement accelerates all
  four collapse variables (debt, natives, farmers, corporate) until they cross
  threshold 20+ and trigger mafcollapse.2 after November 1938.

IF REFORMGRUPPE PATH (rolls 18-20 or post-Goering removal):
  Lettow-Vorbeck stabilizes (+0.40 stability). Loads MAF-RFG focus tree.
  Deals with Heydrich's remnant security apparatus (MAF_RFG_theendofheydrich).
  Then splits into two sub-paths:

  REFORMGRUPPE DIVIDE (d20 or player choice):
    1-10:  Return of the Lion (MAF_thereturnofthelion) -- SocCon path.
           Right-wing Reformgruppe. Internal investigations, purge Goering's
           corruption. Maintain German authority but with African constitution.
    11-20: Left Reformgruppe (MAF_leftreformgruppeincharge) -- SocLib/SocDem path.
           Progressive land tax, end settler parties, deal with Kenya/Uganda/Congo
           regional problems. More devolution, African participation.

  Both paths lead to:
  - Afrikanische Grundgesetz (African Constitution) -- removes colonial nation status
  - Mittelafrika Dient Treu (MAF stands true) -- elections held
  - Election candidates: Hans Albert von Lettow-Vorbeck, August Stauch,
    Alfred Hanemann, or Arnold Lequis (all SocCon variants)
  - Statthalter appointments: Jomo Kenyatta or Alexander Duala Manga Bell
    for regional governance
  - Can AVOID collapse entirely (MAF_sucsesfully_avoided_collapse flag)

--- CRISIS: Mittelafrika Collapse (super.3) ---

Trigger: collapse variable exceeds 20 AND date > November 1938 AND collapse
  not prevented. Goering path virtually guarantees it. Reformgruppe can prevent it.
Timing: ~1938-1940
Clock: N/A -- this is a single catastrophic event, not a gradual war

THIS IS A SUPEREVENT. When it fires, every player in the world hears the
collapse sound effect. The global flag MAF_Mittelafrika_Collapse is set.

COLLAPSE MECHANICS:
  Four instability sources accumulate as a variable (MAF_collapse_var):
  - MAF_Debt (economic collapse from Black Monday)
  - MAF_power_vacuum (no strong leader)
  - MAF_disgruntled_natives (African resistance)
  - MAF_disgruntled_farmers (settler anger)
  - MAF_corporate_blues (DOAG/corporate dysfunction)
  Each adds +1 to monthly collapse variable. Removing the idea subtracts -1.
  When total exceeds 20, collapse warning fires. Then the big event.

PLAYER CHOICE AT COLLAPSE (mittel.186 / mittel.188):
  Player picks which successor state to play as:
  - Namibia (NMB) -- German settler loyalists
  - Tanganyika (TZN) -- German East Africa loyalists
  - Or if Goering path: option to hold on as rump MAF under Franz von Epp

BREAKAWAY STATES (17+ nations spawn simultaneously):
  West Africa:
  - GHA (Gold Coast) -- immediately wars IVO (Ivory Coast)
  - TOG (Togo)
  - DAH (Dahomey) -- puppeted by National France if NFA exists
  - CMR (Cameroon, German loyalists) -- wars ADA (Adamawa, syndicalist rebels)
  - NGR (Nigeria) -- attacked by HAU (Hausaland) and KBR (Kanem-Bornu)
  - IVO (Ivory Coast)
  Central Africa:
  - GAB (Gabon) -- wars KOG (Kongo Kingdom)
  - KOG (Kongo Kingdom) -- wars TKE (Teke) and GAB, non-aggression with COG
  - TKE (Teke Kingdom)
  - CEA (Central Africa)
  - COG (Belgian Congo) -- wars MSF, KIV, LPD, UMN (Congolese warlords)
  East Africa:
  - TZN (Tanganyika) -- German loyalists, wars ZZB (Zanzibar), RWA (Rwanda), BRD (Burundi)
  - UGA (Uganda)
  - KEN (Kenya) -- attacked by KIK (Kikuyu rebels)
  - ZZB (Zanzibar)
  - RWA (Rwanda)
  - BRD (Burundi)
  Southern Africa:
  - NMB (Namibia) -- German settlers, wars NBL (Nambiland/Herero rebels under Samuel Maharero)
  - ZAM (Zambia) -- wars COG, MLW, BRT
  - MLW (Malawi)
  - BRT (Barotseland)
  Former Portuguese:
  - MZB (Mozambique) -- wars TZN, MLW
  - ANG (Angola)
  Other:
  - DJI (Djibouti)
  - LIB (Liberia freed if previously annexed)
  - SOM (Somalia gets Jubaland if present)

IMMEDIATE WARS AT COLLAPSE:
  CMR vs ADA | GHA vs IVO | HAU vs NGR | KBR vs NGR | GAB vs KOG
  KOG vs TKE | TZN vs ZZB | TZN vs RWA | TZN vs BRD | ZAM vs COG
  ZAM vs MLW | ZAM vs BRT | MZB vs TZN | MZB vs MLW | KIK vs KEN
  NMB vs NBL | DAH puppeted by NFA

All breakaway states receive: AFR_post_collapse_instability + MAF_post_collapse_army ideas.

Cascade:
- Germany loses all African colonies and resources -> economic/strategic blow
- National France gains Dahomey as puppet, opportunity to expand in West Africa
- South Africa can push north (saf.collapse events) -> annex Zambia/Malawi/Barotseland
- Portugal reclaims Angola/Mozambique if it still controls home territories
- Somalia grabs Jubaland | Liberia grabs Ivory Coast (if at war with MAF)
- World tension spike (worldtension.13)
- Tension +3 global

--- CRISIS: South Africa -- Black Monday and Racial Politics ---

Trigger: Black Monday hits SAF (saf.3), Smuts government faces economic crisis
Timing: ~1936-1938
Clock: 0------6

Sides: Smuts liberals vs Hertzog nationalists vs Malan Boer supremacists
  vs Kadalie/Laguma socialist revolutionaries

OUTBREAK (d20):
  1-4:   Smuts holds power, attracts Canadian/Entente investment, gradual reform.
         Repeal Industrial Conciliation Act, weaken colour bar. SocLib path.
  5-10:  Hertzog coalition -- National Party forms government (AuthDem).
         Moderate Afrikaner nationalism, work programs, maintains Entente ties.
  11-14: Hertzog alone -- no coalition partner. More hardline AuthDem path.
  15-17: Malan takeover -- PatAut Boer nationalism. Daniel Francois Malan
         purges liberals, leaves Entente. NATAL SECEDES (saf.53) -- Natal
         forms own pro-Entente state (SFR) under Patrick Duncan.
  18-20: Socialist revolution -- ICU (Industrial and Commercial Workers Union)
         general strike. March on Pretoria. Clements Kadalie (RadSoc) or
         Jimmy La Guma (Syndie/Totalist) seize power. Zimbabwe freed.
         Leaves Entente. SAF goes RadSoc/Syndie.

RESOLUTION depends on path chosen:
  SMUTS: stable SocLib democracy, Entente-aligned, gradual racial reform
  HERTZOG: AuthDem Afrikaner state, Entente-aligned but wavering
  MALAN: PatAut Boer republic, leaves Entente, Natal secedes, possible expansion north
  SOCIALIST: RadSoc/Syndie revolution, joins Internationale, Zimbabwe independence

SAF POST-COLLAPSE EXPANSION:
  If MAF collapses and SAF is democratic (not socialist/PatAut/NatPop):
  - SAF can absorb southern breakaway states through saf.collapse events
  - Zimbabwe (Rhodesia puppet) can annex Zambia/Malawi/Barotseland
  - SAF becomes dominant southern African power

--- KEY NPCs ---

Wilhelm Solf -- starting Statthalter of Mittelafrika. Aging colonial bureaucrat.
  Appears: 1936 start. Dies mid-game (mittelpolitic.7), creating power vacuum.
  If in power: status quo continues but collapse variables tick upward.

Hermann von Goering -- head of MAF security. Corrupt, ambitious, paranoid.
  Appears: arrest warrant event (mittel.48), Sovereign State focus.
  If in power: NatPop Vizekonig. Lion Society terror. Guarantees collapse.

Reinhard Heydrich -- brutal security chief. NatPop enforcer.
  Appears: if Berlin installs him after Goering crisis (mittel.47).
  If in power: NatPop/PatAut iron fist. Reformgruppe must eventually remove him.

Heinrich Schnee -- career diplomat. Successor if Solf dies peacefully.
  Appears: mittelpolitic.7 on Solf's death.
  If in power: PatAut continuity, competent but uninspired.

Hans Albert von Lettow-Vorbeck -- Reformgruppe leader. Son of WK1 legend.
  Appears: mittel.64 (Lettow-Vorbeck Gang). Loads Reformgruppe tree.
  If in power: SocCon reform. African constitution, elections. Can save MAF.

Franz Ritter von Epp -- old-guard military governor. Fallback PatAut leader.
  Appears: mittel.57, replacement if Goering removed.
  If in power: PatAut colonial continuity without Goering's excesses.

Ernst Junger -- writer-soldier turned colonial administrator. Enigmatic.
  Appears: mittel.56, alternative PatAut replacement for Goering.
  If in power: PatAut literary-autocrat. Stabilizes somewhat.

Albert von Goering -- Hermann's brother. Social liberal. Anti-corruption.
  Appears: mittel.113, SocLib path after Goering's fall.
  If in power: SocLib reforms, works with reformers and African elites.

Jan Smuts -- South African PM. Imperial pragmatist, Entente loyalist.
  Appears: 1936 start (SAF).
  If in power: SocLib democracy, racial reform, Canadian investment.

Daniel Francois Malan -- Afrikaner nationalist. Boer supremacist.
  Appears: saf.52 if Hertzog path escalates.
  If in power: PatAut, leaves Entente, Natal secedes, apartheid precursor.

Clements Kadalie -- ICU trade union leader. African labor revolutionary.
  Appears: saf.107 (Return of Kadalie) after socialist revolution.
  If in power: RadSoc workers' republic, racial equality, Internationale alignment.

Haile Selassie -- Emperor of Ethiopia. Modernizer balancing feudal lords.
  Appears: 1936 start (ETH). Focus ETH_Haile.
  If in power: AuthDem modernization, railroad question, slavery abolition.

--- REGIONAL FLAVOR ---

Atmosphere: sweltering colonial capitals with ceiling fans and telegraph offices;
  vast rail lines cutting through savanna and jungle, half-finished; plantation
  mansions overlooking shanty towns; distant drumming that might be music or war.

Technology: colonial-era Schutztruppen with surplus WK1 rifles and armored cars;
  a few aging biplanes; DOAG-operated railways and river steamers; telegraph
  networks that go silent when rebels cut the wires.

Civilian life: African workers on German plantations, paid in company scrip;
  settler farmers furious about Black Monday commodity crashes; tribal chiefs
  navigating between colonial masters and their own people; missionaries
  running the only schools and hospitals.

--- CASCADE TABLE ---

Events HERE that affect OTHER regions:

| Event | Affects | Effect |
|-------|---------|--------|
| MAF Collapse (super.3) | Germany | Loses all African colonies, resources, prestige. Economic blow. |
| MAF Collapse | National France | Gains Dahomey puppet, opportunity in West Africa. Strengthens Entente position. |
| MAF Collapse | Portugal | Can reclaim Angola and Mozambique. |
| MAF Collapse | South Africa | Can expand north, absorb breakaway states. |
| MAF Collapse | Global | World tension spike. Resource disruption (rubber, steel, minerals). |
| SAF goes socialist | Entente/Canada | Loses South Africa from faction. Zimbabwe freed. |
| SAF Malan takeover | Entente/Canada | Natal secedes (stays Entente), SAF leaves. Entente weakened. |
| Goering Vizekonig | Germany | Diplomatic crisis -- rogue colony challenging Berlin's authority. |
| Reformgruppe saves MAF | Germany | Colony stabilized. Resources continue flowing. Prevents cascade. |
| Ethiopia modernizes | East Africa | Potential regional power post-collapse, can expand into chaos. |

================================================================
================================================================
SOUTH AMERICA — Syndicalism's beachhead, Argentina's ambition, Brazil's fracture
================================================================

--- STARTING STATE (1936) ---

ARGENTINA:
  Government: SocCon republic under Marcelo Torcuato de Alvear
  Situation: Black Monday cripples textile economy. Liga Patriotica (NatPop
    paramilitaries under Manuel Carles) plots a Christmas Coup. Military split
    between army and navy. Patagonia occupied by Chilean-backed syndicalists.
  Alignment: Unaligned
  Key tension: Christmas Coup — Carles seizes power or democrats hold.

CHILE:
  Government: Syndicalist federation under Chairman Clotario Blest Riffo
  Situation: South America's only syndicalist state. Sponsors Patagonia (FOP) as
    puppet buffer. Chairman elections every ~5 years. "South Prussia" military
    doctrine with Communard tanks. Part of Phalanstere research network.
  Alignment: Internationale
  Key tension: Totalist coup risk internally; Argentina coming for Patagonia.

BRAZIL:
  Government: SocCon republic, election imminent (1936)
  Situation: Massive, decentralized. State armies semi-independent. Black Monday
    devastates coffee economy. Syndicalist strikes in Sao Paulo. Integralistas
    (NatPop under Barroso/Salgado) rising. Vargas courts conservatives.
  Alignment: Unaligned
  Key tension: 1936 election — four candidates, six possible outcomes.

PATAGONIA (FOP):
  Government: Syndicalist commune, puppet of Chile. Leader: Antonio Soto.
  Situation: Sparse southern Argentina seized by workers and indigenous groups.
    Dependent on Chilean support. Argentina considers it occupied territory.
  Key tension: Argentine invasion is when, not if.

URUGUAY:
  Government: Council rule (SocLib) or Presidentialism — decided early.
  Situation: Buffer state between Argentina and Brazil. Both neighbors have
    annexation focuses. Stable but vulnerable.

External dependencies:
- Black Monday (Germany) -> economic crisis across continent
- 2nd American Civil War -> Argentine immigration wave, refugee influx
- 2nd Weltkrieg -> Chile called to fight for Internationale
- Mittelafrika collapse -> NatPop Brazil seeks African allies

--- FACTIONS ---

ARG (CARLES): Manuel Carles — NatPop. Catholic nationalist demagogue.
  Goal: "Catholic Federation" — annex Paraguay, Uruguay, Patagonia, Bolivia, attack Brazil.

ARG (DEMOCRATIC): Multiple leaders by election — Gonzalez (SocLib), Tamborini (SocCon),
  Patron Costas (MarLib), Moreau de Justo (RadSoc — socialist feminist).
  Goal: Stabilize democracy, reclaim Patagonia.

ARG (GOU JUNTA): Ramirez/Farrell — PatAut military officers.
  Emerges: If military overthrows Carles. May transition to democracy.

CHL (SYNDICALIST): Blest Riffo -> later Neruda or Diaz Loyola (Syndie/RadSoc).
  Strength: Medium-strong (Internationale backing). Goal: Defend SA syndicalism.

CHL (TOTALIST): Labarca/Recabarren. "Direct rule from Santiago."
  Risk: Counter-coup chain (chl.24-26) — officers may rebel, flip to PatAut.

FOP (PATAGONIA): Antonio Soto. Syndie/RadSoc/Anarchist split after independence.
  Strength: Weak. If FOP survives: first national TUC, anarchist vs moderate split.

BRA (VARGAS): Getulio Vargas — SocCon populist. Can self-coup into Estado Novo (PatAut).
BRA (INTEGRALISTAS): Barroso/Salgado — NatPop. "Empire Strikes Back" — restore empire,
  annex Paraguay ("Safeguard Guarani"), Uruguay ("Cisplatina"), puppet FOP, Africa ties.
BRA (LIBERAL): Prestes (SocLib) or Mangabeira (SocDem). Mangabeira risks Tenente coup
  toward RadSoc/Syndie/Totalist — this is how Brazil goes socialist.

--- CRISIS: The Christmas Coup ---

Trigger: Black Monday + Liga Patriotica agitation
Timing: Late 1936
Clock: 0------6

OUTBREAK (d20):
  1-5:   Countercoup succeeds — democracy restored
  6-8:   GOU junta seizes power from Carles (PatAut Farrell)
  9-20:  Carles consolidates — NatPop Argentina

Internal event chain (not a civil war). Carles must consolidate Buenos Aires,
expand Gendarmeria, control judiciaries, secure railroads, capture Rosario,
march on Cordoba, secure Pampeana, consolidate Mendoza. At each step, decisions
can weaken Carles and enable the GOU counter-coup (argcar.93-96 chain).

Cascade:
- Carles wins -> expansionist wars against all neighbors
- Democracy holds -> moderate foreign policy, Patagonia recovery
- GOU junta -> military rule, may democratize (loads Democratic focus tree)

--- CRISIS: The FOP Debacle (Argentina vs Patagonia/Chile) ---

Trigger: Argentina completes consolidation + date > Jan 1937
Timing: ~1937-1938
Clock: 0------6

OUTBREAK (d20):
  1-4:   FOP collapses without a fight
  5-10:  Argentina invades FOP, Chile provides weapons only
  11-16: Argentina invades FOP, Chile enters war
  17-20: Full South American war — Chile + FOP vs Argentina + Peru + Bolivia

ARG_Strike_Now declares war on FOP (annex_everything), marked will_lead_to_war_with CHL.
Argentina can recruit allies: Peru (mutual guarantee), Bolivia (negotiations).

RESOLUTION (d20):
  1-8:   Argentina wins — reintegrates Patagonia
  9-12:  Stalemate along Andes
  13-16: Chile wins — FOP survives
  17-20: FOP achieves true independence (breaks from Chile too)

Cascade:
- ARG wins -> Catholic Federation expansion (Paraguay, Uruguay, Bolivia, Brazil)
- CHL wins -> Internationale foothold strengthened
- Tension +1 regional, +2 if Chile directly involved

--- CRISIS: Argentine Expansion (Carles path only) ---

Trigger: NatPop Argentina wins FOP war + "A Catholic Federation"
Timing: ~1938-1940

After Catholic Federation, Carles can pursue (all wargoal focuses):
- Punish Paraguay (annex), Uruguay is Ours (annex)
- Yacuiba Dispute (attack Bolivia, will_lead_to_war_with Peru)
- Missiones Orientales (attack Brazil)

EXPANSION (d20):
  1-5:   Paraguay then Uruguay
  6-10:  Uruguay then Paraguay
  11-15: Paraguay + Bolivia/Peru simultaneously
  16-20: Goes for Brazil first — continent-wide war

Cascade: +1 tension per conquest, +3 if war with Brazil.
NatPop Argentina + NatPop Brazil both want Paraguay/Uruguay = continental collision.

--- CRISIS: Brazilian 1936 Election ---

Trigger: Automatic, early 1936
Timing: 1936-1937

ELECTION (d20):
  1-6:   Vargas (SocCon) — conservative republic. Risk: Estado Novo self-coup (PatAut).
  7-10:  Prestes (SocLib) — liberal reforms, press freedom.
  11-14: Mangabeira (SocDem) — welfare state. Risk: Tenente coup -> RadSoc/Syndie/Totalist.
  15-20: Integralistas (NatPop) — "Empire Strikes Back." Aggressive expansion tree.

Key mechanic: Brazil has "state armies" idea (decentralization). Attempting
BRA_federal_army costs -200PP, -30% stability — can trigger fragmentation.
Sao Paulo (SPO) and Bahia (BAH) have their own focus trees if they break away.

FRAGMENTATION (d20 — only if instability triggers):
  1-8:   Holds together
  9-14:  Sao Paulo breaks away (industrial heartland lost)
  15-18: Sao Paulo AND Bahia break away
  19-20: Full collapse — multiple states fragment

--- PATHS (post-crisis) ---

CARLES ARGENTINA:
  1-10:  NatPop dictatorship, Catholic Federation wars
  11-16: GOU coup (argcar.21) -> PatAut Farrell, may democratize
  17-20: Overreach -> democratic restoration

DEMOCRATIC ARGENTINA (after countercoup):
  1-5: SocCon (Tamborini), 6-10: SocLib (Gonzalez/Frondizi),
  11-14: MarLib (Patron Costas), 15-18: RadSoc (Moreau de Justo),
  19-20: Rigged elections -> AuthDem (restricted press, surveillance)

CHILE (Chairman elections ~every 5 years):
  1-10: Syndicalist continuity, 11-15: RadSoc shift (Palma),
  16-18: Totalist takeover (Labarca), 19-20: PatAut counter-coup

PATAGONIA (if survives):
  Socialist branch: First National TUC -> anarchist radicals vs anarchist moderates
  Can also have Antoine III (Kingdom of Patagonia — PatAut Orleanist path)
  If FOP conquers Argentina (unlikely): revolution successful, independence from Chile

--- MINOR NATIONS ---

PARAGUAY: AuthDem. Chaco War legacy with Bolivia. Can join Reichspakt. Both NatPop
  Argentina and NatPop Brazil want to annex it. Can reignite Chaco War.

BOLIVIA: SocCon/AuthDem. Mining economy hit by Black Monday. 1940 Elections.
  Chaco dispute with Paraguay. Argentina disputes Yacuiba border.

PERU: Moderate. Black Monday recovery. Key role as Argentina's potential ally
  (mutual guarantee). Yacuiba Dispute can drag Peru into Argentine wars.

COLOMBIA: Conservative republic. Five political paths (Liberal/Conservador/UNIR/
  Emergencia/Leopardos). Panama dispute. Mitteleuropa vs Entente arms trade.
  Largely separate from southern cone conflicts.

VENEZUELA: Democracy vs preventive coup. Oil economy. Independent of southern wars.

ECUADOR: Political instability. Multiple presidential paths. Reacts to neighbors.

--- KEY NPCs ---

Manuel Carles — Argentine NatPop. Catholic demagogue. Christmas Coup instigator.
  If in power: "Catholic Federation" — wars against every neighbor.

Edelmiro Farrell — Argentine PatAut general. GOU counter-coup leader.
  If in power: Military junta, may transition to elections.

Alicia Moreau de Justo — Argentine RadSoc. Socialist feminist.
  If in power: Welfare state, social reforms.

Clotario Blest Riffo — Chilean Syndicalist Chairman. Christian syndicalist.
  If in power: Moderate syndicalism, defends Patagonia.

Pablo Neruda — Chilean poet. Can become 4th Chairman (~1941+). Democratic syndicalism.

Carlos Labarca — Chilean Totalist. "Direct rule from Santiago." Counter-coup risk.

Antonio Soto — Patagonian leader. Spanish-born labor organizer. Anarchist/syndicalist.

Getulio Vargas — Brazilian populist strongman. SocCon, risk of Estado Novo (PatAut).

Gustavo Barroso — Brazilian Integralista leader. NatPop. Empire restoration.

Antoine III — Orleanist pretender. Can become King of Patagonia (PatAut, rare path).

--- REGIONAL FLAVOR ---

Atmosphere: Pampa grasslands under enormous skies. Buenos Aires trams and political
  pamphlets. Andean wind through Patagonian settlements. Sao Paulo factory smoke.
  Santiago rallies with red banners.

Technology: European hand-me-downs — Mausers, Krupp artillery. Chile imports Communard
  tanks. Argentina develops domestic aircraft. Brazil experiments with jungle warfare.

Civilian life: Gauchos losing land to economic collapse. Workers choosing between
  syndicalist organizers and Integralista rallies. Italian/Spanish immigrants flooding
  Buenos Aires. Coffee barons watching prices crater.

--- CASCADE TABLE ---

| Event | Affects | Effect |
|-------|---------|--------|
| NatPop ARG conquers neighbors | USA | Monroe Doctrine void during ACW |
| Chile joins Internationale war | France/Britain | SA front opens |
| Integralista Brazil + Africa | Mittelafrika collapse | Togo/Nigeria aligned |
| Catholic Federation forms | Papacy/Italy | Catholic volunteers, Italian refugees |
| 2nd ACW | Argentina | Immigration wave, population boost |
| Spanish Civil War | Argentina | Spanish immigrant manpower |
| Brazil goes Syndicalist | Chile/Internationale | Socialist SA bloc |
| SA war escalates | Global | Tension +1 to +3 |
| FOP independence | Internationale | Anarchist state, ideological beacon |
| ARG-Peru alliance | Andes | Anti-syndicalist bloc, Bolivia squeezed |

================================================================
================================================================
INDIA & AFGHANISTAN — Three claimants, one subcontinent, and a war that never ended
================================================================

--- STARTING STATE (1936) ---

Government: Three-way split after the 1925 British Revolution destroyed the Raj
  - Dominion of India (DEH): rump Raj based in Delhi, north India. AuthDem under
    King-Emperor George V (dies early 1936) via Chamber of Princes.
  - Bharatiya Commune (BHC): socialist state based in Calcutta, east/central India.
    Radical Socialist under outgoing chairman Lala Lajpat Rai.
  - Princely Federation (PRF): confederation of princely states based in Hyderabad,
    south India. AuthDem under Nizam Osman Ali Khan.
Situation: The 1925 Revolution triggered a civil war across the Raj. A brittle peace
  was achieved: the Delhi government kept the northwest, socialists hold Bengal and
  the northeast, and princely states consolidated the south around Hyderabad. All
  three claim the entire subcontinent. The Dominion maintains ties to Canada/Entente.
  The Commune aligns with the Internationale. The Princes stand alone. War is
  inevitable — the only question is who strikes first and who wins.
Alignment: DEH = Entente | BHC = Internationale-aligned | PRF = Unaligned
Key tension: All three sides prepare for war. Afghanistan may attack the northwest.

External dependencies:
- King George V dies (CAN event) -> succession crisis in Delhi, elections follow
- Afghan War -> Afghanistan attacks Delhi's northwest border (~1936-37)
- 2nd Weltkrieg (GER vs INT) -> pulls BHC into global war; Entente pressures DEH
- Canada/ISAC -> DEH can join Entente research/military cooperation
- Japan -> PRF can align with Japan for support against all rivals

--- FACTIONS ---

DEH: Dominion of India
  Leader: Chamber of Princes (interim) -> elected government or Churchill
  Ideology: AuthDem -> MarLib / SocLib / SocDem / SocCon / PatAut paths
  Territory: Northwest India — Delhi, Punjab, Rajputana, UP, Sindh
  Strength: medium (Entente backing, decent army, weak economy)
  Goal: Reunify India. Maintain ties to Crown or declare republic.

BHC: Bharatiya Commune (Indian National Congress)
  Leader: Lala Lajpat Rai (outgoing) -> Bose (Totalist) / Huq (Syndicalist) / Gandhi (RadSoc)
  Ideology: Totalist / Syndicalist / Radical Socialist (decided at INC Meeting)
  Territory: Bengal, Bihar, Orissa, eastern central India around Calcutta
  Strength: medium (large population, revolutionary zeal, weak industry)
  Goal: Socialist unification of India. Destroy princely feudalism and colonialism.

PRF: Princely Federation
  Leader: Osman Ali Khan, Nizam of Hyderabad — autocratic but popular moderniser
  Ideology: AuthDem / PatAut -> SocCon / MarLib paths possible
  Territory: Hyderabad, Mysore, Bombay, Nagpur, central-south India
  Strength: medium (cavalry tradition, decentralised command, rich princes)
  Goal: Princely-led unified India. Preserve aristocratic order under federation.

AFG: Afghanistan
  Leader: Emir Habibullah Khan (contested) -> civil war among claimants
  Ideology: PatAut (starts) -> 5+ divergent paths after internal crisis
  Territory: Afghanistan, eyes on Khyber Pass / northwest frontier
  Strength: weak (tribal levies, mountainous terrain advantage)
  Goal: Recover lands lost to the British. Survive internal power struggle.

SOUTH INDIAN MINORS: Madras, Travancore, Mysore
  Semi-independent states on the southern tip. May be absorbed by PRF, conquered
  by whoever unifies India, or resist incorporation. Not major war participants.

--- CRISIS: Indian Partition War ---

Trigger: Any of the three Indian factions takes "prepare for war" / invasion focus.
  DEH needs date > 1937.1.1 and army > 275k. PRF needs date > 1938.1.1 or army > 300k.
  BHC can trigger after INC meeting and military reforms.
Timing: ~1937-1940
Clock: 0------6 (DEH/PRF win <-> BHC wins; or PRF win <-> DEH/BHC wins)

Sides: Up to three-way war. DEH vs BHC, DEH vs PRF, PRF vs BHC — or all three at once.
  Each side can attack OR foment rebellion in the enemy (incite Kashmir vs DEH,
  incite Orissa vs BHC, support secessionist princes). PRF can "deal with the devil"
  — ally with DEH against BHC if BHC is socialist and PRF is not PatAut.

OUTBREAK (d20):
  1-4:   War delayed — diplomatic maneuvering, only two sides clash initially
  5-10:  Two-front war — one faction attacks both others sequentially
  11-16: Three-way war — all sides declare war within months of each other
  17-20: Total chaos — Afghanistan joins from the northwest, Burma stirs in the east

RESOLUTION (d20, rolled when clock hits 0 or 6):
  1-6:   DEH wins — Dominion reunifies India under elected or Churchill government
  7-12:  BHC wins — Commune reunifies India under socialist congress
  13-17: PRF wins — Princely Federation reunifies India under princely rule
  18-20: Stalemate / partial unification — two factions merge, third survives

Cascade:
- If DEH wins -> Entente gains powerful Asian ally, pressure on Japan's sphere
- If BHC wins -> Internationale gains massive manpower, threatens Southeast Asia
- If PRF wins -> new unaligned power, may join Reichspakt/Russia/Japan/Ottomans or isolate
- india_war_over flag -> unlocks post-war focus trees for winner

--- CRISIS: Anglo-Afghan War ---

Trigger: Afghanistan declares war on DEH for the Khyber Pass region (~1936-37).
  Fires early, often before the main Indian war. AFG has a Jalalabad revolt subplot
  that runs concurrently.
Timing: ~1936-1937 (early game)
Clock: 0------6 (AFG victory <-> DEH victory)

Sides: Afghanistan vs Dominion of India. Germany and Ottomans may send aid to AFG.

OUTBREAK (d20):
  1-5:   War averted — AFG backs down or internal revolt prevents attack
  6-14:  Limited war — fighting along the Khyber Pass, mountain skirmishes
  15-20: Full invasion — AFG pushes deep, DEH must divert forces from India prep

RESOLUTION (d20):
  1-7:   DEH wins — Afghanistan puppeted/annexed/made protectorate
  8-14:  DEH wins narrowly — Afghanistan survives but loses border territory
  15-20: AFG wins — Afghanistan takes border lands, DEH weakened for Indian war

Cascade:
- DEH puppet Afghanistan -> Churchill path more likely, "British Subject" AFG path
- AFG wins -> DEH starts Indian war weakened, other factions exploit the opening
- DEH distracted by AFG -> BHC/PRF may strike while Delhi's army is in the northwest

--- CRISIS: Bharatiya Commune Civil War (Bose Revolt) ---

Trigger: If Gandhi (RadSoc) leads BHC and pursues peaceful reunification with DEH
  via the Lucknow Summit, Subhas Chandra Bose threatens civil war. Fires when
  BHC has agreed to the summit but before it completes.
Timing: ~1938-1939 (if RadSoc path taken)
Clock: 0------6 (Gandhi holds <-> Bose seizes power)

Sides: Gandhi's Bharatiya Commune vs Bose's Indian National Revolutionaries (INR)

OUTBREAK (d20):
  1-8:   Bose backs down — Gandhi's moral authority prevails, summit continues
  9-14:  Limited revolt — Bose seizes some territory, quickly suppressed
  15-20: Full civil war — INR takes Jabalpur/Nagpur, Bose leads Totalist breakaway

RESOLUTION (d20, if full civil war):
  1-10:  Gandhi wins — reunification summit proceeds, BHC merges with DEH peacefully
  11-16: Bose wins — Totalist India under militant revolutionary Bose
  17-20: Prolonged war — external powers intervene, India fractures further

Cascade:
- Gandhi wins + summit succeeds -> DEH annexes BHC peacefully (SocDem DEH required)
- Bose wins -> aggressive Totalist India, threatens all neighbors
- Civil war weakens BHC -> PRF or DEH can exploit the chaos

--- PATHS (post-crisis) ---

DOMINION OF INDIA (DEH) — if Delhi wins the Partition War:

  HEAD OF STATE (d20 or player choice, decided at George V's death):
    1-5:   Edward VIII — figurehead king, elected government rules. Democratic path.
    6-12:  Ganga Singh — prince of Bikaner, reformist viceroy. Moderate path.
    13-17: Winston Churchill — Governor-General, PatAut direct rule. Imperial path.
    18-20: No king — republic declared after elections.

  ELECTIONS (if Edward or Ganga Singh path):
    1-5:   Liberal Party (MarLib) — V.S. Srinivasa Sastri. Anglophile free-market.
    6-9:   Swaraj Party (SocLib) — Narasimha Kelkar. Parliamentary democracy.
    10-14: Home Rule Party (SocDem) — Muhammad Ali Jinnah. Muslim-Hindu unity.
    15-20: Unionist Party (SocCon) — Sikander Hayat Khan. Rural conservative.

  POST-UNIFICATION: Absorb princely states, integrate Commune territory, pursue
    Madras/Nepal/Burma/Ceylon/Goa. Can join Entente/ISAC or go independent.
    Becomes "Republic of India" (cosmetic tag DEH_IND) after full unification.

BHARATIYA COMMUNE (BHC) — if Commune wins the Partition War:

  INC MEETING OUTCOME (decided early, determines war posture):
    1-6:   Totalist — Subhas Chandra Bose. Militarist, purge-or-conscript choice.
           "Princes and lapdogs must be driven out at bayonet point!"
    7-13:  Syndicalist — A.K. Fazlul Huq (with Nehru as PM). Industrial focus.
           Trade-union democracy, gradual reform, production over ideology.
    14-20: Radical Socialist — Mohandas Gandhi. Pacifist, agrarian, village-first.
           Pursues Lucknow Summit for peaceful reunion (requires SocDem DEH).

  POST-UNIFICATION: Special INC Meeting, integrate conquered territories.
    Pursue Burma (can declare war), Ceylon, Nepal, Madras. Becomes "Red Raj."
    Can align with Internationale or remain independent socialist state.

PRINCELY FEDERATION (PRF) — if Princes win the Partition War:

  GOVERNANCE (d20 or player choice):
    1-4:   Kaiser-i-Hind — Osman Ali Khan declares himself Emperor. PatAut absolute
           monarchy. Cosmetic tag PRF_EMP. Centralised princely empire.
    5-9:   Liberal Prince — constitutional monarchy, reforms toward democracy.
           Market liberal or radical socialist reforms possible.
    10-14: Princes United — princely elections, aristocratic oligarchy. SocCon.
           Council of Princes retains power, managed modernisation.
    15-17: Free Elections — democratic transition, end of princely rule. SocDem/SocLib.
    18-20: Diwan appointed — technocratic strongman, AuthDem moderniser.

  FOREIGN ALIGNMENT (after governance settled):
    1-5:   Align Germany (Reichspakt)
    6-9:   Align Russia
    10-13: Align Japan
    14-16: Align Ottomans
    17-20: Splendid Isolation — defend borders, refuse all entanglements

AFGHANISTAN — post-Anglo-Afghan War:

  PATH (5-way mutually exclusive, depends on who wins internal power struggle):
    1-4:   Nasrullah Khan — return to tradition. PatAut absolute emir. Isolationist.
    5-8:   Amanullah Khan — Young Afghans. AuthDem/SocLib moderniser. Barakzai Empire.
           Western reforms, women's rights, national assembly, can expand east.
    9-12:  Mohammad Nadir Khan — the "Indian Wild Card." Game of thrones, pragmatist.
    13-16: Habibullah Kalakani — the "Bandit King." NatPop Islamic revolution.
    17-18: Leo Amery — British Subject. DEH puppet, PatAut colonial governor.
    19-20: Bacha Khan — socialist path (if Commune-aligned). Red Shirts, land reform.
           Three sub-paths: Khudai Khidmatgar / Parcham / Khalq victory.

--- KEY NPCs ---

Mohandas Karamchand Gandhi — leader of BHC (RadSoc). Pacifist lawyer turned revolutionary
  conscience. Pursues non-violent reunification, village socialism.
  Appears: INC Meeting outcome. If RadSoc wins, leads Lucknow Summit path.
  If in power: only leader who can pursue peaceful merger with DEH. May be assassinated.

Subhas Chandra Bose — BHC Totalist leader. Once assaulted a British schoolmaster as a boy;
  "rabid desire for vengeance." Incendiary orator, militarist.
  Appears: INC Meeting. If not chosen, may launch civil war during Gandhi's summit.
  If in power: purges army or mass conscription, aggressive war against all enemies.

Jawaharlal Nehru — BHC moderate. "Most tactful" politician, masterful mediator.
  Appears: serves as PM under Huq (Syndicalist path), or succeeds Gandhi if Gandhi dies.
  If in power: bridges factions, industrial focus, diplomatic unification attempts.

A.K. Fazlul Huq — BHC Syndicalist head. Bengali Muslim League defector, pragmatic.
  Appears: INC Meeting, Syndicalist path leader.
  If in power: trade-union industrialisation, gradual reform, stable governance.

Muhammad Ali Jinnah — DEH SocDem leader. Organised the Lucknow Pact (1916), founded
  Home Rule League. Champion of Muslim-Hindu unity through democratic process.
  Appears: 1936 elections, Home Rule Party candidate.
  If in power: social democratic India, potential partner for BHC peaceful reunion.

Winston Churchill — DEH PatAut path. Former Lord of the Admiralty, now Governor-General.
  Advocates restoring full Raj authority. "Direct Rule in India."
  Appears: George V succession event. Bypasses elections entirely.
  If in power: authoritarian colonial regime, aggressive reconquest, may puppet Afghanistan.

Ganga Singh — DEH moderate viceroy. Prince of Bikaner, Weltkrieg veteran, reform advocate.
  Appears: George V succession event, alternative to Churchill or Edward VIII.
  If in power: gradual reform, maintains British ties without colonial authoritarianism.

Osman Ali Khan — PRF head of state. Nizam of Hyderabad, "Father of the Confederation."
  United southern princes after the Raj collapsed. Popular autocrat, moderniser.
  Appears: starts as PRF leader. Can declare himself Emperor (Kaiser-i-Hind).
  If in power: princely autocracy or guided reform. Can align with any great power.

Nasrullah Khan — Afghan traditionalist emir. Absolutist, conservative, isolationist.
  Appears: after Afghan civil war, if traditionalists win.
  If in power: returns Afghanistan to pre-modern governance, theocratic tendencies.

Amanullah Khan — Afghan moderniser. Returns from exile in Turkey/Iran. Western reforms,
  women's rights, national assembly. Can build the "Barakzai Empire."
  Appears: after Afghan civil war, if Young Afghans faction wins.
  If in power: transforms Afghanistan into progressive constitutional monarchy.

Habibullah Kalakani — the "Bandit King." Tajik brigand turned warlord.
  Appears: after Afghan civil war, seizes throne if monarchy collapses.
  If in power: Islamic revolution, NatPop regime, terror in Kabul.

--- REGIONAL FLAVOR ---

Atmosphere: Monsoon heat over crumbling Mughal forts; the rattle of ancient Lee-Enfields
  alongside improvised armored cars; elephants hauling artillery past railway junctions
  where three flags fly within sight of each other.
Technology: Mostly Weltkrieg-era small arms and cavalry. DEH has Entente hand-me-downs.
  BHC builds local industry from scratch. PRF fields princely cavalry and Hyderabad
  armored cars. Afghanistan fights with tribal levies and mountain guns.
Civilian life: Famine is always one bad monsoon away. Political rallies mix Hindi, Urdu,
  Bengali, Tamil. Gandhi's hunger strikes make international news. Cotton mills in
  Bombay, tea plantations in Assam, opium in Bengal — all contested by three governments.

--- CASCADE TABLE ---

Events HERE that affect OTHER regions:

| Event | Affects | Effect |
|-------|---------|--------|
| DEH wins Indian war | Entente (Canada/UK) | Entente gains massive Asian manpower for reclamation |
| BHC wins Indian war | Internationale | Internationale gains huge population base, threatens SE Asia |
| PRF aligns Germany | Reichspakt | Germany gains Indian ally, counters Japan in Asia |
| PRF aligns Japan | Japan/East Asia | Japan gains subcontinent ally, Co-Prosperity Sphere expands |
| PRF aligns Russia | Russia | Russian influence reaches Indian Ocean |
| Churchill takes power | Entente | Hardline Entente faction strengthened, aggressive posture |
| Gandhi reunites peacefully | Global | Tension drop, proves socialist-democratic cooperation possible |
| Bose Totalist India | Southeast Asia | Aggressive India threatens Burma, Siam, Ceylon |
| Afghan war drains DEH | India (all) | BHC/PRF gain window to strike while DEH is distracted |
| India unified (any) | Burma/Nepal/Ceylon | Unified India demands absorption of buffer states |
| India unified (any) | Goa (Portugal) | India demands Portuguese withdrawal from Goa |

================================================================
================================================================
JAPAN / EAST ASIA — The Fading Sun
================================================================

--- STARTING STATE (1936) ---

Government: Constitutional monarchy under Emperor Hirohito, Rikken Seiyukai
  (SocCon) government, PM Suzuki Kisaburo
Situation: Japan leads the Co-Prosperity Sphere but is recovering from the
  "Lost Decade" — economic stagnation after the Weltkrieg. The Fengtian
  Government in Manchuria is a Japanese puppet. Korea is a colony. The
  military chafes under civilian rule while radical nationalists plot
  a Showa Restoration. The Diet faces dissolution within weeks.
Alignment: Co-Prosperity Sphere (own faction, neither Reichspakt nor
  Internationale)
Key tension: The National Security Act debate — will the military seize
  power, or will democracy survive?

External dependencies:
- USA civil war (2ACW) → unlocks Japan's foreign expansion tree
- Black Monday → destabilizes Siam (German economic sphere)
- German East Asia collapse → opens Indochina to revolt or Japanese conquest
- Fengtian-China relations → determines if Japan is drawn into continental war
- Russian reunification → potential Russo-Japanese War

--- CRISIS: The National Security Act (1936-1937) ---

Trigger: Diet dissolution and Feb 1936 election, then NSA debate
Timing: Late 1936 - early 1937
Clock: 0——6 (political crisis, not military)

Sides: Civilian government vs Military factions (Restorationists + Centralists)

THE NSA DEBATE (d20):
  1-10:  NSA PASSES — military contained within legal framework.
         Emperor speaks in favor of democracy. Path to democratic Japan opens.
  11-15: NSA FAILS, CENTRALIST COUP — military takes power through
         counter-coup. Paternal Autocrat government under Hayashi Senjuro.
  16-20: NSA FAILS, RESTORATIONIST COUP — ultranationalist Showa Restoration.
         NatPop government under Konoe Fumimaro / Hiranuma Kiichiro.

Cascade:
- If democracy → slower expansion, diplomatic Co-Prosperity Sphere building
- If military centralism → aggressive expansion on timetable, war economy
- If Showa Restoration → most aggressive path, ideological expansionism

--- FACTIONS (Japan internal) ---

DEMOCRATIC JAPAN: Constitutional Government
  Leader: Varies by election — Seiyukai (SocCon), Minseito (MarLib),
    Kokumin Domei (AuthDem), or Social Democrats (SocDem)
  Ideology: SocCon / MarLib / AuthDem / SocDem
  Strength: Medium (economic focus, slower military buildup)
  Goal: Preserve constitutional government, build Co-Prosperity Sphere
    through diplomacy and economic integration

CENTRALISTS (Toseiha): Military Planning Board
  Leader: Hayashi Senjuro (then Tojo Hideki or Nagata Tetsuzan)
  Ideology: PatAut
  Strength: Strong (industrial mobilization, Five-Year Plan)
  Goal: Rational military modernization, controlled expansion, total war
    preparation. Cabinet Planning Board directs economy.

RESTORATIONISTS (Kodoha): Showa Restoration
  Leader: Konoe Fumimaro (head of government), Hiranuma Kiichiro,
    Okawa Shumei, Hashimoto Kingoro
  Ideology: NatPop
  Strength: Strong (ideological fervor, mass mobilization)
  Goal: Restore direct imperial rule, Pan-Asian liberation ideology,
    aggressive continental expansion. Kenkyukai intellectuals provide
    ideological framework via "Kokutai no Hongi" doctrine.

--- PATHS (Japan post-NSA) ---

DEMOCRATIC PATH:
  ELECTIONS (d20 or player choice):
    1-5:   Rikken Seiyukai — SocCon. Conservative democracy, union conciliation.
    6-10:  Minseito — MarLib. Liberal reform, anti-corruption, Zaibatsu oversight.
    11-15: Kokumin Domei — AuthDem. Managed democracy, national unity government.
    16-20: Social Democrats — SocDem. Labor rights, welfare state.
  Internal stability: Fragile (unstable democracy idea persists, must be reformed)
  Foreign policy: Defensive-expansionist (Tokyo/Osaka conferences, economic sphere)
  Fate of Hirohito: Remains as constitutional monarch

CENTRALIST PATH:
  Hayashi Senjuro governs. Cabinet Planning Board centralizes economy.
  Five-Year Plan industrialization. Propaganda agency, merged ministries.
  Hayashi may die → succession crisis:
    1-10: Tojo Hideki takes over — hardline military technocrat
    11-20: Nagata Tetsuzan takes over — strategic planner
  Internal stability: Stable (authoritarian control)
  Foreign policy: Expansionist (systematic conquest on timetable)

SHOWA RESTORATION PATH:
  Konoe Fumimaro leads. Kenkyukai intellectuals shape ideology.
  Two sub-branches after Konoe:
    Kenkyukai branch: Pan-Asian liberation ideology, "For Their Freedom
      and Ours" (reaching out to Poland, Belarus, Lithuania against Germany)
    Kokutai no Hongi branch: Imperial family cult, aggressive nationalism
  Internal stability: Stable (ideological control, "Cleansing the Gardens")
  Foreign policy: Most aggressive (ideological war, continental conquest)

--- CRISIS: The Rising Sun Expansion (~1938-1942) ---

Trigger: USA civil war begins + Japan completes "Rising Sun" focus
Timing: ~1938-1942
Clock: 0——6

Japan's expansion proceeds in two directions simultaneously:

NANSHIN-RON (Strike South):
  Sequence: Philippines → Dutch East Indies → Indochina → Siam → India
  Each target: can be invited to CPS diplomatically OR conquered
  German East Asia ultimatum → potential German-Japanese War (super.14)

SEISHIN-RON (Strike West / New Order in East Asia):
  Continental warfare against China (Operation Ichi-gou)
  Support Fengtian allies OR sow chaos among Chinese factions
  Mantetsu railway projects in Manchuria

SOUTHERN EXPANSION (d20):
  1-5:   Diplomatic success — Philippines, DEI, Siam join CPS voluntarily
  6-10:  Mixed — some join, some resist. Limited colonial wars
  11-15: Full southern conquest — sequential wars against holdouts
  16-20: Overextension — wars on multiple fronts, Germany intervenes

CHINA INTERVENTION (d20):
  1-5:   Fengtian handles unification with Japanese backing
  6-10:  Limited intervention — Japan supports allies, avoids direct war
  11-15: Operation Ichi-gou — full continental war against China
  16-20: Quagmire — drawn into unwinnable land war in Asia

Cascade:
- Japan attacks GEA → super.14 German-Japanese War fires
- Japan conquers Philippines → USA (post-2ACW) may intervene
- Japan vs China → drains resources, risks Fading Sun
- Japan vs Siam → destabilizes all of Southeast Asia

--- CRISIS: The Fading Sun ---

Trigger: Japan LOSES a major war — defeated by China, Russia, or
  combination. Specifically: Fengtian/Manchukuo capitulates + Japan
  loses control of Korean cores + surrender progress exceeds threshold
Timing: ~1940-1945 (depends on when wars begin)
Clock: N/A — this is a RESOLUTION EVENT, not a ticking crisis

THE FADING SUN FLAG (JAP_Fading_Sun):
  When set, ALL of the following happen simultaneously:
  - All Japanese subjects freed (Korea, Fengtian, all puppets)
  - Co-Prosperity Sphere dismantled
  - Japan loses all cores/claims outside Home Islands
  - All Rising Sun bonuses removed
  - All guarantees, non-aggression pacts, military access revoked
  - Japan reduced to Home Islands only

FADING SUN TRIGGERS (any of):
  - Japan accepts peace after losing Sino-Japanese War (japfor.232)
  - Japan capitulates in any war (JAP_capitulation_effect)
  - Peace timer expires and enemy accepts terms

This is the SINGLE MOST IMPORTANT FLAG for East Asia.
When it fires, EVERYTHING changes:
  - China: Fengtian freed, Chinese unification accelerates
  - Korea: Independence (see Korean Revolt below)
  - Russia: Can reclaim Sakhalin, push into Manchuria
  - Southeast Asia: CPS members become independent, realign
  - Pacific: Power vacuum, Entente/Germany may fill

--- POST-WAR JAPAN (if Fading Sun fires) ---

Japan gets the "Japan Subject" focus tree. Three paths:

SOCIALIST JAPAN (if conquered by socialist power):
  "Dawn of a Revolution" → purge reactionaries, renounce imperialism,
  dismantle Zaibatsus, radical land redistribution.
  Sub-paths:
    1-10: Communist Supremacy (Totalist) — central committee,
      ideological purity, Five-Year Plan. "Shining Communist Republic."
    11-20: United Front (Syndicalist/RadSoc) — broader socialist
      coalition, cooperative economics.
  Stability: Fragile ("Shattered People" idea, must be rebuilt)

DEMOCRATIC PUPPET (if conquered by democratic power):
  Fate of Hirohito:
    1-10: Hirohito stays as figurehead, depoliticized throne
    11-15: Forced abdication, regent installed
    16-18: Monarchy abolished, republic declared (massive instability)
    19-20: Foreign monarch installed (Edward VIII as Shogun — rare KX path)

CONTINUED INDEPENDENCE (rare — Japan wins but weakened):
  Retains government but with war exhaustion and reduced empire

--- KOREA ---

Korea exists as a Japanese colony in 1936. Two possible futures:

JAPAN DECIDES KOREA'S FATE (if Japan keeps Korea):
  Mutually exclusive:
  - INTEGRATE KOREA — slow absorption, events over 100-200 days
  - COLONIZE KOREA — direct colonial rule, harsher
  Both keep Korea as Japanese subject

THE GREAT KOREAN REVOLT (super.25):
  Trigger: KOR_great_revolt_began flag — Korea breaks free and declares
    war on Japan. Kim Koo leads the revolt with 200,000 manpower.
  Timing: Variable — depends on Japanese weakness

  REVOLT OUTCOME (d20):
    1-7:   Japan crushes revolt — Korea re-occupied
    8-14:  Korean victory — independence won
    15-20: Korean victory with foreign support — stronger start

  POST-INDEPENDENCE PATHS:

  "A Free Korea" (democratic/civilian victory):
    Provisional Government under Kim Kyu-sik (MarLib).
    The Royal Debate decides monarchy vs republic:
      1-5:  Firm Hand — PatAut military dictatorship, purge leftists
      6-10: Privy Council — AuthDem, empowered monarchy with council
      11-15: Constitutional Monarchy — SocLib/SocCon, British-style system
      16-20: Republic — MarLib/SocDem, elected government

  "The Occupation" (military victory, authoritarian):
    Yi Gang (PatAut) heads military government.
    Harsher path — military supremacy, Red Scare purges.

  "Friends in Tokyo" (Korea stays loyal to Japan):
    Korea remains CPS subject but gains autonomy.
    Courts Zaibatsu investment, Japanese economic integration.

  "The Revolution Reaches Korea" (socialist revolution):
    Totalist/RadSoc/Syndicalist Korea.
    Requires revolt during broader socialist wave.

  FOREIGN POLICY (all independent paths):
    - Affirm Neutrality — fortress Korea, isolationist
    - International Obligations — join China/Russia/Entente/Reichspakt
    - Join Co-Prosperity Sphere — return to Japanese orbit voluntarily

--- SIAM ---

Government: Absolute monarchy under Prajadhipok, German economic sphere
Situation: Black Monday devastates Siam's German-dependent economy.
  The King must reform or face revolution. Four reform crises must be
  resolved — if the King fails, the Khana Ratsadon (People's Party)
  launches a coup.

SIAM CRISIS (d20):
  1-7:   Prajadhipok reforms succeed — constitution granted, SIA_CONSTITUTION_GIVEN.
         Managed transition to democracy under royal guidance.
  8-14:  Reforms fail — Khana Ratsadon coup (SIA_KHANA_RATSADON_COUP).
         Military-civilian junta takes power.
  15-17: Boworadet counter-coup — royalist military seizes power
  18-20: Civil war — royalists vs Khana Ratsadon, Siam splits

POST-CRISIS SIAM PATHS:
  Reform path: Parliamentary democracy (SocLib/SocDem/SocCon)
  Khana Ratsadon: Military strongman emerges
    - Sarit Thanarat (PatAut) — military dictator
    - Plaek Phibunsongkhram (NatPop) — ultranationalist, renames to Thailand
    - Pridi Phanomyong (SocDem) — democratic reformer
  Monarchy restored: Rama VIII or Rama IX reinstalled
  Republic declared: Monarchy abolished

SIAM AND JAPAN:
  - Japan can invite Siam to CPS (Tokyo Conference)
  - Japan can conquer Siam if it refuses (JAP_target_siam)
  - Siam is a stepping stone to India for Japanese expansion

--- INDOCHINA ---

Government: German East Asia (GEA) colony in 1936
Situation: Indochina is part of Germany's Asian empire. When GEA
  collapses (GEA_Indochina_Uprising_Fired), Indochina revolts and
  becomes independent.

INDOCHINA UPRISING:
  Trigger: German East Asia internal crisis / collapse
  Result: Indochinese Union (INC) declared, war with GEA remnants

POST-INDEPENDENCE (d20):
  1-7:   Internationalist — RadSoc/Syndicalist, aligned with Internationale.
         Ho Chi Minh-style liberation. May receive French commune support.
  8-14:  Nationalist — Totalist/SocDem, independent Indochinese state.
         Focus on national unity over ideology.
  15-20: Syndicalist — worker councils, trade union governance.

  Internal split: Radicalism vs Nationalism inclination (tracked by flags)
  Must earn cores on Laos, Cambodia through decisions

INDOCHINA AND JAPAN:
  - Japan can conquer Indochina (JAP_target_indochina focus)
  - Or Indochina can join CPS voluntarily
  - Indochina is waypoint to Siam and India for Japan

--- KEY NPCs ---

Hirohito — Emperor of Japan. Constitutional monarch who may be forced
  to choose sides in the NSA crisis. His word decides democracy's fate.
  Appears: NSA crisis (1936). If democracy: stays as figurehead.
  If defeated: may be forced to abdicate, exiled, or depoliticized.

Konoe Fumimaro — Showa Restoration leader. Aristocratic intellectual,
  "man with a thousand friends." Heads Kenkyukai-aligned NatPop government.
  Appears: If NSA fails and restorationists win.
  If in power: Pan-Asian liberation ideology, aggressive expansion.

Hayashi Senjuro — Centralist military leader. Pragmatic army general.
  Appears: If NSA fails and centralists win.
  If in power: Rational militarization, Five-Year Plan, Cabinet Planning Board.
  May die in office — triggers succession to Tojo or Nagata.

Tojo Hideki — Centralist successor. Hardline military bureaucrat.
  Appears: After Hayashi's death (if centralist path).
  If in power: Total war mobilization, uncompromising expansion.

Hiranuma Kiichiro — Restorationist figurehead. Ultranationalist ideologue.
  Appears: Showa Restoration path.
  If in power: Extreme nationalist policies.

Okawa Shumei — Restorationist foreign minister. Pan-Asianist philosopher.
  Appears: Showa Restoration path, shapes ideological foreign policy.

Mizuno Rentaro — Democratic PM after initial crisis. Steady hand.
  Appears: After 1936 crisis resolves toward democracy.

Kim Koo — Korean independence leader and field marshal of the revolt.
  Appears: Korean Great Revolt. Skill 2 commander, leads rebel army.
  If revolt succeeds: shapes Korean independence.

Kim Kyu-sik — Korean Provisional Government head (MarLib).
  Appears: Post-independence "A Free Korea" path.
  If in power: Market liberal democracy, cautious foreign policy.

Yi Gang — Korean royalist/military leader (AuthDem/PatAut).
  Appears: "The Occupation" path or Privy Council path.
  If in power: Authoritarian monarchy, military-first governance.

Prajadhipok (Rama VII) — King of Siam. Must choose reform or face coup.
  Appears: 1936 Siam starting leader.
  If reforms succeed: Constitutional monarch. If coup: exiled.

Plaek Phibunsongkhram — Siamese military strongman (NatPop).
  Appears: Khana Ratsadon coup path.
  If in power: Renames Siam to Thailand, ultranationalist.

Pridi Phanomyong — Siamese democratic reformer (SocDem).
  Appears: Khana Ratsadon democratic path.
  If in power: Democratic reforms, possible socialist lean.

Sarit Thanarat — Siamese military dictator (PatAut).
  Appears: Post-Khana Ratsadon strongman consolidation.
  If in power: Military dictatorship, development-focused.

--- REGIONAL FLAVOR ---

Atmosphere: Cherry blossoms over grey battleships. Radio broadcasts crackling
  with imperial propaganda in Tokyo. Monsoon rain on colonial rubber
  plantations. The click of abacus beads in Zaibatsu counting houses.
Technology: Imperial Japanese Navy — the CPS's real power projection.
  Carrier aviation, torpedo doctrine. Army is large but underequipped
  compared to European powers. Mantetsu railway network in Manchuria.
Civilian life: Japanese civilians endure rationing under war economy.
  Korean subjects live under colonial oppression — forced labor, cultural
  suppression. Siamese farmers watch rice prices collapse after Black Monday.

--- CASCADE TABLE ---

Events HERE that affect OTHER regions:

| Event | Affects | Effect |
|-------|---------|--------|
| JAP_Fading_Sun fires | CHINA | Fengtian freed, Chinese unification accelerates massively |
| JAP_Fading_Sun fires | RUSSIA | Russia can reclaim Sakhalin, push into Transamur/Manchuria |
| JAP_Fading_Sun fires | SE ASIA | All CPS puppets freed, power vacuum |
| Japan attacks GEA (super.14) | GERMANY | Opens second front, weakens Reichspakt in Asia |
| Japan vs Russia (super.13) | RUSSIA | Major war, distracts from European theater |
| Korean Revolt (super.25) | CHINA | Chinese unifier may support Korea, destabilizes Japanese rear |
| Japan conquers Philippines | USA (post-2ACW) | Potential casus belli, Pacific War trigger |
| Japan conquers Siam | INDIA | Japanese army on Indian border, threatens Princely Federation |
| Indochina uprising | GERMANY | Germany loses Asian colony, GEA collapses further |
| Japan invites nations to CPS | GLOBAL | Shifts balance — nations leave Reichspakt/Entente for CPS |

================================================================
================================================================
SCANDINAVIA — Northern crossroads: neutral democracies bracing for Black Monday and the specter of a second great war
================================================================

--- STARTING STATE (1936) ---

SWEDEN (SWE):
  Government: Constitutional Monarchy, King Gustaf V, SocCon-led Riksdag
  Situation: Largest Nordic power. Black Monday looms — German business ties run deep.
    Riksdag restructuring underway; elections will determine Sweden's political future.
    Military restless, syndicalist movement growing, far-right Lindholm faction lurking.
  Alignment: Unaligned (neutral, German economic ties)
  Key tension: 1936 elections — who wins shapes everything. Revolution, coup, or democracy.

NORWAY (NOR):
  Government: Constitutional Monarchy, King Haakon VII, democratic coalition
  Situation: Small but strategic. Atlantic coastline vital to any naval power.
    Internal politics split between social democrats, conservatives, and a syndicalist underground.
    Quisling's NatPop movement and the Hird paramilitary are a dark undercurrent.
  Alignment: Unaligned
  Key tension: Political mandate — will Norway go democratic, syndicalist, or Quisling?

DENMARK (DEN):
  Government: Constitutional Monarchy, King Christian X, SocDem Stauning government
  Situation: Smallest major Nordic state. Dependent on German trade, hit hard by Black Monday.
    Controls Iceland (puppet). Constitutional crisis brewing — monarchy vs republic debate.
    Madsen-Mygdal liberals offer market alternative to Stauning's welfare state.
  Alignment: Unaligned (German economic sphere)
  Key tension: Black Monday recovery path (Stauning welfare vs Madsen-Mygdal austerity)

FINLAND (FIN):
  Government: Republic, democratic coalition (SDP/Agrarians competing)
  Situation: Caught between Russia and Scandinavia. Civil war scars still fresh.
    Mannerheim lurks as strongman option. Lapua movement pushes NatPop nationalism.
    Russian border = existential threat. Treaty of Tampere keeps fragile neutrality.
  Alignment: Unaligned (German-leaning, anti-Russian)
  Key tension: Democratic stability vs Mannerheim takeover vs Lapua NatPop surge

ICELAND (ICE):
  Government: Danish puppet, limited self-rule via Althing
  Situation: Tiny fishing economy devastated by Black Monday. 1937 plebiscite on independence.
    Can stay loyal to Denmark, declare independence, or seek new foreign patrons.
  Alignment: Danish sphere
  Key tension: 1937 independence plebiscite

External dependencies:
- Germany Black Monday → cascades into SWE/DEN/ICE economic crisis
- 2nd Weltkrieg outbreak → forces neutrality question for all Nordics
- Russian 2RCW outcome → determines Finland's eastern threat level
- Internationale victory in France/Britain → emboldens Nordic syndicalists
- Entente restoration → Norway can join Canadian-led Entente

--- CRISIS: SWEDISH POLITICAL CRISIS ---

Trigger: 1936 Riksdag elections + Black Monday economic shock
Timing: ~1936-1938
Clock: 0——6 (democracy ← → revolution/coup)

Sides: Democratic parties vs Syndicalist revolutionaries vs Military establishment

OUTBREAK (d20):
  1-8:   Democracy holds — elections proceed normally (SocDem/SocCon/MarLib wins)
  9-13:  Political turmoil — protests, strikes, but contained through elections
  14-17: Revolution erupts — syndicalists seize power, Swedish Industrial Congress convenes
  18-20: Military steps in — martial law declared, junta takes control

RESOLUTION — DEMOCRATIC PATH (d20, if democracy holds):
  1-7:   SocDem victory (Per Albin Hansson) — Folkhemmet welfare state
  8-13:  SocCon victory (Gösta Bagge) — conservative agrarian governance
  14-18: MarLib victory (Gustaf Andersson) — People's Party free-market reforms
  19-20: SocLib coalition — liberal progressive government

  Second elections (~1940) further refine: SocDem can split between
  Keynesian market-wing vs Marxist social-wing. Two full terms of governance.

RESOLUTION — REVOLUTIONARY PATH (d20, if revolution):
  1-5:   Radical Socialist victory — council democracy, dissolve noble estates
  6-10:  Syndicalist victory — trade union state, worker cooperatives
  11-14: Central Syndicalist victory — centralized union bureaucracy
  15-17: Nils Flyg seizes power (Totalist) — "National Syndicalism," penal servitude
  18-19: Linderot seizes control (Totalist) — orthodox Marxist-Leninist state
  20:    Sven Lindholm "National Revolution" (Totalist/NatPop) — Swedish fascism

RESOLUTION — MILITARY PATH (d20, if coup):
  1-6:   Junga Junta (PatAut) — professional military government, order restored
  7-12:  Archibald Douglas takes command (NatPop) — militarist nationalism
  13-17: AuthDem stabilization — military hands power back to managed democracy
  18-20: Crown question: King restored to real power vs Riksledare dictatorship

  Military sub-paths: Douglas can go full "Dictate of One" (Riksledare) or
  "Council of Command" (king-endorsed junta). Junga Junta can liberalize or entrench.

Cascade:
- If SWE goes democratic → Nordic Council path unlocked
- If SWE goes revolutionary → can forcibly "crush Nordic crowns," subjugate neighbors
- If SWE goes military/NatPop → Swedish Empire path, claims on Scandinavia
- If Lindholm NatPop → blocks all Nordic cooperation

--- CRISIS: NORWAY POLITICAL MANDATE ---

Trigger: Norwegian elections / political events (concurrent with Black Monday)
Timing: ~1936-1938
Clock: 0——6 (democracy ← → syndicalist takeover)

Sides: Democratic parties vs Syndicalist workers vs Quisling NatPop movement

OUTBREAK (d20):
  1-12:  Democracy survives — Haakon VII remains constitutional monarch
  13-17: Syndicalist revolution — "Working Norway Victorious," Haakon deposed
  18-20: Quisling NatPop takeover — Hird paramilitary seizes control

RESOLUTION — DEMOCRATIC PATH (d20):
  1-7:   SocDem agreement (Nygaardsvold) — mixed economy, welfare expansion
  8-13:  Conservative agreement (MarLib) — free market, private investment
  14-20: Agrarian agreement (SocCon) — rural development, traditional values

  Foreign policy fork: Armed Neutrality vs Internationalism
  - Neutrality: fortress Norway, bunker-building, self-reliance
  - Internationalism: join Entente (via Canada), join Reichspakt, join Russia, or Nordic path

RESOLUTION — SYNDICALIST PATH:
  Forced Haakon removal → Martial law → Workers' constitution
  Three-year economic plan, Red Guards, secret police
  Can harbor Finnish reds, aid British syndicalists, fund revolution abroad

RESOLUTION — QUISLING PATH:
  NOR_NAT_quisling_party_state: Quisling's party-state with Hird paramilitaries
  Hird Supremacy: militarized fascist Norway with Hird air corps and naval wing

Cascade:
- If NOR democratic + internationalist → can join Entente (blocks Nordic Council)
- If NOR democratic + Nordic path → Treaty of Stockholm, Nordic Council possible
- If NOR syndicalist → regional destabilizer, aids international revolution
- If NOR Quisling → isolated fascist state, potential German alignment

--- CRISIS: DANISH CONSTITUTIONAL QUESTION ---

Trigger: Post-Black Monday recovery + constitutional referendum (~1939+)
Timing: ~1937-1940
Clock: 0——6 (monarchy ← → republic)

Sides: Monarchists (Christian X) vs Republicans vs AuthDem royalists

OUTBREAK (d20):
  1-10:  Democratic process works — gradual reform
  11-15: Constitutional referendum triggered — monarchy vs republic vote
  16-18: King's Cabinet — Christian X asserts AuthDem royal authority
  19-20: Hybrid constitutional crisis — prolonged uncertainty

RESOLUTION (d20):
  1-7:   Model Monarchy preserved — democratic monarchy continues
  8-13:  Republican Future — Denmark becomes a republic (Vilhelm Buhl leads)
  14-17: King's Cabinet (AuthDem) — "For God, King, and Fatherland"
  18-20: Madsen-Mygdal MarLib government — market liberal recovery

  Christian X dies → Frederick IX succeeds (global flag SCA_Frederick_Danish_king)
  This affects Scandinavian unification: "Every King a Turn" requires both monarchies intact.

Cascade:
- If DEN goes republic → SCA_Denmark_Republic flag blocks "Every King a Turn" union path
- If DEN AuthDem → stronger monarchy, can drive Nordic monarchist union
- If DEN democratic → Treaty of Stockholm, Nordic Council path opens

--- CRISIS: FINNISH EASTERN QUESTION ---

Trigger: Russia stabilizes after 2RCW, looks toward Finland
Timing: ~1939-1942
Clock: 0——6 (peace ← → war with Russia)

Sides: Finland vs Russia (+ internal: democrats vs Mannerheim vs Lapua)

OUTBREAK (d20):
  1-8:   Diplomacy succeeds — settle Russian issue peacefully
  9-14:  Tensions escalate — militaristic fervour, Heimosodat (kinship wars) rhetoric
  15-18: War with Russia — Finland fights for Karelia and eastern territories
  19-20: Mannerheim takes full command — authoritarian war footing

RESOLUTION — POLITICAL (d20):
  1-6:   Red-Earth Government (SDP/Agrarian coalition) — welfare state, heal civil war wounds
  7-10:  SocDem pure (favour workers) — labour-oriented social democracy
  11-14: Agrarian pure (favour farmers) — rural development focus
  15-17: Mannerheim's Ascendancy (PatAut) — White Guard military state
  18-19: Lapua Movement (NatPop) — ultranationalist Finland, IKL party dominance
  20:    King Matti (Monarchist) — German-backed Finnish monarchy

Cascade:
- If FIN peaceful with Russia → can focus on Nordic integration
- If FIN at war with Russia → draws in Nordic allies or stands alone
- If FIN Mannerheim → militarized buffer state, anti-Russian bastion
- If FIN NatPop/Lapua → aggressive expansionism, claims on Karelia

--- CRISIS: SCANDINAVIAN UNIFICATION ---

Trigger: Treaty of Stockholm signed by SWE + NOR + DEN (all democratic, all unaligned)
Timing: ~1939-1942 (requires all three democratic paths completed)
Clock: 0——6 (cooperation ← → federation)

Prerequisites (ALL required):
  - Sweden: democratic path (SocDem/SocCon/MarLib) + Treaty of Stockholm focus
  - Norway: democratic path + internationalism + Treaty of Stockholm focus
  - Denmark: democratic path + Treaty of Stockholm focus
  - All three: elected government, not in faction, not subject, not capitulated
  - Sweden must NOT have military coup, revolution, or Lindholm flags

STAGES:
  1. Nordic Council formed → faction created, economic cooperation idea
  2. Defense Union → military cooperation, shared manpower
  3. Economic integration: passport union → monetary union → customs union → SAS airline
  4. Political integration: joint sessions → common tech → form federation
  5. SCANDINAVIA_form_federation: SWE + NOR + DEN annex into SCA tag
     (Iceland absorbed too if puppet/allied)

RESOLUTION — FEDERATION FORMED (d20 for governance):
  1-7:   Social Democratic Triumph → Nordic Model welfare state, safety net
  8-14:  Victory for Liberalism → national autonomy preserved, free market federation
  15-20: Conservative coalition → traditional values, royal council

  Post-formation sub-paths:
  - Parliament type: Nordic Parliament vs Joint Sessions as Legislative
  - Head of state: Council of Kings (rotating) vs Every King a Turn (sequential)
    (Every King a Turn blocked if Denmark became republic)
  - Judiciary: Judicial Autonomy vs Nordic High Council vs Federal Judiciary
  - Final: Ratify Constitution → First Nordic Elections → governance path

Cascade:
- SCA formation = major Nordic superpower in northern Europe
- If SCA forms → Iceland can join via Scandinavian Defense Union
- SCA blocks revolutionary/NatPop paths in all constituent nations
- Finland can potentially join if Nordic-aligned (ties with Sweden focus)

--- PATHS (post-crisis) ---

SWEDEN DEMOCRATIC PATH:
  GOVERNANCE:
    SocDem (Per Albin Hansson): Folkhemmet "People's Home," welfare state, Keynesian economics
    SocCon (Gösta Bagge): Conservative agrarianism, traditional values, farmer support
    MarLib (Gustaf Andersson): Free market, People's Party, classical liberalism
    SocLib: Liberal reform coalition

  FOREIGN POLICY (4-way choice after democracy):
    1. Democratic Light → Entente alignment, Reichspakt alignment, or Moscow alignment
    2. Neutrality Again → armed neutrality, fortress Sweden
    3. Nordic Integration → Treaty of Stockholm → Nordic Council → federation
    4. Realm of Our Own → Swedish great power ambitions (if AuthDem tendencies)

SWEDEN REVOLUTIONARY PATH:
  FOREIGN POLICY (2-way):
    1. Nordic Torch Alone → independent socialist Scandinavia, crush Nordic crowns,
       subjugate neighbors, form "True Nordic Union" by force
    2. Alongside Internationale → join French-led Third Internationale,
       ready world revolution, choose between former victors/Kaiser/Russia/self

SWEDEN MILITARY PATH:
  SUB-PATHS:
    Junga Junta (PatAut): professional military rule, can liberalize
    Archibald Douglas (NatPop): militarist nationalism → Riksledare or King's Council
    AuthDem Stabilization: managed democracy under military oversight
    Lindholm National Revolution (Totalist): Swedish fascism, "National Syndicalism"
  FOREIGN POLICY: Empire path — Swedish dominance, claims on Scandinavia

--- KEY NPCs ---

SWEDEN:
Gustaf V — King of Sweden. Constitutional monarch, aging. Military sympathizers see him as figurehead to restore.
  Appears: starting monarch. If military coup → crown question decides his role.
  If in power: legitimizes military government or becomes puppet of junta.

Per Albin Hansson — SocDem leader. Architect of "Folkhemmet" (People's Home) welfare vision.
  Appears: wins 1936 election on SocDem path.
  If in power: builds Nordic welfare state, economic recovery through social programs.

Gösta Bagge — SocCon leader. Academic conservative, agrarian defender.
  Appears: wins 1936 election on SocCon path (GEL_leads).
  If in power: protectionist economics, traditional Swedish values.

Nils Flyg — Totalist. National Syndicalist — syndicalism twisted into nationalism.
  Appears: wins revolutionary congress power struggle.
  If in power: penal servitude, purges "pink parasites," competitive industrialization.

Sven Lindholm — Totalist/NatPop. Swedish fascist, "National Revolution."
  Appears: takes power if revolution goes far-right.
  If in power: paramilitaries, nationalist transformation, total state control.

Archibald Douglas — NatPop general. Militarist who seizes power after coup.
  Appears: military path, wins power struggle against Junga junta.
  If in power: Riksledare dictatorship or king-endorsed council of command. "Svea Rike."

Ernst Wigforss — RadSoc/SocDem economist. Feminist syndicalist intellectual.
  Appears: revolutionary path or as SocDem economic minister.
  If in power: radical redistribution, connections to Russian socialists.

NORWAY:
Haakon VII — King of Norway. Constitutional bulwark, popular monarch.
  Appears: starting head of state across all democratic paths.
  If deposed: syndicalist revolution forces his removal.

Johan Nygaardsvold — SocDem PM. Pragmatic social democrat.
  Appears: leads SocDem agreement path.
  If in power: mixed economy, progressive welfare, labor peace.

Vidkun Quisling — NatPop leader. Commands the Hird paramilitary.
  Appears: NatPop takeover path. Party-state with Hird supremacy.
  If in power: fascist Norway, Hird air corps and naval wing, isolated.

DENMARK:
Christian X — King of Denmark. Can assert royal authority or accept reform.
  Appears: starting monarch. Dies → Frederick IX succeeds.
  If assertive: King's Cabinet AuthDem path, "For God, King, and Fatherland."

Thorvald Stauning — SocDem PM. Welfare state architect, Kanslergade Agreement.
  Appears: starting government leader. Dies → Vilhelm Buhl succeeds.
  If in power: welfare reforms, Black Monday recovery through public works.

Frederick IX — Crown Prince, succeeds Christian X.
  Appears: after father's death.
  If in power: can participate in "Every King a Turn" Scandinavian monarchy rotation.

FINLAND:
Carl Gustaf Mannerheim — PatAut strongman. White Guard commander, civil war hero.
  Appears: Mannerheim's Ascendancy path (becomes leader if subject/crisis).
  If in power: militarized Finland, White Guard strengthened, anti-Russian hardliner.

ICELAND:
No major unique NPCs — governance through Althing (parliament).
  Key decision: 1937 plebiscite determines independence vs Danish loyalty.

--- REGIONAL FLAVOR ---

Atmosphere: Iron-grey Baltic seas under leaden skies. Pine forests stretching to Arctic darkness.
  Cobblestone streets of Stockholm echo with newspaper boys shouting election results.
  Fishing villages along Norwegian fjords where radio static carries news of distant wars.

Technology: Naval-focused — submarines, destroyers, convoy escorts. Hydroelectric power
  (Norwegian dams, Icelandic geothermal). Swedish steel and iron mining (LKAB, Dannemora).
  Norwegian aluminium industry. Early nuclear research (Norwegian heavy water).
  SAS airline if Scandinavia cooperates. Oslo Analyzer (early computing).

Civilian life: Black Monday hits hard — unemployment, devalued kronor, austerity vs welfare debate.
  Statare (landless farmworkers) system in Sweden = social tension fuel.
  Fishing economies in Norway and Iceland. Danish agricultural exports to Germany.
  Civil war scars in Finland — White vs Red divisions still raw.

--- CASCADE TABLE ---

Events HERE that affect OTHER regions:

| Event | Affects | Effect |
|-------|---------|--------|
| SWE goes revolutionary | France/UoB | Potential Internationale member, Nordic syndicalist bastion |
| SWE joins Internationale | Germany | Northern front threat in 2nd Weltkrieg |
| SWE goes NatPop/military | Germany | Potential Reichspakt ally or rival |
| NOR joins Entente | Canada/Entente | Atlantic naval base, Norwegian army for reclamation |
| NOR goes syndicalist | Britain/France | Nordic Internationale expansion, harbors Finnish reds |
| DEN Black Monday | Germany | Trade disruption, German intervention in Danish economy |
| DEN AuthDem monarchy | Germany | Closer German alignment, monarchist solidarity |
| FIN war with Russia | Russia | Eastern front opens, draws resources from 2RCW |
| FIN Mannerheim | Russia/Germany | Anti-Russian buffer, potential German ally |
| SCA forms federation | All regions | Major new power bloc, 4th faction in global politics |
| SCA forms | Germany | Loss of economic influence over individual Nordic states |
| ICE independent | Entente/USA | Strategic Atlantic island, potential naval base |
| Nordic Council | Global | Tension -2 (stabilizing democratic cooperation) |
| SWE crushes Nordic crowns | NOR/DEN/FIN | Forced socialist unification, Nordic civil wars |

================================================================
================================================================
ITALY — Shattered peninsula, five states racing to reunify
================================================================

--- STARTING STATE (1936) ---

Italy never unified after the Weltkrieg. The peninsula is split into five states,
each with its own government, ideology, and patron. The question is not WHETHER
Italy reunites — it is WHO does it, and what kind of Italy emerges.

SOCIALIST REPUBLIC OF ITALY (SRI):
  Government: Syndicalist republic, Chairman Giuseppe Di Vittorio
  Territory: Northern Italy — Piedmont, Lombardy, Liguria, Emilia (capital: Milan)
  Alignment: Third Internationale (France/Britain)
  Situation: Syndicalist revolution succeeded in the industrial north after the
    Weltkrieg. French advisors embedded. Four internal factions fight over the
    direction of socialism. Garibaldi coup possible on day 1.
  Strength: Medium-strong (industrial base, French backing, decent army)
  Key tension: socitaly.205 fires immediately — Garibaldi can seize power or
    the 4th Congress proceeds to pick between four socialist paths.
  Starting ideas: Divided Nation, French Advisors, Command Economy

KINGDOM OF TWO SICILIES (SIC):
  Government: Social Conservative constitutional monarchy, King Ferdinando III
  Territory: Southern Italy — Naples, Calabria, Sicily, Sardinia (capital: Naples)
  Alignment: Unaligned (leans Entente/Reichspakt)
  Situation: Bourbon restoration after the north fell to revolution. Agrarian,
    undeveloped, but politically diverse. Mafia powerful. The Integralist movement
    and NatPop Julius Evola lurk as threats to the monarchy.
  Strength: Medium-weak (large territory, weak industry, strong navy)
  Key tension: Organic Kingdom / Mafia / Evola paths can radically change the state.

REPUBLIC OF ITALY (ITA):
  Government: Social Democrat republic, PM Ivanoe Bonomi
  Territory: Central-north — Lombardy-Venetia rump under Austrian protection (capital: Brescia)
  Alignment: Austrian sphere (forced — ITA_austrian_occupation_idea)
  Situation: Austrian puppet state carved from post-revolution chaos. Gives Austria
    military access. Three paths: democratic consolidation (SocLib), ANI nationalist
    takeover (NatPop), or Habsburg monarchy restoration (PatAut).
  Strength: Medium (4 research slots, Austrian backing, but dependent)
  Key tension: Black Monday weakens Austria — ITA can break free or be consumed.

KINGDOM OF SARDINIA (SRD):
  Government: Paternal Autocrat military regime, King Amedeo I / PM Pietro Badoglio
  Territory: Sardinia island (capital: Cagliari)
  Alignment: Entente (exile monarchy, Savoy dynasty)
  Situation: House of Savoy retreated to Sardinia after the revolution. Badoglio
    runs a military junta. Institutional crisis: will the Marshal or the King rule?
    Or can democracy return?
  Strength: Weak (island, small, but Entente backing and strong officer corps)
  Key tension: SRD_tackle_institutional_crisis — Badoglio vs King vs democracy.

PAPAL STATES (PAP):
  Government: Paternal Autocrat theocracy, Pope Pius XI
  Territory: Lazio (Rome and surroundings)
  Alignment: Guarantees Two Sicilies / Unaligned
  Situation: The Pope holds temporal power over Rome. Pius XI is dying — the
    Papal Conclave will choose his successor, which sets the political path.
    Six possible popes, from reformist to reactionary.
  Strength: Weak (tiny, no real army, but enormous soft power)
  Key tension: PAP_conclave — who becomes the next Pope?

MOST SERENE REPUBLIC OF VENICE (VNC):
  Government: Market Liberal oligarchic republic, Doge Giuseppe Volpi
  Territory: Venetia
  Alignment: Leaning Austrian sphere
  Situation: Merchant republic revived from post-war chaos. Great Council
    decides: New Republic (democratic reform) or Old Republic (oligarchy).
    Can be absorbed by ITA, SRI, or SIC — or try to survive independently.
  Strength: Weak (small, but decent navy and trade income)

External dependencies:
- 2nd Weltkrieg (FRA vs GER) -> SRI joins as Internationale, dragging Italy into world war
- Austrian collapse (Balkans crisis) -> ITA breaks free, VNC exposed
- Entente intervention -> SRD gets support to reclaim mainland
- Black Monday (GER economic crisis) -> weakens Austrian grip on ITA

--- CRISIS: THE ITALIAN WARS (Risorgimento) ---

Trigger: Any Italian state takes focus "Consolidate Italy" (ITA_Consolidate_Italy)
  — claims all Italian cores, begins unification war. SIC takes SIC_strike_now
  (requires threat > 0.40). SRI dragged in via faction.
Timing: ~1938-1941 (after internal politics resolve, before/during 2nd Weltkrieg)
Clock: 0——6 (SRI side ← → anti-SRI side)

Sides:
- SRI + Internationale (France, Britain) vs rest of peninsula
- SIC + allies (Entente or Reichspakt, depending on path)
- ITA may attack SRI independently or be pulled in by Austria
- SRD joins whoever promises mainland return
- PAP/VNC consumed by whoever reaches them first

OUTBREAK (d20):
  1-5:   SIC attacks SRI first (SIC_strike_now). War limited to peninsula.
  6-10:  SRI attacks south during 2nd Weltkrieg. France backing.
  11-15: ITA breaks from Austria, attacks SRI. Three-way war.
  16-18: Multiple states attack simultaneously. Full peninsular chaos.
  19-20: War triggered by external event (Austrian collapse or Weltkrieg).

RESOLUTION (d20, rolled when clock hits 0 or 6):
  1-5:   SRI wins — syndicalist Italy, stays in Internationale
  6-9:   SIC wins — Bourbon/Empire Italy (path depends on SIC internal politics)
  10-13: ITA wins — Republican Italy (democratic or ANI nationalist)
  14-16: SRD wins — Savoy restoration, Kingdom of Italy reborn
  17-18: Stalemate — peninsula remains divided, exhausted
  19-20: External power decides (France installs SRI / Germany backs ITA)

Super Event: super.17 — ITALY REUNITED
  Fires when any unifier (SRD/SIC/SRI/ITA) owns all 6 key states
  (Piedmont 158, Lombardy 2, Venetia 117, Emilia 115, Tuscany 159, Lazio 114).
  Sets global flag ITA_reunification. Triggers cascade effects.

Cascade:
- If SRI wins -> Internationale strengthened, Austria loses buffer, +2 tension global
- If SIC wins -> Entente or Reichspakt gains Mediterranean ally, -1 tension
- If ITA wins -> Austrian sphere collapses in Italy, Balkans destabilized
- If SRD wins -> Entente gains major continental ally, Savoy dynasty restored

--- PATHS (post-crisis) ---

SRI VICTORY — SOCIALIST ITALY:
  Before war, 4th Congress (socitaly.10) decides internal path:

  STRENGTHEN DEMOCRACY (SocDem — Giacomo Matteotti):
    1-7: Social Democrat path. Worker-priest movement, rural communes.
         Stability: stable. Foreign: defensive socialism.
  COMMUNIST DAWN (RadSoc — Antonio Gramsci):
    8-12: Radical Socialist. Bordigists expelled, Bukharinist methods.
          Worker councils as basis of revolution. Cultural hegemony.
          Stability: fragile. Foreign: revolutionary export.
  STRENGTHEN THE REPUBLIC (Syndie — Giuseppe Di Vittorio):
    13-17: Orthodox Syndicalism. Gradual industrialization, union power.
           Worker self-management. Congress authority.
           Stability: stable. Foreign: Internationale loyal.
  STRENGTHEN THE CHAIRMAN (Totalist — Benito Mussolini):
    18-20: Totalist path. State atheism, secret police, squadrismo,
           futurist culture. Revolutionary commissars.
           Stability: oppressive but firm. Foreign: aggressive expansionist.

  GARIBALDI COUP (SocLib — Giuseppe Garibaldi II):
    Fires from socitaly.205 option A — bypasses congress entirely.
    Non-socialist path: liberal republicanism, Mazzinian education.
    Can negotiate with Sardinia for Savoy union. Anti-radical purges.
    Stability: fragile early, stabilizes. Foreign: breaks from Internationale.

SIC VICTORY — BOURBON / IMPERIAL ITALY:
  Post-unification branches from SIC_strike_now:

  OLD ORDER CONFEDERATION (SIC_old_order):
    Italian Confederation — loose union preserving regional autonomy.
    Bourbon dynasty rules as first-among-equals. Conservative, decentralized.

  FRATELLI D'ITALIA EMPIRE (SIC_frattelli_ditalia):
    Centralized Italian Empire. Requires SIC_empire flag or Holy Italia.
    Branches: restore royal titles vs direct centralized rule.
    Rewards north/south differently. Roma Caput Mundi — Rome as imperial capital.

  ORGANIC KINGDOM (SIC_organic_kingdom — pre-war path):
    Integralist Catholic monarchy. Dissolve parliament, national Catholicism.
    Must establish before war.

  JULIUS EVOLA (NatPop — SIC_ride_the_tiger):
    Esoteric traditionalist dictatorship. Knights of the Grail, aristocratic
    funding, destroy liberalism. Available if Evola takes power.

  MAFIA TAKEOVER (SIC_mafia_takeover — Calogero Vizzini):
    Organized crime captures the state. Mafia boss rules. Unique path.

  HOLY ITALIA / PAPAL CROWNING (NeoSanfedisti or Pio path):
    Catholic theocratic unification. Pope crowns the king. Requires
    absorbing Papal States. Two sub-paths: Ziggi gang vs Pio gang.

ITA VICTORY — REPUBLICAN ITALY:
  SOCIAL LIBERAL PATH (ITA_REP_social_liberal_victory):
    Democratic consolidation. Protect democracy, contain extremism.
    Banking reform, work programs. Christian Democracy emerges.
    Stability: stable. Foreign: moderate, can join any faction.

  ANI NATIONALIST PATH (ITA_REP_ani_elected — Enrico Corradini):
    Associazione Nazionalista Italiana takes power. Purge reds, Italian
    militarism, corporate alliance. Destroy Austrian influence.
    Centralized power — quasi-fascist corporate state.
    Stability: rigid. Foreign: aggressive irredentist.

  MONARCHY RESTORATION (ITA_REP_king_of_italy — PatAut):
    Habsburg or Savoy prince installed. Fight republicanism, build
    legitimacy. Decentralize, invest in countryside, church ties.
    Stability: fragile. Foreign: depends on dynasty.

SRD VICTORY — SAVOY KINGDOM:
  MARSHAL BADOGLIO PATH (SRD_maresciallo_a_noi — PatAut):
    Military strongman rules. King is figurehead. Cult of the Marshal.
    Stability: authoritarian stable. Foreign: militarist.

  KING COMMANDS (SRD_the_king_commands — AuthDem/PatAut):
    Amedeo I rules directly. Royal absolutism with Church backing.
    Stability: depends on legitimacy. Foreign: Entente loyal.

  DEMOCRATIC PATH (SRD_free_and_fair_elections):
    Elections held. Strengthen democracy vs enforce centralism.
    Parliamentary supremacy restored. Women's suffrage possible.
    Stability: democratic fragile. Foreign: moderate.

--- KEY NPCs ---

Benito Mussolini — SRI Totalist Chairman. Syndicalist turned authoritarian.
  Appears: If Totalist path chosen at 4th Congress.
  If in power: Secret police, squadrismo, futurist state. Most aggressive SRI path.

Giuseppe Garibaldi II — SRI SocLib coup leader. Grandson of THE Garibaldi.
  Appears: socitaly.205 — can seize power on day 1.
  If in power: Breaks SRI from socialism. Mazzinian republic. Can unite with Sardinia.

Antonio Gramsci — SRI RadSoc theorist. Ill but brilliant.
  Appears: 4th Congress RadSoc path. Head of government.
  If in power: Cultural hegemony, worker councils. Intellectual revolution.

Giacomo Matteotti — SRI SocDem leader. Democratic socialist.
  Appears: 4th Congress SocDem path.
  If in power: Most moderate SRI — worker-priests, rural reform.

Giuseppe Di Vittorio — SRI Syndie Chairman. Trade union boss.
  Appears: Starting leader, keeps power if Syndicalist path chosen.
  If in power: Orthodox syndicalism. Gradual, union-centered governance.

King Ferdinando III — SIC Bourbon monarch. Conservative traditionalist.
  Appears: Starting leader of Two Sicilies.
  If in power: Status quo Bourbon rule. Can found Italian Empire.

Julius Evola — SIC NatPop esoteric philosopher. Ride the Tiger.
  Appears: If NatPop gains power in Two Sicilies.
  If in power: Aristocratic occultism, Knights of the Grail. Bizarre and dangerous.

Calogero Vizzini — SIC Mafia boss. Don of Dons.
  Appears: If Mafia takeover occurs.
  If in power: Criminal state. Patronage networks replace institutions.

Ivanoe Bonomi — ITA SocDem PM. Manages Austrian dependency.
  Appears: Starting leader of Republic of Italy.
  If in power: Moderate democrat trying to navigate between Austria and nationalism.

Enrico Corradini — ITA NatPop ANI leader. Aggressive nationalist.
  Appears: If ANI wins elections in Republic of Italy.
  If in power: Corporate militarism, purge opposition, destroy Austrian influence.

King Amedeo I — SRD Savoy monarch. Explorer-King of Sardinia.
  Appears: Starting head of state in Sardinia.
  If in power: Legitimate Savoy dynasty claim to all Italy.

Pietro Badoglio — SRD Marshal. Military junta strongman.
  Appears: Starting PM of Sardinia. SRD_maresciallo_a_noi path.
  If in power: Military dictatorship with royal rubber stamp.

Pope Pius XI — PAP dying Pope. Sets up the conclave.
  Appears: Starting leader. Dies, triggering PAP_conclave.
  Conclave outcomes: John XXIII (reform), Benedict XVI (moderate), Leo XIV (welfare),
    Pius XII (traditional), Adrian VII (populist), Julius IV (militant crusader).

--- PAPAL CONCLAVE (sub-crisis) ---

Trigger: Pius XI dies (early game). PAP_conclave fires.
Six possible popes — each unlocks different focus branch:

CONCLAVE RESULT (d20):
  1-4:   John XXIII — reformist. Help the poor, relinquish temporal power.
  5-8:   Benedict XVI — moderate. New Deal for Rome, economic focus.
  9-11:  Leo XIV — welfare state. Social programs, ecclesiastical focus.
  12-14: Pius XII — traditionalist. Traditional values, fight corruption.
  15-17: Adrian VII — populist. Romano-populism, call the faithful.
  18-20: Julius IV — militant. Holy War focus. Crusader pope.

If SRI conquers Rome: SRI_fate_of_the_pope focus fires. Pope's fate depends
  on which SRI path is in power (reconcile, exile, or suppress).

--- REGIONAL FLAVOR ---

Atmosphere: Church bells across the Mezzogiorno, red flags over Milan's factories,
  Austrian officers drinking coffee in Brescia cafes, fishermen in Venice ignoring
  politics while the Great Council debates.
Technology: Italian auto industry (SIC_sicilian_auto_industry), naval engineering,
  light armor and mountain infantry (Arditi, Alpini). Enrico Fermi researching
  nuclear physics in the SRI.
Civilian life: North — factory workers, union meetings, French-style revolutionary
  culture. South — peasant farming, Church dominance, Mafia protection rackets.
  Center — Austrian occupation, resentment, café conspiracies.

--- CASCADE TABLE ---

Events HERE that affect OTHER regions:

| Event | Affects | Effect |
|-------|---------|--------|
| SRI wins (syndicalist Italy) | France/Internationale | Major Internationale boost, +2 global tension |
| SRI wins | Austria/Balkans | Austrian buffer lost, Balkans destabilized |
| SIC wins (Bourbon empire) | Entente/Mediterranean | Entente gains Med ally, Gibraltar secured |
| ITA wins (breaks from Austria) | Austria/Balkans | Austrian sphere collapses, triggers Illyria crisis |
| SRD wins (Savoy restoration) | Entente/Canada | Entente continental foothold, reclamation boosted |
| Garibaldi coup in SRI | Internationale | SRI leaves Internationale, France loses major ally |
| Evola takes SIC | Mediterranean | NatPop Mediterranean bloc possible |
| Mafia takeover SIC | Global crime | Underworld networks expand across Med |
| Pope killed/exiled | Global Catholic | Catholic nations react, opinion shifts worldwide |
| Italy reunites (super.17) | Global | Super event. All factions recalculate. Med balance shifts. |

================================================================
================================================================
SPAIN — Crossroads of chaos, three-way civil war, gateway to the Mediterranean
================================================================

--- STARTING STATE (1936) ---

Government: Kingdom of Spain, AuthDem. King Alfonso XIII (comatose),
  de facto ruled by Head of Government J.M. Gil-Robles Quinones.
Situation: Spain avoided the Weltkrieg but never recovered from it. Alfonso XIII
  clings to power through military strongmen while the country fractures. Black
  Monday (German stock crash) hits Spain hard. Social breakdown is endemic --
  Carlists control the Basque north, CNT-FAI anarchists hold Catalonia and
  industrial zones, republicans and socialists agitate in the cities. Separatism
  rising in Catalonia, Basque Country, and Galicia. The Rif in Morocco smolders.
Alignment: Unaligned (historically neutral, Germanophile aristocracy, Anglophile
  liberals, pro-Austrian Catholics all pull in different directions)
Key tension: Balance of Power mechanic -- kingdom destabilizes toward civil war
  unless the player/GM stabilizes it through political maneuvering.

Starting national spirits: Social Breakdown, Memories of the Republic,
  No Food, Scars of '98, Rising Separatism.

External dependencies:
- Black Monday (Germany) -> triggers economic crisis tree, accelerates instability
- Commune of France -> may support CNT-FAI with arms, advisors, volunteers
- 2nd Weltkrieg -> Kingdom or Carlists can join Entente/Reichspakt/own faction
- Entente (Canada/NatFrance) -> Carlists may join; Portugal as neighbor matters

--- FACTIONS ---

KINGDOM (SPR): Kingdom of Spain
  Leader: Alfonso XIII (AuthDem) -- aging, ill, increasingly comatose
  De facto: Gil-Robles Quinones (head of government, Christian democrat)
  Ideology: AuthDem (starting), spans SocCon to PatAut
  Territory: All of mainland Spain + Spanish Morocco at start
  Strength: Medium (largest army, but outdated, divided loyalties)
  Goal: Stabilize the kingdom, survive Black Monday, prevent civil war.

CARLISTS (CAR): Carlist Pretender movement
  Leader: Javier I de Borbon-Parma (PatAut, Carlism subtype)
  Ideology: PatAut/NatPop (traditionalist Catholic monarchism)
  Territory: Navarre, Basque Country, parts of Old Castile (pre-war strongholds)
  Strength: Medium (fanatical requete militias, but limited industrial base)
  Goal: Replace the liberal Bourbon dynasty with the Carlist line. Restore
    traditional Catholic monarchy with fueros (regional charters).

CNT-FAI (CNT): Confederacion Nacional del Trabajo / Federacion Anarquista Iberica
  Leader: Comite Central de la CNT-FAI (collective leadership, Syndie)
  Key figures: Juan Garcia Oliver, Angel Pestana, Juan Peiro, Joaquin Ascaso
  Ideology: Syndicalist / RadSoc (anarcho-syndicalism)
  Territory: Catalonia (Barcelona), industrial zones, Andalusia
  Strength: Weak-Medium (mass popular support, poor equipment, militia armies)
  Goal: Social revolution. Collectivize industry, abolish the state, build
    anarchist communes across Iberia.

REPUBLICANS (emerge from Kingdom destabilization):
  Leaders: Manuel Azana Diaz (SocDem), Niceto Alcala-Zamora (SocCon),
    Alejandro Lerroux (MarLib), Diego Martinez Barrio (SocLib)
  Ideology: SocDem to MarLib (democratic republicanism)
  Territory: Emerge from Kingdom if republic path taken
  Goal: End the monarchy, establish a democratic Spanish Republic.

--- CRISIS: SPANISH CIVIL WAR ---

Trigger: Kingdom's Balance of Power mechanic collapses -- instability pushes
  past threshold, or player deliberately takes "La Sublevacion" (revolt) path.
  Can be AVOIDED if kingdom successfully navigates the BoP minigame.
Timing: ~1937-1938 (earlier if destabilized, never if stabilized)
Clock: 0------6 (Kingdom stability. 0 = war breaks out. 6 = crisis averted.)

OUTBREAK (d20):
  1-5:   Civil war averted -- Kingdom stabilizes through reform or repression.
         Alfonso abdicates. Skip to post-war governance paths directly.
  6-10:  Limited civil war -- Two sides only. Either CNT or Carlists suppressed
         pre-war (SCW_no_CNT or SCW_no_CAR flags set).
  11-17: Full three-way civil war -- Kingdom vs Carlists vs CNT-FAI.
         Alfonso falls into coma. Sanjurjo or Gil-Robles leads Kingdom.
         Catalonia and Rif may revolt mid-war (extra breakaway states).
  18-20: Worst case -- Three-way war PLUS Catalan revolt, Rif revolt,
         and foreign intervention (France backs CNT, Entente backs Carlists).

Alfonso's abdication (sprc.8, during civil war prelude):
  Kingdom led by Jose Sanjurjo (PatAut, military junta, 70%) or
  Gil-Robles Quinones (AuthDem, civilian government, 30%).

Sides: SPR (Kingdom) vs CAR (Carlists) vs CNT (Anarchists). All three at war
  with each other simultaneously. Each tries to annex the others.

RESOLUTION (d20, rolled when clock hits 0 or 6):
  1-7:   Kingdom wins -- SPR annexes CAR and CNT territories
  8-12:  CNT-FAI wins -- Anarchists/syndicalists control Spain
  13-17: Carlists win -- Traditionalist Catholic monarchy restored
  18-20: Prolonged stalemate / external power intervenes decisively

Cascade:
- If CNT wins -> Commune of France gains ally on southern flank. Internationale
  strengthened. Portugal threatened. Tension +2 global.
- If Carlists win -> May form Latin Union (Mediterranean Bloc) or join Entente.
  Tension +1 Iberia. Counter-weight to Internationale on southern front.
- If Kingdom wins -> Flexible alignment. May join Reichspakt, Entente, Austria,
  form Hispanic Alliance, or stay neutral. Tension +0 (status quo maintained).
- Spanish Civil War itself -> Tension +1 global regardless of outcome.

--- PATHS (post-crisis) ---

KINGDOM VICTORY PATH:
  Alfonso abdicates. Successor chosen:

  SUCCESSOR (d20 or player choice):
    1-10:  Juan III -- younger, modernizing, open to reform
    11-20: Jaime I -- older, more conservative, Bourbon legitimist

  GOVERNANCE (sprd.99, the Question of the Monarchy):
    1-10:  Constitutional Monarchy -- King reigns, parliament governs.
           Elections held. Parties: PSOE (SocDem), Izquierda Republicana (SocLib),
           Partido Nacionalista Espanol (SocCon/AuthDem), Market Liberals.
           Internal stability: Fragile but improving.
    11-17: Absolute Monarchy -- King rules directly. State Catholicism.
           New Spanish Nationalism enforced. Separatism crushed.
           Sub-paths: Traditionalist theocracy or military-backed autocracy.
           Internal stability: Stable through repression.
    18-20: Military Junta -- Separatist revolt triggers army coup.
           King flees. General takes over (one of 7 possible caudillos).

  JUNTA LEADERS (sprd.118, if junta path triggers):
    Jose Sanjurjo (PatAut, junta) -- old-guard military strongman
    Jose Millan-Astray (NatPop, legionario) -- founder of the Spanish Legion
    Emilio Mola (PatAut, costismo) -- "the Director," master planner
    Camilo Alonso Vega (NatPop, militarism) -- hardline nationalist
    Francisco Franco Bahamonde (PatAut, junta) -- Africa veteran, calculating
    Juan Yague (PatAut, hispanism) -- "Butcher of Badajoz," aggressive
    Jose Antonio Primo de Rivera (PatAut, oligarchy) -- Falange founder's son

  FOREIGN POLICY (all Kingdom paths):
    - Join Reichspakt (ally Germany against Internationale)
    - Join Entente (ally Canada/NatFrance for reclamation war)
    - Join Donau-Adriabund (ally Austria, Catholic solidarity)
    - Form Hispanic Alliance (own faction with Latin America)
    - Stay neutral / profiteer from 2nd Weltkrieg
    - Bourbon Throne claim on France (Jaime I only -- becomes Henri VI,
      claims French throne, can conquer France and form Franco-Spanish kingdom)

CNT-FAI VICTORY PATH:
  Post-victory Congress of Iberian Socialists (sprc.602):

  GOVERNANCE (d20 or player choice):
    1-10:  CNT path (Syndicalist) -- anarcho-syndicalist Spain.
           Sub-branch: Anarchist Revolution (home rule, collectivized factories,
           decentralized communes) vs Red Nation State (centralized, planned
           economy, national union under syndicalist party).
    11-20: PSOE path (RadSoc) -- radical socialist Spain under PSOE leadership.
           Totalist/Syndicalist/RadSoc coalition.

  Both paths then branch:
    Oppress Opposition vs Reconcile Opposition
    -> Popular Front -> Anticlerical reforms, Women's rights
    -> Social Revolution (decentralize) vs Strong Government (centralize)
    -> Beacon of Socialism (final goal)

  FOREIGN POLICY:
    - Join Commune of France / Third Internationale (natural ally)
    - Join French war against Germany (declare war on Reichspakt)
    - Conquer Portugal (spread revolution to Iberia, form Iberian Union)

  Internal stability: Fragile (monarchist resistance idea, social breakdown)

CARLIST VICTORY PATH:
  Restauracion -- Carlist Restoration under Javier I.

  GOVERNANCE:
    Dios (God) -> Patria (Fatherland) -> Rey (King) -> Fueros (Charters)
    -> National Catholicism + Cortes Espanolas -> Viva el Rey
    Branch: Crush Opposition (war support) vs Reconciliation (stability)
    Economy: Rebuild railroads, electrification, military investment.

  FOREIGN POLICY (mutually exclusive):
    1-10:  Join Entente -- ally with Canada/NatFrance/Portugal.
           Iberian trade, French/Canadian military advisors, Latin Economic Union.
    11-20: Form Latin Union (Mediterranean Bloc) -- own faction.
           Invite Italy (Two Sicilies/Sardinia), Austria OR Illyria (Croatia),
           Portugal. Catholic Mediterranean alliance independent of great powers.

  Internal stability: Stable (theocratic legitimacy, but narrow political base)

--- KEY NPCs ---

Alfonso XIII -- King of Spain. Ill, comatose by civil war. Symbol of old order.
  Appears: Starting leader. Abdicates during/after crisis.
  If removed: Succession crisis between Juan and Jaime.

Jose Sanjurjo -- Field Marshal. "The Lion of the Rif." Politically connected.
  Appears: Leads Kingdom in civil war (70% chance). Junta leader option.
  If in power: Military dictatorship, aggressive but competent.

J.M. Gil-Robles Quinones -- Head of Government. Christian democrat, admirer of Dollfuss.
  Appears: Starting HoG. May lead Kingdom in civil war (30% chance).
  If in power: Managed democracy, pro-Austrian leanings.

Juan III -- Infante Juan. Younger Bourbon heir, modernizer.
  Appears: Post-civil-war succession event.
  If in power: Constitutional monarchy likely. Reform-minded.

Jaime I / Henri VI -- Infante Jaime. Deaf, overlooked, but tenacious legitimist.
  Appears: Post-civil-war succession event.
  If in power: Can claim French throne. Bourbon Restoration of France possible.

Javier I de Borbon-Parma -- Carlist pretender. Traditionalist Catholic.
  Appears: Carlist leader throughout. Starting leader of CAR tag.
  If in power: Theocratic monarchy, fueros restored, National Catholicism.

Francisco Franco Bahamonde -- Military officer, Africa veteran.
  Appears: Junta path option (sprd.118). Not guaranteed to appear.
  If in power: PatAut military junta. Calculating, pragmatic strongman.

Comite Central de la CNT-FAI -- Collective anarchist leadership.
  Appears: CNT starting leader. Governs by committee.
  If in power: Anarcho-syndicalist revolution. No individual head of state.

Angel Pestana -- Syndicalist moderate, treintista faction.
  Appears: CNT minister, possible republic-path figure.
  If in power: More moderate syndicalism, willing to compromise.

Manuel Azana Diaz -- Liberal republican intellectual.
  Appears: SocDem leader for Kingdom. CNT SocDem leader option.
  If in power: Democratic republic, progressive reforms.

--- REGIONAL FLAVOR ---

Atmosphere: Dusty Castilian plains under merciless sun. Barcelona's industrial
  smokestacks and red-black anarchist banners. Church bells in Navarre competing
  with gunfire. Olive groves burned as battle lines shift through Andalusia.
Technology: Obsolete Great War surplus. Light tanks (Gatito), basic infantry.
  Spain's industry is underdeveloped -- textiles in Barcelona, metallurgy in
  Bilbao, everything else is agriculture. Hispano-Suiza aviation potential.
Civilian life: Rationing even before the war. Workers in Barcelona dream of
  revolution while peasants in Castile pray for rain. Separatist graffiti in
  Catalan and Basque. Refugees crowd Madrid as fighting approaches.

--- CASCADE TABLE ---

Events HERE that affect OTHER regions:

| Event | Affects | Effect |
|-------|---------|--------|
| CNT wins civil war | France/Internationale | +1 ally on southern front. Stronger 2WK position. |
| CNT joins Internationale | Germany/Reichspakt | Southern front opens. Spain enters 2WK vs Germany. |
| CNT conquers Portugal | Entente | Entente loses Portuguese base. Iberian Union formed. |
| Carlists win, join Entente | Entente/Canada | Additional army for reclamation. Mediterranean secured. |
| Carlists form Latin Union | Italy/Balkans | New faction: Spain + Two Sicilies + (Austria or Illyria). Mediterranean bloc. |
| Kingdom joins Reichspakt | Germany | Southern ally. Gibraltar fortified. Mediterranean access. |
| Kingdom joins Entente | Canada/NatFrance | Iberian base for Entente operations. |
| Jaime I claims France | France/NFA | Bourbon restoration of France if Spain conquers it. Franco-Spanish union. |
| Kingdom stays neutral | Global | War profiteering. Spain as hive of intrigue. No cascade. |
| Civil war breaks out | Global | Tension +1. Volunteers and arms flow. Proxy war for great powers. |
| Separatist revolts | Spain internal | Basques, Catalans, Galicians, Rif -- up to 4 breakaway states. |

================================================================
================================================================
MEXICO — Revolutionary republic on the brink of civil war
================================================================

--- STARTING STATE (1936) ---

Government: RadSoc revolutionary republic under Emiliano Zapata (aging, ill)
Situation: Zapata's agrarian revolution held since 1920 but the caudillo is
  dying. Assassination attempt triggers succession crisis. Gold Shirts (fascist
  paramilitaries), Calles loyalists, Cristeros, and army officers all circle.
  Post-revolutionary economy debilitated.
Alignment: Unaligned (left-leaning, sympathetic to Internationale)
Key tension: Zapata's assassination/survival triggers political crisis

External dependencies:
- USA civil war -> Mexico can launch Reconquista (Texas, California, WCC)
- Internationale -> Syndicalist/RadSoc Mexico can join
- Entente -> Right-wing Mexico can align via trade

--- FACTIONS ---

ZAPATISTAS: Emiliano Zapata — dying revolutionary, "Tierra y Libertad." RadSoc. Medium.
PNR/MAXIMATO: Plutarco Elias Calles — "Jefe Maximo," controls party/CROM. Totalist. Strong.
DEMOCRATIC LEFT: Various candidates elected in 1937 elections. Syndie/RadSoc/SocDem. Medium.
GOLD SHIRTS (ASA): Nicolas Rodriguez Carrasco — fascist paramilitary. NatPop. Weak-medium.
CRISTEROS: Catholic insurgents from Cristero War aftermath. NatPop. Weak.
MILITARY JUNTA: Pablo Gonzalez Garza / Felix Diaz / Juan Barragan. PatAut. Strong.
PCM: Vicente Toledano — "The Lenin of the West," orthodox Marxist. Totalist. Weak.

--- CRISIS: Zapata's Assassination ---

Trigger: MEX_fateful_day fires immediately. Assassination attempt on Zapata.
Timing: ~early 1936. Clock: 0——6

OUTBREAK (d20):
  1-8:   Zapata SURVIVES — martial law, crackdowns, then elections
  9-20:  Zapata SLAIN — Eufemio takes over temporarily, power vacuum

RESOLUTION (d20, if Zapata dies):
  1-4:   CALLES SEIZES POWER — one-party totalist Maximato state
  5-8:   DEMOCRACY SURVIVES — elections: Syndicalist / RadSoc / SocDem winner
  9-12:  GOLD SHIRTS COUP — NatPop counter-revolution
  13-16: MILITARY JUNTA — Garza or Diaz/Barragan take control
  17-18: CRISTERO UPRISING — Catholic insurgents exploit chaos
  19-20: PCM TAKEOVER — Toledano's communists seize power

--- PATHS (post-crisis) ---

CALLES/MAXIMATO (Totalist): "Perfect Dictatorship" — one-party state, state
  atheism, secret police (DFS), CROM controls labor. When Calles dies:
  d20: 1-7 Cardenas (reformer), 8-14 Portes Gil (party man), 15-20 Trevino (strongman).

DEMOCRATIC REPUBLIC (Syndie/RadSoc/SocDem): Three parallel governance trees:
  Syndicalist — unions, CGT, industrial democracy. RadSoc — land reform, ejidos,
  "Tierra y Libertad." SocDem — moderate reform, trade, "Bread and Roses."
  Converge at "Stable Democracy," then second-term elections. Stable.

PCM/TOLEDANO (Totalist — Communist): Planned economy, state atheism, mass purges.
  Five tracks: industrialization + anti-church + purge democrats + crush Gold
  Shirts + eliminate opposition = "Heir to Karl Marx." Can ally Soviet Russia.

MILITARY JUNTA (PatAut): Garza -> Imperial Presidency (neo-Porfiriato) OR
  military junta. Diaz/Barragan -> Porfiriato legacy or Generalissimo.
  Laissez-faire economics, free trade, Entente alignment.

GOLD SHIRTS / SYNARCHIST-INTEGRALIST (NatPop): Three-way NatPop split:
  Abascal (Catholic organicist) / Vasconcelos (integralist intellectual) /
  Urquiza (synarchist populist). Then MONARCHY vs REPUBLIC:
  Monarchy: Synarchist Empire or Organic Empire. Republic: Synarchist or Integralist.

CRISTERO (NatPop — Catholic): "Viva Cristo Rey" — undo anti-clerical laws,
  Knights of Columbus, Our Lady of Guadalupe. Religious liberty vs state Catholicism.

--- CRISIS: The Reconquista ---

Trigger: USA_civil_war_begun_flag. Timing: ~1937-1940 (during 2ACW)
Available targets: California, West Coast Confederation, Texas.
After conquest: Anglo Rebellion — conquered Americans resist. Policy choices on
  language, religion, women's rights, native relations.

--- KEY NPCs ---

Emiliano Zapata — President. Dying agrarian revolutionary, "Tierra y Libertad."
Plutarco Elias Calles — "Jefe Maximo." Cold operator, state atheist.
Lazaro Cardenas — General/politician. Pragmatic reformer if succeeds Calles.
Vicente Toledano — "Lenin of the West." Orthodox Marxist, planned economy.
Pablo Gonzalez Garza — Military strongman. Neo-Porfiriato or managed democracy.
Felix Diaz Prieto — Nephew of Porfirio Diaz. Revives Porfiriato.
Juan Barragan Rodriguez — Generalissimo path. Military hero cult.
Salvador Abascal — NatPop "Student." Catholic organic state.
Jose Vasconcelos — NatPop "Teacher." Integralist philosopher-king.
Jose Antonio Urquiza — NatPop "Firebrand." Synarchist populist.

--- REGIONAL FLAVOR ---

Atmosphere: dust-choked plazas with faded revolutionary murals; silenced church
  bells echoing off volcanic stone; oil derricks on the Gulf coast.
Technology: aging WWI rifles, cavalry still dominant; oil is critical resource.
Civilian life: ejidos feed villages; cities swell with workers; Catholic devotion
  persists underground despite state atheism.

--- CASCADE TABLE ---

| Event | Affects | Effect |
|-------|---------|--------|
| Mexico joins Internationale | USA (CSA) | Southern syndicalist ally |
| Reconquista launched | USA civil war | Additional front, territory lost |
| Right-wing Mexico | Entente | New ally in Americas, trade |
| Cristero victory | Central America | Catholic pressure on neighbors |
| PCM-Russia alliance | Global | New communist axis |


================================================================
CENTRAL AMERICA + CARIBBEAN — Banana republics in the shadow of giants
================================================================

--- STARTING STATE (1936) ---

Central America: Guatemala, Honduras, El Salvador, Nicaragua, Costa Rica, Panama.
  Various authoritarian governments. Federation attempts simmer.
Cuba: Contested election triggers Havana General Strike. Three-way split imminent.
Haiti: Under international commission. Education and legislature reform.
West Indies: British Caribbean federation under Canadian/Entente influence.
Dominican Republic: Strongman politics, multiple authoritarian paths.
Alignment: Mixed (Entente sphere for West Indies; unaligned for most)
Key tension: 2ACW removes US hegemony, opens Caribbean power vacuum

External dependencies:
- 2ACW -> removes US hegemony, power vacuum in Caribbean
- Canada/Entente -> West Indies tied to dominion system
- Mexico -> left-wing Mexico pressures CA leftward
- Internationale -> Cuba can go syndicalist and join

--- CENTRAL AMERICAN FEDERATION (CEN) ---

Trigger: Individual CA nations unite through revolution/negotiation.
Congress determines ideology through event-driven votes.

GOVERNANCE (d20 after Federation forms):
  1-5:   Totalist — chairman empowered, state atheism, centralized army
  6-10:  Syndicalist — congress empowered, militias retained
  11-15: RadSoc — agrarian breadbasket, people's elections
  16-20: SocDem — modernization, congress elections

Sub-choices: Empower Chairman vs Congress; Army vs Militias;
  Breadbasket vs Industry; People's vs Congress Elections.
All paths can join Third Internationale.

Individual nations (~3000 lines each) have local politics converging on
Federation question. Panama has US canal zone dynamics.

--- CRISIS: Cuba — Havana General Strike ---

Trigger: CUB_general_election. Rigged election sparks strike.
Timing: ~1936-1937. Clock: 0——6

Candidates: Trejo / Barnet / Mendieta

OUTBREAK (d20):
  1-6:   STRIKE CRUSHED — military/conservative rule
  7-14:  CHAOS — three-way split:
         Leftists win -> socialist Cuba (Syndie/RadSoc)
         Military restores order -> Tamayo (PatAut)
         Strike expands further -> full takeover
  15-20: STRIKE EXPANDS — leftist victory, socialist Cuba

LEFT-WING CUBA: Coalition splits into Agrarianism (RadSoc, Mella's land reform)
  vs Syndicalist Industrialization. Then: seize assets -> land reform ->
  collectivization. Moderate vs extensive variants.

MILITARY CUBA: Tamayo Steps In -> PatAut. Crush leftists.

--- HAITI / WEST INDIES / DOMINICAN REPUBLIC ---

HAITI (~5300 lines): Under international commission. Education reform tree
  (schools, universities, vocational academies). Political crisis: Status of
  Legislature — Reform Council vs Mixed Council vs Dismiss Foreigners.

WEST INDIES (~5900 lines): British Caribbean federation. Federation structure,
  Entente relationship (dominion vs independence), economic model. Multiple
  mutually exclusive governance/foreign alignment paths.

DOMINICAN REPUBLIC (~3900 lines): Strongman politics, multiple authoritarian
  paths. Tied to Cuba/Haiti outcomes and broader Caribbean alignment.

--- KEY NPCs ---

Julio Antonio Mella — Cuban revolutionary. RadSoc agrarian faction leader.
Tamayo — Cuban military officer. PatAut if military wins.

--- CASCADE TABLE ---

| Event | Affects | Effect |
|-------|---------|--------|
| CA Federation forms | Mexico, Caribbean | Regional power, Internationale foothold |
| Cuba goes socialist | Caribbean, Internationale | Syndicalist Caribbean base |
| 2ACW begins | All Caribbean | US hegemony collapses |
| West Indies independence | Canada/Entente | Dominion loss |


================================================================
AUSTRALASIA + NEW ZEALAND — Dominions in crisis
================================================================

Note: Canada covered in france-britain.md. This section covers Australasia,
New Zealand, and Socialist Canada trigger conditions.

--- AUSTRALASIA (AST) — STARTING STATE (1936) ---

Government: SocDem (Labor), Entente dominion under Canadian authority
Situation: Depression-era politics. Labor fractured between mainstream and
  radical Lang wing. "White Army" (All for Australia League, far-right) and
  "Reds" (Socialist Labor Party) threaten from both extremes.
Alignment: Entente (Canadian dominion)
Key tension: Labor splits -> White Army coup OR Red revolution possible

External dependencies:
- Britain restored -> Australia returns to British sphere
- Canada collapses/goes socialist -> independence or drift
- 2nd Weltkrieg -> Pacific theater involvement
- Japan -> Pacific threat

--- FACTIONS ---

LABOR: Multiple sub-factions. Mainstream (Lyons/Theodore plans) vs Lang Labor
  (radical populist — refuses debt to Canada, "Goods Standard," breaks upper
  house). Three election cycles deepen welfare state. SocDem. Strong.

NATIONALIST PARTY: Conservative. "Government as a Business." Sub-paths: Hughes
  (abolish councils), Ley (corruption), Menzies (forgotten people). MarLib. Medium.

COUNTRY PARTY: Rural conservatives. Agricultural subsidies, farmer power. SocCon. Medium.

WHITE ARMY (All for Australia League): Far-right paramilitaries. If coup succeeds:
  entire democratic tree locked (AST_whites_focus_move). Authoritarian governance.
  AuthDem/PatAut/NatPop. Weak-medium (needs crisis).

RED AUSTRALIA (Socialist Labor Party): Revolutionary left. If SLP wins upset:
  entire democratic tree locked (AST_red_focus_move). Syndicalist revolution.
  "Awaken the Red North" + "Trades Hall Reds." RadSoc/Syndie. Weak.

--- CRISIS: Australian Political Crisis ---

Trigger: Elections cycle through 3 rounds. Events can trigger coup/revolution.
Timing: ~1936-1942. Clock: 0——6

OUTBREAK (d20):
  1-10:  DEMOCRACY HOLDS — Labor or Nationalist victories cycle normally
  11-14: WHITE ARMY COUP — All for Australia League seizes power
  15-17: RED REVOLUTION — Socialist Labor Party wins upset
  18-20: LANG BREAKS FREE — radical program, semi-independent from Entente

--- NEW ZEALAND (NZL) ---

Government: SocDem (Labour), Entente dominion. Similar to Australia but smaller.

LABOUR PATH (3 election cycles): Compulsory unionism, unemployment relief,
  housing, education, conscription, Maori social act.
  Backbench Revolt: John A. Lee or Bellamyists can split from mainstream.
  Lee: seizes party reins, debt-free currency. Bellamy: utopian economics.

CONSERVATIVE/LEGION PATH: "The Legion Takes Hold" — right-wing organization.
  Three economic sub-paths (mutually exclusive): Laissez-faire / Social Credit /
  Keynesian. Then Reform Party dominance through two phases.

--- SOCIALIST CANADA ---

Trigger: has_global_flag = CAN_became_socialist (set when syndicalists conquer
  or infiltrate Canada, typically after CSA victory in 2ACW)

Congress of Canadian Socialists determines ruling faction (~10+ outcomes):
  FPU (Fishermen's Union) / CPC (Communists) / Venerate Coaker / Moderate
  Maximists / Eternal Revolution / Maple Syrup Communism / Workers Popular
  Front / Industrial Unionism / Craft Unionism / Impossibilism / Canada
  Forward / Communist Transformation / Come Farmer Soldier Labourer.

Reconstruction chain: Burn Royal Portraits -> Fate of RCMP -> Smash
  Establishment -> Eradicate Imperialists -> Socialist Constitution.
  Reactionary Resistance debuff decreases through purge chain.
  Light vs heavy policy for dealing with liberals and tories.

--- KEY NPCs ---

Jack Lang — Australian Labor radical. Refuses debt to Canada, "Greater than Lenin."
Robert Menzies — Nationalist. "Forgotten people" conservative.
Jock Garden — RadSoc leader. Heads Socialist Labor Party.
William Coaker — Canadian FPU leader. Newfoundland populist.

--- CASCADE TABLE ---

| Event | Affects | Effect |
|-------|---------|--------|
| Red Australia | Internationale, Japan | Entente loses Pacific anchor |
| White Australia | Entente | Hardline anti-syndicalist Pacific power |
| Lang breaks free | Canada/Entente | Dominion crisis |
| Socialist Canada | Britain/Entente | Exile movement collapses |


================================================================
PERSIA — Qajar dynasty between throne and revolution
================================================================

Note: Cairo Pact war context, Ottoman vassal status, and regional war dynamics
covered in ottoman-mideast.md. This section covers INTERNAL political paths.

--- STARTING STATE (1936) ---

Government: Qajar monarchy under Ahmad Shah Qajar (ill, dying)
Situation: Shah dies -> succession crisis. Hassan Mirza Qajar to inherit, but
  revolutionary movement challenges monarchy. Corrupt aristocrats control
  bureaucracy. Ottoman suzerainty constrains foreign policy.
Alignment: Unaligned (Ottoman vassal / independent depending on events)
Key tension: Ahmad Shah's death -> monarchy vs revolution

External dependencies:
- Cairo Pact War (AXIS_VICTORY) -> expansion only after Ottoman collapse
- Russia -> left-wing Persia can align with Soviets
- Armenia -> possible alliance for Azerbaijan campaign

--- CRISIS: Death of Ahmad Shah ---

Trigger: PER_shah_is_dead_press_f. Timing: ~1936-1937.

RESOLUTION (d20):
  1-10:  MONARCHY SURVIVES — two sub-paths:
    1-5:  Constitutional Monarchy — reinforced constitution, Majlis cooperation,
          court reforms, limit aristocrats. AuthDem. Stable.
    6-10: Absolute Monarchy — "Wrath of the Lion," enforced loyalty, "Never
          Again," autocratic constitution. PatAut. Stable.
  11-20: REVOLUTION — republic declared. Two sub-paths:
    11-15: SocDem Republic — strong parliament, uproot aristocrats. "Beacon
           of democracy in the Middle East." Stable.
    16-20: RadSoc Revolution — then sub-choice:
           Evolution (integrate bourgeoisie, gradual) vs Revolution (purge
           bourgeoisie, costly). "Beacon of socialism in Middle East."

--- FOREIGN EXPANSION (all paths, post-Cairo Pact War) ---

Available after AXIS_VICTORY flag:
- Azerbaijan: claim Azeri lands (possible Armenia alliance)
- Bahrain: Persian Gulf islands (needs navy)
- Iraq (monarchy paths): claim Iraqi Arab lands
- Afghanistan (monarchy): full annexation -> then Tajikistan/Central Asia
- Anti-imperialism (republic paths): war with Delhi/British holdings

Monarchy paths use "Agha Khan Legacy" as foreign policy anchor.
Republic paths use "Mideast Democracy" or "Mideast Communism."

--- KEY NPCs ---

Ahmad Shah Qajar — dying Shah. Trigger for everything. Never playable.
Hassan Mirza Qajar — successor. Constitutional reformer or absolute autocrat.

--- REGIONAL FLAVOR ---

Atmosphere: crumbling Qajar palaces; bazaars thick with intrigue; Khuzestan oil
  fields drawing foreign eyes; Zoroastrian ruins alongside mosques.
Technology: minimal industry; foreign-equipped army; oil extraction by outsiders.
Civilian life: tribal periphery, urban modernization in Tehran; aristocratic
  corruption; mullahs and merchants compete.

--- CASCADE TABLE ---

| Event | Affects | Effect |
|-------|---------|--------|
| Persia invades Azerbaijan | Russia, Caucasus | Multi-power crisis |
| Persia invades Iraq | Egypt, Ottoman remnants | EGY-PER confrontation |
| Socialist Persia | Russia, India | Left-wing Middle East bloc |
| Persia conquers Afghanistan | Central Asia, India | Major regional expansion |
