document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText.trim() === '') return;

    const li = document.createElement('li');
    li.className = 'task not-done';

    const span = document.createElement('span');
    span.textContent = taskText;

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'buttons';

    const doneButton = document.createElement('button');
    doneButton.document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText.trim() === '') return;

    const li = document.createElement('li');
    li.className = 'task not-done';

    const span = document.createElement('span');
    span.textContent = taskText;

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'buttons';

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click', function() {
        li.classList.toggle('done');
        li.classList.toggle('not-done');
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
        const newTaskText = prompt('Edit task:', taskText);
        if (newTaskText) {
            span.textContent = newTaskText;
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    buttonContainer.appendChild(doneButton);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    li.appendChild(span);
    li.appendChild(buttonContainer);

    document.getElementById('task-list').appendChild(li);
    document.getElementById('new-task').value = '';
});