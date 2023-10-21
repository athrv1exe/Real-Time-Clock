
function updateClock() {
const now = new Date();
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');

const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

hoursElement.textContent = hours;
minutesElement.textContent = minutes;
secondsElement.textContent = seconds;
}

// Update the clock immediately and then every second

updateClock();
setInterval(updateClock, 1000);

const toggleBtn = document.querySelector('#toggle-button')

let format = '24 Hr';
toggleBtn.innerHTML = `Change Format : ${format}`;
function changeFormat(){
    if(format === '24 Hr'){
        format = '12 Hr';
    }
    else{
        format = '24 Hr'
    }
    toggleBtn.innerHTML = `Change Format : ${format}`;
}
toggleBtn.addEventListener('click', changeFormat)

