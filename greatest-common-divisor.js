// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd(x, y) {
  //your code here
  let maxNum = Math.max(x, y);
  let minNum = Math.min(x, y);

  //   return (!(maxNum % 2 === 0 && minNum % 2 === 0)) ? 1 : maxNum % minNum;
  while (minNum) {
    //variable for lowest number between x and y
    let maxDivisor = minNum;

    //save as variable the remainder from dividing highest number with lowest number
    minNum = maxNum % minNum;

    //save the highest possible divisor as the highest number between x and y
    maxNum = maxDivisor;
  }

  //returns the highest possible divisor between x and y
  return maxNum;
}
