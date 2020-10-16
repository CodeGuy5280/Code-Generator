// Assignment Code
var generateBtn = document.querySelector("#generate");

//vars of arrays to be added to the password if the user chooses to do so.
var specialChar = ["!@#$%^&*()_+="]
var letterLow = ["abcdefghijklmnopqrstuvwxyz"]
var letterUp = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"] 
var numbers = ["0123456789"]
var allArray = [];
//var rPass = something with string and math.floor & math.random * (something?); 
//var rPass is for random password calculation at some point in code. Near bottom?




//function to add strings of characters together to form a password.
function generatePassword(){
  // // possible way to get password?: var password = [specialChar + letterLow + letterUp + numbers];
   //console.log(password)

  var pLength = parseInt(prompt("How many characters would you like your password to be?"));
  // console.log(passLength)

  //if statement for required password length parameters.
  if (pLength < 8 || pLength > 128 || isNaN(pLength)) {
    alert("Password must be 8 to 128 characters.");}
    return "";
  }

  //vars w/ confirms for type of characters to use in the password.
      var cLower = confirm("Would you like to use lower case letters?");
      var cUpper = confirm("Would you like to use upper case letters?");
      var cNumbers = confirm("Would you like to use numbers?");
      var cSpecial = confirm("Would you like to use special characters?");
      //console.log(cLower)
      //console.log(cUpper)

      
      
      //if statments for concatination of strings in arrays.

      //lowercase if concat statement
      if (cLower === true){
        var catL = allArray.concat(letterLow);
      }else{
        var catL = allArray.concat("");
      }

      //uppercase if concat statement
      if (cUpper === true){
        var catU = allArray.concat(letterUp);
      }else{
        var catU = allArray.concat("");
      }

      //numbers if concat statement
      if (cNumbers === true){
        var catN = allArray.concat(numbers);
      }else{
        var catN = allArray.concat("");
      }

      //specialChar if concat statement
      if (cSpecial === true){
        var catS = allArray.concat(specialChar)
      }else{
        var catS = allArray.concat("");
      }

       //if statment to make sure a selection is made.
       if (cLower == false && cUpper == false && cNumbers == false && cSpecial == false){
        alert("Please select at least one character to use.");
      }
      //changing the specialChar var catS to a string to concat correctly.
      var catString = catS.toString();
      //assigning the var stringofcatS to an empty string for values to be placed.
      var stringofcatS = "";

      //for loop to iterate through and select characters based off user input to length of password.
      for(i=0; i < pLength; i++){
        var rPass = catSString.charAt(Math.floor(Math.random()) * catSString.length);
        var output = rPass.concat(stringofcatS);
        
      }
      return stringofcatS;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  //console.log(passwordText)
  //console.log(password)
}

  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);