Save current RPG session to file.

Ask player for campaign name (if unknown).
Save to file: `{{SKILL_PATH}}/saves/[campaign-name].md`

**NO HARD LIMIT.** Save as much as needed for full session restore. Don't shorten important sections — CHRONICLE, NPC HISTORY, CUSTOM MECHANICS must be complete. Context efficiency is already optimized (English storage).

File format:

```markdown
# [CAMPAIGN NAME]
Last save: [in-game date and time]
Session: [number if any]

---

## CHARACTER
Name: [name] | Race: [race] | Class: [class]
HP: X/Y | AC: X

STR [X] | DEX [X] | CON [X] | INT [X] | WIS [X] | CHA [X]

### Abilities
- [list of abilities]

### Conditions
- Heroism: ●/○
- [other effects]

### Inventory
**Weapons:**
- [list]

**Armor:**
- [list]

**Consumables:**
- [list with quantities]

**Key items:**
- [quest items, special]

**Gold:** X

---

## CAMPAIGN CHRONICLE

Entire campaign history by arcs. DO NOT SHORTEN.

### Arc 1: [Title] (sessions X-Y)
**Hook:** [how it started — 1 sentence]
**Key events:**
- [event 1]
- [event 2]
- [event 3]
**Outcome:** [how arc ended]
**Consequences:** [what changed in world/character]

### Arc 2: [Title] (sessions X-Y)
...

### Current arc: [Title] (session X+)
**Hook:** [how it started]
**Progress:**
- [what's already done]
**Current goal:** [what we're doing now]

---

## NPC HISTORY

Key character evolution. DO NOT SHORTEN.

### [NPC Name]
**First meeting:** Session X — [who they were, where met, circumstances]
**Development:**
- Session Y: [key change]
- Session Z: [key change]
**Current status:** [who now, where, attitude]
**Motivation:** [what they want]

### [NPC Name 2]
...

---

## COMPANIONS/PETS
### [Name]
- Type: [what it is]
- HP: X | Condition: [status]
- Control: [how controlled]
- Notes: [important]

---

## PARTY/ALLIES
| Name | Role | HP | Condition | Attitude | Notes |
|------|------|-----|-----------|----------|-------|
| ... | ... | ... | ... | ... | ... |

Party morale: X/5

---

## FALLEN AND DEPARTED

### Fallen
| Name | Session | Circumstances |
|------|---------|---------------|
| ... | ... | [how died] |

### Departed allies
| Name | Session | Reason | Where now |
|------|---------|--------|-----------|
| ... | ... | [why left] | [if known where] |

---

## FACTIONS
### [Faction name]
- Description: [brief]
- Attitude toward player: [enemy/neutral/ally]
- Key NPCs: [names and statuses]
- Clock: ●●○○○○ (X/Y) — [clock goal]
- Interaction history: [brief — helped/hindered/conflicts]

---

## WORLD
### Current location
[Where player is, description]

### Time
- In-game: [date/time]
- Elapsed since start: [how much]

### Active quests
1. [Quest] — [status]

### Known locations
- [List with brief notes]

---

## LAST SESSION (brief recap)

### Session [N]: [title/theme]
**Key events:**
1. [Event 1]
2. [Event 2]
...

### Last scene
[Description of current situation, what's happening, what action options were offered]

---

## NPC DETAILS (current)

Only ACTIVE NPCs we're interacting with now.
NPC history — goes in "NPC HISTORY" section.

### [NPC Name]
- Appearance: [visible]
- Personality: [character, speech patterns]
- Attitude toward player: [how they feel]
- Current role: [what they do in plot]

---

## NOTES / LORE
### World
- [Important facts about world, history, magic]

### Secrets / Hooks
- [Unresolved mysteries, hints at future]

### Other
- [Everything that didn't fit above but important to remember]

---

## SESSION SETTINGS
- Setting: [which]
- Tone: [dark/medium/light]
- Difficulty: DC (X;Y;Z) — [easy/medium/hard/hardcore]
- Strictness: [casual/medium/hardcore] — how often high DCs
- Custom mechanics: Yes/No

---

## CUSTOM MECHANICS (if any)

DO NOT SHORTEN. Without this section, session cannot be properly restored.

[Full description of all custom mechanics used in this session.
Include: rules, formulas, tables, examples.
Format as in gm-skill.md or rulesets/*.md files.
If mechanic was loaded from file — save full content, not just reference.]

---
```

After saving output:
```
✓ Session saved: {{SKILL_PATH}}/saves/[name].md
  Lines: [X]
  Context: [save + gm-skill.md tokens]k / [model context limit]k
```

Calculate tokens for save file + gm-skill.md combined. Show as ratio to current model's context window (e.g. "12.5k / 200k").

---
META: This is NOT a game action. Time does not pass, world does not change.
After saving — DO NOT generate new events or options.
Wait for player to continue the game based on LAST offered options.

---
> **LANGUAGE:** Preferred session language is **Russian**. This file is stored in English for token efficiency only.
