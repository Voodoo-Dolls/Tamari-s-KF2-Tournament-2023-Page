var current = document.getElementById("current_page");
var background = document.getElementById("background");
var image1 = "url(/img/tournament_bg.webp)";
var image2 = "url(/img/community_bg.webp)";
var image3 = "url(/img/cd_bg.webp)";


const background_images ={
    ["TOURNAMENT INFO"]:image1,
    ["OUR COMMUNITY"]:image2,
    ["ABOUT CD"]:image3
};



background.style.backgroundImage = background_images[current.innerHTML];




////////// CONFIGURE THE SCRIPT HERE //////////////////

var month = '8';     //  '*' for next month, '0' for this month or 1 through 12 for the month 
var day = '21';       //  Offset for day of month day or + day  
var hour = 0;        //  0 through 23 for the hours of the day
var tz = -8;         //  Offset for your timezone in hours from UTC
var lab = 'tzpst';    //  The id of the page entry where the timezone countdown is to show. For example on this page, <span id="tzpst"></span>

function start() {displayTZCountDown(setTZCountDown(month,day,hour,tz),lab);}

    // **    The start function can be changed if required   **
window.onload = start;

////////// DO NOT EDIT PAST THIS LINE //////////////////

function setTZCountDown(month,day,hour,tz) 
{
var toDate = new Date();
if (month == '*')toDate.setMonth(toDate.getMonth() + 1);
else if (month > 0) 
{ 
if (month <= toDate.getMonth())toDate.setYear(toDate.getYear() + 1);
toDate.setMonth(month-1);
}
if (day.substr(0,1) == '+') 
{var day1 = parseInt(day.substr(1));
toDate.setDate(toDate.getDate()+day1);
} 
else{toDate.setDate(day);
}
toDate.setHours(hour);
toDate.setMinutes(0-(tz*60));
toDate.setSeconds(0);
var fromDate = new Date();
fromDate.setMinutes(fromDate.getMinutes() + fromDate.getTimezoneOffset());
var diffDate = new Date(0);
diffDate.setMilliseconds(toDate - fromDate);
return Math.floor(diffDate.valueOf()/1000);
}
function displayTZCountDown(countdown,tzpst) 
{
if (countdown < 0) document.getElementById(tzpst).innerHTML = "00:00:00"; 
else {var secs = countdown % 60; 
if (secs < 10) secs = '0'+secs;
var countdown1 = (countdown - secs) / 60;
var mins = countdown1 % 60; 
if (mins < 10) mins = '0'+mins;
countdown1 = (countdown1 - mins) / 60;
var hours = countdown1 % 24;
var days = (countdown1 - hours) / 24;
document.getElementById(tzpst).innerHTML = (days).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) +":" + (hours).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+ ':' +mins+ ':'+secs;
setTimeout('displayTZCountDown('+(countdown-1)+',\''+tzpst+'\');',999);
}
}
//-->



























