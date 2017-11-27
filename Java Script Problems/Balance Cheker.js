/*
 * Programming Quiz - Checking Your Balance. Copy Right From Udacity.
 */

 /*
 Problem

 Write the code to represent checking your balance at the ATM with the possible scenarios.

 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.0856;
var checkBalance = true;
var isActive = true;

// Code

if (checkBalance && isActive && balance > 0 === true){
  console.log("Your balance is " + balance.toFixed(2) + ".");
} else if (checkBalance === false) {
  console.log("Thank you. Have a nice day!");
} else if (isActive === false) {
  console.log("Your account is no longer active");
} else if (balance === 0) {
  console.log("Your account is empty. Get some cash, for real.");
} else if (balance < 0) {
  console.log("Your balance is negative. Please contact bank.");
}
