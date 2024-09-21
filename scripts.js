const taskDiv = document.querySelector('.tasks'); 
const input = document.querySelector('input');
const button = document.querySelector('#add-btn');


button.addEventListener('click', createContent);

document.addEventListener('DOMContentLoaded', showData);

function createContent() {
  if (input.value == "") {
    alert('Please Enter Something');
  } else {
    addTaskToDOM(input.value, false);
    input.value = ''; 
    saveData(); 
  }
}

function addTaskToDOM(taskText, isCompleted) {
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-container');

  const img = document.createElement('img');
  if (isCompleted) {
    img.src = "Images/checked.png";
  } else {
    img.src = "Images/unchecked.png";
  }
  img.classList.add('img-unck');
  taskContainer.appendChild(img);

  const li = document.createElement('li');
  li.textContent = taskText;
  if (isCompleted) {
    li.classList.add('li-class2'); // Mark task as completed
  }
  taskContainer.appendChild(li);

  const cross = document.createElement('span');
  cross.textContent = 'X';
  cross.classList.add('delete-btn');
  taskContainer.appendChild(cross);

  taskDiv.appendChild(taskContainer);

  li.addEventListener('click', function () {
    li.classList.toggle('li-class2');
    if (img.src.includes("unchecked.png")) {
      img.src = "Images/checked.png";
    } else {
      img.src = "Images/unchecked.png";
    }
    saveData();
  });

  cross.addEventListener('click', function () {
    taskDiv.removeChild(taskContainer);
    saveData();
  });
}

function saveData() {
  const tasks = [];
  document.querySelectorAll('.task-container').forEach(task => {
    const taskText = task.querySelector('li').textContent;
    const isCompleted = task.querySelector('li').classList.contains('li-class2');
    tasks.push({ text: taskText, completed: isCompleted });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function showData() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(task => {
    addTaskToDOM(task.text, task.completed);
  });
}
