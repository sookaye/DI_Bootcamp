fetch('/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const userDataDiv = document.getElementById('userData');
    userDataDiv.textContent = `First Name: ${data.firstname}, Last Name: ${data.lastname}`;
  })
  .catch(error => console.error(error));