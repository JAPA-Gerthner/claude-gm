List all saved RPG sessions.

## Without arguments — show list

Read contents of folder `{{SKILL_PATH}}/saves/`

For each file — read it and output brief summary.

Format:

```
=== SAVED SESSIONS ===

1. [file-name]
   [Setting] | [Character, class]
   About: [1 line — essence of campaign/story]
   Now: [1 line — what's happening, where stopped]
   Saved: [date]

2. [file-name]
   ...

---
/rp:load [name] — load
/rp:save-delete [name] — delete
```

Example:
```
1. karak-vren
   Warhammer Fantasy | Gorek, dwarf engineer
   About: Expedition to abandoned hold for ancient Forgemaster
   Now: Victory! Returned to village, deciding what's next
   Saved: night after expedition
```

If folder is empty:
```
=== SAVED SESSIONS ===

No saves found.

Use /rp:save to save current session.
```

---
META: This is NOT a game action. File management, does not affect game.

---
> **LANGUAGE:** Preferred session language is **Russian**. This file is stored in English for token efficiency only.
