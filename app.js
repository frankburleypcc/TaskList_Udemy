// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all Event Listeners
loadEventListers();

// Load all Event Listeners function
function loadEventListers(){
    // add task event
    form.addEventListener('submit', addTask);
}

// addTask Function
function addTask(e){
    if (taskInput.value === '') {
        alert('Add a task');
    }

    // Create li element
    const li = document.createElement('li');
    // Add Class 
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // add icon html 
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to the li
    li.appendChild(link);

    // Append the li to ul
    taskList.appendChild(li);
    // Clears input
    taskInput.value = '';

    console.log(li);


    e.preventDefault();
}
