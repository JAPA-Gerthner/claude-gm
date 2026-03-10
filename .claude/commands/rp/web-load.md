# /rp:web-load — Resume Session from Inline Save

> **PURPOSE:** Load game state from inline save content. Used by compaction system.
> **NO character creation. NO ruleset selection. Just restore and continue.**

---

## INSTRUCTIONS

1. **Read rules** from `{{SKILL_PATH}}/.claude/commands/rp/web-GM.md` (use Read tool)
2. **Parse** the inline save content below (everything after `---SAVE---` marker)
3. **Restore** all state in memory:
   - Character (name, stats, HP, AC, equipment, abilities)
   - Party members and their clocks
   - Factions and their status/clocks
   - NPCs (known, attitudes, secrets if revealed)
   - World state (time, location, active threats)
   - Custom mechanics (if any)
   - Current chapter/mission
4. **Output** brief restoration summary in JSON format:

```json
{
  "content": "=== RESTORED: [Campaign/Character name] ===\n\nCharacter: [name], [class], HP [X/Y]\nLocation: [where]\nTime: [when]\n\nLast scene:\n[Brief description of where we stopped]\n\n---\n\nReady to continue. Что делаешь?\n\n[1. [-] First option](#select:action:1)\n[2. [STAT] Second option](#select:action:2)\n...",
  "meta": {
    "ruleset": "[from save]",
    "rulesetDisplay": "[from save]",
    "characterName": "[from save]",
    "chapterName": "[from save]"
  }
}
```

5. **Continue** session as GM following web-GM.md rules
6. **ALL responses** must be JSON with clickable links

---

## SAVE FORMAT EXPECTED

The inline save uses YAML-like structure:

```yaml
---SAVE---
campaign: [name]
ruleset: [id]
rulesetDisplay: [display name]
difficulty: [casual/standard/hardcore]
tone: [dark/medium/light]

character:
  name: [name]
  class: [class]
  level: [N]
  stats:
    STR: X | DEX: X | CON: X | INT: X | WIS: X | CHA: X
  hp: [current]/[max]
  ac: [N]
  equipment: [list]
  abilities: [list]
  heroism: [yes/no]

party:
  - name: [ally name]
    clock: [N/6]
    goal: [their quest]

factions:
  - name: [faction]
    status: [allied/neutral/hostile]
    clock: [if any]

world:
  time: [when]
  location: [where]
  threats: [active threats with clocks]

custom_mechanics: [if any]

chapter: [current chapter name]
last_scene: [brief description]
---END---
```

---

## CRITICAL

- **DO NOT** ask for ruleset selection
- **DO NOT** ask for character creation
- **DO NOT** show session start menu
- **IMMEDIATELY** restore state and present options
- **ALL outputs** in JSON format with clickable links
- If save is malformed — report error, ask user to provide valid save

---

> **LANGUAGE:** Session language is **Russian**.
