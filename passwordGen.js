// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","=","+","_"]
var letterLow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var letterUp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 
var numbers = [0,1,2,3,4,5,6,7,8,9]



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 passwordText.value = password;
 for (var i = 0; i < specialChar.length; i++) {
  var todo = todos[i];
}
password(document.textContent)


/*Password Length prompt*/
var plength = prompt("How long would you like your password to be?")

/*Restriction for password length through alert*/
if (plength < 8 || plenght > 128){
  alert("Length must be 8 to 128 characters.")
}
/*Confirms for characters to be used*/
if(plength >= 8 && plenght <= 128){
  var cUpp = confirm("Would you like to use upper case letters?") 
  var cLow = confirm("Would you like to use lower case letters?")
  var cNum = confirm("Would you like to use numbers?")
  var cSym = confirm("Would you like to use symbols?")
}
/*Statement for a requirement of at least one confirm for password characters*/
if(cUpp !== true && cLow !== true && cNum !== true && cSym !== true){
  alert("You must select at least one character!")
}
/*Random math functions for each character type*/
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random()));
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()));
}

function getRandomNumeric(){
  String.fromCharCode(Math.floor(Math.random()));
}
function getRandomSymbol(){
  String.fromCharCode(Math.floor)(Math.random());
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  numeric: getRandomNumeric,
  symbol: getRandomSymbol
}


 







/*Statement for when the user does not have a valid input*/
if (letterLow === false &&
letterUp === false &&
numbers === false &&
specialChar === false){
    alert("Please enter a valid character.")
}











/*randomChar generator of the arrays, create function for generate password
promps and confirms, go through truthee/falsee statements for questions, you have
to parse int use && + char length to concatinate strings. .concat can be used 
add evnet listeners for the buton, math.floor and math.random, use return, random index,
create separate things for each array, use push maybe, after creating the array
use an empty var array to iterate through ex: userInput[];, password.join or 
concatination, confirm do you want to use each type of characters individually*/ 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
