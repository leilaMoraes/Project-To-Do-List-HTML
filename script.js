const inputToDo = document.getElementById('texto-tarefa');
const btnCreate = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

window.onload = function () {
  function createTask() {
    const newTask = document.createElement('li');
    newTask.innerText = inputToDo.value;
    taskList.appendChild(newTask);
    inputToDo.value = '';
    const id = taskList.getElementsByTagName('li').length;
    newTask.id = `task-${id}`;
    newTask.addEventListener('click', () => {
      newTask.classList.add('tasks');
    });
  }

  btnCreate.addEventListener('click', createTask);
};
