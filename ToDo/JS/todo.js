/* this function gets the task from input */
function get_todos() { 
    /* create an array of tasks that are inputted. */
    var todos = new Array;
    /* this pulls the task that was saved in the browser's memory. */
    var todos_str = localStorage.getItem('todo');
    /* If the input is not null then JSON.parse will 
    communicate with the web browser to make the task a JavaScript Object. */
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
    console.log(todos);
}
/* This function adds the inputted task to get_todos function array */
function add() {
    /*Take the task, create a variable out of it. */
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /* this adds a new task to the end of the array. */
    todos.push(task);
    /* aaaand converts the task input to a JSON string */
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

/* This function keeps the tasks permanently displayed on the screen */
function show() {
    /* this sets the task that was retrieved as a variable */
    var todos = get_todos();

    /* This sets up each task as a <ul> */
    var html = '<ul>';
    /* This displays a task to the list in the order that it is inputted. */
    for (var i = 0; i < todos.length; i++) {
        /*this also displays a task as a list and creates the button with the 'x'. */
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    /* This displays the task as a list */
    document.getElementById('todos').innerHTML = html;

}
/* This displays the inputted task when the 'Add Item' button is clicked */
document.getElementById('add').addEventListener('click', add);
/* And this will keep those inputs displayed on the screen... */
show();

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}