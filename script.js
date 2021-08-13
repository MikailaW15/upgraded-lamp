var generateBtn = document.querySelector("#generate");
var useUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var useLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var useSpecial =  ["!", "@", "#", "%", "^", "&", "+", "-", "/", "?", "|", "<", ">"]
var useNumbers = [0,1,2,3,4,5,6,7,8,9]
var passwordLength = prompt("Please chose between 8 and 128 charachters")
var upperCase = confirm("Do you want uppercase characters?")
var lowercase = confirm("Do you want lowercase characters?")
var Special = confirm("Do you want special characters?")
var Numbers = confirm("Do you want number characters?")
var finalCharacters = []

var Flatfinalcharacters = (finalCharacters.flat())
var password = []
  var passwordText = document.querySelector("#password");
  console.log(useUppercase[index])
  for (var i = 0; i < passwordLength; i++) 
    { var index = Math.floor(Math.random() * useuppercase.length) 
    console.log(useUppercase[index])
    passwordText.value += useuppercase[index] }
  //push random and save in password variable
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
