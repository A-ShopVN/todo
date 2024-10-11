document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const taskInput = document.getElementById('new-task');
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Add complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', function() {
            newTask.classList.toggle('completed');
        });

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(newTask);
        });

        newTask.appendChild(completeButton);
        newTask.appendChild(deleteButton);
        todoList.appendChild(newTask);

        // Clear input
        taskInput.value = '';
    });
});


