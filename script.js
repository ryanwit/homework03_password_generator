
// ---------------------------GLOBAL VARIABLES----------------------------
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var symbols = ["!", "@", "#", "$", "%"]
// -------------------------------FUNCTIONS--------------------------------
var confirmLength;
var confirmUpper;
var confirmNumber;
var confirmLower;
var confirmSymbol;
//---------------------ACTION OF FUNCTION CODE LOGIC --------------------
function getCriteria() {
	var confirmLength = prompt("How long would you like your password to be? Select between 8 and 128 Characters")
	if (confirmLength < 8 || confirmLength > 128) {
		alert("Error: Password must be between 8 and 128 in length")
		var confirmLength = prompt("How long would you like your password to be? Select between 8 and 128 Characters");
	}
	var confirmUpper = confirm("Would you like your password to contain uppercase letters?");
	var confirmLower = confirm("Would you like your password to contain lowercase letter?");
	var confirmNumber = confirm("Would you like your password to contain number(s)");
	var confirmSymbol = confirm("Would you like your password to contain special characters?");
	//-----------------------------LOOPS--------------------------------------

	if (confirmUpper === false && confirmLower === false && confirmNumber === false && confirmSymbol === false) {
		alert("YOU MUST CHOOSE AT LEAST ONE PARAMETER LISTED")
	}
	//-----------------------OBJECT------------------------------
	var passwordSelectedCriteria = {
		confirmLength: confirmLength,
		confirmUpper: confirmUpper,
		confirmLower: confirmLower,
		confirmNumber: confirmNumber,
		confirmSymbol: confirmSymbol,
	}
	return passwordSelectedCriteria;
}

function randomFunction(arr) {
	var randomIndex = Math.floor(Math.random() * arr.length);
	var randomElement = arr[randomIndex];
	return randomElement;
}

function generatePassword() {
	var options = getCriteria();
	var result = [];
	var possibleChar = [];
	var guaranteedChar = [];
	if (options.confirmSymbol === true) {
		possibleChar = possibleChar.concat(symbols);
		guaranteedChar.push(randomFunction(symbols));
	}
	if (options.confirmUpper === true) {
		possibleChar = possibleChar.concat(upperCase);
		guaranteedChar.push(randomFunction(upperCase));
	}
	if (options.confirmLower === true) {
		possibleChar = possibleChar.concat(lowerCase);
		guaranteedChar.push(randomFunction(lowerCase));
	}
	if (options.confirmSymbol === true) {
		possibleChar = possibleChar.concat(number);
    guaranteedChar.push(randomFunction(number));
  }
	for (var i = 0; i < options.length; i++) {
			var possibleChar = randomFunction(possibleChar);
			result.push(possibleChar);
		}
	for (var i = 0; i < guaranteedChar.length; i++) {
			result[i] = guaranteedChar[i];
		}
  return result.join('');
}
		// Assignment Code
		var generateBtn = document.querySelector("#generate");
		// Write password to the #password input
		function writePassword() {
			var password = generatePassword();
			var passwordText = document.querySelector("#password");
      passwordText.value = password;}
      // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);