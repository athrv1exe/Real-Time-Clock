function updateClock() {
const now = new Date();
const hourFormat = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');

const hourElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

minutesElement.textContent = minutes;
secondsElement.textContent = seconds;
hourElement.textContent = hourFormat;

// let hour = +hourFormat;
// if(hour > 12){
//     hour = hour % 12;
    
// }
// else{
// }
}

// Update the clock immediately and then every second

updateClock();
setInterval(updateClock, 1000);

const toggleBtn = document.querySelector('#toggle-button')

let format = '12 Hr';
toggleBtn.innerHTML = `Change Format to ${format}`;
function changeFormat(){
    if(format === '24 Hr'){
        format = '12 Hr';
    }
    else{
        format = '24 Hr'
    }
    toggleBtn.innerHTML = `Change Format to ${format}`;
}
toggleBtn.addEventListener('click', changeFormat)

