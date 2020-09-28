
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

// Make sure the password has at least one of each of the required characters

// Make sure the password is a minimum of 8 characters long and a max 128

function generatePassword() {
	var password = "";
	var options = getCriteria(); // {confirmLength: 15, confirmUpper: true, ...}
	var length = options.confirmLength;
	var charSelection = [ ];

	
	if (options.confirmSymbol) {
		password += randomFunction(symbols);
		charSelection = charSelection.concat(symbols);
	}
	if (options.confirmUpper) {
		password += randomFunction(upperCase);
		charSelection = charSelection.concat(upperCase);
	}
	if (options.confirmLower) {
		password += randomFunction(lowerCase);
		charSelection = charSelection.concat(lowerCase);
	}
	if (options.confirmNumber) {
		password += randomFunction(number);
		charSelection = charSelection.concat(number);
	}
	for(var num = password.length; num <= length; num++) {
		password += randomFunction(charSelection);
		
	}
	
	return password;
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