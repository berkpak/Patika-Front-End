const getUserName = prompt('Adinizi Giriniz:');

const myName = document.querySelector('#myName');
myName.textContent = getUserName;

const days = [
  'Pazar',
  'Pazartesi',
  'Sali',
  'Carşamba',
  'Persembe',
  'Cuma',
  'Cumartesi',
];

function showTime() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let seconds = date.getSeconds();
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const day = days[date.getDay()];
  let currentTime = `${hours}:${minutes}:${seconds} ${day}`;

  const clock = document.querySelector('.clock');
  clock.textContent = currentTime;
}
showTime();
setInterval(showTime, 1000);
