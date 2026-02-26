#!/bin/bash
# GM Skill Setup Script
# Устанавливает /rp команды для Claude Code

set -e

# Определяем пути
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CLAUDE_COMMANDS="$HOME/.claude/commands"

# Конвертируем путь для Windows (C:/... вместо /c/...)
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    SKILL_PATH=$(cygpath -m "$SCRIPT_DIR")
else
    SKILL_PATH="$SCRIPT_DIR"
fi

echo "=== GM Skill Setup ==="
echo ""
echo "Репозиторий: $SKILL_PATH"
echo "Claude commands: $CLAUDE_COMMANDS"
echo ""

# Создаём директории
echo "Создаю директории..."
mkdir -p "$CLAUDE_COMMANDS/rp"
mkdir -p "$SCRIPT_DIR/saves"

# Копируем команды с заменой placeholder
echo "Копирую команды..."

# Функция для копирования с заменой
copy_with_replace() {
    sed "s|{{SKILL_PATH}}|$SKILL_PATH|g" "$1" > "$2"
}

# Главная команда
copy_with_replace "$SCRIPT_DIR/commands/rp.md" "$CLAUDE_COMMANDS/rp.md"

# Субкоманды
for file in "$SCRIPT_DIR/commands/rp/"*.md; do
    filename=$(basename "$file")
    copy_with_replace "$file" "$CLAUDE_COMMANDS/rp/$filename"
done

# Показываем что установлено
echo ""
echo "=== Установлено ==="
echo ""
echo "Путь в командах: $SKILL_PATH"
echo ""
ls -la "$CLAUDE_COMMANDS/rp.md"
ls -la "$CLAUDE_COMMANDS/rp/"
echo ""

# Проверяем
echo "=== Проверка ==="
echo ""
echo "rp.md:"
head -1 "$CLAUDE_COMMANDS/rp.md"
echo ""

echo "=== Готово ==="
echo ""
echo "Доступные команды:"
echo "  /rp           — начать новую сессию"
echo "  /rp:help      — список всех команд"
echo "  /rp:saves     — список сохранений"
echo ""
echo "Сейвы будут в: $SKILL_PATH/saves/"
echo ""
