const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = document.getElementById('taskText').value.trim();
  const priority = document.getElementById('priority').value;
  const dueDate = document.getElementById('dueDate').value;

  if (taskText === '') return;

  const li = document.createElement('li');
  li.classList.add('task', `priority-${priority}`);

  const taskInfo = document.createElement('span');
  taskInfo.textContent = taskText;

  const details = document.createElement('small');
  if (dueDate) {
    const date = new Date(dueDate);
    const today = new Date();
    details.textContent = `Due: ${dueDate}`;
    if (date < today) details.classList.add('overdue');
  }

  li.appendChild(taskInfo);
  if (dueDate) li.appendChild(details);

  
  taskInfo.addEventListener('click', () => {
    taskInfo.classList.toggle('completed');
  });

  
  const delBtn = document.createElement('button');
  delBtn.textContent = '✖';
  delBtn.classList.add('delete-btn');
  delBtn.onclick = () => li.remove();
  li.appendChild(delBtn);

  taskList.appendChild(li);

  
  document.getElementById('taskText').value = '';
  document.getElementById('dueDate').value = '';
});


