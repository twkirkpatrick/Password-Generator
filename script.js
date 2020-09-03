

//Global

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9",];
var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "="];





// Assignment Code
var generateBtn = document.querySelector("#generate");


//Prompt user for password options
function getPasswordOpt(){
    
    var length = parseInt(prompt("How many characters would you like the password to be?"));
    if (isNaN(length) === true ) {
        alert("password length must be a number")
        return;
    }

    if (length < 8){
        alert("Password must be at least 8 characters.");
        return;
    }
    
    if (length > 128){
        alert("Password must not exceed 128 characters.")
        return;
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
        return;
    }

    //Object for storing user selections
    var passOptions = {
        length : length,
        caseLower : lowerCase,
        caseUpper : upperCase,
        charNumeric : numericChar,
        charSpecial : specialChar
    };


    return passOptions;

}

//Help generate password with the users response
function generatePassword(){
    //Var will store users options 
    var userOptions = getPasswordOpt()
    console.log(userOptions);

    var result = [];
    var possible = [];
    var actual = [];


    //conditions 
    if(userOptions.caseLower){
        var randomLower = lower[Math.floor(Math.random() * lower.length)];
        
        var output = possible.push(randomLower);

        //console.log("randomLower " , randomLower);
        //console.log("output " , output);
        //console.log(possible);


    }

    if (userOptions.caseUpper){
        var randomUpper = upper[Math.floor(Math.random() * upper.length)];
        var output = possible.push(randomUpper);
        //console.log("randomUpper ", randomUpper);

    }
    
    if(userOptions.charNumeric){
        
        var randomNum = numeric[Math.floor(Math.random() * numeric.length)];
        var output = possible.push(randomNum);
       //console.log("random number ", randomNum);
     }

     if(userOptions.charSpecial){
        var randomSpec = special[Math.floor(Math.random() * special.length)];
        var output = possible.push(randomSpec);
       //console.log("random number ", randomSpec);

     }

     
     var slice = possible.slice(0, 4);

     console.log(slice);
     
     return slice.join("");

     
     

    



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



