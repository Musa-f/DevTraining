let millisecond = document.getElementById('millisecond');
let secondes = document.getElementById('secondes');
let minutes = document.getElementById('minutes');
let hours = document.getElementById('hours');
let startChrono = document.getElementById('start');
let stopChrono = document.getElementById('stop');
let resetChrono = document.getElementById('reset');
let intervalMillisecond;

function timer(){
    millisecond.innerHTML++;
    if(millisecond.innerHTML == "100"){
        millisecond.innerHTML = '';
        secondes.innerHTML++;
        if(secondes.innerHTML == "60"){
            secondes.innerHTML = '';
            minutes.innerHTML++;
            if(minutes.innerHTML == '60'){
                minutes.innerHTML = '';
                hours.innerHTML++;
                if(hours.innerHTML == '24'){
                    hours.innerHTML = '';
                }
            }
        }
    }
}


startChrono.addEventListener('click', function(){
    intervalMillisecond = setInterval(timer, 10);
    startChrono.classList.add("active");
})

stopChrono.addEventListener('click', function(){
    clearTimeout(intervalMillisecond);
    startChrono.classList.remove("active");
})

resetChrono.addEventListener('click', function(){
    clearInterval(intervalMillisecond)
    millisecond.innerHTML = '00';
    secondes.innerHTML = '00';
    minutes.innerHTML = '00';
    hours.innerHTML = '00';
    startChrono.classList.remove("active");
})