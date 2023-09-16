const input = document.querySelector('input');

input.addEventListener("keydown", (event) => {
    const key = event.key;
    const regex = new RegExp("^[\\d*#+]+$");
    if(regex.test(key)){
        event.preventDefault();  
        return false;
    }
  });