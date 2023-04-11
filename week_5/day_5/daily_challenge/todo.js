 const tasks = [];

 function addTask(e){
    const input = document.querySelector('input');
    const listTasks = document.querySelector('.listTasks');
    if (input.value !== ''){
      e.preventDefault()
      tasks.push(input.value);
      const taskDiv = document.querySelector('.listTasks');
      taskDiv.innerHTML += '<p>' + input.value + '</p>';
      listTasks.appendChild(taskDiv);
    }
  }
  
  const button = getButton() 
  button?.addEventListener('click', addTask)

  function getButton() {
    return document.getElementById('button')
}