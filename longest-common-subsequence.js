// Write a function called LCS that accepts two sequences and returns the longest subsequence common to the passed in sequences.
// Subsequence

// A subsequence is different from a substring. The terms of a subsequence need not be consecutive terms of the original sequence.
// Example subsequence

// Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".
// LCS examples

// LCS( "abcdef" , "abc" ) => returns "abc"
// LCS( "abcdef" , "acf" ) => returns "acf"
// LCS( "132535365" , "123456789" ) => returns "12356"

// Notes

//     Both arguments will be strings
//     Return value must be a string
//     Return an empty string if there exists no common subsequence
//     Both arguments will have one or more characters (in JavaScript)
//     All tests will only have a single longest common subsequence. Don't worry about cases such as LCS( "1234", "3412" ), which would have two possible longest common subsequences: "12" and "34".

function LCS(x, y) {
  //TODO

  // console.log(x[0]) check first index of x
  // console.log(y[0]) check first index of y

  let checkIdx = x.indexOf(y[0]);

  if (checkIdx !== -1 && x[0] === y[0] && isNaN(x[0])) {
    let xNew = x.slice(checkIdx);

    let xArr = xNew.split("");
    let yArr = y.split("");

    // console.log(xNew) // check if first index matches for both strings

    console.log(xArr);
    console.log(yArr);

    // console.log(isNaN(x[0])) check if string is a number

    const filterTwoArrays = xArr.filter((item) => yArr.includes(item));

    //   let newArr = [...new Set(filterTwoArrays)] extract unique only

    let newStr = "";

    for (let n of filterTwoArrays) {
      newStr += n;
    }

    return newStr;
  } else if (checkIdx === -1) {
    let newCheckIdx = y.indexOf(x[0]);

    let yNew = y.slice(newCheckIdx);

    let xArr = x.split("");
    let yArr = yNew.split("");

    // console.log(xNew) // check if first index matches for both strings

    console.log(xArr);
    console.log(yArr);

    // console.log(isNaN(x[0])) check if string is a number

    const filterTwoArrays = xArr.filter((item) => yArr.includes(item));

    //   let newArr = [...new Set(filterTwoArrays)] extract unique only

    let newStr = "";

    for (let n of filterTwoArrays) {
      newStr += n;
    }

    return newStr;
  } else {
    let xNew = x.slice(checkIdx);

    let xArr = xNew.split("");
    let yArr = y.split("");

    // console.log(xNew) // check if first index matches for both strings

    console.log(xArr);
    console.log(yArr);

    // console.log(isNaN(x[0])) check if string is a number

    const filterTwoArrays = yArr.filter((item) => xArr.includes(item));

    //   let newArr = [...new Set(filterTwoArrays)] extract unique only

    let newStr = "";

    for (let n of filterTwoArrays) {
      newStr += n;
    }

    return newStr;
  }
}

// LCS( "abcdef" , "abc" ) // => returns "abc"
// LCS( "anothertest" , "notatest" ) // => returns "abc"
// LCS( "finaltest" , "zzzfinallyzzz" ) // => returns "abc"
// LCS( "abcdef" , "acf" ) // => returns "acf"
// LCS( "132535365" , "123456789" ) // => returns "12356"
// LCS("a", "b") // => returns ""
// LCS("abcdef", "abc") // => returns "abc"
