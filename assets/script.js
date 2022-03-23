// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var charLow = "abcdefghijklmnopqrstuvwxyz";
    var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charNum = "1234567890";
    var charSpec = "~!@#$%^&*(){}[]<>,./?;:=+-_";
    var charSet = []

    if (confirm("Include lowercase letters?") == true) {
        charSet.push(charLow);
    }
    if (confirm("Include uppercase letters?") == true) {
        charSet.push(charUp);
    }
    if (confirm("Include numbers?") == true) {
        charSet.push(charNum);
    }
    if (confirm("Include special characters?") == true) {
        charSet.push(charSpec);
    }

    var passwordLength = Number(prompt("How many characters? 8-128"));

    if (passwordLength > 128 || passwordLength < 8) {
        alert("Must be between 8 and 128 characters!");
        passwordLength = Number(prompt("How many characters? 8-128"));
    }

    if (passwordLength > 128 || passwordLength < 8) {
        alert("Must be between 8 and 128 characters! Page will reload.");
        location.reload();
    }

    var charSetString = charSet.join('');

    if (charSetString == "") {
        alert("Must select at least one character set! Page will reload");
        location.reload();
    }

    function generatePassword(num) {
        var result = ""
        for (var i = 0; i < num; i++) {
            result += charSetString.charAt(Math.floor(Math.random() * charSetString.length));
        }
        return result;
    }


    var password = generatePassword(passwordLength);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    console.log(charSet);
    console.log(passwordLength);
    console.log(charSetString);
    console.log(generatePassword(passwordLength));

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);