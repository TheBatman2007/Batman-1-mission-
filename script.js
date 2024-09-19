const PASSWORD = 2007 ; // Set your password here

function login() {
    const passwordInput = document.getElementById('password').value;
    const errorElement = document.getElementById('login-error');
    if (passwordInput === PASSWORD) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        errorElement.textContent = '';
    } else {
        errorElement.textContent = 'Incorrect Password';
    }
}

function setGoal() {
    const goalInput = document.getElementById('goal-input').value;
    document.getElementById('today-goal').textContent = goalInput;
    document.getElementById('goal-input').value = '';
}

function addTask() {
    const taskInput = document.getElementById('task-input').value;
    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');
    listItem.textContent = taskInput;
    taskList.appendChild(listItem);
    document.getElementById('task-input').value = '';
}
