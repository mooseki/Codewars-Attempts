// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
// What is considered Valid?

// A string of braces is considered valid if all braces are matched with the correct brace.
// Examples

// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// Solution Attempt

function validBraces(braces) {
  //TODO
  let test1 =
    braces.includes("(") &&
    braces.includes(")") &&
    braces.indexOf("(") < braces.indexOf(")") &&
    [...braces].reverse().join("").indexOf("(") >
      [...braces].reverse().join("").indexOf(")")
      ? 1
      : 0;

  let test2 =
    braces.includes("[") &&
    braces.includes("]") &&
    braces.indexOf("[") < braces.indexOf("]") &&
    [...braces].reverse().join("").indexOf("[") >
      [...braces].reverse().join("").indexOf("]")
      ? 1
      : 0;

  let test3 =
    braces.includes("{") &&
    braces.includes("}") &&
    braces.indexOf("{") < braces.indexOf("}") &&
    [...braces].reverse().join("").indexOf("{") >
      [...braces].reverse().join("").indexOf("}")
      ? 1
      : 0;

  let result = Number(test1) + Number(test2) + Number(test3);

  if ((result <= 2 && braces.length > 2) || result === 0) {
    return false;
  } else {
    return true;
  }
}
