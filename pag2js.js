const container = document.getElementById("calendarBox");
  container.addEventListener("click", () => {
    container.classList.toggle("flipped");
  });

  const now = new Date();
  const day = now.getDate();
  const month = now.toLocaleString("pt-BR", { month: "long" });
  const year = now.getFullYear();

  document.getElementById("dayNumber").innerText = day;
  document.getElementById("monthYear").innerText = `${month} ${year}`;

  const grid = document.getElementById("calendarGrid");

  function renderCalendar(monthIndex, year) {
    const date = new Date(year, monthIndex, 1);
    const firstDay = date.getDay();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    grid.innerHTML = "";

    // Dias da semana
    const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    weekDays.forEach(weekDay => {
      grid.innerHTML += `<div class="weekday">${weekDay}</div>`;
    });

    // Espaços em branco antes do primeiro dia do mês
    for (let i = 0; i < firstDay; i++) {
      grid.innerHTML += `<div class="day"></div>`;
    }

    // Dias do mês
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = i === now.getDate() && monthIndex === now.getMonth() && year === now.getFullYear();
      grid.innerHTML += `<div class="day ${isToday ? "today" : ""}">${i}</div>`;
    }
  }

  renderCalendar(now.getMonth(), year);