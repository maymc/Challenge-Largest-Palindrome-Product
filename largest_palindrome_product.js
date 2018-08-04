/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function (digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  let reversedString = null;

  // do your work here
  if (digits === 2) {
    for (let factor_0 = 99; factor_0 > 90; factor_0--) {
      for (let factor_1 = 99; factor_1 > 90; factor_1--) {
        //Get the product
        console.log("factor_0: " + factor_0 + ", factor_1: " + factor_1);
        let product = factor_0 * factor_1;

        //Convert product number to a string
        console.log("product: " + product + ", type: " + typeof product);
        let productString = product.toString();
        console.log("productString: " + productString + ", type: " + typeof productString);

        //Check if it is a palindrome
        let productArr = productString.split("");
        console.log("productArr: ", productArr);
        let reversedArr = [];

        for (let i = productArr.length; i > 0; i--) {
          let popped = productArr.pop();
          reversedArr.push(popped);
          console.log(reversedArr);
          reversedString = reversedArr.join("");
          console.log(reversedString);
        }
        if (reversedString === productString) {
          console.log("It's a palindrome!");
          palindromeNumber = Number(productString);
        }
        else {
          console.log("~~~Product is not a palindrome.~~~");
        }
      }
    }
  }
  else if (digits === 3) {
    for (let factor_0 = 999; factor_0 > 990; factor_0--) {
      for (let factor_1 = 999; factor_1 > 990; factor_1--) {
        //Get the product
        console.log("factor_0: " + factor_0 + ", factor_1: " + factor_1);
        let product = factor_0 * factor_1;

        //Convert product number to a string
        console.log("product: " + product + ", type: " + typeof product);
        let productString = product.toString();
        console.log("productString: " + productString + ", type: " + typeof productString);

        //Check if it is a palindrome
        let productArr = productString.split("");
        console.log("productArr: ", productArr);
        let reversedArr = [];

        for (let i = productArr.length; i > 0; i--) {
          let popped = productArr.pop();
          reversedArr.push(popped);
          console.log(reversedArr);
          reversedString = reversedArr.join("");
          console.log(reversedString);
        }
        if (reversedString === productString) {
          console.log("It's a palindrome!");
          palindromeNumber = Number(productString);
        }
        else {
          console.log("~~~Product is not a palindrome.~~~");
        }
      }
    }
  }

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};