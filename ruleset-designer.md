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
- Update README with ruleset description

### PHASE 5: Tier Evaluation

Launch evaluation agent to rate the ruleset:

```
Criteria:
- Unique mechanics that fit the setting
- Atmosphere and tone tools
- Playability and clarity
- Depth vs complexity balance

Rating: S/A/B/C/D/F
- S = exemplary ruleset design
- A = strong, minor issues
- B = needs work
- C/D = significant problems
- F = full rework needed
```

**Output:** Add to README.md Tier List with 1-sentence reasoning.

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
| cursed-seas.md | 1012 | **COMPLETE** | Full pipeline: 9 research + 3 review + polish |
| witcher.md | 1125 | **COMPLETE** | Full pipeline: Sapkowski+CDPR, merged NPC templates |
| cyberpunk-red.md | 1064 | **COMPLETE** | Full pipeline: R. Talsorian 2020/RED/2077, 10 roles, netrunning, humanity |
| shadowrun-lite.md | 1023 | **COMPLETE** | Full pipeline: 9 research + 3 review + polish |
| frostpunk.md | 1134 | **COMPLETE** | Full pipeline: City as Entity, Temperature Clock, Hope/Discontent, Laws (Order/Faith), Two play modes |
| blades-lite.md | 1115 | **COMPLETE** | Full pipeline: Crew/Score/Heat, Stress/Trauma, Doskvol, Factions, Occult |
| deus-ex.md | 1075 | **COMPLETE** | Full pipeline: Paranoia System (Trust Clocks, Suspicion, Chaos Principle), Integration, Neuropozyne |
| scp.md | 1187 | **COMPLETE** | Full pipeline: Usefulness/Liability, Processing Clock, O5 Council (13), Hume Levels, Anomaly Engagement |
| cascade.md | 1502 | **COMPLETE** | Full pipeline: Cinematic Dieselpunk, Adrenaline system, 4 crystal colors, chimera transformations, 7 regions, 6 Roles |
| cthulhu.md | 1008 | **COMPLETE** | Full pipeline: Three Axes (Reality/Time/Identity), Deception Budget, Mythos Knowledge anti-XP, 9 End States, 6 Roles |
| stalker.md | 1092 | **COMPLETE** | Full pipeline: Emission/Zombification Clocks, Radiation tracking, 10 factions, Job Cycle, "Reach the Center" campaign |
| star-wars.md | 1086 | **COMPLETE** | Full pipeline: Era selection, Force Alignment/Strain/Temptation, 5 Campaign Frameworks, GRIT system, Vehicle combat |
| dark-souls.md | 898 | **COMPLETE** | Full pipeline: Telegraph System, Hollowing Track, Death Loop, Stamina, Phase bosses, S-Tier |

---

## Planned Rulesets (Roadmap)

Порядок разработки. Описание — контекст для будущих сессий.

| Сеттинг | Уникальные механики | Описание / Контекст |
|---------|---------------------|---------------------|
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
| 2026-03-05 | dark-souls.md | Full pipeline: NEW 898 lines, Telegraph System (GM describes tell before attack), Hollowing Track, Death Loop with Soul Echo, Stamina system, Phase bosses, Weapon upgrades/infusions, Status buildup, 7 Covenants, S-Tier |
| 2026-03-05 | star-wars.md | Full pipeline: NEW 1086 lines, Era selection, Force Alignment/Strain/Temptation, 5 Campaign Frameworks (Rebel/Smuggler/Bounty/Jedi/Mandalorian), GRIT system, 8 Roles, Vehicle combat with shields/boarding, S-Tier |
| 2026-03-05 | stalker.md | Full pipeline: NEW 1092 lines, Emission/Zombification Clocks, Radiation tracking, 10 factions, 11 NPC templates, Job Cycle, "Reach the Center" 20-session campaign |
| 2026-03-03 | cthulhu.md | Full pipeline: NEW 1008 lines, Three Axes (Reality/Time/Identity), Deception Budget, Mythos Knowledge, 9 End States, 6 Roles with stat arrays |
| 2026-03-03 | cascade.md | Full pipeline: NEW 1502 lines, Cinematic Dieselpunk (replaces road-warrior concept), Adrenaline system, 4 crystal colors, chimera transformations, 7 regions, 6 Roles |
| 2026-03-02 | scp.md | Full pipeline: NEW 1187 lines, Bureaucratic Horror, Usefulness/Liability, Processing Clock, O5 Council (13), Hume Levels, Anomaly Engagement, Starter Scenario |
| 2026-03-02 | deus-ex.md | Full pipeline: NEW 1075 lines, Paranoia System (Trust Clocks, Suspicion, Chaos Principle), Integration/Neuropozyne, 8 NPC templates |
| 2026-02-27 | frostpunk.md | Full pipeline: NEW 1134 lines, City as Entity, Temperature Clock, Hope/Discontent, Laws (Order/Faith), Two play modes, Individual Mode HP/AC |
| 2026-02-27 | shadowrun-lite.md | Full pipeline: NEW 1023 lines, Magic+Cyber+Corps, Quick-Jack Matrix, Technomancers, Contacts, Vehicles |
| 2026-02-27 | cyberpunk-red.md | Full pipeline: NEW 1064 lines, R. Talsorian 2020/RED/2077, 10 roles, Quick-Jack netrunning, humanity/cyberpsychosis |
| 2026-02-27 | witcher.md | Full pipeline: 1044→1125, merged witcher-npcs.md, detailed school templates, canon witchers, contract givers |
| 2026-02-26 | cursed-seas.md | Full pipeline: NEW 1012 lines, Golden Age of Piracy fantasy, ships, naval combat, bestiary, voodoo |
| 2025-02-26 | warhammer-fantasy.md | Full pipeline: 707→1133, added combat/weapons/armor, Fate/Fortune/Fear/Insanity, NPCs, Halflings |
| 2025-02-26 | sengoku.md | Full pipeline: 708→1103, fixed stats (1-5 scale), added Date/Mori clans, balanced stances, fixed exploits |
| 2024-XX-XX | vtm.md | Expanded 418→1099, added mythology, sects, mechanics |
| 2024-XX-XX | warhammer-40k.md | Created 1064 lines, full Imperial/Chaos/Xenos |
| 2024-XX-XX | battletech-commander.md | Expanded 657→1060, added Houses, mechs, NPCs, tables |
| 2024-XX-XX | sanguo.md | Expanded 693→1047, added figures, geography, tables, NPC gen |
