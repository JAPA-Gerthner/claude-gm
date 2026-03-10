Delete a saved RPG session.

Argument $ARGUMENTS — session name to delete.

1. If argument provided:
   - Find file `{{SKILL_PATH}}/saves/$ARGUMENTS.md`
   - If exists — delete and output:
     ```
     ✓ Session "$ARGUMENTS" deleted.
     ```
   - If doesn't exist:
     ```
     ✗ Session "$ARGUMENTS" not found.

     Available sessions:
     [list files from {{SKILL_PATH}}/saves/]
     ```

2. If argument NOT provided:
   - Show list of available sessions
   - Ask which to delete

---
META: This is NOT a game action. File management, does not affect game.

---
> **LANGUAGE:** Preferred session language is **Russian**. This file is stored in English for token efficiency only.
