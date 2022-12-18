// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
var characters = "abcdefghijklmnopqrstuvwxyz"
var passwordLength = 128;
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numericCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseCharacter = ("abcdefghijklmnopqrstuvwxyz");
var upperCaseCharcter = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");


  for (var i = 8; i <= passwordLength; i++) {


  }

if ()


}

var specialCharacter = confirm("click OK to confirm including special characters");
var numericCharacter = confirm("Click OK to confirm including numerica characters");
var lowerCaseCharacter = confirm("Click OK to confirm including lowercase characters");
var upperCaseCharcter = confirm("Click OK to confirm including uppercase character");


if (specialCharacter == "true"){

} else if (numericCharacter == "true") {

} else if (lowerCaseCharacter == "true"){

} else if (upperCaseCharcter == "true"){

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button


var generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", writePassword, true);

function writePassword() {
  var x = prompt("How many characters would like your password to contain?");
  console.log(x);
}


