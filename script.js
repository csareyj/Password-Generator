// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


//Event Listener and Dialogue Prompt Options
generateBtn.addEventListener("click", optionsCrit);

function optionsCrit() {

  var characters = prompt("How many characters should the password containt (8-128)");
  var upperCase = prompt("Should the password contain uppercase Letters?");
  var lowerCase = prompt("Should the password contain lowercase Letters");
  var numbers = prompt("Should the password contain numbers?");
  var symbols = prompt("Should the password contain symbols?");

  //Character length

  if (characters > 7 && characters < 129) {
    var length = parseInt(characters, 10);
    console.log("length: " + length);
  } else {
    var length = false;
    alert("Invalid Password length");
  }

  // if input is "yes" return true
  if (upperCase.toLowerCase() === 'yes') {
    var hasUpper = true;
    console.log("upper: " + hasUpper);
  }
  if (lowerCase.toLowerCase() === 'yes') {
    var hasLower = true;
    console.log("lower: " + hasLower);
  }
  if (numbers.toLowerCase() === 'yes') {
    var hasNumbers = true;
    console.log("number: " + hasNumbers);
  }
  if (symbols.toLowerCase() === 'yes') {
    var hasSymbols = true;
    console.log("symbol: " + hasSymbols);
  }
  passwordText.value = generatePassword(hasUpper, hasLower, hasNumbers, hasSymbols, length);
}

function passwordOptions(input) {
  let randomChar;
  if (input === "hasUpper") {
    randomChar = getRandomUpper();
  }
  if (input === "hasLower") {
    randomChar = getRandomLower();
  }
  if (input === "hasNumbers") {
    randomChar = getRandomNumber();
  }
  if (input === "hasSymbols") {
    randomChar = getRandomSymbol();
  }
  return randomChar;
}


//Generate password function and Write password to the #password input

function generatePassword(hasUpper, hasLower, hasNumbers, hasSymbols, length) {
  let generatedPassword = "";

  const typesCount = hasUpper + hasLower + hasNumbers + hasSymbols;

  const typesArr = [{ hasUpper }, { hasLower }, { hasNumbers }, { hasSymbols }]

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(function (type) {
      const funcName = Object.keys(type)[0];
      generatedPassword = generatedPassword + passwordOptions(funcName);
      console.log("password: " + generatedPassword);
    });
  }

  console.log("password: " + generatedPassword);
  return generatedPassword;

}

// Password generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()<>?,."
  return symbols[Math.floor(Math.random() * symbols.length)];
}

