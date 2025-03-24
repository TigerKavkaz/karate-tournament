// Данные об участниках
let participants = [
  "Ольга Кузнецова",
  "Алексей Сидоров",
  "Мария Петрова",
  "Дмитрий Смирнов",
  "Иван Иванов",
  "Елена Васильева",
  "Сергей Козлов",
  "Анна Морозова",
];

// Функция для создания матчей в раунде
function createRound(participants) {
  const matches = [];
  for (let i = 0; i < participants.length; i += 2) {
    if (i + 1 < participants.length) {
      matches.push(`${participants[i]} vs ${participants[i + 1]}`);
    } else {
      // Если участников нечетное количество, последний проходит автоматически
      matches.push(`${participants[i]} (автоматически)`);
    }
  }
  return matches;
}

// Функция для определения победителей (в данном примере выбираем случайного)
function getWinners(participants) {
  const winners = [];
  for (let i = 0; i < participants.length; i += 2) {
    if (i + 1 < participants.length) {
      // Случайный выбор победителя
      const winner = Math.random() < 0.5 ? participants[i] : participants[i + 1];
      winners.push(winner);
    } else {
      // Если участников нечетное количество, последний проходит автоматически
      winners.push(participants[i]);
    }
  }
  return winners;
}

// Функция для создания блок-схемы
function createFlowchart() {
  const flowchart = document.getElementById("flowchart");
  let currentParticipants = [...participants];
  let roundNumber = 1;

  while (currentParticipants.length > 1) {
    // Создаем блок для раунда
    const roundBlock = document.createElement("div");
    roundBlock.className = "round";
    roundBlock.innerHTML = `<strong>Раунд ${roundNumber}</strong>`;

    // Создаем матчи в раунде
    const matches = createRound(currentParticipants);
    matches.forEach((match) => {
      const matchBlock = document.createElement("div");
      matchBlock.className = "match";
      matchBlock.textContent = match;
      roundBlock.appendChild(matchBlock);
    });

    flowchart.appendChild(roundBlock);

    // Добавляем стрелку между раундами
    if (currentParticipants.length > 1) {
      const arrow = document.createElement("div");
      arrow.className = "arrow";
      arrow.textContent = "↓";
      flowchart.appendChild(arrow);
    }

    // Определяем победителей для следующего раунда
    currentParticipants = getWinners(currentParticipants);
    roundNumber++;
  }

  // Добавляем завершающий блок с победителем
  const winnerBlock = document.createElement("div");
  winnerBlock.className = "round";
  winnerBlock.innerHTML = `<strong>Победитель: ${currentParticipants[0]}</strong>`;
  flowchart.appendChild(winnerBlock);
}

// Запускаем создание блок-схемы
createFlowchart();
