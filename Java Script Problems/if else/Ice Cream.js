/*

Copyright: Udacity

Directions:
Ice cream is one of the most versatile desserts on the planet because it can be done up so many different ways. Using logical operators, write a series of complex logical expressions that prints only if the following conditions are true:

if flavor is set to vanilla or chocolate and
if vessel is set to cone or bowl and
if toppings is set to sprinkles or peanuts
If the above conditions are true, then print out:

I'd like two scoops of __________ ice cream in a __________ with __________.
Fill in the blanks with the flavor of the ice cream, vessel, and toppings. For example,

I'd like two scoops of vanilla ice cream in a cone with peanuts.

*/

var flavor = "chocolate"; // Enter your flavour
var vessel = "cone"; // Enter your vessel
var toppings = "sprinkles"; // Enter your toppings

if (flavor === "chocolate" && vessel === "cone" && toppings === "sprinkles"){
  console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings  + ".");
} else {
  console.log("Hello, I'm more into " + flavor + "I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings  + ". Thank you! 🤗");
}


