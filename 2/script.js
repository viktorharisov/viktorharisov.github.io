const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var myDate ={
  'hr' : 0,
  'min' : 0,
  'sec' : 0
}

function myDateF(){

  var date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  myDate ={
  'hr' : hr,
  'min' : min,
  'sec' : sec
  }
}

function checkDate(){
  myDateF();
  if(myDate.hr >= 12 && myDate.hr <= 13)
    document.getElementById('yyy').classList.remove('yyy');
  else
    document.getElementById('yyy').classList.add('yyy');
  //console.log("Hour: " + hr + " Minute: " + min + " Second " + sec);
}

function runTheClock() {
  checkDate();
  //console.log("Hour: " + hr + " Minute: " + min + " Second " + sec);

  let hrPosition = myDate.hr * 360 / 12 + (myDate.min * (360 / 60) / 12); // на сколько поворачивается часовая стрелка
  let minPosition = myDate.min * 360 / 60 + (myDate.sec * (360 / 60) / 60) ; // на сколько поворачивается минутная стрелка
  let secPosition= myDate.sec * 360 / 60; // на сколько поворачивается секундная стрелка

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 100);
