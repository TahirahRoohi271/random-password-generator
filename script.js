const generateBtn = document.getElementById("generate");
const passwordField = document.getElementById("password");

const characters = "ABCEFGHIJKLMNOPQRSabcdefghijklmno_%&{}";
const passwordLength = 10;

generateBtn.addEventListener("click", () => {
  const password = generatePassword(passwordLength, characters)
  passwordField.value = password;
})

function generatePassword (length, charset){
  let password = "";
  for (let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * charset.length)
    password += charset[randomIndex];
  }
  return password;
}