const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.chucknorris.io/jokes/random?category=dev');

xhr.responseType ='json';
xhr.send();

xhr.onload = function() {
  if (xhr.status != 200) { 
    alert(`Error ${xhr.status}: ${xhr.statusText}`); 
  } else { 
    alert(`Joke :  ${xhr.response.value}`); 
  }
};

xhr.onerror = function() {
    alert("Request failed");
  };