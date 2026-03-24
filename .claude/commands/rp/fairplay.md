Fairplay audit — verify GM decisions for narrative fiat vs honest play.

Player suspects GM fiat (narrative convenience over rules/rolls). This command triggers independent review.

**Trigger:** $ARGUMENTS
(Brief description of the questionable moment)

---

## FAIRPLAY AUDIT PROCEDURE

### 1. ANALYZE THE DECISION

Identify:
- What happened?
- Was it result of dice rolls or GM narrative decision?
- If GM decision — what was the justification?

### 2. EVALUATE LORE/SITUATION APPROPRIATENESS

Score 0-100%:
- Does this fit the setting lore?
- Does this fit the specific situation?
- Would this happen "naturally" in this world?
- Is there in-world justification (god, artifact, location, etc.)?

**Scoring guide:**
- 90-100%: Perfectly justified by established lore/mechanics
- 70-89%: Reasonable interpretation, minor stretch
- 50-69%: Plausible but convenient
- 30-49%: Significant stretch, mostly narrative
- 0-29%: Pure fiat, no real justification

### 3. CALCULATE RANGES

Based on lore score, set d10 ranges:

```
ACCEPTED range: 1 to (score / 10, round UP)
CONSEQUENCES range: next 2 values
REJECTED range: remainder to 10

Examples:
  70% lore = 1-7 accepted, 8-9 consequences, 10 rejected
  50% lore = 1-5 accepted, 6-7 consequences, 8-10 rejected
  30% lore = 1-3 accepted, 4-5 consequences, 6-10 rejected
```

### 4. ROLL d10

Use real random:
```bash
python -c "import random; print('FAIRPLAY d10:', random.randint(1,10))"
```

### 5. APPLY RESULT

**ACCEPTED:** Event stands as narrated. No changes.

**CONSEQUENCES:** Event stands but with a price:
- +1-2 Corruption
- Debt to entity/god
- Lasting wound or condition
- Enemy learned something
- Resource permanently lost
- GM chooses appropriate cost

**REJECTED:** Event did not happen as narrated.
- Retcon to more realistic outcome
- If survival was fiat — character dies or suffers major setback
- GM describes what "actually" happened

---

## OUTPUT FORMAT

```
=== FAIRPLAY AUDIT ===

QUESTIONED EVENT: [what player is questioning]

ANALYSIS:
- Type: [Dice result / GM fiat / Mixed]
- GM justification: [what reasoning was used]

LORE EVALUATION:
- Setting fit: [X/10]
- Situation fit: [X/10]
- In-world cause: [yes/no — what]
- Overall score: [X]%

RANGES (d10):
- Accepted: 1-[X]
- Consequences: [X]-[Y]
- Rejected: [Y]-10

ROLL: [result]

VERDICT: [ACCEPTED / CONSEQUENCES / REJECTED]

[If consequences — describe the price]
[If rejected — describe what actually happened]
===
```

---

## RESTRICTIONS

- Can ONLY be called immediately after questionable moment (same scene)
- Maximum 1 per scene
- Cannot audit honest dice rolls — only GM narrative decisions
- Player must accept the result (that's the point of fairplay)

---
META: This is a meta-command. Game time does not pass during audit. Result may change game state retroactively.

---
> **LANGUAGE:** Preferred session language is **Russian**. This file is stored in English for token efficiency only.
