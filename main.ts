class ToDoTask {
    task:string;
    date:string;
    completed:boolean;
}

/* let task = new ToDoTask("Test");

task.task = "Agh";
task.date = "May 25, 2022"
task.completed = true; */

function isValid():boolean {
    let taskValid = getElement("task");
    let dateValid = getElement("date");
    if (taskValid.value == "" || taskValid.value == null) {
        alert("Enter a name for the task!");
        return false;
    }
    if (dateValid.value == "" || dateValid.value == null) {
        alert("Enter a due date for the task!");
        return false;
    }
    return true;
}

function displayTask (task:ToDoTask) {
    let taskText = document.createElement("h2");
    taskText.innerText = task.task.toString();

    let taskDate = document.createElement("p");
    taskDate.innerText = task.date.toString();

    let taskDiv = document.createElement("div");
    if(task.completed) { /* adds completed task 
                            to class for styling */
        taskDiv.classList.add("complete");
    }

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(taskDate);

    if(task.completed) {
        let completedTasks = document.getElementById("complete");
        completedTasks.appendChild(taskDiv);
    }
    else {
        let notCompletedTasks = document.getElementById("incomplete");
        notCompletedTasks.appendChild(taskDiv);
    }
}

function getElement(id):HTMLInputElement {
    // returns an element as a HTMLInputElement
    return <HTMLInputElement>document.getElementById(id);
}

function getTask():ToDoTask {
    let thisTask = new ToDoTask();

    // get name of task
    let taskInput = getElement("task");
    thisTask.task = taskInput.value;

    // get date of task
    let dateInput = getElement("date");
    thisTask.date = dateInput.value;

    // get completion statuc
    let completed = getElement("completed");
    thisTask.completed = completed.checked;

    // return the task object
    return thisTask;
}

function main() {
    if(isValid()) { // if valid
        let task = getTask(); // get task information
        displayTask(task); // display the task information
    }
}

window.onload = function() {
    // get button from HTML
    let taskToAdd = document.getElementById("addTask");
    // executes main on button click
    taskToAdd.onclick = main;
}
