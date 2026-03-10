Load a saved RPG session.

**IMPORTANT: If context is polluted by previous session — tell player to run /clear and then /rp:load again**

1. If player specified campaign name — load `{{SKILL_PATH}}/saves/[name].md`
2. If not specified — show list of available saves from `{{SKILL_PATH}}/saves/`
3. If folder is empty — report no saves found

After loading:

1. MUST read GM rules from `{{SKILL_PATH}}/gm-skill.md` (use Read tool)
2. Read save file completely
3. Restore all state in memory (character, party, factions, world, custom mechanics)
4. Output brief summary:

```
=== LOADED: [Campaign name] ===

Character: [name], [class], HP [X/Y]
Location: [where]
Time: [when]

Last scene:
[Brief description of where we stopped]

---
Ready to continue. What do you do?
[Last action options if any]
```

---
META: After loading — run session as GM following rules from gm-skill.md.
All information from save = current game state.
Custom mechanics from save = active.

---
> **LANGUAGE:** Preferred session language is **Russian**. This file is stored in English for token efficiency only.
