const inputToDo = document.getElementById('texto-tarefa');
const btnCreate = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = inputToDo.value;
  taskList.appendChild(newTask);
  inputToDo.value = '';
}

btnCreate.addEventListener('click', createTask);
