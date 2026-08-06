# BATTLETECH

Feudal space opera. MechWarrior aristocrats. Your mech IS your soul. Politics and giant robots. For: house warfare, mercenary drama, Solaris gladiators, Clan honor trials.

> **LANGUAGE:** Preferred session language is **Russian**. This ruleset is stored in English for token efficiency only.

---

## BASE SYSTEM

Uses gm-skill.md core mechanics:
- d20 + stat vs DC (margin-based: Crit.Fail / Fail / Partial / Success / Crit)
- Six stats: STR, DEX, CON, INT, WIS, CHA
- Clocks, Heroism, Companions, Abilities — all from base
- Writing style, response format, player rules — all from base

**This ruleset adds:** The Sync, Honor, Mech-as-Soul, Heat, Dueling, Court Intrigue, Contracts.

**Do not duplicate base mechanics.** If gm-skill covers it, use it as-is unless this ruleset explicitly overrides.

---

# PART I: THE SYNC

---

## THE SYNC

Your BattleMech is not a vehicle. It is a phantom limb, an iron ghost, the other half of your nervous system. The neurohelmet bridges flesh to ferro-steel. At high Sync, you do not pilot a mech — you ARE a mech. And when it bleeds, so do you.

```
THE SYNC: 0 ————————————→ 10
          Disconnected     Dissolved
```

### How The Sync Grows

The Sync grows when you **choose the mech over yourself**.

```
+1 SYNC:
- Win combat inside your mech
- Spend downtime maintaining/customizing your mech
- Take damage and stay in the fight (refuse ejection)
- Choose your mech over a person in a crisis
- Name a component, talk to it, personalize the cockpit

+2 SYNC:
- Override safety protocols to push performance
- Take crippling mech damage and keep fighting (below 25% HP)
- Disobey orders to protect your mech
- Kill a pilot you could have spared (mech-as-weapon)

GM DISCRETION:
- Sync grows SLOWLY in peacetime, FAST in desperation
- Extended separation (weeks without piloting): -1 Sync
```

### How The Sync Shrinks

Sync drops when you remember you are human.

```
-1: Spend meaningful time with people (not mechs)
-1: Voluntarily eject when staying would be optimal
-1: Let someone else pilot your mech
-1: Extended leave from combat (1+ month)
-2: Save a person at cost of mech damage
-2: Reject neurohelmet feedback (WIS DC 14)

LIMITS:
- Maximum -1 per scene (you cannot unlearn being a mech)
- Sync 8+: reduction requires WIS DC 16
- Sync 9+: requires WIS DC 18 AND someone pulling you out
```

### Sync Thresholds

```
0:   DISCONNECTED — Mech is just a machine. -2 all mech combat rolls.
     No phantom feedback. Can walk away clean.

1-2: FAMILIAR — Standard piloting. No bonuses, no penalties.
     You dream about your mech sometimes.

3-4: BONDED — +1 to all mech combat rolls.
     Feel impacts as pressure. Mech damage causes flinch.
     Name your mech if you haven't — it demands one.

5-6: MELDED — +2 to all mech combat rolls.
     Phantom limb sensation (feel missing components).
     Take 1 phantom damage per 10 mech damage received.
     -1 CHA when outside your mech (uncomfortable in flesh).

7-8: FUSED — +3 to all mech combat rolls. -1 DC all mech actions.
     Mech damage = pilot damage (shared HP pool fully active).
     Cannot voluntarily eject without WIS DC 16.
     Outside mech: -2 CHA, -1 DEX (body feels wrong).
     Other MechWarriors at Sync 6+ can sense you (neural bleed).

9:   GHOST-WIRED — +4 to all mech combat rolls. -2 DC all mech actions.
     Mech IS you. Cannot eject without WIS DC 20.
     Outside mech: -3 CHA, -2 DEX, -1 all social rolls.
     If someone touches your mech, you feel it. Rage response (WIS DC 14).
     One more step and there is no coming back.

10:  DISSOLVED — Character becomes the mech. Pilot body: catatonic shell.
     Cannot function outside cockpit. NPC territory.
     The mech moves with terrifying grace. +5 combat. No humanity left.
```

### Mech Stats = Pilot Stats

The neurohelmet does not give the mech a brain. It gives it YOUR brain.

```
MECH STAT MAPPING:
  STR → Mech melee, physical attacks, lifting, rams
  DEX → Mech piloting, evasion, initiative, aimed shots
  CON → Mech structural integrity, heat tolerance, endurance
  INT → Targeting systems, tactical awareness, sensor use
  WIS → Situational awareness, threat detection, ejection timing
  CHA → Lance coordination, intimidation via mech, comm presence

ROLL FORMAT: Same as personal. d20 + stat vs DC.
  Mech combat uses PILOT stats + Sync bonus + weight modifier.
```

### Weight Class Modifiers

| Class | Tonnage | HP Mod | Melee | Evasion | Speed | Heat Cap |
|-------|---------|--------|-------|---------|-------|----------|
| Light | 20-35t | -10 HP | -2 | +2 | +2 | 8 |
| Medium | 40-55t | +0 | +0 | +0 | +0 | 10 |
| Heavy | 60-75t | +15 HP | +2 | -1 | -1 | 12 |
| Assault | 80-100t | +30 HP | +4 | -3 | -2 | 13 |

Heat Cap = maximum heat before meltdown. Thresholds scale proportionally:
  WARM at 30%, HOT at 50%, CRITICAL at 70%, MELTDOWN WARNING at 90%, MELTDOWN at Cap.
  Example: Assault (Cap 13): WARM 4-5, HOT 7-8, CRITICAL 10-11, WARNING 12, MELTDOWN 13.

### Single HP Pool

```
MECH HP = CON × 8 + weight modifier
  (Pilot HP and Mech HP are the SAME pool at Sync 5+)

Below Sync 5: Pilot takes phantom damage (1 per 10 mech damage)
At Sync 5+: All mech damage IS pilot damage. Shared pool.
At Sync 7+: Mech destruction = pilot death unless emergency eject.

CONSEQUENCE: You cannot hide behind armor. When your Atlas
takes an AC/20 to the chest, YOUR ribs crack.

HP AND LOCATION — HOW THEY INTERACT:
  Damage reduces the HP pool directly.
  SEPARATELY, track cumulative damage per location (armor → internal).
  When a location's armor is depleted, hits THERE trigger critical rolls.
  HP reaching 0 = mech disabled (pilot unconscious or dead).
  Location destroyed = that system lost, but NOT instant death
    (unless Center Torso or Head).
  Two parallel tracks: HP = overall endurance, Location = system integrity.
```

### Phantom Pain (Sync 5+)

```
LOST COMPONENT → phantom sensation:
  Arm destroyed: -2 DEX checks using that side (even on foot)
  Leg destroyed: -1 movement, limp persists for days
  Head damage: migraines, -1 INT for 24 hours
  Engine hit: chest tightness, -1 CON for 48 hours

Duration: 1 day per Sync level above 4.
  Sync 5 = 1 day. Sync 9 = 5 days.
```

### Mech Destruction — Ghost Sync

When your bonded mech is destroyed:

```
GHOST SYNC: Sync level at time of destruction.

Sync 0-2: Grief. -1 all rolls for 1 week. Recoverable.
Sync 3-4: Deep loss. -2 all rolls for 2 weeks. New mech: Sync starts at 0.
Sync 5-6: Phantom agony. -3 all rolls for 1 month. CON DC 14 daily or
  d4 damage (psychosomatic). New mech: Sync caps at previous-2 until healed.
Sync 7-8: Identity fracture. -4 all rolls. Cannot pilot ANY mech for
  d4 weeks (neural rejection). WIS DC 16 to attempt new bond.
  If failed: permanent -1 max Sync.
Sync 9: GHOST PILOT. Catatonic d6 days. Permanent -2 CHA.
  May never bond another mech (WIS DC 22 to attempt, once).
  If bonded: starts at Sync 5 immediately (desperate grasping).
```

### Mech Identity

```
NAMING: Every mech at Sync 3+ demands a name. Pilot who refuses: -1 Sync.
  Name grants +1 to Sync growth rolls.

HERITAGE: A mech that has served multiple pilots carries echoes.
  First session in inherited mech: WIS DC 12 or flash of previous pilot's
  strongest emotion. +1 Sync if emotion resonates. -1 if horrifying.

REPUTATION: Named mechs build fame.
  5+ notable victories: mech recognized on sight.
  Enemy morale check (WIS DC 12) when facing a legendary mech.
  Losing to a famous mech: no shame. Destroying one: eternal infamy.

CUSTOMIZATION: Every modification is personal.
  Painting a kill-tally, adding family crest, hanging charm in cockpit —
  each counts as "downtime with mech" for Sync growth.
```

---

# PART II: HONOR

---

## HONOR

In the Inner Sphere, reputation is currency. Honor is not morality — it is political CAPITAL. You spend it to command, borrow it to survive, lose it and die alone.

```
HONOR: 0 ————————————→ 10
       Disgraced         Paragon
```

### Universal Thresholds

```
0:   DISGRACED — No one trusts you. Contracts void. Kill on sight (some).
     Cannot hold title. -3 CHA with all faction members.
     Recovery: near-impossible without patron.

3:   BASELINE — Functional warrior. People deal with you cautiously.
     Can hold minor posts. Standard contracts available.

6:   RESPECTED — +1 CHA with faction. Command positions offered.
     Can call in favors (1/chapter). Minor nobles acknowledge you.

8:   HONORED — +2 CHA with faction. Major command offered.
     Marriage proposals from notable families. Enemies hesitate.
     THE PARADOX ACTIVATES (see faction-specific).

10:  PARAGON — Living legend. +3 CHA. Cannot refuse challenges.
     Every action judged. One slip = catastrophic fall.
     Assassination attempts. Others define themselves by you.
```

### Faction Honor Codes

Each Great House defines honor differently. What builds Honor in one faction may DESTROY it in another.

```
=== HOUSE DAVION (Federated Suns) ===
Code: CHIVALRIC — protect the weak, keep oaths, fight with honor
+1 Honor: Keep oath at personal cost, protect civilians, spare defeated foe
+2 Honor: Sacrifice advantage for fair fight, save allied unit at own risk
-1 Honor: Break promise, ignore distress call, attack surrendered enemy
-2 Honor: Betray liege, use civilians as shields, assassinate
PARADOX (Honor 8+): Must protect everyone. Cannot sacrifice the few for the
  many. Paralysis when "honorable" choice = tactical disaster. Enemies exploit
  this. Your honor becomes a cage — refuse to break it, people die.

=== HOUSE KURITA (Draconis Combine) ===
Code: BUSHIDO — duty above self, face above truth, obey your lord
+1 Honor: Obey lord without question, maintain composure under pressure
+2 Honor: Accept punishment without complaint, die rather than retreat
-1 Honor: Show weakness publicly, question orders openly, retreat without order
-2 Honor: Disobey direct order, show fear, surrender
PARADOX (Honor 8+): Absolute obedience. Lord gives dishonorable order —
  obey = dishonor the code, refuse = dishonor the lord. Seppuku becomes
  the only "clean" exit. System designed to destroy anyone too principled.

=== HOUSE STEINER (Lyran Commonwealth) ===
Code: COMMERCIAL — contracts sacred, debts honored, social standing paramount
+1 Honor: Pay debts promptly, honor contracts exactly, display wealth properly
+2 Honor: Fulfill contract beyond requirements, forgive debt publicly
-1 Honor: Default on payment, breach contract terms, appear poor
-2 Honor: Steal from ally, insider trading (caught), social fraud
PARADOX (Honor 8+): You ARE your wealth. Every gift is debt, every favor
  tracked. Cannot act generously without political calculation. Genuine
  friendship becomes impossible — everything has a price, including you.

=== HOUSE LIAO (Capellan Confederation) ===
Code: FACE — appearance IS reality, never get caught, results justify means
+1 Honor: Succeed visibly, maintain perfect public image, expose rival's failure
+2 Honor: Pull off impossible scheme without blame, make enemy lose face
-1 Honor: Get caught doing anything shameful, fail publicly
-2 Honor: Confess wrongdoing, show genuine vulnerability, get outmaneuvered visibly
PARADOX (Honor 8+): Perfect mask. No one knows the real you — including you.
  Cannot form genuine connections. Every relationship is performance.
  If the mask cracks even once, EVERYTHING collapses (Honor drops to 3).

=== CLAN (all Clans) ===
Code: ZELLBRIGEN — bid down, single combat, victory through martial excellence
+1 Honor: Win with fewer forces, honor batchall, accept defeat gracefully
+2 Honor: Win a Trial despite bidding away advantage
-1 Honor: Use dezgra tactics (ambush, poison, targeting civilians)
-2 Honor: Refuse challenge, break zellbrigen mid-combat, flee
PARADOX (Honor 8+): Must always bid down. Must always accept challenges.
  Enemies manipulate this — force impossible Trials, bid you into suicide.
  Honor demands you face a Star of OmniMechs solo. Refusing = dishonor.
  Accepting = death. The Clans engineered this. It culls the too-honorable.
```

### Honor Mechanics

```
HONOR CHALLENGE:
  Anyone can challenge your honor. Refusal: -2 Honor.
  Types: duel, trial of grievance, public accusation, contract dispute.
  Winner: +1 Honor. Loser: -1 Honor.

HONOR AS CURRENCY:
  Spend 1 Honor: Call in favor from faction (one-time service)
  Spend 2 Honor: Demand audience with superior
  Spend 3 Honor: Override one order (must justify publicly)

CROSS-FACTION HONOR:
  Different factions track separately. High Davion Honor may mean
  nothing to Kurita. Clans consider ALL Inner Sphere dezgra by default.
  Universal floor: 3 (below 3 = disgraced to EVERYONE).
```

---

# PART III: CHARACTERS

---

## CHARACTER CREATION

### Step 1: Background

Choose origin. Determines starting mech source, contact, and stat bonus.

```
=== NOBLE SCION ===
+1 CHA | Mech: family heirloom (Medium/Heavy, 50+ years old)
Contact: house noble (political access) | Start: court intrigue already in motion

=== MECHWARRIOR ACADEMY GRADUATE ===
+1 DEX | Mech: issued standard (any weight, fresh from factory)
Contact: academy instructor (tactical advice) | Start: first deployment

=== MERCENARY BRAT ===
+1 WIS | Mech: salvaged patchwork (any weight, one system FLAWED)
Contact: merc commander (contract access) | Start: company owes debts

=== DISPOSSESSED ===
+1 CON | Mech: NONE (earn or steal one in play)
Contact: underground broker (black market) | Start: desperate for a cockpit

=== CLAN FREEBORN ===
+1 STR | Mech: earned in Trial (Light/Medium, Clan-tech)
Contact: sibko survivor (one loyal ally) | Start: proving yourself endlessly

=== CLAN TRUEBORN ===
+1 DEX | Mech: bloodname chassis (Medium/Heavy, OmniMech)
Contact: bloodname rival (dangerous ally) | Start: Trial of Position imminent

=== SOLARIS GLADIATOR ===
+1 CHA | Mech: arena custom (any weight, one EXCEPTIONAL system)
Contact: arena promoter (fame, strings attached) | Start: next fight is rigged

=== TECHNICIAN TURNED WARRIOR ===
+1 INT | Mech: self-built frankenmech (Light/Medium, unique loadout)
Contact: tech crew (repair access) | Start: no one respects you yet
```

### Step 2: Role

Choose combat and narrative role.

```
=== DUELLIST ===
Stats: +2 DEX, +1 WIS
Ability: PRECISION STRIKE — 1/combat, ignore 2 points of target's AC
Playstyle: Single combat specialist, Solaris champion, Clan honor warrior

=== LANCER ===
Stats: +2 STR, +1 CON
Ability: DEATH CHARGE — 1/combat, melee attack at +4 if you moved this turn
Playstyle: Close-range brawler, physical combat, terrifying in melee

=== SCOUT ===
Stats: +2 DEX, +1 INT
Ability: GHOST — 1/scene, reroll failed stealth/sensor evasion check
Playstyle: Recon, flanking, information warfare, light mech specialist

=== COMMANDER ===
Stats: +1 INT, +1 CHA, +1 WIS
Ability: COORDINATE — 1/combat, grant one ally +2 to their next roll
Playstyle: Lance leader, tactician, voice of the group

=== SNIPER ===
Stats: +2 INT, +1 DEX
Ability: CALLED SHOT — 1/combat, choose hit location instead of rolling
Playstyle: Long-range specialist, patient killer, headhunter

=== COURTIER ===
Stats: +2 CHA, +1 INT
Ability: LEVERAGE — 1/scene, learn one NPC's secret motivation (GM reveals)
Playstyle: Political operator, spy, contract negotiator, noble schemer

=== SURVIVOR ===
Stats: +2 CON, +1 WIS
Ability: NOT TODAY — 1/session, survive what should kill you (1 HP, dramatic)
Playstyle: Unkillable veteran, ejection specialist, last one standing
```

### Step 3: Stats

```
Standard array: 3, 2, 2, 1, 1, 0
Assign to STR, DEX, CON, INT, WIS, CHA
Apply background + role bonuses

STAT CAP: No stat may exceed 5 at creation.
Background and Role bonuses cannot stack on the same stat.

HP = CON × 8 + weight class modifier
AC = 10 + DEX + armor (mech AC = 10 + DEX + mech armor)
```

### Step 4: Mech Selection

Choose weight class, then chassis.

**Weight Class Table:**

| Class | Role | Signature Move | Weakness |
|-------|------|----------------|----------|
| Light | Scout, harasser | Speed + evasion | One good hit kills |
| Medium | Flexible, duelist | Balanced loadout | Master of none |
| Heavy | Fire support, assault | Firepower + armor | Slow, high heat |
| Assault | Siege, anchor | Overwhelming force | Heat, mobility, priority target |

**Iconic Chassis Table:**

| Chassis | Class | Tons | Signature | Feel |
|---------|-------|------|-----------|------|
| Locust | Light | 20 | Fastest mech alive | Glass cannon |
| Jenner | Light | 35 | Jump jets + SRM | Hit and run |
| Hunchback | Medium | 50 | AC/20 shoulder | One devastating shot |
| Wolverine | Medium | 55 | Balanced all-rounder | Reliable workhorse |
| Thunderbolt | Heavy | 65 | LRM rack + armor | Fire support tank |
| Marauder | Heavy | 75 | Twin PPCs | Elegant killer |
| Atlas | Assault | 100 | Walking fortress | Fear incarnate |
| King Crab | Assault | 100 | Dual AC/20 | Building demolisher |
| Timber Wolf | Heavy | 75 | OmniMech (Clan) | Perfect balance |
| Dire Wolf | Assault | 100 | Maximum firepower (Clan) | Slow apocalypse |

### Economy & Repair

```
CURRENCY: C-Bills (ComStar Bills). Universal currency.
  
WEALTH TIERS:
  Broke: 0-5,000 C-Bills. Can't maintain mech. Desperate.
  Tight: 5,000-50,000. Maintenance only. No upgrades.
  Comfortable: 50,000-500,000. Standard operations.
  Wealthy: 500,000-5,000,000. Choose your upgrades.
  Noble: 5,000,000+. Political money. Buy loyalty.

REPAIR COSTS (approximate):
  Armor patch (per location): 2,000 C-Bills, 1 day
  Weapon replacement: 10,000-50,000, 3-7 days
  Limb replacement: 30,000-100,000, 1-2 weeks
  Engine repair: 100,000+, 2-4 weeks
  Full rebuild: 500,000+, 1-3 months
  New mech purchase: 2,000,000-10,000,000 (if available)

SCARCITY (Succession Wars):
  Parts not always available. INT DC 14 to source specific component.
  Black market: +100% cost, CHA DC 14 to access, legal risk.
  Salvage: free but damaged. Quality roll per component.
  Waiting list: factory parts take d4 weeks to arrive.
```

### Step 5: Starting Equipment

```
ALL MECHWARRIORS: Neurohelmet, cooling vest, sidearm (d4), communicator
  + Mech with standard loadout for chosen chassis

NOBLE: + house signet (political ID), formal attire, 50,000 C-Bills
ACADEMY: + tactical manual (+1 INT once/session, reference only), 20,000 C-Bills
MERCENARY: + salvage rights (one component per battle), 10,000 C-Bills
DISPOSSESSED: + nothing but guts and contacts, 2,000 C-Bills
CLAN: + warrior codex (combat record), gene-record (if trueborn), sibko token (if freeborn), 0 C-Bills (Clan economy)
SOLARIS: + arena contract (income but obligations), fame (recognized), 30,000 C-Bills
```

---

# PART IV: COMBAT

---

## MECH COMBAT

### Basics

```
INITIATIVE: d20 + DEX + speed modifier (weight class)
ATTACK: d20 + stat + Sync bonus vs target AC
  Energy weapons: INT or DEX
  Ballistic weapons: DEX or INT
  Missiles: INT
  Physical: STR
MECH AC: 10 + pilot DEX + mech armor rating + evasion modifier
  Light: armor 2, evasion +2 | Medium: armor 4, evasion +0
  Heavy: armor 6, evasion -1 | Assault: armor 8, evasion -3
```

### Range Bands

| Band | Distance | Modifier | Favored |
|------|----------|----------|---------|
| Point-blank | 0-90m | +2 attack | Physical, SRM |
| Short | 90-270m | +0 | Medium laser, AC |
| Medium | 270-540m | -2 | PPC, LRM |
| Long | 540-810m | -4 | ER weapons, Gauss |
| Extreme | 810m+ | -6, DIS | Artillery only |

### Weapons Table

| Weapon | Type | Damage | Heat | Range | Special |
|--------|------|--------|------|-------|---------|
| Small Laser | Energy | d4 | +1 | Short | No ammo |
| Medium Laser | Energy | d6 | +2 | Short | No ammo, reliable |
| Large Laser | Energy | d8 | +3 | Medium | No ammo |
| ER Large Laser | Energy | d10 | +4 | Long | Clan-tech |
| PPC | Energy | d10 | +4 | Medium | +2 vs electronics |
| ER PPC | Energy | d12 | +5 | Long | Clan-tech |
| AC/5 | Ballistic | d6 | +1 | Long | 20 rounds |
| AC/10 | Ballistic | d8 | +2 | Medium | 10 rounds |
| AC/20 | Ballistic | d12 | +3 | Short | 5 rounds, devastating |
| Gauss Rifle | Ballistic | d12 | +1 | Long | 8 rounds, no heat penalty |
| LB-X AC/10 | Ballistic | 2d4 | +2 | Medium | Cluster or slug |
| Ultra AC/5 | Ballistic | 2d6 | +2 | Long | Double-tap (jam on nat 1) |
| SRM-6 | Missile | 2d6 | +2 | Short | 15 salvos, cluster |
| LRM-20 | Missile | 3d6 | +3 | Long | 6 salvos, indirect fire |
| Streak SRM-4 | Missile | 2d4 | +2 | Short | Auto-lock (no miss, no waste) |
| Hatchet | Physical | d8+STR | +0 | Melee | Weight bonus applies |
| Kick | Physical | d6+STR | +0 | Melee | Target must save or fall |
| DFA | Physical | 2d8+STR | +0 | Melee | Death from above, risky |

### Heat System

Heat is a 0-10 clock. It defines the battle rhythm.

```
HEAT CLOCK: 0 ————————————→ 10
            Cool              Meltdown

GAINING HEAT:
  Fire weapon: +heat listed on weapon
  Sprint: +1
  Jump jets: +2
  Taking engine hit: +2
  Environmental (desert, volcano): +1/round

LOSING HEAT:
  Standard cooling: -3/round (end of turn)
  Water immersion: -5/round
  Shutdown (full round, no actions): -6
  Double heat sinks (upgrade): -5/round instead of -3

HEAT THRESHOLDS:
  0-2: COOL — no penalties
  3-4: WARM — -1 to all attack rolls (targeting fuzzy)
  5-6: HOT — -2 to all rolls. Movement -1 band.
       Ammo explosion check: d20, nat 1 = ammo cooks off (2d12 internal)
  7-8: CRITICAL — -3 to all rolls. Movement halved.
       Shutdown check each round: CON DC 14 or mech shuts down.
       Pilot takes d4 heat damage per round (cockpit boiling).
  9:   MELTDOWN WARNING — -4 to all rolls. Shutdown check CON DC 18.
       Pilot: d6 heat damage/round. Myomer damage permanent until repaired.
  10:  MELTDOWN — Automatic shutdown. Pilot: d8 heat damage.
       Engine breach: 50% chance of reactor explosion (instant death).
       Mech disabled minimum 3 rounds even if survives.

TACTICAL HEAT MANAGEMENT:
  Alpha strike (all weapons): devastating but +8-12 heat in one turn.
  Disciplined fire: 2-3 weapons, stay under threshold.
  Heat spike: intentionally overheat for one massive turn, then cool.
  The best pilots ride the edge of 4-5 heat — max output before penalty.
```

### Damage & Location

When you hit, roll for location:

```
HIT LOCATION (d8):
  1: HEAD — pilot damage, critical systems. x3 damage to pilot.
  2: CENTER TORSO — engine, gyro. Destroyed = mech dead.
  3: LEFT TORSO — side weapons, ammo. Ammo explosion risk.
  4: RIGHT TORSO — side weapons, ammo. Ammo explosion risk.
  5: LEFT ARM — arm weapons. Destroyed = weapons lost.
  6: RIGHT ARM — arm weapons. Destroyed = weapons lost.
  7: LEFT LEG — movement. Destroyed = immobile, -4 evasion.
  8: RIGHT LEG — movement. Destroyed = immobile, -4 evasion.

CALLED SHOTS (Sniper ability or -4 penalty):
  Choose location instead of rolling.
  Head shot: -6 penalty (specific). Lethal if connects.

STRUCTURE:
  Each location has armor + internal structure.
  Armor absorbs first. When armor gone: internal damage = critical hits.
  Armor: weight class × 3 per location.
  Internal: weight class × 2 per location.
```

### Critical Hits

When internal structure takes damage:

```
CRITICAL HIT TABLE (d6):
  1: Weapon destroyed (random weapon in that location)
  2: Heat sink destroyed (+1 heat/round permanently)
  3: Actuator damaged (-2 to that limb's rolls)
  4: Ammo feed hit (d20: 1-5 explosion, 6-20 jammed)
  5: Sensor damage (-2 to attack rolls until repaired)
  6: Engine/Gyro hit (engine: +2 heat; gyro: piloting DC 14/round or fall)

HEAD CRITICALS (d6):
  1-2: Life support damaged (pilot takes +1 heat damage/round)
  3-4: Sensors destroyed (blind: DIS all attacks)
  5: Neurohelmet feedback (d8 direct pilot damage, WIS DC 14 or stunned)
  6: Cockpit breach (exposed: any hit to head = pilot damage at x5)
```

### Falling & Piloting

```
FALL TRIGGERS:
  Leg destroyed | Gyro hit | Failed DFA | Running on damaged leg
  Pushed (physical attack) | Uneven terrain at speed

PILOTING CHECK: d20 + DEX vs DC (12 standard, 16 severe, 20 catastrophic)
  Success: recover balance
  Fail: mech falls. d8 damage to random location. Lose next action standing up.
  Crit.Fail: fall on face. d8 to two locations. Stunned 1 round.
  
FALLING ON SOMEONE: DEX DC 14 to avoid. Failure: d10 damage + pinned.
  Pinned mech: STR DC 14 to stand. One round delay.

STANDING UP: Uses full action. Enemies get free attack (reaction) while rising.
```

### Ejection

```
VOLUNTARY EJECTION:
  Free action. Automatic success. Pilot launched 50m, d4 landing damage.
  At Sync 7+: WIS DC 16 to eject. Fail = stay in dying mech.
  ALTERNATIVE: Lancemate can force-eject you (CHA DC 14 over comms, their reaction).
  OR: physical manual eject (STR DC 14 to override neural lock).
  At Sync 9: WIS DC 20. You would rather die than leave.

EMERGENCY EJECTION (mech destroyed):
  DEX DC 12. Success: ejected, d6 landing damage.
  Fail: trapped in wreckage. CON DC 14/round or d6 damage (fire, crushing).
  Nat 1: ejection system failure. Pilot dies with mech.

AFTER EJECTION:
  Pilot on foot in mech combat = EXTREMELY vulnerable.
  Personal weapons vs mech = useless (unless cockpit breach).
  Running speed: 30m/round. Mech step: 90-150m/round.
  Survival = hide, surrender, or allied pickup.
```

### Personal Combat (On Foot)

```
WHEN OUTSIDE THE MECH:
  Personal weapons are near-useless against mechs.
  Pilot-vs-pilot happens: after ejection, during infiltration, at court.

PERSONAL WEAPONS:
  Sidearm (laser pistol): d4, short range
  Rifle (laser rifle): d6, medium range
  Vibroblade: d6 melee
  Coolant gun (improvised): d4, but +2 heat to mech if aimed at vents

PERSONAL ARMOR:
  Cooling vest: AC 11 (standard issue, no real protection)
  Flak jacket: AC 13 (infantry standard)
  Battle armor: AC 16 (Elemental-lite, rare and expensive)

PERSONAL HP: CON × 5 + 10 (separate from mech HP at Sync below 5)
  At Sync 5+: shared pool means pilot is already damaged when mech is.
  
INFANTRY VS MECH:
  Standard weapons: cannot damage mech (narrative only)
  Anti-mech weapons (SRM infantry, mines): d6 vs mech, specific location
  Swarming attack: 3+ infantry, STR DC vs mech DEX. Success: plant charge.
  Mech vs infantry: automatic hit (no roll needed). Damage overkill.
```

### Duel Mechanics

Three duel types, each with distinct rules:

```
=== SOLARIS DUEL (Arena) ===
Format: 1v1, agreed weight class, spectators
Rules: No ejection (shameful), no fleeing, fight to disable or kill
Stakes: Fame, money, contracts, honor
Mechanic: Standard combat + CROWD CLOCK (0-6)
  Tick ↑: spectacular attack, called shot success, dramatic moment
  Tick ↓: turtling, boring play, cheap shots
  6/6: Crowd champion — +1 Honor, fame, sponsors
  0/6: Booed — lose regardless of victory, -1 Honor

=== CLAN TRIAL (Honor Combat) ===
Format: Trial of Grievance (1v1) or Trial of Position (1 vs 2-3)
Rules: Zellbrigen — no ganging up, no interference, honor bids
Stakes: Rank, bloodname, freedom, territory
Mechanic: Before combat — BATCHALL
  Attacker bids down forces. Defender may bid lower.
  Lowest bidder attacks. Honor gained from winning with less.
  Breaking zellbrigen mid-fight: -3 Honor (Clan), victory nullified.

=== PERSONAL GRUDGE (Vendetta) ===
Format: Arranged or ambush, any terms
Rules: Whatever both agree (or don't)
Stakes: Personal — revenge, stolen mech, dead family, broken oath
Mechanic: NEMESIS CLOCK applies (see Intrigue).
  At Nemesis 8+: duel to the death is the ONLY resolution.
  Killing your nemesis: -1 Nemesis (reset), but +1 Sync (violence bonding).
```

---

# PART V: INTRIGUE

---

## COURT & POLITICS

The Inner Sphere is feudal. Everything — land, mechs, marriages, wars — flows through courts. A MechWarrior who cannot navigate a ballroom dies as surely as one who cannot dodge a PPC.

### Favor Clocks

Each major NPC or institution: Favor clock (0-6).

```
FAVOR (0-6):
  Tick ↑: do service, gift, support their agenda, CHA success
  Tick ↓: offend, refuse request, oppose agenda, CHA failure
  Rate limit: +1 max per scene (trust builds slowly)

  0/6: ENEMY — actively works against you. Contracts denied.
  1-2: COLD — deals at disadvantage. -2 CHA with them.
  3-4: NEUTRAL — standard dealings. Professional.
  5/6: WARM — +1 CHA, discounts, tips, access. Risks for you.
  6/6: PATRON — sponsors you. +2 CHA. Grants resources/rank.
    One betrayal = drops to 0 AND they become active enemy.
```

### Patronage

```
GAINING A PATRON (Favor 6/6):
  Patron provides: mech repairs, contracts, political cover, intel
  Patron demands: loyalty, missions, public support, marriage alliance
  Break patron's trust: Favor to 0, Honor -2, BLACKLISTED by their network

PATRON TYPES:
  Noble lord: political missions, marriage games, land grants
  Mercenary commander: contracts, salvage rights, reputation
  ComStar precentor: information, HPG access, hidden agendas
  Clan bloodname holder: Trials, gene-legacy, advancement
```

### Contracts

The lifeblood of mercenary existence. All bonded through MRBC (Mercenary Review and Bonding Commission, Outreach).

```
MRBC RATING (unit reputation):
  F (unrated) → D (green) → C (regular) → B (veteran) → A (elite)
  Rating determines contract access. Bonded = MRBC holds escrow, employer can't stiff you.
  +1 tier: 3 successful contracts OR 1 spectacular victory
  -1 tier: break contract, fail through incompetence, employer complaint
```

| Type | Pay | Danger | Hidden Clause Risk |
|------|-----|--------|--------------------|
| Garrison | Low | Low | 20% (boredom kills) |
| Recon | Medium | Medium | 40% (what you find) |
| Raid | High | High | 50% (real target hidden) |
| Assault | Very High | Very High | 60% (expendable forces) |
| Extraction | High | Extreme | 70% (package is a person/secret) |
| Assassination | Extreme | Extreme | 80% (always a trap) |

```
HIDDEN CLAUSES (roll percentile against risk, GM decides content):
  - Real employer different from stated
  - Target is not what briefing says
  - Extraction point won't exist when you arrive
  - Allies are also targeting YOUR unit
  - Payment in salvage means "if there's anything left"
  - Non-compete clause locks you into faction war

BETRAYAL CLOCK (0-6, hidden):
  Tick ↑: employer lies detected, contract terms shift, allies suspicious
  Tick ↓: employer transparent, bonus paid, good faith gestures
  6/6: BETRAYAL — employer turns on you. Combat or flee.
  0/6: GENUINE — employer trustworthy (rare, treasure this).
```

### Nemesis System

Your personal rival. Every MechWarrior has one — or will.

```
NEMESIS CLOCK (0-10):
  +1: They defeat you (or you defeat them)
  +1: They harm someone you care about
  +1: You are publicly compared
  +1: You both want the same thing (contract, lover, mech, rank)
  +2: They destroy something irreplaceable (mech, person, reputation)
  -1: One saves the other's life (grudging)
  -2: Common enemy forces alliance (temporary)

THRESHOLDS:
  0: No rival. Peace.
  1-3: COMPETITOR — professional friction. -1 CHA with each other.
  4-6: RIVAL — active opposition. They target your interests.
     +1 to rolls when opposing them directly (spite as fuel).
  7-8: ENEMY — will sacrifice to harm you. Public vendetta.
     +2 to rolls against them. -1 to all other rolls (obsession).
  9: NEMESIS — only one of you leaves alive.
     +3 against them. -2 all else. Cannot cooperate even vs shared threat.
  10: BLOOD FEUD — one dies. If killed: +1 Sync, -2 Honor.
     If they kill you: your name becomes their shame.
```

### Marriage as Weapon

```
POLITICAL MARRIAGE:
  Arranged: CHA not required. Honor +1 (duty). Favor with both families +2.
  Love match: requires Honor 6+ AND family approval (CHA DC 16 per family).
  Refusal: Honor -1 per rank of proposing family. Insult remembered.

MARRIAGE GRANTS:
  - Access to spouse's faction at Favor 4 (automatic)
  - Combined resources (mech maintenance, C-Bills)
  - Heir expectation (clock: 0-6, tick each year, at 6 = child)
  - Vulnerability (spouse is leverage, always)

BETRAYAL IN MARRIAGE:
  Adultery discovered: Honor -2, spouse's family Favor → 0
  Using spouse as spy: CHA/WIS chain vs spouse's WIS each month
  Genuine love in political marriage: possible, +1 Sync/-1 Honor (soft = weak)
```

### Espionage

```
INTELLIGENCE GATHERING:
  CHA chain: gain access → build trust → extract information
  Each step: CHA vs target's WIS + paranoia modifier
  
  Paranoia modifiers: wartime +4, Liao court +6, Clan Watch +8

INFILTRATION:
  INT chain: plan → execute → extract
  Each step: INT or DEX vs facility DC
  
  Facility DCs: garrison 12, noble estate 16, military HQ 20, Clan enclave 24

ASSASSINATION:
  Available only at Nemesis 8+ or contract type.
  DEX DC (target's security level): 14 standard, 18 protected, 22 paranoid
  Failure: combat at disadvantage + Honor consequences
  Success: target dead, Honor -2 (always, even if "justified")
  Clan assassinations: -4 Honor (dezgra, period)
```

### Information Warfare / HPG

```
HPG (HyperPulse Generator) — only FTL communication:
  Controlled by ComStar (or Word of Blake)
  Cost: 1,000 C-Bills per message per jump
  Delay: varies by distance (1 day to 2 weeks)
  
INFORMATION AS WEAPON:
  Intercept message: INT DC 18 + ComStar security
  Forge message: CHA DC 16 + INT DC 14 (both must pass)
  Blackout (disable HPG): near impossible, but devastating
  
  Whoever controls information controls the war.
  A lie that arrives first becomes truth.

HPG PRIORITY LEVELS:
  Standard: 1-2 week delivery. Affordable.
  Priority: 3-5 day delivery. 5x cost.
  Emergency: 24-hour relay. 20x cost. ComStar tracks sender.
  Black: Untraceable. 50x cost. Requires ComStar insider.

PROPAGANDA:
  CHA DC 14: Plant rumor on one world
  CHA DC 18: Coordinate multi-world narrative
  Counter-propaganda: opposing CHA/INT vs planter's roll
  Rumor clock (0-6): 6/6 = rumor becomes "common knowledge"
  
COMSTAR'S LEVERAGE:
  Refuse service: entire world goes dark. No FTL comms.
  Interdiction: declared on worlds. Political death sentence.
  ROM (intelligence arm): knows everything. Uses selectively.
  Price: ComStar neutrality is conditional. They have an agenda.
```

---

# PART VI: THE INNER SPHERE

---

## ERA SELECTION

Choose era before play. Determines factions, technology, tone.

| Era | Period | Key Conflict | Tone |
|-----|--------|--------------|------|
| Star League | 2571-2780 | Golden age, cracks forming | Political thriller, golden decay |
| Succession Wars | 2781-3049 | Houses destroying each other | **Recommended.** Feudal war, scarcity |
| Clan Invasion | 3049-3061 | Clans vs Inner Sphere | Existential threat, desperate defense |
| Civil War | 3062-3067 | FedCom fractures | Brother vs brother, betrayal |
| Jihad | 3067-3081 | Word of Blake fanaticism | Apocalyptic, total war |
| Dark Age | 3081-3150 | HPG blackout, Republic falls | Chaos, new factions, isolation |

### Era Details

**SUCCESSION WARS (Recommended)** — Technology lost. LosTech sacred. Every mech irreplaceable. Five Great Houses bleeding each other for 300 years over a dead throne. No one wins. Everyone loses pieces. This is where BattleTech lives — scarcity forces hard choices, feudal politics matter because resources matter, and a single mech is worth more than a city. First Succession War (2786-2821): total war, WMDs used, HPG network damaged. Second (2830-2864): slower bleeding, factory destruction. Third (2866-3025): stalemate, raids, grinding attrition. Fourth (3028-3030): Hanse Davion's masterpiece, FedCom born.

**CLAN INVASION (3049-3061)** — The Clans arrive with superior technology and alien honor. Inner Sphere must unite or die. Best for: culture clash, desperate last stands, honor vs survival. Technology gap is REAL — Clan weapons hit harder, farther, cooler. Key moments: initial shock (Clans unstoppable), Wolcott (first IS victory), Tukayyid (ComStar stops advance), Refusal War (Wolves vs Falcons). Player can be: IS defender, Clan invader, mercenary caught between.

**STAR LEAGUE (2571-2780)** — Height of civilization. Technology abundant. Intrigue is everything because violence is unnecessary. Best for: pure political campaigns, court drama, SLDF military campaigns at the periphery. The Reunification Wars (2577-2596) forcibly absorbed the Periphery. Two centuries of peace followed — then the Amaris coup destroyed everything. Cameron dynasty, Council Lords scheming, SLDF as peacekeepers.

**CIVIL WAR (3062-3067)** — The Federated Commonwealth splits. Katherine Steiner-Davion seizes half the state. Victor fights back. Best for: brother-against-brother tragedy, divided loyalties, "both sides" moral ambiguity. Every world must choose. Your lance may split.

**JIHAD (3067-3081)** — Word of Blake nukes everything. HPGs weaponized. Planets burn. Best for: apocalyptic survival, resistance cells, total war with no rules. Darkest era — honor is luxury, survival is all.

**DARK AGE (3081-3150)** — HPG network collapses. Worlds isolated. Republic of the Sphere fails. New factions rise. Best for: frontier isolation, rebuilding, mystery (who killed the HPGs?), local warlords.

---

## GREAT HOUSES

| House | Culture | Stat Affinity | Mech Doctrine | Color |
|-------|---------|---------------|---------------|-------|
| Davion | Anglo-French chivalry | CHA/STR | Aggressive, combined arms | Gold/Blue |
| Kurita | Japanese bushido | DEX/WIS | Precision, honor duels | Red/Black |
| Steiner | Germanic commerce | CON/INT | Heavy/Assault spam, overwhelming force | Blue/White |
| Liao | Chinese stratagem | INT/CHA | Deception, elite small units | Green/Gold |
| Marik | Greco-democratic | WIS/CHA | Defensive, diplomatic | Purple/Silver |

### House Quick Reference

```
DAVION: "Honor above all" — but whose honor?
  Strength: Combined arms, loyal troops, moral high ground
  Weakness: Predictable, exploitable honor, slow to betray (even when needed)
  Mechs: Medium/Heavy balanced lances. Reliable, well-maintained.

KURITA: "Death before dishonor" — but whose death?
  Strength: Fanatical loyalty, excellent duelists, bushido unbreakable
  Weakness: Rigid hierarchy, suicide over retreat, internal purges
  Mechs: Mixed lances, many Lights. Speed and precision over armor.

STEINER: "Money wins wars" — and everything else.
  Strength: Richest house, heaviest mechs, logistics excellence
  Weakness: Social generals (bought not earned), Heavy/Assault obsession
  Mechs: HEAVY. Steiner scout lance = 4 Atlas. Overkill standard.

LIAO: "What they don't know CAN hurt them."
  Strength: Intelligence services, special ops, misdirection, elite warriors
  Weakness: Paranoid leadership, smallest state, everyone hates them
  Mechs: Quality over quantity. Heavily modified, unique variants.

MARIK: "United we stand" — except when we don't.
  Strength: Industry, defensive depth, diplomatic flexibility
  Weakness: Internal factions, civil wars, parliament gridlock
  Mechs: Defensive loadouts, LRM-heavy, fire support doctrines.
```

---

## THE CLANS

### Origin

Born from the SLDF Exodus (2784) led by Aleksandr Kerensky. Forged into Clans by his son Nicholas Kerensky (~2807) after Pentagon Civil War. Eugenics, caste system, honor above all. Returned in 3049 to conquer the Inner Sphere they abandoned.

### Key Clans

| Clan | Totem | Style | Reputation |
|------|-------|-------|------------|
| Wolf | Wolf | Balanced, cunning | Most successful, Warden |
| Jade Falcon | Falcon | Aggressive, fanatical | Crusader zealots |
| Ghost Bear | Bear | Defensive, patient | Honorable, integrationist |
| Smoke Jaguar | Jaguar | Brutal, direct | Feared, despised |
| Nova Cat | Cat | Mystical, visionary | Seers, unpredictable |
| Diamond Shark | Shark | Mercantile, pragmatic | Traders first |

### Clan Caste System

```
WARRIOR: Rules. Pilots mechs, aerospace, Elementals. Only caste with political voice.
SCIENTIST: Creates. Manages eugenics, technology, medicine. Second in status.
MERCHANT: Trades. Manages logistics, inter-Clan commerce. Necessary evil.
TECHNICIAN: Maintains. Repairs, builds, operates. Invisible but essential.
LABORER: Works. Everything else. Lowest status. Majority of population.

FREEBORN: Born naturally. Can test into warrior caste (rare, stigma permanent).
TRUEBORN: Gene-engineered. Iron wombs. Expected to be superior.
  Freeborn warrior = must prove themselves every day. Trueborn = must not fail.
```

### Clan Trials

| Trial | Purpose | Format | Stakes |
|-------|---------|--------|--------|
| Grievance | Personal dispute | 1v1 to yield/death | Honor, position |
| Position | Promotion | 1 vs 2-3 (must defeat 2+) | Rank advancement |
| Possession | Territory/asset | Unit vs unit, bid-down | Land, factory, gene-legacy |
| Refusal | Challenge order | 1v1 vs commander | If win: order overturned |
| Bloodright | Earn bloodname | Tournament elimination | Bloodname = political power |
| Annihilation | Destroy a unit | Total war, no zellbrigen | Rare, shameful to invoke |

### Batchall Protocol

```
BATCHALL (Ritual Challenge):
1. Attacker identifies themselves and states objective
2. Defender identifies forces
3. Attacker bids DOWN their forces (fewer = more honor)
4. Defender may counter-bid lower (optional)
5. Lowest bidder attacks with stated forces only
6. Breaking bid (bringing more): dishonor = trial lost regardless of outcome

BID HONOR BONUS:
  Win with equal forces: +0 Honor
  Win with 75% forces: +1 Honor
  Win with 50% forces: +2 Honor
  Win with 25% forces: +3 Honor (legendary feat)
  Lose despite bid: no dishonor if fought well
```

---

## OTHER FACTIONS

```
=== COMSTAR ===
Role: Controls HPG network. Quasi-religious. Secretly hoards technology.
Stat affinity: INT/WIS
Danger: They know everything. They control communications. They have hidden armies.
Campaign use: Information broker, secret villain, necessary evil, ally of convenience.

=== PERIPHERY STATES ===
Role: Border nations beyond Great Houses. Poor, tough, independent.

TAURIAN CONCORDAT:
  Culture: Paranoid, fiercely independent, "don't tread on me"
  Military: Disproportionately large. Nuclear weapons. WILL use them.
  Stat: CON/WIS. Hook: Best employers if you share their paranoia.

MAGISTRACY OF CANOPUS:
  Culture: Matriarchy. Pleasure, art, espionage, medicine.
  Military: Small but elite. Heavy use of spies and seduction.
  Stat: CHA/DEX. Hook: Nothing is as it seems. Agents everywhere.

OUTWORLDS ALLIANCE:
  Culture: Pacifist, poor, agrarian. Relies on mercs.
  Military: Almost none. Aerospace expertise (one strength).
  Stat: WIS/INT. Hook: Easy to exploit — but hurting them makes you the villain.

Danger: Desperate people fight hardest. Unconventional warfare.
Campaign use: Underdog story, pirate hunting, frontier justice, mercenary haven.

=== MERCENARIES ===
Role: Freelance warriors. Bound by contract, not loyalty.
Stat affinity: varies (diverse backgrounds)
Danger: Betrayal is a business decision. Reputation is survival.
Notable: Wolf's Dragoons, Kell Hounds, Gray Death Legion, Northwind Highlanders
Campaign use: DEFAULT for most campaigns. Freedom + consequence.
```

---

## KEY WORLDS

| World | Owner | Significance | Campaign Hook |
|-------|-------|--------------|---------------|
| Terra | ComStar/WoB | Birthworld, political prize | Ultimate objective |
| Luthien | Kurita | Combine capital | Bushido politics, court intrigue |
| Tharkad | Steiner | Commonwealth capital | Commerce, social generals |
| New Avalon | Davion | Suns capital, NAIS academy | Academy, military-industrial |
| Sian | Liao | Confederation capital | Espionage central |
| Atreus | Marik | League capital | Parliamentary intrigue |
| Solaris VII | Independent | Game World, arena combat | Gladiator campaign |
| Tukayyid | ComStar | Clan Invasion turning point | Legendary battlefields |
| Strana Mechty | Clans | Clan homeworld | Trial of all trials |
| Outreach | Mercenary | Wolf's Dragoons HQ, hiring hall | Contract hub |
| Galatea | Mercenary | Old hiring hall (before Outreach) | Desperate mercs, shadier contracts |
| Hesperus II | Steiner | Largest mech factory | Raid target, industrial espionage |
| Coventry | Steiner | Clan Invasion flashpoint | Desperate defense scenarios |
| Huntress | Smoke Jaguar | Clan homeworld (one clan) | Deep strike, annihilation |

---

## SOLARIS VII

The Game World. Where MechWarriors become celebrities and die for ratings.

```
ARENA STRUCTURE:
  Class divisions: Light / Medium / Heavy / Assault / Open (any weight)
  Season: 12 fights per season. Win 8+ = championship bracket.
  
SOLARIS FAME CLOCK (0-10):
  +1: Win a match | +2: Spectacular win (Crowd 6/6)
  -1: Lose | -2: Boring loss (Crowd 0/6) | -3: Forfeit
  
  0-2: UNKNOWN — fight undercards, no sponsors
  3-4: CONTENDER — mid-card, minor sponsors, recognized on streets
  5-6: STAR — headliner, major sponsors, fan mail, enemies
  7-8: CHAMPION — title matches, massive purse, assassination attempts
  9-10: LEGEND — transcends division, political power, can't walk alone

SPONSORS:
  Fame 3+: Minor sponsor — 5,000 C-Bills/fight, mech paint job required
  Fame 5+: Major sponsor — 20,000/fight, media obligations
  Fame 7+: Corporate backer — 50,000/fight, exclusivity, they own you

THE FIX:
  Solaris is corrupt. Every fight is potentially rigged.
  WIS DC 14 to detect a fix. Refusing to throw: -Favor with gamblers.
  Throwing a fight: -2 Honor, but 3x pay. Get caught: career over.

ARENA TYPES:
  The Reaches: jungle terrain, ambush friendly
  Ishiyama: underground, cramped, physical combat
  Steiner Coliseum: open, classical, pure gunnery
  Factory: industrial, environmental hazards, heat vents
  King of the Mountain: elevated positions matter
```

---

## LOSTECH & TECHNOLOGY

```
LOSTECH (Lost Technology):
  Star League-era equipment. Superior to modern equivalents.
  Double heat sinks, ER weapons, Ferro-Fibrous armor, XL engines.
  Finding LosTech = campaign-defining event.

LOSTECH DISCOVERY:
  Rumor: CHA/INT DC 14 to hear about cache location
  Location: WIS DC 16 to navigate, often in dangerous territory
  Recovery: INT DC 14 to safely extract (booby traps, decay, guardians)
  
  Cache contents (d6):
  1-2: Weapons (one ER or Pulse weapon, QUALITY tier)
  3: Double heat sinks (set of 4, game-changing cooling)
  4: Armor upgrade (Ferro-Fibrous plates for one location)
  5: XL Engine components (reduce weight, increase fragility)
  6: Complete Star League mech (EXCEPTIONAL quality, famous chassis)

CLAN TECHNOLOGY VS INNER SPHERE:
  Clan weapons: +1 damage tier, +1 range band, -1 heat
  Clan mechs: OmniMech pods (swap weapons between missions)
  IS response: find LosTech, reverse-engineer, or steal Clan salvage
  
  Fielding Clan-tech as IS pilot: INT DC 14 to operate unfamiliar systems
  After 1 week practice: no penalty. After 1 month: +1 familiarity bonus.
```

---

## TERRAIN EFFECTS

| Terrain | Movement | Combat | Heat | Special |
|---------|----------|--------|------|---------|
| Clear/Road | Normal | Normal | Normal | - |
| Forest/Light | -1 | +2 AC (cover) | Normal | Fire risk |
| Forest/Heavy | -2 | +4 AC (cover) | Normal | No LRM LOS |
| Water/Shallow | -1 | Normal | -2/round | Leg exposure |
| Water/Deep | -3 | -2 attack | -4/round | Hull down possible |
| Mountain | -3 | +2 high ground | Normal | Fall risk (DEX DC 14) |
| Urban | -1 | +2 AC (buildings) | Normal | Civilian risk, collapse |
| Desert | Normal | Normal | +2/round | Sensor distortion |
| Swamp | -2 | -1 attack | -1/round | Stuck risk (STR DC 12) |
| Ice | Normal | Normal | -3/round | Fall risk (DEX DC 12) |
| Vacuum/Moon | Normal | Normal | +3/round (no convection) | Breach = death |

---

# PART VII: CAMPAIGNS & TOOLS

---

## CAMPAIGN FRAMEWORKS

### A) House Warrior Campaign

You serve your lord. Your mech is your oath made steel.

```
LOOP: Orders → Deployment → Operation → Return → Court

CLOCKS:
- FEUDAL STANDING (0-6): position in noble hierarchy
  Tick ↑: victory in lord's name, political service, Honor growth
  Tick ↓: defeat, disobedience, scandal, Honor loss
  6/6: Promoted — land grant, higher responsibility, new enemies
  0/6: Stripped — dispossessed, exiled, or reassigned to suicide missions

- WAR FRONT (0-10): campaign progress
  Tick ↑: victories, territory taken, enemy supply cut
  Tick ↓: defeats, losses, enemy reinforcements
  10/10: Victory — war ends (new war begins)
  0/10: Collapse — retreat, regroup, desperate times

- CONSPIRACY (0-6, hidden): someone at court plots against you
  Tick ↑: time, your success (jealousy), your absence from court
  Tick ↓: uncover evidence, build alliances, preemptive strikes
  6/6: Betrayal — ambush, false orders, assassination, trial

- HOUSE LOYALTY (0-6): your personal faith in your house
  Tick ↑: lord is just, orders make sense, reward given
  Tick ↓: unjust orders, friends sacrificed, lies revealed
  0/6: Crisis — defect? rebel? go mercenary? Sync tests loyalty to mech vs lord
```

### B) Mercenary Campaign

Freedom is another word for no one to catch you when you fall.

```
LOOP: Contract → Briefing → Operation → Salvage → R&R

CLOCKS:
- COMPANY FUNDS (0-10): financial health
  Tick ↑: contract completion, salvage sold, side jobs
  Tick ↓: repairs, salaries, bribes, contract failure
  10/10: Wealthy — upgrade everything, choose contracts
  0/10: Bankrupt — sell mechs, desperate jobs, crew mutiny

- REPUTATION (0-10): what people say about your unit
  Tick ↑: successful contracts, honor kept, spectacular victories
  Tick ↓: failed contracts, betrayal, civilian casualties
  8+: Elite contracts offered. Noble attention. Rival mercs jealous.
  3-: Only desperate employers call. Pirate-tier work.

- EMPLOYER TRUST (0-6, per employer): current contract relationship
  Tick ↑: exceed expectations, report honestly, proactive defense
  Tick ↓: fail objectives, hide salvage, question orders
  6/6: Permanent retainer offered (golden handcuffs)
  0/6: Contract terminated. Payment disputed. Possible hostility.

- CREW MORALE (0-6): your people's will to fight
  Tick ↑: victory, bonus pay, shore leave, fair leadership
  Tick ↓: casualties, unpaid, bad contracts, tyrannical leadership
  0/6: Mutiny or mass desertion. Choose: compromise or force.
```

### C) Solaris Campaign

Fame. Fortune. A beautiful death on live holovid.

```
LOOP: Training → Promotion → Fight → Recovery → Politics

CLOCKS:
- FAME (0-10): see Solaris VII section above
  Career trajectory. Identity. Everything.

- STABLE POLITICS (0-6): your team/stable's internal health
  Tick ↑: win, recruit talent, sponsor happy
  Tick ↓: lose, internal rivalry, sponsor angry, poached
  6/6: Dominant stable — pick your fights
  0/6: Stable collapses — solo or absorbed

- GAMBLING SYNDICATE (0-6, hidden): the underworld's interest in you
  Tick ↑: you refuse to throw, you win unexpectedly, you talk to press
  Tick ↓: cooperate, throw a fight, pay tribute
  6/6: They move against you — sabotage, kidnapping, arena "accident"

- RIVAL CHAMPION (Nemesis clock): your path to the title goes through them
  Standard Nemesis mechanics. At 10: championship death-match.
```

### D) Clan Campaign

You are bred for war. Prove your gene-legacy or be culled.

```
LOOP: Trial → Deployment → Combat → Return → Council

CLOCKS:
- GENE-LEGACY (0-10): proving worthy of reproduction rights
  Tick ↑: win Trials, defeat IS warriors, honor code perfectly
  Tick ↓: lose Trials, use dezgra tactics, show weakness
  10/10: Bloodname candidate — ultimate Trial
  0/10: Solahma (expendable garrison). Career over.

- CLAN POLITICS (0-6): internal faction maneuvering
  Tick ↑: back winning Khan, support right faction (Warden/Crusader)
  Tick ↓: oppose leadership, embarrass Clan, political misstep
  6/6: Khan's favor — choose your battles, command Star
  0/6: Politically dead — assigned to garrison, no advancement

- HONOR DEBT (0-6): accumulated obligations from Trials
  Tick ↑: lose Trial (owe winner), accept charity, bondsref mercy
  Tick ↓: repay through service, win Trial against debtor
  6/6: Bondsman — your honor demands servitude until repaid.

- INNER SPHERE CONTAMINATION (0-6, hidden): exposure to freeborn ways
  Tick ↑: time among IS, mercy to freeborns, question caste system
  Tick ↓: reaffirm Clan ways, punish dezgra, reject IS contact
  6/6: Crisis — adopt IS ways (exile) or purge the weakness violently
```

---

## SESSION STRUCTURE

Five phases. Not every session hits all five — but this is the rhythm.

```
1. BRIEFING (10-15 min)
   - Orders received or contract offered
   - Intel briefed (incomplete, possibly wrong)
   - Loadout decisions, lance formation
   - Player declares objective interpretation

2. TRANSIT (5-10 min or skip)
   - DropShip/JumpShip travel (time passes)
   - Downtime activities (training, repair, social)
   - Rumors, news from other fronts
   - Arrival: terrain revealed, first impressions

3. OPERATION (30-60 min, session core)
   - Mech combat OR infiltration OR negotiation OR combination
   - Heat management, location damage, ammunition tracking
   - Objectives shift (intel was wrong, new threats appear)
   - Decisive moment: hard choice under fire

4. AFTERMATH (10-15 min)
   - Damage assessment, salvage claims
   - Casualty report (NPCs, allies, enemies)
   - Immediate consequences (prisoners, witnesses, evidence)
   - Sync changes (did you bond deeper or break free?)

5. RETURN (10-15 min)
   - Debriefing with employer/lord
   - Payment/reward/punishment
   - Court/social scene (Honor changes)
   - Setup for next session (new contract, new orders, new problem)
```

### Downtime Activities

| Activity | Roll | Result |
|----------|------|--------|
| Mech maintenance | INT DC 12 | Success: repair 1 system. Crit: improve 1 system. |
| Training | Relevant stat DC 14 | Success: +1 to specific roll type (3 uses) |
| Socialize | CHA DC 12 | Success: Favor +1 with one NPC |
| Gather intel | WIS DC 14 | Success: learn one useful fact about next mission |
| Earn side money | CHA DC 12 | Success: +5,000 C-Bills (gambling, arena, odd jobs) |
| Recover (wounded) | CON DC 10 | Success: heal d8. Fail: no change. Crit.Fail: complication |
| Political maneuvering | CHA/INT DC 16 | Success: shift one political clock 1 tick |
| Seek patron | CHA DC 18 | Success: audience granted. Crit: favorable impression |

---

## STARTER SCENARIOS

### The Dispossessed (Mercenary, Any Era)

Hook: Your mech was destroyed last battle. You survived. Your lance didn't. A mercenary broker has ONE offer — suspicious employer, bad contract, worse odds. But there's a mech in it.
Twist: The "mech" is salvage from the battle that killed your lance. Your commander's mech. Sync echoes inside.
Starting clocks: Company Funds 2/10 (broke), Reputation 4/10 (known but damaged), Employer Trust 3/6 (they don't care about you)

### Blood Right (Clan, Clan Invasion Era)

Hook: Your sibko graduated. Five survived. Now you face Trial of Position — defeat two MechWarriors to earn warrior caste. Fail and you're a laborer forever.
Twist: One of the opponents is your sibko rival — the one who should have died in training. They bid specifically to face YOU.
Starting clocks: Gene-Legacy 3/10, Honor Debt 0/6, Nemesis 4/10 (sibko rival)

### The Champion's Shadow (Solaris VII)

Hook: Reigning champion "Hammerfall" Voss just retired. The title is vacant. Every gladiator in six divisions wants it. You're ranked 12th. You need eight wins to reach the bracket.
Twist: Your first opponent throws the fight — badly. Someone WANTS you to advance. The gambling syndicate is building a narrative. You're the designated loser for the semifinals.
Starting clocks: Fame 4/10, Stable Politics 3/6, Gambling Syndicate 2/6 (interested)

### The Oath (House Warrior, Succession Wars)

Hook: Your lord gave you a mech, a lance command, and one order: hold the Jotun Pass for thirty days. Reinforcements will come. The enemy has a full company.
Twist: Day fifteen, intercepted transmission — reinforcements were never coming. Your lord sacrificed you to buy time for retreat. Do you hold the oath or break it?
Starting clocks: Feudal Standing 4/6, War Front 3/10, House Loyalty 4/6

---

# PART VIII: RANDOM TABLES & NPCs

---

## RANDOM TABLES

### Court Events (d12)

| Roll | Event |
|------|-------|
| 1 | Noble duel challenge — you're named second for an ally |
| 2 | Marriage proposal from politically dangerous family |
| 3 | Rival's MechWarrior defects — offers service to you |
| 4 | Lord's feast — seating position reveals political standing |
| 5 | Assassination attempt on minor noble — you witnessed something |
| 6 | Land dispute — two patrons want your support |
| 7 | LosTech rumor — Star League cache location whispered |
| 8 | Mercenary hiring fair — talent shopping, but so is the enemy |
| 9 | Treason accusation — someone you know, evidence thin |
| 10 | HPG message intercepted — contents change everything |
| 11 | New MechWarrior arrives — suspiciously talented, unknown origin |
| 12 | Lord dying — succession crisis begins. Choose a side now. |

### Contract Complications (d10)

| Roll | Complication |
|------|--------------|
| 1 | Intel completely wrong — enemy strength double reported |
| 2 | Employer's real objective different from briefed |
| 3 | Ally unit won't advance — cowardice, sabotage, or smart? |
| 4 | Civilians in the combat zone — impossible to avoid |
| 5 | Target is a hospital/school/temple — employer doesn't care |
| 6 | Enemy wants to negotiate — employer forbids it |
| 7 | Salvage rights contested — another unit claims your kills |
| 8 | Supply line cut — ammo limited to current loadout |
| 9 | Friendly fire incident — blame falls on you |
| 10 | Contract employer dead — who pays? who commands? |

### Battlefield Events (d10)

| Roll | Event |
|------|-------|
| 1 | Ammunition explosion — location d8, mech not yours (ally or enemy) |
| 2 | Bridge/building collapse — DEX DC 14 or trapped |
| 3 | Sensor ghost — phantom contact. Real or ECM? |
| 4 | Reactor breach nearby — radiation zone expanding |
| 5 | Enemy pilot ejects — surrendering or calling artillery? |
| 6 | Friendly mech shutdown — heat or system failure? |
| 7 | Communication jamming — isolated for d4 rounds |
| 8 | Hidden minefield — DEX DC 12 or d8 leg damage |
| 9 | VIP vehicle in crossfire — protect or ignore? |
| 10 | Enemy reinforcements — one Star/Lance from unexpected vector |

### Salvage (d10)

| Roll | Find |
|------|------|
| 1 | Scrap only — 2,000 C-Bills of parts |
| 2 | Weapon intact — random from weapons table (WORN quality) |
| 3 | Armor plates — repair one location fully |
| 4 | Heat sinks (2) — upgrade cooling |
| 5 | Targeting computer — +1 to ranged attacks (one mech) |
| 6 | Complete limb — replace destroyed arm/leg |
| 7 | Engine parts — reduce repair time by half |
| 8 | Clan-tech component — valuable trade or personal upgrade |
| 9 | Intact mech — damaged but salvageable (d4 weeks repair) |
| 10 | LosTech — Star League era component, exceptional quality |

---

### DropShip Events (d10)

| Roll | Event |
|------|-------|
| 1 | Crew argument escalates — factions forming. Pick a side? |
| 2 | Engine trouble — delayed d4 days. Someone sabotaged it? |
| 3 | Distress signal — civilian ship. Respond = delay. Ignore = guilt. |
| 4 | Pirate intercept — pay toll, fight, or bluff (CHA DC 16) |
| 5 | Passenger has information — will trade for protection |
| 6 | Training accident in mech bay — ally's mech damaged |
| 7 | Letter from home — news changes everything |
| 8 | Stowaway discovered — refugee, spy, or assassin? |
| 9 | JumpShip captain demands extra payment — contract says otherwise |
| 10 | Intelligence update mid-transit — mission parameters changed |

### Downtime Complications (d8)

| Roll | Complication |
|------|--------------|
| 1 | Repair part unavailable — tech needs a favor from someone unpleasant |
| 2 | Bar fight with rival unit — Honor and bruises at stake |
| 3 | Love interest complication — they're connected to the enemy |
| 4 | Debt collector arrives — old obligation, bad timing |
| 5 | Old friend appears — needs help. Last time nearly killed you. |
| 6 | Mech acting strange — phantom signals, unexplained responses (Sync?) |
| 7 | Political summons — testify at tribunal about last mission |
| 8 | Job offer from rival faction — better pay, worse conscience |

### Mech Quirks (d10, for inherited/salvaged mechs)

| Roll | Quirk |
|------|-------|
| 1 | Previous pilot's kill-tally etched inside cockpit — 47 marks |
| 2 | Targeting computer drifts left — +1 to called shots RIGHT arm |
| 3 | Reactor runs hot — starts at Heat 1, but +1 cooling capacity |
| 4 | Myomer bundles in right arm overperform — +1 melee, right side |
| 5 | Ejection seat unreliable — DEX DC 14 for emergency eject (not 12) |
| 6 | Previous pilot's personal log still in computer — plot hook |
| 7 | Hull groans in cold — -1 stealth in ice/night, but +1 in heat/desert |
| 8 | ECM ghost — occasionally shows phantom contacts (WIS DC 12 to filter) |
| 9 | Engine noise distinctive — enemies recognize approach, allies find you |
| 10 | Star League component hidden inside — LosTech. Worth a fortune. Stolen. |

---

## QUICK NPC GENERATOR

```
CASTE (d6): MechWarrior | Noble | Technician | Merchant | Spy | Civilian
DISPOSITION (d6): Hostile | Suspicious | Professional | Friendly | Desperate | Fanatical
FACTION (d8): Davion | Kurita | Steiner | Liao | Marik | Clan | ComStar | Independent
SECRET (d8): Double agent | Dispossessed heir | Clan spy | Debt crushing |
             Vendetta target | LosTech hoarder | Bastard noble | Wanted criminal
MOTIVATION (d6): Duty | Revenge | Wealth | Honor | Freedom | Love
MECH (d6): None | Light | Medium | Heavy | Assault | OmniMech (Clan)
```

---

## NPC TEMPLATES

```
=== LANCE COMMANDER ===
Stats: STR 3 | DEX 4 | CON 3 | INT 4 | WIS 3 | CHA 3
HP: 34 | AC: 14 | Mech: Heavy (Marauder/Thunderbolt) | Sync: 5
Abilities: Coordinate (+2 to one ally/round), Veteran's Sense (ADV initiative)
Motivation: Mission completion, lance survival
Secret: [roll — lost a lance before, owes debt, hiding noble identity]

=== CLAN WARRIOR (TRUEBORN) ===
Stats: STR 4 | DEX 4 | CON 4 | INT 3 | WIS 2 | CHA 2
HP: 42 | AC: 16 | Mech: Heavy OmniMech (Timber Wolf) | Sync: 6
Abilities: Zellbrigen (refuses dishonorable tactics), Gene-bred (+1 all physical)
Motivation: Honor, bloodname, gene-legacy
Weakness: Cannot break honor code without WIS DC 18. Predictable.

=== SOLARIS CHAMPION ===
Stats: STR 3 | DEX 5 | CON 3 | INT 3 | WIS 3 | CHA 4
HP: 34 | AC: 15 | Mech: Custom Medium (unique variant) | Sync: 7
Abilities: Crowd Favorite (+2 when audience present), Called Shot (-4 not -6)
Motivation: Fame, money, the perfect fight
Weakness: Addicted to applause. Won't fight without audience. Contracts bore them.

=== COMSTAR ADEPT ===
Stats: STR 1 | DEX 2 | CON 2 | INT 5 | WIS 4 | CHA 4
HP: 26 | AC: 12 | Mech: None (but commands hidden Level II) | Sync: 0
Abilities: HPG Access (instant communication), Information Broker, Hidden Army
Motivation: ComStar's secret agenda (varies by era)
Weakness: Fragile personally. Remove from network = powerless.

=== PIRATE KING ===
Stats: STR 3 | DEX 3 | CON 4 | INT 2 | WIS 3 | CHA 4
HP: 42 | AC: 13 | Mech: Assault (battered Atlas, held by will) | Sync: 4
Abilities: Intimidation Aura (WIS DC 14 or -2 morale), Dirty Fighter (ignore zellbrigen)
Motivation: Territory, crew loyalty, revenge on someone specific
Weakness: No allies outside crew. Surrounded by potential betrayers.

=== NOBLE COURTIER ===
Stats: STR 1 | DEX 2 | CON 2 | INT 4 | WIS 4 | CHA 5
HP: 26 | AC: 11 | Mech: None (has proxies fight for them) | Sync: 0
Abilities: Political Network (shift favor clocks), Leverage (knows secrets)
Motivation: Power, dynasty, survival
Weakness: Cannot fight own battles. Dependent on warriors. Despised by soldiers.

=== TECH CHIEF ===
Stats: STR 2 | DEX 3 | CON 2 | INT 5 | WIS 3 | CHA 2
HP: 26 | AC: 12 | Mech: None | Sync: 0 (but understands it theoretically)
Abilities: Miracle Worker (repair impossible damage given time), Salvage Eye (+2 salvage rolls)
Motivation: The machines. Knowledge. LosTech obsession.
Weakness: Social disaster. Says wrong thing at court. Alienates warriors.
```

### Legendary Characters

```
HANSE DAVION (The Fox): CHA 7, INT 6, WIS 5 | LEGENDARY
  Master politician-warrior. Married an alliance, conquered a state
  as wedding gift. Fights fair — and still wins.

THEODORE KURITA: DEX 6, WIS 6, CHA 5 | DEADLY
  Reformed the Combine from within without breaking it. Bushido
  made flexible. Secretly pragmatic beneath perfect honor.

NATASHA KERENSKY (Black Widow): DEX 7, STR 5, CON 5 | LEGENDARY
  Wolf's Dragoons then Clan Wolf. 80 years old, deadliest pilot alive.
  Sync unknown (probably 8+). Kills for joy. Nobody challenges twice.

KAI ALLARD-LIAO: DEX 6, INT 5, WIS 5 | DEADLY
  Greatest Solaris champion ever. Half-Davion, half-Liao. Self-doubt
  that makes him try harder. Humble and unstoppable.

AIDAN PRYDE: STR 5, DEX 5, CHA 4 | DEADLY
  Trueborn who failed his Trial, cast down to freeborn, stole back trueborn identity. Earned bloodname through
  impossible Trials. Broke every Clan rule and proved the system wrong.

PHELAN KELL/WARD: CHA 6, DEX 5, WIS 5 | DEADLY
  Inner Sphere mercenary who became Clan Wolf Khan. Bridge between
  worlds. Hated by purists on both sides. Loved by pragmatists.
```

---

# PART IX: GM GUIDELINES & QUICK REFERENCE

---

## LANCE DYNAMICS

If the player commands a lance (up to 4 mechs), other pilots are Companions.

```
LANCE STRUCTURE:
  Star (Clan): 5 mechs. Point/Nova/Striker/Sweep/Star Commander.
  Lance (IS): 4 mechs. Lead + 3 wingmen.
  Demi-lance: 2 mechs. Battle buddy system.

COMPANION MECHWARRIORS:
  Use base system Companion rules (clock 0-6, loyalty tests)
  Each has: name, personality, mech, one ability, one weakness
  
  Loyalty modifiers in BattleTech:
  +1: Fair salvage split, protect them in combat, shore leave
  -1: Use them as bait, steal salvage, ignore their requests
  SPECIAL: Companion whose mech is destroyed = loyalty test DC 18
    Success: angry but stays | Fail: leaves (taking grudge) | Crit.Fail: defects to enemy

LANCE TACTICS (require Commander role OR INT 4+):
  FOCUS FIRE: All lance targets one enemy. Each after first: +1 to hit.
  HAMMER & ANVIL: Split lance. Flanking lance: +2 to hit from behind.
  FIGHTING WITHDRAWAL: Coordinated retreat. No opportunity attacks.
  SCREEN: Light mechs draw fire. -2 to hit screened heavies.
  
  Coordination check: INT DC 12 (clear orders), DC 16 (mid-combat change)
  Failed coordination: lance acts individually (no tactics bonus)
```

---

## GM PRINCIPLES (BATTLETECH)

```
MECH IS PERSONAL:
- Every hit lands on the pilot's soul. Describe pain, not just damage.
- Mech destruction = identity crisis. Never trivialize it.
- Good session: player talks TO their mech.
- Bad session: mech feels like a vehicle.

POLITICS MATTER:
- Every combat has political consequences.
- "Who ordered this?" matters more than "who won?"
- The pilot who wins the battle but loses court = lost.
- Good session: player agonizes over honor vs pragmatism.

SCARCITY DRIVES STORY:
- Mechs are irreplaceable (Succession Wars). Every component matters.
- Money is tight. Repairs cost. Ammo costs. Friends cost.
- Abundance kills tension. Never let them be comfortable.

SCALING AT HIGH SYNC:
- At Sync 7+, pilots get +3/+4 to all mech rolls. They ARE legends.
- Scale opposition: use DCs 18-24, enemy aces with Sync 6+, ambush scenarios.
- High-Sync pilots should feel powerful — but hunted. Everyone wants their mech.
- The real danger is political, not combat. They can't be beaten in the cockpit.

HONOR IS A TRAP:
- High Honor looks good — until it paralyzes.
- The paradox should HURT. Make them feel the cage.
- NPCs exploit honor. Enemies study your code and weaponize it.
- Good session: player discovers their honor is being used against them.

FACTION IDENTITY:
- Davion NPCs keep oaths even when stupid.
- Kurita NPCs die rather than bend.
- Steiner NPCs buy what they can't fight.
- Liao NPCs lie about lying about lying.
- Clan NPCs cannot understand compromise.
- Play the culture. Make it feel alien from another faction's perspective.

ESCALATION:
- Start personal (one mech, one lance). Scale to wars.
- The player is NEVER a general. Always a warrior.
- War happens around them. They affect it — do not control it.
```

---

## SESSION ZERO CHECKLIST

```
1. Era? (Succession Wars recommended for first campaign)
2. Campaign type? (House / Mercenary / Solaris / Clan)
3. Faction? (determines honor code, enemies, culture)
4. Solo warrior or lance command? (solo = this system. Lance = companions.)
5. Tone? Dark (Jihad) / Standard (Succession Wars) / Heroic (Clan Invasion)
6. Politics: Central / Background / Minimal?
7. Romance/Marriage mechanics: Include / Exclude?
8. Mech destruction: Frequent (hardcore) / Rare (dramatic) / Varies?
9. Starting Sync: 0 (fresh pilot) / 3 (veteran) / 5+ (experienced, risky)
10. Nemesis: Start with one or develop in play?
```

---

## QUICK REFERENCE

```
THE SYNC (0-10): How deep you've merged with your mech.
  0 Disconnected → 3 Bonded → 5 Melded → 7 Fused → 9 Ghost → 10 Dissolved
  Grows: combat, maintenance, refusing ejection, choosing mech over people
  Shrinks: human connection, voluntary separation, ejection
  Bonuses: +1 combat per 2 levels (3-4=+1, 5-6=+2, 7-8=+3, 9=+4)
  Cost: Shared HP, phantom pain, social penalty, identity loss

HONOR (0-10): Your political capital within your faction.
  0 Disgraced → 3 Baseline → 6 Respected → 8 Honored (Paradox) → 10 Paragon
  Five different codes: Davion (chivalry) | Kurita (bushido) | Steiner (contract)
    | Liao (face) | Clan (zellbrigen)
  Paradox at 8+: your code becomes a cage. Enemies exploit it.

HEAT (0-10 clock): Your mech's thermal state.
  0-2 Cool | 3-4 Warm (-1) | 5-6 Hot (-2) | 7-8 Critical (-3, shutdown risk)
  | 9 Meltdown Warning (-4) | 10 Meltdown (shutdown, explosion risk)
  Gain: weapons fire, sprinting, damage | Lose: -3/round standard cooling

COMBAT: d20 + stat + Sync bonus vs AC
  Weapons: Energy (no ammo, high heat), Ballistic (ammo, moderate heat),
    Missile (ammo, indirect), Physical (no heat, close range)
  Location: d8 (Head/CT/LT/RT/LA/RA/LL/RL)
  Crits: when internal structure hit, d6 for system damage

WEIGHT CLASSES:
  Light (20-35t): fast, fragile, +2 evasion
  Medium (40-55t): balanced, flexible
  Heavy (60-75t): powerful, slow, +2 melee
  Assault (80-100t): devastating, priority target, +4 melee

FACTIONS AT A GLANCE:
  Davion = chivalry (predictable, honorable, exploitable)
  Kurita = bushido (fanatic, precise, rigid)
  Steiner = wealth (heavy metal, logistics, social generals)
  Liao = face (deception, elite, paranoid)
  Marik = democracy (defensive, fractured, diplomatic)
  Clans = honor combat (superior tech, predictable tactics, bid down)

DUEL TYPES:
  Solaris: arena + crowd clock | Clan Trial: batchall + bid-down
  Personal Grudge: nemesis clock determines intensity
```

---

---

## THE MECHWARRIOR'S OATH

```
I name my mech and it names me.
I bleed when it bleeds. I burn when it burns.
My house demands my honor. My mech demands my soul.
Between these two fires, I am forged — or consumed.
There is no middle ground. There is no peace.
There is only the next battle, and the question:
who am I without sixty tons of steel around my heart?
```

---

*"In the BattleTech universe, the only constant is war. The only truth is that your mech will outlive you — unless you love it enough to die together."*
