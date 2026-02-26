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
| 2025-02-26 | warhammer-fantasy.md | Full pipeline: 707→1133, added combat/weapons/armor, Fate/Fortune/Fear/Insanity, NPCs, Halflings |
| 2025-02-26 | sengoku.md | Full pipeline: 708→1103, fixed stats (1-5 scale), added Date/Mori clans, balanced stances, fixed exploits |
| 2024-XX-XX | vtm.md | Expanded 418→1099, added mythology, sects, mechanics |
| 2024-XX-XX | warhammer-40k.md | Created 1064 lines, full Imperial/Chaos/Xenos |
| 2024-XX-XX | battletech-commander.md | Expanded 657→1060, added Houses, mechs, NPCs, tables |
| 2024-XX-XX | sanguo.md | Expanded 693→1047, added figures, geography, tables, NPC gen |
