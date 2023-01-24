//---Hard
//create a function that takes in 4 numbers. mUltiply the first two numbers. If the product is greater than 100 add the sum
//of the last two numbers and console log the value. If the product is less than 100, subtract the difference of the last two
//numbers and console log the value. If the product is 100, multiple the first three numbers together and alert the remainder
//of dividing the fourth number.

function takesInFourNumbers(n1, n2, n3, n4) {
  let product = n1 * n2;
  if (product > 100) {
    console.log(product + n3 + n4);
  } else if (product < 100) {
    console.log(product - n3 - n4);
  } else {
    alert((n1 * n2 * n3) % n4);
  }
}
