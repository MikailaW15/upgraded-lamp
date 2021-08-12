// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = document.getElementById["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var lowerCase = document.getElementById['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numbers =  document.getElementById[0,1,2,3,4,5,6,7,8,9]
var symbols = document.getElementById["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":",]

var passwordLength = prompt('Must be at least 8 characters and no more than 128 characters')
var upperCase = confirm('Would you like to use uppercase letters?')
var lowerCase = confirm('Would you like to use lowercase letters?')
var symbols = confirm('Would you like to use special symbols?')
var numbers = confirm('Would you like to use numbers ?')

var finalCharacters = []

if (upperCase) {
finalCharacters.push(useupperCase)
}
if (lowerCase) {
  finalCharacters.push(uselowerCase)
}
if (numbers) {
  finalCharacters.push(usenumbers)
}
if (symbols) {
  finalCharacters.push(usesymbols)
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

lowerCase: getRandomLower


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

