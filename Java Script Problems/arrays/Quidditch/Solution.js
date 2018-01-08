/*
* Programming Quiz: Quidditch Cup
* Copyright Udacity
* Directions:
* Create a function called hasEnoughPlayers() that takes the team array as an argument and returns true or
* false depending on if the array has at least seven players.
 */

// your code goes here

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(array) {
  if (array.length >= 7){
    return true
  } else {
    return false
  }
}

console.log(hasEnoughPlayers(team));
