






// When "Generate" button is pressed, user will be asked how many characters they want 

var generateBtn = document.querySelector("#generate");

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "="];
var userArray = [""]
var password = [""]

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

//Initial User Prompts and Confirms
function promptMe(){
  var generateBtn = prompt ("How many characters would you like to use? Between 8 and 50");
  

  if (generateBtn < 8){
    alert("Your password must be at least 8 characters");
  }  if (generateBtn > 50){
    alert("Your password must not exceed 50 characters");
  }  if (generateBtn > 7 && generateBtn < 51){
    
  }

  function userArray (arr){
    for (var i = 0; i <arr.length; i++){
      console.log(arr[i]);
    }
  }
  
  var lowerSelect = confirm("Will it contain lowercase letters?");
  if (lowerSelect){
    userArray.push(lower);
    console.log(lowerSelect);
  }

  var upperSelect = confirm("Will it contain uppercase letters?");
  if (upperSelect){
    userArray(upper);
    console.log(upperSelect); 
  }
  

  var numericSelect = confirm("Will it contain numbers?");
  if (numericSelect){
    userArray(numeric);
    console.log(numericSelect);
  }
  

  var specialSelect = confirm("Will it contain special characters?");
  if (specialSelect){
    userArray(special);
    console.log(specialSelect);
  }
 
  
}









 


// Write password to the #password input




// Add event listener to generate button

