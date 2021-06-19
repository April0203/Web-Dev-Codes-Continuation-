// Set local storage item

// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// // // Set session storage item
// // sessionStorage.setItem('name', 'Beth');

// // // Remove from storage
// // localStorage.removeItem('age');

// // Get from local Storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// console.log(name, age);

// // Clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e) {
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('Tasks saved');
    tasks.forEach(function(task) {
        console.log(task);
    });

    e.preventDefault();
});