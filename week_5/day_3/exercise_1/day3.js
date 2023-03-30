let btnB = document.getElementById('jsstyle');

btnB.addEventListener('click', function(){
    alert("BTN is Clicked")
    console.log(btnB.clientX, btnB.clientY)
  });
  
  btnB.addEventListener('click', function(){
    alert("BTN is not Clicked")
  });
  btnB.addEventListener('mouseover', function(){
    e.stopPropagation();
    alert("BTN is yesss")
  });
  
  btnB.addEventListener('click', function(e){
    alert("yyyyayayayay")
  });
