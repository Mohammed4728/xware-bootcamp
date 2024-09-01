//pushing data to local storage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#task-list .task').forEach(task => {
        tasks.push({
            text: task.querySelector('span').textContent,
            done: task.classList.contains('done')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.forEach(taskData => {
        addTaskToDOM(taskData.text, taskData.done);
    });
}

//adding a task
function addTaskToDOM(taskText, done = false) {
    const li = document.createElement('li');
    li.className = done ? 'task done' : 'task not-done';

    const span = document.createElement('span');
    span.textContent = taskText;
// done btn
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click', function() {
        li.classList.toggle('done');
        li.classList.toggle('not-done');
        saveTasks();
    });
// edit btn
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
        const newTaskText = prompt('Edit task:', taskText);
        if (newTaskText) {
            span.textContent = newTaskText;
            saveTasks();
        }
    });
// delete btn
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        li.remove();
        saveTasks();
    });
// append children
    li.appendChild(span);
    li.appendChild(doneButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    document.getElementById('task-list').appendChild(li);
}
// callong the function
loadTasks();

//adding a new task
document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText.trim() === '') return;

    addTaskToDOM(taskText);
    saveTasks();
    document.getElementById('new-task').value = '';
});

