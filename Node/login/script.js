document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Modifier les sélecteurs pour correspondre aux nouveaux id
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const responseData = await fetch('/login', { method: 'POST', body: formData });
        const message = await responseData.text();
        console.log(message);
    });

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(registerForm);
        const responseData = await fetch('/register', { method: 'POST', body: formData });
        const message = await responseData.text();
        console.log(message);
    });
});
