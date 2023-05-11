const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const lastname = urlParams.get('lastname');
document.getElementById("name").innerHTML += name;
document.getElementById("lastname").innerHTML += lastname;