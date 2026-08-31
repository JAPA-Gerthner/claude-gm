# DARK SOULS

Undead curse, death loop, pattern mastery. For: brutal boss fights, cryptic lore, earned victories.

> **LANGUAGE:** Session in **Russian**. Stored in English for token efficiency.

---

## SETTING OVERVIEW

In the beginning: the Age of Ancients. Grey fog, stone, Everlasting Dragons circling without purpose. Nothing changed. Nothing ended.

Then fire appeared — the First Flame. From it: Disparity (light/dark, life/death) and four Lord Souls:
- **Gwyn, Lord of Sunlight** — lightning, order, civilization
- **Nito, First of the Dead** — disease, death
- **Witch of Izalith** — life-flames, chaos
- **Furtive Pygmy** — the Dark Soul, splintered into humanity

The Lords waged war on dragons. Won. Built kingdoms. But fire fades.

**The Undead Curse:** When fire weakens, the Dark Soul fragments surface as the Darksign — branding humans Undead. They cannot die permanently. Each death erodes memory, will, self. Eventually: Hollow.

**The Cycle:** Link the Fire (sacrifice yourself to extend the age) or let it fade (Age of Dark — humanity's birthright or catastrophe). Neither ending resolves anything. The cycle is the point.

**The Cycle:** Every kingdom repeats the pattern. Fire fades, Undead rise, someone links or doesn't. Names change. The structure doesn't. Lordran, Drangleic, Lothric — all the same story, different actors.

**Your World:** This ruleset supports ANY cycle. Generate your own kingdom, your own Lords, your own path. The fire always fades. What you do about it is the game.

---

## CORE OVERRIDES

`gm-skill.md` remains active except for the explicit replacements/disable below.
All core stat thresholds, Heroism, margin interpretation, clocks, option formatting,
CHARACTER MECHANICS SYNC, and passive abilities still apply.

- `REPLACES: [CORE MAGIC]` — use this ruleset's **MAGIC SYSTEMS**: Attunement Slots + Dark Souls cooldowns. Core free-casting/circle rules do not stack with them.
- `REPLACES: [CORE REST]` — Bonfire Rest is the only safe rest. There are no Short Rests or Hit Dice healing.
- `DISABLES: [EXHAUSTION]` — Hollowing is the setting's long-term attrition track.
- `REPLACES: [CHAPTER END LEVEL UP]` — chapter endings do not grant the core automatic Level +1 / Choose 2 package. Advancement uses **Souls Leveling** at Bonfires. Chapter-end ally fates, path choice, recap, and full character-sheet update still apply.
- `REPLACES: [CORE ARMOR AC]` — use the **Armor & Poise** AC values in this ruleset. Shields do not add the core +2 AC; they enable the Dark Souls Block reaction below.
- `REPLACES: [CORE TURN STRUCTURE / INITIATIVE IN BOSS ENCOUNTERS]` — boss fights use **Boss Momentum**: no initiative roll, one player Main Action per exchange, and one Reaction to each telegraphed boss strike. Core initiative and the normal one-Reaction-per-round limit still apply in non-boss combat.

**Death integration:** The core death-save procedure remains active unless a core ability changes it. When the cursed player character would actually die, trigger **Death Loop** instead of permanent character loss unless a specific lore effect explicitly severs or bypasses the Undead Curse.

---

## KINGDOM GENERATOR

Every cycle has a kingdom. Roll or choose.

### Kingdom Name (d12 + d12)

**First part (d12):**
| d12 | Prefix |
|-----|--------|
| 1 | Ash- |
| 2 | Iron- |
| 3 | Frost- |
| 4 | Deep- |
| 5 | Pale- |
| 6 | Ember- |
| 7 | Stone- |
| 8 | Hollow- |
| 9 | Sun- |
| 10 | Dark- |
| 11 | Blood- |
| 12 | Silent- |

**Second part (d12):**
| d12 | Suffix |
|-----|--------|
| 1 | -heim |
| 2 | -vale |
| 3 | -reach |
| 4 | -haven |
| 5 | -fall |
| 6 | -keep |
| 7 | -mire |
| 8 | -throne |
| 9 | -gate |
| 10 | -hollow |
| 11 | -watch |
| 12 | -rest |

### Cycle State (d6)

| d6 | State | Description |
|----|-------|-------------|
| 1 | **Kindled** | Fire recently linked. World bright, enemies weak, time short before fade. |
| 2 | **Fading** | Fire weakening. Undead appear. Lords grow desperate. |
| 3 | **Twilight** | Fire nearly dead. Hollows everywhere. Last attempts to link. |
| 4 | **Dark** | Fire out. Age of Dark begun. Humanity ascendant or monstrous. |
| 5 | **Convergence** | Time broken. Multiple ages overlap. Anachronisms everywhere. |
| 6 | **Rekindling** | New fire found. Race to claim it. Old powers stir. |

### The Lords (roll 4)

Every cycle has those who claimed fragments of the First Flame.

| d10 | Lord Archetype | Domain |
|-----|----------------|--------|
| 1 | **The Conqueror** | War, conquest, lightning |
| 2 | **The Gravewarden** | Death, disease, tombs |
| 3 | **The Witch** | Fire, chaos, transformation |
| 4 | **The Pygmy** | Dark, humanity, the abyss |
| 5 | **The Scholar** | Sorcery, crystals, knowledge |
| 6 | **The Beast** | Dragons, scales, immortality |
| 7 | **The Saint** | Miracles, healing, deception |
| 8 | **The Blacksmith** | Weapons, titanite, creation |
| 9 | **The Silent** | Shadows, assassination, forgotten |
| 10 | **The Mad** | Chaos, mutation, no pattern |

### Kingdom Feature (d8)

| d8 | Feature |
|----|---------|
| 1 | Built on ruins of previous cycle — old architecture visible |
| 2 | Single massive structure (castle, cathedral, tower) |
| 3 | Scattered settlements connected by dangerous roads |
| 4 | Underground — surface is ash/poison/frozen |
| 5 | Vertical — built up cliffs, elevators, ladders |
| 6 | Flooded — swamps, sunken cities, boats |
| 7 | Frozen — endless winter, fire precious |
| 8 | Burning — lava flows, ash storms, heat kills |

---

## REGION GENERATOR

### Region Type (d10)

| d10 | Type | Enemies | Hazard |
|-----|------|---------|--------|
| 1 | **Ruined City** | Hollows, dogs, thieves | Ambushes, collapsing floors |
| 2 | **Fortress** | Knights, archers, sentinels | Murder holes, patrols |
| 3 | **Crypt** | Skeletons, necromancers, wraiths | Darkness, curse, narrow |
| 4 | **Swamp** | Slugs, leeches, bloated | Poison, slow movement |
| 5 | **Cathedral** | Clerics (hostile), gargoyles | Elevation, chandeliers |
| 6 | **Forest** | Hunters, beasts, mushrooms | Ambush, fog, getting lost |
| 7 | **Volcano** | Demons, chaos creatures | Lava, heat damage |
| 8 | **Frozen Waste** | Frost knights, wolves | Cold damage, ice floors |
| 9 | **Abyss-touched** | Darkwraiths, humanity sprites | Corruption, madness |
| 10 | **Archives** | Crystal golems, scholars | Traps, curses, puzzles |

### Region Boss (roll separately)

See BOSS GENERATOR below.

### Shortcut Pattern (d6)

| d6 | Shortcut |
|----|----------|
| 1 | Elevator from end to start |
| 2 | Unlockable door near bonfire |
| 3 | Ladder down from midpoint |
| 4 | Breakable wall revealing path |
| 5 | Key from mini-boss opens gate |
| 6 | Illusory wall (WIS DC 14 to find) |

---

## CORE MECHANICS

### Souls — Dual Currency

Souls = XP + money simultaneously. One pool for both.

```
EARNING SOULS:
  Hollow enemy:     100–300
  Elite enemy:      500–1,500
  Mini-boss:        2,000–5,000
  Major boss:       10,000–50,000
  Discovery:        200–2,000

SPENDING SOULS:
  Consumables:      500–2,000
  Standard weapon:  2,000–5,000
  Quality weapon:   6,000–15,000
  Level up:         See LEVELING table
```

Track as single integer: `[SOULS: 4,250]`

**Session Example:** Clearing a starting region typically yields 3,000–5,000 Souls. Enough to level twice at low level, OR buy basic gear, but not both. The tension is intentional.

### Death Loop

On death:
1. Wake at last Bonfire with 0 Souls
2. All Souls drop at death location as **Soul Echo**
3. If Human, lose Human form and gain 1 Hollow stack; if already not Human, gain 1 additional Hollow stack
4. World persists — doors open, shortcuts unlocked, enemies respawn

**Soul Echo Recovery:**
- Reach death location, interact (trivial if area clear)
- If enemies present: retrieve as combat action [DEX DC 12]
- Second death before retrieval: Echo PERMANENTLY LOST

### Hollowing

```
HOLLOW TRACK:
  Human   ○○○○  — full benefits
  Undead  ●○○○  — -1 CHA
  Hollow  ●●○○  — -2 CHA, -1 WIS
  Deep    ●●●○  — -2 CHA, -2 WIS, -1 INT
  Lost    ●●●●  — NPC control, character gone

GAINING STACKS:
- Death → +1 stack. If Human, death first removes Human form, then applies the stack.
- Curse attacks, dark environments → +1 stack (GM call)

REMOVING STACKS:
- Spend 1 Humanity → remove 1 stack
- Powerful NPC blessing → remove all
```

### Humanity / Ember

Consumable resource. Count: `[Humanity: X]`

**Gaining:** Boss kills (+1), NPC quests (+1), rare drops, covenant offerings

**Human Form Benefits:**
- +1 to all CHA rolls
- Can kindle Bonfires
- Can summon phantom allies
- Can be invaded

**Kindling:** Spend 1 Humanity at Bonfire → +5 Estus charges (permanent for that fire)

---

## STATS & LEVELING

### Stat Mapping

```
DS → GM-SKILL:
  VIT      → CON  (HP = CON×5)
  END      → Vigor system (Vigor max = STR + DEX + CON)
  STR      → STR  (melee scaling, heavy weapons)
  DEX      → DEX  (fast weapons, ranged, cast speed)
  INT      → INT  (sorceries, lore, traps)
  FTH      → WIS  (miracles, divine insight, curse resist)

Mental reserve is represented by Resolve (Resolve max = INT + WIS + CHA).
```

### Starting Classes

| Class | STR | DEX | CON | INT | WIS | CHA | HP | Vigor | Resolve |
|-------|-----|-----|-----|-----|-----|-----|----|-------|---------|
| Knight | 3 | 2 | 3 | 1 | 1 | 1 | 15 | 8 | 3 |
| Pyromancer | 2 | 2 | 2 | 2 | 1 | 2 | 10 | 6 | 5 |
| Sorcerer | 1 | 1 | 2 | 4 | 2 | 1 | 10 | 4 | 7 |
| Cleric | 2 | 1 | 2 | 1 | 4 | 1 | 10 | 5 | 6 |
| Wanderer | 1 | 3 | 2 | 1 | 2 | 2 | 10 | 6 | 5 |
| Deprived | 1 | 1 | 1 | 1 | 1 | 1 | 5 | 3 | 3 |

### Leveling (Bonfire Only)

| Level | Souls Cost |
|-------|------------|
| 1–5 | 1,000 |
| 6–10 | 2,500 |
| 11–15 | 5,000 |
| 16–20 | 10,000 |
| 21–30 | 20,000 |
| 31+ | 40,000 |

Each Souls level: +1 to any stat. This is the campaign's only automatic level-up reward.
After every increase, immediately run core **CHARACTER MECHANICS SYNC**: recalculate Vigor/Resolve maxima, check 4/6/8/10 thresholds, reveal newly unlocked abilities, and apply them before play continues.

---

## VIGOR & RESOLVE

Two reserves let the player deliberately invest in important rolls without changing the core action economy.
They never grant extra actions. Abilities such as core **DOUBLE TAKE** remain the source of additional actions.

```
VIGOR MAX   = STR + DEX + CON
RESOLVE MAX = INT + WIS + CHA
```

- **Vigor** fuels physical effort: STR, DEX, and CON rolls.
- **Resolve** fuels mental and social effort: INT, WIS, and CHA rolls.
- Both pools start full after resting at a Bonfire.
- At the start of each player turn/exchange, recover **+1 Vigor and +1 Resolve**, up to maximum.
- Outside combat, each resolved player option counts as one exchange for recovery.
- Stat increases immediately recalculate the relevant maximum; current points do not increase unless a rule restores them.

### Push a Roll

Before a roll, the player may append `(+N)` to the chosen option/action.

Example:
`7 (+3)`

If option 7 is `[CHA 14] ...`, spend 3 Resolve and add **+3** to that CHA roll.
If it is `[DEX 14] ...`, spend 3 Vigor and add **+3** to that DEX roll.

Rules:
- `(+N)` may be any value up to the current relevant pool. There is no fixed Push cap.
- The stat **actually rolled** determines which pool is spent after substitutions such as CUNNING INSIGHT. The player never needs to name the pool.
- A Push modifies one stat-based d20 roll: checks, attacks, saves, or reactions. It never modifies DC, damage dice, quality rolls, d30 Bargain rolls, ANNIHILATION checks, or other flat/random rolls.
- Declared points are spent before that roll and remain spent regardless of outcome.
- `[-]` actions cannot be Pushed because they have no roll.
- A multi-stage action is Pushed per stage. Write investments in stage order: `[CHA/WIS 14] (+3/+2)` spends 3 Resolve on CHA and 2 Resolve on WIS. `[DEX/INT 14] (+2/+3)` spends 2 Vigor, then 3 Resolve.
- If a chain shows only one value, such as `(+3)`, it applies to the **first roll only**.

**Display:** `Vigor: X/Y | Resolve: X/Y`

---

## COMBAT

### Actions

**Light Attack:** Use the core attack roll (`d20 + STR/DEX vs AC`). On a damaging hit, damage is weapon die + the same scaling stat. Fast, no penalty.

**Heavy Attack:** Use the core attack roll with **-2 accuracy**. On a damaging hit, roll the weapon die twice: take higher (1H) or add both (2H), then add the scaling stat. Deals +2 additional Poise Damage. The attack roll may be Pushed with Vigor.

**Dodge Roll:** Reaction. Against a boss telegraph, make a DEX check against its situational DC. Against a normal enemy attack that already hit AC, make the DEX check against the enemy's **total attack result** as DC. Success avoids that strike; Partial takes half damage; Fail takes full damage. The check may be Pushed with Vigor.
- Light burden: +2 to the DEX check
- Medium burden: standard
- Heavy burden: -1 to the DEX check
- Fat burden: -2 to the DEX check

Burden is determined by equipped armor tier, not by a separate percentage calculation. Ordinary weapons are abstracted into that tier; exceptionally heavy gear can shift burden one tier heavier when explicitly stated.

**Block:** Reaction, shield required. Against a boss telegraph, make a CON check against its situational DC. Against a normal enemy attack that already hit AC, use the enemy's **total attack result** as DC. Success reduces damage by the shield's Block %, Partial reduces damage by half that %, Fail takes full damage. The check may be Pushed with Vigor. Stability is used for guard/Poise effects.

**Parry & Riposte:** Reaction before a parryable melee attack. Against a boss telegraph, roll DEX against its situational DC; against a normal enemy attack that hit AC, use the enemy's **total attack result** as DC. The check may be Pushed with Vigor.
- Crit (+10): Perfect parry, Riposte deals ×2 max damage
- Success (+5): attack nullified, enemy prone, free Riposte (max damage)
- Partial (0-4): Deflected — take half damage, no Riposte
- Fail (-1 to -5): Mistimed — take full damage
- Crit Fail (-6): Weapon knocked aside, enemy gets free attack
- Cannot parry heavy attacks or large bosses unless their move explicitly says parryable

**Backstab:** Move behind unaware/guard-broken target. Full action. 2× max weapon damage + STR. CON DC 15 or Staggered 1 round.

### Weapon Table

| Category | Damage | Scale | Properties |
|----------|--------|-------|------------|
| Dagger | d4 | DEX | +2 parry, light |
| Straight Sword | d6 | STR/DEX | Balanced |
| Curved Sword | d6 | DEX | +1 attack, Bleed +5 buildup |
| Katana | d6 | DEX | Bleed +5 buildup, reach, fragile (break on nat 1) |
| Greatsword | 2d6 | STR | +2 Poise Damage, two-hand |
| Ultra Greatsword | 2d8 | STR | +4 Poise Damage, must two-hand, -1 attack |
| Axe | d8 | STR | +2 vs shields |
| Greataxe | 2d6 | STR | +3 Poise Damage, cleave |
| Spear | d6 | STR/DEX | Reach, attack while blocking |
| Halberd | d10 | STR | Reach, sweep (DEX DC 13 or prone) |
| Hammer | d6 | STR | +2 Poise Damage, +d4 vs armor |
| Great Hammer | 2d8 | STR | +5 Poise Damage, slow (DIS if moved) |
| Rapier | d6 | DEX | Crit on 19-20, ×3 on nat 20 |
| Crossbow | d8 | DEX | Ranged 60/120, reload = action |

### Armor & Poise

This table **replaces core armor AC**. AC is an absolute value/formula, not a bonus to core armor.

| Tier | Typical Weight | AC | Poise | Burden |
|------|----------------|----|-------|--------|
| Unarmored | 0 | 10 + DEX | 0 | Light |
| Light | 1-8 | 11 + DEX | 1 | Light |
| Medium | 9-20 | 13 + DEX (max +2) | 3 | Medium |
| Heavy | 21-35 | 16 | 6 | Heavy |
| Giant | 36+ | 18 | 8 | Fat |

**Burden:** Use the Burden column for Dodge Roll modifiers. Do not calculate a separate percentage load. If a unique item explicitly changes burden, shift the category as stated.

**Poise Damage:**
- Every damaging melee hit deals **1 base Poise Damage**.
- A weapon property such as `+3 Poise Damage` adds to that base.
- Heavy Attack adds another **+2 Poise Damage** on a damaging hit.
- Track Poise Damage taken during the current target turn/exchange. When accumulated Poise Damage ≥ Poise, the target is **Staggered** and accumulated Poise Damage resets to 0.
- If the threshold is not reached, accumulated Poise Damage resets to 0 at the start of that target's next turn/exchange.
- On a successful Block, reduce incoming Poise Damage by shield Stability (minimum 0). On a Partial Block, reduce it by half Stability, rounded down.
- A target with Poise 0 is Staggered by any damaging melee hit unless an effect says otherwise.
- NPCs use the Poise of their visible armor tier unless their stat block overrides it. Boss Poise comes from the Boss Scale table.

### Shields

| Type | Stability | Block % | Special |
|------|-----------|---------|---------|
| Small | 2 | 70% | +1 parry |
| Medium | 4 | 85% | Standard |
| Greatshield | 7 | 100% | No Vigor recovery while actively guarding |
| Buckler | 1 | 60% | +2 parry |

---

## WEAPON UPGRADES

Weapons improve through Titanite reinforcement at any Blacksmith.

### Reinforcement Table

| Level | Material | Damage Bonus |
|-------|----------|--------------|
| +1 to +3 | Titanite Shard ×2 each | +1 per level |
| +4 to +6 | Large Titanite Shard ×2 | +1 per level |
| +7 to +9 | Titanite Chunk ×2 | +1 per level |
| +10 | Titanite Slab ×1 | +1 (max standard) |

**Example:** Longsword base d6 → +5 Longsword = d6+5 damage

### Infusion Paths

At +5, weapons can be infused (resets to +0 of new path):

| Path | Scaling | Effect | Material |
|------|---------|--------|----------|
| Lightning | — | +d4 lightning damage, removes stat scaling | Titanite Chunks |
| Fire | — | +d4 fire damage, removes stat scaling | Green Titanite |
| Divine | WIS | +d4 holy, effective vs undead | White Titanite |
| Chaos | Humanity | +d6 fire, scales with Humanity count | Red Titanite |
| Occult | WIS | +d4 dark, effective vs gods | White Titanite |

**Boss Weapons:** Trade Boss Soul + base weapon at Giant Blacksmith. Unique stats, no further upgrades.

---

## STATUS EFFECTS

### Buildup System

Status effects accumulate through repeated hits or exposure. Track buildup per status.

| Status | Threshold | Proc Effect | Cure |
|--------|-----------|-------------|------|
| Poison | 12 | d4 damage/round for 10 rounds | Purple Moss |
| Toxic | 8 | d8 damage/round for 10 rounds | Blooming Moss |
| Bleed | 15 | Instant d12 damage (ignores armor) | Bloodred Moss |
| Frostbite | 10 | d6 damage + no Vigor recovery for 3 rounds | Rime Blue Moss |
| Curse | 8 | Max HP halved until cured | Purging Stone |

### Buildup Sources

**Weapons (per hit):**
- Bleed weapons (Katana, Curved Sword): +5 buildup
- Poison weapons: +4 buildup
- Frost weapons (DS3): +4 buildup

**Environment (per round):**
- Shallow swamp: +4 Poison
- Deep swamp: +8 Poison
- Toxic swamp: +6 Toxic
- Basilisk fog: +4 Curse

**Proc & Recovery:** When buildup reaches its threshold, apply the Proc Effect and reset that status's buildup to 0. Ongoing exposure can build it again. Buildup also resets to 0 after 3 rounds without exposure. A cure removes both active effect and current buildup for that status unless stated otherwise.

---

## BOSS ENCOUNTERS

Bosses are THE signature mechanic. Pattern recognition, phase mastery, earned victory.

### Telegraph System

Bosses do NOT attack instantly. Every strike has a tell.

| Telegraph | Window | Player Response |
|-----------|--------|-----------------|
| Slow windup | 1-2 sec | DEX roll to dodge |
| Quick step-in | 0.5 sec | Tight window, high DC |
| Roar/slam | 2-3 sec | Run clear, opening after |
| Glow/charge | 3-4 sec | Move far OR interrupt |

**GM Rule:** ALWAYS describe the tell BEFORE resolving attack.
*"The knight pulls its greatsword over its right shoulder—"*
Player responds. THEN roll.

### Phase Transitions

```
Phase 1 → 2: HP drops below 60%
Phase 2 → 3: HP drops below 30%

Bosses with only two designed phases use the 60% transition and omit Phase 3; three-phase bosses use both thresholds.
```

At transition:
- Boss pauses 1-2 sec (player can heal, CANNOT attack)
- Visual change: fire ignites, armor shatters, new attacks unlock
- GM announces: "Something shifts."

Do NOT telegraph exact HP. Describe behavior change.

### Boss Stat Block Format

```
=== BOSS: [NAME] ===
Lore: [1 sentence]
HP: [total] | AC: [value] | Poise: [value] | Phase: [threshold]
Souls: [reward] | Soul Trade: [weapon or spell]

PHASE 1 — [state]
- Attack A: [tell] → [damage]
- Attack B: [tell] → [damage]
- Pattern: [sequence]
- Weakness: [opening]

PHASE 2 — [state]
- [upgraded attacks, new moves]
- Note: [arena changes]
===
```

---

## BOSS GENERATOR

### Boss Archetype (d12)

| d12 | Archetype | Size | Style |
|-----|-----------|------|-------|
| 1 | **Fallen Knight** | Human | Sword/shield, honorable, parryable |
| 2 | **Beast** | Large | Claws, charges, no weapon |
| 3 | **Demon** | Huge | Hammer/axe, fire, tanky |
| 4 | **Dragon** | Massive | Breath, flight, tail sweep |
| 5 | **Sorcerer** | Human | Spells, teleport, glass cannon |
| 6 | **Abomination** | Large | Multiple limbs, erratic, grotesque |
| 7 | **Undead Lord** | Human | Former king/knight, tragic |
| 8 | **Gank Squad** | Multiple | 2-4 enemies, teamwork |
| 9 | **Giant** | Huge | Slow, crushing, environmental |
| 10 | **Corrupted** | Varies | Abyss-touched, second phase transforms |
| 11 | **Mechanical** | Large | Golem, construct, no flinch |
| 12 | **Eldritch** | Varies | Tentacles, eyes, madness |

### Boss Scale (by region difficulty)

| Tier | HP | AC | Poise | Souls | Damage |
|------|----|----|-------|-------|--------|
| Early | 80-120 | 13-14 | 4 | 2,000-5,000 | d10 |
| Mid | 150-250 | 15-16 | 6 | 8,000-15,000 | 2d8 |
| Late | 300-500 | 17-18 | 8 | 20,000-40,000 | 2d10 |
| Lord | 500-800 | 18-20 | 10 | 50,000-100,000 | 2d12 |

### Phase 1 Attacks (roll 3)

| d10 | Attack | Tell | Damage | Note |
|-----|--------|------|--------|------|
| 1 | **Overhead Slam** | Raises weapon high, 2 sec | 2d10 + prone | Dodge window |
| 2 | **Horizontal Sweep** | Steps back, winds left | d10 to all melee | Jump or duck |
| 3 | **Thrust** | Pulls weapon back, aims | d8+4, reach | Sidestep |
| 4 | **Charge** | Scrapes ground, roars | 2d8 + knockback | Run perpendicular |
| 5 | **Grab** | Arms wide, lurches | d12 + restrained | STR DC 15 escape |
| 6 | **AOE Slam** | Jumps/raises | d8 all within 15ft | Run away |
| 7 | **Projectile** | Glows/charges | d8, 60ft | Dodge roll |
| 8 | **Combo (2 hits)** | Quick steps forward | d6 + d6 | Must dodge both |
| 9 | **Tail/Back Attack** | Repositions suddenly | d6, hits behind | Don't hug back |
| 10 | **Delayed Strike** | Holds pose 3 sec | 2d12 | Punishes early dodge |

### Phase 2 Change (d6)

Phase thresholds are fixed by **Phase Transitions** above: Phase 2 begins below 60% HP; optional Phase 3 begins below 30% HP. Roll only for what changes.

| d6 | Change |
|----|--------|
| 1 | Speed increase, shorter tells |
| 2 | New element (fire/lightning/dark) |
| 3 | Weapon breaks, fights unarmed/claws |
| 4 | Transformation (larger, different moveset) |
| 5 | Summons adds (2-3 minions) |
| 6 | Arena changes (fire floor, collapse) |

### Phase 2 Additions (roll 2)

| d8 | New Move |
|----|----------|
| 1 | AOE explosion on all attacks |
| 2 | Teleport behind player |
| 3 | Buff self (+2 damage, +2 AC for 3 rounds) |
| 4 | Environmental hazard activates |
| 5 | Heal once (20% HP) |
| 6 | Clone/illusion (decoy with 1 HP) |
| 7 | Rage mode (+1 telegraphed strike per exchange) |
| 8 | Desperation attack (all-in, vulnerable after) |

### Boss Soul Trade (d6)

| d6 | Trade Option A | Trade Option B |
|----|---------------|----------------|
| 1 | Unique weapon (boss's weapon, +special) | Powerful spell (Circle 4) |
| 2 | Ring (boss-themed effect) | Armor piece (boss-themed) |
| 3 | Shield (high stability) | Pyromancy (unique) |
| 4 | Miracle (boss-aligned) | Weapon with boss element |
| 5 | Sorcery (unique) | Talisman/Catalyst (strong) |
| 6 | Transform item (become like boss) | Souls ×2 instead |

### Boss Weakness (d6)

| d6 | Weakness |
|----|----------|
| 1 | Back legs — safe zone, backstab opportunity |
| 2 | After big attack — 2-3 sec recovery |
| 3 | Elemental — takes ×1.5 from opposite element |
| 4 | Head — extra damage but risky positioning |
| 5 | Specific phase — Phase 2 has more openings |
| 6 | Environmental — pillars block attacks, lure to hazard |

### Boss Fight Pacing

Bosses have MOMENTUM, not turn initiative:
- Boss presents 2-3 telegraphed strikes per exchange (Phase 1), 3-4 (Phase 2)
- The player may take one REACTION to each telegraphed strike (dodge/block/parry); each reaction is a roll and may be Pushed with Vigor
- After/among the sequence, the player has 1 MAIN ACTION per exchange: attack, heal, reposition, item, spell, etc.
- A Dodge Roll still answers only one incoming strike; surviving a combo requires multiple successful reactions. Saving Vigor lets the player heavily invest in the strike that matters most.
- When boss Poise is broken, the boss is **Staggered** and the player gains a free opening for one immediate attack

**Estus Mid-Fight:** Committed action. Must create distance first (DEX DC 12), then drink. Fail = boss punishes before heal.

### Boss Soul Trades

Use BOSS GENERATOR Soul Trade table, or create based on boss archetype:

| Boss Type | Option A | Option B |
|-----------|----------|----------|
| Knight | Boss's weapon (d10+2) | Knight's Ring (+2 Poise) |
| Beast | Claw weapon (d8, bleed) | Beast Roar spell |
| Demon | Demon Greataxe (d12) | Chaos pyromancy |
| Dragon | Dragonslayer weapon | Dragon breath miracle |
| Sorcerer | Boss's spell (Circle 4) | Crystal catalyst |
| Abomination | Twisted weapon | Transformation item |

---

## BONFIRE SYSTEM

Bonfires are respawn points, save files, and the last warm thing.

**Resting:**
- Refill Estus to current max
- Full HP recovery
- Refill Vigor and Resolve to maximum
- Reset all spell cooldowns; Attunement may be changed
- All area enemies respawn (NOT bosses)
- Save position — death returns here

**Kindling:** 1 Humanity → +5 Estus (permanent per bonfire)

**Warping:** Unlocked mid-game (requires Lord Soul or special item). Teleport between lit bonfires.

**Estus Flask:**
- Base: 5 charges per Bonfire rest (resting refills to current max)
- Use: Full action, restore 2d4+2 HP
- Kindled: restore 2d6+4 HP
- Max charges: 15 (with full kindling)

---

## MAGIC SYSTEMS

### Attunement & Cooldowns

**Attunement Slots:** `max(INT, WIS)` slots (minimum 1). These are preparation capacity, **not consumable charges**.
**Attunement:** Equip or swap prepared spells only at a Bonfire. Each spell occupies 1 slot unless a spell explicitly says otherwise. Casting never spends an Attunement Slot; cooldown is the repeat-use limiter.

**Cooldowns by Circle:**
- Circle 1: 2 hours
- Circle 2: 6 hours
- Circle 3: 12 hours
- Circle 4: 24 hours

**Cooldown reduction:** Sorcery: -2 hours per INT above 3. Miracles: -2 hours per WIS above 3. Minimum cooldown 0. Pyromancy cooldowns are not reduced by stats; Flame upgrades increase damage only.

**Casting on Cooldown:** Roll the spell's casting stat vs `DC 8 + circle` (Sorcery = INT, Miracle = WIS, Pyromancy = higher of INT/WIS). Resolve with core margins:
- Crit.Fail: fizzles, take d8 feedback, cooldown restarts at full duration
- Fail: fizzles, take d6 feedback
- Partial: spell casts, take d4 feedback
- Success/Crit: spell casts cleanly
The check may be Pushed with Resolve.

### Sorceries (INT)

Requirement: INT 3+. Equipment: Catalyst.

| Spell | Effect | Circle |
|-------|--------|--------|
| Soul Arrow | d6 magic, 60ft | 1 |
| Great Soul Arrow | d10 magic | 2 |
| Hidden Body | Near-invisible | 3 |
| Soul Spear | d12 piercing, multi-hit | 3 |
| Crystal Soul Spear | 2d12, armor break | 4 |

### Pyromancies (No requirement)

Equipment: Pyromancy Flame. Upgrades at Pyromancy trainers (rare NPCs).

**Flame Upgrade:** 1,000 Souls + Titanite per level. Levels 1-15. Each level = +1 damage to all Pyromancy.

| Spell | Effect | Circle |
|-------|--------|--------|
| Fireball | d6 fire, 3ft splash | 1 |
| Combustion | d10 fire, melee range | 2 |
| Great Fireball | d10, 10ft splash | 3 |
| Power Within | +d6 attacks, d4 self-damage/turn | 3 |
| Chaos Storm | d12×5 hits, large AoE | 4 |

### Miracles (WIS)

Requirement: WIS 3+. Equipment: Talisman.

| Spell | Effect | Circle |
|-------|--------|--------|
| Heal | d8+WIS HP | 1 |
| Force | Knockback cone | 1 |
| Lightning Spear | d10 lightning, 50ft | 2 |
| Great Heal | 3d8+WIS HP | 3 |
| Sunlight Spear | 3d10 lightning, AoE | 4 |

---

## COVENANT ARCHETYPES

Every cycle has sworn allegiances. Roll or choose which exist in your kingdom.

### Covenant Types (choose 4-6 for your world)

| Type | Purpose | Join Condition | Benefit |
|------|---------|----------------|---------|
| **Sunbringers** | Co-op, jolly cooperation | CHA DC 10 | Gold phantom summons, +1 to ally rolls |
| **Gravekeepers** | Protect the dead, oppose undead | Find their tomb | Anti-undead weapons, death miracles |
| **Abysswatchers** | Hunt the dark, contain corruption | Defeat Abyss boss | Resist dark, sense corruption |
| **Hunters** | Defend territory, kill trespassers | CHA DC 12 | Territory NPCs friendly, ambush bonuses |
| **Chaos Sworn** | Serve chaos flame, burn everything | Offer Humanity | Chaos pyromancies, demon allies |
| **Invaders** | Hunt the living, steal humanity | Enter the Abyss | Invade worlds, Dark Hand, steal Humanity |
| **Dragonkin** | Become dragon, transcend cycle | Find Dragon Eye | Dragon form, dragon weapons |
| **Moon Hunters** | Punish sinners, enforce law | CHA DC 14 | Hunt sinners, moonlight miracles |
| **Faithful** | Serve a Lord, zealotry | Pledge to specific Lord | Lord's blessing, special weapon |
| **Hollows** | Embrace the curse | Reach Hollow tier 3+ | No Hollowing penalties, but can't reverse |

### Covenant Rank System

All covenants use same structure:

| Rank | Offerings | Reward |
|------|-----------|--------|
| 0 | Join | Basic benefit, covenant item |
| 1 | 10 items | Covenant spell/miracle |
| 2 | 30 items | Unique weapon or transformation |

**Offering Types:**
- Sunbringers: Sunlight Medals (from co-op boss kills)
- Invaders: Humanity (from player kills)
- Hunters: Tokens (from territory defense)
- Chaos: Humanity (feed to flame)
- Dragons: Dragon Scales (from dragon kills or PvP)

### Sin & Betrayal

- Switch covenant: +1 Sin
- Kill covenant NPC: +3 Sin
- Sin 3+: Moon Hunters can invade you

**Absolution:** Find a Pardoner NPC. Cost: 500 Souls × level.

---

## INVASIONS & SUMMONS

### Summons (Co-op)

Condition: Human form, near boss fog.

**White Phantom:**
- Separate HP, GM-controlled ally
- Attacks boss, draws aggro
- Despawns: boss dies, phantom dies, or rest at bonfire

### Invasions

Condition: Human form, outside safe zones.

**Dark Phantom:**
- Mirrored stats (or slightly above)
- Goal: kill host
- Wins: host dies (steals 1 Humanity)
- Despawns: killed, host enters boss fog, or host dies

**GM triggers invasion when:**
- Player Human for 3+ sessions (too safe)
- Dramatic timing (before boss)
- Contested area (covenant territory, Lord's domain)

**Safe zones:** Hub bonfire, covenant leaders, shops.
**Hollow = no invasion, no summons.**

---

## LOCATIONS

### Archetypes

**Ruin:** Collapsed ceilings, hidden rooms, unstable floors (STR save or fall).

**Swamp:** Poison water, reduced movement. Use the STATUS EFFECTS buildup rules: shallow water +4 Poison/round, deep water +8 Poison/round. Poison procs at 12 buildup.

**Fortress:** Patrol routes, murder holes, archer towers. Stealth vs assault branching.

**Crypt:** Narrow corridors, undead rise when passed. Sound-triggered. Curse zones.

**Cathedral:** Vast naves, colored light, choir lofts. Ground exposed, enemies control elevation.

### Environmental Hazards

**Poison Swamp:** Movement ×½. Shallow water +4 Poison/round; deep water +8 Poison/round. At 12 buildup, apply Poison from the STATUS EFFECTS table. Purple Moss clears Poison and its buildup.

**Gravity:** Illusory floors (WIS DC 14). Narrow ledges (DEX DC 12). Enemy shoves (opposed Athletics).

**Traps:** Pendulums (DEX DC 14, 2d8), rolling boulders (DEX DC 15, 3d6 + prone), pitfalls.

**Ambush Patterns:**
- Archer overwatch (must flank)
- Fake retreat (leads to reinforcements)
- Sleeping hollow (activates within 10ft)

---

## RANDOM TABLES

### Bonfire Events (d10)

| Roll | Event |
|------|-------|
| 1 | Phantom Visit — White phantom gestures toward hidden path |
| 2 | Dark Spirit Probing — Invasion roll next danger zone |
| 3 | Hollow Wanderer — Mindless hollow appears, has loot |
| 4 | Kindred Flame — +1 Estus charge this area |
| 5 | Whisper — GM delivers cryptic lore |
| 6 | Peaceful Rest — Nothing happens |
| 7 | Nightmare — Wake with -1 Estus |
| 8 | Merchant Appears — Roll inventory |
| 9 | Message — Tactical hint about next encounter |
| 10 | Ember Surge — Full HP restored, invasion check |

### Area Exploration (d20)

| Roll | Discovery |
|------|-----------|
| 1 | Mimic chest (HP 60, d10, grapple) |
| 2 | Illusory wall (INT/WIS DC 14) |
| 3 | Trap (DEX DC 12 to spot) |
| 4 | Unlit bonfire |
| 5 | Corpse with item |
| 6 | Shortcut found |
| 7 | Illusory floor (secret below) |
| 8 | Ambush |
| 9 | Summon sign |
| 10 | Empty room, wrongness |
| 11-12 | Messages (some false) |
| 13 | Environmental hazard |
| 14 | NPC Hollow (former adventurer) |
| 15 | Ancient bonfire ash (fragment loot) |
| 16 | Distracted enemies (stealth option) |
| 17 | Loose stones (titanite/souls) |
| 18 | Sleeping giant (pass quietly or wake) |
| 19 | Hidden path (guaranteed loot) |
| 20 | Legendary corpse (unique weapon) |

### Corpse Loot (d12)

| Roll | Contents |
|------|----------|
| 1 | Humanity (1) |
| 2 | Titanite Shard (2) |
| 3 | Green Blossom (3) |
| 4 | Throwing Knives (10) |
| 5 | Firebombs (5) |
| 6 | Soul of Lost Undead (200 souls) |
| 7 | Black Firebombs (3) |
| 8 | Ember / Firekeeper Soul |
| 9 | Estus Shard (+1 max) |
| 10 | Large Soul (1,000-3,000) |
| 11 | Rare consumable |
| 12 | Equipment (roll weapon/ring) |

### Rings (d12)

| Roll | Ring | Effect |
|------|------|--------|
| 1 | Ring of Sacrifice | Retain souls on death, shatters |
| 2 | Hornet Ring | +50% crit damage |
| 3 | Steel Protection | -2 physical damage |
| 4 | Havel's Ring | Treat armor burden as one tier lighter for Dodge Roll (minimum Light) |
| 5 | Chloranthy | +1 additional Vigor recovery each turn |
| 6 | Wolf Ring | +2 Poise |
| 7 | Gold Serpent | +1 loot rolls |
| 8 | Silver Serpent | +20% souls |
| 9 | Sun's Firstborn | +20% miracle damage |
| 10 | Bellowing Dragoncrest | +20% sorcery damage |
| 11 | Red Tearstone | <20% HP: +30% damage |
| 12 | Dark Wood Grain | Ninja flip dodge |

---

## NPC GENERATOR

### NPC Role (d12)

| d12 | Role | Purpose |
|-----|------|---------|
| 1 | **Crestfallen** | Warns about danger, knows too much, will Hollow |
| 2 | **Merchant** | Sells items, has secrets, may relocate |
| 3 | **Blacksmith** | Upgrades weapons, teaches infusions |
| 4 | **Fire Keeper** | Bound to bonfire, can level player, vulnerable |
| 5 | **Covenant Leader** | Recruits, gives missions, rewards loyalty |
| 6 | **Invader** | Hunts player, steals Humanity |
| 7 | **White Phantom** | Summonable ally, helps with boss |
| 8 | **Former Hero** | Gave up, has unique weapon/spell to trade |
| 9 | **Scholar** | Knows lore, teaches sorceries, may be mad |
| 10 | **Pilgrim** | Traveling same path, can be saved or lost |
| 11 | **Trap** | Seems friendly, will betray (CHA DC 14 to sense) |
| 12 | **Lord's Servant** | Works for a Lord, offers quests against rivals |

### NPC Personality (d8)

| d8 | Personality |
|----|-------------|
| 1 | Sardonic, world-weary, expects failure |
| 2 | Cheerful (wrong for this world) |
| 3 | Silent, communicates through gestures |
| 4 | Mad, speaks truth wrapped in nonsense |
| 5 | Honorable, keeps word, expects same |
| 6 | Desperate, will do anything to survive |
| 7 | Serene, accepted fate, at peace |
| 8 | Hungry, wants something from player |

### NPC Hollow Clock

All NPCs have a Hollow Clock. Track secretly.

```
HOLLOW CLOCK: ○○○○○○ (0-6)

Starts at: 2/6 (most NPCs) or 4/6 (already struggling)

Tick ↑:
- Time passes (1 per session in same area)
- Player dies repeatedly nearby
- Player ignores their quest
- World state worsens

Tick ↓:
- Give Humanity
- Complete their quest
- CHA DC 14 meaningful conversation

At 6/6: Hollows. Either attacks or vanishes.
At 0/6: Fully Human. Reveals secret, gives reward.
```

### NPC Templates

```
=== CRESTFALLEN ===
Stats: STR 4 | DEX 3 | CON 3 | INT 3 | WIS 4 | CHA 2
HP: 45 | AC: 14
Hollow Clock: 4/6
Secret: Knows shortcut to Lord
6/6: Attacks at bonfire | 0/6: Reveals path

=== MERCHANT ===
Stats: STR 1 | DEX 2 | CON 2 | INT 4 | WIS 3 | CHA 4
HP: 20 | AC: 11
Hollow Clock: 2/6 (hidden)
Secret: Former court member
6/6: Vanishes with item | 0/6: Unlocks rare stock

=== FIRE KEEPER ===
Stats: STR 1 | DEX 1 | CON 2 | INT 3 | WIS 5 | CHA 3
HP: 15 | AC: 10
Cannot Hollow (bound to fire)
Killing: extinguishes bonfire permanently, drops Keeper Soul

=== INVADER ===
Stats: STR 4 | DEX 4 | CON 3 | INT 3 | WIS 3 | CHA 2
HP: 60 | AC: 15
Weapon: d10 + bleed or element
Abilities: Escape Roll, reads player deaths
Defeat: drops Humanity + covenant item

=== WHITE PHANTOM ===
Stats: STR 3 | DEX 3 | CON 3 | INT 3 | WIS 3 | CHA 1
HP: 40 | AC: 13
Attacks boss independently
At 50% boss HP: burns bright, +2 attacks 3 rounds
If dies: player Morale -1
```

---

## ENEMY GENERATOR

### Enemy Type (d12)

| d12 | Type | Behavior | Drops |
|-----|------|----------|-------|
| 1 | **Hollow** | Mindless, patrols, weak | 100-300 Souls |
| 2 | **Soldier** | Trained, blocks, retreats | 200-500 Souls, weapon |
| 3 | **Knight** | Elite, parries, pursues | 800-1500 Souls, armor |
| 4 | **Skeleton** | Rises again unless fire/divine | 150 Souls, Titanite |
| 5 | **Beast** | Charges, fast, no block | 300-600 Souls |
| 6 | **Caster** | Keeps distance, spells | 400-800 Souls, spell scroll |
| 7 | **Giant** | Slow, huge damage, can't enter buildings | 1000+ Souls |
| 8 | **Swarm** | Weak alone, 3-5 together | 50 each, nothing |
| 9 | **Ambusher** | Hidden, backstabs, flees | 200-400 Souls |
| 10 | **Demon** | Fire immune, heavy hits | 1500+ Souls, Demon Titanite |
| 11 | **Mimic** | Pretends chest, grapples | 2000 Souls, rare item |
| 12 | **Mini-boss** | Unique, guards area, doesn't respawn | 3000+ Souls, unique drop |

### Enemy Weapon (d8)

| d8 | Weapon | Damage |
|----|--------|--------|
| 1 | Broken sword | d4 |
| 2 | Spear | d6, reach |
| 3 | Sword + shield | d6, blocks |
| 4 | Greataxe | d10, slow |
| 5 | Claws | d6, Bleed +5 buildup |
| 6 | Magic staff | d8 ranged |
| 7 | Whip | d4, reach, grabs |
| 8 | Unarmed | d4+STR, grapple |

### Enemy Special (d6)

| d6 | Special |
|----|---------|
| 1 | None — standard enemy |
| 2 | Poison (attacks inflict +3 buildup) |
| 3 | Fire (attacks deal +d4 fire) |
| 4 | Resurrects once (half HP) |
| 5 | Calls reinforcements if not killed fast |
| 6 | Drops rare item (roll Rings table) |

---

## ENEMY STAT BLOCKS

### Common Enemies (Templates)

```
=== HOLLOW SOLDIER ===
HP: 15 | AC: 11 | Souls: 100
Weapon: Broken Sword (d4) or Spear (d6)
Behavior: Patrols, attacks on sight, no tactics
Special: —
===

=== HOLLOW WARRIOR ===
HP: 25 | AC: 13 | Souls: 200
Weapon: Longsword (d6) + Shield
Behavior: Blocks first, then attacks. Staggers on guard break.
Special: Shield Bash — if player attacks shield twice, warrior bashes (d4 + prone)
===

=== SILVER KNIGHT ===
HP: 60 | AC: 16 | Souls: 1,000
Weapon: Silver Knight Sword (d8) or Greatbow (d10, 120ft)
Behavior: Disciplined. Parries player attacks (DEX DC 14 or riposted).
Special: If player dodges twice consecutively, knight uses Shield Bash
===

=== BLACK KNIGHT ===
HP: 80 | AC: 17 | Souls: 1,500
Weapon: Black Knight Sword (d10+2) or Halberd (d10, reach)
Behavior: Aggressive pursuit, does not retreat. Heavy attacks only.
Special: Immune to fire. Drops Black Knight weapon (10% chance).
===

=== SKELETON ===
HP: 20 | AC: 12 | Souls: 150
Weapon: Scimitar (d6) or Falchion (d6, Bleed +5 buildup)
Behavior: Rises again 1 round after death unless killed by Divine/Fire
Special: Reassemble — reforms at half HP if not destroyed properly
===

=== BASILISK ===
HP: 30 | AC: 12 | Souls: 200
Attack: Bite (d4)
Behavior: Circles, sprays Curse fog
Special: Curse Fog — 10ft cloud, +4 Curse buildup/round. At 8 buildup, Curse procs per STATUS EFFECTS.
===

=== MIMIC ===
HP: 70 | AC: 14 | Souls: 2,000
Attack: Devour (d12 + grapple, STR DC 16 to escape)
Behavior: Waits as chest. WIS DC 14 to notice breathing.
Special: If grappled, player takes d6 each turn until escape
Loot: Always rare (roll Ring or unique weapon)
===

=== TITANITE DEMON ===
HP: 100 | AC: 18 | Souls: 3,000
Weapon: Titanite Catch Pole (d12, reach)
Behavior: Guards location, does not pursue far
Special: Drops Demon Titanite (used for boss weapons)
===
```

### Boss Template Example

```
=== BOSS: [TUTORIAL DEMON] ===
Lore: Warden of starting prison, first true test
HP: 120 | AC: 14 | Phase: 60%
Souls: 2,000 | Soul Trade: Demon's Great Hammer (d12)

PHASE 1 — Grounded
- Hammer Slam: raises overhead 2 sec → 2d10 + prone (DEX DC 12)
- Sweep: spins left → d10 to all in melee (DEX DC 10)
- Butt Slam: jumps, lands → 2d8 AoE (DEX DC 14)
- Pattern: Slam → Sweep → pause → repeat
- Weakness: Back legs. Plunge attack from above = ×3 damage.

PHASE 2 — Enraged (below 60%)
- All attacks +2 damage
- Adds Flying Slam: leaps to player location → 3d8 (DEX DC 15)
- Pattern: more erratic, shorter pauses

NOTE: This is a template. Use Boss Generator for custom bosses.
===
```

---

## CAMPAIGN STRUCTURE

### Zone Progression

```
[Hub Bonfire] → [Exploration] → [Shortcut] → [Mini-Boss]
                                                  ↓
                                     [Loot / NPC / Lore]
                                                  ↓
                                    [Boss Fog] → [Main Boss]
                                                  ↓
                                      [New Bonfire / Area]
```

### Session Pacing

**Phase 1 — Exploration (~30 min)**
- Reorient at bonfire, spend Souls
- Introduce new environmental detail
- Low threat, high discovery

**Phase 2 — Attrition (~60-90 min)**
- Resource drain, Estus finite
- Mini-boss or ambush at midpoint
- Rising pressure

**Phase 3 — Boss Attempt (variable)**
- First attempt = learning moveset
- Allow multiple attempts per session
- Peak tension

**Phase 4 — Resolution (~15 min)**
- Victory: bonfire lit, Souls rewarded
- Defeat: recap lessons, advance Hollowing if applicable
- Close with new mystery for next session

### Campaign Frameworks

**The Link (classic)**
- Goal: Collect Lord Souls, reach the Flame, choose
- Structure: Hub → 4 Lord regions → Final area
- Ending: Link Fire / Let it Fade / Usurp

**The Escape**
- Goal: Find way out of the cycle entirely
- Structure: Linear progression through increasingly hostile zones
- Ending: Escape (rare) / Die trying / Become part of the world

**The Hunt**
- Goal: Kill specific boss or NPC (revenge, contract, covenant)
- Structure: Track target through regions, gather info
- Ending: Success / Failure / Become worse than target

**The Hollow**
- Goal: Survive as long as possible before going Hollow
- Structure: Sandbox, Hollowing is the clock
- Ending: Hollow out / Find cure / Accept and transcend

**The Builder**
- Goal: Restore something (bonfire network, covenant, kingdom)
- Structure: Collect resources, clear regions, defend
- Ending: Success / Abandoned / Corrupted

### Endings (Universal)

| Ending | What Happens |
|--------|--------------|
| **Link the Fire** | Sacrifice self, extend age, be forgotten |
| **Let it Fade** | Walk away, Age of Dark begins |
| **Usurp the Flame** | Steal fire for yourself/humanity |
| **Become Lord** | Take a Lord's place, rule the ruin |
| **Escape** | Leave the cycle entirely (requires special conditions) |
| **Hollow** | Lose self, become enemy for next cycle |

### Starter Scenario (Generic)

**The Awakening:**
1. Player wakes in prison/tomb/ruin. Cell opens (why?).
2. Dying NPC gives Estus Flask and cryptic direction.
3. First zone: teach roll-dodge, backstab, bonfire.
4. Tutorial boss: overwhelming, meant to kill once. Return path allows plunge attack or bypass.
5. Victory: first bonfire lights, kingdom opens.

**First Death:** Let it happen. No penalty for tutorial death. Teach the loop.

---

## GM CHECKLIST

### Session Start
```
[ ] Current bonfire and area?
[ ] Souls count correct?
[ ] Humanity count correct?
[ ] Hollowing tier noted?
[ ] Estus charges (current/max)?
[ ] Active covenant?
```

### Combat Round
```
[ ] Vigor/Resolve recovered +1 at turn/exchange start and Push spending tracked?
[ ] Poise damage this round?
[ ] Status buildup updated?
[ ] Boss telegraph BEFORE attack resolution?
[ ] Phase transition at HP threshold?
```

### Session End
```
[ ] Soul Echo location if died?
[ ] NPC Hollow Clocks advanced?
[ ] Covenant Sin tracked?
[ ] Shortcuts/bonfires discovered noted?
[ ] New loot recorded with actual stats?
```

---

## REST INTEGRATION

This section implements the explicit CORE OVERRIDES above.

**Bonfire Rest = Dark Souls Long Rest:**
- Full HP recovery
- Estus refilled
- Vigor and Resolve refilled
- All spell cooldowns reset
- Attunement may be changed; Attunement Slots are capacity and are never "restored"
- Area enemies respawn (bosses do not)

**No Short Rests:** `REPLACES: [CORE REST]`. Dark Souls has no safe Short Rest; Estus replaces Hit Dice healing.

**Exhaustion:** `DISABLES: [EXHAUSTION]`. Hollowing replaces exhaustion as the setting's attrition mechanic.

**Hollowing:** Bonfire rest by itself does not remove Hollowing. Spend Humanity or use a specific blessing/effect listed under Hollowing.

---

*"Bearer of the curse... Seek souls. Larger, more powerful souls. Seek the King, that is the only way."*
