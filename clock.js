const aM = document.getElementById('AM');
const pM = document.getElementById('PM');
const hourElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
let temp2 = 0;
let format = '12 Hr';

function updateClock() {
  const now = new Date();
  const temp = now.getHours();
  temp2 = +temp;

  let hourFormat;
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;

  if (format === '12 Hr') {
    hourFormat = twelveHourFormat(temp2);
  } else {
    hourFormat = String(temp2).padStart(2, '0');
  }

  hourElement.textContent = hourFormat;

  if (temp2 !== 0) {
    isAmPm(temp2);
  }
}

function twelveHourFormat(hours) {
  if (hours === 0) {
    return 12;
  }
  if (hours <= 9) {
    return String( '0' + hours);
  }
  else if(hours > 9 && hours <= 12){
    return String(hours)
  }
  else if(hours > 12 && hours <= 21){
    return String( '0' + (hours - 12));
  }

  return String((hours - 12));
}
function isAmPm(hrs) {
  if (hrs < 12) {
    pM.style.opacity = '10%';
    aM.style.opacity = '100%';
  } else {
    aM.style.opacity = '10%';
    pM.style.opacity = '100%';
  }
}

function changeFormat() {
  if (format === '24 Hr') {
    format = '12 Hr';
  } else {
    format = '24 Hr';
  }
  toggleBtn.innerHTML = format == '12 Hr' ? 'Change Format to 24 Hr' : 'Change Format to 12 Hr';
  updateClock();
}

const toggleBtn = document.querySelector('#toggle-button');
toggleBtn.innerHTML = format == '12 Hr' ? 'Change Format to 24 Hr' : 'Change Format to 12 Hr';
toggleBtn.addEventListener('click', changeFormat);

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);
