// Assignment Code
var generateBtn = document.querySelector("#generate");


var characters = "abcdefghijklmnopqrstuvwxyz"
var passwordLength = 128;
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numericCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseCharacter = ("abcdefghijklmnopqrstuvwxyz");
var upperCaseCharcter = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var selection = [];


function generatePassword() {

  // for (var i = 8; i <= passwordLength; i++) {


  // }

  var choice = prompt("How many characters would like your password to contain?");
  console.log(choice);

if (choice < 8 || choice > 128 ){
  choice =prompt("Choose a length of at least 8 characters and no more than 128 characters");
} else {
var specialCharacter = confirm("click OK to confirm including special characters");
var numericCharacter = confirm("Click OK to confirm including numerica characters");
var lowerCaseCharacter = confirm("Click OK to confirm including lowercase characters");
var upperCaseCharacter = confirm("Click OK to confirm including uppercase character");

if (!specialCharacter && !numericCharacter && !lowerCaseCharacter &&  !upperCaseCharacter ) {

} else if (specialCharacter && numericCharacter && lowerCaseCharacter &&  upperCaseCharacter ) {
        selection = specialCharacter.concat(numericCharacter, lowerCaseCharacter, upperCaseCharacter); 

//three options were selected
} else if (!specialCharacter && numericCharacter && lowerCaseCharacter &&  upperCaseCharacter ){

//two options were selected
} else if (!specialCharacter && !numericCharacter && lowerCaseCharacter &&  upperCaseCharacter ){

//one options is selected
} else if (!specialCharacter && !numericCharacter && !lowerCaseCharacter &&  upperCaseCharacter ){

} else if (specialCharacter) {
    selection = specialCharacter;
} else if (numericCharacter) {

} }



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
  // var x = prompt("How many characters would like your password to contain?");
  // console.log(x);
}


