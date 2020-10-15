// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","=","+","_"]
var letterLow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var letterUp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 
var numbers = [0,1,2,3,4,5,6,7,8,9]
//var finalPassword = []
var userChoice = []
console.log(userChoice)

/*randomChar generator of the arrays, create function for generate password
promps and confirms, go through truthee/falsee statements for questions, you have
to parse int use && + char length to concatinate strings. .concat can be used 
add evnet listeners for the buton, math.floor and math.random, use return, random index,
create separate things for each array, use push maybe, after creating the array
use an empty var array to iterate through ex: userInput[];, password.join or 
concatination, confirm do you want to use each type of characters individually*/ 

//Function to generate password with codeblock to run the full program
function generatePassword() {
  var passwordFinal = [i]
  
//password length var w/ prompt to initiate initial user input.
  var plength = parseInt(prompt("How long would you like your password to be?"))
  //console.log(plength)

  //requirement of password length
  if (plength < 8 || length > 128) {
    alert("Password length is between 8 and 128.")
  }
 //vars w/ prompts for char selection through user input
  function passwordChoice(){
    var plength = prompt ("Please enter 8 to 128 characters.")
    var letterUp = confirm("Would you like to use upper case letters?") 
    var letterLow= confirm("Would you like to use lower case letters?")
    var numbers = confirm("Would you like to use numbers?")
    var specialChar = confirm("Would you like to use symbols?")
    
  }
  
  //console.log(cUpp)
  // if (NaN(passwordChoice)|| passwordChoice < 8 || passwordChoice > 128)

  if (parseInt([Array.length]) >= 8 && parseInt([Array.length] <= 128))
      if (letterLow) userChoice = userChoice.concat(letterLow);
      if (letterUp) userChoice = userChoice.concat(letterUp);
      if (numbers) userChoice = userChoice.concat(numbers);
      if (specialChar) userChoice = userChoice.concat(specialChar);

      
     var userChoice = {
       confirmStrlength: confirmStrlength,
       confirmspecialChar: confirmspecialChar,
       confirmnumbers: confirmnumbers,
       confirmletterUp: confirmletterUp,
       conrimletterLow: confirmletterLow
     }
    

     for (var i = 0; i < parseInt(Array.length); i++){
       var rVar = math.floor(math.random() * userChoice.length);
       var charRand = userChoice[random];
     }
     var userChoice = [i];
  //alert will show if no confirm is chosen as true by the user.
  if (letterLow == false &&
      letterUp == false &&
      numbers == false &&
      specialChar == false){
      alert("Please enter a valid character.")
      }
  // based off of prompts concat arrays
  if (userChoice.confirmletterUp === true) {
    randomCharacters=randomCharacters.concat(uppercase)
      chosenRandomPassword.push(randomFunctions(uppercase));
    };
  if (userChoice.confirmletterLow === true) {
    randomCharacters=randomCharacters.concat(lowercase)
     chosenRandomPassword.push(randomFunctions(lowercase));
  };
  if (userChoice.confirmnumbers === true) {
    randomCharacters=randomCharacters.concat(numbers)
      chosenRandomPassword.push(randomFunctions(numbers));
    };
  if (userChoice.confirmspecialChar === true) {
    randomCharacters=randomCharacters.concat(Symbols)
   chosenRandomPassword.push(randomFunctions(Symbols));
};
  for (let i = 0; i < passwordOptions.length; i++) {
     var randomCharacters = randomFunctions(randomOptions)
     result = passwordOptions[i]
  };
  for (let i = 0; i < randomFunctions.length; i++) {
    result = randomFunctions[i]
  };

  //based off the users request of length
  //randomize a selection from that giant array

  return passwordFinal = [i]
}
//Function to write password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);













// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//  passwordText.value = password;

// // loop - set your iterator; conditional ; var++
//  for (var i = 0; i < specialChar.length; i++) {
//   var todo = todos[i];
// }
// password(document.textContent)

// /*Password Length prompt*/
// var plength = prompt("How long would you like your password to be?")

// /*Restriction for password length through alert*/
// if (plength < 8 || plenght > 128){
//   alert("Length must be 8 to 128 characters.")
// }
// /*Confirms for characters to be used*/
// if(plength >= 8 && plength <= 128){
//   var cUpp = confirm("Would you like to use upper case letters?") 
//   var cLow = confirm("Would you like to use lower case letters?")
//   var cNum = confirm("Would you like to use numbers?")
//   var cSym = confirm("Would you like to use symbols?")
//   console.log(cUpp)
// }
// //1 array and use method and use .concat with second array as the argument.
// //for loop to choose a random character
// for (var i = 0; i <= length; i++){
//   var randomChar = userChoice[Math.floor(Math.random()* userChoice.length)]
//   console.log(Math.floor(Math.random() * )  
// }

// /*Statement for a requirement of at least one confirm for password characters*/
// if(cUpp !== true && cLow !== true && cNum !== true && cSym !== true){
//   alert("You must select at least one character!")
// }
// /*Random math functions for each character type*/
// function getRandomLower(){
//   return String.fromCharCode(Math.floor(Math.random()* 128));
// }

// function getRandomUpper(){
//   return String.fromCharCode(Math.floor(Math.random())* 128);
// }

// function getRandomNumeric(){
//   String.fromCharCode(Math.floor(Math.random())* 128);
// }
// function getRandomSymbol(){
//   String.fromCharCode(Math.floor)(Math.random());
// }


// if (parsseInt(length) >=8 && parseInt(length <=128) {
//   if (letterLow) userChoice = userChoice.concat();
//   if (letterUp) userChoice = userChoice.concat();
// }
// if (numbers) userChoice = userChoice.concat(numbers);
// if(specialChar) userChoice = userChoice.concat(specialChar)
// /*wheat do they want to add the password, length, special char (low/upp)
// build out the selection of char
// start ading characters until it reaches their desired length*/
// //get it to console.log full userchoice as one array
// //once you have a long length charChoice array showing
// //Then console.log random char from that array x amount of times. (get new random char)
// //Then push it to your finalpassword array
// if (letterLow === false &&
//   letterUp === false &&
//   numbers === false &&
//   specialChar === false){
//       alert("Please enter a valid character.")


// /*Statement for when the user does not have a valid input*/
// return finalPassword;
// }


// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);