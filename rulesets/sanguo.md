> **LANGUAGE:** Preferred session language is **Russian**. This file is stored in English for token efficiency only.

# SANGUO — Three Kingdoms China

Complete setting pack for Three Kingdoms era campaigns: sworn oaths, stratagems, heroic duels, army command.

**For:** Heroic warlords, cunning strategists, sworn brothers, grand battles, political intrigue.

---

## SETTING OVERVIEW

**Era:** Late Han Dynasty / Three Kingdoms (184-280 AD)
**Themes:** Loyalty vs ambition, strategy vs brute force, brotherhood, legitimacy
**Tone:** Heroic romance with tragic undertones

### The Three Kingdoms
```
WEI (魏) — Cao Cao's domain. North. Pragmatic, powerful, "villainous".
SHU (蜀) — Liu Bei's domain. Southwest. Righteous, underdog, "heroic".
WU (吳) — Sun Quan's domain. Southeast. Naval, diplomatic, "clever".
```

### Social Order
```
Emperor (puppet or legitimate?)
  └─ Warlords / Kings
       └─ Generals (武將)
            └─ Advisors/Strategists (軍師)
                 └─ Officers
                      └─ Soldiers
                           └─ Peasants
```

---

# PART I: RIGHTEOUSNESS (義 YI)

Not rigid honor code — moral standing based on loyalty, keeping word, and virtuous conduct.

## RIGHTEOUSNESS SCALE

```
YI: ●●●●●○○○○○ (5/10)

10 — Paragon. Like Guan Yu — worshipped as god of loyalty.
7-9 — Renowned. People follow you for your virtue.
4-6 — Common. Judged by actions.
1-3 — Questionable. "He has talent but no virtue."
0 — Treacherous. No one trusts your word.
```

---

## YI EFFECTS

### High Yi (7+)
```
+ CHA +2 when recruiting, negotiating surrender
+ Officers more likely to stay loyal
+ Peasants support you (+1 Supply per month in friendly territory)
+ Can invoke "righteous cause" for +1 army morale (once per battle)
+ CANNOT use treacherous stratagems (#10, #31, #34)
```

### Neutral Yi (4-6)
```
+ Flexibility: Choose 1 benefit from High OR Low Yi per session
+ No automatic penalties
+ Can use any stratagem (but pay Yi costs)
```

### Low Yi (1-3)
```
- CHA -2 when recruiting virtuous officers
- Officers require 2x pay to stay loyal
- Peasants hide food (-1 Supply in hostile territory)
+ CHA +2 with schemers, mercenaries
+ Intimidation advantage (+2 to fear effects)
+ Any stratagem without additional Yi cost
```

### Treacherous (0)
```
- No one accepts your oath (worthless)
- Officers expect betrayal, act first
- Assassination attempts likely
+ Can betray freely (expected anyway)
+ Other treacherous lords deal with you
```

---

## GAINING/LOSING YI

### Virtuous Actions (+Yi)

| Action | Gain |
|--------|------|
| Keep difficult promise | +1 |
| Spare defeated enemy with honor | +1 |
| Protect civilians in war | +1 |
| Avenge sworn brother | +2 |
| Refuse dishonorable advantage | +1 |
| Release captured general who showed virtue | +1 |
| Die rather than betray | +3 (posthumous) |

### Unrighteous Actions (-Yi)

| Action | Loss |
|--------|------|
| Break sworn oath | -3 |
| Betray lord/ally | -2 |
| Kill surrendered enemy | -1 |
| Harm civilians deliberately | -2 |
| Use poison/assassination | -1 |
| Lie to sworn brother | -2 |
| Abandon ally in battle | -2 |

### Context: Pragmatism vs Virtue
```
"Necessary evil" (feeding army, saving more lives): -0.5 instead of full
Against tyrant/traitor: No Yi loss for harsh measures
War vs peace: Ambush in war = acceptable, in peace = -1 Yi
```

---

# PART II: SWORN BROTHERHOOD (結義)

The Peach Garden Oath mechanic — binding yourself to others.

## SWEARING THE OATH

### Requirements
- Minimum 2, maximum 5 participants
- All must have Yi 3+
- Ritual: sacrifice (animal), incense, heaven as witness
- Declare: "We swear to live and die together"

### The Oath Creates

```
SWORN BROTHERHOOD: [Name of Oath]
Members: [names, birth order determines seniority]
Sworn: [when/where]
Status: Active

Elder Brother: [name] — leads, others defer
Younger Brothers: [names in order]
```

---

## HEROISM POOL

Sworn brothers share a HEROISM pool — legendary determination.

```
HEROISM: ○○○○○ (0/5)

Gaining Heroism:
+ Win heroic duel: +1
+ Complete legendary feat: +2
+ Fulfill difficult oath: +1
+ Victory against overwhelming odds: +2

Spending Heroism (any brother):
- Reroll failed roll: 1 point
- Auto-succeed morale save: 2 points
- Inspire army (+1 morale, one battle): 2 points
- Survive lethal blow (1 HP instead of 0): 3 points

Pool resets when all brothers reunite (1+ week together after separation).
Max spend per round: 2 points.
```

---

## OATH BENEFITS

### While Together (same scene/battle)
```
+ Advantage on morale saves
+ Sacrifice HP for brother: Once per battle, max 5 HP, requires line of sight
+ +2 to rolls helping sworn brother directly (Help action, protecting, healing)
+ Share Heroism pool (any brother can spend, max 2/round)
```

### While Apart
```
+ Sense brother's state: WIS DC 12 (once/day) → alive/dead, safe/endangered
+ When brother at 0 HP: Auto-know direction and distance (near/far/very far)
+ +1 to all rolls working toward reuniting
+ Brother's reputation affects yours (good and bad)
```

### Avenging a Brother
```
If sworn brother killed:
+ +2 to all combat rolls against killer
+ Disadvantage on rest recovery until avenged
+ If killer inaccessible for 1+ year: Obligation reduced (Yi -1 instead)
+ If killer dies by any means: Vengeance satisfied (Yi +1 if you participated, +2 if personal kill)
```

---

## BREAKING THE OATH

### What Counts as Breaking
- Betray brother directly
- Abandon brother in danger (when you could help)
- Kill brother
- Side with brother's enemy against them

### Consequences
```
OATHBREAKER status (PERMANENT):
- Yi immediately drops to 0 (cannot rise while OATHBREAKER)
- Former brothers get +4 to all rolls against you
- Each former brother has BLOOD DEBT: One auto-success against you (ever)
- -3 CHA with anyone honorable
- No one will swear new oaths with you

HEAVEN'S DISFAVOR (each session, roll d6):
1-2: Major misfortune (weapon breaks, ally betrays)
3-4: Minor misfortune (lose resource, bad timing)
5-6: No immediate consequence
```

### Dissolving Oath Honorably
Rare, requires:
- All brothers agree
- Valid reason (irreconcilable duty conflict)
- Ritual dissolution
- No oathbreaker status, but Yi -1 each

---

# PART III: STRATAGEMS (計)

Pre-planned tactics revealed at dramatic moments. Based on the 36 Stratagems.

## HOW STRATAGEMS WORK

### Preparing a Stratagem
1. Declare to GM (secretly) that you're preparing a stratagem
2. State the stratagem name and general plan
3. GM assigns preparation DC and cost based on complexity
4. Pay resource cost, roll INT to prepare

```
Preparation DC & Cost:
- Simple (ambush, feint): DC 8, 1 day, free
- Moderate (false intel, lure): DC 12, 2 days, 100 gold or 1 Supply
- Complex (long deception, multi-stage): DC 16, 4 days, 500 gold or 2 Supply
- Masterwork (legendary gambits): DC 20, 1 week, 1000 gold or 3 Supply

LIMITS:
- Max prepared stratagems = INT modifier (minimum 1)
- Preparing new one over limit erases oldest
- Military advisor: +1 slot, +2 to prep roll
```

### Triggering a Stratagem
When conditions are right, declare: "The stratagem activates!"

- If prepared successfully: Effect happens, roll for execution
- If preparation failed: Stratagem only partially works or backfires

### Execution Roll
```
INT or CHA (depending on stratagem) vs enemy WIS

Success: Full effect
Partial (within 3): Reduced effect
Fail: Enemy sees through it, may counter
```

---

## THE 36 STRATAGEMS (Selected)

### Winning Stratagems

| # | Name | Effect | Yi |
|---|------|--------|-----|
| 1 | **Deceive the Heavens** | False flag. Enemy thinks you're ally/neutral. Advantage on surprise. | -1 |
| 3 | **Kill with Borrowed Knife** | Manipulate third party to attack your enemy. | 0 |
| 4 | **Wait at Ease** | Let enemy exhaust themselves. +2 DEF, enemy disadvantage after 3 rounds. | 0 |
| 7 | **Create Something from Nothing** | Fake army/resources. Enemy reacts to nonexistent threat. | -1 |
| 10 | **Hide Knife Behind Smile** | Appear friendly, strike. Advantage on first attack. TREACHEROUS. | -2 |

### Battle Stratagems

| # | Name | Effect | Yi |
|---|------|--------|-----|
| 13 | **Beat Grass, Startle Snake** | Probe reveals enemy numbers, positions, morale. | 0 |
| 15 | **Lure Tiger from Mountain** | Draw enemy leader from advantageous position. | 0 |
| 17 | **Toss Brick, Attract Jade** | Small sacrifice bait. Enemy commits, you counter full force. | 0 |
| 22 | **Shut Door, Catch Thief** | Encirclement. Cut retreat. +2 to capture attempts. | 0 |
| 28 | **Remove Ladder After Ascent** | Trap enemy in position they entered. No escape. | -1 |

### Desperate Stratagems

| # | Name | Effect | Yi |
|---|------|--------|-----|
| 31 | **Beauty Trap** | Distract enemy leader. Disadvantage on WIS saves. TREACHEROUS. | -2 |
| 32 | **Empty Fort Strategy** | Bluff vs enemy WIS. Success = enemy retreats. Fail = they attack +2. | 0 |
| 34 | **Self-Injury Scheme** | Harm self for trust. +4 deception, take real damage. TREACHEROUS. | -2 |
| 35 | **Chain Stratagems** | Link 2-3 stratagems. First success: +2 to second. Second success: +1 to third. Max 3. | — |
| 36 | **Retreat is Best** | When losing, escape with honor. Auto-disengage, no opportunity attacks. | 0 |

**Yi Legend:** 0 = righteous/tactical, -1 = pragmatic deception, -2 = TREACHEROUS (Yi 7+ cannot use)

---

## COUNTER-STRATAGEMS

### Detecting Enemy Stratagems
When enemy triggers stratagem:
- Immediate WIS save vs enemy's preparation DC
- Intel advisor: Use advisor's INT instead, +2 bonus
- Success: Detect stratagem, may counter
- Partial (within 3): Know something's wrong, not what
- Fail: Stratagem proceeds

### Countering Detected Stratagems
If detected, spend your action:
- Roll INT vs enemy's execution roll
- Success: Stratagem negated
- Partial: Effect halved
- Fail: Stratagem proceeds, you wasted action

### Preparing Specific Counter
If you know enemy's favorite stratagem:
- Prepare counter in advance (same DC as original)
- When they use it: Auto-detect + advantage on counter
- Risk: If they don't use it, preparation wasted

### Limit
One counter-attempt per round. Intel advisor grants one extra attempt per battle.

---

# PART IV: HEROIC DUELS (單挑)

When generals meet on the battlefield, they may duel to decide morale.

## CALLING A DUEL

### Who Can Duel
- Named generals/heroes only
- Must have personal combat capability
- Can refuse (but consequences)

### Refusing a Duel
```
Refuse challenge from equal/lesser: Army morale -1, your Yi -1
Refuse challenge from greater: No penalty (wisdom, not cowardice)
Send champion: Must be named officer with Loyalty 3+
  - If champion loses: -1 morale (sent another to die)
  - If champion wins: Normal morale bonus
```

---

## DUEL STRUCTURE

### Rounds of Combat
Duels are measured in ROUNDS (bouts of exchanged blows).

```
Each round:
1. Both roll d20 + STR + weapon bonus
2. Higher roll wins the round
3. Winner deals damage OR gains advantage
4. Duel ends when:
   - One side yields
   - One side falls (0 HP)
   - Agreed number of rounds pass
```

### Round Victories

| Margin | Result |
|--------|--------|
| Win by 1-4 | Minor advantage: +1 next round |
| Win by 5-9 | Solid blow: Deal weapon damage |
| Win by 10+ | Devastating: Deal damage + enemy must save or yield |
| Natural 20 | Legendary blow: Double damage, army cheers (+1 morale) |
| Natural 1 | Fumble: Drop weapon or fall, disadvantage next round |

### Signature Weapons
Famous weapons grant significant bonuses:
```
GREEN DRAGON BLADE (Guan Yu 關羽):
  +3 to duel rolls
  vs Yi 3 or lower: +4 damage (righteous fury)
  Win by 8+: Enemy army -1 morale (terror)

SERPENT SPEAR (Zhang Fei 張飛):
  +2 to duel rolls
  Once per duel: Enemy rolls twice, takes lower (fearsome roar)
  Win by 12+: Enemy may flee immediately

SKY PIERCER (Lu Bu 呂布):
  +4 to duel rolls (peerless)
  Always roll with advantage (2d20 take higher)
  No one may refuse your challenge

TWIN SWORDS (Liu Bei 劉備):
  +2 to duel rolls
  When protecting someone: +4 total
  If you yield honorably: No morale loss to army
```

---

## DUEL OUTCOMES & ARMY MORALE

| Outcome | Your Army | Enemy Army |
|---------|-----------|------------|
| You win decisively | +2 morale | -2 morale |
| You win narrowly | +1 morale | -1 morale |
| Draw (both yield) | No change | No change |
| You lose narrowly | -1 morale | +1 morale |
| You lose decisively | -2 morale | +2 morale |
| Your general dies | -3 morale, retreat likely | +2 morale, may pursue |

---

# PART V: ADVISORS (軍師)

Strategists who guide lords to victory.

## ADVISOR TYPES

| Type | Specialty | Bonus |
|------|-----------|-------|
| **Military (武)** | Battle tactics, army command | +2 to stratagem prep, +1 army morale |
| **Civil (文)** | Governance, diplomacy, economy | +2 to negotiation, +1 supply |
| **Intelligence (探)** | Spies, information, counter-intel | +2 to detect stratagems, know enemy plans |

## ADVISOR LOYALTY

```
ADVISOR: [Name]
Type: Military / Civil / Intel
Loyalty: ●●●●○ (4/5)
```

### Loyalty Effects

| Loyalty | Behavior |
|---------|----------|
| 5 | Die for you. Gives best advice always. |
| 4 | Very loyal. Honest counsel. |
| 3 | Professional. May leave for better offer. |
| 2 | Wavering. Might sabotage if opportunity. |
| 1 | Looking to leave. May betray. |

### Affecting Loyalty
```
+1: Follow advisor's counsel successfully
+1: Reward/recognition publicly
+1: Protect advisor from danger
-1: Ignore advice, suffer for it
-1: Insult or disrespect
-1: Another lord makes better offer (if loyalty <4)
-2: Get advisor's family killed
```

## USING ADVISORS

### In Battle
Before battle, consult advisor:
- Military advisor: Reveals enemy formation, suggests counter
- Can use advisor's INT instead of yours for stratagem prep

### In Court
- Civil advisor: +2 to diplomacy rolls
- Can send advisor as envoy (their CHA, your authority)

### Intelligence
- Intel advisor: Roll to discover enemy stratagems before they trigger
- Network of spies (requires time, gold)

---

# PART VI: ARMY COMMAND (Simplified)

Abstract system for commanding forces.

## ARMY STATS

```
ARMY: [Name]
Commander: [General name]
Strength: ●●●●●○○○○○ (5000 troops = 5 points)
Morale: ●●●●○ (4/5)
Supply: ●●●○○ (3/5)
```

### Strength
Each ● = roughly 1000 troops. Loses ● when:
- Defeated in battle (1-3 ● depending on severity)
- Attrition (long march, disease): 1 ● per week without supply
- Desertions (low morale): 1 ● when morale hits 1

### Morale
Affects combat effectiveness:

| Morale | Effect |
|--------|--------|
| 5 | Elite. +2 to army combat rolls. |
| 4 | High. +1 to combat rolls. |
| 3 | Normal. No modifier. |
| 2 | Shaken. -1 to combat rolls. |
| 1 | Breaking. -2 to combat, may rout. |

### Supply
How long army can operate:

| Supply | Duration |
|--------|----------|
| 5 | Months of campaign. |
| 3 | Weeks of operation. |
| 1 | Days. Must resupply or starve. |
| 0 | Starving. -1 Strength and Morale per day. |

### Gaining Supply
```
Resupply from friendly territory: +1 Supply per week resting
Foraging (INT DC 12): +1 Supply (DC 15 in enemy territory)
  - Failed foraging: Peasants hostile, -1 Yi
Supply lines: Declare line to home, auto +1/week
  - Vulnerable: Enemy can attack (opposed INT to sever)
Looting: Auto +1 Supply, but -1 Yi, territory turns hostile
```

### Army Recovery
```
Rest in friendly territory: +1 Strength per week (costs 100 gold)
Hire mercenaries: Instant +1 Strength (200 gold), max Morale 3
Levy peasants: +1 Strength per 2 weeks (50 gold), start Morale 2
Territory limit: Small = max 3, Medium = 5, Large = 8
```

---

## BATTLE RESOLUTION

### Quick Battle
When armies clash:

```
Roll: d20 + Commander INT + Morale + Terrain modifiers

Compare both sides:
- Winner by 5+: Decisive victory (enemy -2 Strength, -2 Morale)
- Winner by 1-4: Minor victory (enemy -1 Strength, -1 Morale)
- Tie: Stalemate (both -1 Strength)
```

### Modifiers

| Factor | Modifier |
|--------|----------|
| Defender in fortification | +3 |
| Favorable terrain | +2 |
| Outnumber 2:1 | +2 |
| Outnumber 3:1+ | +4 |
| Stratagem success | +2 to +4 |
| General duel won | +1 |
| Superior advisor | +1 |
| Ambush/surprise | +3, enemy no morale bonus |

---

## SIEGE

### Siege Clock
```
SIEGE OF [City]
Fall: ○○○○○○ (0/6)
```

Attacker actions to advance clock:
- Assault walls: Roll vs Defense DC, success = +1
- Starve out: Each week without relief = +1
- Stratagem (tunnel, treachery, etc.): +1 to +3
- Convince surrender: CHA vs defender WIS, success = +2

Defender actions:
- Sally forth: If win battle, -1 from clock
- Get relief: Allied army arrives, siege broken
- Hold out: High morale delays clock advancement

At 6/6: City falls.

---

# PART VII: INTEGRATION

## Yi + Everything
```
Yi 7+: +1 Supply/month friendly territory, cannot use TREACHEROUS stratagems
Yi 4-6: Flexible, pick 1 High/Low benefit per session
Yi 1-3: -1 Supply hostile territory, intimidation advantage, cheap stratagems
Yi 0: Oaths worthless, only mercenaries/bandits follow you
```

## Oaths + Duels
- Sworn brothers: 2v1 duel allowed, enemy can refuse (no shame — unfair fight)
- If 2v1: Both brothers roll, enemy defends vs higher
- Must avenge brother killed in duel (+2 vs killer)

## Stratagems + Army Battle
```
Stratagem success bonus to battle roll:
- Simple (DC 8): +2
- Moderate (DC 12): +3
- Complex (DC 16): +4
- Masterwork (DC 20): +5
Multiple stratagems don't stack unless Chain Stratagems (#35)
```

## Duels + Army Morale
- Duel morale changes apply BEFORE battle roll
- If morale would exceed 5: Excess = +1 to battle roll
- If morale would drop below 1: Commander WIS save or rout

## Advisors
- Military: +2 stratagem prep, +1 army morale, +1 stratagem slot
- Civil: +2 diplomacy, +1 Supply capacity
- Intel: +2 detect stratagems, extra counter-attempt per battle

---

# PART VIII: HISTORICAL TIMELINE

## KEY EVENTS

```
184 — YELLOW TURBAN REBELLION. "Blue Heaven dies, Yellow Heaven rises!"
       Han mobilizes warlords. Fatal mistake.
189 — Emperor Ling dies. Dong Zhuo seizes capital.
192 — Dong Zhuo assassinated by Lu Bu.
196 — Cao Cao "welcomes" Emperor. Controls government.
200 — BATTLE OF GUANDU. Cao Cao defeats Yuan Shao (10:1 odds).
208 — BATTLE OF RED CLIFFS. Cao Cao's invasion halted.
219 — Guan Yu dies. Fan Castle campaign fails.
220 — Cao Pi forces abdication. WEI founded.
221 — Liu Bei declares SHU-HAN. Revenge campaign vs Wu.
222 — BATTLE OF YILING. Lu Xun burns Liu Bei's army.
223 — Liu Bei dies. Zhuge Liang regent.
234 — Zhuge Liang dies at Wuzhang Plains.
263 — Wei conquers Shu.
280 — Jin conquers Wu. Reunification.
```

## CAMPAIGN STARTING POINTS

| Year | Situation | Recommended For |
|------|-----------|-----------------|
| 184 | Yellow Turban chaos | Origin stories, rising heroes |
| 190 | Coalition vs Dong Zhuo | Classic start, all factions |
| 200 | Guandu campaign | Strategic focus |
| 208 | Red Cliffs | Iconic battle, alliance drama |
| 228 | Northern Expeditions | Desperate Shu gambles |

## WHY THE HAN FELL

```
The Emperor is a child. Eunuchs rule.
The land is dying: floods, locusts, famine, plague.
Warlords raise private armies to fight Yellow Turbans.
Once raised, armies don't disband.
Central authority evaporates.
Anyone with troops is king.
```

---

# PART IX: NPC GENERATOR

## QUICK OFFICER (d6 each)

```
ROLE:       1-2 Warrior | 3-4 Strategist | 5-6 Administrator
TIER:       1-2 Green (Duel 11) | 3-4 Veteran (Duel 14) | 5-6 Elite (Duel 16)
LOYALTY:    1 Treacherous | 2-3 Wavering | 4-5 Loyal | 6 Devoted
YI:         1 Treacherous | 2-3 Low | 4-5 Normal | 6 Righteous
MOTIVATION: 1 Revenge | 2 Wealth | 3 Power | 4 Loyalty | 5 Honor | 6 Family

STAT ARRAY by role:
Warrior:     STR 4, INT 2, CHA 2
Strategist:  STR 2, INT 4, CHA 3
Administrator: STR 2, INT 3, CHA 4
```

## CHINESE NAME GENERATOR

### Surnames (d12)
| d12 | Surname | Famous |
|-----|---------|--------|
| 1 | Liu 劉 | Liu Bei |
| 2 | Cao 曹 | Cao Cao |
| 3 | Sun 孫 | Sun Quan |
| 4 | Zhang 張 | Zhang Fei |
| 5 | Guan 關 | Guan Yu |
| 6 | Zhao 趙 | Zhao Yun |
| 7 | Ma 馬 | Ma Chao |
| 8 | Huang 黃 | Huang Zhong |
| 9 | Zhou 周 | Zhou Yu |
| 10 | Xu 徐 | Xu Huang |
| 11 | Wei 魏 | Wei Yan |
| 12 | Chen 陳 | Chen Gong |

### Given Names — Warriors (d8)
| d8 | Name | Meaning |
|----|------|---------|
| 1 | Yong 勇 | Brave |
| 2 | Wei 威 | Mighty |
| 3 | Long 龍 | Dragon |
| 4 | Hu 虎 | Tiger |
| 5 | Fei 飛 | Flying |
| 6 | Wu 武 | Martial |
| 7 | Zhong 忠 | Loyal |
| 8 | Gang 剛 | Strong |

### Given Names — Scholars (d8)
| d8 | Name | Meaning |
|----|------|---------|
| 1 | Wen 文 | Literary |
| 2 | Zhi 智 | Wisdom |
| 3 | Ming 明 | Bright |
| 4 | De 德 | Virtue |
| 5 | Liang 亮 | Brilliant |
| 6 | An 安 | Peace |
| 7 | Xuan 玄 | Mysterious |
| 8 | Yuan 遠 | Far-reaching |

## PERSONALITY (d6)

| d6 | Archetype | Behavior |
|----|-----------|----------|
| 1 | Righteous Warrior | Honor above all, keeps oaths |
| 2 | Passionate Tiger | Emotions rule, fierce loyalty |
| 3 | Cunning Fox | Plans within plans, patient |
| 4 | Ambitious Dragon | Power is the goal |
| 5 | Noble Wanderer | Seeking worthy cause |
| 6 | Bitter Veteran | Underestimated, dangerous |

---

# PART X: LEGENDARY FIGURES (名將)

Quick stats for famous characters. Use as NPCs or inspiration.

## THE WARLORDS

```
CAO CAO 曹操 — "Hero of Chaos" (Wei)
  Yi: 4 | INT 5 | CHA 4 | Troops: Largest
  Trait: Supreme Strategist (+3 prep), Ruthless Pragmatism
  Quote: "I'd rather betray the world than let it betray me."

LIU BEI 劉備 — "Uncle Liu" (Shu)
  Yi: 9 | INT 3 | CHA 5 | Troops: Smallest
  Trait: Imperial Blood (+3 CHA with loyalists), Attracts Heroes
  Quote: "The people are the foundation of the state."

SUN QUAN 孫權 — "Young Tiger" (Wu)
  Yi: 6 | INT 4 | CHA 4 | Troops: Naval
  Trait: Naval Supremacy (+3 river battles), Patient Ruler
  Quote: "A wise man adapts to circumstances."
```

## THE GENERALS

### Shu — Five Tiger Generals

```
GUAN YU 關羽 — God of War
  Duel: 18 | Yi: 10 | Weapon: Green Dragon Blade (+3)
  Special: Win by 8+ = enemy army -1 morale
  Weakness: Pride. -2 WIS vs flattery about his skill.

ZHANG FEI 張飛 — The Panther Head
  Duel: 17 | Yi: 7 | Weapon: Serpent Spear (+2)
  Special: Thunderous Roar — enemies WIS DC 15 or -1 morale
  Weakness: Beats soldiers. Officers may assassinate.

ZHAO YUN 趙雲 — The Dragon
  Duel: 16 | Yi: 9 | Weapon: Dragon Courage Spear (+2)
  Special: Seven In Seven Out — escape any encirclement
  Weakness: None recorded. Too modest to seize glory.

MA CHAO 馬超 — The Splendid
  Duel: 17 | Yi: 5 | Weapon: Western Spear (+2)
  Special: Western Cavalry (+2 mounted)
  Weakness: Vengeance-driven. Easily baited.

HUANG ZHONG 黃忠 — The Old General
  Duel: 15 | Yi: 7 | Weapon: Iron Bow (+4 ranged)
  Special: Master Archer — can target specific body parts
  Weakness: Pride in his vitality. Takes unnecessary risks.
```

### Wei — Elite Commanders

```
XIAHOU DUN 夏侯惇 — Blind Warrior
  Duel: 15 | Yi: 7 | Special: Ate own eye. Legendary resolve.

XU CHU 許褚 — Tiger Fool
  Duel: 17 | Yi: 5 | Special: +2 defending Cao Cao

ZHANG LIAO 張遼 — Terror of Hefei
  Duel: 16 | Yi: 6 | Special: +3 vs superior numbers
```

### Wu — River Lords

```
ZHOU YU 周瑜 — The Handsome
  INT: 5 | Yi: 7 | Type: Military + Civil
  Special: Naval Genius (+4 water stratagems), Fire Master
  Weakness: Jealousy of Zhuge Liang. WIS -2 vs him.

GAN NING 甘寧 — Bells of Terror
  Duel: 15 | Yi: 4 | Special: Pirate +2 naval, intimidation
```

### The Peerless

```
LU BU 呂布 — Flying General
  Duel: 21 (HIGHEST) | Yi: 1 | Weapon: Sky Piercer (+4)
  Special: Cannot be defeated 1v1. Took three brothers to fight.
  Weakness: Beautiful women. WIS -4 vs Beauty Trap.
  Fatal Flaw: No loyalty. Eventually captured and executed.
```

## THE STRATEGISTS

```
ZHUGE LIANG 諸葛亮 — Sleeping Dragon
  INT: 6 | Yi: 10 | Type: ALL THREE
  Special: +4 stratagem prep, Empty Fort auto-success (1/campaign)
  Weakness: Cannot delegate. Burns himself out.

SIMA YI 司馬懿 — Hidden Wolf
  INT: 5 | Yi: 3 | Type: Military + Intel
  Special: Patience of Decades (+3 defensive), Counter-Strategist (+3)
  Legacy: His descendants founded Jin Dynasty.

GUO JIA 郭嘉 — The Ghost
  INT: 5 | Yi: 5 | Type: Intel + Military
  Special: Ten Victories, Ten Defeats — predicted Yuan Shao perfectly
  Legacy: "If Guo Jia had lived, I would not have lost at Red Cliffs."
```

---

# PART XI: GEOGRAPHY (地理)

## THE THREE KINGDOMS — TERRITORIES

```
WEI (北) — NORTH
Provinces: Ji, Yan, Qing, Xu, Yu, Bing, You, Liang, Si
Capital: Luoyang (legitimacy), Xuchang (Cao Cao's base)
Strength: Population, cavalry, plains warfare
Weakness: Multiple frontiers, nomad raids

SHU (蜀) — SOUTHWEST
Provinces: Yi, Hanzhong, Nanzhong
Capital: Chengdu
Strength: Mountain defense (+3), self-sufficient
Weakness: Small population, hard to project power

WU (吳) — SOUTHEAST
Provinces: Yang, Jing (contested), Jiao
Capital: Jianye
Strength: Naval supremacy (+3 river), wealthy
Weakness: Mountains fragment territory, malaria
```

## STRATEGIC PASSES

| Pass | Location | Defense | Note |
|------|----------|---------|------|
| Hulao (虎牢) | East of Luoyang | +5 | "Tiger Trap" — Lu Bu's stand |
| Jiange (劍閣) | Yi Province gate | +5 | "Sword Pavilion" — 10,000 hold 100,000 |
| Jieting (街亭) | Hanzhong-Wei | +3 | Lost by Ma Su. Zhuge Liang's failure. |

```
Pass mechanics:
- Defender ignores enemy outnumber bonus
- Attacker cannot flank
- Siege rules apply (4 segments max)
- Bypass (INT DC 16): Emerge behind, -1 Morale, -1 Supply
```

## MAJOR RIVERS

| River | Effect |
|-------|--------|
| Yangtze (長江) | Naval barrier. Non-naval armies cannot cross. Wu +3. |
| Yellow River (黃河) | Floods unpredictably. Can flood as weapon (-2 Yi). |
| Han River (漢水) | Trade artery. +1 Supply to connected territories. |

## FAMOUS BATTLEFIELDS

```
RED CLIFFS (赤壁) — 208 AD
  Fire stratagem +3 here. "We defeated Cao Cao!"

GUANDU (官渡) — 200 AD
  Supply raid stratagem +2. "Yuan Shao fell with 100,000."

CHANGBAN (長坂) — 208 AD
  Single champion holding bridge: Duel +2. Zhang Fei's stand.

YILING (夷陵) — 222 AD
  Fire stratagem +4. Liu Bei's nightmare.
```

---

# PART XII: RANDOM TABLES

## COURT INTRIGUE (d20)

| d20 | Event | Consequence |
|-----|-------|-------------|
| 1 | Poisoned Wine | WIS DC 14 to notice. Fail: CON DC 15 or -3 HP/day |
| 2-3 | Forged Imperial Edict | INT DC 14 to spot. False orders may trap army. |
| 4-5 | Rival's Feast | Refuse: -1 Yi. Attend: Stratagem risk. |
| 6-7 | Defector Arrives | 70% genuine, 30% spy. INT DC 13. |
| 8-9 | Slander Campaign | Yi -1 temp. Counter: CHA DC 14 or public deed. |
| 10-11 | Alliance Betrayal | Discover: INT DC 14. Or suffer surprise. |
| 12-13 | Marriage Proposal | Accept: +2 relations. Refuse: -1 Yi, offend. |
| 14-15 | Assassination Attempt | DEX DC 13. Fail: 2d6 damage. |
| 16-17 | Scholar's Protest | Hear: +1 next political roll. Ignore: -1 Yi. |
| 18-19 | Mandate of Heaven Signs | Interpret (CHA DC 12): +1 morale. Fail: unrest. |
| 20 | Coup Attempt | Combat in throne room. Next 3 rounds decide. |

## CAMPAIGN COMPLICATIONS (d20)

| d20 | Event | Effect |
|-----|-------|--------|
| 1-2 | Disease Outbreak | -1 Strength/week until WIS DC 14 |
| 3-4 | Supply Ambushed | -2 Supply. Pursue: INT DC 12 to recover 1. |
| 5-6 | Mutiny Brewing | CHA DC 13. Fail: -1 Morale, demands. |
| 7-8 | Defection Risk | CHA DC 14. Fail: Officer leaves with troops. |
| 9-10 | Impassable Terrain | Detour +1 week, -1 Supply. Or INT DC 14. |
| 11-12 | Spy Discovered | Interrogate INT DC 12: Learn enemy plans. |
| 13-14 | Key Officer Wounded | Out 1d4 weeks. |
| 15-16 | Intelligence Leak | Next stratagem auto-detected. |
| 17-18 | False Intelligence | Next battle: Suffer surprise (-2 init). |
| 19 | Enemy Champion | Must duel or -2 Morale. +3 duel rolls. |
| 20 | Enemy Reinforcements | +2 Strength before next battle. |

## ROAD ENCOUNTERS (d12)

| d12 | Encounter |
|-----|-----------|
| 1 | Refugees — news of danger ahead, +1 Yi if helped |
| 2 | Bandits (weak) — 2d4 desperate men, flee from strength |
| 3 | Bandits (strong) — 2d6 organized, demand 100 gold toll |
| 4 | Military Patrol (friendly) — news, escort |
| 5 | Military Patrol (hostile) — avoid DC 12 or fight |
| 6 | Traveling Scholar — +2 next knowledge roll |
| 7 | Wandering Warrior — duel (+1 Heroism) or hire |
| 8 | Wayside Shrine — pray: +1 next important roll |
| 9 | Enemy Deserters — intel (INT DC 11) |
| 10 | Famous Figure (disguised) — recognition DC 15 |
| 11 | Merchant Caravan — trade, +1 Supply for 50 gold |
| 12 | Heavenly Omen — interpret (WIS DC 12): +1 morale |

---

# PART XIII: QUICK REFERENCE

## Famous Figures Quick
```
TOP DUELISTS: Lu Bu (21), Guan Yu (18), Zhang Fei/Ma Chao (17), Zhao Yun (16)
TOP STRATEGISTS: Zhuge Liang (INT 6), Sima Yi/Zhou Yu/Guo Jia (INT 5)
TOP COMMANDERS: Cao Cao (pragmatic), Liu Bei (righteous), Sun Quan (naval)
```

## Yi at a Glance
```
7+: +2 CHA recruit, +1 Supply/month, NO treacherous stratagems
4-6: Flexible (pick 1 High/Low benefit per session)
1-3: -2 CHA virtuous, +2 schemers, intimidation adv, cheap stratagems
0: Oaths worthless, only mercenaries follow
```

## Heroism Pool
```
Shared by sworn brothers. Max 5. Spend max 2/round.
Reroll: 1pt | Auto morale save: 2pt | Survive lethal: 3pt
Gain: Win duel +1, legendary feat +2, fulfill oath +1
```

## Oath Benefits
```
Together: Advantage morale, sacrifice HP (1/battle, max=level), +2 help
Apart: Sense state (WIS DC 12/day), auto-know if dying
Broken: Yi → 0, former brothers +4 vs you, blood enemies
```

## Stratagems Quick
```
Prep: INT vs DC (8/12/16/20), costs time + gold/Supply
Max prepared = INT mod. Trigger = action.
Yi cost: 0 (tactical), -1 (deceptive), -2 (TREACHEROUS)
Counter: WIS vs prep DC to detect, INT vs execution to negate

TREACHEROUS (Yi 7+ cannot use): #10 Hide Knife, #31 Beauty Trap, #34 Self-Injury
```

## Duel Quick
```
d20 + STR + weapon, higher wins round
Win by 5+: Deal damage
Win by 10+: Damage + yield save
Signature weapons: +2 to +4, special abilities
```

## Army Quick
```
Strength: troops (5 = 5000), recover +1/week (100g)
Morale: 5 elite (+2) to 1 breaking (-2)
Supply: 5 months to 0 starving, resupply +1/week
Battle: d20 + INT + Morale + mods, winner by margin
```

---

*"The empire, long divided, must unite; long united, must divide." — Romance of the Three Kingdoms, opening line*
