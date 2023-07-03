// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  const length = 10; // Specify the desired length of the password
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (passwordText) {
    passwordText.value = password;
  }
}

var generateBtn = document.querySelector("#generate");

if (generateBtn) {
  generateBtn.addEventListener("click", writePassword);
}




