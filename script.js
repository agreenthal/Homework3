// Assignment Code
let generateBtn = document.querySelector("#generate");
const lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let passwordLength = prompt("5, 8 or 10 characters?");

//Create a loop that pulls the required number of characters from array
while(password[randomIndex] !== undefined) {
  randomIndex = Math.floor(Math.random() * option.length);
}


let option = {
  needsLower: true,
  needsNumber: true,
  length: 10
}

// Write password to the #password input
function generatePassword() {
  passwordArray = [];

  let password = generatePassword();
  let passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
  
}
