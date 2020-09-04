

//Global

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9",];
var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "="];





// Assignment Code
var generateBtn = document.querySelector("#generate");


//Prompt user for password options


//Help generate password with the users response
function generatePassword(){
    
    var length = parseInt(prompt("How many characters would you like the password to be?"));
    if (isNaN(length) === true ) {
        alert("password length must be a number")
        
    }

    if (length < 8){
        alert("Password must be at least 8 characters.");
        
    }
    
    if (length > 128){
        alert("Password must not exceed 128 characters.")
        
    }

    var lowerCase = confirm("Would you like to include lowercase letters?");
    var upperCase = confirm("Would you like to include uppercase letters?");
    var numericChar = confirm("Would you like to include numbers?");
    var specialChar = confirm("Would you like to include special characters?");

    if (lowerCase === false && 
        upperCase === false && 
        numericChar === false && 
        specialChar === false
        ){
        alert("Must select at least one character type");
        
    }

    var possible = "";
    


    //conditions 
    

     
     for(var i = 0; i < length; i++){
        if(lowerCase){
            var randomLower = lower[Math.floor(Math.random() * lower.length)];
            
            possible += randomLower;
    
        }
    
        if(upperCase){
            var randomUpper = upper[Math.floor(Math.random() * upper.length)];
            possible += randomUpper;
            //console.log("randomUpper ", randomUpper);
    
        }
        
        if(numericChar){
            
            var randomNum = numeric[Math.floor(Math.random() * numeric.length)];
            possible += randomNum;
           //console.log("random number ", randomNum);
         }
    
         if(specialChar){
            var randomSpec = special[Math.floor(Math.random() * special.length)];
            possible += randomSpec;
           //console.log("random number ", randomSpec);
    
         }

         

     }

           var newPass = possible.slice(2, 9);

            //use String slice method!
     
     
     return newPass;

     

     
     

    



}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//EVENT LISTENer
generateBtn.addEventListener("click", writePassword);
// Add event listener to generate button



