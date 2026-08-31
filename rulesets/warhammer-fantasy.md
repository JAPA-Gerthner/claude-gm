> **LANGUAGE:** Preferred session language is **Russian**. This file is stored in English for token efficiency only.

# WARHAMMER: IRON LAW

---

## PITCH

The world is collapsing.

Empires rot from within.
Chaos seeps from the north.
The dead refuse to stay buried.

Order suffocates.
Chaos consumes.
Decay waits.

You survive between them.

Every choice preserves you.
Every choice destroys you.

---

## BASE SYSTEM

Uses gm-skill.md core mechanics:
- d20 + stat vs DC (margin-based: Crit.Fail / Fail / Partial / Success / Crit)
- Six stats: STR, DEX, CON, INT, WIS, CHA
- Core 0–6 clocks, Heroism, Companions, stat-threshold Abilities
- Core combat action economy, natural 1/20 tier shifts, death saves
- Writing style, response format, player rules

**This ruleset adds:** Forces, Condition, Fate/Fortune, Winds of Magic, Mutations,
Faction Drift, Pressure Clocks, and Warhammer-specific content.

### Explicit inheritance contract

The following are the ONLY base mechanics replaced by IRON LAW:

```
REPLACES: ATTRIBUTES — CON HP formula
  Warhammer HP = CON × 5 + 10.

REPLACES: ATTRIBUTES — starting stat scale
  Warhammer PCs may start at stat 0. Mortal starting range is 0–5;
  6+ remains supernatural. After all creation modifiers, minimum stat is 0.

REPLACES: COMBAT — AC formula
  Warhammer armor uses AC = 10 + DEX contribution + armor bonus.
  Heavy armor caps DEX contribution at +1.

REPLACES: MAGIC — IF PRESENT
  The core circle/cooldown magic system is inactive. Use Winds of Magic,
  Overcast, and Miscast from this ruleset instead.
```

Everything else inherits from gm-skill.md unless a later rule uses an explicit
`REPLACES:` or `DISABLES:` label. In particular, core stat-threshold abilities,
Heroism, natural 1/20 outcome shifts, death rules, and ordinary 0–6 clocks remain active.

---

## ERA & CANON MODE

Default campaign era is the **Karl Franz Era, c. 2522 IC**, because the named
NPC roster and the Colleges of Magic in this file are written for late-era
Warhammer Fantasy Battle.

At session start, the player may instead choose:

```
2276 IC — WARHAMMER: THE OLD WORLD
  Empire: the Anarchy; no single Emperor.
  Colleges of Magic: not yet founded; human wizardry is provincial, courtly,
  religious, hedge, or otherwise locally regulated.
  Named mortal characters from the Karl Franz era are replaced with
  era-appropriate figures. Long-lived characters may remain where lore allows.
  Skaven are far less visible in the established surface history of this era.

2522 IC — KARL FRANZ ERA (default)
  Use the named NPCs, institutions, and political assumptions in this file.

2524+ IC — END TIMES
  Only by explicit player choice. Increase world clocks and existential pressure.

CUSTOM — GM defines date and filters named characters/institutions accordingly.
```

**Canon-density note:** Cathay is supported by modern official material. Araby
has substantial legacy material but varies by edition. Nippon, Ind, and Khuresh
remain comparatively sparse in official detail; entries below are deliberately
minimal and should be expanded by campaign generation rather than presented as
fixed canon.

---

## DC REFERENCE

Use the gm-skill.md DC scale unchanged:

```
5   Trivial — formality; failure means something is wrong
8   Easy — simple task for a trained person
12  Medium — requires skill; standard challenge
16  Hard — difficult even for an expert
20  Very Hard — peak human ability
24  Extreme — legendary feat
28+ Impossible — supernatural territory
```

The Old World is harsher through consequences, Force pressure, Condition,
Suspicion, and scarcity — not by secretly changing locked DCs.

---

# PART I: THE THREE FORCES

---

## FORCE SYSTEM

Three forces shape everything. Every person, faction, place, and item exists somewhere in this triangle.

```
         ORDER
        /     \
       /       \
      /   YOU    \
     /             \
CORRUPTION ——— DECAY
```

Each force: 0–10 scale.
Starting total across all three: max 4.

---

## CORE RULE: ONE FORCE EVENT PER SCENE

Per scene or encounter, resolve at most ONE base Force event. A single event may move one or two Forces when the same act genuinely serves both pressures (for example, enforcing quarantine by burning a village can be Order + Decay).

```
Choose the most significant driver/event:
- how the problem was solved
- what the character chose under pressure
- the dominant method (lawful / brutal / apathetic)

STANDARD EVENT: +1 total positive Force
MAJOR / DUAL / AMPLIFIED EVENT: up to +2 total positive Force, split across one or two Forces as appropriate
CATASTROPHIC EVENT: up to +3 total positive Force (rare, GM only)

INACTION on a pressing matter: +1 Decay
Reductions caused by the same event do not count toward the positive-gain cap.
```

### Amplifiers

The following can increase the scene's total positive Force gain by +1 (max +2 unless catastrophic):

```
- Killing a sentient being (if central to the scene)
- Magic as the primary solution
- Extreme methods (torture, mass collateral, burning a village)

If multiple apply: still cap at +2 total positive gain.
GM records one Force event; split it across two Forces only when the action truly has two distinct pressures.
```

### What Does NOT Generate Shifts

```
Routine actions, individual attacks, incidental casts.
Minor actions within a scene are noise — only the scene's OUTCOME matters.
```

Target pacing: ~2-5 Force from SCENE EVENTS per session. Explicit DIRECT costs can push the total higher; that is intentional when characters embrace dangerous power.

GM assigns force shift. Player may argue, GM decides.

### Direct Force Shifts

The one-event cap governs **scene Force events** only. Some rules explicitly
charge a **DIRECT Force shift**: Push (Force), Dhar, Chaos Magic, Necromancy,
Chaos Marks, patron effects, and similar supernatural prices.

```
DIRECT FORCE SHIFT:
- applies immediately when its trigger says so
- bypasses the one-scene-event cap
- is not also counted again as the scene's normal Force event
- never exists implicitly: if a rule does not say DIRECT, use the scene event system
```

This distinction prevents incidental attacks or ordinary spell spam from
silently generating extra Force while preserving deliberately dangerous magic.

---

## THREE PRESSURE CURRENCIES

IRON LAW revolves around three pressure currencies. They are not the only
resources in gm-skill.md: Heroism, Fate, ability uses, clocks, HP, equipment,
and companion/faction relationships still exist.

```
FORCE     = strategic price (long-term transformation)
            "Who are you becoming?"

CONDITION = tactical price (immediate injury/strain)
            "Can you survive right now?"

FORTUNE   = insurance (limited, spend to avoid imposed consequences)
            "Do you burn your luck?"
```

A significant IRON LAW choice should normally expose at least one of these
pressures. It does not need to literally spend one every time.

---

## PUSH

Before any roll — declare Push. Choose your price:

```
PUSH (FORCE):  +1d4 to the roll
               DIRECT +1 to a Force that fictionally powers the action
               −1 to next related roll (the shift destabilizes you)
               You sell a piece of your future.

PUSH (BODY):   +1d6 to the roll
               +1 Condition directly
               Ignore Condition penalties for THIS roll (adrenaline)
               You break yourself right now.
```

For Push (Force), name the aligned Force before rolling. The fiction must support
it; at Corruption 5+ the Corruption hijack rule still applies.

Both cost something now AND later. Choice is real. A declared Push cost cannot
be canceled by Fortune or another insurance effect.

Cannot Push both ways on the same roll. Overcast is the magic form of Push and
cannot be combined with a separate ordinary Push on that casting roll.

---

## ORDER

Law, structure, civilization, control.

```
BENEFITS:
+ social acceptance (Order factions trust you)
+ institutional access (armies, guilds, courts)
+ discipline (advantage on group tactics)

COSTS:
- individuality erodes
- empathy dulls
- flexibility lost
```

### Order Thresholds

```
0-2: FREE — no effect
3:   CAUTIOUS — −1 to reckless/impulsive actions
     You hesitate before breaking rules.
4-5: DISCIPLINED — +1 to organized actions, −1 to improvisation
     You follow procedure instinctively.
6:   RIGID — disadvantage CHA vs outsiders, heretics, foreigners
     You see threats everywhere.
7:   ZEALOUS — must report heresy/corruption when detected
     Failure to report: WIS save DC 14 or +1 Condition
8:   AUTHORITARIAN — must follow chain of command
     Disobedience: +1 Condition. You enforce rules on others.
9:   INQUISITOR — −2 CHA (except intimidation), +2 vs Chaos
     You are feared. Even allies keep distance.
10:  SYSTEM AGENT — GM partial control
     You are the machine. Identity subsumed by duty.

--- BEYOND 10: REQUIRES DIVINE PATRONAGE (Order patron) ---

11:  AVATAR OF LAW — you ARE the institution.
     Automatic advantage on all Order-aligned actions.
     Cannot disobey patron's doctrine. Not "won't" — cannot.
12:  ASCENDED — character becomes instrument of patron.
     Effectively NPC. Campaign epilogue moment.
```

### Reducing Order

```
-1: Act against authority for personal conviction
-1: Show mercy where law demands punishment
-1: Spend extended time outside civilization (1+ week)
-2: Betray your faction for moral reasons
Institutional rank creates no Force floor. Acting against your office may cost faction reputation, authority, or rank, but Order itself can still fall.
```

---

## CORRUPTION

Chaos, emotion, power, transformation.

```
BENEFITS:
+ raw strength (+1 melee damage at Corruption 4+)
+ magical power (+1 to casting at Corruption 3+)

COSTS:
- sanity erodes
- control slips
- identity fractures

CORRUPTION AND CONTROL:
Corruption 5+: PUSH (FORCE) always adds +1 Corruption.
  You wanted Order? Decay? No. Chaos hijacks Force-based escalation.
  PUSH (BODY) is unchanged — you can still break your body, not your soul.
Corruption 7+: on natural 1 (any roll), GM controls your next action.
  Brief moment. You watch yourself do something you didn't intend.
Corruption 9+: in stressful moments, WIS save DC 16 to keep control.
  Fail = one action, GM's choice.

Power stays. Agency goes. That's the deal.
```

### Corruption Thresholds

```
0-2: CLEAN — no effect
3:   TOUCHED — dreams, whispers. −1 WIS saves vs Chaos.
     Routine mutation checks begin at 18+ (see Mutations).
4-5: MARKED — minor physical signs (concealable).
     +1 casting, −1 WIS saves. Daemons notice you.
6:   UNSTABLE — visible marks possible.
     On any natural 1: roll on CHAOS BACKLASH (not just magic).
     Routine mutation checks now succeed on 14+.
7:   DANGEROUS — involuntary outbursts.
     WIS save DC 14 in stressful situations or act on impulse.
8:   MUTATED — gain a Major Mutation if not already.
     −2 CHA (except intimidation). +2 casting; CHAOS BACKLASH on natural 1-3.
9:   DAMNED — Chaos gods actively court you.
     GM may offer Chaos bargains. Refusing costs +1 Condition.
10:  LOST — Chaos Spawn or dark ascension.
     Character becomes NPC. Roll new character.

--- BEYOND 10: REQUIRES DIVINE PATRONAGE (Corruption patron) ---

11:  CHAMPION — patron's chosen. Daemon weapon or major gift.
     +3 to patron-aligned actions. Other gods' followers attack on sight.
12:  DAEMON PRINCE or SPAWN — campaign ends one way or another.
     Ascension if patron is pleased. Spawn if not. GM decides.
```

### Chaos Backlash

Roll when a Corruption threshold explicitly tells you to. This is a generic
Chaos consequence, not the spell Miscast table.

```
CHAOS BACKLASH (d8):
1: +1 Condition — seizure, internal tearing, sudden fever
2: −2 to next related roll — intrusive impulse or sensory distortion
3: Mutation check immediately
4: Nearby mundane item spoils, cracks, rusts, or warps; GM chooses something relevant
5: DIRECT +1 Corruption — the breach widens
6: Lose Reaction until your next turn; outside combat, lose your next quick response
7: Brief involuntary act/utterance chosen by GM; cannot directly self-kill
8: Chaos notices — tick the most relevant Chaos/Patron/Regional pressure clock +1
```

If the same casting roll triggers both CHAOS BACKLASH and a Miscast, resolve
only the **higher-severity Miscast**. Do not stack both tables on one die result.

---

### Reducing Corruption

```
PATH OF LIGHT (costly, rare):
-1: Holy site pilgrimage + ritual cleansing (rare, quest)
-1: Great deed for Order god (GM determines)
-1: Witch Hunter/Priest exorcism (painful: +2 Condition)
-2: Grail Chapel blessing (Bretonnia, if Lady accepts)
-1: Dwarfen rune of warding (expensive, requires Dwarf ally)
-2: Ally performs exorcism/intervention at personal risk (GM-triggered)
    Works even above Corruption 7. They may take DIRECT +1 Corruption themselves.
    Chaos doesn't let go — someone has to grab you and pull.

PATH OF BLOOD (easier, darker):
-1: Sacrifice a sentient being in ritual (victim dies or gains permanent debuff)
    DIRECT +1 Decay. Chaos doesn't vanish — it transfers through suffering.
-1: Brutalize enemy in combat as offering (kill + dedicate to Chaos god)
    DIRECT +1 Decay. Skulls for the skull throne. You feel less each time.
-2: Sacrifice someone who trusts you (ally, follower, prisoner who surrendered)
    DIRECT +2 Decay. The screaming stops. So does something inside you.
    Risk: GM rolls d20. On 1-4: patron god demands MORE. DIRECT +1 Corruption back.

Chaos transfers through violence. It doesn't cleanse — it moves.
Corruption goes down. Decay goes up. You traded one rot for another.

Cannot reduce Corruption below total mutation levels. Each mutation result is one level; duplicate/intensified results add another level.
Removing one mutation level requires a legendary quest and reduces the floor by 1.
```

---

## DECAY

Death, stagnation, persistence, entropy.

```
BENEFITS:
+ endurance (+1 CON saves at Decay 3+)
+ resistance (advantage vs poison/disease at Decay 4+)
+ at Decay 5+: ignore Condition 1 AND 2. Pain doesn't register.
+ at Decay 7+: immune to Fear, Terror, Intimidation, mind control.
  Nothing reaches you. Nothing can.
+ at Decay 8+: don't need to eat or sleep; may still take downtime to gain rest recovery.
  You just... continue.

COSTS:
- emotion fades
- initiative dies
- meaning evaporates

Decay = strongest defense in the game. Price = you stop being human.
```

### Decay Thresholds

```
0-2: FRESH — no effect
3:   DETACHED — −1 CHA in emotional contexts.
     Colors seem duller. Food tastes like nothing.
4:   RESISTANT — advantage poison/disease. You stopped flinching.
5:   NUMB — ignore Condition 1+2 penalties. Cannot gain advantage from ally Help.
     On first crossing into Decay 5, each present companion clock ticks −1 once.
6:   HOLLOW — immune to Fear. −2 CHA, −1 WIS.
     DISABLES: forming NEW companion bonds, including first-time RIGHT HAND
     binds and ALLEGIANCE recruitment. Existing companion bonds still function.
7:   IMPERVIOUS — immune Fear, Terror, Intimidation, mind control.
     You forget names. Old memories blur.
8:   UNDYING — don't need food or sleep. Half movement.
     You may still spend 8h in downtime to receive normal Long Rest recovery;
     you simply do not need to sleep during it.
9:   EMPTY — −3 CHA. No emotional response. Allies may leave.
10:  UNDEAD STATE — character functionally dead inside.
     Becomes NPC or revenant. Roll new character.

--- BEYOND 10: REQUIRES DIVINE PATRONAGE (Decay patron) ---

11:  DEATHLESS — you don't die. Not because you're strong.
     Because death forgot you. Condition 4 from HP loss no longer starts death saves and lethal HP thresholds cannot kill you; explicit campaign-ending effects still can.
     But you feel nothing. −4 CHA. Allies leave.
12:  ETERNAL — undead lord, barrow-king, or void entity.
     Campaign epilogue. You outlast everything. Including the story.
```

### Reducing Decay

```
PATH OF LIFE (costly, rare):
-1: Genuine emotional connection (rare — GM judges authenticity)
-1: Create something meaningful (art, building, saving a life)
-1: Extended rest in vibrant community (1+ week)
-2: Resurrection from near-death (paradox: dying can restore will to live)
-2: Someone who cares risks themselves to reach you (GM-triggered, not player-initiated)
    Works even above Decay 7. The empty are saved by those who remember them alive.

PATH OF HUNGER (easier, darker):
-1: Drain life force from a living being (victim permanently weakened: -1 stat or chronic illness)
    DIRECT +1 Corruption. You feel alive again. Stolen warmth.
-1: Consume vitality through dark ritual or vampiric feeding (victim ages d20 years)
    DIRECT +1 Corruption. Their years become your fire.
-2: Devour someone completely — body, soul, essence (victim dies, no resurrection possible)
    DIRECT +2 Corruption. You burn with borrowed life. It won't last.
    Risk: GM rolls d20. On 1-4: addiction. Next time Decay rises, must feed or DIRECT +2 Decay.

The dead don't return to life through love. They feed.
Decay goes down. Corruption goes up. You traded emptiness for hunger.

Hardest force to reduce either way. Decay is patient.
```

---

## FORCE INTERACTIONS

```
TRIANGULAR TENSION:
- Fighting Chaos often requires Order → +Order
- Fighting Order often requires breaking rules → +Corruption
- Doing nothing → +Decay
- Using undead against Chaos → trades Corruption for Decay
- Enforcing law through violence → Order AND Corruption risk

DRIFT:
Characters naturally drift toward one force.
The more you use a force's benefits, the faster it grows.

BALANCE IS TEMPORARY:
Total forces always increase over time.
A character at 3/3/3 is more doomed than one at 7/1/1.
Specialists survive longer but are more extreme.
```

---

## FORCE SHIFT EXAMPLES

```
ACTION                                      FORCE
Report heretic to Witch Hunters             +1 Order
Torture prisoner for information            +1 Order, +1 Corruption
Use Dark Magic to save ally                 DIRECT +2 Corruption (Dhar cost)
Ignore suffering villagers                  +1 Decay
Enforce unjust law                          +1 Order
Refuse to act on clear threat               +1 Decay
Burn village to stop plague                 +1 Order, +1 Decay
Accept Chaos gift for power                 DIRECT +2 Corruption (or gift's listed cost)
Raise dead to fight Chaos                   DIRECT +1 Corruption, +1 Decay (Necromancy)
Kill Witch Hunter to protect mutant friend  +1 Corruption, −1 Order
Wait out a siege doing nothing              +2 Decay
```

---

## DIVINE PATRONAGE

One-time event. Player only.

```
TRIGGER: first time ANY Force reaches 7.
GM offers ONE patron aligned with that Force.
Based on character history — not a menu. The god chooses you.

ACCEPT:
  - Gain 1 ability (GM designs per patron)
  - That Force cap extends to 12 (instead of 10)
  - Patron Clock starts at 0 (see below)
  - No second patron. Ever. The god doesn't share.

REFUSE → UNBOUND:
  - No patron. Ever. Door closes permanently.
  - All three Force caps extend to 11 (instead of 10)
  - Gain 1 ability (GM designs — defiance, void, survival)
  - No Patron Clock. No obligation. No safety net.
  - You walk alone. Everything is harder. Everything is yours.

EXTENDED-CAP OVERRIDE:
  - A Force reaching 10 normally causes the listed terminal/agency-loss state.
  - If a patron extended THAT Force to 12: at 10 apply all threshold penalties/transformation flavor, but postpone NPC/terminal loss; 11 uses the patron-specific threshold, 12 is terminal/epilogue.
  - If UNBOUND extended a Force to 11: at 10 apply all threshold penalties/transformation flavor, but the player retains agency. Reaching 11 is the terminal Force end-state (system tyrant / spawn-like corruption / deathless revenant, as appropriate).

POLYTHEISTIC EXCEPTION:
  Norsca or any campaign-defined polytheistic culture — GM may offer 2 competing
  patrons. The gods fight over you. You pick. GM decides when
  this applies.
```

---

## PATRON CLOCK

The contract. Your god gave you power. Your god expects return.

```
CLOCK: 0–6

Ticks UP when you act against your patron's nature.
GM judges — no table needed. You know the deal. So does your god.

0-2: FAVORED — ability at full power. Patron is pleased.
     Occasional visions, signs, warmth. You are watched over.

3-4: STRAINED — ability weakened (half effect or situational).
     Dreams turn sour. Omens go wrong. Faithful NPCs sense it.

5:   FORSAKEN — ability gone. Patron sends a final sign.
     One last chance. Next tick is permanent.

6:   ABANDONED — patron withdraws. Permanently.
     Ability lost forever. Force cap returns to 10.
     If the patron-aligned Force is already above 10, set it to 10 and
     immediately resolve that Force's normal terminal/agency-loss state.
     You kept everything you became. Lost everything you were given.
     Worse than Unbound — they chose freedom. You failed a god.

REDUCING THE CLOCK:
  -1: Great deed aligned with patron (GM judges)
  -1: Sacrifice something meaningful in patron's name
  -2: Quest or pilgrimage demanded by patron
  GM decides. Gods are not vending machines.

EXAMPLES:
  Khorne patron, refuse combat → +1 clock.
  Sigmar patron, use Dark Magic → +1 clock.
  Nurgle patron, seek cure for your own rot → +1 clock.
  The Lady, show cowardice → +1 clock.
  Morr patron, disturb the dead → +1 clock.
  Ursun patron, abandon Kislev → +1 clock.
```

---

## PATRONAGE EXAMPLES

```
Kislevite soldier hits Order 7 → Ursun claims her.
Bretonnian knight hits Order 7 → the Lady appears.
Nurglite cultist hits Corruption 7 → Grandfather welcomes him home.
Strigoi vampire hits Decay 7 → Ushoran's shadow falls.
Norse raider hits Corruption 7 → Khorne and Tzeentch both call.
  GM offers choice of two.
Empire witch hunter hits Order 7 → Sigmar. Who else.
Desperate nobody hits Corruption 7, refuses → Unbound.
  No god wants him. Or: every god wanted him and he said no.
```

---

# PART II: CONDITION & FORTUNE

---

## CONDITION

Condition is a separate 0–4 trauma track with an **HP floor**. HP determines
the minimum physical Condition, while strain, fear, heavy impacts, and special
rules can push Condition above that minimum.

```
HP = CON × 5 + 10

HP FLOOR FOR CONDITION:
76-100% max HP -> minimum Condition 0
51-75%          -> minimum Condition 1
26-50%          -> minimum Condition 2
1-25%           -> minimum Condition 3
0 HP or less    -> minimum Condition 4

CURRENT CONDITION EFFECT:
0: HEALTHY  — no penalty
1: HURT     — −1 to rolls
2: WOUNDED  — disadvantage on rolls
3: CRITICAL — disadvantage; before a strenuous action, CON or WIS DC 14.
               Fail: the action is lost/aborted. Partial+: act normally.
4: COLLAPSED — state depends on cause; see below.
```

Use only the current tier's listed roll penalty; tiers do not stack their −1
and disadvantage with each other.

### Condition 4: Collapse vs Dying

Condition 4 is not automatically death.

```
LETHAL PHYSICAL COLLAPSE (HP <= 0):
  Use gm-skill.md DEATH normally: unconscious, death saves each turn.

CON 6 UNKILLABLE:
  Core ability overrides the normal 0 HP collapse exactly as written.
  At HP <= 0 the character remains conscious and fights while bleeding out;
  death threshold is −CON×5 and death saves begin only when combat ends.
  Condition remains 4, but UNKILLABLE permits actions despite collapse.

NONLETHAL PHYSICAL COLLAPSE (HP > 0):
  Incapacitated from shock/strain until stabilized (Medicine INT DC 12,
  healing magic, or a safe short rest). No death saves unless HP also reaches 0.

MENTAL COLLAPSE (fear/horror/betrayal/mind attack):
  Breakdown, not bodily death. Cannot act meaningfully until immediate danger
  passes or WIS DC 14 succeeds. Recover to Condition 3 and gain a Disorder.
```

### Condition Direction

```
When HP falls, raise Condition to at least the new HP floor.
When HP rises, the HP floor may fall — but current Condition does NOT.
Healing HP therefore stops physical danger without erasing trauma.
Only explicit Condition recovery reduces the track.
```

### Gaining Condition

```
NORMAL DAMAGE:
  Reduce HP, then raise Condition to at least the resulting HP floor.

HEAVY HIT:
  A single hit >= 25% max HP -> after applying the HP floor, +1 Condition.

MASSIVE HIT:
  A single hit >= 50% max HP -> after applying the HP floor, +2 Condition.

CRIT DAMAGE:
  Resolve core Crit damage, then apply Heavy/Massive thresholds to final damage.

PUSH (BODY):
  +1 Condition directly. This declared cost cannot be canceled by Fortune.
  At Condition 3, the roll still resolves; afterward you reach 4 and collapse.

MENTAL SHOCK:
  +1 Condition directly when a rule says so. Mental Condition 4 is a breakdown,
  not death. Crit.Fail Fear/Terror may add Force as specified by that system.
```

Condition cannot exceed 4.

### Recovering Condition

Condition recovery requires time and safety. HP healing alone never lowers it.

```
4 -> 3 (lethal physical): stabilize per core death rules, Fate, or powerful magic.
4 -> 3 (nonlethal/mental): immediate aid + 10 minutes safe recovery, or relevant magic.
3 -> 2: one Long Rest in safety + Medicine INT DC 14.
         Without medicine: two safe Long Rests.
2 -> 1: one safe Long Rest with basic care.
         Without care: two safe Long Rests.
1 -> 0: one Short Rest in a safe location.
         If the location is unsafe, requires a Long Rest instead.

Unsafe conditions never permit 3->2 or 2->1 recovery; at best they stabilize
Condition so it does not worsen from neglect.
```

After reducing Condition, it can never go below the current HP floor.

### Fear & Terror

Fear/Terror use the core WIS save and the Condition track. Roll only on first
meaningful exposure to that source in a scene unless circumstances escalate.

```
FEAR N:   WIS DC = 10 + (2 × N)
TERROR N: WIS DC = 12 + (2 × N)

Crit.Fail: +1 Condition, Frightened; Terror also loses next main action.
Fail:      +1 Condition, Frightened for 1 round / one exchange.
Partial:   Frightened for 1 round / one exchange; no Condition.
Success:   resist.
Crit:      resist and immune to that source's Fear/Terror for the scene.
```

`Fear 1`, `Terror 1`, and `Terror 3` in NPC templates use this scale. Immunity
to Fear/Terror ignores these rolls entirely.

### NPCs

```
NPCs use the same HP floors and Condition 0–4 track when the extra detail matters.
Minor NPCs may simply use HP and narrative wounds to reduce bookkeeping.

FORCES: Track exact Forces only for recurring NPCs, key antagonists, and faction
leaders. For minor NPCs, assign a rough Order/Corruption/Decay bias and apply it
narratively unless their transformation matters to the story.
```

### Marks (Trauma)

When a character reaches physical Condition 4 and later recovers to 3, gain a
permanent Mark. This includes stabilization through death saves, Fate, or recovery
from a nonlethal physical collapse.

```
MARKS (d8, or GM picks):
1. Paranoid — −1 CHA, advantage on Perception vs ambush
2. Reckless — +1 attack, −1 AC
3. Numb — −1 CHA, immune to Fear
4. Obsessive — +1 INT (specific topic), must pursue related goals
5. Violent — +1 melee damage, WIS DC 12 or escalate conflicts
6. Haunted — −1 WIS at night, advantage on Undead/Chaos knowledge
7. Broken — −1 all social, +2 resist Intimidation
8. Fanatic — +1 aligned faith actions, −2 to compromise

3+ total Marks/Disorders = character unplayable. They have been broken too many times.
```

### Disorders (Mental Trauma Marks)

If Condition 4 was caused by mental trauma, use this table instead of Marks.
The Disorder is gained when the character recovers from the breakdown to 3.

```
DISORDERS (d8, or GM picks):
1. Paranoia — −1 CHA, advantage to detect ambush
2. Phobia — specific trigger, WIS DC 12 or +1 Condition
3. Hallucinations — GM may introduce false perceptions
4. Flashbacks — stress triggers: lose action (WIS DC 12 to resist)
5. Dissociation — ignore Fear, −2 social
6. Obsession — fixate on topic, ignore other goals
7. Voices — +1 to Chaos-aligned actions, −1 WIS
8. Emotional numbness — −2 CHA, resist manipulation

Same limit: 3+ total Marks + Disorders = unplayable.
```

---

## FATE

Fate is a permanent meta-resource: a finite mistake of destiny.

```
FATE: ★★ (typical Human/Dwarf start; origin may differ)

Spend 1 Fate when the character WOULD DIE from:
- 3 failed death saves
- massive-damage instant death
- reaching the UNKILLABLE death threshold (−CON×5)
- another explicit lethal effect

If CON 10 DEATHLESS is available, resolve DEATHLESS first. Fate is offered only
if the character would still die after all automatic core prevention effects resolve.

FATE EFFECT:
- death is canceled
- HP becomes 1
- Condition becomes 3 (or the HP floor, if somehow higher)
- clear current death-save successes/failures
- gain a physical Mark appropriate to the event

Fate never refreshes. When it's gone — it's gone.
Nothing else spends Fate. Nothing restores it unless a future rule explicitly says so.

STARTING FATE (by origin):
Human: 2 | Dwarf: 2 | Elf: 1 | Halfling: 3 | Other: 1
```

---

## FORTUNE

Session resource. Your safety net for everything short of death.

```
FORTUNE: ◆◆◆ (3/3)

SPEND TO:
- Reroll any one die (keep second result)
- Add +2 to any roll (declare before result)
- Force enemy to reroll one attack against you
- Reduce an imposed/direct incoming Condition gain by 1
- Reduce an imposed incoming Force shift by 1

LIMITS:
- Fortune cannot reduce Condition below the current HP floor.
- Fortune cannot cancel a voluntarily declared cost: Push, Overcast, Devil's Bargain,
  Chaos Mark, sacrifice, or any effect explicitly labeled as an accepted price.
- Fortune cannot cancel death. Use Fate for that.

STARTING FORTUNE (by origin):
Human: 3 | Dwarf: 2 | Elf: 2 | Halfling: 4 | Other: 2
```

Fortune refreshes each session. Does NOT regenerate mid-session.

Fortune does NOT cheat death. That's what Fate is for.

---

# PART III: CHARACTERS

---

## CHARACTER CREATION

### Step 1: Origin

```
=== HUMAN ===
Fate: 2 | Fortune: 3
Trait: Adaptable — choose +1 to any stat
Common: Empire, Bretonnia, Kislev, Tilea, Estalia, Araby, Cathay, Nippon

=== DWARF ===
Fate: 2 | Fortune: 2
Traits: Sturdy (+1 CON), Grudgebearer (must record wrongs),
        Magic Resistant (advantage on magic saves, cannot be wizard)
Common: Karaz Ankor holds

=== HIGH ELF ===
Fate: 1 | Fortune: 2
Traits: Refined (+1 INT), Ancient Knowledge (advantage lore checks),
        Fragile Pride (−1 CHA when humiliated)
Common: Ulthuan

=== WOOD ELF ===
Fate: 1 | Fortune: 2
Traits: Wild (+1 DEX), Forest Movement (no terrain penalty in forests),
        Isolationist (−1 CHA in cities)
Common: Athel Loren

=== HALFLING ===
Fate: 3 | Fortune: 4
Traits: Small (advantage stealth, disadvantage heavy weapons),
        Lucky (one bonus Fortune spend per session; does NOT increase the Fortune pool above 4),
        Overlooked (when a crowd incident would raise Suspicion, reduce that gain by 2, minimum 0)
Common: The Moot, Empire

=== DARK ELF ===
Fate: 1 | Fortune: 2
Traits: Cruel (+1 CHA intimidation), Pain Tolerance (ignore the roll penalty from Condition 1 in combat),
        Paranoid (advantage detect betrayal)
Common: Naggaroth

=== OGRE ===
Fate: 1 | Fortune: 1
Traits: Massive (+2 STR, +1 CON, −2 INT, −1 CHA),
        Always Hungry (hunger clock if starved),
        Thick Skin (+1 natural AC)
Common: Ogre Kingdoms, mercenary companies

=== SKAVEN ===
Fate: 1 | Fortune: 2
Traits: Cunning (+1 DEX), Paranoid (advantage detect betrayal),
        Cowardly (disadvantage vs Fear if alone, advantage if outnumber),
        Warpstone Affinity (+1 to rolls using warpstone items; routine mutation checks treat Corruption as 1 higher)
Common: Under-Empire
```

### Step 2: Role

```
=== SOLDIER ===
Bonus: +1 STR or CON
Training: all specialized weapons and armor
Special: BATTLE-HARDENED — reduce the first Heavy/Massive bonus or other imposed Condition gain each combat by 1. Cannot suppress the HP floor or a declared Push cost

=== WITCH / MAGE ===
Bonus: +1 INT, choose one Wind (see Magic)
Special: ATTUNED — sense magic within 30ft (WIS DC 12)

=== PRIEST / FAITHFUL ===
Bonus: +1 WIS or CHA, choose one god (see Faith)
Special: DIVINE CHANNEL — prayer for blessings (CHA + faith modifier vs DC)

=== AGENT / HUNTER ===
Bonus: +1 WIS or DEX
Special: CONCEALED ARMS — +2 to hide/draw Concealed weapons; draw one as a bonus action
Special: READ THE ROOM — one free hidden WIS check per scene

=== ROGUE / OUTCAST ===
Bonus: +1 DEX or CHA, advantage on black market
Special: UNDERWORLD — criminal contacts in any settlement (CHA DC 12)

=== NOBLE / DIPLOMAT ===
Bonus: +1 CHA, starting wealth one tier higher
Special: AUTHORITY — 1/scene, before a CHA roll where formal rank is recognized, gain ADV. On Crit.Fail, lose 1 relevant faction reputation or gain +1 Suspicion

=== ENGINEER / SCHOLAR ===
Bonus: +1 INT
Training: complex mechanical devices
Special: TINKER — jury-rig solutions (INT check, may create complications)

=== SLAYER (Dwarf only) ===
Bonus: +2 STR, no armor (AC = 10 + DEX + floor(CON/2))
Special: DEATHSEEKER — immune to Fear/Terror. DISABLES: retreat/flee actions while the Slayer oath remains active.
         +1 damage per Condition level. Oath: seek death against monsters.
```

### Specialized Training

The core system has no proficiency layer. IRON LAW uses a small training rule
only for genuinely specialized equipment.

```
SPECIALIZED: Heavy weapons, blackpowder/Loading weapons, Heavy armor,
             complex engineering devices, and GM-tagged exotic gear.
UNTRAINED:   −2 to relevant attack/DEX/INT rolls with that specialized gear.
             Wearing Heavy armor untrained also reduces movement by 5ft.
COMMON GEAR: no proficiency check or penalty.
```

Soldier training covers specialized weapons and armor. Engineer training covers
complex mechanical devices. Other backgrounds/abilities may grant training explicitly.

---

### Step 3: Background

```
Imperial Citizen — Order 2, Corruption 1, Decay 1
Cult Survivor — Order 1, Corruption 2, Decay 1
Gravewalker — Order 1, Corruption 1, Decay 2
Frontier Drifter — Order 1, Corruption 1, Decay 1 (+1 anywhere)
Military Deserter — Order 0, Corruption 2, Decay 1 (+1 free)
Noble Exile — Order 2, Corruption 1, Decay 0 (+1 free)
Witch's Apprentice — Order 0, Corruption 2, Decay 1 (+1 free)
Kislev Refugee — Order 1, Corruption 1, Decay 2
Dwarf Exile — Order 2, Corruption 0, Decay 2
```

### Step 4: Stats

```
Standard array: 3, 2, 2, 1, 1, 0
Assign to STR, DEX, CON, INT, WIS, CHA
Apply origin + role modifiers, then clamp any negative final stat to 0.
Stats 0–5 are mortal; 6+ is supernatural.

HP = CON × 5 + 10
AC = 10 + DEX contribution + armor bonus
Heavy armor: DEX contribution capped at +1
```

---

# PART IV: COMBAT

---

## BASICS

Uses gm-skill combat core. Additions below.

```
Initiative: d20 + DEX
Turn: Movement (30ft) + Action + Bonus Action (if available) + Reaction
```

---

## COMBAT FORCE RULE

Combat is a scene. One Force shift per scene rule applies.

```
GM determines the shift by HOW the fight was fought:

ORDER:      disciplined, tactical, followed orders, protected civilians
CORRUPTION: brutal, excessive, enjoyed it, went too far
DECAY:      mechanical, felt nothing, just survived

AMPLIFIERS (can raise scene shift to +2):
- Killing a sentient being (central to the scene)
- Extreme methods (overkill, collateral, dark magic in combat)
- Choosing to fight when you could have talked

CHOOSING TO FLEE when allies need you: scene shift = +1 Decay.
```

---

## ATTACK & DAMAGE

```
Melee: d20 + STR vs AC
Ranged: d20 + DEX vs AC
Damage: weapon die + STR (melee) or DEX (ranged). Finesse weapons use STR or DEX for BOTH attack and damage

STANCES:
Aggressive: +2 attack, −2 AC
Defensive: −2 attack, +2 AC
Charge: move 20ft+, +2 damage, −2 AC (mounted: +4 damage, lance d12)

FLANKING: 2+ allies in melee with same target = +2 attack each
```

---

## WEAPONS

```
MELEE:
Dagger          d4      Light, Finesse, Concealed     3s
Sword           d8      Versatile (d10 two-handed)    15s
Greatsword      2d6     Two-handed, Heavy             2gc
Rapier          d8      Finesse, Parry                25s
Halberd         d10     Two-handed, Reach             20s
Spear           d6      Reach, Versatile (d8)         1s
Warhammer       d8      Armor Piercing                15s
Great Weapon    2d6     Two-handed, Heavy, Slow       2gc
Flail           d8      Ignores shield AC             12s
Dwarf Axe       d10     Quality (+1 hit)              5gc
Elf Blade       d8      Finesse, +1 to hit            10gc

RANGED:
Shortbow        d6      80ft    Two-handed            10s
Longbow         d8      150ft   Two-handed            1gc
Crossbow        d8      100ft   Loading               1gc
Handgun         d10     80ft    Loading, Loud, AP     5gc
Pistol          d8      30ft    Loading, Loud         4gc
Repeater Xbow   d6      60ft    3 shots/reload        8gc
Blunderbuss     2d6     20ft    Loading, Loud, Cone   6gc

PROPERTIES:
Light — dual-wield | Heavy weapon — needs STR 3+ | Finesse — STR or DEX for attack+damage
Reach — +5ft | Loading — action to reload | Loud — normally audible up to 300ft
Parry — reaction +1 AC | Armor Piercing — ignore 2 AC from armor
Concealed — advantage to hide | Slow weapon — −2 Initiative while readied
Cone — 15ft cone, DEX DC 12 half
Repeater Xbow 3 shots/reload — magazine holds 3 attacks; reloading the magazine is one action
```

---

## ARMOR

```
Leather         +2                                10s
Studded Leather +3                                25s
Chain Shirt     +4      Noisy                     2gc
Breastplate     +5                                10gc
Half Plate      +6      Noisy                     25gc
Full Plate      +8      Noisy, Heavy, Slow        100gc
Gromril Armor   +9      Heavy                     Priceless
Ithilmar Mail   +6                                Priceless
Chaos Plate     +7      Heavy, DIRECT +1 Corruption/day worn  Cursed

Buckler         +1      Two-hand weapon OK        8s
Shield          +2                                1gc
Tower Shield    +3      −5ft movement             3gc

ARMOR PROPERTIES:
Noisy — disadvantage on Stealth when movement/sound matters
Heavy — DEX contribution to AC capped at +1; counts as Specialized training
Slow — −5ft movement while worn
```

---

## CRITICAL HITS

Use the core attack outcome first. A natural 20 shifts the outcome one tier
better; it is **not** an automatic Crit if the shifted result still falls below Crit.

On a final **Crit outcome**, apply the core double damage dice and choose/apply
one relevant weapon effect:

```
Slashing — Bleeding (d4/round until Medicine INT DC 12)
Piercing — +1 extra weapon damage die after the core doubling
Bludgeoning — CON DC 12 or Stunned 1 round
Fire — Burning (d6/round until extinguished)
Chaos — DIRECT +1 Corruption and mutation check
```

Do not double damage a second time because the d20 was a natural 20.

---

## MOUNTED COMBAT

```
War Horse: HP 20, AC 12, Movement 60ft
Mounted: +2 melee vs unmounted, charge +4 damage (lance d12)
Ride By: attack + continue moving (no opportunity attack)
Horse killed: DEX DC 12 or prone + d6 damage
```

---

## CURRENCY

```
Gold Crown (gc) = 20 Silver Shillings (s) = 240 Brass Pennies (p)

STARTING WEALTH BY ROLE:
Soldier/Agent: Comfortable (1d6 gc)
Mage/Priest: Modest (2d6 s)
Rogue: Modest + hidden stash (d6 s)
Noble: Wealthy (3d6 gc)
Engineer: Comfortable (1d6 gc)
Slayer: Poor (doesn't care)
```

---

# PART V: MAGIC

---

## OVERVIEW

Magic channels raw Chaos through mortal will. Every spell is a controlled disaster.

```
CASTING: d20 + INT + Wind Affinity vs DC
Wind Affinity: +0 initiated/untrained | +2 trained | +4 master

ACCESS:
- No magical access: cannot cast.
- Witch/Mage role starts with one chosen Wind at TRAINED (+2).
- INITIATED/UNTRAINED (+0) means the character has explicit access but little training.
- MASTER (+4) requires a major teacher, ability, or level-up reward.

DC: 10 cantrip | 13 standard | 16 powerful | 20 legendary | 24+ mythic
```

Magic as the primary solution to a scene is a scene Force amplifier (+1 total
scene shift, within the normal scene cap). The shift aligns with the Wind used.
There is no generic per-cast Force gain unless a spell tradition says DIRECT COST.

Core level-up option `new spell` is interpreted in IRON LAW as either a new
signature technique within an accessible Wind or access to a new Wind at +0,
subject to narrative training.

---

## MAGIC LIMITS

```
SUSPICION: Magic ticks Suspicion only when witnessed, traceable, or when
  illegal evidence remains. Visible sanctioned magic is usually +1; dark magic
  is +2; daemon summoning is +3. Truly unseen/subtle magic gives no automatic
  tick unless detection or later evidence exposes it. See Pressure Clocks.

WIND RESISTANCE: Same magical solution to similar problem = +2 DC cumulative.
  First fireball to clear a room: DC 13.
  Second fireball next room: DC 15.
  Third: DC 17.
  Winds resist routine. They are alive and bored by repetition.
  Resets after long rest or genuinely novel application.
```

---

## OVERCAST

Overcast IS a Push. Same rules:

```
OVERCAST (FORCE): +1d4 to casting, DIRECT +1 Corruption (any Wind)
OVERCAST (BODY):  +1d6 to casting, +1 Condition directly (magical feedback)
```

Maximum **one Overcast per casting roll**. It is the casting roll's Push, so it
cannot stack with an ordinary Push or a second Overcast. Declared Overcast costs
cannot be canceled by Fortune.

---

## SPELL EFFECTS

No spell lists. Describe intent, GM sets DC.

```
DAMAGE:     d6 cantrip | 2d6 standard | 3d6 powerful | 4d6 legendary
CONTROL:    1 round cantrip | d4 rounds standard | d6 rounds powerful
PROTECTION: +1 AC cantrip | +2 AC standard | shield dome powerful
HEALING:    stabilize cantrip | d8+INT standard | 2d8+INT powerful
UTILITY:    minor trick cantrip | invisibility standard | teleport powerful
```

---

## MISCAST

```
Resolve the casting check and core natural-1 tier shift first, then resolve
at most ONE Miscast at the highest triggered severity:

Natural 1-2: Minor Miscast
Natural 1 + fail by 5+: Major Miscast
Any Overcast + natural 1-2: Major Miscast
Corruption 6+, any failed cast: at least Minor Miscast

If CHAOS BACKLASH and Miscast trigger on the same casting die, use the Miscast only.

MINOR (d8):
1: Stunned 1 round
2: +1 Condition (internal burns)
3: Spell hits wrong target
4: Alerts everyone 500ft (+1 Suspicion clock)
5: DIRECT +1 Corruption
6: Half effect
7: Blinded 1 round
8: Cannot cast until next round

MAJOR (d10):
1-2: +2 Condition, knocked prone, DIRECT +1 Corruption
3: DIRECT +2 Corruption, whispers
4: Lesser daemon appears (fight it)
5: Wild magic — random effects, GM improvises
6: Permanent mutation (roll table)
7: Portal flickers — something notices you
8: Spell inverts (heal→harm, shield→vulnerability)
9: DIRECT +1 Corruption to everyone within 10ft
10: Maximum power random direction. 3d6 area. DIRECT +2 Corruption. +2 Suspicion Pressure Clock.
```

---

## THE EIGHT WINDS

### Order Winds

```
HYSH (Light) — Force: Order
Banishment, truth, purification.
Bonus: +2 damage vs Daemons/Undead
Risk: blindness (miscast: WIS DC 14 or blinded d4 rounds)

AZYR (Heavens) — Force: Order
Lightning, divination, fate.
Bonus: 1/day ask GM one yes/no about the future (truthful, may be cryptic)
Risk: lost in visions (miscast: WIS DC 14 or catatonic 1 round)

CHAMON (Metal) — Force: Order
Transmutation, armor, alchemy.
Bonus: +1 AC while actively casting
Risk: petrification (miscast: CON DC 14 or −5ft movement 1 hour)

HIGH MAGIC (Elf only) — Force: Order
Any Wind effect at +2 DC. Access to all Winds at +0 unless separately trained; master of none by default.
Risk: Minor Miscast becomes Major; if Major already triggered, roll twice on the Major table and apply the more severe fitting result (no third Miscast tier)
```

### Corruption Winds

```
AQSHY (Fire) — Force: Corruption
Destruction, explosions, passion.
Bonus: +2 fire damage all fire spells
Risk: combustion (miscast: d6 fire to self, flammables ignite)

ULGU (Shadow) — Force: Corruption
Stealth, illusion, fear.
Bonus: advantage Stealth while maintaining shadow spell
Risk: lost in shadows (miscast: WIS DC 14 or confused 1 round)

DHAR (Dark Magic) — Force: Corruption
Raw power, no finesse. Any effect.
Bonus: +2 to all casting rolls
DIRECT COST: +2 Corruption per cast. This is the entire Dhar Force cost;
do not add another generic +1 for casting.
Risk: at least Minor Miscast on natural 1-4; normal rules may upgrade it to Major. Illegal almost everywhere; enforcement depends on era/region.

CHAOS MAGIC (god-aligned) — Force: Corruption
Varies by patron god.
DIRECT COST: +2 Corruption per cast.
Not a Wind — raw Chaos through devotion.
```

### Decay Winds

```
SHYISH (Death) — Force: Decay
Death magic, spirits, endings.
Bonus: speak with dead (1 question per corpse, truthful)
Risk: undead attention (miscast: nearest dead animate briefly)

NECROMANCY (Shyish + Dhar) — Force: Decay + Corruption
Raise dead, drain life, bind spirits.
Bonus: raised undead serve for INT hours
DIRECT COST: +1 Decay AND +1 Corruption per cast/use.
Illegal almost everywhere; Miscast may turn raised dead hostile.
```

### Mixed Winds

```
GHYRAN (Life) — Scene alignment: caster chooses Order or Corruption when the magic contributes to the scene Force event
Healing, growth, nature.
Bonus: increase healing dice one step (d8→d10; 2d8→2d10). Stabilize cantrips are unchanged
Risk: uncontrolled growth (miscast: plants erupt 10ft, difficult terrain)

GHUR (Beasts) — Scene alignment: caster chooses Order or Corruption when the magic contributes to the scene Force event
Shapeshifting, animal control.
Bonus: beast form (1 hour, INT determines control)
Risk: lose humanity (miscast: WIS DC 14 or beast mind d4 hours)
```

---

# PART VI: FAITH

---

## OVERVIEW

Gods are real. Prayer uses CHA + faith modifier vs DC and core margin outcomes.

```
PRAYER DC: 8 small sign | 12 useful blessing | 16 major intervention | 20+ miracle

God relationship uses a core 0–6 faction-style reputation clock:
Rep 0: blessings denied
Rep 1-2: CASUAL   (+0 faith modifier)
Rep 3-4: DEVOTED  (+2 faith modifier)
Rep 5-6: CHAMPION (+4 faith modifier)
```

At Rep 5-6, once/session before rolling a prayer, declare Divine Favor: the
prayer resolves as a normal Success (not Crit). Declared use is spent even if the
fiction later makes it unnecessary, per the core activation-cost rule.

The first answered prayer in a scene causes DIRECT +1 to that god's aligned Force
(most Empire gods: Order). Further answered prayers in the same scene add no
additional Force. Faith is not a separate stat/track; the 0–6 relationship clock
is the source of the tier and modifier.

---

## EMPIRE GODS

```
SIGMAR — Unity, Hammer
Blessings: +1 vs Chaos, inspire allies, smite undead
Sins: cowardice, tolerating heresy

ULRIC — Winter, War
Blessings: cold resistance, +1 melee, wolf companion
Sins: using fire in combat, showing weakness

MORR — Death, Rest
Blessings: turn undead, prophetic dreams, peaceful death
Sins: disturbing dead, necromancy

RANALD — Thieves, Luck
Blessings: reroll 1/day, +2 stealth, escape bonds
Sins: murder for profit, snitching

SHALLYA — Mercy, Healing
Blessings: heal d10, cure disease, calm emotions
Sins: ANY violence, refusing to heal

VERENA — Justice, Truth
Blessings: detect lies (auto), +2 INT investigation
Sins: false testimony, destroying knowledge

TAAL & RHYA — Nature, Fertility
Blessings: animal friendship, weather sense
Sins: unnecessary destruction of nature

MANANN — Seas, Storms
Blessings: calm seas, navigation, water breathing
Sins: disrespecting the sea
```

---

## ELVEN GODS

```
ASURYAN — fire immunity (1 round), +2 vs Chaos
KHAINE — +2 melee, frenzy (risk: DIRECT +1 Corruption)
ISHA — healing (as Shallya for elves)
VAUL — repair any item, +1 crafted weapons
```

---

## DWARFEN GODS

```
GRUNGNI — +2 crafting, rune activation
GRIMNIR — +2 melee, immune Fear (1 encounter)
VALAYA — magic resistance aura (allies +2 vs magic), heal d8
```

---

## CHAOS GODS

Not for prayer. For bargains.

```
KHORNE — +STR, rage, blood frenzy. Must kill. Hates magic.
Mark: +1 STR, immune to magic (can't cast or be healed).

TZEENTCH — +INT, spell power, foresight. Trust nothing.
Mark: +1 INT, +2 casting, miscast on 1-4.

NURGLE — +CON, disease immunity, regeneration. Body rots.
Mark: +2 CON, regen d4/round, −2 CHA, stench.

SLAANESH — +CHA, +DEX, supernatural senses. Addiction.
Mark: +1 CHA, +1 DEX, advantage social, must pursue pleasure (WIS DC 14).

Accepting a Chaos Mark: DIRECT +3 Corruption. Permanent. Cannot be removed.
```

---

# PART VII: MUTATIONS

Mutations are consequences of Corruption thresholds, not a separate system.

## Trigger

After a single event finishes changing Corruption, make **at most one routine
mutation check** using the final Corruption value:

```
Corruption 0-2: no routine check
Corruption 3-5: d20 18+ -> Minor Mutation
Corruption 6-7: d20 14+ -> Minor Mutation
Corruption 8-9: d20 10+ -> Minor Mutation
Corruption 10+: automatic Minor Mutation if the character is still playable

SPECIAL TRIGGERS:
- Corruption 8 threshold grants a Major Mutation if the character lacks one;
  this replaces the routine check for that same Corruption-gain event.
- Major Miscast / explicit Chaos exposure / explicit Chaos gift may call for a
  mutation check even without Corruption gain.
- One fictional event never creates multiple mutation checks unless it explicitly
  says it grants multiple mutations.
```

## Severity

```
MINOR MUTATION: roll once on the d12 table.
MAJOR MUTATION: always Visible; roll twice and apply both results.
  If a result duplicates an existing mutation, intensify it instead.
  Each result/intensification counts as one mutation level for the Corruption floor.
```

---

## Visibility (d4)

```
1:   HIDDEN — internal, no sign
2:   CONCEALABLE — hide with effort
3-4: VISIBLE — obvious (+2 Suspicion clock)
```

## Mutation (d12)

```
1:  Extra organ (+1 CON, pains)
2:  Chaos dreams (−1 rest, visions)
3:  Witch-sight (see magic, −1 WIS)
4:  Black blood (toxic to others, d4)
5:  Scales (+1 AC, itch)
6:  Clawed hand (d6 unarmed, no fine work)
7:  Tail (+1 DEX checks)
8:  Horns (d4 headbutt, +1 intimidation)
9:  Wrong skin color (+2 Suspicion)
10: Animal features (−2 CHA, +1 WIS)
11: Extra limb (choose +5ft reach OR 1/combat bonus-action light/unarmed attack at −2; no extra main action)
12: Beast legs (+10ft movement, no boots)

DUPLICATE: same mutation = intensifies.
  Scales → full body (+2 AC). Horns → antlers (d6).
  Tail → barbed (d6 attack). Claws → both hands.
```

---

## Mutations in Society

```
Empire: death sentence
Kislev: exile
Bretonnia: burned
Dwarfs: extremely resistant, not immune. Mutation is rare and treated as catastrophic shame
Elves: killed or exiled
Chaos lands: normal, celebrated
Border Princes: depends on local lord
```

---

# PART VIII: FACTIONS

---

## OVERVIEW

Factions are expressions of forces. Use base clock system (0-6) for reputation.

As forces shift, you drift toward aligned factions — or away from your starting one.

### Faction Drift

When a faction's listed `Drift:` matters to the campaign, create a hidden core
0–6 **Drift Clock** for that faction.

```
Start: 2/6 unless the campaign begins mid-crisis.
Tick ↑: faction solves a crisis through its listed vice, player reinforces that
        method, leadership radicalizes, or external pressure rewards the drift.
Tick ↓: reform succeeds, player creates a viable alternative, moderates gain power,
        or the faction pays a real cost to resist its vice.

3/6: behavior visibly changes; new demands/penalties appear.
5/6: faction commits to the drift; opposition fractures or goes underground.
6/6: drift consequence becomes real. Resolve it, then reset to 3/6 with a new
     concrete goal or replace it with a new clock representing the transformed faction.
0/6: drift checked for now; remove the clock until new pressure appears.
```

`Drift: doesn't change` means no Drift Clock. If a faction has multiple possible
arrows, choose the one supported by current events when its clock is created.

---

## ORDER FACTIONS

```
=== THE EMPIRE ===
Core: collapsing order held by faith and fear
Force: Order (with Corruption underneath)
Drift: Order → paranoia OR recognition of rot → Corruption

Provides: legal authority, army, guilds, Witch Hunter backing
Demands: obedience, tithes, heresy reporting
Rep 5-6: Imperial Warrant (authority, requisition)
Rep 3-4: citizen (fair prices, lodging)
Rep 1-2: suspect (watched, overcharged)
Rep 0: Enemy of State (hunted)

Key: Cult of Sigmar, Colleges of Magic, Witch Hunters,
     Elector Counts, Roadwardens

=== BRETONNIA ===
Core: rigid feudal hierarchy
Force: Order (extreme)
Drift: Order → fanaticism → Decay (peasants rot while knights quest)

Provides: knightly protection, Lady's blessing
Demands: obedience to hierarchy, chivalric code
Key: Grail Knights, Damsels, Faceless (peasant resistance)

=== KISLEV ===
Core: survival at Chaos edge
Force: Order ↔ Corruption
Drift: Order (discipline) but Corruption always close

Provides: cold resistance, ice magic, frontier toughness
Demands: military service, sacrifice
Key: Ice Court (Tzarina), Kossars, Ungol tribes

=== DWARFS ===
Core: unchanging order
Force: Order → Decay (stagnation)
Drift: every generation fewer holds. They know.

Provides: runecraft, engineering, unbreakable alliances (if earned)
Demands: honor oaths, record grudges, never forgive
Rep 0: Grudged (Book of Grudges — they WILL collect)
Key holds: Karaz-a-Karak, Karak Eight Peaks, Zhufbar, Karak Kadrin, Barak Varr

=== HIGH ELVES ===
Core: refined order, fading glory
Force: Order → Decay (dying out)
Drift: tradition → resignation or desperation

Provides: high magic, ancient knowledge
Demands: respect, deference, patience
Key: Ulthuan, White Tower of Hoeth, Lothern, the Vortex

=== LIZARDMEN ===
Core: absolute order, the Great Plan
Force: Order (pure, alien)
Drift: doesn't change. That's the point.

Provides: anti-Chaos warfare, ancient magic
Demands: obedience to Plan (which you don't understand)
Key: Hexoatl, Itza, Slann Mage-Priests

=== CATHAY ===
Core: perfect balance through absolute control
Force: Order (maximum)
Provides: celestial magic, Great Bastion
Demands: conformity, zero tolerance for Chaos

=== NIPPON [LOW-CANON] ===
Official detail is sparse. Treat Nippon as a distant island realm and generate
its local states, faiths, military traditions, and Force pressures for the
campaign. Do not impose a universal Order alignment or honor/death mechanic.

=== ARABY [LEGACY-LORE; EDITION-VARIABLE] ===
Core: trade, faith, elemental pacts
Force: Order (theocratic)
Drift: Order → isolationism OR Corruption (djinn bargains gone wrong)
Provides: djinn-bound artifacts, desert warfare, trade routes
Demands: respect for sultans and caliphs, trade agreements
Key: Sultan of All Araby, Arabyan corsairs, djinn-binders

=== IND [LOW-CANON] ===
Official detail is sparse. Treat Ind as a broad eastern/southern region with
campaign-generated polities, religions, monsters, and Force alignments. Avoid
presenting one invented caste/religious model as setting-wide canon.
```

---

## CORRUPTION FACTIONS

```
=== CHAOS UNDIVIDED ===
Core: raw Chaos, all gods or none
Force: Corruption (pure)
No reputation — Chaos measures devotion in Corruption level.

Khorne: war, skulls. +STR. Must kill. Hates magic.
Tzeentch: schemes, sorcery. +INT. Trust nothing.
Nurgle: disease, endurance. +CON. Accept rot.
Slaanesh: pleasure, excess. +CHA/DEX. Always more.

=== DARK ELVES ===
Core: controlled cruelty
Force: Corruption (refined)
Drift: dependency → paranoia → more cruelty
Key: Malekith (6000 years of spite), Morathi (schemer)

=== SKAVEN ===
Core: betrayal as civilization
Force: Corruption + Decay
Drift: paranoia → self-destruction → rebuild → repeat
Key clans: Skryre (engineers), Moulder (beasts), Eshin (assassins),
           Pestilens (plague), Grey Seers (politics)
Note: "don't exist." Empire denies them. Dwarfs don't.

=== GREENSKINS ===
Core: WAAAGH!
Force: Corruption (primal)
Drift: violence → bigger WAAAGH → collapse → restart
Key: Grimgor Ironhide, Skarsnik

=== BEASTMEN ===
Core: Chaos made flesh
Force: Corruption (wild)
Drift: devolution → primal Chaos
Key: Bray-Shamans, herdstones

=== DAEMONS OF CHAOS ===
Core: Chaos itself given form
Force: Corruption (absolute — not a choice, not a drift. They ARE the force.)
No reputation — you don't ally with daemons, you survive them or serve them.
Not mortal. No agency. No force shifts. They don't become anything — they already are.
Greater Daemons: Bloodthirster (Khorne), Lord of Change (Tzeentch),
                 Great Unclean One (Nurgle), Keeper of Secrets (Slaanesh)
GM note: daemons don't negotiate. They offer. The price is always you.

=== KHURESH [LOW-CANON / OPTIONAL FRAMEWORK] ===
Official detail is sparse. Serpentine horrors and hostile jungles are useful
seeds, but a unified blood-naga empire, fixed slavery structure, and universal
Corruption alignment are optional campaign inventions, not default canon.
Generate the local threat/faction when Khuresh enters play.
```

---

## DECAY FACTIONS

```
=== VAMPIRE COUNTS ===
Core: eternal stagnation as nobility
Force: Decay + Order (empires of the dead)
Drift: loss of humanity → empty power → forever
Bloodlines: Von Carstein (political), Blood Dragon (martial),
            Lahmian (seductive), Necrarch (scholarly), Strigoi (savage)

=== VAMPIRE COAST ===
Core: undead persistence
Force: Decay
Drift: purposeless wandering → piracy as coping
Key: Luthor Harkon (mad admiral)

=== TOMB KINGS ===
Core: preserved order beyond death
Force: Decay + Order (frozen hierarchy)
Drift: absolute stasis → meaningless eternity
Key: Settra (DOES NOT SERVE), Arkhan the Black
Not evil in Chaos sense. Ancient, proud, dead. Don't step on their land.
```

---

## HYBRID FACTIONS

```
=== WOOD ELVES ===
Core: balance Order (Ariel) / Corruption (Orion)
Force: oscillates seasonally
Key: Orion, Ariel. Will kill you for entering Athel Loren.

=== OGRES ===
Core: hunger
Force: Corruption + Decay
Key: The Great Maw (god — a hole that's always hungry)

=== HALFLINGS ===
Core: survival through irrelevance
Force: low everything (that's the point)
Key: The Moot. Overlooked. Prefer it that way.

=== DOGS OF WAR ===
Core: loyalty to coin
Force: varies by company
Key: Tilean captains, Estalian duelists

=== NORSCA ===
Core: tribal honor under Chaos sky
Force: Order (tribal law, jarls, blood-oaths) + Corruption (gods demand transformation)
Drift: every generation slides further into Chaos. Some fight it. Most don't.
Provides: berserkers, skin-wolves, mammoth riders, sea raiders
Demands: strength, offerings to the Dark Gods (or your own tribe's spirits — same thing, different name)
Key: Wulfrik the Wanderer, Throgg the Troll King
Note: Norsca thinks it has a culture. Chaos thinks Norsca is a recruitment office. Both are right.

=== CHAOS DWARFS ===
Core: dwarfen order perverted by Hashut
Force: Order (industry, hierarchy, slavecraft) + Corruption (daemon-binding, Hashut worship)
Drift: Order that serves Corruption. The machinery is perfect. What it produces is monstrous.
Provides: daemon-forged weapons, hellcannon artillery, slave legions
Demands: slaves, ore, obedience to sorcerer-prophets
Key: Zharr-Naggrund (Black Fortress), Sorcerer-Prophets, Bull Centaurs, Hobgoblin vassals
Note: regular Dwarfs don't talk about them. The Grudge is too deep for words.
```

---

# PART IX: REGIONS

---

## THE EMPIRE

```
Capital/power center: Altdorf (2522: Emperor, Colleges of Magic, Grand Theogonist; 2276: Reikland center, no unified Emperor, Colleges not yet founded)
Cities: Middenheim (Ulric, militant), Nuln (industry, cannons),
        Talabheim (fortress-crater), Marienburg (trade, smuggling)
Threats: Beastmen in forests, Chaos cults in cities,
         Skaven below, Greenskins from mountains, Undead from Sylvania
Vibe: Holy Roman Empire meets Inquisition. Everything is political.
```

---

## KISLEV

```
Capital: Kislev City (rebuilt repeatedly)
Cities: Praag (cursed, walls scream), Erengrad (port)
Threats: constant Chaos raids, daemons, internal Gospodar/Ungol tension
Vibe: Russia meets the Wall. Everyone tough. Weakness = death.
```

---

## BRETONNIA

```
Capital: Couronne
Cities: Bordeleaux (wine, sea), Mousillon (cursed, vampire duke)
Threats: Greenskins, undead in Mousillon, feudal system itself
Vibe: France at its worst. Beautiful castles, starving peasants.
```

---

## NORSCA

```
No capital. Tribal lands, frozen coast, Troll Country.
IS the threat. Vikings who worship Chaos.
Key: Wulfrik the Wanderer, Throgg the Troll King
```

---

## BADLANDS & BORDER PRINCES

```
Lawless. Petty kingdoms rise and fall.
Karak Eight Peaks: three-way war (Dwarfs/Skaven/Greenskins)
Black Fire Pass: choke point Empire↔south
Perfect for sandbox campaigns.
```

---

## ULTHUAN

```
Capital: Lothern (port)
White Tower of Hoeth (library, Swordmasters)
The Vortex (drains Chaos magic, keeps world alive)
Beautiful, ancient, slowly dying. They know.
```

---

## NAGGAROTH

```
Capital: Naggarond (Malekith's tower)
Hag Graef (gladiator pits), Karond Kar (slave trade)
North Korea meets Rome. Everyone enslaved to someone.
```

---

## LUSTRIA

```
Hexoatl (Mazdamundi), Itza (Lord Kroak's spirit)
Jungle kills, diseases kill, Lizardmen kill.
You are not welcome. Irrelevant to the Plan.
```

---

## NEHEKHARA

```
Capital: Khemri (Settra's city)
Black Pyramid of Nagash — don't go there.
Ancient Egypt but pharaohs are undead and still ruling.
Not Chaos. Just territorial.
```

---

## SYLVANIA

```
Castle Drakenhof (Von Carstein seat)
Part of Empire officially. Von Carstein territory in practice.
Fog, wolves, peasants who don't go out at night.
```

---

# PART X: PRESSURE CLOCKS

---

## OVERVIEW

The tracks in Part X are **setting-specific Pressure Clocks** on a 0–10 scale (minimum 0, maximum 10).
They do NOT replace inherited core clocks: companions, ordinary factions, items,
locations, threats, Faith relationships, and Faction Drift still use 0–6.

```
PRESSURE CLOCKS: 0–10, thresholds usually 3/6/8/10.
CORE CLOCKS:     0–6, exactly as gm-skill.md.
```

Core abilities that refer to a clock tick (for example GRAND STRATEGIST) also
apply to hostile Pressure Clock ticks unless that track explicitly says otherwise.
GM tracks these. Not player-facing unless specified.

---

## SUSPICION (Personal, per region)

```
Gain: witnessed/traceable visible magic +1, dark magic +2,
      mutation revealed +2, public/traceable violence +1,
      chaos items exposed +2, daemon summoning +3
      Unseen subtle magic = 0 unless later detection/evidence exposes it.
Reduce: lay low 1 week −1, bribe −1, new identity −1, patron vouches −2

3: NOTICED — gossip, stares
6: INVESTIGATED — Roadwardens/Witch Hunters asking
8: TARGETED — kill/capture order, professional hunters
10: EXECUTION — they found you. Fight or die.

Moving regions: reset to half (rounded up). Rumors travel.
```

---

## CHAOS SPREAD (Regional)

```
Tick ↑: cult activity, warpstone, failed banishment, time
Tick ↓: purge cult, destroy warpstone, consecrate ground

3: whispers, uneasy animals
6: organized cults, mutations appearing
8: daemons briefly manifest, blight
10: permanent portal. Region lost.
```

---

## DECAY (Regional)

```
Tick ↑: neglect, plague, undead, population decline
Tick ↓: rebuilding, healing, consecration, new life

3: plague, crop failure
6: infrastructure collapse, lawlessness
8: dead rise spontaneously
10: nothing grows. Undead domain.
```

---

## WAR (Factional)

```
Tick ↑: provocations, assassinations, political failure
Tick ↓: diplomacy, mutual threat, exhaustion

3: tension, troop movements
6: skirmishes, raids
8: open warfare
10: total war, scorched earth
```

---

## HUNGER (Vampires, Ogres, Ghouls)

```
Tick ↑: time without feeding, exertion, hunger-powered abilities
Tick ↓: feeding

3: distracted, −1 concentration
6: disadvantage WIS saves, compulsion
8: must feed or attack nearest, WIS DC 16
10: GM control. Frenzy.
```

---

## GRUDGE (Dwarf)

```
Tick ↑: time, offender prospers, new offenses
Tick ↓: vengeance, offender suffers, reparation

3: angry, −1 dealings with offender
6: must act on grudge when possible
8: obsessive, DIRECT +1 Decay
10: Slayer oath. Death or settlement.
```

---

# PART XI: NPC TEMPLATES

---

## ORDER

```
WITCH HUNTER | HP 35 | AC 14 | High
Rapier +5 (d8+2), Pistol +4 (d10)
Detect Heresy (WIS vs CHA), Magic Resistance (+2 saves)
Weakness: obsessive, misdirected by false leads

STATE TROOPER | HP 18 | AC 15 | Low
Halberd +4 (d10+2), Crossbow +3 (d8)
Shield Wall (+1 AC adjacent ally)
Weakness: poor morale alone

BRIGHT WIZARD | HP 22 | AC 11 | High
Fireball +7 (3d6 fire), Fire Bolt +6 (d8)
Fire +2 damage, Miscast on 1-2, combustion aura (d4 fire to melee)
Weakness: volatile, fears water

WARRIOR-PRIEST | HP 40 | AC 16 | High
Warhammer +6 (d8+3), Shield Bash +5 (d4+3 + prone)
+2 vs Chaos (self + allies 10ft), Heal d8 1/encounter, Turn Undead
Weakness: rigid, intolerant

GRAIL KNIGHT | HP 55 | AC 18 | Deadly
Lance +8 (d12+5 charge), Sword +7 (d8+5)
Immune Corruption, +2 all saves, Purity aura
Weakness: bound by code, cannot refuse challenge
```

---

## CORRUPTION

```
CHAOS CHAMPION | HP 65 | AC 18 | Deadly
Daemon Weapon +8 (2d8+5 + d6 Chaos)
Regen 5/round, Corruption Aura (first time it wounds a character each combat: DIRECT +1 Corruption to that character)
Weakness: arrogant, patron-bound

BEASTMAN GOR | HP 20 | AC 12 | Medium
Axe +4 (d8+2), Horns +4 (d6+2 charge)
Ambush +2 from forest, Hatred (civilization)
Weakness: easy to provoke, hates fire

CHAOS MARAUDER | HP 15 | AC 12 | Low
Axe +3 (d8+1), Javelin +2 (d6+1)
Frenzy below half HP (+2 attack, −2 AC)
Weakness: no discipline

SKAVEN ASSASSIN | HP 28 | AC 16 | High
Weeping Blades +8 (d6+5 + CON DC 14 or 2d6 poison)
Backstab +3d6, escape smoke 1/encounter
Weakness: cowardly if detected

GREY SEER | HP 35 | AC 12 | Deadly
Warp Lightning +7 (4d6, DEX DC 16 half)
Warpstone Tokens (3/day: +3 cast, DIRECT +1 Corruption each)
Weakness: paranoid, political enemies

LESSER DAEMON | HP 25 | AC 14 | Medium
Claws +5 (d8+3). Fear 1, Magic Resist +2, banished at 0 HP.

GREATER DAEMON | HP 100+ | AC 20 | Legendary
Varies by god (3d10+). Terror 3, Magic Resist +4. Corruption Aura: end of round, exposed mortals WIS DC 16; Fail = DIRECT +1 Corruption (max once/round per character).
Campaign-defining encounter. Not casual combat.
```

---

## DECAY

```
VAMPIRE LORD | HP 80 | AC 17 | Deadly
Claws +8 (2d6+5), Blood Drain (2d8+5, heals half)
Regen 10/round (not fire/holy), Domination (CHA vs WIS DC 16), Mist Form
Weakness: sunlight d10/round, stake, fire, holy

NECROMANCER | HP 25 | AC 11 | High
Drain Life +6 (2d6, heals half), Staff +2 (d6)
Raise Dead (INT DC 12, lasts INT hours), controls INT×2 undead
Weakness: frail, dependent, hunted

ZOMBIE | HP 12 | AC 8 | Low — Slam +2 (d6+1). Slow, mindless.
SKELETON | HP 10 | AC 13 | Low — Sword +3 (d6+1). Vulnerable bludgeoning.
WIGHT | HP 35 | AC 16 | High — Ancient Blade +6 (d10+3 + CON DC 14 or −1 max HP). Fear 1.
```

---

## COMMON

```
ORC BOY | HP 15 | AC 12 | Low — Choppa +4 (d8+2). Aggressive. Break if boss falls.
BLACK ORC | HP 30 | AC 16 | Medium — Great Choppa +6 (2d6+3). Disciplined. Accept challenges.
GOBLIN | HP 7 | AC 13 | Low — Shiv +4 (d4+2). Nimble Escape. Cowardly.
TROLL | HP 45 | AC 12 | High — Slam +6 (2d6+4), Vomit (2d6 acid cone). Regen 5/round (not fire). Stupid.
GIANT | HP 80 | AC 12 | Deadly — Stomp +7 (3d6+5). Terror 1. Slow, drunk.
CULTIST | HP 10 | AC 10 | Low — Dagger +2 (d4+1). Fanatical. May have mutation.
CHAOS HOUND | HP 15 | AC 12 | Low — Bite +4 (d6+2). Pack Tactics. Keen Smell.
```

---

# PART XII: RANDOM TABLES

---

## Tavern Rumors (d12)

```
1:  "Witch Hunters burned three families in Grünburg. Innocent, they say."
2:  "Merchants vanishing on the Altdorf road. Beastmen or bandits?"
3:  "Ratmen in the sewers." Innkeeper glares. "Don't say that. Illegal."
4:  "Old Morr priest says dead walk in the eastern cemetery."
5:  "Greenskins massing in Grey Mountains. Another WAAAGH!"
6:  "New physician cured plague in Wurtbad. Or caused it."
7:  "Noble lady paying for 'discreet escort' to Marienburg."
8:  "Abandoned mine reopened. Miners found something. Won't say what."
9:  "Roadwarden bounty — strange symbols on bodies by the river."
10: "Scholar buying maps to the Cursed Marshes. Gold crowns."
11: "War hero returned from Kislev. His wife says he's different."
12: "Everything's fine." (Roll twice. Both true and connected.)

TRUTH (d6): 1-2 true | 3-4 partial | 5 exaggerated | 6 false plant
```

---

## Road Encounters (d12)

```
1:  BEASTMEN — 2d4 Gors, 50% Bray-Shaman
2:  ROADWARDENS — papers check. CHA DC 12 to avoid search.
3:  REFUGEES — fleeing something. 50% useful info. All want food.
4:  CULTISTS — disguised as pilgrims. WIS DC 14 to spot.
5:  WITCH HUNTER — prisoner transport. d4: guilty/innocent/dangerous/future contact
6:  GREENSKINS — d6 Orcs + 2d6 Goblins. 50% fighting each other.
7:  TOLL — d6: 1-2 legit, 3-4 corrupt, 5-6 bandits
8:  MERCHANT — 20% contraband, 20% useful item, 10% spy
9:  DEAD BODIES — d6: Beastmen/bandits/plague/execution/monster/murderer nearby
10: NOBLE — arrogant. d4: legit job/trap/Chaos sympathizer/genuine need
11: BROKEN SHRINE — Chaos marks. Consecrate (−1 Chaos clock)? Ignore (+1 Decay)? Use (+1 Corruption)?
12: NOTHING — peaceful. Enjoy it.
```

---

## Downtime Events (d12)

```
1:  Witch Hunt — Hunters arrive, checking everyone
2:  Chaos cult evidence — symbols, missing people
3:  Plague — CON DC 14 or sick (−1 all, d6 days)
4:  Political shift — lord changes, alliances shift
5:  Greenskin raid — refugees, conscription
6:  Merchant deal — risky, d6 gc profit or debt
7:  Beastmen — supply lines attacked, food prices double
8:  Undead sighting — cemetery problems
9:  War mobilization — troops, conscription, requisition
10: Stranger — looking for you. d4: ally/enemy/employer/past
11: Festival — rest, social, info. Something will go wrong.
12: Earthquake — natural? Or something beneath stirring?
```

---

## Mission Complications (d12)

```
1:  Chaos taint — DIRECT +1 Corruption if 1+ day here
2:  Skaven below — always. They want something here too.
3:  Wrong patron — employer secretly Chaos/personal agenda/deceived
4:  Collateral — innocents in crossfire. Save = harder. Ignore = +1 Decay.
5:  Witch Hunter — your methods drew attention. Suspicion clock +2.
6:  Grudge — Dwarfs involved. Book consulted.
7:  Elf complication — ancient treaty/curse/artifact. Elves don't explain.
8:  Mutant — someone important hiding mutation. Expose = +Order. Protect = +Corruption.
9:  Undead — dead don't stay dead here. Casualties may rise.
10: Rival party — same mission. Race? Cooperate? Sabotage?
11: Daemon attention — Warp noticed. +1 Chaos Spread.
12: Clean — as described. Anomaly.
```

---

## Quick NPC Generator

```
DISPOSITION (d6): Hostile | Suspicious | Wary | Neutral | Helpful | Desperate
SECRET (d8): Cultist | Skaven collaborator | Vampire thrall | Hidden mutation |
             Criminal past | Heretical knowledge | Fugitive | None (rare)
MOTIVATION (d6): Wealth | Revenge | Safety | Power | Family | Faith
COMPETENCE (d6): 1-2 incompetent | 3-4 average | 5 skilled | 6 exceptional
```

---

# PART XIII: LEGENDARY CHARACTERS

The roster below is the **2522 IC default roster**. In 2276 IC or a Custom era,
do not import these names automatically. Keep only characters verified to exist
in the selected period and generate era-appropriate rulers, officers, wizards,
and rivals for everyone else.

```
EMPIRE: Karl Franz (Emperor, Ghal Maraz), Balthasar Gelt (Gold Wizard),
        Volkmar the Grim (Grand Theogonist)
KISLEV: Tzarina Katarin (Ice Queen)
BRETONNIA: Louen Leoncoeur (Grail King), Green Knight (immortal)
DWARFS: Thorgrim Grudgebearer (High King), Gotrek & Felix (legendary duo),
        Ungrim Ironfist (Slayer King), Josef Bugman (brewmaster)
HIGH ELVES: Tyrion (warrior), Teclis (archmage)
DARK ELVES: Malekith (Witch King), Morathi (schemer)
SKAVEN: Thanquol (fails upward), Queek Headtaker, Ikit Claw (engineer)
GREENSKINS: Grimgor Ironhide, Skarsnik, Wurrzag (shaman)
CHAOS: Archaon (Everchosen), Sigvald (Slaanesh), Valkia (Khorne), Festus (Nurgle)
UNDEAD: Nagash (first necromancer), Vlad von Carstein, Mannfred,
        Settra (DOES NOT SERVE), Arkhan the Black
```

---

# PART XIV: SCENARIO SEEDS

```
=== THE DISAPPEARANCES ===
Empire village near forest. People vanishing. Witch Hunter arrives.
d4: Beastmen ritual / Skaven slaves / Elder IS cultist / Chaos "freedom"
Forces: Order (Hunter) vs Corruption (cause) vs Decay (dying village)

=== THE INHERITANCE ===
Bretonnian estate. Noble dies. Something wrong.
d4: Chaos site / Noble was vampire / Will forged, real heir mutant / Faked death
Forces: Order (law) vs Corruption (secrets) vs Decay (rotting nobility)

=== THE KISLEV MARCH ===
Military assignment north. Something follows.
d4: Officer compromised / Suicide mission / Tomb wakes / Enemy already won
Forces: Order (duty) vs Corruption (proximity) vs Decay (war exhaustion)

=== THE UNDERCITY ===
Nuln sewers. Retrieve item. Skaven territory.
d4: Item is warpstone / Dwarf artifact / Item doesn't exist / Item is a person
Forces: Corruption (below) vs Order (above) vs Decay (what sewers do to people)
```

---

# PART XV: GM GUIDELINES

---

## FORCE PRESSURE

```
Every session: pressure at least two forces.
If forces aren't rising: you're being too easy.
Good session: players agonize over WHICH force to accept.
Bad session: players avoid force shifts entirely.
```

---

## MORAL DILEMMAS

```
Always TWO bad options. Never one good and one bad.

Template:
- Option A: +Force X
- Option B: +Force Y
- Inaction: +Decay

Examples:
- Burn village to stop plague (+Order, +Decay) OR let it spread (+Corruption, +Decay)
- Turn in mutant child (+Order) OR hide them (+Corruption)
- Use necromancy to save allies (+Decay, +Corruption) OR let them die (+Decay)
```

---

## CONSEQUENCE ESCALATION

```
MINOR: +1 scene Force, complication, NPC attitude shift
MODERATE: up to +2 scene Force, +1 Condition, clock tick, reputation change
MAJOR: up to +2 scene Force plus mutation check, companion crisis, or regional clock
CATASTROPHIC: up to +3 scene Force, transformation, faction war, regional destruction

Explicit DIRECT Force costs are applied separately and are not inflated by this table.
```

---

## SESSION START

```
1. Era? 2276 IC / 2522 IC (default) / End Times / Custom
2. Region? (determines factions, threats, tone)
3. Tone? Dark (Abercrombie) / Medium (Sapkowski) / Bleak (McCarthy)
4. Difficulty? Casual / Standard / Hardcore (per gm-skill margin thresholds)
5. Party or solo?
6. Force bias? (all Order? mixed? one Corruption character?)
```

---

# PART XVI: QUICK REFERENCE

---

## Three Pressure Currencies

```
FORCE     = who you become (strategic, long-term)
CONDITION = injury/strain right now (tactical, immediate)
FORTUNE   = insurance against imposed nonlethal consequences
Other core resources still exist: Fate, Heroism, ability uses, HP, clocks.
```

---

## Push

```
PUSH (FORCE): +1d4, DIRECT +1 aligned Force, −1 next related roll
              Small bonus now, small pain now, big price later.

PUSH (BODY):  +1d6, +1 Condition, ignore Condition penalties this roll
              Big bonus now, big pain now, adrenaline carries you through.
```

---

## Forces

```
ORDER:      law → control → oppression → system agent
CORRUPTION: power → instability → mutation → Spawn (5+: Force Push hijacked. 7+: impulse checks; 9+: control saves.)
DECAY:      survival → numbness → hollowness → undeath (5+: ignore Condition 1+2. 7+: immune mental.)

Thresholds: 3 / 6 / 8 / 10
One SCENE Force event per scene (+1 standard, up to +2 major/dual/amplified; +3 catastrophic).
Explicit DIRECT Force costs bypass that cap and are never double-counted as the scene event.
Inaction: +1 Decay. Corruption 5+: Push (Force) always → Corruption.
```

---

## Condition

```
Separate 0–4 trauma track with HP floor (CON×5+10 HP).
HP floors: 76%+→0 | 51-75%→1 | 26-50%→2 | 1-25%→3 | 0 HP→4
0 healthy | 1 hurt (−1) | 2 wounded (DIS) | 3 critical (DIS + save to act) | 4 collapsed

HP healing lowers the floor but does not automatically lower current Condition.
Condition 4 at HP<=0 = core dying state; mental/nonlethal 4 = collapse, not death.
CON 6 UNKILLABLE functions exactly as core at 0 HP and below.
Heavy hit (≥25% max HP): +1 extra Condition; Massive (≥50%): +2.
Recovering from physical 4 = permanent Mark; mental 4 = Disorder. 3+ total = unplayable.
```

---

## Fate & Fortune

```
FATE: permanent, never refreshes
  When you WOULD DIE: spend 1 → HP 1, Condition 3, clear death saves, gain Mark.

FORTUNE: per session
  Reroll | +2 | enemy reroll | −1 imposed Condition | −1 imposed Force
  Cannot cancel death, HP floor, or voluntarily declared costs.
```

---

## Magic

```
Cast: d20 + INT + Wind Affinity vs spell DC; magical access required.
Magic as primary solution = scene Force amplifier within scene cap.
Overcast = the casting roll's single Push (Force or Body); max one.
Dhar/Chaos/Necromancy list explicit DIRECT Force costs.
Miscast: resolve only the highest severity triggered on a cast.
```

---

## Clocks

```
Core clocks (companions, factions, items, locations, threats, Faith, Drift): 0–6.
IRON LAW Pressure Clocks (Suspicion, regional Chaos/Decay/War, Hunger, Grudge): 0–10.
Faction Drift uses a hidden core 0–6 clock when a listed Drift becomes active.
```

---

## The One Rule

```
You do not win.
You decide what you become.
```
