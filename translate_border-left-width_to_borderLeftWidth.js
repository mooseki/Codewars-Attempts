// Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// P.S. Hint: use split to split the string into an array, transform it and join back.

// Attempt:
function camelize(str) {
  let arr = str.split("-").splice(0, 1);
  let newArr = str.split("-").splice(1);
  for (let n of newArr) {
    let changeCase = n[0].toUpperCase().concat(n.slice(1));
    console.log(changeCase);
    arr += changeCase;
  }

  return arr;
}

// camelize("background-color"); // == 'backgroundColor'
camelize("list-style-image"); // == 'listStyleImage'
// camelize("-webkit-transition"); // == 'WebkitTransition'

// Optimized Solution:
function camelize(str) {
  return str
    .split("-") // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
