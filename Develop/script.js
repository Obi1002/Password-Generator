// Assignment Code
// Added all of the characters for the password to generate
var generateBtn = document.querySelector("#generate");
var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberList = "0123456789";
var specialList = "~`!@#$%^&*()-_+=[]";

// Write password to the #password input
function generatePassword() {
  var password = [];
  var passwordLength = prompt("How many characters would you like your password to be? Please enter a number between 8 and 128");
    if (!passwordLength) {
      return ("");
    }
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a password length between 8 and 128 characters.")
      var tryAgain = confirm("Would you like to try again?");
      if (tryAgain) {
        generatePassword();
      } else {
        return ("");
      }
    }
    if (isNaN(parseInt (passwordLength))) {
      alert("Please only enter a numerical value");
      var tryAgain = confirm("Would you like to try again?");
      if (tryAgain) {
        generatePassword();
      } else {
        return ("");
      }
    }
  var lowCase = confirm("Would you like your password to include lowercase letters?");
    console.log(lowCase);
  var upCase = confirm("Would you like your password to include upcase letters?");
    console.log(upCase);
  var numbers = confirm("Would you like your password to include numbers?");
    console.log(numbers);
  var specialChars = confirm("Would you like your password to include special characters?");
    console.log(specialChars);
  var passwordSet = "";

    if (lowCase) {
      passwordSet = lowercaseList;
    }
    if (upCase) {
      passwordSet = passwordSet + uppercaseList
    }
    if (numbers) {
      passwordSet = passwordSet + numberList;
    }
    if (specialChars) {
      passwordSet = passwordSet + specialList;
    }
    console.log(passwordLength);
    for ( var i = 0; i < passwordLength; i++ ) {
      password += passwordSet [Math.floor(Math.random() * passwordSet.length)];
  }
  return password;
};

function writePassword() {
  var password = generatePassword()

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
