const navbar = document.getElementById('navBar');
navbar.setAttribute('id', 'socialNetworkNavigation');

const li = document.createElement('li')
console.log('li:', li);

const logout = document.createTextNode('Logout');
console.log(logout);

li.appendChild(logout);
console.log('li:', li);

const ul = navbar?.firstElementChild;
ul.appendChild(li);

const firstElement = ul?.firstElementChild;
console.log(firstElement.textContent);

const lastElement= ul?.lastElementChild;
console.log(lastElement.textContent);


