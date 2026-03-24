Show all known NPCs in the game in format:

```
=== NPCs ===

## [NAME / CALLSIGN]
Role: [ally / neutral / enemy / unknown]
Faction: [which faction they belong to, if any]
Status: [alive / dead / unknown]
Attitude: [Ally +2 / Neutral 0 / Distrustful -2 / Hostile -4]
Description: [who this is, how we met, what we know]

Ally clock (if any):
- Quest: [ally's goal]
- Clock: ●●●○○○ (X/6)
- Neglected: X/3
- Tick up: [when]
- Tick down: [when]
- 6/6: [reward]
- 0/6: [penalty]

Loyalty (for subordinates): ●●●○○ (X/5)
Trait: [feature]

---

## [NEXT NPC]
...

=== DEAD / MISSING ===
- [Name] — [how died/disappeared]
...

=== MENTIONED BUT NOT MET ===
- [Name/Description] — [what we know]
...
===
```

Show ALL known NPCs:
- Allies (with clocks)
- Neutrals (merchants, informants)
- Enemies (known individuals)
- Subordinates (pilots, technicians — with loyalty)
- Dead (for history)
- Mentioned but not met

Group by category. Mark dead with [DEAD].

---
META: This is NOT a game action. Time does not pass, world does not change.
After output — DO NOT generate new events or options.
Wait for player to continue the game based on LAST offered options.

---
> **LANGUAGE:** Preferred session language is **Russian**. This file is stored in English for token efficiency only.
