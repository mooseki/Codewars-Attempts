// Filter range

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

// Attempt:
function filterRange(arr, a, b) {
  let newFilterRange = [];
  for (let num of arr) {
    console.log(num);
    if (num >= a && num <= b) {
      newFilterRange.push(num);
    }
  }
  return newFilterRange;
}

// console.log(filterRange([5, 3, 8, 1], 1, 4));

// Optimized solution
function filterRange(arr, a, b) {
  // added brackets around the expression for better readability
  return arr.filter((item) => a <= item && item <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (matching values)

alert(arr); // 5,3,8,1 (not modified)
