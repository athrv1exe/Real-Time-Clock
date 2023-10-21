const aM = document.getElementById('AM') 
const pM = document.getElementById('PM') 
const hourElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
let hours = 0;

function updateClock() {
        
    const now = new Date();
    const hourFormat = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
    hourElement.textContent = hourFormat;

    const temp = hourElement.textContent;
    hours = +temp;
    console.log(hours + ' ' + typeof hours)

    // if hours is less than 12 then reduce opacity of PM else reduce opacity of AM
    if(hours != 0){
        isAmPm(hours)
        
    }
}
    
function isAmPm(hrs){
    if(hrs < 12) {
        pM.style.opacity = '10%'
        aM.style.opacity = '100%'
    }
    else{
        aM.style.opacity = '10%'
        pM.style.opacity = '100%'

    }
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



