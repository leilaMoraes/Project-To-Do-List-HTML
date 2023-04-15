const inputToDo = document.getElementById('texto-tarefa');
const btnCreate = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
let currentTask;
const btnRemove = document.getElementById('apaga-tudo');
const btnRemoveCompleted = document.getElementById('remover-finalizados');
const btnRemoveSelected = document.getElementById('remover-selecionado');

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

btnRemove.addEventListener('click', () => {
  while (taskList.firstChild) taskList.removeChild(taskList.firstChild);
});

btnRemoveCompleted.addEventListener('click', () => {
  const completedTasks = document.querySelectorAll('.completed');
  completedTasks.forEach((task) => task.remove());
});

btnRemoveSelected.addEventListener('click', () => {
  const selected = document.querySelector('.tasks');
  selected.remove();
});
