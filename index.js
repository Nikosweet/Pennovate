let date = new Date();
let timeArray = [60-date.getSeconds(), 60-date.getMinutes(), 
    date.getHours() > 12 ? 35 - date.getHours() : (date.getHours() < 12 ? 11 - date.getHours() : -1)
]
let element = document.querySelector('.join__form--timerTimer');

const timer = (timeArray, element) => {
        timeArray[0] -= 1;
    if (timeArray[0] == -1) {
            timeArray[0] = 59;
            timeArray[1] -= 1;
    }
    if (timeArray[1] == -1) {
        timeArray[1] = 59;
        timeArray[2] -= 1;
    }
    if (-1 == timeArray[2]) {
        element.innerHTML = '00:00:00';
        return 0;
    }
    if (-2 == timeArray[2]) {
        timeArray[0] = 0;
        timeArray[1] = 0;
        timeArray[2] = 23;

    }

    element.innerHTML = `${timeArray[2] > 9 ? timeArray[2] : '0' + timeArray[2]} : ${timeArray[1] > 9 ? timeArray[1] : '0' + timeArray[1]} : ${timeArray[0] > 9 ? timeArray[0] : '0' + timeArray[0]}`
    return 0;
}

setInterval(timer, 1000, timeArray, element);