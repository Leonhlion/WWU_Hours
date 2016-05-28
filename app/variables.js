var somethingActive = false;
var now = new Date();
var time = now.getTime() / 1000;  // time now in milliseconds
var timeInSeconds;
var ticker;
var status;
var ind;
var prevInd = -1;
var showRetail = true;

var dayStr;
var openingHour;
var closingHour;
var closingMinute;
var currentHour;
var currentMinute;
var hoursRemaining;
var minutesRemaining;
var currentSecond;

var lastKnownIndex = 0;
var lastKnownCategory = " ";

var ind;
var category;