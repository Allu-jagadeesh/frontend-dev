

function addTask() {
    var taskText = document.getElementById('newTask').value;

    if (taskText.trim() !== '') {
        var tasksContainer = document.getElementById('tasks');

        
        var taskElement = document.createElement('div');
        taskElement.className = 'task';

        
        var taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;

        
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.onclick = function() {
            tasksContainer.removeChild(taskElement);
        };

        
        taskElement.appendChild(taskTextElement);
        taskElement.appendChild(deleteButton);

        
        tasksContainer.appendChild(taskElement);

        
        document.getElementById('newTask').value = '';
    }
}
