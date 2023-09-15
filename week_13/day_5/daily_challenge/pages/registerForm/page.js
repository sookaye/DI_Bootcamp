document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Send a POST request to the login route
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
  
    if (response.ok) {
      const data = await response.json();
      document.getElementById('message').textContent = `Welcome, ${data.name}!`;
    } else {
      const errorMessage = await response.text();
      document.getElementById('message').textContent = errorMessage;
    }
  });
  