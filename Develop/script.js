// Assignment Code
// Added all of the special characters for the password to generate
var generateBtn = document.querySelector("#generate");
var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberList = "0123456789";
var specialList = "~`!@#$%^&*()+=[]"




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
