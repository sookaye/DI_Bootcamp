const container = document.querySelector('#container')
let p = document.createElement("p");
p.innerHTML = 'hello World';
    

setTimeout(() => {
    if (container) {
        document.querySelector("#container").innerHTML = `Hello World`;
        document.querySelector("#container").style.display = "block";
        
    } else {
        
    }
}, 2000);


// let count = 10;
// let interval = setInterval(function(){
//   document.querySelector("#container").innerHTML = `Hello World`;
//   document.querySelector("#container").style.display = "block";
//   count--;

//   if (count < 0) {
//     clearInterval(interval);
//   }
// }, 1000);

