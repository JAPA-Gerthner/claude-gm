# /rp:web-save — Save Session for Compaction

> **PURPOSE:** Output current game state in structured format for `/rp:web-load`.
> **CRITICAL:** Output MUST be parseable by web-load. Follow format exactly.

---

## INSTRUCTIONS

Output the current game state in this **exact** format:

```json
{
  "content": "Session saved for compaction.",
  "meta": {},
  "save": "---SAVE---\ncampaign: ...\n...\n---END---"
}
```

The `save` field contains the full save data in YAML format.

---

## SAVE FORMAT (MANDATORY)

```yaml
---SAVE---
campaign: [character name or campaign title]
ruleset: [technical id, e.g. "warhammer-fantasy"]
rulesetDisplay: [display name, e.g. "Warhammer Fantasy"]
difficulty: [casual/standard/hardcore]
tone: [dark/medium/light or author name]

character:
  name: [full name]
  class: [class/archetype]
  race: [race if applicable]
  level: [current level]
  stats:
    STR: [N]
    DEX: [N]
    CON: [N]
    INT: [N]
    WIS: [N]
    CHA: [N]
  hp: [current]/[max]
  ac: [N]
  heroism: [true/false]
  conditions: [list or "none"]
  equipment:
    - [item 1 with stats]
    - [item 2 with stats]
  abilities:
    - name: [ability name]
      description: [brief]
      cooldown: [if any]
  spells: [if applicable]
    - name: [spell]
      circle: [N]
      cooldown: [remaining]

party:
  - name: [companion name]
    class: [their role]
    clock: [N]/6
    goal: [their personal quest]
    attitude: [current attitude]

factions:
  - name: [faction name]
    status: [allied/neutral/hostile]
    clock: [N]/6 [if applicable]
    history: [brief - good/bad/none]

npcs:
  - name: [NPC name]
    location: [where]
    attitude: [to player]
    notes: [relevant info player knows]

world:
  time: [in-game time/date]
  location: [current location]
  weather: [if relevant]

threats:
  - name: [threat name]
    clock: [N]/6
    danger: [what happens at 6/6]

items_with_clocks:
  - name: [item name]
    clock: [N]/6
    state: [what it's tracking]

custom_mechanics:
  - name: [mechanic name]
    description: [how it works]

chapter: [current chapter name]
tension: [current tension meter value, hidden from player]

last_scene: |
  [2-3 sentences describing exactly where we stopped]
  [Include: location, situation, pending choices/threats]

voice_patterns:
  - speaker: [character name]
    pattern: [how they speak - accent, vocabulary, mannerisms]
  - speaker: [NPC name]
    pattern: [their speech pattern]
---END---
```

---

## CRITICAL RULES

1. **Include ALL state** — anything not in save is lost after compaction
2. **Equipment with stats** — not just names, include actual numbers
3. **All clocks** — companions, factions, items, threats
4. **Custom mechanics** — if created during play, document them
5. **Voice patterns** — how characters speak (for consistency after restore)
6. **Last scene** — enough detail to continue naturally
7. **Tension meter** — preserve hidden GM state

---

## WHAT TO PRESERVE

- Character: full stats, HP, AC, all equipment with modifiers, abilities, spells with cooldowns
- Party: each companion with clock and goal
- Factions: status, clock if any, history
- NPCs: known NPCs with attitudes and relevant secrets (if revealed)
- World: time, location, active threats with clocks
- Custom: any mechanics created during play
- Voice: speech patterns for all speaking characters
- Scene: detailed description of current situation

---

## EXAMPLE OUTPUT

```json
{
  "content": "Session saved for compaction.",
  "meta": {},
  "save": "---SAVE---\ncampaign: Грюнвальд Стальной\nruleset: warhammer-fantasy\nrulesetDisplay: Warhammer Fantasy\ndifficulty: standard\ntone: dark\n\ncharacter:\n  name: Грюнвальд Стальной\n  class: Охотник на ведьм\n  race: Человек\n  level: 3\n  stats:\n    STR: 3\n    DEX: 4\n    CON: 3\n    INT: 2\n    WIS: 4\n    CHA: 2\n  hp: 12/15\n  ac: 14\n  heroism: false\n  conditions: none\n  equipment:\n    - Рапира качества (+1 к урону): d8+1\n    - Пистоль: d10, 1 выстрел\n    - Кожаный доспех: AC 12+DEX\n  abilities:\n    - name: Чутьё на скверну\n      description: +2 к WIS против хаоса\n\nparty:\n  - name: Хельга\n    class: Следопыт\n    clock: 4/6\n    goal: Найти брата\n    attitude: Союзник\n\nfactions:\n  - name: Орден Сигмара\n    status: allied\n    clock: 3/6\n    history: good\n\nworld:\n  time: Ночь, 3-й день Бруммайра\n  location: Подвал таверны \"Чёрный вепрь\"\n\nthreats:\n  - name: Культ Слаанеш\n    clock: 4/6\n    danger: Ритуал завершится\n\nchapter: Тени под Альтдорфом\ntension: 28\n\nlast_scene: |\n  Спустились в подвал таверны. Нашли потайную дверь.\n  За ней — коридор, слышны голоса и свет факелов.\n  Хельга готова прикрыть. Выбор: тихо или штурм.\n\nvoice_patterns:\n  - speaker: Грюнвальд\n    pattern: Короткие рубленые фразы, имперские ругательства\n  - speaker: Хельга\n    pattern: Северный акцент, мало говорит, больше действует\n---END---"
}
```

---

> **LANGUAGE:** Save data in Russian (as played). Field names in English for parsing.
