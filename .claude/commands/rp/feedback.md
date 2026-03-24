Save player feedback to file.

Ask player:
1. **Topic** — what is this feedback about? (mechanics, pacing, narrative, NPC, difficulty, other)
2. **Feedback** — the actual feedback text

Save to file: `feedback/[YYYY-MM-DD]-[topic-slug].md`

If file with same date+topic exists, append with `---` separator.

File format:

```markdown
# Feedback: [Topic]
Date: [YYYY-MM-DD]
Session: [campaign name if known, or "standalone"]
Ruleset: [ruleset used, or "core only"]

---

## Feedback

[Player's feedback text]

---

## Context (auto-filled)

- **Last scene:** [brief description of what was happening]
- **Recent rolls:** [any notable rolls that might be relevant]
- **Mechanics involved:** [if feedback relates to specific mechanic]

---
```

After saving output:
```
Feedback saved: feedback/[filename].md

To analyze all feedback later, use: feedback-reviewer.md
```

---
META: This is NOT a game action. Time does not pass, world does not change.
After saving — DO NOT generate new events or options.
Wait for player to continue the game based on LAST offered options.

---
> **LANGUAGE:** Preferred session language is **Russian**. This file is stored in English for token efficiency only.
