fetch('/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.body.innerHTML += `<p>${JSON.stringify(data)}</p>`;
  })
  .catch(error => console.error('Error fetching data:', error));

  function showAlert() {
    alert('Hello');
  }
