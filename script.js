// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = document.getElementById()
var lowerCase = document.getElementById()
var numbers =  document.getElementById()
var symbols = document.getElementById()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

lowerCase: getRandomLower


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

