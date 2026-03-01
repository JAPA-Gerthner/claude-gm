# Ruleset Designer

Entry point for developing and maintaining rulesets in gm-skill.

---

## Target Metrics

| Metric | Target | Notes |
|--------|--------|-------|
| Lines | 1000-1100 | Optimal depth without bloat |
| Tokens | ~6-8k | ~3-4% of 200k context |
| Language | English | Storage only, play in Russian |

---

## Development Pipeline v1.0

### PHASE 1: Research (9 agents in parallel)

```
3x LORE EXPERTS:
  #1: History, key events, timeline
  #2: Factions, characters, culture
  #3: Geography, locations, setting

3x GM EXPERTS:
  #1: NPC templates, encounter hooks
  #2: Random tables, events
  #3: Campaign structures, session tools

3x MECHANICS EXPERTS:
  #1: Core systems, stats, progression
  #2: Combat, equipment, damage
  #3: Special systems (unique to setting)
```

**Output:** Each agent proposes specific content with line estimates.

### PHASE 2: Synthesis

- Merge all 9 agent outputs
- Remove duplicates and conflicts
- Structure into coherent ruleset
- Check line count (~1000-1100)

### PHASE 3: Review (3 agents in parallel)

```
1x LORE REVIEWER:    Accuracy, authenticity, missing essentials
1x GM REVIEWER:      Usability, table-readiness, tools
1x MECHANICS REVIEWER: Balance, completeness, edge cases
```

**Output:** Score (X/10) + Top 3 issues per reviewer.

### PHASE 4: Polish

- Fix issues from reviewers
- Final line count check
- Update README if needed

---

## Ruleset Structure Template

```markdown
# [SETTING NAME]

Brief description. For: [campaign types].

---

## SETTING OVERVIEW
- Era, themes, tone
- Key concepts

## REGIONS/GEOGRAPHY
- Major locations
- Travel, dangers

## PLAYABLE FACTIONS
- Archetypes, bonuses, specials
- Faction-specific mechanics

## CORE MECHANICS
- Unique systems for this setting
- How they integrate with gm-skill.md

## [SETTING-SPECIFIC SYSTEM]
- Corruption / Honor / Hunger / etc.
- Gain/loss tables
- Effects and thresholds

## COMBAT / EQUIPMENT
- Weapon tables (if applicable)
- Armor, gear
- Special rules

## FACTION RELATIONS
- Reputation system
- Attitude matrix

## EVENTS
- Downtime events (d20 or d10)
- Mission complications

## GM TOOLS
- NPC templates
- Random tables
- Quick reference

---

*Closing thematic quote.*
```

---

## Quality Checklist

Before marking ruleset complete:

- [ ] Lines: 1000-1100
- [ ] All playable factions covered
- [ ] Core unique mechanic fully implemented
- [ ] Weapon/equipment stats (if combat-heavy)
- [ ] NPC templates (3-5 minimum)
- [ ] Random tables (2-3 minimum)
- [ ] Quick reference section
- [ ] No lore errors (verified by expert)
- [ ] Balanced mechanics (no death spirals)
- [ ] GM-usable at table without prep

---

## Current Rulesets Status

| Ruleset | Lines | Status | Notes |
|---------|-------|--------|-------|
| sengoku.md | 1103 | **COMPLETE** | Full pipeline: 9 research + 3 review + polish |
| sanguo.md | 1047 | **COMPLETE** | Full coverage |
| battletech-commander.md | 1060 | **COMPLETE** | Full coverage |
| vtm.md | 1099 | **COMPLETE** | Full coverage |
| warhammer-fantasy.md | 1133 | **COMPLETE** | Full pipeline: combat, NPCs, Fate/Fear/Insanity |
| warhammer-40k.md | 1064 | **COMPLETE** | Full coverage |
| pirates.md | 1012 | **COMPLETE** | Full pipeline: 9 research + 3 review + polish |
| witcher.md | 1125 | **COMPLETE** | Full pipeline: Sapkowski+CDPR, merged NPC templates |
| cyberpunk-red.md | 1064 | **COMPLETE** | Full pipeline: R. Talsorian 2020/RED/2077, 10 roles, netrunning, humanity |
| shadowrun-lite.md | 1023 | **COMPLETE** | Full pipeline: 9 research + 3 review + polish |
| frostpunk.md | 1134 | **COMPLETE** | Full pipeline: City as Entity, Temperature Clock, Hope/Discontent, Laws (Order/Faith), Two play modes |
| blades-lite.md | 1115 | **COMPLETE** | Full pipeline: Crew/Score/Heat, Stress/Trauma, Doskvol, Factions, Occult |

---

## Planned Rulesets (Roadmap)

Порядок разработки. Описание — контекст для будущих сессий.

| Сеттинг | Уникальные механики | Описание / Контекст |
|---------|---------------------|---------------------|
| **deus-ex.md** | Augmentation vs Humanity, ВСЕ conspiracy theories как лор (Illuminati, MJ-12, Area 51), Near-future realism | Near-future (2020-2050). Ключевое: ВСЕ реальные conspiracy theories — правда. Illuminati, MJ-12, Bilderberg, Area 51, JFK, chemtrails, deep state — всё существует. Игроки — агенты или беглецы. Augmentation с Humanity cost как в cyberpunk-red. Стелс/социалка важнее combat. |
| **dark-souls.md** | Bonfire/death loop, Stamina management, Boss phases, Souls = XP + валюта, Humanity/Hollowing | УНИКАЛЬНАЯ механика. Смерть = откат к bonfire, но мир помнит (двери открыты, NPC сдвинулись). Souls теряются при смерти, можно вернуть. Stamina pool на ВСЕ действия (атака, блок, ролл). Боссы: 2-3 фазы, telegraphed attacks, паттерны. Hollow/Human статус влияет на мир. Estus = ограниченное лечение. Covenants = фракции. Grim, lonely, cryptic lore. |
| **scp.md** | Containment procedures, [REDACTED] механика, Clearance levels, GOIs (Chaos Insurgency, Church of Broken God), Anomaly classification | Современный процедурный хоррор. Игроки — Foundation personnel (D-class, researchers, MTF). Clearance level = что знаешь. [REDACTED] механика: GM скрывает инфу буквально. Anomalies с классами (Safe/Euclid/Keter). GOIs как фракции. Бюрократия защищает от ужаса — нарушил протокол = последствия. |
| **cthulhu.md** | Sanity system (ключевая!), Investigation phases, Forbidden knowledge cost, Helplessness | Классический cosmic horror. Sanity вместо/параллельно HP — знание = потеря рассудка. Investigation loop: clues → research → confrontation → cost. Helplessness — combat НЕ решение, монстры непобедимы. Много реализаций существует — сделать компактно, без bloat. 1920s или modern. |
| **star-wars.md** | Light/Dark points, Force powers, Era selection (Old Republic/Empire/Sequels) | Force как спектр Light↔Dark с механическими последствиями. Era selection в session zero (Old Republic, Clone Wars, Empire, New Republic, Sequels). Джедаи/Ситхи vs обычные персонажи — баланс нужен. Много существующих систем — взять лучшее, не изобретать. Фракции зависят от эры. |
| **stalker.md** | Аномалии, Артефакты, Выбросы, Радиация, Фракции Зоны | Чернобыльская Зона отчуждения. Идеально для Claude-GM: ограниченное пространство, одиночки/малые группы, не надо симулировать армии. Фракции: Долг, Свобода, Одиночки, Бандиты, Военные, Монолит, Учёные, Наёмники. Аномалии как физические головоломки. Артефакты = loot с выбором (носить vs продать). Выбросы = periodic tension. Серьёзный пост-апок без grimderp. |
| **road-warrior.md** | Vehicle as Character, Fuel Economy, Tribal Factions, Brutal Car Combat | Mad Max style пост-апок. **КЛЮЧЕВОЕ: машина = прокачиваемый персонаж** (броня, оружие, двигатель, экипаж). Лор генерируется на ходу — НЕ привязываться к фильмам/каноничным фракциям. Локации разнообразные: пустыни, вымершие города-руины, радиоактивные леса, замёрзшие пустоши. География вдохновлена США/Канадой. Брутальный экшен: бои на движущихся машинах, обрезы в притык, карлики с взрывчаткой. Fuel/Water/Ammo как ресурсы. |
| **disco-elysium.md** | SKILLS AS INNER VOICES, Thought Cabinet, Ideology system, Dialogue-heavy | Уникальнейшая механика: 24 Skills = внутренние голоса/личности (Electrochemistry хочет наркотики, Authority хочет доминировать, Inland Empire видит мистику). Thought Cabinet = мысли которые "устанавливаешь" и они дают бонусы/штрафы. 4 идеологии (Communism, Fascism, Moralism, Ultraliberalism) влияют на диалоги. МИНИМУМ БОЁВКИ — всё через диалоги и внутренние чеки. Детектив-амнезиак в разрушенном городе. Референс: оригинальная игра, никаких аналогов. |

---

## Agent Prompt Templates

### Research Agent (Lore/GM/Mechanics)

```
You are a [LORE/GM/MECHANICS] EXPERT for [SETTING].

Read: C:\Workspace\gm-skill\rulesets\[file].md

Current: X lines. Target: ~1000-1100 lines.

Your focus area: [specific focus]

Propose SPECIFIC content to add. Include:
- Exact text formatted for the ruleset
- Line estimates per section
- Priority (critical/important/nice-to-have)

Output format:
### [Section Name] (~X lines)
[Actual content to add]
```

### Review Agent

```
You are a [LORE/GM/MECHANICS] REVIEWER for [SETTING].

Read: C:\Workspace\gm-skill\rulesets\[file].md

Review for [accuracy/usability/balance].

Grade each major section (1-10).
Identify TOP 3 issues to fix.
Verdict: Ready / Needs work
```

---

## Changelog

| Date | Ruleset | Change |
|------|---------|--------|
| 2026-02-27 | frostpunk.md | Full pipeline: NEW 1134 lines, City as Entity, Temperature Clock, Hope/Discontent, Laws (Order/Faith), Two play modes, Individual Mode HP/AC |
| 2026-02-27 | shadowrun-lite.md | Full pipeline: NEW 1023 lines, Magic+Cyber+Corps, Quick-Jack Matrix, Technomancers, Contacts, Vehicles |
| 2026-02-27 | cyberpunk-red.md | Full pipeline: NEW 1064 lines, R. Talsorian 2020/RED/2077, 10 roles, Quick-Jack netrunning, humanity/cyberpsychosis |
| 2026-02-27 | witcher.md | Full pipeline: 1044→1125, merged witcher-npcs.md, detailed school templates, canon witchers, contract givers |
| 2026-02-26 | pirates.md | Full pipeline: NEW 1012 lines, Golden Age of Piracy fantasy, ships, naval combat, bestiary, voodoo |
| 2025-02-26 | warhammer-fantasy.md | Full pipeline: 707→1133, added combat/weapons/armor, Fate/Fortune/Fear/Insanity, NPCs, Halflings |
| 2025-02-26 | sengoku.md | Full pipeline: 708→1103, fixed stats (1-5 scale), added Date/Mori clans, balanced stances, fixed exploits |
| 2024-XX-XX | vtm.md | Expanded 418→1099, added mythology, sects, mechanics |
| 2024-XX-XX | warhammer-40k.md | Created 1064 lines, full Imperial/Chaos/Xenos |
| 2024-XX-XX | battletech-commander.md | Expanded 657→1060, added Houses, mechs, NPCs, tables |
| 2024-XX-XX | sanguo.md | Expanded 693→1047, added figures, geography, tables, NPC gen |
