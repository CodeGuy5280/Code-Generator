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
}
passoword(document.textContent)





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
