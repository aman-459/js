console.log("Hello Todo")

const inp = document.querySelector('input');
const add = document.querySelector('.add');
const ul = document.querySelector('ul');

window.addEventListener('DOMContentLoaded', localStorage);

add.addEventListener('click', () => {
  addTasks();
});

function addTasks() {
  let task = inp.value.trim();
  if(!task) return;

  const taskObj = {
    text: task,
    completed: false,
  };
  saveTask(taskObj);
  renderTask(taskObj);
  inp.value = '';
}

function renderTask(taskObj) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = taskObj.completed;

  checkbox.addEventListener('change', () => {
    taskObj.completed = checkbox.checked;
    updateStorage();
    styleTask(li, taskObj.completed);
  });

  const span = document.createElement('span');
  span.textContent = taskObj.text;

  // Delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  delBtn.classList.add('del');
  delBtn.addEventListener('click', () => {
    li.remove();
    deleteTask(taskObj.text);
  });

  // Append everything
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  ul.appendChild(li);

  styleTask(li, taskObj.completed);
}

function styleTask(li, completed) {
  if (completed) {
    li.style.textDecoration = 'line-through';
    li.style.color = 'gray';
    //li.classList.add('completed');
  } else {
    //li.classList.add('notCompleted');
    li.style.textDecoration = 'none';
    li.style.color = 'black';
  }
}

function saveTask(taskObj) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  if(!Array.isArray(tasks)) tasks = [];
  tasks.push(taskObj);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  return Array.isArray(tasks) ? tasks : [];
}

function deleteTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(t => t.text !== taskText);
  localStorage.setItem('tasks', JSON.stringify('tasks'));
}

function updateStorage() {
  const tasks = [];
  ul.querySelectorAll('li').forEach(li => {
    const text = li.querySelector('span').textContent;
    const completed = li.querySelector('input').checked;
    tasks.push({ text, completed });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = getTasks();
  tasks.forEach(taskObj => renderTask(taskObj));
}

loadTasks();