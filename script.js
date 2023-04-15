const inputToDo = document.getElementById('texto-tarefa');
const btnCreate = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
let currentTask;

// eslint-disable-next-line func-names
window.onload = function () {
  function paintTask({ target }) {
    if (currentTask) {
      currentTask.classList.remove('tasks');
    }
    currentTask = target;
    currentTask.classList.add('tasks');
  }

  taskList.addEventListener('click', paintTask);
};

function createTask() {
  const newTask = document.createElement('li');
  if (inputToDo.value === '') alert('insert task');
  else {
    newTask.innerText = inputToDo.value;
    taskList.appendChild(newTask);
    inputToDo.value = '';
    const id = taskList.getElementsByTagName('li').length;
    newTask.id = `task-${id}`;
  }
}

btnCreate.addEventListener('click', createTask);

function riskTask({ target }) {
  target.classList.toggle('completed');
}

taskList.addEventListener('dblclick', riskTask);
