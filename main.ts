class ToDoTask {
    task:string;
    date:string;
    completed:boolean;

    constructor(inputTask:string) {
        this.task = inputTask;
    }
}

/* let task = new ToDoTask("Test");

task.task = "Agh";
task.date = "May 25, 2022"
task.completed = true; */

function isValid():boolean {
    return true;
}

function displayTask () {

}

function getElement(id):HTMLInputElement {
    return <HTMLInputElement>document.getElementById(id);
}

function getTask():ToDoTask {
    let thisTask = new ToDoTask();

    let taskInput = getElement("task");
    thisTask.task = taskInput.value;

    let dateInput = getElement("date");
    thisTask.date = dateInput.value;

    let completed = getElement("completed");
    thisTask.completed = completed.checked;

}

function main() {
    if(isValid()) {
        let task = getTask();
        displayTask(task);
    }
}

window.onload = function() {
    let taskToAdd = document.getElementById();
    addTask.onclick = main;
}