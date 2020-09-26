
// ---------------GLOBAL VARIABLES----------------------------//
  var upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var symbols: ["!", "#", "%", "&", "(", ")", "*", "+", "-", "~", "/", ":", "<", ">", "?", "^", "[", "]", "{", "}"];

  // var finalOptions = {
  //   userPasswordLength: 0,
  //   userLowerCase: [],  
  //   userUpperCase: [],
  //   userSymbols: [],
  //   userNumbers: [],
  

  // -------------------------------FUNCTIONS--------------------------------//

  function getCriteria() {
      // console.log{confirmLength}
      var confirmLength = prompt("How long would you like your password to be? Select between 8 and 128 Characters")
          if (confirmLength < 8) || confirmLength > 128) {
            alert("PLEASE CHOOSE A NUMBER BETWEEN 8 AND 128")
            return
          }
        }
        if (isNaN(confirmLength)===) {
          alert("PASSWORD LENGTH MUST BE PROVDED AS A NUMBER")
          return
        }
  } 
      var confirmUpper = confirm ("Would you like your password to contain uppercase letters?")
      var confirmLower = confirm ("Would you like your password to contain lowercase letter?")
      var confirmNumber = confirm ("Would you like your password to contain number(s)")
      var confirmSymbol = confirm ("WOuld  you like your password to contain special characters?")
      if (confirmUpper === fales && confirmLower === fales && confirmNumber === false && confirmSymbol === false) {
        alert("YOU MUST CHOOSE AT LEAST ONE PARAMETER LISTED")
    }

      var passwordSelectedCriteria = {
        confirmLength,
        confirmUpper,
        confirmLower,
        confirmNumber,
        confirmSymbol,
      }
        return passwordSelectedCriteria
    }
      function randomFunction(arr) {
        var randomIndex = Math.floor(Math.random()*arr.length)
        var randomElement = arr[randomIndex]
        return randomElement
      }

      function generatePassword() {
        var options = getCriteria()
        var result = []
        var possibleChar = []
        var guaranteedChar = []
        if (options.confirmSymbol === true) {
          possibleChar=possibleChar.concat(symbols)
          guaranteedChar.push(randomFunction(symbols))
        }
      }





   

      

  

    var array = []

    getCriteria();



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
