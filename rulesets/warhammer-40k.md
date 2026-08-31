> **LANGUAGE:** Preferred session language is **Russian**. This file is stored in English for token efficiency only.

# WARHAMMER 40,000 — IRON WILL

---

## PITCH

The Imperium is not civilization. It is a machine.
A machine built on faith, fear, and the corpse of a god.

Control crushes.
The Warp devours.
Entropy waits.

You serve between them.
Every order costs you.
Every power corrupts you.
Every day grinds you down.

The question is not "who will you become?"
The question is: how long can you hold?

The mission moves. The front reacts. You come back different.

---

## BASE SYSTEM

Uses gm-skill.md core mechanics:
- d20 + stat vs DC (margin-based: Crit.Fail / Fail / Partial / Success / Crit)
- Six stats: STR, DEX, CON, INT, WIS, CHA
- Core 0–6 clocks, Heroism, Companions, stat-threshold Abilities
- Core action economy, natural 1/20 tier shifts, death saves
- Writing style, response format, player rules

**This ruleset adds:** Operational Pressures, Mission Board, Scars/Adaptation,
Mission Cycle, Theater War, Rank/Standing, psychic powers, Faith, 40K armor/gear,
Morale/Fear, vehicles, and faction frameworks.

### Explicit inheritance contract

The following are the ONLY base mechanics replaced by IRON WILL:

```
REPLACES: ATTRIBUTES — CON HP formula
  Warhammer 40K PC HP = CON × 5 + 10.

REPLACES: ATTRIBUTES — starting stat floor
  40K PCs may start at stat 0 after faction/species modifiers.
  Mortal starting range is 0–5; 6+ remains superhuman/supernatural.

REPLACES: COMBAT — AC formula
  40K armor uses AC = 10 + DEX contribution + armor bonus.
  Heavy/powered armor caps DEX contribution at +2 unless a trait says otherwise.

REPLACES: MAGIC — IF PRESENT
  The core circle/cooldown magic system is inactive. Use PSYCHIC POWERS and
  FAITH from this ruleset instead.
```

Everything else inherits from gm-skill.md unless a later rule has an explicit
`REPLACES:` or `DISABLES:` label. Core stat-threshold abilities, Heroism,
natural 1/20 outcome shifts, ordinary 0–6 clocks, and core death rules remain active.

NPC templates may use explicitly listed HP/AC instead of the PC formulas.

---

## ERA MODE

Default is **ERA INDOMITUS / POST-GREAT RIFT**, because this file references the
fall of Cadia, the Cicatrix Maledictum, Guilliman, and Imperium Nihilus.

At session start the player may instead choose:

```
CLASSIC M41 — pre-Rift
  Cadia stands. No Cicatrix Maledictum. Guilliman has not yet returned.

ERA INDOMITUS — default
  Cadia has fallen. Great Rift active. Imperium Sanctus/Nihilus split applies.

CUSTOM ERA
  GM filters named people, wars, institutions, and regional state to the date.
```

Do not mix mutually exclusive era facts in the same campaign without an explicit
time-travel/alternate-history premise.

---

## OPERATIONAL PRESSURES

IRON WILL tracks three long-term pressures, but they are deliberately **asymmetric**.
They do not share one gain rule, one scene cap, or identical threshold ladders.

```
CONTROL = institutional leverage/dependence
          You gain power by mortgaging autonomy to a hierarchy.

WARP    = actual Immaterium / Chaos / psychic exposure
          Power and contamination can rise quickly and unpredictably.

ENTROPY = accumulated operational attrition
          The mission grinds down meaning, relationships, and the ability to care.
```

Default starting pressure is 0/0/0. A faction, veteran package, psyker background, or
campaign premise may start one or more tracks at 1; starting total should normally stay
at 3 or less unless the campaign explicitly begins with damaged veterans. Faction lines
labeled **Pressure bias** are guidance about common campaign stressors, not automatic
starting points or free pressure gains.

**The mission is the engine. Pressures are what the mission does to you.** Routine combat,
ordinary obedience, travel, or merely owning strange technology does not create hidden
pressure ticks. Every gain below has its own explicit trigger.

---

## OPERATIONAL ECONOMY

IRON WILL separates external mission pressure from personal deterioration:

```
MISSION CLOCKS = what the operation is doing right now
CONDITION      = immediate injury/strain
SCARS          = persistent consequences that can become adaptations
CONTROL        = institutional power purchased with autonomy
WARP           = immaterial exposure/corruption
ENTROPY        = post-mission attrition and burnout
FORTUNE/FATE   = limited insurance against bad outcomes/death
```

This is intentionally different from IRON LAW: there is no universal scene-pressure
event and no requirement to touch all three tracks every session.

---

## COMMIT

Before an important roll, the player may **COMMIT** one source of extra effort. Declare
it before rolling; the cost is paid even if the roll fails. Fortune cannot cancel it.
Only one Commit can apply to a roll.

```
COMMIT — SUPPLY:     +1d4
                     Expend one relevant ammo charge, consumable, prepared tool, or
                     mission asset. The fiction must contain something real to burn.

COMMIT — BODY:       +1d6
                     +1 Condition after the roll. You force the body past safe limits.

COMMIT — AUTHORITY:  +1d6
                     +1 Control after the roll. Requires Rank/Standing and a plausible
                     institution, chain of command, Path, caste, dynasty, warband, etc.
                     The institution now has one more claim on you.
```

Psychic power does not use a generic Warp Commit. Psykers use **OVERCHANNEL** in the
Psychic Powers section; Chaos gifts and relics state their own Warp costs. Faith uses its
own prayer rules.

---

# PART I: OPERATIONAL PRESSURES

---

## CONTROL

Control is **institutional capture**, not a morality meter. Rank/Standing is what the
system lets you command; Control is how much of yourself you have mortgaged to keep using
that authority. Imperial hierarchy is the common example, but the same mechanic can model
a Craftworld Path, Greater Good caste structure, dynastic protocol, brood hierarchy,
a Boss's dominance, or a Chaos warband's creed.

### Gaining Control

Routine obedience does **not** raise Control. Gain it only when autonomy is exchanged for
real leverage or binding structure:

```
+1: COMMIT — AUTHORITY
+1: accept a meaningful promotion/indoctrination that creates new binding duties
+1: accept institutional surgery, secrecy, absolution, protection, or equipment
    specifically in exchange for ownership/debt
+1: use AUTHORITY OVERRIDE to exceed mission requisition/authorization
+1: knowingly obey a binding Directive at severe personal/moral cost (max once/mission)
+2: surrender a defining personal loyalty/identity to preserve institutional power
```

Never add Control merely for filing paperwork, following a sensible order, praying, or
working inside a faction.

### Control Leverage

High Control is useful. It gives access to stronger institutional shortcuts while adding
Directives that narrow independent action.

```
0-2: AUTONOMOUS
     Authority Override limit: 1/mission. No imposed Directive from this track.

3-5: INTEGRATED
     Authority Override limit: 2/mission. Gain 1 Directive.

6-8: OWNED
     Authority Override limit: 3/mission. Gain a second Directive.
     Defying a Directive requires WIS DC 14; success still causes institutional fallout.

9:   PROPERTY
     Authority Override limit: 4/mission. Gain a third Directive.
     Once/mission, request one MAJOR ASSET normally beyond the current mission budget
     but still plausible for Rank/Standing. GM attaches an immediate mandate/debt.
     Defying any Directive requires WIS DC 16.

10:  SYSTEM PROPERTY
     Agency has been subsumed. Character becomes NPC/epilogue unless the campaign
     immediately centers on a breakaway, schism, defection, or equivalent rescue arc.
```

### Directives

When a Control threshold grants a Directive, roll d6 or use the faction's established
doctrine if one is already obvious. Record the exact wording.

```
1: CHAIN OF COMMAND — do not knowingly refuse a legitimate superior/leader
2: MISSION FIRST — personal rescue/revenge cannot supersede the assigned objective
3: SECRECY — do not reveal protected truth to unauthorized outsiders
4: PURITY / ORTHODOXY — reject a recorded prohibited practice, ally, or technology
5: ACCEPTABLE LOSSES — do not endanger the larger mission to save expendable assets
6: FACTION CREED — GM states one concrete Path/caste/dynasty/warband/Chapter doctrine
```

Breaking a Directive is allowed; Control is not mind control until the high thresholds.
If Control later falls below the threshold that granted a Directive, that Directive becomes
mechanically INACTIVE, though the institution may still expect obedience in fiction.
Institutional fallout is usually Heat, demotion, loss of Standing, a hostile superior,
a seized asset, or a new threat clock. Do not automatically add Warp or Entropy.

### Reducing Control

```
-1: surrender Rank/Standing, privileges, or a major institutional asset voluntarily
-1: openly refuse a binding Directive and accept the real fallout
-1: complete extended downtime outside the system that structured you (1+ week)
-2: sever a defining institutional bond at campaign-scale cost (defection, schism, exile)
```

Reducing Control never erases existing enemies, debts, or legal consequences.

---

## WARP

Warp measures actual contact with the Immaterium, Chaos corruption, psychic overreach,
or equivalent soul-level contamination. It is the only pressure that can spike several
times inside one scene when explicit Warp effects say so.

```
BENEFITS:
+ psychic power (+1 to casting at Warp 3+)
+ forbidden Warp/Chaos knowledge
+ at Warp 5+: sense manifested Warp entities within 30ft automatically

COSTS:
- reality breaks around you
- daemons and sorcerous predators notice
- mutation, possession, spiritual contamination
```

### Gaining Warp

Warp is **never** inferred from "weird" biology or alien technology. Every gain is
explicit. Typical triggers:

```
+1: OVERCHANNEL a psychic power
+1: Minor Perils result or severe unprotected Warp exposure
+1: accept a minor Chaos gift / use a tainted relic when its rule says so
+2-3: major Perils, daemon bargain, possession, ritual, catastrophic breach
```

Actual Warp-heavy zones include daemon worlds, Warp storms, Eye of Terror / Great Rift
proximity, breached Gellar fields, active Chaos rituals, and manifested rifts. A scene of
severe unprotected exposure can add +1 Warp; repeated routine exposure in the same scene
does not stack unless an explicit effect says otherwise.

**Not automatic Warp:** Necron tomb awakening, gene-seed, bionics, ordinary xenos tech,
and the Tyranid Shadow in the Warp. Blackstone may suppress the Warp; Shadow uses its own
rule in MORALE, FEAR & TERROR.

### Warp Thresholds

```
0-2: QUIET — no threshold effect
3:   TOUCHED — bad dreams, whispers; −1 WIS saves vs Warp.
     Crossing triggers first mutation check.
4-5: MARKED — +1 casting, −1 WIS saves; daemons notice you more easily.
6:   BLEEDING — on any natural 1, roll WARP BACKLASH unless that roll already triggers
     Perils. Crossing triggers the harsher mutation check.
7:   TORN — WIS DC 14 in stressful situations or a brief involuntary Warp manifestation.
8:   POSSESSION-RISK — gain one Major Mutation if not already; −2 CHA. In a true
     Warp-heavy zone, WIS DC 16 or brief possession.
9:   DAMNED — Chaos gods actively court you. GM may offer explicit bargains.
10:  ASCENDED / SPAWN — character exits ordinary play: ascension, Spawn, possession,
     destruction, or a campaign-specific terminal state.
```

### Warp Backlash

Roll only when a Warp threshold explicitly calls for it. Psychic casts use Perils instead.

```
WARP BACKLASH (d8):
1: +1 Condition — seizure, bleeding, neural shock
2: −2 to next related roll — intrusive visions / sensory distortion
3: Mutation check immediately
4: Local reality glitch — lights, gravity, sound, or matter behaves wrong
5: +1 Warp — the breach deepens
6: Lose Reaction until next turn; outside combat, lose next quick response
7: Brief involuntary act/utterance chosen by GM; cannot directly self-kill
8: Warp attention — tick the most relevant Chaos/Patron/Threat clock +1
```

If one roll would trigger both WARP BACKLASH and Perils, resolve only Perils.

### Mutations

A mutation is caused by an explicit mutation check, not by every unusual biology.

```
MUTATION CHECK TRIGGERS:
- first time Warp crosses 3: d20, mutate on 18+
- first time Warp crosses 6: d20, mutate on 14+
- a Major Perils / Chaos gift / Warp event explicitly says "mutation check"
- Warp 8 threshold grants one Major Mutation automatically
```

For later explicit checks: Warp 0-5 mutates on 18+, Warp 6-7 on 14+, Warp 8+ on 10+.
At most one routine mutation check per scene; explicit patron gifts can bypass this.

When a check succeeds, roll d12. Results 1-8 are Minor; 9-12 are Major.
Duplicate results intensify.

```
1: Eyes alter — +1 Warp perception, −1 CHA when visible
2: Unnatural skin — +1 AC unarmored, obvious mutation
3: Extra joint/digit — +1 one narrow manipulation task, −1 social concealment
4: Warp-sensitive nerves — ADV detect psychic presence, DIS resist psychic pain
5: Voice changes — ADV intimidation, DIS ordinary trust
6: Vestigial growth — concealable at first; no bonus until intensified
7: Metabolic distortion — ADV poison save, special dietary/medical need
8: Minor psychic spark — one Minor psychic effect 1/scene; Perils on natural 1
9: Functional extra limb — one extra object interaction or grapple attempt/turn; obvious
10: Armored growth — +2 AC unarmored, −1 DEX
11: Major sensory organ — ADV one perception mode, sensory overload vulnerability
12: Violent transformation — +1 STR or CON, −1 CHA; unmistakably mutated
```

Each mutation result counts as one mutation level for the Warp reduction floor.
Removing one level requires major surgery, purification, or a campaign-scale cure.

### Reducing Warp

Warp reduction is rare and never a simple moral exchange with another pressure.

```
-1: extended sanctioned purification / penance / soul-binding treatment (weeks)
-1: major holy or anti-Warp objective whose fiction actually cleanses the character
-1: destroy or permanently surrender a tainted source that was sustaining the corruption
-2: legendary exorcism, null-field intervention, or campaign-scale cure
```

Cannot reduce Warp below mutation count unless those mutation levels are also removed.
A ritual that "transfers" taint to a victim is Chaos sorcery: resolve its explicit
bargain/ritual cost rather than treating cruelty as a generic cleansing shortcut.

---

## ENTROPY

Entropy is **operational attrition**: accumulated fatigue, moral injury, survivor's guilt,
compassion collapse, and the habit of treating lives as numbers. Unlike Warp, it is
usually assessed at **Debrief**, not ticked every time a grim scene occurs.

### Mission Wear

At Debrief, count Mission Wear. Each item can count once.

```
+1: you entered Condition 3+ or gained a new Scar
+1: a named ally/companion/squad asset died, broke, deserted, or was abandoned
+1: the primary objective failed/was abandoned, or extraction became catastrophic
+1: the next operation begins without meaningful rest, resupply, or decompression
+1: you ordered/committed/witnessed mass atrocity or catastrophic loss and suppressed
    rather than processed its human meaning
```

Ordinary mission: gain Entropy equal to Wear, **max +2**. Catastrophic campaign events may
explicitly raise the cap to +3. A genuine moment of purpose, connection, or hard-won hope
during Debrief can cancel 1 Wear before Entropy is applied (max once/mission).

Do not add Entropy for every cold decision during play. Those decisions affect Mission
Pressure, companions, Heat, and fiction; Entropy is the accumulated after-effect.

### Entropy Thresholds

```
0-2: ENGAGED — still emotionally present; no threshold effect
3-5: HARDENED — once/mission, turn one failed Fear/Morale check into Partial.
     −1 CHA in intimate/emotional contexts.
6-8: NUMB — immune to ordinary Fear; −2 CHA. New companion bonds require a meaningful
     downtime scene rather than routine recruitment. Existing bonds can still function.
9:   SPENT — ignore Condition 1 penalties and ordinary Morale penalties; −3 CHA.
     You cannot benefit from casual inspiration/Help in emotional contexts.
10:  BURNED OUT — remove from ordinary field play: retirement, breakdown, interment,
     reassignment, desertion, or a campaign-scale recovery arc.
```

### Reducing Entropy

Entropy falls through recovery and restored meaning, not by trading it into Control/Warp.

```
-1: full downtime arc in genuine safety/community with no immediate redeployment
-1: repair a defining relationship or create/protect something personally meaningful
-1: complete a mission that directly resolves a recorded source of guilt/meaninglessness
-2: campaign-scale recovery, pilgrimage, rehabilitation, homecoming, or equivalent
```

Ordinary rest heals HP/Condition but does not automatically reduce Entropy. Usually no
more than −1 Entropy per chapter without a campaign-scale recovery event.

---

## PRESSURE INTERACTIONS

The three pressures can influence the same fiction but do not automatically convert into
one another.

```
CONTROL: rises when autonomy is mortgaged for institutional leverage.
WARP: rises only from explicit Immaterium/Chaos/psychic contamination.
ENTROPY: rises mostly from Mission Wear at Debrief.

Examples:
- obeying a brutal order may create Heat/companion fallout and later Mission Wear;
  it adds Control only if obedience involved a binding Directive or leverage exchange
- using sanctioned psychic power is not automatic Warp; OVERCHANNEL/Perils/exposure are
- refusing a distress call can worsen Mission Pressure and later count as Wear if the
  consequences become a recorded moral injury
- using prohibited xenos tech can lower Standing or raise Heat without touching Warp
```

There is no "balance the triangle" optimization. Different pressures kill careers in
different ways: Control consumes agency, Warp consumes soul/reality, Entropy consumes the
capacity to keep serving.

---

# PART II: CONDITION & SURVIVAL

---

## CONDITION

Condition is a persistent injury/strain track layered on top of HP. HP sets a minimum
Condition floor, while explicit rules may increase Condition directly without changing HP.

```
HP = CON × 5 + 10

HP FLOOR (% of max HP):
76-100%: minimum Condition 0
51-75%:  minimum Condition 1
26-50%:  minimum Condition 2
1-25%:   minimum Condition 3
0 HP:    minimum Condition 4, unless UNKILLABLE applies

CONDITION STATES:
0: OPERATIONAL — no penalties
1: HURT — −1 to rolls
2: WOUNDED — disadvantage on rolls
3: CRITICAL — before a strenuous action, CON or WIS DC 14; fail = lose action
4: DOWN — incapacitated. If HP ≤ 0, also DYING under core death rules.
```

**Direct Condition:** Commit costs, Perils, shock, torture, and similar effects may say
`+1 Condition`. Increase the track even if HP did not move, to a maximum of 4. Reaching
Condition 4 with HP > 0 incapacitates through shock/trauma but does **not** cause death saves.

**HP healing:** restoring HP can lower the HP floor but does not automatically lower
the persistent Condition track. Use recovery below.

**CON 6 UNKILLABLE bridge:** core UNKILLABLE takes priority over the ordinary 0-HP
Condition floor. While UNKILLABLE is fighting below 0 HP, physical HP loss alone keeps
minimum Condition at 3 until the death threshold `−CON×5`; direct Condition can still
incapacitate normally. Death saves begin after combat as defined by core.

```
HEAVY HIT: single hit ≥ 25% max HP → +1 Condition after damage
MASSIVE HIT: single hit ≥ 50% max HP → +2 Condition after damage
These are trauma increases, not extra HP damage and never cause death by themselves.
```

### Recovering Condition

```
4→3: immediate medicae (INT DC 16) or powerful intervention; HP floor must allow it
3→2: long rest + medicae attention (INT DC 14); HP floor must allow it
2→1: long rest + basic care; HP floor must allow it
1→0: short rest in a genuinely safe location; HP floor must allow it

Without safety: recovery requires one additional recovery interval.
Without medicae when medicae is required: two additional intervals.
```

Recovery can never lower Condition below the current HP floor.

---

## SCARS

Scars are the central long-term progression of IRON WILL. Experience in 40K is not just
"numbers go up" — the character becomes a record of what survived, what was replaced,
and what the war had to take.

```
SCAR TRIGGER: when Condition enters 3+ from below, gain one Scar.
Maximum: 1 new Scar per scene/injury incident unless an explicit effect says otherwise.
A death event survived with Fate guarantees a Scar if that incident has not already
created one.
```

Every new Scar starts **RAW** and adds 1 SCAR LOAD. Intensified duplicates can add another
Load when the fiction makes the impairment materially worse. Adapted Scars remain written
on the sheet as history but normally stop counting toward Scar Load.

```
SCAR LOAD 0-2: functional
SCAR LOAD 3-4: visibly worn; medicae/command may restrict assignments
SCAR LOAD 5-6: severely impaired; GM must make the limitations matter
SCAR LOAD 7+: unfit for ordinary field duty until Load is reduced
```

Whenever a Scar changes a stat, immediately run core CHARACTER MECHANICS SYNC; losing a
threshold can deactivate a threshold ability until the stat is restored.

### Scar Table (d12 — roll; do not pick)

```
1:  Nerve damage — −1 DEX; tremor/twitching
2:  Embedded shrapnel — scanners detect it; periodic pain under stress
3:  Limp — −5ft movement
4:  Partial deafness — −1 WIS on hearing-based perception
5:  Lost/damaged eye — −1 ranged attacks and depth-perception checks
6:  Burns — −1 CHA where appearance matters; ADV resist intimidation by fire
7:  Trauma trigger — specific stimulus; WIS DC 12 or lose next quick action/reaction
8:  Nightmares — interrupted long rest gives DIS on first roll next scene
9:  Thousand-yard stare — −1 CHA emotional contexts; ADV resist intimidation
10: Vengeful — +1 damage vs one recorded enemy type; WIS DC 12 to disengage from them
11: Mangled limb/organ — −1 relevant stat until prosthetic/bionic treatment
12: Warp scar — +1 Warp; ADV detect psychic disturbance, DIS first save vs Perils

DUPLICATE: intensify the same scar rather than silently rerolling.
```

### Scar Adaptation

During Debrief or downtime, a RAW Scar can become **ADAPTED**. Choose only an option the
fiction supports; the adaptation removes or substantially reduces the original penalty
and reduces Scar Load by 1. It also changes what the character is becoming. Pressure
gained from an Adaptation is explicit and is not part of the ordinary Mission Wear cap.

```
AUGMENT — physical Scar
  Install a bionic/prosthetic or surgical replacement. Record an AUGMENT TAG.
  If the institution pays/owns/maintains it as leverage: +1 Control.
  If independently sourced: pay its RP/Profit/Spoils cost instead; no automatic Control.

HARDEN — trauma/emotional Scar
  Replace the original trigger penalty with a VETERAN EDGE: once/mission gain ADV on a
  directly related resistance/survival check. Gain +1 Entropy.

SANCTION / BIND — Warp Scar
  Ritual, null-tech, warding, or controlled psychic adaptation suppresses one penalty and
  grants a narrow Warp-sense/ward Edge. Gain +1 Warp unless a true null/purification source
  explicitly says it cleanses instead.

LIVE WITH IT
  No new pressure or resource cost. Scar stays RAW and continues counting toward Scar Load.
```

At **3 Adapted Scars**, gain VETERAN'S INSTINCT: once/mission, add +2 to one roll that
clearly uses a lesson, implant, reflex, or survival habit recorded by an Adapted Scar.
Name the Scar before rolling. This is not generic Fortune and cannot stack with another
+die Commit on the same roll.

Bionics reference stats appear later under IMPERIAL BUREAUCRACY; xenos/Chaos equivalents
use the same adaptation logic with faction-appropriate technology or rites. If the
adaptation is later destroyed, rejected, or stops functioning, the Scar becomes RAW again
and its Scar Load/penalty returns until another adaptation is completed. Once unlocked,
VETERAN'S INSTINCT remains even if a later adaptation is lost.

---

## FATE & FORTUNE

Life is cheap in the far future. Fate is not an alternate death system; it interrupts
a death that core rules would otherwise make final.

### Fate

```
FATE (permanent, never refreshes):

Conscript/Cultist: 0
Guardsman/Civilian: 1
Officer/Specialist: 1
Space Marine/Sister: 2
Inquisitor/Rogue Trader: 2
```

Spend 1 Fate **when the character would die**: third failed death save, massive-damage
death, reaching the UNKILLABLE death threshold, or another explicit lethal effect. Resolve
core survival abilities such as DEATHLESS first; spend Fate only if death still remains.

```
FATE EFFECT:
- cancel that death
- set HP to 1
- set Condition to at least 3
- clear current death-save successes/failures
- gain one Scar from the incident (if it has not already produced one)
- GM explains the narrow survival in fiction
```

At 0 Fate, use core death rules normally. Reaching Condition 4 is not itself automatic
death; it usually means incapacitation and, at HP ≤ 0, core death saves.

### Fortune

```
FORTUNE (per session):
Conscript/Cultist: 1
Guardsman/Civilian: 2
Officer/Specialist: 2
Space Marine/Sister: 3
Inquisitor/Rogue Trader: 3

SPEND TO:
- Reroll any one die (keep second result)
- Add +2 to one roll (declare before result)
- Force enemy to reroll one attack against you
- Prevent 1 point of imposed direct Condition before it is applied
```

Fortune cannot lower Condition below the HP floor, undo an already-crossed HP threshold,
cancel a declared Commit cost, remove Control/Warp/Entropy already gained, or cheat death. That's Fate.
Fortune refreshes each session.

---

# PART III: THE MISSION

---

## MISSION BOARD

Every operation gets three visible core clocks. These clocks are the default moment-to-
moment engine of IRON WILL.

```
OBJECTIVE:  ○○○○○○  0/6 — what must be accomplished
PRESSURE:   ○○○○○○  0/6 — enemy response, time, noise, uncertainty, collapse
EXTRACTION: ○○○○○○  0/6 — getting survivors/assets out after withdrawal begins
```

### Objective

Meaningful progress ticks +1; a major breakthrough/Crit may tick +2 when the fiction
supports it. Trivial actions never tick Objective. At 3/6 the team has a foothold or
partial objective; at 6/6 the primary objective is achieved.

### Pressure

Set starting Pressure at Briefing: 0-1 prepared/quiet, 2 contested, 3 disastrous intel or
hostile deployment. Tick +1 for a meaningful Fail/major delay/loud escalation/enemy
reinforcement; Crit.Fail or explicit catastrophe may tick +2. Do not tick merely because
combat exists.

```
PRESSURE 3: introduce a serious complication if one is not already active
PRESSURE 5: extraction routes/assets become contested; no clean exit remains
PRESSURE 6: CRISIS — trigger a major escalation, then reset Pressure to 3 if the operation
            can continue. If the Crisis makes the objective untenable, force the choice:
            change plan, accept a new cost, or begin Extraction.
```

### Extraction

Extraction is inactive until the team withdraws, completes the objective, or is forced to
evacuate. Once active, meaningful escape progress ticks +1; a major success/Crit can tick
+2. Failures usually tick Pressure instead of erasing Extraction progress. At 6/6, the
surviving team/asset escapes the operation.

A mission can succeed while people die, fail while the squad survives, or achieve the
objective but lose extraction. That distinction matters at Debrief.

---

## MISSION CYCLE

```
=== BRIEFING ===
• State primary Objective and create OBJECTIVE clock
• Set starting PRESSURE from intel/deployment
• Define Rank/Standing budget, prepared assets, and one RED LINE / mandate if relevant
  (a concrete sponsor prohibition/requirement whose violation creates fallout, not Control
  by itself unless it is also a recorded Directive)
• Identify what counts as mission failure and what must be extracted

=== DEPLOYMENT ===
• Transit, planetfall, insertion, first contact
• Complications can tick Pressure before the objective is reached
• Ordinary Gellar-protected transit is dangerous but not automatic Warp gain

=== OPERATION ===
• Actions advance Objective, contain or accelerate Pressure, and create casualties/Scars
• Combat matters because of what it does to the Mission Board, not because combat itself
  automatically shifts a personal pressure track

=== EXTRACTION ===
• Activate EXTRACTION when withdrawing/escaping
• Decide what is abandoned, rescued, carried, destroyed, or left behind
• Pressure 5+ means the clean route is already gone

=== DEBRIEF ===
• Classify result: CLEAN / PYRRHIC / FAILURE / CATASTROPHIC
• Apply Mission Wear → Entropy
• Adapt new Scars, repair gear, update Heat and Rank/Standing
• Update THEATER BOARD
```

### Mission Result

```
CLEAN:        Objective 6 + Extraction 6, no catastrophic strategic loss
PYRRHIC:      Objective achieved, but extraction/casualties/asset loss create major cost
FAILURE:      primary Objective not achieved; team may still extract successfully
CATASTROPHIC: objective lost plus strategic asset/squad/front-level disaster
```

---

## THEATER BOARD

The war/investigation/venture is larger than one character. Track three campaign clocks
using the core 0-6 system:

```
CAMPAIGN OBJECTIVE: ○○○○○○ — progress toward the current theater/case/venture goal
ENEMY ESCALATION:   ○○○○○○ — enemy adaptation, alert, reinforcements, ritual progress
SUPPLY CRISIS:      ○○○○○○ — ammunition, replacement bodies, ships, political capital
```

At Debrief, normally apply one line:

```
CLEAN:        +1 Campaign Objective
PYRRHIC:      +1 Campaign Objective AND +1 Enemy Escalation or Supply Crisis
FAILURE:      +1 Enemy Escalation
CATASTROPHIC: +1 Enemy Escalation AND +1 Supply Crisis
```

Mission type can modify this: a logistics operation may reduce Supply Crisis; sabotage may
reduce Enemy Escalation; a successful intelligence mission may advance Objective without
territorial change. Record the fiction.

```
CAMPAIGN OBJECTIVE 6: phase won — resolve payoff and create the next theater objective
ENEMY ESCALATION 6: strategic loss/escalation — enemy achieves a major move; reset to 3
SUPPLY CRISIS 6: next mission budget −25% (minimum −2 RP equivalent) and scarcity until
                 a mission/action reduces the clock below 6. For Rank 5 / abstract
                 strategic budgets, withhold one major asset tier instead of doing math.
```

For Inquisition, rename these Case Progress / Enemy Alert / Political-Resource Crisis.
For Rogue Traders, Venture Progress / Rival Escalation / Debt-Logistics Crisis. The
mechanical relationship stays the same.

### Campaign Frameworks

IRON WILL supports more than Imperial service. Choose one framework at session start:

```
IMPERIAL MISSION — Briefing → Requisition → Operation → Extraction → Debrief
  Uses Rank, Requisition, Heat, Orders and Theater Board.

CHAOS WARBAND — Patron Demand → Muster → Raid/Ritual → Escape → Reckoning
  Replace Imperial Rank with Warband Standing (0–5); RP becomes Spoils/Favor logistics.
  Control represents warband/patron hierarchy; Warp remains actual immaterial corruption.

XENOS EXPEDITION — Objective → Muster → Incursion → Withdrawal → Consequence
  Replace Imperial Rank with faction Standing (0–5); use faction logistics/assets.

ROGUE TRADER — Venture → Acquire → Passage → Exploit/Explore → Extraction → Profit/Debt
  Uses Profit Factor for commercial acquisition and the Theater Board as Venture pressure.
```

Standing uses the same 0–5 authority scale as Rank but creates no automatic Control floor.
Chaos/Xenos logistics can use the same RP budgets while renaming the currency and limiting
availability to actual faction assets.

---

## RANK

Rank/Standing measures formal authority. **Rank unlocks scale; Control measures the debt
created by leaning on that scale.**

```
RANK / STANDING:
0: EXPENDABLE — conscript, ganger, menial, disposable initiate
1: TROOPER — guardsman, acolyte, battle-brother, ordinary operative
2: SPECIALIST — sergeant, tech-adept, veteran, trusted specialist
3: OFFICER — lieutenant, interrogator, chaplain/captain equivalent
4: COMMANDER — colonel, inquisitor, force commander, major warband/faction leader
5: AUTHORITY — lord general, lord inquisitor, sector-scale/dynastic equivalent

RANK EFFECTS:
+ sets requisition/logistics budget and maximum plausible asset scale
+ grants command access and formal Orders when the faction/role supports them
+ determines what AUTHORITY OVERRIDE can plausibly acquire
```

### Promotion

Promotion is offered as a campaign reward, not automatic XP. Accepting a promotion adds
+1 Control **only when** the new office creates a meaningful binding duty/ownership claim.
A ceremonial title without leverage or obligation does not. Refusing promotion is allowed.

### Authority Override

Once the fiction provides a functioning institution, the character may use an Override
up to the limit allowed by current Control. Each use adds **+1 Control** and does one:

```
• increase the current mission RP/logistics budget by 25% (minimum +2)
• bypass one authorization/availability barrier for an otherwise Rank-plausible asset
• compel allied institutional NPCs to provide a dangerous service within their capability
• suppress/delay one bureaucratic consequence until Debrief (it returns as debt/Heat)
```

Rank never creates a Control floor. A commander can lose faith in the system; consequences
are political, military, social, and logistical rather than a mathematical prohibition.

---

# PART IV: POWERS

---

## PSYCHIC POWERS

REPLACES: core MAGIC. Psykers channel the Immaterium; casting is powerful and risky,
but a sanctioned psychic effect is not automatically Chaos corruption.

```
CASTING: d20 + WIS + Psy Rating vs locked DC

PSY RATINGS:
| Rating | Name       | Bonus | Peril Range | Max Tier    |
|--------|------------|-------|-------------|-------------|
| 1      | Gamma      | +1    | Nat 1       | Minor       |
| 2      | Delta      | +2    | Nat 1       | Minor       |
| 3      | Beta       | +3    | Nat 1-2     | Standard    |
| 4      | Beta-plus  | +4    | Nat 1-2     | Major       |
| 5      | Alpha      | +5    | Nat 1-3     | Major       |
| 6+     | Alpha-Plus | +6    | Nat 1-4     | Apocalyptic |
```

A psychic cast does not automatically add Warp. Before rolling, the caster may **OVERCHANNEL**:
+1d6 to the casting roll, +1 Warp after the roll, and widen the personal Peril range by 1
for this cast. Chaos sorcery, daemon bargains, and powers explicitly marked TAINTED may
impose additional Warp even without Overchannel.

```
POWER TIERS:
Minor (DC 12): sense emotion, spark flame, minor telekinesis
  Damage: d6 | Duration: ~1 minute
Standard (DC 16): telepathy, force push, pyro bolt, precog flash
  Damage: 2d6 | Duration: ~10 minutes
Major (DC 20): dominate mind, fire storm, force barrier
  Damage: 4d6 | Duration: up to ~1 hour where fiction allows
Apocalyptic (DC 24+): mass domination, Warp rift, fate manipulation
  Damage: 6d6+ | ALWAYS triggers Major Perils after resolution

WARP SCALING:
Warp 3+: +1 to casting
Warp 6+: widen personal Peril range by 1
Warp 8+: if a cast did not already trigger Perils, roll Minor Perils after it anyway
```

Natural 1/20 still shift outcome one tier per core in addition to Perils triggers.

---

## PERILS OF THE WARP

When the natural d20 falls in the caster's Peril Range, resolve Perils **after** the cast.
Use Minor Perils on Partial/Success/Crit; use Major Perils on Fail/Crit.Fail. Apocalyptic
powers always use Major. A single cast resolves at most one Perils table.

```
MINOR PERILS (d6):
1: Psychic backlash — d6 damage; Stunned 1 round
2: Warp echo — nearby creatures make Morale/Fear test DC 12
3: Daemonic whispers — +1 Warp
4: Power surge — effect occurs but collateral/position worsens
5: Soul-nosebleed — +1 Condition
6: The Watchers notice — tick relevant Chaos/Threat clock +1

MAJOR PERILS (d10):
1-2: Psychic explosion — 2d10 damage to all within 10ft, including caster
3-4: Possession attempt — WIS DC 16 or GM controls one action/round for d4 rounds
5-6: Warp rift — d4 lesser daemons or equivalent breach threat manifests
7-8: Soul erosion — +3 Warp
9: Cascade — roll two additional Major results; treat further 9s as result 8
10: The Emperor Protects — no additional effect this time
```

Perils damage/Condition cannot be canceled by Overchannel. Fortune may interact only as
its own rules allow.

### Psychic Disciplines

```
TELEPATHY — mind reading, communication, domination
  Risk: madness from alien thoughts
TELEKINESIS — force manipulation, shields, flight
  Risk: losing control of own body
DIVINATION — future sight, danger sense, prophecy
  Risk: seeing too much; a severe consequence can count as Mission Wear at Debrief
PYROMANCY — Warp fire, heat manipulation
  Risk: uncontrolled combustion
BIOMANCY — healing, enhancement, shapeshifting
  Risk: mutation acceleration

CHAOS-ALIGNED (Chaos psykers only):
Nurgle: plague, resilience | Tzeentch: change, sorcery
Slaanesh: sensation, domination | Khorne: NONE (hates psykers)
```

---

## FAITH & THE EMPEROR

Faith can produce real mechanical effects in an Imperial campaign. The rules do not prove
which metaphysical source caused a miracle; they model conviction, ritual, and impossible
intervention. Faith is not automatically a Control/Authority Commit.

```
FAITH: 0–6 personal conviction/blessing track
PRAYER: d20 + CHA + Faith vs locked DC

0: SILENT — no supernatural prayer effects available
1-2: DEVOUT — DC 12: gain +1 to next Morale/Fear save or steady one ally
3-4: BLESSED — DC 16: reroll one failed non-damage roll, resist Warp, or heal d8
5: MIRACLE — DC 20: major Act of Faith; scene-scale intervention
6: SAINTLY — DC 24: extraordinary miracle; always creates major attention/consequence
```

Prayer does not automatically add Control. A character may COMMIT — AUTHORITY only if an
actual institution, rite, relic-chain, confessor, or hierarchy is being invoked as leverage.
Personal conviction by itself is not institutional capture.

### Faith Change

At most once per chapter from ordinary conduct:

```
+1: costly act of genuine conviction, martyr-level sacrifice, or major sacred objective
+1: survive a crisis while refusing an easier betrayal of core belief
-1: knowingly betray a central article of faith for convenience/power
-1: publicly renounce the creed or break under a defining crisis
```

GM may create quest-scale exceptions. Faith is not faction reputation and does not rise
from routine obedience. At Faith 0, ordinary prayer is still possible narratively; it just
has no guaranteed supernatural mechanic and does not automatically add Entropy.

---

# PART V: FACTIONS

---

## IMPERIAL FACTIONS

```
=== ASTRA MILITARUM (Imperial Guard) ===
Archetypes: Guardsman, Sergeant, Commissar, Officer, Storm Trooper, Tank Crew
Pressure bias: Control + Entropy
Fortune: 2 | Fate: 1
Bonus: +1 to any stat (regiment-dependent)
Special: Regimental doctrine, Orders system, "Hold the line"
Note: Humans. They die easily. That's the point.

REGIMENTS:
| Regiment    | Bonus   | Specialty         | Pressure tendency |
|-------------|---------|-------------------|-------------------|
| Cadian      | +1 WIS  | Disciplined fire  | Control           |
| Catachan    | +1 STR  | Jungle warfare    | Low Control       |
| Death Korps | +1 CON  | Never retreat     | Control + Entropy |
| Tallarn     | +1 DEX  | Desert, mobile    | Balanced          |
| Vostroyan   | +1 CHA  | Firstborn, honor  | Control           |
| Valhallan   | +1 CON  | Attrition, cold   | Entropy           |

REGIMENTAL DOCTRINE (choose from origin):
- Cadian: 1/combat, after AIM gain ADV instead of +2 on one ranged attack
- Catachan: ADV survival/ambush checks in lethal natural terrain
- Death Korps: ADV Morale vs casualties; DIS social checks involving self-preservation
- Tallarn: ignore first movement-based −1/Heavy penalty each combat
- Vostroyan: +2 CHA when invoking regimental honor with Imperial troops
- Valhallan: ADV CON vs cold/exhaustion; 1/combat ignore first Morale penalty from losses

=== ADEPTUS ASTARTES (Space Marines) ===
Archetypes: Tactical, Assault, Devastator, Scout, Chaplain, Librarian
Pressure bias: Control; Librarians/actual Warp exposure may add Warp pressure
Fortune: 3 | Fate: 2
Bonus: +2 STR, +2 CON, +1 to Chapter specialty
Special: Power Armor (+6 armor bonus, +2 STR, life support), gene-seed abilities
Note: Superhuman. Rare. Each death is tragedy.

GENE-SEED PACKAGE:
- Transhuman Physiology — ADV CON vs poison, disease, environmental shock
- Multi-lung / altered metabolism — can function in hostile atmosphere briefly; GM sets limits
- Black Carapace — ignore powered-armor DEX cap while wearing Astartes Power Armor
- Rapid Clotting — ADV CON to stop bleeding/stabilize; first bleed-style crit effect each
  combat lasts at most 1 round unless caused by a supernatural/anti-Astartes effect
These are biological/technological modifications, not Warp corruption.

CHAPTER FLAWS (gene-seed):
- Blood Angels: RED THIRST — after severe bloodshed/critical injury, WIS DC 12 or frenzy.
  A disastrous frenzy can count as Mission Wear at Debrief. Not automatic Warp taint.
- Space Wolves: WULFEN — extreme stress, WIS DC 14 or partial gene-seed transformation;
  not automatic Warp taint.
- Dark Angels: THE SECRET — must hide the Fallen. Record it as a Directive when the
  campaign makes that secrecy institutionally binding; routine silence adds no Control.
- Imperial Fists: PAIN OBSESSION — DIS on voluntary retreat from a defensible position
  unless WIS DC 12 succeeds; no automatic Control tick.
- Iron Hands: FLESH IS WEAK — strong pressure toward bionics; use BIONICS costs, never
  duplicate a Control shift for the same installation.

=== ADEPTA SORORITAS (Sisters of Battle) ===
Archetypes: Battle Sister, Seraphim, Retributor, Hospitaller, Repentia
Pressure bias: Control (institutional faith and discipline)
Fortune: 3 | Fate: 2
Bonus: +1 WIS, +1 CON, faith powers
Special: Acts of Faith use FAITH & THE EMPEROR; Sororitas Armor (+5 armor bonus, +1 STR), flamers/meltas

=== ADEPTUS MECHANICUS ===
Archetypes: Tech-Priest, Skitarii, Enginseer, Magos
Pressure bias: Control + Entropy (ritual replaces understanding)
Fortune: 2 | Fate: 1
Bonus: +1 INT, +1 CON (more machine than man)
Special: Bionics (see BIONICS); TECH-COMMUNION 1/scene — INT DC 12 to read status,
  authenticate, diagnose, or issue a permitted machine command through a valid interface;
  forbidden knowledge quests

=== INQUISITION ===
Archetypes: Inquisitor, Acolyte, Interrogator, Throne Agent
Pressure bias: Control/Warp/Entropy (Inquisition can face all three)
Fortune: 3 | Fate: 2
Bonus: +1 INT or CHA, Inquisitorial mandate
Special: Rosette authority, extraordinary Imperial jurisdiction, retinue; authority is
  broad but still creates political, institutional, and practical consequences

ORDOS:
- Hereticus: Hunts witches, heretics. Chamber Militant: Sororitas.
- Malleus: Hunts daemons. Chamber Militant: Grey Knights.
- Xenos: Hunts aliens. Chamber Militant: Deathwatch.

=== ROGUE TRADERS ===
Archetypes: Rogue Trader, Seneschal, Arch-Militant, Explorator, Navigator, Astropath
Pressure bias: Low Control, Entropy risk (freedom has a price)
Fortune: 3 | Fate: 2
Bonus: +1 CHA, Warrant of Trade
Special: Ship, Profit Factor (see IMPERIAL BUREAUCRACY), Warrant exempts the dynasty
  from many ordinary restrictions but not from consequence or every Imperial authority
```

---

## CHAOS FACTIONS

```
=== CHAOS SPACE MARINES ===
Archetypes: Chaos Marine, Chosen, Possessed, Sorcerer, Dark Apostle
Pressure bias: Warp (+ patron god's flavor)
Fortune: 3 | Fate: 2
Bonus: +2 STR, +2 CON, +1 to patron god stat
Special: Marks, daemon weapons, mutations as gifts

LEGIONS:
- Black Legion (Abaddon, undivided): balanced Warp
- Word Bearers (faith, daemons): Warp + Control (dark faith)
- Death Guard (Nurgle): Warp + Entropy
- Thousand Sons (Tzeentch): pure Warp
- Emperor's Children (Slaanesh): Warp + sensation
- World Eaters (Khorne): Warp + rage
- Iron Warriors (siege, bitterness): Warp + Entropy
- Night Lords (terror): Warp + Entropy (no gods, just cruelty)
- Alpha Legion (secrets): Control + Warp (hidden agendas)

=== CHAOS CULTISTS ===
Archetypes: Cultist, Demagogue, Witch, Mutant
Fortune: 1 | Fate: 0
Bonus: +1 to any stat, start with Warp 2+
Note: Expendable. To Chaos and to the GM.
```

---

## XENOS FACTIONS

```
=== ELDAR (Asuryani) ===
Archetypes: Guardian, Dire Avenger, Warlock, Farseer, Ranger
Pressure bias: Control (Path system) + Warp (psychic race)
Fortune: 2 | Fate: 1
Bonus: +2 DEX, +1 INT, +1 WIS
Weakness: Fragile. Slaanesh devours their souls on death.

SPIRIT STONES:
- Every Eldar wears one. Captures soul on death.
- Without stone: if Fate does not interrupt the lethal event before death, Slaanesh claims
  the soul; no ordinary post-death recovery.
- Losing stone = existential terror. Recovering fallen comrade's stone = sacred duty.

PATHS:
- Warrior: +1 combat. Becoming permanently trapped as an Exarch = +3 Control.
- Seer: +1 psychic. Irreversible crystal entombment adds +3 Entropy at the next Debrief.
- Outcast: Rangers/Corsairs. Extended isolation, loss of purpose, or repeated failed
  return can count as Mission Wear / downtime Entropy; choosing the Path alone does not.

CRAFTWORLDS:
Ulthwé: +1 WIS, seers | Biel-Tan: +1 STR, warriors
Saim-Hann: +1 DEX, speed | Iyanden: communion with dead
Alaitoc: +1 stealth, rangers

=== DRUKHARI (Dark Eldar) ===
Archetypes: Kabalite, Wych, Haemonculus, Incubus, Scourge
Pressure bias: Entropy + Control (Kabal/Cult hierarchy); Warp is danger they normally avoid
Fortune: 2 | Fate: 1
Bonus: +2 DEX, +1 CHA (cruel beauty)
Special: Pain-feeding, poison, Webway access
Weakness: SOUL DRAIN — Slaanesh slowly devours their soul.
  Track SOUL DRAIN as a personal 0–6 clock, starting 2/6.
  +1/major downtime without harvested suffering; 6/6 = severe withering/feeding crisis.
  Inflicting/harvesting significant suffering ticks it −1 (minimum 0). If the campaign
  treats the act as moral injury/meaning erosion for this character, record it as Mission
  Wear at Debrief; it is not automatic Warp gain.
  Commorragh is not a city. It's a life support machine powered by screams.
Note: Every Drukhari is running from the same thing. Slaanesh is patient.

=== GENESTEALER CULTS ===
Archetypes: Neophyte, Acolyte, Magus, Primus, Abominant
Pressure bias: Control (brood hierarchy); Magi/Patriarch psychic use can create Warp pressure
Fortune: 2 | Fate: 1
Bonus: +1 DEX, +1 CHA, hybrid abilities
Special: Infiltration, psychic network, "Day of Ascension"
Weakness: CALL OF THE PATRIARCH — Control 5+ = brood hierarchy increasingly overrides
  individual judgment. In a direct Patriarch command, WIS DC 14 or act in the cult's
  interest for one action. Psychic Magi still interact with Warp normally.
  You think you're fighting for freedom. You're bait.
Note: Think they're revolutionaries. They're appetizers.
  Unique gameplay: infiltration, hidden identity, paranoia from both sides.

=== ORKS ===
Archetypes: Boy, Nob, Mek, Painboy, Weirdboy
Fortune: 2 | Fate: 1 (lucky gitz)
Bonus: +2 STR, +2 CON, −2 INT (minimum INT 0)
Pressure bias: Control (Boss/mob dominance) + Entropy (WAAAGH! collapse/bored isolation)
Special: WAAAGH! — 1/combat when charging with 2+ allied Orks nearby: +2 attack and
  +1 damage on that charge. Weirdboyz channel genuine psychic WAAAGH! energy.
  Meks possess instinctive engineering aptitude; do NOT use the blanket rule that any
  machine works merely because Orks believe it does.
  Orks use the same three Pressures: Warp rises from actual Weirdboy/Immaterium exposure,
  Control from institutional/mob leverage, and Entropy is assessed from defeat, isolation,
  broken momentum, and losses through Mission Wear.

=== T'AU EMPIRE ===
Archetypes: Fire Warrior, Pathfinder, Crisis Suit Pilot, Ethereal, Water Caste
Pressure bias: Control (Greater Good/caste hierarchy) + Entropy (disillusionment/attrition)
Fortune: 2 | Fate: 1
Bonus: +1 INT, +1 WIS
Special: Advanced technology; T'au themselves have weak Warp presence and no standard
  native psyker tradition. External Warp effects can still threaten them.
Weakness: Greater Good doubt is represented by Entropy and falling Control — no duplicate
  alternate track required.

=== NECRONS ===
Archetypes: Immortal, Lychguard, Cryptek, Lord, Overlord (mindless Warriors are NPC-first)
Pressure bias: Entropy + Control (dynastic protocol, engram erosion)
Fortune: 2 | Fate: 2 (living-metal persistence)
Bonus: +2 STR, +2 CON, immune to Fear; no soul to possess in the normal human sense
Special: Necrons still track Warp as **external immaterial interference**, but ordinary
  Warp thresholds do not cause flesh mutation or daemon possession. Replace those specific
  effects with phase desynchronization, engram damage, command corruption, or reality faults.
  Blackstone/noctilith may suppress or amplify Warp depending on configuration.
Weakness: FLAYER CURSE and DESTROYER MADNESS are Disorders, not substitute Warp tracks.
  Each is a hidden 0–6 clock; relevant violent/engram triggers tick it. 6/6 transforms
  behavior and creates a new goal/threat per core clock rules. Lords/Overlords remain
  individuals unless their recorded engram/Disorder state says otherwise.
```

---

## CHAOS GODS & FAVOR

```
FAVOR TRACK: ○○○○○○ (0/6) per god

FAVOR AND WARP:
At Warp 5+: all Favor gains are doubled. The deeper you sink, the faster they claim you.
Favor is a normal core 0–6 relationship clock with a Chaos god. It is separate from Warp:
Warp measures corruption/exposure; Favor measures a patron's attention and approval.

GAINING FAVOR:
+1: Act according to god's nature
+1: Sacrifice to god (souls, artifacts, suffering)
+1: Corrupt others to god's service
+2: Major victory in god's name

LOSING FAVOR:
-1: Act against god's nature
-1: Accept rival god's gift
-2: Betray god's servant
-3: Seek redemption

FAVOR BENEFITS:
1-2: Minor boons — reroll 1/day on god-aligned action
3-4: Mark — +1 god's stat, minor power, visible mutation
5: Champion — daemon weapon offer, summoning ability
6: Patron Trial — major demand/reward. If Warp 9+, GM may offer an ascension test
   (WIS DC 18); below Warp 9, resolve a major boon/obligation instead of instant ascension.

GOD PROFILES:
KHORNE (Blood God):
  Domain: War, slaughter, skulls
  Mark: +2 STR, −2 INT, blood rage
  Boon (3+): +2 melee damage, can't retreat
  Note: NO martial honor. All killing counts.

TZEENTCH (Changer of Ways):
  Domain: Magic, schemes, change
  Mark: +2 INT, +2 psychic, extra mutations
  Boon (3+): see through illusions, +1 psychic

NURGLE (Plague Father):
  Domain: Decay, despair, resilience — but also love
  Mark: +2 CON, −1 CHA, diseased appearance
  Boon (3+): immune to disease, regen 1 HP/turn
  Note: Nurgle loves his followers. Plagues are gifts.

SLAANESH (Dark Prince):
  Domain: Excess, sensation, perfection
  Mark: +2 CHA, +1 DEX, obsessive behavior
  Boon (3+): +2 CHA, intoxicating presence

CHAOS UNDIVIDED:
  Serve all four, favor none. Abaddon's path.
  No specific mark. Flexibility but no deep boons.
```

---

# PART VI: COMBAT & GEAR

---

## COMBAT

Uses gm-skill combat core plus the explicit AC override in BASE SYSTEM.

```
AC = 10 + allowed DEX contribution + armor bonus + situational cover/field bonuses.
DC is locked before the player chooses abilities/Commit; AP is an attacker modifier, not a
retroactive DC reduction.

COMBAT IS A MEAT GRINDER:
- Bolter hits HURT. Plasma kills. Melta erases.
- Cover is life. Movement in the open = death.
- Superhuman vs human = no contest without heavy weapons.

COVER:
Light cover (rubble, bush): +2 AC
Heavy cover (wall, trench): +4 AC
Fortified firing position (bunker slit, hardpoint): +6 AC
Being inside a vehicle uses VEHICLE rules; do not add +6 to the vehicle itself.
No cover in open ground = enemies get advantage to hit.

SUPPRESSION:
Heavy/automatic fire at area: enemies must WIS DC 12 or cannot advance.
Pinned units: −2 to all actions, cannot move toward source.

COMBAT & MISSION BOARD:
Combat has no automatic personal-pressure tick. Instead ask what the fight did to the
operation: meaningful victory can advance OBJECTIVE; delay, noise, casualties, or enemy
reinforcement can tick PRESSURE. Warp rises only from explicit Warp effects; Entropy is
assessed from Mission Wear at Debrief; Control rises only from leverage/debt triggers.
```

---

## WEAPONS

```
RANGED:
| Weapon         | Damage  | Range  | Special              |
|----------------|---------|--------|----------------------|
| Laspistol      | d6      | Short  | Reliable, common cells |
| Lasgun         | d8      | Medium | Standard Guard issue |
| Hot-shot Las   | d10     | Medium | AP 1, limited ammo   |
| Bolt Pistol    | d8+2    | Short  | AP 1, explosive      |
| Bolter         | d10+2   | Medium | AP 1, burst          |
| Heavy Bolter   | 2d8+2   | Long   | AP 2, heavy, burst   |
| Plasma Gun     | 2d8     | Medium | AP 2, OVERHEAT 1-2   |
| Meltagun       | 3d6     | Short  | AP 4, anti-vehicle   |
| Flamer         | 2d6     | Cone   | Ignores cover, fire  |
| Sniper Rifle   | d10+4   | Extreme| Aimed only           |
| Pulse Rifle    | d10     | Long   | AP 1, T'au only       |
| Shuriken Cat.  | d8      | Medium | Rending: nat 20 gains +2 AP |
| Gauss Flayer   | d10     | Medium | AP 1, Necron         |

MELEE:
| Weapon         | Damage  | Special                     |
|----------------|---------|-----------------------------|
| Combat Knife   | d4      | Concealable                 |
| Chainsword     | d8      | Brutal (+1 on crit)         |
| Power Sword    | d8+2    | AP 2, energy field          |
| Power Fist     | 2d6+4   | AP 3, unwieldy (−1 hit)    |
| Thunder Hammer | 2d8+4   | AP 3, stun, unwieldy       |
| Lightning Claw | d6+2    | AP 2, Paired                |
| Force Weapon   | d8      | AP 2, Finesse (STR/WIS), psyker |
| Guardian Spear | 2d6+3   | AP 2, Integrated Bolter, Custodes |

HEAVY:
| Weapon          | Damage | Special                     |
|-----------------|--------|-----------------------------|
| Autocannon      | 2d10   | AP 2, heavy                 |
| Lascannon       | 3d10   | AP 4, anti-vehicle, heavy   |
| Missile Launcher| varies | Frag 2d6 / Krak 3d6 AP 3   |
| Multi-melta     | 4d6    | AP 4, heavy, anti-vehicle   |

PROPERTIES:
AP N: +N to the attack roll against a target whose AC includes armor/vehicle plating.
      It does not change the locked AC/DC and does not apply to pure dodge/cover alone.
Reliable: on a weapon-related Crit.Fail, do not also jam/lose extra Ammo unless the fiction
      specifically damages the weapon; other Crit.Fail consequences still apply.
Explosive: on Crit after dealing damage, +1 Condition may be the weapon's crit bonus effect.
Fire: on Success/Crit, target DEX DC 12 or BURNING (d4 damage at start of next turn;
      Action or suitable suppression extinguishes it).
Overheat X-Y: on a natural attack roll in that range, after resolving the shot make
      CON DC 12; fail = take the weapon's base damage (no stat bonus), weapon unusable
      until cooled/repaired; Partial = half damage and weapon unusable next round.
Heavy: −2 to hit if moved this turn unless braced/mounted
Burst: add one extra copy of the weapon's base damage die; spend +1 Ammo immediately
Unwieldy: −1 to hit; cannot use reactions until next turn after attacking
Brutal: +1 flat damage on Crit (after core crit dice)
Stun: on Success+, target CON DC 12; Fail/Crit.Fail = Stunned 1 round; once/target/round
Finesse (A/B): choose either listed stat for both attack and its normal damage modifier
Paired: when both matching weapons are equipped, use core dual-wielding; no extra action
Aimed only: requires AIM before firing
Anti-vehicle: full damage vs vehicles; +1 weapon damage die on Success/Crit if AP 3+
Integrated Bolter: may fire using Bolter profile as a normal attack, not simultaneously
      with the melee strike unless an ability grants another attack
Access tags (T'au, Necron, psyker, Custodes) restrict ordinary availability, not physics.
Range: Short 10m | Medium 30m | Long 100m | Extreme 300m+
```

### Aim & Ammo

```
AIM — Bonus action. If you do not move after aiming, +2 to your next ranged attack this
turn. Aimed-only weapons cannot fire without Aim.

AMMO UNITS — abstract magazines/charge packs.
- Sidearms/special weapons: 3 Ammo at mission start
- Rifles: 4 Ammo
- Lasguns: 5 Ammo and easy recharge where power exists
- Heavy/limited-ammo weapons: 2 Ammo
- At end of a combat in which the weapon fired, spend 1 Ammo.
- Burst spends +1 Ammo immediately in addition to end-of-combat expenditure.
- At 0 Ammo the weapon cannot fire until reloaded/resupplied.
- GM may waive tracking for a secured base or explicitly abundant supply.
```

---

## ARMOR

```
| Armor            | AC Bonus | Special                    |
|------------------|----------|----------------------------|
| Flak Armor       | +2       | Standard Guard             |
| Carapace         | +4       | Storm Troopers, officers   |
| Power Armor      | +6       | +2 STR, life support       |
| Terminator Armor | +8       | +2 STR, −5ft move, teleport|
| Sororitas Armor  | +5       | +1 STR, faith conduit      |
| Mesh Armor       | +2       | Eldar, lightweight         |
| Mega Armor       | +7       | Ork, crude, heavy          |

Refractor Field: +2 invulnerable (energy)
Rosarius: +3 invulnerable (faith)
Iron Halo: +3 invulnerable (tech)

INVULNERABLE +N:
Adds +N AC while the field is active. AP never gains a bonus from the field component;
AP only counters the armor/plating portion. Fields may fail on explicit EMP/null/overload
effects. Multiple invulnerable fields do not stack; use the best one.

ARMOR SPECIALS:
- Life support: sealed against vacuum/toxic atmosphere for the suit's recorded duration
- Faith conduit: consecrated Sororitas armor gives +1 to the first Faith roll each scene
- Terminator teleport: requires teleportarium/beacon or explicit mission asset; not free movement
- Mega Armor: DEX contribution cap 0; −5ft movement unless custom powered upgrade says otherwise
- Mesh: no armor-based DEX cap

Armor STR bonuses are current stat modifiers. Per core CHARACTER MECHANICS SYNC, equipping
or removing such armor can activate/deactivate stat-threshold abilities; update the visible
sheet immediately.
```

---

## MORALE, FEAR & TERROR

Use these whenever the rules mention Morale, Fear, Terror, Fearless, or morale modifiers.

```
MORALE TEST: d20 + WIS (individual) or d20 + leader CHA (coherent squad) vs DC 12.
Trigger after leader loss, 25%+ casualties in a short span, overwhelming threat, or order.
Partial: hold, but −1 next action. Success+: hold. Fail: retreat/take cover/lose advance.
Crit.Fail: break; flee, surrender, or freeze as fiction dictates.

FEAR X: first close exposure → WIS vs DC (10 + 2×X).
Fail = Frightened for 1 round; Crit.Fail = flee/freeze and +1 Condition from shock.

TERROR X: WIS vs DC (12 + 2×X).
Fail = Frightened and cannot approach source for scene; Crit.Fail = break +1 Condition.

FEARLESS: immune to Morale/Fear caused by ordinary intimidation/casualties, not mind
control or explicitly supernatural effects unless the trait says so.
```

### Tyranid Shadow in the Warp

```
SHADOW X (usually 1-3): psychic pressure from the Hive Mind.
- Psykers: −X to psychic casts and Perils range widens by X (max natural 1-5).
- Non-psykers: first significant exposure each scene → Fear X.
- Does NOT automatically add Warp; it is alien psychic pressure, not Chaos taint.
```

---

## VEHICLES

Narrative vehicle layer; use listed custom stats when a named vehicle has them.

```
CLASS                 HP    AC   Examples
LIGHT                  40    14   bike, buggy, sentinel
ARMORED TRANSPORT      60    16   Chimera, Rhino, Devilfish
BATTLE TANK            90    18   Leman Russ, Predator
SUPER-HEAVY           160    20   Baneblade-class; unique engines may exceed this

Crew attack rolls use the relevant operator's DEX/INT plus training.
Character-scale weapons without Anti-vehicle or AP 3+ deal half damage to armored
vehicles after outcome damage. Anti-vehicle weapons deal full damage.

Vehicle Crit bonus effect: roll d6 — 1 mobility, 2 weapon, 3 sensors, 4 crew shock,
5 fire/heat, 6 catastrophic system; GM records the actual impairment.
Repair: INT DC 12 light damage / 16 disabled system / 20 catastrophic, plus parts/time.
At 0 HP vehicle is disabled; a further catastrophic hit may destroy it. Occupants make
DEX/CON saves as fiction requires.
```

---

# PART VII: IMPERIUM SYSTEMS

---

## INQUISITION HEAT

```
INQUISITION HEAT: ○○○○○○ (0/6)

0: Unknown — no attention
1-2: Noticed — name in a file
3-4: Watched — agents monitoring
5: Investigated — active scrutiny
6: Targeted — they're coming

HEAT RISES:
+1: Unsanctioned psyker witnessed
+1: Consorted with known heretics
+1: Possessed/prohibited xenos tech discovered
+2: Used Chaos artifact
+2: Survived daemon encounter (suspicious)
+3: Open heresy

HEAT DROPS:
-1: Denounced heretics successfully
-1: Provided useful intelligence
-2: Completed mission for Inquisition

CONNECTION TO PRESSURES:
High Warp + high Heat is often a death sentence. High Control can provide institutional
cover, but rival institutions may still attack. Reducing Heat may involve AUTHORITY
OVERRIDE, testimony, service, blackmail, or genuine exoneration; only the first kind
automatically adds Control.
```

---

## GUARD ORDERS

Only characters whose role grants command authority can issue formal Orders.

```
ISSUE ORDER: d20 + CHA vs DC 8 (drill), 12 (under fire), 16 (broken/chaotic unit).
One Order per officer turn; issuing it is a Bonus action.

BASIC ORDERS:
- "First Rank, Fire!" — recipient's next ranged Action attacks twice with the same weapon;
  separate rolls, no extra turn; consumes Burst Ammo if weapon fires in burst mode
- "Take Aim!" — recipient gains AIM without spending their Bonus action
- "Move! Move! Move!" — double movement; no attack this turn
- "Get Down!" — +2 cover AC and prone until movement

OFFICER ORDERS (Rank 3+):
- "Bring It Down!" — coordinated attacks on one vehicle gain +1d6 total damage after at
  least two allies hit it this round
- "Forwards, for the Emperor!" — +1 melee attack modifier on next charge
- "Hold the Line!" — +1 Morale and cannot voluntarily retreat until next turn

COMMISSAR ORDERS:
- Summary Execution — kill one squad member; squad gains +2 Morale for scene. Record the
  killing as Mission Wear at Debrief when it carries moral/psychological cost; if performed
  because of a binding Directive at severe personal cost, it may also add +1 Control
  (max once/mission from that Directive trigger).
- No Retreat — unit cannot voluntarily retreat; desertion invites execution
- The Emperor Is Watching — ordinary Fear immunity +1 round, +1 saves. If the issuing
  character leans on institutional terror as leverage, COMMIT — AUTHORITY may apply to the
  Order roll; the Order itself does not automatically add Control.

OUTCOMES:
Crit.Fail: troops break or misinterpret; immediate Morale test with DIS
Fail: order not executed
Partial: executes with complication/delay
Success: executes as written
Crit: executes + recipient gains +1 next related roll
```

---

## IMPERIAL BUREAUCRACY

```
REQUISITION (Rank-based mission budget):
| Rank | Budget | Typical ceiling                  |
|------|--------|----------------------------------|
| 0    | 5 RP   | basic gear / ammo               |
| 1    | 10 RP  | specialist kit                  |
| 2    | 20 RP  | heavy weapon / light vehicle    |
| 3    | 40 RP  | power weapon / transport        |
| 4    | 80 RP  | strategic asset                 |
| 5    | special| sector-scale authority; every asset has political cost |

RP COST GUIDE:
1: basic weapon, ammo resupply, mundane kit
2: flak/mesh, auspex, medicae kit
4: special weapon, carapace, rare utility gear
6: heavy weapon, field-grade bionic, light vehicle access
8: power weapon / elite armor upgrade
12: armored transport
20: battle tank / Valkyrie-scale transport
40: super-heavy support / rare relic deployment
60+: orbital/strategic asset; requires narrative authority even if budget exists
```

Requisition is permission and logistics, not shopping. Unspent RP does not become money.
Availability, faction ownership, secrecy, and mission logic can still block an item.

### Shortcuts

```
Inquisitorial Rosette: bypass ordinary authorization; creates debt/Heat/political enemies
Rogue Trader Warrant: bypass many trade restrictions; not military command over everyone
Space Marine authority: strong military leverage; does not automatically command every
Imperial institution
```

### Profit Factor (Rogue Traders)

```
PROFIT FACTOR: 0–6 persistent wealth/network rating. Start 2-4 by campaign premise.
ACQUIRE: d20 + CHA + Profit Factor vs DC 8 common / 12 scarce / 16 rare / 20 relic-scale.
Partial: acquire with debt, delay, inferior quality, or obligation.
Fail: unavailable and attention/debt may rise. Crit.Fail: fraud, rival, seizure, or Heat.
Major ventures can raise/lower Profit Factor by 1; never from routine purchases.
```

### Bionics

Bionics are treatment/custom gear, not automatic Warp taint. Installation requires proper
parts and surgery. If an institution pays/owns/maintains the implant as leverage, adapting
the Scar adds +1 Control per SCAR ADAPTATION. Independently sourced implants pay their
resource cost instead and do not automatically add Control.

```
BIONIC ARM: treat one arm-related Scar; +1 STR for lifting/grip with that arm; obvious tech
BIONIC EYE: treat lost-eye Scar; +1 ranged/perception involving optics; scanner detectable
BIONIC LEGS: treat mobility Scar; restore speed; ADV forced-march/endurance once/scene
RESPIRATORY UNIT: treat lung/toxin Scar; ADV gas/toxin saves; maintenance dependency
MECHADENDRITE: Tech-Priest/approved implant; extra object interaction, not extra attack
```

Each implant has recorded origin, maintenance need, and social/legal consequences.

---

# PART VIII: THE GALAXY

---

## REGIONS (Condensed)

```
SEGMENTUM SOLAR:
  Terra (Throneworld), Mars (Mechanicus), Titan (Grey Knights)
  The heart of the Imperium. Extreme Control pressure.

SEGMENTUM OBSCURUS:
  Eye of Terror / Riftward warzones, Fenris; Cadia stands in CLASSIC M41 and is fallen
  in ERA INDOMITUS
  Chaos bleeds through. Extreme Warp pressure.

SEGMENTUM PACIFICUS:
  Sabbat Worlds (crusade), forge worlds
  Military grind. Control + Entropy.

SEGMENTUM TEMPESTUS:
  Catachan (death world), Tallarn (desert)
  Frontier. Lower Control, survival focus.

SEGMENTUM ULTIMA:
  Ultramar (Guilliman, stability), Baal (Blood Angels)
  T'au border, Tyranid corridor.
  Most varied — politics, invasion, expansion.

BEYOND:
  Commorragh (Dark Eldar torture city)
  Craftworlds (dying Eldar civilization)
  Ork Empires (WAAAGH! gathering)
  Hive Fleets (extragalactic consumption)
  Necron Dynasties (awakening tombs)

THE GREAT RIFT (Cicatrix Maledictum):
  Galaxy torn in half. Warp bleeds into reality.
  Imperium Nihilus (dark side): cut off, desperate, Extreme Entropy pressure.
  Imperium Sanctus (light side): Guilliman fights, Extreme Control pressure.
```

---

# PART IX: GM TOOLS

---

## RANDOM TABLES

```
=== MISSION COMPLICATIONS (d12) ===
1: CHAOS TAINT — true Warp corruption; severe unprotected exposure may add +1 Warp
2: GENESTEALER — enemy within. Trust no one.
3: WRONG ORDERS — superiors serve another master
4: COLLATERAL — civilians in fire zone. Rescue can tick Pressure; abandoning them may record Mission Wear
5: INQUISITION — your mission draws attention. +1 Heat.
6: MECHANICUS — tech-heresy accusations. Gear at risk.
7: ELDAR — ancient xenos have agenda. Helpful? Hostile? Both.
8: ORKS — green tide in the way. Can't be reasoned with.
9: WARP BREACH — reality unstable; +1 Warp on severe unprotected exposure, daemons possible.
10: FRIENDLY FIRE — other Imperial forces confused. Diplomacy or death.
11: DAEMON — something manifested. Combat or banishment.
12: CLEAN — mission as described. Suspiciously clean.

=== DOWNTIME EVENTS (d10) ===
1: Chaos cult discovered nearby
2: Inquisition — papers checked, questions asked
3: Ork raid on supply lines
4: Genestealer — suspicious behavior in populace
5: Administratum — bureaucratic complication delays everything
6: Warp storm — travel disrupted; psykers suffer −1 casts, breach/exposure may add Warp
7: Crusade call — military mobilization, no rest
8: Deserters found — execute, shelter, recruit, or report? Each choice changes Heat/Pressure/possible Mission Wear
9: Relic discovered — genuine or trap?
10: Relative peace. Something is wrong.

=== TAVERN/BARRACKS RUMORS (d10) ===
1: "New regiment arrived. Half of them are from a penal legion."
2: "Commissar shot three men yesterday. Morale improving."
3: "Tech-priest found something in the lower levels. Won't say what."
4: "Supply ship is two weeks late. Again."
5: "Strange lights in the sky last night. Psyker in the infirmary screaming."
6: "Inquisitor arrived. Everyone's nervous."
7: "Sergeant disappeared on patrol. Found his gun but not him."
8: "New orders coming. Nobody knows where we're going."
9: "Medic says the wounded are healing wrong. Growing things."
10: "Everything's fine." (Roll twice. Both true and connected.)
```

---

## NPC TEMPLATES

```
=== IMPERIAL ===

GUARDSMAN | HP 15 | AC 12 (flak) | Low
Lasgun +3 (d8), Bayonet +2 (d4+1)
Morale: +2 while squad remains coherent; test when isolated
Note: individually weak. Strength in numbers.

COMMISSAR | HP 30 | AC 14 (carapace) | High
Bolt Pistol +5 (d8+2), Power Sword +5 (d8+2)
Summary Execution: kill ally → all allies +2 morale
Fearless. Will execute you for cowardice.

SPACE MARINE | HP 50 | AC 18 (power armor) | Deadly
Bolter +7 (d10+2), Chainsword +7 (d8+4)
And They Shall Know No Fear: Fearless vs ordinary Morale/Fear
Gene-seed: +2 STR, +2 CON, superhuman

SISTER OF BATTLE | HP 35 | AC 17 (sororitas armor) | High
Bolter +5 (d10+2), Chainsword +5 (d8+2)
Act of Faith: 1/encounter, reroll or heal d8
Faith is armor. Flame is answer.

TECH-PRIEST | HP 25 | AC 14 | Medium
Mechadendrite +4 (d6+2), Las Pistol +3 (d6)
Repair: INT DC 12, fix vehicle/weapon
Machine communion: interface with tech

=== CHAOS ===

CHAOS MARINE | HP 50 | AC 18 | Deadly
Bolter +7 (d10+2), Daemon Blade +8 (d10+3, +d6 Warp damage)
Mutations: 1-2 visible, may have Chaos boon
10,000 years of hate.

CULTIST | HP 10 | AC 10 | Low
Autopistol +2 (d6), Knife +1 (d4)
Fanatical: Fearless vs ordinary Morale while leader present
Expendable. Wants to die for the gods.

=== XENOS ===

ORK BOY | HP 20 | AC 12 | Low
Slugga +3 (d6), Choppa +4 (d8+2)
WAAAGH!: on charge, +1 melee attack modifier; +1 additional damage per 5 nearby Orks (max +3)
Breaks if Boss falls.

ELDAR GUARDIAN | HP 15 | AC 14 (mesh) | Medium
Shuriken Catapult +5 (d8), Chainsword +3 (d8)
Battle Focus: shoot + move (no penalty)
Spirit Stone: must recover on death.

GENESTEALER | HP 25 | AC 14 | High
Rending Claws +6 (d8+3, AP 2 on crit)
Infiltrate: advantage on ambush, hypnotic gaze
Fear 1. Fast. Terrifying.
```

---

## SCENARIO SEEDS

```
=== THE LAST ORDER ===
Guard unit receives contradictory orders. One is from a heretic.
OBJECTIVE: identify the valid command and secure the position.
PRESSURE: both chains demand immediate compliance; vox authentication degrades.
PERSONAL COST: invoking higher authority can add Control; following the Chaos order can
create Warp exposure; casualties/betrayal become Mission Wear at Debrief.

=== THE SILENCE ===
Astropath network goes dark. Colony isolated.
OBJECTIVE: restore communication or discover why it failed.
PRESSURE: time, panic, missing astropaths, enemy movement in the dark.
PERSONAL COST: Warp only if the cause is actually immaterial; isolation/losses feed Wear.

=== THE RECLAMATION ===
Mechanicus wants something from a Necron tomb. Eldar warn against it.
OBJECTIVE: recover, destroy, or deny the target.
PRESSURE: awakening defenses, rival claims, blackstone effects, collapsing access routes.
PERSONAL COST: Mechanicus leverage can add Control; Necron technology is not Warp by itself.

=== THE PURGE ===
Inquisitor orders sector purge. Millions will die; infection status is uncertain.
OBJECTIVE: contain the threat under an explicit deadline.
PRESSURE: spreading infection, political orders, evacuation bottlenecks, orbital readiness.
PERSONAL COST: obeying a binding purge Directive can add Control; mass death becomes Wear;
forbidden Warp solutions add Warp only when actually used.
```

---

# PART X: REFERENCE

---

## QUICK REFERENCE

```
MISSION BOARD:
OBJECTIVE 0/6 → accomplish the operation
PRESSURE  0/6 → enemy/time/escalation; 3 complication, 5 bad extraction, 6 Crisis→reset 3
EXTRACTION 0/6 → activate on withdrawal; 6 = survivors/assets escape

OPERATIONAL PRESSURES (asymmetric):
CONTROL 0-10 → institutional leverage/dependence; gained by Authority/ownership exchanges
WARP    0-10 → actual Immaterium/Chaos/psychic contamination; explicit gains only
ENTROPY 0-10 → Mission Wear at Debrief; normally max +2/mission

COMMIT:
SUPPLY +1d4 and expend relevant ammo/asset
BODY +1d6 and +1 Condition
AUTHORITY +1d6 and +1 Control; requires Rank/Standing + institution
Psykers use OVERCHANNEL instead: +1d6 cast, +1 Warp, Peril range +1 this cast

CONDITION: 0 operational → 1 hurt → 2 wounded → 3 critical → 4 down
At HP ≤0, Condition 4 is also DYING unless UNKILLABLE overrides.

SCARS:
enter Condition 3+ → RAW Scar (+1 Scar Load). Adapt during Debrief/downtime:
AUGMENT → tech + possible Control; HARDEN → Veteran Edge + Entropy;
SANCTION/BIND → Warp adaptation + Warp; adapted Scar usually removes 1 Load.
3 Adapted Scars → VETERAN'S INSTINCT 1/mission.

FATE: interrupts actual death; HP→1, Condition≥3, Scar.
FORTUNE: reroll / +2 / enemy reroll / prevent 1 imposed direct Condition.

RANK/STANDING 0-5 unlocks scale. CONTROL is the debt from leaning on it.
THEATER: Campaign Objective / Enemy Escalation / Supply Crisis, all core 0-6 clocks.
```

---

## GM GUIDELINES

```
IRON WILL is mission-first. Do not try to make every scene touch Control/Warp/Entropy.
If the Mission Board is moving and consequences are recorded, the engine is working.

CONTROL should feel tempting because it solves logistical/authority problems immediately.
WARP should feel tempting because it breaks normal limits and can spike unpredictably.
ENTROPY should feel delayed: the player often understands the cost only at Debrief.
SCARS should create new capability through Adaptation, not function only as punishment.

A clean tactical win can still become a pyrrhic mission. A dead character can still have
won the theater. A surviving squad can still have lost the war. Keep those layers distinct.

Character lifespan is not a fixed timer. Control can accelerate through aggressive use of
Authority, Warp through reckless psychic/Chaos power, and Entropy through repeated costly
operations. Recovery exists, but the campaign should leave a visible record on people,
relationships, equipment, and the Theater Board.
```

---

## GM CHECKLIST

```
[ ] Mission Board visible? Objective / Pressure / Extraction
[ ] Did actions move the Mission Board instead of generating arbitrary personal ticks?
[ ] Control only from real leverage/debt/Directive triggers?
[ ] Warp only from actual Immaterium/Chaos/psychic exposure?
[ ] Mission Wear assessed at Debrief → Entropy?
[ ] New Scars offered an Adaptation path?
[ ] Theater Board updated after mission result?
[ ] Rank/Standing sets scale; Control records institutional capture?
[ ] Heat/Requisition/Profit/Bionics consequences applied?
[ ] Fortune/Fate/Commit/Overchannel resolved with their real costs?
```

---

*In the grim darkness of the far future, there is only war. The question is not whether you survive — it's what's left of you when you do.**In the grim darkness of the far future, there is only war. The question is not whether you survive — it's what's left of you when you do.*
