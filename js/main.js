// 1. Copy the code below into the JavaScript file
var testString = "";
var testArray = [];
var outPlace = document.getElementById("outputHere");

// 7. When the user presses the enter key in the text input, or clicks the button, set the value of the `testString` variable (see below) to the value of the input.
document.getElementById("stringBox").addEventListener("keydown", function(e){
  if (e.keyCode == 13){
    e.preventDefault();
    // console.log('getInput Called.');
    getInput();
  }
});

document.getElementById("executeBtn").addEventListener("click", function(e){
  // console.log('getInput Called.');
  getInput();
});

// 4. Implement the logic in the `reversal` function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
function reversal(a) {
  // console.log('reversal Called, returning: ', a.split("").reverse().join(""));
  return a.split("").reverse().join("");
}

// 5. Implement the logic in the `alphabits` function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
function alphabits(a) {
  // console.log('alphabits Called, returning: ', a.split("").sort());
  return a.split("").sort().join("");
}

// 6. Implement the logic in the `palindrome` function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
function palindrome(a) {
  // console.log('palindrome called. returning: ', testString == reversal(testString));
  if(testString.replace(/[^A-Za-z0-9]/g, "").toUpperCase() == reversal(testString).replace(/[^A-Za-z0-9]/g, "").toUpperCase()){
    var outStr = "Your string is a palindrome!";
  } else {
    var outStr = "Your string is NOT a palindrome!";
  };
  return outStr;
}

function getInput(){
  // console.log('getInput Answered.');
  testString = document.getElementById("stringBox").value;
  // testArray = testString.split("");
  var outputString = "<ul><li>" + reversal(testString) + "</li><li>" + alphabits(testString) + "</li><li>" + palindrome(testString) + "</li></ul>";
// 8. The output of each of the functions should immediately appear as well.
  outPlace.innerHTML = outputString;
}

