let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskDate = document.getElementById('taskDate');
  const taskList = document.getElementById('taskList');

  if (!taskInput || !taskDate || !taskList) {
    console.error("Missing elements in DOM. Check your IDs.");
    return;
  }

  const taskText = taskInput.value.trim();
  const dateText = taskDate.value;

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement('li');
  li.textContent = `${taskText} - ${dateText || 'No date provided'}`;
  taskList.appendChild(li);

  taskInput.value = "";
  taskDate.value = "";
}


function removeTask() {
}

function toggleTask() {
}