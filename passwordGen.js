// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","=","+","_"]
var letterLow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var letterUp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 
var numbers = [0,1,2,3,4,5,6,7,8,9]
var finalPass = [""];





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // console.log(passwordText)
}

//function to add strings of characters together to form a password.
function generatePassword(){
  var password = [specialChar + letterLow + letterUp + numbers];
   console.log(password)
  var passLength = parseInt(prompt("How many characters would you like your password to be?"));
  // console.log(passLength)

  //if statement for required password length parameters.
  if (passLength < 8 || passLength > 128) {
    alert("Password must be 8 to 128 characters.")

   }
  }
      //prompts to the user for characters to include in password.
var cLower = confirm("Would you like to use lower case letters?");
var cUpper = confirm("Would you like to use upper case letters?");
var cNumbers = confirm("Would you like to use numbers?");
var cSpecial = confirm("Would you like to use special characters?");

if (cLower == false && cUpper == false && cNumbers == false && cSpecial == false){
  alert("Please select at least one type of character.")
}



//if statements relating to user confirmation of characters to use.




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









































































































// var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","=","+","_"]
// var letterLow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// var letterUp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 
// var numbers = [0,1,2,3,4,5,6,7,8,9]
//Add event listener to generate button

// // var randomstring = Math.random().toString(36).slice(-8);

// // function generatePassword() {
// //   var length = 8,
// //       charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
// //       retVal = "";
// //   for (var i = 0, n = charset.length; i < length; ++i) {
// //       retVal += charset.charAt(Math.floor(Math.random() * n));
// //   }
// //   return retVal;
// // }



// //  generateBtn.addEventListener("click", writePassword);
// //  document.getElementById("password").value = password;


// // var generateBtn = document.querySelector("#generate");
// // function generatePassword() {
 
// // // //   //Function to write password
// //   function writePassword() {
// //     let password = generatePassword();
// //     let passwordText = document.querySelector('#password');
// //     passwordText.value = password;
// //   }
// // }




// //      var totalArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(),-_=+"
// // //function to run prompts on btn click
// // var pasword = "";

// // for(var i = 0; i <= Array.length ; i++){
// //   password = password + totalArray.charAt(Math.floor)(Math.random() * Math.floor(totalArray.length - 1));
// // }
  
// // generatePassword();
// // }


























// function passwordPrompts(){
// var charLength = prompt("How long would you like your password to be?");
// var allCharacters = specialChar + letterLow + letterUp + numbers;

// if (isNaN (charLength > 8 || charLength <= 128)){
//   //new password empty string value
//   let password = "";
//   //vars for user questions
//   // var plength = prompt ("Please enter 8 to 128 characters.");
//   var letterUp = confirm("Would you like to use upper case letters?");
//   var letterLow= confirm("Would you like to use lower case letters?");
//   var numbers = confirm("Would you like to use numbers?");
//   var specialChar = confirm("Would you like to use special characters?");
// }
// console.log(charLength)
// //if statements w/ else if for keeping password constraints.
// if ((specialChar === true) && (numbers === true) && (letterLow === true) && (letterUp === true)) {
//   for (i = 0; i < charLength; i++) {
//       let character = Math.floor(Math.random() * allCharacters.length);
//       nPassword += allCharacters.charAt(character, character + 1);
//   }
// }
// else if ((specialChar === true) && (numbers === true) && (letterLow === true) && (letterUp === false)) {
//   for (i = 0; i < charLength; i++) {
//       let character = Math.floor(Math.random() * a.length);
//       nPassword += a.charAt(character, character + 1);
//   }
// }
// else if ((specialChar === true) && (numbers === true) && (letterLow === false) && (letterUp === true)) {
//   for (i = 0; i < charLength; i++) {
//       let character = Math.floor(Math.random() * b.length);
//       nPassword += b.charAt(character, character + 1);
//   }
// }
// else if ((specialChar === true) && (numbers === false) && (letterLow === true) && (letterUp === true)) {
//   for (i = 0; i < charLength; i++) {
//       let character = Math.floor(Math.random() * c.length);
//       nPassword += c.charAt(character, character + 1);
//   }
// }
// else if ((specialChar === false) && (numbers === true) && (letterLow === true) && (letterUp === true)) {
//   for (i = 0; i < charLength; i++) {
//       let character = Math.floor(Math.random() * d.length);
//       nPassword += d.charAt(character, character + 1);
//   }
// }
// else if ((specialChar === true) && (numbers === true) && (letterLow === false) && (letterUp === false)) {
//   for (i = 0; i < charLength; i++) {
//       let character = Math.floor(Math.random() * e.length);
//       nPassword += e.charAt(character, character + 1);
//   }
// }
// else if ((specialChar === true) && (numbers === false) && (letterLow === true) && (letterUp === false)) {
//   for (i = 0; i < charLength; i++) {
//       let character = Math.floor(Math.random() * f.length);
//       nPassword += f.charAt(character, character + 1);
//   }
// }
// else if ((specialChar === true) && (numbers === false) && (letterLow === false) && (letterUp === true)) {
//   for (i = 0; i < charLength; i++) {
//       let character = Math.floor(Math.random() * g.length);
//       nPassword += g.charAt(character, character + 1);
//   }
// }
// else if ((specialChar === false) && (numbers === true) && (letterLow === true) && (letterUp === false)) {
//   for (i = 0; i < charLength; i++) {
//       let character = Math.floor(Math.random() * h.length);
//       nPassword += h.charAt(character, character + 1);
//   }
// }
// else if ((specialChar === false) && (numbers === true) && (letterLow === false) && (letterUp === true)) {
//   for (i = 0; i < charLength; i++) {
//       let character = Math.floor(Math.random() * j.length);
//       nPassword += j.charAt(character, character + 1);
//   }
// }
// else if ((specialChar=== false) && (numbers === false) && (letterLow === true) && (letterUp === true)) {
//   for (i = 0; i < charLength; i++) {
//       let character = Math.floor(Math.random() * k.length);
//       nPassword += k.charAt(character, character + 1);
//   }
// }
// else if ((specialChar=== true) && (numbers === false) && (letterLow === false) && (letterUp === false)) {
//   for (i = 0; i < charLength; i++) {
//       let character = Math.floor(Math.random() * specialChar.length);
//       nPassword += specialChar.charAt(character, character + 1);
//   }
// }
// else if ((specialChar === false) && (numbers === true) && (letterLow === false) && (letterUp === false)) {
//   for (i = 0; i < charLength; i++) {
//       let character = Math.floor(Math.random() * numbers.length);
//       nPassword += numbers.charAt(character, character + 1);
//   }
// }
// else if ((specialChar === false) && (numbers === false) && (letterLow === true) && (letterUp === false)) {
//   for (i = 0; i < charLength; i++) {
//       let character = Math.floor(Math.random() * letterLow.length);
//       nPassword += letterLow.charAt(character, character + 1);
//   }
// }
// else if ((specialChar === false) && (numbers === false) && (letterLow === false) && (letterUp === true)) {
//   for (i = 0; i < charLength; i++) {
//       let character = Math.floor(Math.random() * a.length);
//       nPassword += a.charAt(character, character + 1);
//   }
// }

//Function to generate password with codeblock to run the full program;
