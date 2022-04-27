let userName = prompt("Adınızı Giriniz");
let myName=document.querySelector("#myName");
let clock = document.querySelector("#myClock");
let day = document.querySelector("#nowDayName");


if(userName){
    myName.innerHTML = `${userName}`;
}


function displayClock(){
  var display = new Date().toLocaleTimeString();
  clock.innerHTML = display;
  setTimeout(displayClock, 1000); 
}

function displayDayName(){
    let date = new Date();
    var days= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let dayName = days[date.getDay()];
    day.innerHTML = dayName; 
}

displayClock();
displayDayName();