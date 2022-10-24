function timeNeeded(steps, lengthStep, speed) {
    let timeNeededInSec = lengthStep * steps / 1000 / speed * 3600;
    timeNeededInSec += Math.floor(lengthStep * steps / 500) * 60;
    let hour = Math.floor(timeNeededInSec / 3600);
    let minute = Math.floor(timeNeededInSec % 3600 / 60);
    let seconds = Math.ceil(timeNeededInSec % 3600 % 60);
    let timeNeededString = (hour < 10 ? "0" + hour : hour) + ":" 
    + (minute < 10 ? "0" + minute : minute) + ":" 
    + (seconds < 10 ? "0" + seconds : seconds);
    console.log(timeNeededString);
}

timeNeeded(4000, 0.60, 5);
timeNeeded(2564, 0.70, 5.5);