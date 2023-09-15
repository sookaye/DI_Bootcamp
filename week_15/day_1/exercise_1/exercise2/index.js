const loginButton = document.getElementById("loginButton");

const randomUsername = "asookaye";
const randomPassword = "pass123456";
localStorage.setItem("username", randomUsername);
localStorage.setItem("password", randomPassword);

loginButton.addEventListener("click", function() {
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
    
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert("Welcome!");
    } else {
        alert("Wrong username or password.");
    }
});