const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', function(event) {
  event.preventDefault(); 
  const name = document.querySelector('#name').value;
  const lastName = document.querySelector('#last-name').value;
  const formData = {
    name: name,
    lastName: lastName
  };

  const data = JSON.stringify(formData);
  const jsonInput = document.createElement('p');
  jsonInput.textContent = data;
  document.body.appendChild(jsonInput);
});