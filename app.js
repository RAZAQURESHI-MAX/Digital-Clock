var hourSp = document.getElementById("hours");

var minSp = document.getElementById("mins");

var secSp = document.getElementById("secs");

var dateSp = document.getElementById("date");

var monthSp = document.getElementById("month");

var yearSp = document.getElementById("year");

setInterval(() => {
    
    var time = new Date();

    

    hourSp.innerText = time.getHours() + ":";

    minSp.innerText = time.getMinutes() + ":";

    secSp.innerText = time.getSeconds() + "  ";

    dateSp.innerText = time.getDate() + "- ";

    monthSp.innerText = time.getMonth() + "- " ;

    yearSp.innerText = time.getFullYear();


if (time.getDate()<24 && time.getDate()<12) {
    document.getElementById("event").innerText="am";
}
else{
    document.getElementById("event").innerText="pm";
}




















}, );