"use strict";



function norwegian(){
  var format = "D DD-MM-YYYY DDD"
  document.getElementById("title").innerHTML = "Nedtelling til gitt dato"
  document.getElementById("header").innerHTML = "Nedtelling"
  document.getElementById("datee").innerHTML = "Dato"
  document.getElementById("time").innerHTML = "Tid"
  display(format);
}

function english(){
  var format = "D MM-DD-YYYY DDD DD"
  document.getElementById("title").innerHTML = "It's the final countdown"
  document.getElementById("header").innerHTML = "Countdown"
  document.getElementById("datee").innerHTML = "Date"
  document.getElementById("time").innerHTML = "Time"
  
  display(format);
}


function display(format) {

  setInterval(function(){
  dateConvert(format)
}, 1);

function dateConvert(format){
  var year = new Date().getFullYear();
  var month= ("0" + (new Date().getMonth()+1)).slice(-2);
  var date = ("0" + new Date().getDate()).slice(-2);
  // var hours = ("0" + new Date().getHours()).slice(-2);
  var minutes = ("0" + new Date().getMinutes()).slice(-2);
  var seconds = ("0" + new Date().getSeconds()).slice(-2);
  var day = getDayName("en-US");

  if (format == "D DD-MM-YYYY DDD") {
    var hours = (("0" + new Date().getHours()).slice(-2));
    var day = getDayName("no-NO");
    var converted_date = day + "  " + date + "-" + month + "-" + year + "  " + hours + ":" + minutes + ":" + seconds;
    document.getElementById("date").innerHTML = converted_date;
  
  } else if (format == "D MM-DD-YYYY DDD DD"){
    var day = getDayName("en-US");
    var hours = new Date().getHours();
  

    if (hours <= 12) {
      var hours = (("0" + new Date().getHours()).slice(-2));
      var converted_date = day + "  " + month + "-" + date + "-" + year + "  " + hours + ":" + minutes + ":" + seconds + " AM";

    } else {
      hours = hours - 12;
      var converted_date = day + "  " + month + "-" + date + "-" + year + "  " + hours + ":" + minutes + ":" + seconds + " PM";

    }
  }
    document.getElementById("date").innerHTML = converted_date;
  } 



}

function getDayName(locale) {
  return new Date().toLocaleDateString(locale, {weekday: 'long' });
}




