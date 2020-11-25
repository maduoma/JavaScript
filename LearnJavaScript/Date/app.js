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

// Define Date object and log it to the consoles
const date = new Date();
console.log(date);
//Get day and log it to the consoles
const day = date.getDay();
console.log(day, days[day]);
// Get today's date and log it to the consoles
const todaysDate = date.getDate();
console.log(todaysDate);
// Get month and log it to the consoles
const month = date.getMonth();
console.log(month, months[month]);
// Get full year and log it to the consoles
const year = date.getFullYear();
console.log(year);

const today =
  "${consol.log(days[day]}), ${todaysDate}, ${months[month]}, ${year}";

document.body.innerHTML = today;
