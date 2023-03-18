function getTime(){

     // defining variable(s)
    var ND = new Date();
    var hours = ND.getHours();
    var minutes = ND.getMinutes();
    var seconds = ND.getSeconds();
    var PA = "AM";

    // turning 00 to 12 AM
    if (hours == 0){
        hours = 12;
    }

    // changing PM and AM, 24-12
    if (hours > 12){
        hours -= 12;
        PA = "PM";
    }
    // adding 0 to numbers lower than 10
    if (hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }
    // adding everything together
    var Time = hours + ":" + minutes + ":" + seconds + PA;

    document.getElementById("ClockDisplay").innerText = Time;
    document.getElementById("ClockDisplay").textContent = Time;

    setTimeout(getTime, 1000);

}

getTime();
