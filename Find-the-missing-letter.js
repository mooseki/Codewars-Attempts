// Instructions

// #Find the missing letter 

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

// Solution Attempt

function findMissingLetter(array) {
  let alphabetLowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const arrayFirstLetter = array[0];

  const arrayLastLetter = array[array.length - 1];

  if (arrayFirstLetter !== arrayFirstLetter.toUpperCase()) {
    let idxOfArrayFirstLetter = alphabetLowerCase.indexOf(arrayFirstLetter);

    let idxOfArrayLastLetter = alphabetLowerCase.indexOf(arrayLastLetter) + 1;

    let alphabetSlice = alphabetLowerCase.slice(
      idxOfArrayFirstLetter,
      idxOfArrayLastLetter
    );

    for (let letter of alphabetSlice) {
      if (array.indexOf(letter) === -1) {
        return letter;
      }
    }
  } else {
    let alphabetUpperCase = alphabetLowerCase.map((ele) => {
      return ele.toUpperCase();
    });

    let idxOfArrayFirstLetter = alphabetUpperCase.indexOf(arrayFirstLetter);

    let idxOfArrayLastLetter = alphabetUpperCase.indexOf(arrayLastLetter) + 1;

    let alphabetSlice = alphabetUpperCase.slice(
      idxOfArrayFirstLetter,
      idxOfArrayLastLetter
    );

    for (let letter of alphabetSlice) {
      if (array.indexOf(letter) === -1) {
        return letter;
      }
    }
  }
}
