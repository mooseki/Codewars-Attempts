// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

// **Attempted Test Case**

function score(dice) { 
  // Fill me in!

  let uniqueDiceArr = [...new Set(dice)];

  let sortDiceArr = uniqueDiceArr.sort((a, b) => a < b);

  const countOccurences = (sortDiceArr, val) =>
    sortDiceArr.reduce((a, v) => (v === val ? a + 1 : a), 0);

  let firstSortDice = sortDiceArr[0];
  let countFirstDice = countOccurences(dice, sortDiceArr[0]);

  let secondSortDice = sortDiceArr[1];
  let countSecondDice = countOccurences(dice, sortDiceArr[1]);

  let thirdSortDice = sortDiceArr[2];
  let countThirdDice = countOccurences(dice, sortDiceArr[2]);

  let fourthSortDice = sortDiceArr[3];
  let countFourthDice = countOccurences(dice, sortDiceArr[3]);

  console.log(dice);
  console.log(sortDiceArr);
  console.log(
    `${firstSortDice}: ${countFirstDice} | ${secondSortDice}: ${countSecondDice}`
  );

  const dicePoints = {
    5: 50,
    1: 100,
    23: 200,
    33: 300,
    43: 400,
    53: 500,
    63: 600,
    13: 1000,
  };

  for (let d in dicePoints) {
    if (firstSortDice === 4 && countFirstDice === 3) {
      return dicePoints[43];
    } else if (firstSortDice === 5 && countFirstDice === 3) {
      return dicePoints[53];
    } else if (firstSortDice === 6 && countFirstDice === 3) {
      return dicePoints[63];
    } else if (
      firstSortDice === 5 &&
      secondSortDice === 4 &&
      countSecondDice === 3
    ) {
      return dicePoints[43] + dicePoints[5];
    } else if (
      firstSortDice === 5 &&
      secondSortDice === 1 &&
      countSecondDice === 3
    ) {
      return dicePoints[13] + dicePoints[5];
    } else if (
      firstSortDice === 3 &&
      countFirstDice === 2 &&
      secondSortDice === 1 &&
      countSecondDice === 3
    ) {
      return dice ? dicePoints[13] : dicePoints[1] * 3;
    } else if (
      firstSortDice === 3 &&
      countFirstDice === 1 &&
      secondSortDice === 1 &&
      countSecondDice === 4
    ) {
      return dicePoints[13] + dicePoints[1];
    } else if (
      firstSortDice === 3 &&
      countFirstDice === 2 &&
      secondSortDice === 2 &&
      countSecondDice === 3
    ) {
      return dice ? dicePoints[1] * 2 : dicePoints[1] * 3;
    } else if (
      firstSortDice === 5 &&
      countFirstDice === 1 &&
      secondSortDice === 1 &&
      countSecondDice === 4
    ) {
      return dicePoints[13] + dicePoints[1] + dicePoints[5];
    } else if (
      firstSortDice === 3 &&
      countFirstDice === 5 &&
      secondSortDice === undefined &&
      countSecondDice === 0
    ) {
      return dicePoints[1] * 3;
    } else if (
      firstSortDice === 5 &&
      countFirstDice === 1 &&
      secondSortDice === 1 &&
      countSecondDice === 4
    ) {
      return dicePoints[33] + dicePoints[5];
    } else if (
      firstSortDice === 3 &&
      countFirstDice === 1 &&
      secondSortDice === 1 &&
      countSecondDice === 4
    ) {
      return dicePoints[33] + dicePoints[5];
    } else if (
      firstSortDice === 5 &&
      countFirstDice === 1 &&
      secondSortDice === 4 &&
      countSecondDice === 3
    ) {
      return dicePoints[33] + dicePoints[5];
    } else if (
      firstSortDice === 5 &&
      countFirstDice === 1 &&
      thirdSortDice === 3 &&
      countThirdDice === 3
    ) {
      return dicePoints[33] + dicePoints[5];
    } else if (
      firstSortDice === 5 &&
      countFirstDice === 1 &&
      fourthSortDice === 1 &&
      countFourthDice === 2
    ) {
      return dicePoints[23] + dicePoints[5];
    } else {
      return 0;
    }
  }
}
