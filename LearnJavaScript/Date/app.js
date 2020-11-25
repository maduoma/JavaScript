// Months of the year
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Days of the week
const days = [
  "Monday",
  "Tuesday",
  "Wenesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Define Date object
const date = new Date();
console.log(date);
//Get day
const day = date.getDay();
console.log(day, days[day]);
// Get today's date
const todaysDate = date.getDate();
console.log(todaysDate);
// Get month
const month = date.getMonth();
console.log(month, months[month]);
// Get full year
const year = date.getFullYear();
console.log(year);

const today =
  "${consol.log(days[day]}), ${todaysDate}, ${months[month]}, ${year}";

document.body.innerHTML = today;
