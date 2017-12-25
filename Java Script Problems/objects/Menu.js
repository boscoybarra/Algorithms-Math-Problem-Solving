
/*
 * Programming Quiz: Menu Items
 * Copyright Udacity

Directions:

Create a breakfast object to represent the following menu item:

The Lumberjack - $9.95
eggs, sausage, toast, hashbrowns, pancakes
The object should contain properties for the name, price, and ingredients.

 */

// Answer

var breakfast = {
  name: "The Lumberjack",
  price: "$9.95",
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"],
};


// Another Object Example

var myObj = {
  color: "orange",
  shape: "sphere",
  type: "food",
  eat: function() { return "yummy" }
};

console.log(myObj.eat()); // prints the function
myObj.color; // property
