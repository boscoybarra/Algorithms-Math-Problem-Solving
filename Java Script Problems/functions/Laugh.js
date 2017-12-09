/*
 * Programming Quiz: Laugh
 * Copyright Udacity
 */

var laugh = function (length) {
  var laugh = ""
  for (var i = 0; i < length; i++) {
    laugh += "ha";
  }
  return laugh + "!";
}

console.log(laugh(10));
