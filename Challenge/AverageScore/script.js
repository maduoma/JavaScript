const johnAverageScore = (30 + 30 + 440) / 3;
const peterAverageScore = (30 + 30 + 50) / 3;
const samuelAverageScore = (30 + 30 + 50) / 3;
console.log(johnAverageScore, peterAverageScore, samuelAverageScore);

if (
  johnAverageScore > peterAverageScore &&
  johnAverageScore > samuelAverageScore
) {
  console.log("John's average is higher than the other 2!");
} else if (
  peterAverageScore > johnAverageScore &&
  peterAverageScore > samuelAverageScore
) {
  console.log("Pete's average is higher than the other two!");
} else if (
  samuelAverageScore > johnAverageScore &&
  samuelAverageScore > peterAverageScore
) {
  console.log("Samuel's average is higher than the other two!");
} else if (
  johnAverageScore === peterAverageScore &&
  peterAverageScore === samuelAverageScore
) {
  console.log("They all have the same average!");
} else {
  console.log("There's no match!");
}
