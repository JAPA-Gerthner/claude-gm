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

**DS2 Truth:** The cycle happens everywhere, repeatedly. Kingdoms rise, flames kindle, flames fade.

**DS3 Convergence:** Time fractures. All ages overlap. The Unkindled (failed kindlers) rise as last resort.

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

**Session Example:** Clearing Undead Burg (first area) typically yields 3,000–5,000 Souls. Enough to level twice at low level, OR buy basic gear, but not both. The tension is intentional.

### Death Loop

On death:
1. Wake at last Bonfire with 0 Souls
2. All Souls drop at death location as **Soul Echo**
3. World persists — doors open, shortcuts unlocked, enemies respawn

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
- Die while not Human → +1 stack
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
  VIT/END  → CON  (HP = CON×5, Stamina = CON×3)
  STR      → STR  (melee scaling, heavy weapons)
  DEX      → DEX  (fast weapons, ranged, cast speed)
  INT      → INT  (sorceries, lore, traps)
  FTH      → WIS  (miracles, divine insight, curse resist)
```

### Starting Classes

| Class | STR | DEX | CON | INT | WIS | CHA | HP | Stamina |
|-------|-----|-----|-----|-----|-----|-----|----|----|
| Knight | 3 | 2 | 3 | 1 | 1 | 1 | 15 | 9 |
| Pyromancer | 2 | 2 | 2 | 2 | 1 | 2 | 10 | 6 |
| Sorcerer | 1 | 1 | 2 | 4 | 2 | 1 | 10 | 6 |
| Cleric | 2 | 1 | 2 | 1 | 4 | 1 | 10 | 6 |
| Wanderer | 1 | 3 | 2 | 1 | 2 | 2 | 10 | 6 |
| Deprived | 1 | 1 | 1 | 1 | 1 | 1 | 5 | 3 |

### Leveling (Bonfire Only)

| Level | Souls Cost |
|-------|------------|
| 1–5 | 1,000 |
| 6–10 | 2,500 |
| 11–15 | 5,000 |
| 16–20 | 10,000 |
| 21–30 | 20,000 |
| 31+ | 40,000 |

Each level: +1 to any stat.

---

## STAMINA SYSTEM

**Stamina Pool:** CON × 3 (minimum 3)

| Action | Cost |
|--------|------|
| Light Attack | 2 |
| Heavy Attack | 4 |
| Dodge Roll | 3 |
| Block (per hit) | damage÷3 |
| Parry attempt | 2 |
| Sprint (per round) | 1 |

**Recovery:** +4 Stamina at turn start
- Chloranthy Ring: +2 additional
- Medium load (50-70%): -1
- Heavy load (70%+): -2
- Shield raised: -1

**Depletion:** At 0 Stamina mid-action → **Staggered** (no further actions this round)

---

## COMBAT

### Actions

**Light Attack:** Weapon die + STR/DEX. Fast, no penalty.

**Heavy Attack:** Roll weapon die twice, take higher (1H) or add both (2H). Costs 4 Stamina. Target makes Poise Save DC 12 or staggers.

**Dodge Roll:** 3 Stamina. One incoming attack misses (your choice).
- Light roll (<30% burden): +2 evasion
- Medium roll (30-50%): standard
- Fat roll (70%+): DEX DC 13 or dodge fails

**Block:** Reaction. Reduce damage by shield Stability. Costs Stamina.

**Parry & Riposte:** Reaction before enemy light attack. DEX+d20 vs DC 14.
- Crit (+10): Perfect parry, Riposte deals ×2 max damage
- Success (+5): attack nullified, enemy prone, free Riposte (max damage)
- Partial (0-4): Deflected — take half damage, no Riposte
- Fail (-1 to -5): Mistimed — take full damage
- Crit Fail (-6): Weapon knocked aside, enemy gets free attack
- Cannot parry heavy attacks or large bosses

**Backstab:** Move behind unaware/guard-broken target. Full action. 2× max weapon damage + STR. CON DC 15 or Staggered 1 round.

### Weapon Table

| Category | Damage | Scale | Properties |
|----------|--------|-------|------------|
| Dagger | d4 | DEX | +2 parry, light |
| Straight Sword | d6 | STR/DEX | Balanced |
| Curved Sword | d6 | DEX | +1 attack, bleed (3 hits = d8) |
| Katana | d6 | DEX | Bleed, reach, fragile (break on nat 1) |
| Greatsword | 2d6 | STR | Poise +2, two-hand |
| Ultra Greatsword | 2d8 | STR | Poise +4, must two-hand, -1 attack |
| Axe | d8 | STR | +2 vs shields |
| Greataxe | 2d6 | STR | Poise +3, cleave |
| Spear | d6 | STR/DEX | Reach, attack while blocking |
| Halberd | d10 | STR | Reach, sweep (DEX DC 13 or prone) |
| Hammer | d6 | STR | Poise +2, +d4 vs armor |
| Great Hammer | 2d8 | STR | Poise +5, slow (DIS if moved) |
| Rapier | d6 | DEX | Crit on 19-20, ×3 on nat 20 |
| Crossbow | d8 | DEX | Ranged 60/120, reload = action |

### Armor & Poise

| Tier | Weight | AC | Poise |
|------|--------|----|----|
| Unarmored | 0 | +0 | 0 |
| Light | 1-8 | +1 | 1 |
| Medium | 9-20 | +2 | 3 |
| Heavy | 21-35 | +4 | 6 |
| Giant | 36+ | +5 | 8 |

**Poise:** When Poise Damage received ≥ your Poise → Staggered. Resets each turn.

### Shields

| Type | Stability | Block % | Special |
|------|-----------|---------|---------|
| Small | 2 | 70% | +1 parry |
| Medium | 4 | 85% | Standard |
| Greatshield | 7 | 100% | -2 Stamina regen |
| Buckler | 1 | 60% | +2 parry |

---

## WEAPON UPGRADES

Weapons improve through Titanite reinforcement at Andre the Blacksmith.

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
| Frostbite | 10 | d6 damage + Stamina regen halved 3 rounds | Rime Blue Moss |
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

**Recovery:** Buildup resets to 0 after 3 rounds without exposure.

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
HP: [total] | AC: [value] | Phase: [threshold]
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

### Boss Fight Pacing

Bosses have MOMENTUM, not turn initiative:
- Boss attacks 2-3 times per exchange (Phase 1), 3-4 (Phase 2)
- Player has 1 action per exchange: dodge, attack, heal, or reposition
- Consecutive hits (3+) = **Poise Break** → free attack

**Estus Mid-Fight:** Committed action. Must create distance first (DEX DC 12), then drink. Fail = boss punishes before heal.

### Boss Soul Trades

| Boss Soul | Option A | Option B |
|-----------|----------|----------|
| Demon Soul | Great Combustion | Demon's Greataxe (d12) |
| Soul of Sif | Greatsword of Artorias | Pursuers Spell |
| Moonlight Soul | Crystal Soul Spear | Moonlight Greatsword |
| Dragon Soul | Dragon Bone Fist | Dragonslayer Spear |
| Old Witch Soul | Quelaag's Furysword | Power Within |

---

## BONFIRE SYSTEM

Bonfires are respawn points, save files, and the last warm thing.

**Resting:**
- Refill Estus to current max
- Full HP recovery
- All area enemies respawn (NOT bosses)
- Save position — death returns here

**Kindling:** 1 Humanity → +5 Estus (permanent per bonfire)

**Warping:** Unlocked mid-game (Lordvessel). Teleport between lit bonfires.

**Estus Flask:**
- Base: 5 charges per session
- Use: Full action, restore 2d4+2 HP
- Kindled: restore 2d6+4 HP
- Max charges: 15 (with full kindling)

---

## MAGIC SYSTEMS

### Spell Slots & Cooldowns

**Spell Slots:** INT or WIS modifier = number of spell slots (minimum 1)
**Attunement:** Equip spells at bonfire. Slots limit how many you carry.

**Cooldowns by Circle:**
- Circle 1: 2 hours
- Circle 2: 6 hours
- Circle 3: 12 hours
- Circle 4: 24 hours

**Cooldown reduction:** -2 hours per point of casting stat above requirement.

**Casting on Cooldown:** INT/WIS check DC 8 + circle. Fail = spell fizzles, take d6 feedback damage.

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

Equipment: Pyromancy Flame. Upgrades at Quelana or Laurentius.

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

## COVENANTS

Sworn allegiances. One active at a time. Joining requires CHA roll vs covenant DC.

| Covenant | Leader | Join DC | Benefit |
|----------|--------|---------|---------|
| Way of White | Petrus | CHA 8 | Anti-undead protection, healing items |
| Warriors of Sunlight | Solaire | CHA 10 | Gold phantom summons, co-op bonus |
| Darkwraith | Kaathe | Auto (Abyss) | Invade, steal Humanity, Dark Hand |
| Forest Hunters | Alvina | CHA 12 | Forest NPCs friendly, auto-summon defense |
| Chaos Servant | Fair Lady | CHA 8 | Shortcut, Chaos pyromancies |
| Blade of Darkmoon | Gwyndolin | CHA 14 | Hunt sinners, Darkmoon Blade miracle |
| Path of Dragon | Dragon | Auto (Eye) | Dragon form transformation |

### Rank Rewards

| Covenant | Item | Rank 1 (10 items) | Rank 2 (30 items) |
|----------|------|-------------------|-------------------|
| Warriors of Sunlight | Sunlight Medal | Lightning Spear | Sunlight Spear |
| Darkwraith | Humanity | Dark Hand | Lifedrain (steal HP) |
| Forest Hunters | Wolf Ring fragment | Cat Covenant Ring | Stone Greatsword |
| Chaos Servant | Humanity | Great Chaos Fireball | Shortcut unlocked |
| Blade of Darkmoon | Souvenir of Reprisal | Darkmoon Blade | Brass Armor set |
| Path of Dragon | Dragon Scale | Dragon Head Stone | Dragon Torso Stone |

**Betrayal:** Switching covenants = +1 Sin. Darkmoon invades at Sin 3+. Absolution at Oswald: 500 Souls × character level.

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
- Contested area (Darkroot, Anor Londo)

**Safe zones:** Firelink Shrine, covenant leaders, shops.
**Hollow = no invasion, no summons.**

---

## LOCATIONS

### Archetypes

**Ruin:** Collapsed ceilings, hidden rooms, unstable floors (STR save or fall).

**Swamp:** Poison water, reduced movement. Each round = d4 poison buildup. 3 rounds = Poisoned (d4/round).

**Fortress:** Patrol routes, murder holes, archer towers. Stealth vs assault branching.

**Crypt:** Narrow corridors, undead rise when passed. Sound-triggered. Curse zones.

**Cathedral:** Vast naves, colored light, choir lofts. Ground exposed, enemies control elevation.

### Environmental Hazards

**Poison Swamp:** Movement ×½. 3 rounds shallow / 1 round deep = Poisoned. Purple Moss cures.

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
| 4 | Havel's Ring | +50% equip burden |
| 5 | Chloranthy | +2 Stamina regen |
| 6 | Wolf Ring | +20 Poise |
| 7 | Gold Serpent | +1 loot rolls |
| 8 | Silver Serpent | +20% souls |
| 9 | Sun's Firstborn | +20% miracle damage |
| 10 | Bellowing Dragoncrest | +20% sorcery damage |
| 11 | Red Tearstone | <20% HP: +30% damage |
| 12 | Dark Wood Grain | Ninja flip dodge |

---

## NPC TEMPLATES

### Crestfallen Warrior

```
=== NPC: CRESTFALLEN ===
Appearance: Hollow-worn armor, sits by bonfire
Personality: Sardonic, world-weary
Secret: Has kindled this fire twelve times
Stats: STR 4 | DEX 3 | CON 3 | INT 3 | WIS 4 | CHA 2
HP: 45 | AC: 14

HOLLOW CLOCK: ●●●●○○ (4/6)
Tick ↑: player dies repeatedly, time passes
Tick ↓: give Humanity, CHA DC 14 success
6/6: Hollows, attacks on sight
0/6: Opens up, reveals hidden path
===
```

### Traveling Merchant

```
=== NPC: MERCHANT ===
Appearance: Tattered robes, oversized bag
Personality: Cheerful (wrong for this world)
Secret: Former court scholar
Stats: STR 1 | DEX 2 | CON 2 | INT 4 | WIS 3 | CHA 4
HP: 20 | AC: 11

SUSPICION CLOCK: ●○○○○○ (hidden)
Tick ↑: steal, pry about past
Tick ↓: buy generously
6/6: Vanishes with one rare item
0/6: Unlocks questline
===
```

### Invader (Red Phantom)

```
=== NPC: INVADER ===
Appearance: Red aura, purposeful stride
Stats: STR 4 | DEX 4 | CON 3 | INT 3 | WIS 3 | CHA 2
HP: 60 | AC: 15
Weapon: Chaos Blade (d10, bleed 2/round)

ABILITIES:
- Escape Roll [1/combat]: reposition behind player
- Read Deaths: references player's previous deaths
- If escapes: leaves Black Eye Orb (revenge invasion)
===
```

### Summonable Ally

```
=== NPC: WHITE PHANTOM ===
Appearance: White glow, mirrored gear quality
Stats: STR 3 | DEX 3 | CON 3 | INT 3 | WIS 3 | CHA 1
HP: 40 | AC: 13

BEHAVIOR:
- Attacks boss independently
- Will not follow past fog gate
- If dies: player loses +1 Estus morale
- At 50% boss HP: burns Humanity, +2 attacks for 3 rounds
===
```

### Fire Keeper

```
=== NPC: FIRE KEEPER ===
Appearance: Eyes removed, bound to bonfire
Personality: Serene, knows more than says
Stats: STR 1 | DEX 1 | CON 2 | INT 3 | WIS 5 | CHA 3
HP: 15 | AC: 10

BEHAVIOR:
- Cannot leave bonfire
- Will not lie
- Killing her extinguishes bonfire permanently
- Can level up player (Souls cost)
===
```

---

## ENEMY STAT BLOCKS

### Common Enemies

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
Weapon: Scimitar (d6) or Falchion (d6, bleed)
Behavior: Rises again 1 round after death unless killed by Divine/Fire
Special: Reassemble — reforms at half HP if not destroyed properly
===

=== BASILISK ===
HP: 30 | AC: 12 | Souls: 200
Attack: Bite (d4)
Behavior: Circles, sprays Curse fog
Special: Curse Fog — 10ft cloud, +6 Curse buildup/round. Stay 2 rounds = Cursed.
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
=== BOSS: ASYLUM DEMON ===
Lore: Warden of the Undead Asylum, first true test
HP: 120 | AC: 14 | Phase: 60%
Souls: 2,000 | Soul Trade: Demon's Great Hammer

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

### Endings

**DS1:**
- Link the Fire — sacrifice yourself, age extended, forgotten by history
- Dark Lord — walk away, Age of Dark begins, Kaathe's prophecy fulfilled

**DS2:**
- Take the Throne — bear the curse, become the next vessel, cycle continues
- Leave the Throne — walk away, neither kindling nor claiming, world uncertain

**DS3:**
- Link the Fire — duty, exhaustion, one last extension
- End of Fire — give flame to Firekeeper, world fades gently into dark
- Usurp the Flame — steal the fire for humanity, Lord of Hollows rises

### Starter Scenario

**Undead Asylum Escape:**
1. Cell opens. Oscar of Astora gives Estus and dying words.
2. Courtyard: teach roll-dodge and backstab vs hollows.
3. Asylum Demon: run, find plunge attack setup.
4. Reward: Estus upgraded, gate to Lordran.
5. Let them die to Asylum Demon once — prologue death, no penalty.

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
[ ] Stamina tracked per action?
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

**Bonfire Rest = Long Rest equivalent:**
- Full HP recovery
- Estus refilled
- All spell slots restored
- Cooldowns reset
- -1 Hollowing stack (if Human form)

**No Short Rests:** Dark Souls has no safe short rest. Estus replaces Hit Dice healing.

**Exhaustion:** Not used in this ruleset. Hollowing replaces exhaustion as attrition mechanic.

---

*"Bearer of the curse... Seek souls. Larger, more powerful souls. Seek the King, that is the only way."*
