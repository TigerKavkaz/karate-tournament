// Данные о матчах
const matches = [
  { id: 1, participant1: "Ольга Кузнецова", participant2: "Алексей Сидоров" },
  { id: 2, participant1: "Мария Петрова", participant2: "Дмитрий Смирнов" },
  { id: 3, participant1: "Иван Иванов", participant2: null },
];

// Функция для создания блок-схемы
function createFlowchart() {
  const flowchart = document.getElementById("flowchart");

  matches.forEach((match, index) => {
    // Создаем блок для матча
    const matchBlock = document.createElement("div");
    matchBlock.className = "match";
    matchBlock.innerHTML = `
      <strong>Бой ${match.id}</strong><br>
      Участник 1: ${match.participant1}<br>
      Участник 2: ${match.participant2 || "Нет участника"}
    `;
    flowchart.appendChild(matchBlock);

    // Добавляем стрелку между боями (кроме последнего)
    if (index < matches.length - 1) {
      const arrow = document.createElement("div");
      arrow.className = "arrow";
      arrow.textContent = "↓";
      flowchart.appendChild(arrow);
    }
  });

  // Добавляем завершающий блок
  const endBlock = document.createElement("div");
  endBlock.className = "match";
  endBlock.innerHTML = "<strong>Турнир завершен</strong>";
  flowchart.appendChild(endBlock);
}

// Запускаем создание блок-схемы
createFlowchart();
