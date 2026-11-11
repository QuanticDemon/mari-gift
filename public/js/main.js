const countrySpan = document.getElementById("country");


const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const target = new Date("2026-12-21T00:00:00");




function updateContador() {
  const now = new Date();
  const diffDate = target - now; 
  const diffDays = Math.floor(diffDate/DAY);
  const diffHours = Math.floor((diffDate % DAY) / HOUR);
  const diffMinutes = Math.floor((diffDate % HOUR) / MINUTE);
  const diffSeconds = Math.floor((diffDate % MINUTE) / SECOND);
  countrySpan.innerText = timezone;
  days.innerText = diffDays;
  hours.innerText = diffHours;
  minutes.innerText = diffMinutes;
  seconds.innerText = diffSeconds;
}

updateContador();
setInterval(updateContador, 1000);
