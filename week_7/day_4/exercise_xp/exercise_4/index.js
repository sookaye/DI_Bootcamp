(function welcome(user) {
    let navbar = document.querySelector('.nav');
    let profilDiv = document.createElement('div');
    let profilPic = document.createElement('img');
    profilPic.style.height = '20rem';
    let name = document.createElement('p');
    profilPic.src = 'pexels-mohamed-abdelghaffar-771742.jpg';
    name.innerHTML = user;
    profilDiv.appendChild(profilPic);
    profilDiv.appendChild(name);
    navbar.appendChild(profilDiv);
   })('Ashley');
   