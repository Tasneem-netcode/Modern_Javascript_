let taskInput = document.getElementById('taskInput');
let addTaskBtn = document.querySelector('button');
let taskList = document.getElementById('taskList');

//Add Task
addTaskBtn.addEventListener("click", (e) => {
    console.log(e.target);
    let task = taskInput.value.trim(); //trim() removes whitespace from both ends of a string
    console.log(task);
    if(task){
        let newtaskli = document.createElement('li');
        newtaskli.innerHTML = `<span>${task}</span><button class="deleteBtn">Delete</button>`;
        taskList.appendChild(newtaskli);
        taskInput.value = "";
    }
    if(taskInput.value.length === 0) return; //if input is empty do nothing
});

//Delete Task using event delegation
taskList.addEventListener("click", (e) => {
    if(e.target.tagName === 'SPAN'){
        e.target.classList.toggle('completed'); //toggle will add the class if not present else remove it
    }
    else if(e.target.classList.contains('deleteBtn')){
        e.target.parentElement.remove();
    }
});