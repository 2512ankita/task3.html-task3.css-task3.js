
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.onclick = toggleTaskStatus;
        taskList.appendChild(li);
        taskInput.value = '';
        updateLocalStorage();
    }
}


function toggleTaskStatus() {
    this.classList.toggle('completed');
    updateLocalStorage();
}


function updateLocalStorage() {
    const tasks = [];
    document.querySelectorAll('li').forEach(task => {
        tasks.push({
            text: task.textContent,
            completed: task.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) {
            li.classList.add('completed');
        }
        li.onclick = toggleTaskStatus;
        taskList.appendChild(li);
    });
}


window.onload = loadTasks;
