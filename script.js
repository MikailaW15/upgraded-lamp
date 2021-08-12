// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = document.getElementById()
var lowerCase = document.getElementById('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')
var numbers =  document.getElementById()
var symbols = document.getElementById()

var passwordLength = prompt('Must be at least 8 characters and no more than 128 characters')
var cap = confirm()
var lower = confirm()
var special = confirm()
var numbers = confirm()


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

lowerCase: getRandomLower


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

