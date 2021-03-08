// Global function
function printLabel(label) {
  console.log("====================");
  console.log(label);
  console.log("====================");
}

// This is my first JavaScript code.
console.log("Hello World!!!");

// var foo = {
//   title: "world",
//   show() {
//     return ["", "", ""].map((a) => "hello " + this.title);
//   },
// };
// console.log(foo.show()); // ["hello world", "hello world"]
// //================================================
// class Foo {
//   constructor(x) {
//     this.x = x;
//   }
//   static addFooBar(f, b) {
//     return f.x + b.x + b.y;
//   }
// }
// class Bar extends Foo {
//   constructor(x, y) {
//     super(x);
//     this.y = y;
//   }
// }
// let f = new Foo(5);
// console.log(f);
// let b = new Bar(10, 1);
// console.log(b);
// console.log(Bar.addFooBar(f, b));

// function sum(...theArgs) {
//   return theArgs.reduce((previous, current) => {
//     return previous + current;
//   });
// }

// const sum1 = sum(1, 2, 3); // returns 6
// console.log(sum1);
// const sum2 = sum(1, 2, 3, 4); // returns 10
// console.log(sum2);
///////////////////////////////////////////////////////
// const myArray = [2, 4, 6];
// const sum = myArray.reduce((accumulator, element) => {
//   return accumulator + element;
// }, 0);
// console.log(sum);
// // An example that will loop through an array adding
// // each element to an accumulator and returning it
// // The 0 at the end initializes accumulator to start at 0
// // If array is [2, 4, 6], the returned value in sum
// // will be 12 (0 + 2 + 4 + 6)

// const product = myArray.reduce((accumulator, element) => {
//   return accumulator * element;
// }, 1);
// console.log(product);
// // Multiply all elements in array and return the total
// // Initialize accumulator to start at 1
// // If array is [2, 4, 6], the returned value in product
// // will be 48 (1 * 2 * 4 * 6)
printLabel("Swapping values");
let a = "red";
let b = "blue";
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);
printLabel("Conditional statements");
// Like Fri, 26 Sep 2014 18:30:00 GMT
var today = new Date();
var hour = new Date(
  //today.getFullYear(),
  //today.getMonth(),
  //today.getDate(),
  today.getHours()
  //today.getMinutes(),
  //today.getSeconds()
);
//console.log(myToday);
//let dateTime = new Date();
//let hour = 10;
if (hour >= 6 && hour < 12) console.log("Good morning!");
else if (hour >= 12 && hour < 6) console.log("Good afternoon!");
else console.log("Good evening!");

printLabel("AM/PM Date format");
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = `${hours}:${minutes}${ampm}`;
  return strTime;
}
console.log(formatAMPM(new Date()));
printLabel("For loop in JavaScript");
for (let i = 1; i < 6; i++) {
  console.log("Hello World!", i);
}
