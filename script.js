

//Global variables for User to choose from

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9",];
var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "="];


var generateBtn = document.querySelector("#generate");



function generatePassword(){
    
    //Used parseInt function to convert the User's string into an integer
    
    //Series of if statements to ensure the User selects a number and the correct password length
    var length = parseInt(prompt("How many characters would you like the password to be? (Between 8 and 128 characters)"));
    if (isNaN(length) === true ) {
        alert("password length must be a number")
        
    }

    if (length < 8){
        alert("Password must be at least 8 characters.");
        
    }
    
    if (length > 128){
        alert("Password must not exceed 128 characters.")
        
    }
    
    //Storing the User's responses in a variable
    var lowerCase = confirm("Would you like to include lowercase letters? Click OK for Yes and cancel for No");
    var upperCase = confirm("Would you like to include uppercase letters? Click OK for Yes and cancel for No");
    var numericChar = confirm("Would you like to include numbers? Click OK for Yes and cancel for No");
    var specialChar = confirm("Would you like to include special characters? Click OK for Yes and cancel for No");

    //If statement to ensure that the User picks at least one character type
    if (lowerCase === false && 
        upperCase === false && 
        numericChar === false && 
        specialChar === false
        ){
        alert("Must select at least one character type");
        
    }

    var possible = "";
    
    //For loop for iterating through User-selected criteria

    //Utilizing Math.floor and Math.random, a random index is pulled from the arrays containing password criteria, and are concatenated to a new string.
     for(var i = 0; i < length; i++){
        if(lowerCase){
            var randomLower = lower[Math.floor(Math.random() * lower.length)];
            possible += randomLower;
    
        }
    
        if(upperCase){
            var randomUpper = upper[Math.floor(Math.random() * upper.length)];
            possible += randomUpper;
            
    
        }
        
        if(numericChar){
            var randomNum = numeric[Math.floor(Math.random() * numeric.length)];
            possible += randomNum;
           
         }
    
         if(specialChar){
            var randomSpec = special[Math.floor(Math.random() * special.length)];
            possible += randomSpec;
           
    
         }

         

     }
           
           var newPass = possible.slice(0, length);

           return newPass;

}



// Write password function which transfers User Specific password to the text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


  //Copy password to clipboard
 
 var textCopy = document.getElementById("password");

 var buttonCopy = document.getElementById("button");

 buttonCopy.addEventListener("click", copyPassword);


function copyPassword(){
    textCopy.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
    
}


generateBtn.addEventListener("click", writePassword);




