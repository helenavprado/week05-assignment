/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/


const talkingCalendar = function(date) {
  let newDateFormat = "";
  let year = date.slice(0, 4);
  let month = date.slice(5, 7)
  let day = date.slice(8, 10)
  let newDay = "";

  switch (month) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
  }

  if (day === "01" || day === "02" || day === "03" || day === "04" || day === "05" || day === "06" || day === "07" || day === "08" || day === "09") {
    newDay = day.slice(1,2);
  } else {
    newDay = day.slice(0,2);
  }

switch (newDay) {
  case "1":
    newDay += "st";
    break;
  case "2":
    newDay += "nd";
    break;
  case "3":
    newDay += "rd";
    break;
  default:
    newDay += "th"
    break;
}

  return `${month}, ${newDay}, ${year}`
};



console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/03")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987


/*
let stringOne = "2017/12/02"
let year = stringOne.slice(0,4);
console.log(year);

let month = stringOne.slice(5, 7)
console.log(month);

let day = stringOne.slice(8, 10)
console.log(day);
*/