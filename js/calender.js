const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();

function renderCalendar() {
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const lastDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  monthYear.innerText = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  calendarDays.innerHTML = "";
  let dayOffset = firstDay === 0 ? 6 : firstDay - 1; // Adjust for Monday as start
  for (let i = 0; i < dayOffset; i++) {
    calendarDays.innerHTML += `<div></div>`;
  }

  for (let day = 1; day <= lastDate; day++) {
    let today = new Date();
    let isToday =
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear();
    calendarDays.innerHTML += `<div class="${
      isToday ? "selected" : ""
    }" onclick="selectDate(this)">${day}</div>`;
  }
}

function selectDate(element) {
  document
    .querySelectorAll(".calendar-days div")
    .forEach((el) => el.classList.remove("selected"));
  element.classList.add("selected");
}

prevMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
