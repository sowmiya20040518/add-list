
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addButton = document.querySelector('button');

addButton.addEventListener('click', addTask);


function addTask() {
    const task = inputBox.value.trim(); 
    if (task === '') {
        alert('Please enter a task!');
        return;
    }

    
    const li = document.createElement('li');
    li.textContent = task;


    li.addEventListener('click', toggleTask);
    li.addEventListener('dblclick', removeTask);

    listContainer.appendChild(li);

    inputBox.value = '';
}

function toggleTask(event) {
    event.target.classList.toggle('checked');
}

function removeTask(event) {
    event.target.remove();
}
