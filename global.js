"use script";
// FORM VALIDATION FOR ERROR MESSAGES
var Email = document.forms["myForm"]["email"];
var Password = document.forms["myForm"]["password"];
var Name = document.forms["myForm"]["name"];

var ErrorEmail = document.getElementById("email_error");
var ErrorPassword = document.getElementById("pass_error");
var ErrorName = document.getElementById("name_error");

Name.addEventListener("textInput", Name_Verify);
Email.addEventListener("textInput", Email_Verify);
Password.addEventListener("textInput", Password_Verify);

console.log(Password);
function validated() {
  if (Name.value.length < 6) {
    Name.style.border = "1px solid red";
    ErrorName.style.display = "block";
    return false;
  }
  if (Email.value.length < 9) {
    Email.style.border = "1px solid red";
    ErrorEmail.style.display = "block";
    return false;
  }
  if (Password.value.length < 6) {
    Password.style.border = "1px solid red";
    ErrorPassword.style.display = "block";
    // Email.focus()
    return false;
  }
}
function Name_Verify() {
  if (Name.value.length >= 8) {
    ErrorName.style.display = "none";
    Name.style.border = "1px solid #dae0dd";
    return true;
  }
}
function Email_Verify() {
  if (Email.value.length >= 8) {
    ErrorEmail.style.display = "none";
    Email.style.border = "1px solid #dae0dd";
    return true;
  }
}
function Password_Verify() {
  if (Password.value.length >= 5) {
    ErrorPassword.style.display = "none";
    Password.style.border = "1px solid #dae0dd";
    return true;
  }
}
