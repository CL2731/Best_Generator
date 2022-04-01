// Assignment Code
var generateBtn = document.querySelector("#generate");

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var let1 = ["A", "B", "c","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(let1);
var special = ["!", "$", "&", "+"];
var ranchar = "";
var userinput = 0;
// Write password to the #password input
function writePassword() {
 var passwordText = document.querySelector("#password");
  paslenth();
  ranchar
  //passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getusin (){
    var lower= confirm ("Would you like lowercase letters included?")
    var upper= confirm ("Would you like uppercase letters inculded?")
    var bers = confirm ("Would you like numbers included?")
    var spec = confirm ("Would you like special symbols included?")

    if (!lower && !upper && !bers && !spec) {
      alert("Must choose at least one.")
    } else {
      if (lower === true){
        ranchar= ranchar.concat(letters)
        console.log(ranchar)
      } 
      if (upper === true){
        ranchar= ranchar.concat(let1)
      }
      if (bers === true){
        ranchar= ranchar.concat(numbers)
      }
      if (spec === true){
        ranchar= ranchar.concat(special)
      } 
      console.log(ranchar)
    } console.log(userinput)
}

function paslenth (){
  userinput = prompt("How many characters would you like your password to be?\nMust be at least 8 and no more than 128.")
  if (userinput > 7 && userinput < 129) {
    getusin();
  } else if (userinput <= 7 || userinput >= 129) {
    alert("You have not entered valid information.")
  } else if (userinput === null) {
    alert("Invalid input.");
  }
 var  = Math.floor(Math.random() * ranchar)
}
