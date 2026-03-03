# Feedback Reviewer

Analyze player feedback with expert panel. Run this manually when you have accumulated feedback to review.

---

## How to Use

1. Read this file
2. Follow the pipeline below
3. Output final verdict for each feedback item

---

## Pipeline

### PHASE 1: Context Loading (ONCE)

Read these files ONCE at start, keep in context:

```
1. C:\Workspace\gm-skill\gm-skill.md (core rules)
2. C:\Workspace\gm-skill\rulesets\[ruleset].md (if feedback mentions specific ruleset)
```

Create CONTEXT SUMMARY (~500 words):
- Core mechanics overview (rolls, margins, clocks, tension)
- Ruleset-specific mechanics (if applicable)
- Design principles from gm-skill.md

This summary is passed to all agents. DO NOT re-read files per agent.

---

### PHASE 2: Feedback Collection

```bash
ls C:\Workspace\gm-skill\feedback\
```

Read all feedback files. Create list:
```
| # | File | Topic | Ruleset | Summary |
|---|------|-------|---------|---------|
| 1 | 2026-03-03-pacing.md | pacing | core | "Combat feels slow" |
| 2 | ... | ... | ... | ... |
```

---

### PHASE 3: Expert Panel (5 Agents in Parallel)

Launch 5 agents simultaneously. Each agent receives:
- CONTEXT SUMMARY (from Phase 1)
- ALL feedback items (from Phase 2)

Each agent has different expertise:

```
AGENT 1: MECHANICS EXPERT
Focus: Rules accuracy, balance, edge cases
Question: Is the mechanic working as designed? Is it balanced?

AGENT 2: PACING EXPERT
Focus: Session flow, tension curves, engagement
Question: Does the feedback indicate pacing issues? How to fix rhythm?

AGENT 3: NARRATIVE EXPERT
Focus: Story, NPCs, worldbuilding, tone
Question: Is the narrative meeting genre expectations? Character consistency?

AGENT 4: UX EXPERT
Focus: Player experience, clarity, frustration points
Question: Is the system intuitive? Where is friction?

AGENT 5: DEVIL'S ADVOCATE
Focus: Challenge assumptions, find counterarguments
Question: Is this feedback valid? Could player be wrong? What's the other side?
```

**Agent Prompt Template:**
```
You are a [ROLE] reviewing RPG feedback.

CONTEXT (do not re-read source files):
[CONTEXT SUMMARY from Phase 1]

FEEDBACK TO REVIEW:
[All feedback items]

For EACH feedback item, provide:
1. VERDICT: Fix / Don't Fix / Investigate
2. REASONING: Why (2-3 sentences)
3. IF FIX: How to fix (specific suggestion)
4. CONFIDENCE: High / Medium / Low

Output as table.
```

---

### PHASE 4: Synthesis

Collect all 5 agent responses. For each feedback item:

**Consensus Matrix:**
| Feedback | Mech | Pace | Narr | UX | Devil | Verdict |
|----------|------|------|------|-----|-------|---------|
| #1 | Fix | Fix | - | Fix | Don't | **FIX (4/5)** |
| #2 | Don't | Don't | Don't | Inv | Don't | **DON'T (4/5)** |

**Consensus Rules:**
- 4-5 "Fix" → **FIX** (high confidence)
- 4-5 "Don't Fix" → **DON'T FIX** (high confidence)
- 3 "Fix" → **FIX** (medium confidence)
- 2-3 "Investigate" → **INVESTIGATE** (need more data)
- Split → **SUBJECTIVE** (player preference, not system issue)

---

### PHASE 5: Final Report

Output format:

```markdown
# Feedback Review Report
Date: [YYYY-MM-DD]
Feedback items reviewed: [N]
Rulesets involved: [list]

---

## Summary

| # | Topic | Verdict | Confidence | Action |
|---|-------|---------|------------|--------|
| 1 | Pacing | FIX | High | Reduce roll frequency in dialogue |
| 2 | Difficulty | SUBJECTIVE | - | Player preference |
| 3 | NPC | INVESTIGATE | Medium | Need more examples |

---

## Detailed Analysis

### Feedback #1: [Topic]
**Original:** "[feedback text]"
**Verdict:** FIX
**Confidence:** High (4/5 experts agree)

**Expert Opinions:**
- Mechanics: [summary]
- Pacing: [summary]
- Narrative: [summary]
- UX: [summary]
- Devil's Advocate: [summary]

**Recommended Fix:**
[Specific changes to gm-skill.md or ruleset]

**Implementation:**
- [ ] File: [which file to edit]
- [ ] Section: [which section]
- [ ] Change: [what to change]

---

### Feedback #2: [Topic]
...

---

## Action Items

### Must Fix (High Confidence)
1. [Change description] → [file]

### Consider Fixing (Medium Confidence)
1. [Change description] → [file]

### Investigate Further
1. [What to look for]

### No Action (Subjective/Invalid)
1. [Feedback] — [reason]

---
```

---

## Notes

- Run this periodically (after 5-10 feedback items)
- Archive processed feedback to `feedback/archive/` after fixing
- Update CHANGELOG in relevant files after implementing fixes

---

> **LANGUAGE:** This file is in English. Output can be in Russian if preferred.
