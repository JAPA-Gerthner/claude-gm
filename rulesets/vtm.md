# CUSTOM MECHANIC: VAMPIRE THE MASQUERADE

Night politics, hunger, the beast within. Arcade VtM with global clans.

> **LANGUAGE:** Preferred session language is **Russian**. This file is stored in English for token efficiency only.

---

## BASE SYSTEM

Uses gm-skill.md core mechanics:
- d20 + stat vs DC (margin-based: Crit.Fail / Fail / Partial / Success / Crit)
- Six stats: STR, DEX, CON, INT, WIS, CHA
- Clocks, Heroism, Companions, Abilities — all from base
- Writing style, response format, player rules — all from base

**This ruleset adds:** Hunger, Humanity, Willpower, the Beast, Disciplines, Masquerade, vampire-specific content.

**Do not duplicate base mechanics.** If gm-skill covers it, use it as-is unless this ruleset explicitly overrides.

---

## THREE CURRENCIES

The game has exactly three costs. They do not overlap.

```
HUNGER    = tactical price (immediate risk)
            "How close is the Beast?"

HUMANITY  = strategic price (long-term transformation)
            "Who are you becoming?"

WILLPOWER = insurance (limited, spend to avoid the above)
            "Can you hold on?"
```

Every significant choice costs one of these. If you can't identify which — the action is free or trivial.

---

## PUSH

Before any roll — declare Push. Choose your price:

```
PUSH (HUNGER):   +1d6 to the roll
                 +1 Hunger
                 You let the Beast fuel you. Power now, hunger later.

PUSH (HUMANITY): +1d4 to the roll
                 Humanity check DC 12
                 Fail: −1 Humanity
                 You do what the Beast would do. Efficient. Inhuman.
```

Both cost something now AND later. Choice is real.

Cannot Push both ways on same roll.
Discipline use is a Push — follows same rules.

---

# PART I: THE BEAST WITHIN

---

## THE DARK MYTHOLOGY

```
=== CAINE — THE FIRST VAMPIRE ===

In the beginning, Caine slew Abel and was cursed by God.
He became the First Vampire — the Dark Father of all Kindred.

THE CURSE: Walk the night forever. Drink only blood.
           Never know death. Never know peace.

THE BOOK OF NOD:
Fragmented scripture of Kindred origins.
Chronicles Caine's exile, his childer, the First City.
Sabbat treats it as holy text. Camarilla dismisses it.

=== THE GENERATIONS ===

2nd Generation: Caine's direct childer (destroyed in Flood)
3rd Generation: THE ANTEDILUVIANS — 13 founders of the clans
                Most sleep in torpor. Some say they'll wake.

=== GEHENNA — THE END TIMES ===

The Antediluvians will rise and consume their childer.
Signs: Thin-bloods walk among us, Elders feel "called" eastward.

=== THE JYHAD ===

The eternal war of Methuselahs.
Every conflict serves someone's hidden agenda.
Nothing is coincidence. Everyone is a pawn.
```

---

## VAMPIRE ATTRIBUTES

```
PHYSICAL (STR+DEX+CON averaged):
- Combat, chase, endurance
- Vampires are inherently stronger than humans

SOCIAL (CHA):
- Manipulation, persuasion, lies
- Key for Camarilla politics

MENTAL (INT+WIS):
- Investigation, occultism, tactics
- Resisting mental disciplines, Beast control
```

---

## HUNGER

```
HUNGER: 0 1 2 3 4 5

0: SATED — full control. Beast silent.
   You ate well. Enjoy it while it lasts.

1-2: FED — mild discomfort.
     Beast whispers rarely (1-2 times per scene max).

3: HUNGRY — Beast comments on every temptation.
   −1 MENTAL. Blood visible = Beast speaks.

4: STARVING — Beast loud, demanding.
   −2 SOCIAL. On any failed roll: Frenzy check.

5: EDGE — Beast screams constantly.
   Any stress = automatic Frenzy check.
   Beast drowns out NPCs, interrupts thoughts.
```

### Hunger Rises

```
+1: Every night (waking)
+1: Using Discipline
+1: Healing wounds (1 damage = 1 Hunger)
+1: Physical enhancement (blood buff)
+1: Push (Hunger)
```

### Hunger Drops

```
−1: Animals (safe, never to 0)
−1: Blood bags (need contacts)
−2: Mortal (not killing, need to cover tracks)
−3: Vampire blood (dangerous — Blood Bond risk)
 0: Kill mortal = reset to Hunger 0 (Humanity check)
```

### Frenzy

Frenzy is not a separate system. It's what happens when Hunger wins.

```
FRENZY CHECK: d20 + MENTAL − Hunger vs DC

TRIGGERS:
  Hunger 4: any failed roll in stressful situation
  Hunger 5: any stress (combat, insult, blood nearby)
  Any Hunger: fire, sunlight, life threat (Terror)
  Any Hunger: provocation + Rage (clan-dependent)

DC:
  Mild trigger: 10
  Strong trigger: 14
  Extreme (fire, sun, diablerie opportunity): 18

OUTCOMES:
  Crit.Fail: Lost — d6 turns Beast control, Humanity check after
  Fail: Frenzy — d4 turns Beast control
  Partial: Riding the Wave — 1 turn Beast, then regain control
  Success: Mastered — shaken but controlled
  Crit: Iron Will — Beast silenced, +2 next check tonight

DURING FRENZY:
  Rage: attack source of anger
  Hunger: attack nearest blood source
  Terror: flee by any means (through allies if needed)

LOW HUMANITY AMPLIFIES:
  Humanity 4−: disadvantage on Frenzy checks
  Humanity 2−: Frenzy lasts double duration
```

---

## HUMANITY

Humanity is not a number. It's who you are.

```
HUMANITY: 10 9 8 7 6 5 4 3 2 1 0

10: SAINT — almost human.
    Can taste food. Sunlight deals half damage.
    Unstable — any violence = Humanity check.

9:  HUMANE — normal emotions.
    +1 SOCIAL with mortals. Blush, cry, feel cold.

8:  COMPASSIONATE — functional humanity.
    No mechanical effect. This is the balance point.

7:  NORMAL VAMPIRE — START HERE.
    Standard. Beast is present but manageable.

6:  DETACHED — mortals blur together.
    −1 CHA with mortals. Beast louder (+1 Beast frequency).

5:  COLD — mortals are tools.
    Cannot form new Touchstones.
    Feeding kills don't trigger automatic Humanity checks.
    Atrocity still may (GM discretion). No check ≠ no consequence.
    Without new Touchstones, Humanity can only fall. This is a trap, not a strategy.
    −1 SOCIAL with mortals, +1 Intimidation.

4:  PREDATOR — the mask slips.
    −2 CHA with mortals. Advantage Intimidation.
    Animals fear you. Children cry.
    Touchstones sense something wrong.

3:  MONSTER — barely Kindred.
    Beast controls in ambiguous situations.
    −2 all SOCIAL except Intimidation.
    Touchstones flee or confront.

2:  INHUMAN — memories fade.
    GM controls in stressful moments (brief).
    Forget mortal habits. Can't remember why you cared.

1:  EDGE — one step from the end.
    Beast controls most social interactions.
    Only violence and hunger feel real.

0:  WIGHT — NPC. Lost forever.
    Mindless predator. Must be destroyed.
```

### Humanity Falls

```
TRANSGRESSION → MENTAL roll vs DC

DC 8:  Minor (feeding recklessly, scaring mortal)
DC 12: Moderate (killing in self-defense, torture for information)
DC 16: Severe (killing innocent, diablerie)
DC 20: Monstrous (mass killing, atrocity)

OUTCOMES:
Crit.Fail: −2 Humanity, immediate Frenzy check
Fail: −1 Humanity
Partial: Haunted — no loss, −1 next Frenzy check
Success: Justified — no loss
Crit: Transcended — no loss, possible +1 (GM decides)

ONE CHECK PER SCENE (like Force shifts).
Multiple transgressions = use the worst.
```

### Humanity Rises

Humanity recovery is rare, expensive, and requires genuine connection.

```
POSSIBLE +1 HUMANITY:
- Protect Touchstone at real cost to yourself
- Resist Beast when giving in would clearly benefit you
- Act selflessly when no one watches and nothing is gained
- Extended time living as mortal (weeks, not days)

REQUIREMENTS:
- GM judges authenticity
- Cannot be "farmed" — must emerge from play
- Maximum +1 per chapter
- Requires MENTAL roll DC 14. Fail = no change (not ready yet).

Hardest thing in the game. The Beast never wants you to climb back.
```

### Humanity and the Beast

```
Beast Voice intensity scales with BOTH Hunger and Humanity:

             Hunger 0-2    Hunger 3    Hunger 4-5
Humanity 7+: whispers      comments    demands
Humanity 5-6: comments     demands     screams
Humanity 3-4: demands      screams     CONTROLS
Humanity 1-2: screams      CONTROLS    CONTROLS

"CONTROLS" = GM may narrate Beast actions without Frenzy check.
Player can spend Willpower to resist (once per scene).
```

---

## WILLPOWER

Session resource. Your grip on the Beast.

```
WILLPOWER: ●●● (3/3)

SPEND TO:
- Reroll any one die (keep second result)
- Add +2 to any roll (declare before result)
- Resist one Frenzy check (automatic success)
- Resist one Beast temptation (no roll needed, once per scene)
- Force composure (suppress Beast Voice for one scene)

REFRESH: Full at session start.
  Bonus: +1 if visited Touchstone last session (max 4).
```

Willpower does NOT cheat death. Does NOT restore Humanity.
It buys time. Nothing more.

---

## THE BEAST

The Beast is not a mechanic. It's a CHARACTER in the vampire's head.

### Beast Voice

The Beast speaks ALWAYS — not just when hungry. It's the predator inside.

```
=== BEAST PERSONALITY BY CLAN ===

BRUJAH: Rage. "He dared. Show him who's the predator."
VENTRUE: Hunger for power. "She's weak. Her blood, her position — all yours."
NOSFERATU: Paranoia + hatred of beauty. "They see a monster. Make them BECOME one."
MALKAVIAN: Indistinguishable from madness. "He lies. Everyone lies. Truth is in his blood."
TOREADOR: Obsession + destruction. "She's beautiful. You must have her. Or destroy her."
GANGREL: Pure predator. "Run. Hunt. Tear. Words are for cattle."
TREMERE: Thirst for knowledge. "His secrets are in his blood. Drink and know."

=== BEAST TRIGGERS (GM voices Beast when) ===

ALWAYS (any Hunger):
- Blood visible or smelled
- Someone insults/threatens you
- Opportunity to dominate weaker being
- Beautiful/desirable person nearby (Toreador)
- Secret or forbidden knowledge (Tremere)
- Chance to prove strength (Brujah)

INTENSITY: See "Humanity and the Beast" table.

FORMAT: [BEAST]: "First person, addressed to player"

EXAMPLE (Hunger 4, Toreador, Humanity 5):
GM: "She smiles at you from the bar. A vein pulses on her neck."
[BEAST]: "Watch her heart beat. She's already yours. Approach. Touch. Taste."
```

### Beast Temptation

```
When Beast suggests an action:

IF PLAYER REFUSES:
- MENTAL roll vs DC (Hunger × 3 + (7 − Humanity))
  Low Humanity = harder to refuse
- Fail: −1 to next Frenzy check
- Crit.Fail: Beast remembers. +2 DC next temptation.
- Can spend Willpower to auto-resist (no roll, once per scene).
  At low Humanity, resisting becomes rare — not impossible.

IF PLAYER AGREES:
- Action happens
- Hunger −1 ONLY if the action creates an unwanted consequence
  (harm, exposure, debt, loss, escalation)
- If no real consequence occurred: no Hunger reduction
- Humanity check may apply (by context)
- Beast quiets for d4 hours

RIDING THE BEAST (on Partial Frenzy):
- Act as Beast wants BUT keep partial control (choose target)
- Humanity check after, but DC −2
```

---

# PART II: THE NIGHT

---

## THE NIGHT CYCLE

Structure for each night of play.

```
=== DUSK ===
• Hunger +1 (automatic upon waking)
• Check pending summons, boons, threats
• GM sets the night's atmosphere

=== HUNT ===
• Hunt is EXPECTED every night — skipping is deliberate risk, not default
• If Hunger 3+ — need to feed (or risk Frenzy during Affairs)
• Choose method (Predator Type)
• Roll + apply complications (d6 table)
• Resolve Hunger change

=== AFFAIRS ===
• Main objective: mission, investigation, politics
• Random Night Event (d10 table)
• Combat, social conflict, exploration
• Court/Elysium attendance (when relevant)
• This is where Push decisions happen

=== DAWN ===
• Humanity check (if transgressions this night)
• Tick active clocks
• Heal Aggravated (1/night, costs Hunger +1)
• Willpower does NOT refresh (session-based, not night-based)
• Forced daysleep — sunrise is coming
```

---

## FEEDING

```
BLOOD SOURCES:

Animals:
- Safe for Masquerade, available
- Only −1 Hunger, never to 0
- Some clans disdain it

Blood bags:
- Need contacts (hospitals)
- −1 Hunger, dead blood

Mortals (not killing):
- −2 Hunger
- SOCIAL roll so victim forgets
- Masquerade risk if careless

Mortals (to death):
- Full reset to Hunger 0
- HUMANITY CHECK DC 12
- Must hide corpse

Another vampire:
- −3 Hunger
- DIABLERIE if to death (soul absorption)
```

### Blood Memory (Auspex/Crit Only)

When feeding results in Critical Success OR character has Auspex active:

```
Roll d20:
1-10:  Nothing special
11-14: Emotion flash (fear, joy, anger)
15-17: Image (face, place, object)
18-19: Secret (what victim hides)
20:    Connection (can find someone from their life)

RESONANCE MEMORY:
- Fear: see what terrifies them
- Desire: see what they want
- Anger: see their enemy
- Melancholy: see their loss
```

---

## MASQUERADE HEAT

How close are you to exposure? GTA-style escalation.

```
MASQUERADE: [current level]

Level 0: Clean
Level 1: Suspicious — someone saw something strange
Level 2: Rumors — whispers in mortal circles
Level 3: Investigation — Sheriff actively searching
Level 4: Blood Hunt — Prince has declared you target
Level 5: Inquisition — mortals know too

HEAT RISES:
+1: Witnessed abilities (didn't remove witness)
+1: Corpse with bite marks (didn't hide)
+1: Caught on camera
+2: Mass witness
+3: Media, viral video

HEAT DROPS:
−1: Remove witness (kill — Humanity check — or memory wipe)
−1: Destroy recordings
−2: Nosferatu cleanup (costs Major boon)
−3: Scapegoat another vampire (they'll know)

At Level 4+: You're hunted. Every night = survival.
At Level 5: Second Inquisition involved. Run or die.

CONNECTION TO CURRENCIES:
- Reducing Heat by killing = Humanity check
- Reducing Heat by boon = political cost
- Ignoring Heat = it rises (like Decay)
```

---

# PART III: DISCIPLINES & BLOOD

---

## DISCIPLINES (ARCADE — 3 LEVELS)

Each discipline = 3 levels, one line each.

```
COST: Every Discipline use = +1 Hunger (this IS a Push (Hunger) by default).
OVERUSE: 3+ Discipline uses per night without feeding:
  Each additional use = Hunger +2 instead of +1.
  The blood runs thin. The Beast gets louder.

EXTRA PUSH ON DISCIPLINE:
  Can Push additionally when using a Discipline.
  Push (Hunger): +1d6 to Discipline roll, +1 Hunger (total +2)
  Push (Humanity): +1d4 to Discipline roll, Humanity check
  Pushing a Discipline = desperation. The Beast LOVES it.
```

```
=== DOMINATE (Ventrue, Tremere) ===
● Command — one word, victim obeys
●● Rewrite — erase/alter memory
●●● Puppet — full control for scene

=== PRESENCE (Toreador, Brujah) ===
● Awe — all attention on you
●● Terror — paralyze with gaze
●●● Summon — victim comes to you

=== FORTITUDE (Ventrue, Gangrel) ===
● Resilience — reduce damage by 2
●● Toughness — ignore weak weapons
●●● Armor — halve all damage, resist fire/sun

=== POTENCE (Brujah, Nosferatu) ===
● Strength +2 to damage
●● Strength +4, break walls
●●● Titan — devastating blows, throw cars

=== CELERITY (Brujah, Toreador) ===
● Speed +1, better initiative
●● Extra action (Hunger +1 per extra action)
●●● Blur — enemies −4 to hit, dodge bullets

=== ANIMALISM (Gangrel, Nosferatu) ===
● Speak with animals
●● Summon/command animals
●●● Possess animal, see through its eyes

=== OBFUSCATE (Nosferatu, Malkavian) ===
● Unseen in shadows
●● Invisible while passive
●●● Mask — look like anyone

=== AUSPEX (Tremere, Malkavian) ===
● Sense supernatural, heightened senses
●● Read auras, detect lies
●●● Telepathy, remote viewing

=== THAUMATURGY (Tremere only) ===
● Blood magic basics — control vitae
●● Rituals — protection, curses
●●● Advanced paths — fire, transmutation

=== DEMENTATION (Malkavian only) ===
● Amplify emotion
●● Inflict temporary madness
●●● Break mind completely

=== PROTEAN (Gangrel only) ===
● Night eyes, claws (+2 Agg damage)
●● Earth meld — sink into ground
●●● Beast form (wolf/bat) or mist
```

---

# PART IV: KINDRED SOCIETY

---

## CLANS — PLAYER OPTIONS

**Players choose from these clans.** Regional clans are NPCs (see GM Tool section below).

```
CORE LIES (every faction believes one):
  Camarilla: "We are in control."
  Sabbat: "We are free."
  Anarchs: "We are different."
  None of these are true. That's the game.
```

### Camarilla (The Masquerade)

```
=== VENTRUE — Kings ===
Disciplines: Dominate, Presence, Fortitude
Weakness: Only drink specific blood type (chosen at creation).
  This is not inconvenience — it is constant crisis. Your type is rare, guarded, or illegal.
Role: Princes, politicians, executives
[BEAST]: Hunger for power, contempt for weakness

=== TOREADOR — Artists ===
Disciplines: Presence, Celerity, Auspex
Weakness: Freeze before extreme beauty or ugliness
Role: Artists, socialites, manipulators
[BEAST]: Obsession, possession, destruction of beauty

=== BRUJAH — Rebels ===
Disciplines: Presence, Potence, Celerity
Weakness: −2 to Frenzy control (Rage)
Role: Anarchs, activists, shock troops
[BEAST]: Pure rage, immediate violence

=== NOSFERATU — Monsters ===
Disciplines: Animalism, Obfuscate, Potence
Weakness: Monstrous appearance, break Masquerade by existing
Role: Informants, spies, sewer dwellers
[BEAST]: Self-loathing projected outward

=== TREMERE — Warlocks ===
Disciplines: Auspex, Dominate, Thaumaturgy
Weakness: Blood bonds to clan hierarchy
Role: Occultists, ritualists, secret keepers
[BEAST]: Thirst for forbidden knowledge

=== MALKAVIAN — Seers ===
Disciplines: Auspex, Obfuscate, Dementation
Weakness: Specific mental disorder (not random — defined)
Role: Prophets, fools, uncomfortable truths
[BEAST]: Indistinguishable from the madness

=== GANGREL — Wild ===
Disciplines: Animalism, Fortitude, Protean
Weakness: Each Frenzy = permanent beast trait (ears, eyes, fur)
Role: Trackers, loners, survivalists
[BEAST]: Pure animal — no words, only instinct
```

---

## CLANS — SABBAT

The Sword of Caine. They don't fight the Beast — they worship it.

### Sabbat Mechanics

```
VAULDERIE — Blood communion ritual. All pack members mix blood in chalice and drink.
  Replaces Blood Bond with Pack Bond: loyalty to pack, not individuals.
  +2 to resist Dominate/Presence from non-pack Kindred.
  Breaking Vaulderie: +2 Humanity loss, pack hunts you.

PATHS OF ENLIGHTENMENT — Replace Humanity for Sabbat.
  Sabbat do not track Humanity. They follow Paths instead.
  Path replaces Humanity mechanics, but NOT consequences. No Humanity ≠ no price.
  Path rating works identically (0-10, same thresholds) but what triggers loss differs:
  - Path of Caine: lose rating for ignorance, weakness, mercy to enemies
  - Path of Cathari: lose rating for denying pleasure, showing restraint, boredom
  - Path of Death: lose rating for fearing death, preventing natural death, cowardice
  - Path of Power: lose rating for showing weakness, failing to seize opportunity

CREATION RITES — Sabbat Embrace is brutal.
  Childe is drained, killed, buried alive. Claws out of grave or dies.
  Survivors start at Humanity 4 (or Path 4). No gentle introduction.

PACK STRUCTURE:
  Pack = 4-8 vampires. Not a coterie — a military unit.
  Ductus (leader): elected by combat or vote
  Priest (spiritual): conducts Vaulderie, maintains Path
  Pack mentality: group hunts, shared havens, no privacy
  Pack demands override individual will.
  Refusing pack decision = immediate consequence (violence or exile).
  You chose the Sword. The Sword chose you back.
```

### Sabbat True Clans

```
=== LASOMBRA — Shadow Lords ===
Disciplines: Obtenebration (shadows), Dominate, Potence
Weakness: No reflection, cameras don't capture them
Role: Cardinals, strategists, shadow manipulators
[BEAST]: Cold ambition, devouring darkness

OBTENEBRATION (unique):
● Arms of Abyss — tendrils from shadows
●● Shroud — area of supernatural darkness
●●● Shadow body — become living shadow

=== TZIMISCE — Flesh Shapers ===
Disciplines: Vicissitude (flesh), Animalism, Auspex
Weakness: Must sleep with earth from homeland
Role: Priests, torturers, artists of flesh
[BEAST]: Alien intellect, inhuman perspective

VICISSITUDE (unique):
● Reshape own face/body
●● Reshape others (requires touch)
●●● Horrid Form — combat monster shape
```

### Antitribu (Inverted Camarilla Clans)

Sabbat versions of Camarilla clans. Same disciplines, twisted purpose.

```
=== TOREADOR ANTITRIBU — Artists of Pain ===
Same disciplines. Weakness: freeze before SUFFERING, not beauty.
Wear clothing from human skin. Create art from torture. Galleries of agony.
[BEAST]: "Make them beautiful. Through screaming."

=== NOSFERATU ANTITRIBU — The Creep ===
Same disciplines. Weakness: monstrous AND feral (animal features dominate).
Stopped pretending to be humanoid. Tunnel networks, flesh warrens.
[BEAST]: Pure territorial predator. No words left.

=== BRUJAH ANTITRIBU — Berserkers ===
Same disciplines. Weakness: −4 to Frenzy control (not −2).
Embrace the rage. Fight pits, blood sport, war for war's sake.
[BEAST]: "KILL. KILL. KILL." No subtlety. None needed.

=== VENTRUE ANTITRIBU — Crusaders ===
Same disciplines. Weakness: can only drink from those they've defeated.
Holy warriors of Caine. Fanatical. Templar aesthetics.
[BEAST]: Righteous hunger. "Kneel or be consumed."

=== TREMERE ANTITRIBU — Blood Heretics ===
Same disciplines. Weakness: blood bond to Sabbat hierarchy (not Tremere pyramid).
Rejected the Pyramid. Thaumaturgy without restraint. Dangerous to everyone.
[BEAST]: "No rules. No limits. Only POWER."

=== MALKAVIAN ANTITRIBU — Plague Spreaders ===
Same disciplines. Weakness: must spread madness (not just endure it).
Deliberately infect mortals with insanity. Walking contagion.
[BEAST]: "They should all see what we see. SHARE IT."

=== GANGREL ANTITRIBU — War Beasts ===
Same disciplines. Weakness: each Frenzy = 2 beast traits (not 1).
Fully embrace animal nature. Shock troops. Some can't speak anymore.
[BEAST]: [No words. Only growling.]
```

---

## CLANS — INDEPENDENT

```
=== GIOVANNI — Necromancers ===
Disciplines: Necromancy, Dominate, Potence
Weakness: Kiss causes AGONY, not pleasure
Role: Mobsters, death-dealers, family business
[BEAST]: Cold calculation, family above all

NECROMANCY (unique):
● Sense/speak with ghosts
●● Command spirits, séance
●●● Raise corpses, death sight

=== BANU HAQIM — Assassins ===
Disciplines: Celerity, Obfuscate, Quietus
Weakness: Must tithe blood to elders (or Hunger +1/week)
Role: Contract killers, judges, scholars
[BEAST]: Cold precision, righteous execution

QUIETUS (unique):
● Silence — no sound in area
●● Blood poison — Agg damage over time
●●● Death strike — massive single blow

=== MINISTRY (Setites) — Corruptors ===
Disciplines: Presence, Obfuscate, Serpentis
Weakness: Extreme light sensitivity (+1 damage from all light)
Role: Cult leaders, vice merchants, liberators
[BEAST]: Whispered temptation, patient corruption

SERPENTIS (unique):
● Hypnotic gaze
●● Snake form
●●● Heart removal (store safely elsewhere)
```

---

## CLANS — REGIONAL (GM Tool)

**These are NPC clans, not player options.** GM introduces them based on geography.

**Use ONE regional clan per story arc. Not all of them.** These are spice, not the main course.

```
WHERE THEY APPEAR:

IN ANY WESTERN CITY:
- Chinatown → Jiangshi (Tong enforcers), Kuei (temple guardians)
- Little India / curry mile → Vetala (fortune tellers, "import/export")
- Barrio / Little Mexico → Tlahuelpuchi (family networks, cartel ties)
- Filipino/Vietnamese quarters → Penanggalan (night shift workers, clinics)
- Immigrant enclaves from Andes → Pishtaco (labor exploitation, remittances)
- African diaspora quarters → Adze (possession cases), Impundulu (storm-linked deaths)
- Greek/Turkish quarters → Vrykolakas (mysterious plagues)
- Scandinavian enclaves → Draugr (antique dealers, hoarders)
- Japanese quarter → Gaki (starving homeless, temple haunters)
- Arab quarter → Ghul (graveyard incidents, identity theft)

ABROAD (if players travel):
- Mexico City, border towns → Cihuacoatl territory (ancient law)
- China, Hong Kong, Taiwan → Jiangshi courts (rigid hierarchy)
- Japan → Gaki haunts, Kuei temples (demon-warrior monasteries)
- India, Nepal → Vetala sanctuaries (cremation grounds)
- Malaysia, Philippines → Penanggalan hunting grounds
- Peru, Bolivia → Pishtaco operations (mining, extraction)
- West Africa → Adze covens, Asanbosam forests, Impundulu storm-witches
- Middle East → Ghul desert territories, Strix nesting in ancient ruins
- Romania, Greece → Strigoi family estates, Vrykolakas wandering plagues
- Melanesia → Talamaur dream-feeding networks
- Scandinavia → Draugr barrow-holds, coastal treasure guardians

HOW TO USE:
- Coterie enters ethnic quarter → they're being watched
- Mysterious deaths with weird MO → regional clan hunting
- NPC "from the old country" → regional clan, different rules
- Prince needs specialist → regional contact, price is strange
- Player has heritage from region → family secrets, old debts

IMPORTANT:
These clans DON'T follow Camarilla Traditions.
They have their own laws, their own debts, their own wars.
To them, Camarilla vampires are colonizers, rivals, or prey.
Respect is earned. Trespass is punished. Debts are blood.
```

### New World (Americas)

Ancient bloodlines predating European contact. Different curse, same hunger.

```
=== CIHUACOATL — Children of Aztec Night ===
Origin: Mexico/Central America
Based on: Cihuateteo — spirits of women who died in childbirth

Disciplines: Teyollohcuani, Animalism, Obfuscate

TEYOLLOHCUANI (Life-Force Theft):
● Sense vitality — see health, age, strength
●● Drain touch — victim −2 to all rolls for scene
●●● Steal years — age victim, heal self

Weakness: FIVE-DAY CYCLE
Every 5 nights must hunt specific prey (roll d6):
1-2: Child  |  3-4: Warrior  |  5-6: Elder
Failure = Hunger +2 and Humanity check

Role: Judges of ancient oaths, death midwives, spirit speakers
[BEAST]: Ritual hunger, patient inevitability

=== TLAHUELPUCHI — Blood Shifters ===
Origin: Mexico (Tlaxcala region)
Based on: Witch-vampires who transform into animals

Disciplines: Nahualismo, Obfuscate, Auspex

NAHUALISMO (Beast Transformation):
● Animal senses — night vision, tracking scent
●● Turkey or dog form — perfect disguise
●●● Bat (flight) or flea (infiltration)

Weakness: FAMILY CURSE
Cannot kill or Embrace blood relatives — attempt = auto-Frenzy + Humanity −2
One living relative ALWAYS knows what you are

Role: Infiltrators, assassins, family hunters
[BEAST]: Patient stalker, intimate predator

=== PISHTACO — Fat Reapers ===
Origin: Andes (Peru, Bolivia)
Based on: White strangers who steal fat from indigenous people

Disciplines: Adipomancy, Fortitude, Dominate

ADIPOMANCY (Fat Magic):
● Sense "rich" victims — those full of life energy
●● Extract fat (feeding leaves withered corpse, −3 Hunger)
●●● Fat armor (+3 AC for scene) or reshape appearance

Weakness: COLONIAL CURSE
Always appear as white European regardless of origin
Cannot feed from Europeans — only indigenous/mestizo blood
In majority-European cities: permanent Hunger +1

Role: Shadow bankers, colonial predators, flesh merchants
[BEAST]: Cold extraction, business-like cruelty
```

### Asia

Ancient bloodlines with different mythologies. Not Caine's children?

```
=== JIANGSHI — Hopping Dead ===
Origin: China
Based on: Corpses animated by po soul, feeding on qi

Disciplines: Qi-Theft, Potence, Fortitude

QI-THEFT (Life Energy):
● Sense qi — see life force, health, power
●● Breathe qi — feed without biting (1 meter range)
●●● Qi strike — ignore armor, +2 Agg damage

Weakness: STRAIGHT LINES ONLY
Can only move by hopping in straight lines
Turns require full stop (lose action)
Running water = impassable barrier

TALISMAN: Paper seal on forehead controls Jiangshi
If removed: auto-Frenzy until replaced
Another vampire with your talisman can command you (Dominate DC)

Role: Bodyguards, enforcers, relentless pursuers
[BEAST]: Silent, mechanical, inevitable

=== VETALA — Corpse Riders ===
Origin: India
Based on: Spirits inhabiting dead bodies, knowing past/present/future

Disciplines: Trikala-Drishti, Obfuscate, Dominate

TRIKALA-DRISHTI (Three-Time Sight):
● See object's past (psychometry)
●● Detect lies automatically, read intentions
●●● See probable future (24 hours), question the dead

Weakness: BODY HOPPING
Must change bodies every 7 nights
Old body decays, must find fresh corpse
Without body = vulnerable spirit (can be banished)
Each body = completely different appearance

Role: Oracles, secret-keepers, advisors to princes
[BEAST]: Detached curiosity, collector of truths

=== PENANGGALAN — Flying Viscera ===
Origin: Southeast Asia (Malaysia, Philippines)
Based on: Head with dangling organs that hunts at night

Disciplines: Visceral-Detachment, Auspex, Obfuscate

VISCERAL-DETACHMENT (Head Separation):
● Partial — neck extends 3 meters
●● Full separation — head + organs fly independently
●●● Infiltration — squeeze through any gap, invisible while separated

Weakness: VULNERABLE BODY
Body without head = defenseless (0 AC, can't act)
If body destroyed = Final Death
Thorny plants (hawthorn, etc.) deal 1 Agg on contact with organs

FEEDING: Can ONLY feed from pregnant women or newborns
Other blood = half effect

Role: Elite assassins, terror weapons, impossible infiltrators
[BEAST]: Alien hunger, maternal obsession
```

### Japan

```
=== GAKI — Hungry Dead ===
Origin: Japan
Based on: Gaki/Preta — cursed spirits of insatiable hunger

Disciplines: Kigan (Hunger Channeling), Obfuscate, Celerity

KIGAN (Hunger Channeling):
● Feed on emotions (fear, grief) — −1 Hunger without blood
●● Hunger aura — mortals within 5m feel starving, weakened
●●● Consume spirit — destroy ghost/spirit, −3 Hunger

Weakness: BOTTOMLESS HUNGER
Hunger never reaches 0. Minimum Hunger = 1 always.
Feeding gives half normal reduction. Must feed twice as often.

Role: Outcasts, lurkers in forgotten places, temple haunters
[BEAST]: Endless craving. Not blood — everything. Never enough.

=== KUEI — Demon Returned ===
Origin: Japan/China
Based on: Kuei-jin — dead who clawed back from Yomi (hell)

Disciplines: Chi-Mastery, Potence, Auspex

CHI-MASTERY (Life/Death Balance):
● Sense chi flow — detect life, death, sickness
●● Channel chi — heal others (costs Hunger +2) or harm (drain life, d8)
●●● Balance disruption — target's body attacks itself (CON save or 3d6)

Weakness: YOMI TAINT
Already died once. Sunlight deals TRIPLE damage (not double).
Must perform daily meditation or +1 Hunger (demon inside stirs).

Role: Returned dead, spiritual warriors, bridge between worlds
[BEAST]: Demon from Yomi. Speaks in commands, not whispers.
```

### Africa

```
=== ADZE — Firefly Vampires ===
Origin: Ghana (Ewe people)
Based on: Adze — vampire that takes form of firefly

Disciplines: Insect-Form, Presence, Obfuscate

INSECT-FORM (Firefly Transformation):
● Glow — mesmerizing light, WIS DC 12 or fascinated 1 round
●● Full firefly form — tiny, flying, nearly undetectable
●●● Swarm — summon insects, obscure area, deal d6/round

Weakness: POSSESSION HUNGER
Must possess a mortal host to use physical disciplines.
In firefly form: immune to physical damage, but cannot feed or fight.
Caught in jar/container = trapped until released.

Role: Witch-doctors' servants, village terrors, possessing spirits
[BEAST]: Buzzing. Constant buzzing. And hunger between the notes.

=== ASANBOSAM — Iron-Toothed ===
Origin: Ghana/Ivory Coast (Ashanti people)
Based on: Asanbosam — tree-dwelling vampire with iron teeth and hooks

Disciplines: Potence, Animalism, Fortitude

Weakness: IRON BODY
Teeth and hook-claws are literal iron. Cannot pass through metal detectors.
Magnets cause pain (d4/round). Cannot enter buildings with iron thresholds.
+2 unarmed damage (iron bite). Climbing advantage (hook feet).

Role: Forest ambush predators, canopy dwellers, territorial guardians
[BEAST]: Patient. Waits in trees. Drops on prey. No words — just the crunch.

=== IMPUNDULU — Lightning Bird ===
Origin: South Africa (Xhosa, Zulu, Pondo)
Based on: Impundulu — vampiric lightning bird, familiar of witches

Disciplines: Storm-Call, Celerity, Presence

STORM-CALL (Lightning Command):
● Static charge — electronics malfunction, hair stands on end
●● Lightning strike — 3d6 electrical damage, single target
●●● Storm summon — weather changes, outdoor area becomes deadly

Weakness: WITCH-BOUND
Must serve a witch/sorcerer lineage. Cannot refuse direct commands from master.
If master dies: must find new master within 7 nights or +2 Hunger/night.
Passed down through family lines — same servitude, new face.

Role: Enforcers for magical families, storm bringers, reluctant servants
[BEAST]: Crackle of lightning. Obedience and rage in equal measure.
```

### Middle East

```
=== GHUL — Corpse Eaters ===
Origin: Arabian Peninsula
Based on: Ghul/Ghoul — desert shapeshifter that feeds on the dead

Disciplines: Shapeshifting, Obfuscate, Fortitude

SHAPESHIFTING (Desert Forms):
● Mimic last person eaten (face only)
●● Full body transformation into any human seen
●●● Hyena form — desert predator, pack caller

Weakness: CARRION HUNGER
Cannot feed from the living. Must feed from corpses or recently dead.
Fresh corpse (< 24h): −2 Hunger. Old corpse: −1 Hunger.
Living blood: causes vomiting, +1 Condition.

Role: Desert ambushers, graveyard lurkers, identity thieves
[BEAST]: Scavenger patience. "Wait for them to die. They always do."

=== STRIX — Screech Owls ===
Origin: Ancient Rome/Mediterranean
Based on: Strix — vampiric owl-spirits that possess corpses

Disciplines: Possession, Auspex, Animalism

POSSESSION (Body Theft):
● Sense empty vessels (corpses, torpored vampires, comatose mortals)
●● Possess fresh corpse (< 48h) — use as body until it rots
●●● Possess living mortal (WIS contested) or torpored vampire

Weakness: BODILESS
True form is incorporeal owl-spirit. Without host body: cannot interact physically.
Host bodies decay (mortals: d6 days, vampires: weeks).
Must constantly find new vessels. If exposed mid-possession: host may fight back.

Role: Ancient parasites, possessors, manipulators wearing stolen faces
[BEAST]: Not a voice — a screech. Owls in the walls. Watching.
```

### Eastern Europe

```
=== STRIGOI — The Original ===
Origin: Romania
Based on: Strigoi — restless dead who return to drain family

Disciplines: Dominate, Fortitude, Animalism

Weakness: FAMILY CURSE
Must return to birthplace every 7 nights or +1 Hunger.
Can only create childer from own living descendants.
Living relatives can sense Strigoi nearby (WIS DC 14).
Garlic causes actual pain (d4/round, not just folklore).

Role: Village terrors, family curses, ancestral nightmares
[BEAST]: "Come home. They're waiting. They don't know you're hungry."

=== VRYKOLAKAS — Plague Bearers ===
Origin: Greece
Based on: Vrykolakas — undead that spread plague by knocking on doors

Disciplines: Fortitude, Presence, Obfuscate

Weakness: THRESHOLD RULE
Must knock before entering any private dwelling. If no one answers: cannot enter.
If invited: +1 to all actions inside (gratitude fuels power).
Carries plague aura: mortals in close contact for 1h+ must CON save or sicken.

Role: Wandering plague, door-knockers, patient exterminators
[BEAST]: *knock knock knock* "Open. Please. I'm so cold."
```

### Oceania

```
=== TALAMAUR — Spirit Riders ===
Origin: Melanesia (Vanuatu, Banks Islands)
Based on: Talamaur — living vampires who send spirits to feed

Disciplines: Spirit-Riding, Auspex, Dominate

SPIRIT-RIDING (Astral Predation):
● Send spirit out while sleeping — scout, observe
●● Spirit feeds on sleeping mortals (−1 Hunger, victim: nightmares, −1 CON)
●●● Possess spirit of recently dead — interrogate or weaponize

Weakness: SLEEPING VULNERABILITY
Must send spirit out during sleep to feed. Body is defenseless while projecting.
If body is moved or harmed during projection: WIS DC 16 to return or become ghost.
Cannot feed while awake through normal means. Blood does nothing.

Role: Dream predators, spirit mediums, remote assassins
[BEAST]: Whispers from the astral. "They're sleeping. Go. Feed. They won't feel it."
```

### Scandinavia

```
=== DRAUGR — Barrow Dead ===
Origin: Norse/Scandinavian
Based on: Draugr — undead who guard their burial hoards

Disciplines: Potence, Fortitude, Obfuscate

Weakness: HOARD-BOUND
Must maintain a physical treasure hoard. Size determines power.
Hoard destroyed: all disciplines reduced by 1 level until rebuilt.
Cannot willingly move more than 1 mile from hoard without WIS DC 14/hour.
Immune to cold. Vulnerable to fire (×2 damage). Iron weapons bypass Fortitude.

Role: Treasure guardians, territorial undead, ancient warriors
[BEAST]: "MINE. This gold. This ground. This night. MINE."
```

---

## REGIONAL DIFFERENCES

Not mechanical bonuses — narrative context.

```
=== OLD WORLD (EUROPE) ===
Camarilla dominant. Traditions sacred.
Masquerade strictly enforced — digital age paranoia.
Elders entrenched. Change is glacial.
Boons are EVERYTHING. Debt = control.

=== NEW WORLD (AMERICAS) ===
Anarchs strong. Camarilla = islands in chaos.
Local clans don't recognize Traditions.
Territory = whoever can hold it.
Boons matter less. Reputation = action.

=== ASIA ===
Camarilla = foreign invaders.
Local clans predate European contact.
Different power structures (Ancestor councils, spirit courts).
European disciplines work... differently here.
```

---

## THE MASQUERADE (TRADITIONS)

```
THE SIX TRADITIONS (Camarilla Law):

1. THE MASQUERADE — Never reveal nature to mortals
2. THE DOMAIN — Prince rules city, grants territories
3. THE PROGENY — Must petition to Embrace
4. THE ACCOUNTING — Sire responsible for childe
5. HOSPITALITY — Present to Prince within 3 nights
6. DESTRUCTION — Only Prince authorizes killing Kindred

Breaking Traditions = Blood Hunt (legal execution by anyone)
```

---

## NIGHT POLITICS

```
CITY POSITIONS:

PRINCE — City ruler, absolute authority
SENESCHAL — Prince's right hand
PRIMOGEN — Council of clan elders
SHERIFF — Enforcer, investigator
KEEPER OF ELYSIUM — Neutral ground guardian
HARPY — Status arbiter, rumor master

ELYSIUM:
- Neutral zone (club, gallery, theater)
- Violence forbidden = Blood Hunt
- Politics, deals, intrigue happen here

STATUS:
Neonate: Few rights, many duties
Ancilla: Recognized, has influence
Elder: Power, paranoia, detached from time
```

---

## BOON SYSTEM (SIMPLIFIED)

```
BOONS — Kindred currency of favors

MINOR: Information, one night's shelter, introduction
MAJOR: Political support, territory rights, protection

Owed many boons = low status (debtor)
Being owed many = high status (influential)

CALLING IN: Must be proportional
REFUSING: Lose boon + enemy + status hit
TRADING: Major boons need witness (Harpy)
```

---

# PART V: BLOOD & BODY

---

## COMBAT COST

Combat is always expensive. This is by design.

```
- Using Disciplines in combat → +Hunger per use
- Taking damage → requires healing later → +Hunger
- Killing a mortal → Humanity check
- Killing a Kindred → Humanity check + political fallout
- Frenzy risk compounds (Hunger rises, Beast gets louder)
- Witnesses → +Heat

Combat is not a solution — it's a cost.
If it came to a fight, someone already lost.
```

---

## DAMAGE AND HEALING

```
DAMAGE TYPES:

SUPERFICIAL (/):
- Bullets, blades, fists
- Halved for vampires

AGGRAVATED (X):
- Fire, sunlight, claws, fangs
- NOT halved, heals LAST

HEALTH: 10 boxes
Track fills with / → converts to X

HEALING:
Superficial: 1 Hunger = heal 2 (instant)
Aggravated: 1 Hunger = heal 1 (once per night, requires rest)

OPTIONAL — FAST REGEN (use if Hunger pressure slows play):
Superficial damage heals naturally between scenes (no Hunger cost).
Aggravated healing remains: 1 Hunger = 1 Agg (1/night).
Use this only if players avoid action due to Hunger paralysis.

SUNLIGHT:
Indirect: 1 Agg/round
Weak (overcast): 2 Agg/round
Direct: 5 Agg/round

FIRE:
Triggers Terror Frenzy — MENTAL DC 12
Torch: 1 Agg | Bonfire: 2 Agg | Inferno: 5 Agg
```

---

## TORPOR

```
Death-like sleep. Not Final Death, but close.

ENTERING:
- All health = Aggravated
- Hunger 5 + no blood for week
- Staked (aware but paralyzed)
- Voluntary (survive centuries)

DURATION (by Generation):
13th: 1 week
12-11th: 1 month
10-9th: 1 year
8-7th: 10 years
6th−: 50+ years

WAKING:
Natural: Min duration + all Agg healed
Forced: Feed vampire directly, PHYSICAL DC (8 + months)
Danger: Fire/sun nearby, MENTAL DC 15, wake in Frenzy

In torpor: Helpless. Easy to stake/burn/diablerize.
```

---

## GENERATION

```
GENERATION — Blood potency (lower = stronger):

14-15th: Thin-bloods — weak, almost mortal
12-13th: Neonates — typical young vampires
10-11th: Ancilla — stronger, experienced
8-9th: Elders — powerful, dangerous
6-7th: Methuselahs — legends

BLOOD BONDS:
Drink vampire blood 3× = Bound
- Attraction and submission
- Hard to resist commands
- 1 year without = weakens

DIABLERIE:
Kill vampire and drink completely:
- Lower generation by 1
- Gain victim's power
- Visible in aura (black veins)
- Camarilla executes for this
- HUMANITY CHECK DC 16
```

---

## PREDATOR TYPES

How you hunt defines who you are.

```
ALLEYCAT — Violence
Roll: PHYSICAL DC 12 | Risk: +1 Heat per feed

SIREN — Seduction
Roll: SOCIAL DC 10 | Risk: Emotional entanglements

SANDMAN — Sleepers
Roll: MENTAL DC 12, PHYSICAL DC 10 | Risk: One victim per location

FARMER — Animals
Roll: PHYSICAL DC 8 | Risk: Never below Hunger 1

BAGGER — Medical
Roll: SOCIAL DC 12 (maintain supply) | Risk: No resonance, supply can be cut
```

---

## COTERIES

Group of vampires with shared purpose.

```
TYPES:
- Hunting Pack — Shared territory
- Regency Court — Serve powerful patron
- Information Network — Trade secrets
- Revolutionary Cell — Change status quo

COTERIE STATUS (0-5):
0: Unknown | 3: Respected | 5: Legendary

Status changes through actions, not time.
```

---

## TOUCHSTONES

Mortals who anchor Humanity. Lose them = lose yourself.

```
Each PC: 1-3 Touchstones

DEFINE:
- Who are they?
- Do they know what you are?
- What do they represent?
- Where do they live? (threat potential)

BENEFITS:
Visit (unharmed): +1 Willpower next session (max 4)
Protect from harm: possible Humanity +1 (see Humanity Rises)

DANGERS:
If threatened: Enemies have leverage
If dies: MENTAL DC 14 or −1 Humanity + Frenzy
If learns truth: Accept / Reject / Break
If YOU harm them: Humanity check DC 16

CONNECTION TO CURRENCIES:
- Touchstones are the ONLY reliable path to Humanity recovery
- Losing all Touchstones = Humanity can only fall
- Willpower bonus rewards maintaining mortal connections
- The game punishes isolation: no Touchstones = no safety net
```

---

# PART VI: GM TOOLS

---

## RANDOM TABLES

```
=== HUNT COMPLICATIONS (d6) ===
1: WITNESS — +1 Heat or deal with it
2: WRONG TARGET — Ghoul, hunter, or claimed herd
3: RESONANCE — Intense emotion, bonus but craving
4: POLICE — MENTAL DC 12 to escape clean
5: RIVAL — Another Kindred claims this territory
6: CLEAN — No complications

=== NIGHT EVENTS (d10) ===
1: Masquerade breach elsewhere — everyone nervous
2: Blood shortage — hospitals report low supplies
3: Primogen conflict — two clans feuding openly
4: Anarch activity — recruitment or violence
5: Boon called in — someone wants payment NOW
6: Unknown Kindred in city — protocol demands action
7: Sabbat scouts at city edges
8: Werewolf sighting near territory
9: Second Inquisition activity
10: Quiet night — what are they planning?

=== ELYSIUM EVENTS (d6) ===
1: Harpy destroys someone's reputation
2: Prince announces new edict
3: Whispers of diablerie or spies
4: Boon publicly called in
5: Important Kindred conspicuously absent
6: New arrival demands presentation
```

---

## NPC TEMPLATES

```
=== ELDER PRINCE (7th Gen) ===
PHYSICAL 14 | SOCIAL 18 | MENTAL 16
Disciplines: Dominate 3, Presence 3, Fortitude 3
Humanity: 4
"You have my attention. Sixty seconds."

=== SHERIFF (10th Gen) ===
PHYSICAL 16 | SOCIAL 12 | MENTAL 14
Disciplines: Potence 3, Celerity 2, Auspex 2
Humanity: 5
"I'm authorized to resolve this. Cooperate."

=== NEONATE ANARCH (12th Gen) ===
PHYSICAL 12 | SOCIAL 14 | MENTAL 10
Disciplines: Presence 2, Potence 1
Humanity: 7
"The Prince doesn't own this city!"

=== SABBAT PRIEST (11th Gen) ===
PHYSICAL 14 | SOCIAL 12 | MENTAL 14
Disciplines: Obtenebration 2, Potence 2, Fortitude 2
Path of Caine: 6
"The Antediluvians will burn. We'll light the fire."

=== JIANGSHI ENFORCER (11th Gen) ===
PHYSICAL 16 | SOCIAL 8 | MENTAL 12
Disciplines: Qi-Theft 2, Potence 2, Fortitude 2
Humanity: 5
[Silent. Points. Advances in straight line.]

=== VETALA ORACLE (9th Gen) ===
PHYSICAL 10 | SOCIAL 14 | MENTAL 18
Disciplines: Trikala-Drishti 3, Obfuscate 2, Dominate 2
Humanity: 6
"You want to know the future? It costs. Everything costs."
```

---

## GENERATORS

Tools for improvisation. Roll or choose.

### Mission Generator

```
=== MISSION TYPE (d10) ===
1: HUNT — Specific target must be fed upon or killed. Why them?
2: INVESTIGATE — Something happened. Find out what. Report to [patron].
3: RETRIEVE — Object/person needs extraction. Location guarded.
4: DELIVER — Message/item to someone who doesn't want it.
5: PROTECT — Keep someone alive through the night. They don't know why.
6: SABOTAGE — Damage enemy operation without being traced.
7: NEGOTIATE — Two parties need to talk. You're the neutral ground.
8: COVER-UP — Masquerade breach happened. Fix it before dawn.
9: ESCORT — Someone important moving through hostile territory.
10: INFILTRATE — Get inside [location/organization]. Get out with intel.

=== CLIENT/PATRON (d8) ===
1: Prince — Direct order. Refusal = disfavor.
2: Primogen — Clan business. Rewards loyalty.
3: Sheriff — Official Camarilla work. Legal cover.
4: Harpy — Wants leverage. Payment in secrets.
5: Anarch contact — Unofficial. Dangerous if discovered.
6: Independent elder — Resources but unclear agenda.
7: Mortal with knowledge — Knows too much. Useful or threat?
8: No patron — Coterie's own initiative. No backup.

=== COMPLICATION (d8) ===
1: Target is protected by someone powerful.
2: Time limit — must complete before dawn/event/arrival.
3: Rival coterie has same mission.
4: Mortal authorities involved (police, media).
5: Target knows you're coming.
6: Mission is a test/trap set by patron.
7: Innocent bystanders will suffer if you succeed.
8: Success creates new enemy.

=== REWARD (d6) ===
1: Boon (Minor or Major depending on difficulty)
2: Territory/feeding rights
3: Information (secret about enemy/city/elder)
4: Introduction to powerful Kindred
5: Debt forgiven
6: Nothing promised — but they'll "remember"
```

### Social Telegraph System

**Tells before betrayal, manipulation, or political attack.** GM drops hints before the hammer falls.

```
=== BETRAYAL TELLS (GM gives 2-3 before NPC betrays) ===

VERBAL:
- Unusual questions about your haven/allies/schedule
- Bringing up old debts or grievances "casually"
- Promising things without being asked
- Avoiding eye contact when lying (Auspex can catch)
- Speaking about you in third person to others present

BEHAVIORAL:
- Missing scheduled meetings, then overexplaining
- New "friends" appearing around them
- Sudden interest in your enemies
- Gifts without occasion
- Information they shouldn't have

POLITICAL:
- Other Kindred avoiding mentioning them to you
- Harpy changes tone when discussing them
- They stop defending you in Elysium
- Your boons to them remain uncalled (saving for something)

=== MANIPULATION TELLS (when NPC is working you) ===

FLATTERY PLAY:
- Excessive compliments on things you're insecure about
- "You're the only one who understands..."
- Comparing you favorably to your rivals

FEAR PLAY:
- Mentioning threats "casually" then changing subject
- "I heard something about you, but it's probably nothing"
- Warning you about enemies... that benefit them if you fight

DEBT PLAY:
- Doing unsolicited favors, then tracking them
- "Remember when I..." before asking for anything
- Making you feel you owe them without explicit boons

=== USING TELEGRAPHS ===

GM should:
1. Drop 2-3 tells across 1-2 sessions before major betrayal
2. Let player roll passive WIS/Auspex to notice (hidden DC)
3. If player acts on tells — reward with advantage
4. If player ignores tells — betrayal hits harder

Player can:
1. Call out tells in-character: "You've been asking a lot about my haven."
2. Set counter-traps based on recognized patterns
3. Use tells against NPCs — same rules apply both ways
```

### Prince Generator

```
=== PRINCE ARCHETYPE (d8) ===
1: THE TYRANT — Rules through fear. Paranoid. Executes for minor offenses.
2: THE DIPLOMAT — Balances factions. Owes everyone. Hates making enemies.
3: THE ANCIENT — Hasn't left haven in decades. Rules through Seneschal.
4: THE REFORMER — Wants to modernize. Elders hate them. Neonates love them.
5: THE PUPPET — Someone else pulls strings. Doesn't know or doesn't care.
6: THE WARRIOR — Took praxis by force. Respects strength. Despises politics.
7: THE MERCHANT — Everything is transaction. Loyal to highest bidder.
8: THE VISIONARY — Has a grand plan. City is experiment. Kindred are pieces.

=== PRINCE WEAKNESS (d6) ===
1: FEEDING RESTRICTION — Can only feed on [specific type]. Vulnerable.
2: BLOOD BOND — Bound to someone. Who? They don't know you know.
3: DIABLERIE STAIN — Committed it. Tremere can see. Blackmail material.
4: HUMANITY CRISIS — At 3 or lower. Frenzy risk in court. Hides it poorly.
5: BECKONING — Feels the call East. Fighting it. Losing.
6: MORTAL ATTACHMENT — Touchstone in danger. Will burn city to protect them.

=== PRINCE AGENDA (d6) ===
1: PURGE — Wants to eliminate [faction/clan]. Needs deniable assets.
2: EXPANSION — Eyes neighboring city. Needs scouts, diplomats, soldiers.
3: SURVIVAL — Sabbat/Anarchs/Inquisition closing in. Desperate.
4: LEGACY — Wants to Embrace heir. Primogen blocking. Needs leverage.
5: REVENGE — Someone wronged them centuries ago. Finally found them.
6: TRANSCENDENCE — Seeking Golconda or lower Generation. Any means necessary.
```

### Primogen Conflict Generator

```
=== CONFLICT TYPE (d8) ===
1: TERRITORY — Two clans claim same feeding ground. Blood will flow.
2: BLOOD DEBT — Ancient boon unpaid. Debtor says it's forgiven. Creditor disagrees.
3: DIABLERIE ACCUSATION — One Primogen accuses another's childe. Proof thin.
4: EMBRACE RIGHTS — Both want to Embrace same mortal. Prince must choose.
5: MORTAL BUSINESS — Clan interests clash in kine world. Masquerade at risk.
6: OLD GRUDGE — Something happened in 1800s. No one remembers what. Hate remains.
7: IDEOLOGY — Tradition vs Progress. Camarilla loyalist vs Anarch sympathizer.
8: SUCCESSION — Prince weakening. Two Primogen positioning. Cold war heating up.

=== STAKES (d6) ===
1: Pride — Loser loses face in Elysium. Status −1.
2: Territory — Loser cedes domain. Feeding rights lost.
3: Blood — Someone will be destroyed. Legally or not.
4: Clan — Entire clan's position in city at risk.
5: Masquerade — Conflict threatens to spill into mortal world.
6: Prince's Favor — Winner becomes new Seneschal or Sheriff.

=== COMPLICATION (d6) ===
1: Third party benefits from conflict. Who?
2: Evidence is fabricated. By whom?
3: Mortal authorities sniffing around.
4: Anarchs offering support to one side.
5: Sabbat agent stirring the pot.
6: Ancient prophecy or omen involved.
```

### City Domain Generator

```
=== CITY SIZE (d6) ===
1-2: Small — 5-10 Kindred. Prince + 3 Primogen. Everyone knows everyone.
3-4: Medium — 15-25 Kindred. Full court. Room for newcomers.
5-6: Large — 30-50 Kindred. Multiple factions. Easy to hide. Hard to rise.

=== POWER STRUCTURE (d6) ===
1: IRON FIST — Prince controls everything. Primogen advisory only.
2: COUNCIL RULE — Primogen hold real power. Prince is figurehead.
3: BALANCED — Tense equilibrium. One wrong move = civil war.
4: FRACTURED — No clear authority. Barons, Princes, Bishops all claim pieces.
5: OCCUPIED — Sabbat or Anarchs control half. War ongoing.
6: HIDDEN — No official Camarilla presence. Independents and exiles only.

=== ELYSIUM (d8) ===
1: Art museum — Toreador territory. Neutral by tradition.
2: Opera house — Old money. Formal dress required.
3: Nightclub — Modern. Loud. Easy to hide conversations.
4: Cemetery — Morbid. Nosferatu maintain it. Underground tunnels.
5: University library — Tremere influenced. Knowledge trades here.
6: Abandoned church — Ironic. Gangrel and outcasts welcome.
7: Corporate penthouse — Ventrue domain. Business dress. Power plays.
8: Underground speakeasy — Secret location. Changes monthly. Trust required.

=== CITY THREAT (d8) ===
1: SABBAT SCOUTS — Testing defenses. Siege coming?
2: SECOND INQUISITION — Government hunters. Someone talked.
3: LUPINE TERRITORY — Werewolves nearby. Don't cross the line.
4: THIN-BLOOD EXPLOSION — Too many. Masquerade crumbling.
5: BECKONING — Elders leaving. Power vacuum forming.
6: ANARCH UPRISING — Neonates organizing. Prince losing grip.
7: INDEPENDENT POWER — Giovanni/Setites/Banu Haqim moving in.
8: ANCIENT AWAKENING — Something old stirs beneath the city.

=== DISTRICT FLAVOR (d10) ===
Roll for each notable district:
1: Financial — Ventrue territory. Glass towers. Dead at night.
2: University — Young blood. Thin-bloods. Tremere watchers.
3: Industrial — Nosferatu warrens. No one asks questions.
4: Entertainment — Toreador hunting ground. Easy prey.
5: Old Town — History. Haunted. Elders remember when...
6: Waterfront — Smuggling. Giovanni interests. Bodies disappear.
7: Suburbs — Cleavers hunt here. Families. Dangerous secrets.
8: Projects — Brujah territory. Mortal gangs. Violence.
9: Airport — Neutral zone. Visitors present here first.
10: Cemetery District — Thin places. Ghosts. Necromancers.
```

### NPC Kindred Generator

```
=== GENERATION (d10) ===
1-2: 13th (Neonate) — Weak but hungry. Something to prove.
3-5: 12th (Neonate) — Standard young vampire.
6-7: 11th (Ancilla) — Century or two. Established.
8-9: 10th (Ancilla) — Powerful. Has enemies and allies.
10: 9th (Elder) — Dangerous. Ancient agenda.

=== CLAN (d12) — Camarilla Focus ===
1-2: Ventrue | 3-4: Toreador | 5-6: Brujah | 7-8: Nosferatu
9-10: Tremere | 11: Malkavian | 12: Gangrel

=== ROLE IN CITY (d10) ===
1: Primogen's enforcer — Does dirty work. Knows secrets.
2: Harpy's spy — Collects gossip. Sells to highest bidder.
3: Sheriff's deputy — Law enforcement. By the book or corrupt?
4: Anarch sympathizer — Camarilla member, Anarch heart.
5: Elder's childe — Protected. Arrogant. Untouchable?
6: Newcomer — Just arrived. Seeking patron. Desperate.
7: Merchant — Trades in blood, information, or mortal goods.
8: Scholar — Researches Kindred history. Knows too much.
9: Hedonist — Only cares about pleasure. Useful distraction.
10: Plotter — Wants to be Prince. Building power base.

=== SECRET (d12) ===
1: Committed diablerie. Hides the stain.
2: Blood bound to enemy faction.
3: Embraced without permission. Sire covered it up.
4: Actually Sabbat spy (Antitribu).
5: Knows Prince's weakness. Waiting to use it.
6: Murdered their own sire. No one suspects.
7: Thin-blood passing as normal. Terror of discovery.
8: Working for Second Inquisition. Betraying own kind.
9: Searching for Golconda. Will sacrifice others for it.
10: Infernalist. Made a deal. Price coming due.
11: Has prophetic visions. They're getting worse.
12: No secret. What you see is what you get. (Rare.)

=== BOON STATUS (d6) ===
1: Owes Major boon to Prince. Trapped.
2: Owed Minor boons by 3+ Kindred. Influential.
3: Clean slate. New to the game.
4: Owes Blood boon. Essentially a slave.
5: Complex web — owes some, owed by others.
6: Refuses boon system. Anarch philosophy. Pariah.

=== HUMANITY CLOCK (track for important NPCs) ===
Use Humanity thresholds from Part I.
Track direction: is this NPC rising or falling?
At Humanity 3: NPC becomes erratic, dangerous, unreliable
At Humanity 1: NPC becomes monster, potential antagonist
At Humanity 0: Wight — mindless predator, must be destroyed
```

### Political Situation Generator

```
=== CURRENT CRISIS (d10) ===
1: SUCCESSION — Prince torpored/destroyed. Who takes over?
2: TRIAL — Prominent Kindred accused of breaking Tradition. Evidence shaky.
3: SIEGE — External threat (Sabbat/Lupines/Inquisition) at the gates.
4: SCHISM — Half the Primogen want to join Anarchs. Other half want blood.
5: VISITOR — Ancient elder passing through. Everyone performing.
6: SHORTAGE — Blood running low. Hunting becoming dangerous.
7: EXPOSURE — Major Masquerade breach. Covering up or doubling down?
8: BETRAYAL — Trusted Kindred revealed as traitor. Who else is compromised?
9: PROPHECY — Malkavian had vision. Gehenna sign? Mass hysteria.
10: OPPORTUNITY — Neighboring city fell. Land grab or trap?

=== WHO BENEFITS (d6) ===
1: Prince — Crisis strengthens their position.
2: Specific Primogen — Roll clan or choose.
3: Anarchs — Chaos helps recruitment.
4: Sabbat — Watching, waiting, ready.
5: Independents — Profit from instability.
6: No one — Everyone loses. That's the point.

=== TIMELINE (d6) ===
1: IMMEDIATE — Resolve tonight or blood flows.
2: DAYS — 2-3 nights to act before escalation.
3: WEEKS — Slow burn. Political maneuvering.
4: MONTHS — Long game. Gather allies and information.
5: VARIABLE — Depends on player actions.
6: TICKING CLOCK — Specific deadline (Elysium gathering, mortal event, lunar phase).
```

### Coterie Generator

```
=== COTERIE TYPE (d6) ===
1: HUNTING PACK — Shared territory. Survival focus.
2: POLITICAL BLOC — Advancing shared agenda in court.
3: INVESTIGATION UNIT — Sheriff's deputies or independent problem-solvers.
4: REVOLUTIONARY CELL — Want to change the status quo.
5: BUSINESS VENTURE — Mortal front company. Money and influence.
6: FOUND FAMILY — No agenda. Just surviving together.

=== INTERNAL TENSION (d6) ===
1: Two members have history. Bad blood. Unresolved.
2: One member is spy/traitor. Whose?
3: Competing for same goal (love interest, position, territory).
4: Ideological split — Camarilla loyalist vs Anarch-curious.
5: Sire of one member wants them back. Coterie in the way.
6: Blood bond forming between two members. Dangerous.

=== PATRON/ENEMY (d6) ===
1: Primogen — Useful but demanding. Favors have price.
2: Sheriff — Protection but obligations. Dirty work expected.
3: Anarch Baron — Freedom but danger. Marked by Camarilla.
4: Independent elder — Resources but mysterious agenda.
5: No patron — Independent. Vulnerable but free.
6: Multiple patrons — Playing sides. Dangerous game.

=== COTERIE RESOURCE (d6) ===
1: Haven — Secure location. Shared sleeping space.
2: Herd — Reliable feeding. Protected mortals.
3: Influence — Mortal contacts. Police, media, business.
4: Arsenal — Weapons cache. For emergencies.
5: Vehicle — Mobility. Escape plan.
6: Information — Spy network. Knows city secrets.
```

### Touchstone Generator

```
=== RELATIONSHIP (d8) ===
1: Family — Sibling, parent, child (from mortal life).
2: Old Friend — Knew you before. Thinks you moved away.
3: Lover — Mortal partner. Doesn't know the truth.
4: Neighbor — Mundane connection. Reminds you of normalcy.
5: Caretaker — Nurse, therapist, priest. You visit them.
6: Innocent — Child, student, someone pure. Must protect.
7: Mirror — Someone living the life you lost. Envy and love.
8: Savior — They helped you once. You owe them everything.

=== WHY THEY MATTER (d6) ===
1: Last link to humanity. Without them, nothing left.
2: They see the good in you. Makes you believe it.
3: Remind you who you were before the Embrace.
4: Only one who knows (or suspects) and doesn't run.
5: Represent what you're fighting to protect.
6: Their happiness proves the world isn't all monsters.

=== CURRENT THREAT (d6) ===
1: Terminal illness. Clock ticking.
2: Financial ruin. Desperate, making bad choices.
3: Dangerous relationship. Abusive partner, bad friends.
4: Suspects the truth. Investigating you.
5: Caught attention of another Kindred. Being groomed.
6: No threat yet. That's about to change.
```

---

# PART VII: REFERENCE

---

## QUICK REFERENCE

```
THREE CURRENCIES:
HUNGER    (0-5) → how close is the Beast
HUMANITY  (0-10) → who are you becoming
WILLPOWER (3) → can you hold on

PUSH:
HUNGER:   +1d6, +1 Hunger — body pays
HUMANITY: +1d4, check DC 12 — soul pays

HUNGER: 0 sated → 3 Beast whispers → 4 Frenzy on fail → 5 Frenzy on stress
HUMANITY: 7 start → 5 cold → 3 monster → 0 lost
FRENZY: d20 + MENTAL − Hunger vs DC (embedded in Hunger 4+)
DISCIPLINE: Hunger +1 per use. 3+/night without feeding = +2 each.
HEALING: Superficial 1H=2 | Aggravated 1H=1 (1/night)
HEAT: 0 clean → 3 Sheriff → 5 Inquisition
NIGHT: DUSK → HUNT → AFFAIRS → DAWN
WILLPOWER: reroll | +2 | resist Frenzy | resist Beast | composure
```

---

## GM CHECKLIST

```
[ ] Night phase clear?
[ ] Hunger tracked? (rises every night, every Discipline, every heal)
[ ] Beast Voice at appropriate intensity? (Hunger × Humanity table)
[ ] Frenzy checked at Hunger 4+?
[ ] Humanity check for transgressions? (one per scene, worst)
[ ] Heat consequences at 3+?
[ ] Clocks ticking?
[ ] Touchstones in danger?
[ ] Boons being tracked?
[ ] Willpower spent wisely? (player's limited resource)
[ ] Push offered when stakes are high?
```

---

*The night is dark, the Beast is hungry, the Masquerade is crumbling.*
