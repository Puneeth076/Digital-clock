const hour = document.getElementById('hour');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');
const ampm = document.getElementById('ampm');


function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampms = "Am";

    if(hours > 12){
        hours -= 12;
        ampms = "PM";
    }

    hours = hours<10  ? "0" + hours : hours;
    minutes = minutes<10  ? "0" + minutes : minutes;
    seconds = seconds<10  ? "0" + seconds : seconds;

    hour.innerText = hours; 
    minute.innerText = minutes;
    second.innerText = seconds;
    ampm, (innerText = ampms);
    setTimeout(()=>{
        clock()
    },1000) 
}

clock()
