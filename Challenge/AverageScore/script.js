"use strict";

const johnAverageScore = (30 + 30 + 5) / 3;
const peterAverageScore = (30 + 30 + 50) / 3;
const samuelAverageScore = (30 + 30 + 50) / 3;
console.log(johnAverageScore, peterAverageScore, samuelAverageScore);

if (
  johnAverageScore > peterAverageScore &&
  johnAverageScore > samuelAverageScore
) {
  console.log("John's wins with " + johnAverageScore + " points!");
} else if (
  peterAverageScore > johnAverageScore &&
  peterAverageScore > samuelAverageScore
) {
  console.log("Pete's with " + peterAverageScore + " points!");
} else if (
  samuelAverageScore > johnAverageScore &&
  samuelAverageScore > peterAverageScore
) {
  console.log("Samuel's wins with " + samuelAverageScore + " points!");
} else {
  console.log("There's a draw with " + johnAverageScore + " points!");
}
