"use strict";

//Parameterized function declaration
function calculate(value) {
  const myValue = value * 2.54;
  console.log("The value in cm is " + myValue + "cm");
  return myValue;
}
//Method invocatuion
const width = calculate(20);
const height = calculate(30);
//Prints undefined if there's no return type.
const dimensions = [width, height];
console.log(dimensions);
