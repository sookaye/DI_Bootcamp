const banner = document.querySelector('.banner')
 setTimeout(() => {
    if (banner) {
        document.querySelector(".banner").style.visibility = "visible";
    } else {
        
    }
}, 1000);

let count = 10;
let interval = setInterval(function(){
  document.querySelector(".banner2").innerHTML = `The sales end in ${count}sec !`;
  document.querySelector(".banner2").style.display = "block";
  count--;

  if (count < 0) {
    clearInterval(interval);
  }
}, 1000);