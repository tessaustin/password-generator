//Array of characters to use 
//Special characters
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

 //Numeric characters
var numericCharacters = [
  '0', 
  '1', 
  '2', 
  '3', 
  '4', 
  '5', 
  '6', 
  '7', 
  '8', 
  '9'
];

//Lowercase characters 
var lowerCaseCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

//Uppercase characters 
var upperCaseCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Window of length
function passwordOptions() {
  var length = 0;

  while (length > 128 || length < 8 || isNaN(length) === true) {
    length = parseInt(window.prompt("How many characters would you like?"));

    //Password must be with 8 to 128 characters 
    if (length < 8) {
      window.alert("Password length must be at least 8 characters.");
    } else if (length > 128) {
      window.alert("Password length must be no more than 128 characters.");
    } else if (isNaN(length) === true){
      window.alert("Must provide a numeric value.");
    }
  }    

  var specialCharacters = false;
  var numericCharacters = false;
  var lowerCaseCharacters = false;
  var upperCaseCharacters = false; 

  while ( specialCharacters === false &&
          numericCharacters === false &&
          lowerCaseCharacters === false &&
          upperCaseCharacters === false) {

    specialCharacters = confirm("Click OK to confirm including special characters.");
    numericCharacters = confirm("Click OK to confirm including numeric characters.");
    lowerCaseCharacters = confirm("Click OK to confirm including lowercase characters.");
    upperCaseCharacters = confirm("Click OK to confirm including uppercase characters.");

    if (  specialCharacters  === false &&
          numericCharacters === false &&
          lowerCaseCharacters === false &&
          upperCaseCharacters === false) {
      window.alert("At least one character type should be selected.");
    }
  }

//Store user input
  var passwordOptions = {
    length: length,
    specialCharacters: specialCharacters,
    numericCharacters: numericCharacters,
    lowerCaseCharacters: lowerCaseCharacters,
    upperCaseCharacters: upperCaseCharacters
      }
      return passwordOptions;
};      

//Random elements from arrays 
function random(arr) {
  var value = Math.floor(Math.random() * arr.length);
  var  retreive = arr[value];

  return retreive
}

//Generate password w/user input
function generatePassword(options) {
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (options.specialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(random(specialCharacters));
  }

  if (options.numericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(random(numericCharacters));
  }

  if (options.lowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
    guaranteedCharacters.push(random(lowerCaseCharacters));
  }

  if (options.upperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
    guaranteedCharacters.push(random(upperCaseCharacters));
  }


//Loop for random arrays into results
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = random(possibleCharacters);
  
    result.push(possibleCharacter);
  }

//Guaranteed character in result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];
  }
    
    
    return result.join("");
}



// Write password to the #password input
function writePassword() {
  var options = passwordOptions();
  var password = generatePassword(options);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);