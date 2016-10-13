/**
 * Created by Administrator on 2016/10/10.
 */
var time = document.querySelector(".time");
var timeI = document.querySelector(".timeI");
//var data = new Date();
var hour = new Date().getHours();
var minute = new Date().getMinutes();

function getTime(){
    if(minute<10){
        minute = "0" + minute;
    }
    if(hour>12||hour==12){
        if(hour==12){
            hour = hour;
        }else{
            hour = hour%12;
        }
        timeI.innerHTML = "<i class=\"timeI\">PM</i>";
        time.innerHTML = hour + ":" + minute + timeI.innerHTML;

    }else{
        timeI.innerHTML = "<i class=\"timeI\">AM</i>";
        time.innerHTML = hour + ":" + minute + timeI.innerHTML;
    }
}
getTime();

setInterval(function(){
    hour = new Date().getHours();
    minute = new Date().getMinutes();
    /*if(minute<10){
        minute = "0" + minute;
    }
    time.innerHTML = hour + ":" + minute + timeI.innerHTML;*/
    getTime();
    //console.log(time.innerHTML);
},1000);

