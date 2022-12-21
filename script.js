// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = "abcdefghijklmnopqrstuvwxyz";
var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
var selection = [];

//Generate Functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  var choice = prompt(
    "How many characters would like your password to contain?"
  );
  console.log(choice);

  if (choice < 8 || choice > 128) {
    choice = prompt(
      "Choose a length of at least 8 characters and no more than 128 characters"
    );
  } else {
    var specialCharacter = confirm(
      "click OK to confirm including special characters"
    );
    var numericCharacter = confirm(
      "Click OK to confirm including numerical characters"
    );
    var lowerCaseCharacter = confirm(
      "Click OK to confirm including lowercase characters"
    );
    var upperCaseCharacter = confirm(
      "Click OK to confirm including uppercase character"
    );

    if (
      !specialCharacter &&
      !numericCharacter &&
      !lowerCaseCharacter &&
      !upperCaseCharacter
    ) {
      return;
    } else if (
      specialCharacter &&
      numericCharacter &&
      lowerCaseCharacter &&
      upperCaseCharacter
    ) {
      selection = selection.concat(
        getRandomLower,
        getRandomNumber,
        getRandomSymbol,
        getRandomUpper
      );
      selection.push(
        getRandomLower,
        getRandomNumber,
        getRandomSymbol,
        getRandomUpper
      );

      //three options were selected
    } else if (
      !specialCharacter &&
      numericCharacter &&
      lowerCaseCharacter &&
      upperCaseCharacter
    ) {
      //two options were selected
    } else if (
      !specialCharacter &&
      !numericCharacter &&
      lowerCaseCharacter &&
      upperCaseCharacter
    ) {
      //one options is selected
    } else if (
      !specialCharacter &&
      !numericCharacter &&
      !lowerCaseCharacter &&
      upperCaseCharacter
    ) {
    } else if (specialCharacter) {
      selection = specialCharacter;
    } else if (numericCharacter) {
    } else if (lowerCaseCharacter) {
    } else if (upperCaseCharacter) {
    }
  }
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

// function writePassword() {
//   // var choice = prompt("How many characters would like your password to contain?");
//   // console.log(choice);
// }
