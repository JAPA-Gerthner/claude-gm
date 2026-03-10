# /rp:start — Start New Web Game Session

> **PURPOSE:** Start a new game session with ruleset/character selection.

---

## INSTRUCTIONS

1. **Read rules** from `{{SKILL_PATH}}/.claude/commands/rp/web-GM.md` (use Read tool)
2. **Present** the session start menu below in JSON format
3. **After selections** — proceed to character creation per web-GM.md rules
4. **All responses** must be JSON with clickable links (see web-GM.md)

---

## SESSION START MENU

Present this menu with clickable options:

```json
{
  "content": "# Новая игра\n\n## 1. СЕТТИНГ / РУЛСЕТ\n\n**Специализированные рулсеты** (со своими механиками):\n\n- [battletech-commander](#select:ruleset:battletech-commander) — командир наёмного мехового отряда\n- [blades-lite](#select:ruleset:blades-lite) — ограбления в призрачном индустриальном городе Досквол\n- [cascade](#select:ruleset:cascade) — кинематографичный дизельпанк\n- [cthulhu](#select:ruleset:cthulhu) — космический ужас Лавкрафта\n- [cursed-seas](#select:ruleset:cursed-seas) — пираты Золотого Века (фэнтези)\n- [cyberpunk-red](#select:ruleset:cyberpunk-red) — мрачное будущее 2020/RED/2077\n- [dark-souls](#select:ruleset:dark-souls) — проклятие нежити, паттерн-бои\n- [deus-ex](#select:ruleset:deus-ex) — конспирологический триллер, аугментации\n- [disco-elysium](#select:ruleset:disco-elysium) — навыки как внутренние голоса\n- [frostpunk](#select:ruleset:frostpunk) — выживание в замёрзшем стимпанке\n- [persona](#select:ruleset:persona) — школа днём, мир теней ночью\n- [runeterra](#select:ruleset:runeterra) — мир League of Legends\n- [sanguo](#select:ruleset:sanguo) — Троецарствие, Китай\n- [scp](#select:ruleset:scp) — Фонд SCP, бюрократический хоррор\n- [sengoku](#select:ruleset:sengoku) — Сэнгоку Дзидай, Япония\n- [shadowrun-lite](#select:ruleset:shadowrun-lite) — магия + кибер + корпорации\n- [stalker](#select:ruleset:stalker) — Зона отчуждения (S.T.A.L.K.E.R.)\n- [star-wars](#select:ruleset:star-wars) — далёкая-далёкая галактика\n- [vtm](#select:ruleset:vtm) — Вампиры: Маскарад\n- [warhammer-40k](#select:ruleset:warhammer-40k) — гримдарк далёкого будущего\n- [warhammer-fantasy](#select:ruleset:warhammer-fantasy) — Старый Свет, Хаос\n- [witcher](#select:ruleset:witcher) — охотники на чудовищ\n\n**Общий сеттинг** (базовые правила):\n[Фэнтези](#select:ruleset:fantasy) / [Sci-fi](#select:ruleset:scifi) / [Хоррор](#select:ruleset:horror) / [Постапокалипсис](#select:ruleset:postapo) / [Исторический](#select:ruleset:historical) / Свой вариант\n\n---\n\n## 2. ТОН\n\n[Тёмный](#select:tone:dark) / [Средний](#select:tone:medium) / [Светлый](#select:tone:light)\n\nИли укажи автора: \"Сапковский\", \"Аберкромби\", \"Лавкрафт\", \"Глуховский\"...\n\n---\n\n## 3. СЛОЖНОСТЬ\n\n- [Casual](#select:difficulty:casual) — больше успехов, прощает ошибки\n- [Standard](#select:difficulty:standard) — баланс (по умолчанию)\n- [Hardcore](#select:difficulty:hardcore) — узкий успех, каждый бросок напряжённый\n\n---\n\n## 4. КАСТОМНЫЕ МЕХАНИКИ\n\n[Да](#select:custom:yes) / [Нет](#select:custom:no)\n\nGM может создавать дополнительные механики под персонажа/сеттинг.",
  "meta": {}
}
```

---

## AFTER SELECTIONS

Once player selects ruleset, tone, difficulty:

1. If ruleset is specialized — read `{{SKILL_PATH}}/rulesets/[ruleset].md`
2. Generate 5-6 character builds per CHARACTER CREATION rules in web-GM.md
3. After build selection — generate 3-4 backstory options
4. After backstory — begin first scene
5. Set `meta.ruleset` and `meta.rulesetDisplay` on first response
6. Set `meta.characterName` when name is confirmed
7. Set `meta.chapterName` when chapter begins

---

> **LANGUAGE:** Session language is **Russian**.
