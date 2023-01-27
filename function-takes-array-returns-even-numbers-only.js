// Create a function that takes in an array of numbers. Return a new array containing every even number from the original array. (Bonus: do not use map or filter)

function returnEvenNums(arr) {
  let newArr = [];

  arr.forEach((e) => {
    if (e % 2 === 0) {
      newArr.push(e);
    }
  });

  return newArr;
}

returnEvenNums([2, 15, 16, 20, 21]);
