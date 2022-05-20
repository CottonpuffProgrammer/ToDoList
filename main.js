var ToDoTask = /** @class */ (function () {
    function ToDoTask() {
    }
    return ToDoTask;
}());
/* let task = new ToDoTask("Test");

task.task = "Agh";
task.date = "May 25, 2022"
task.completed = true; */
function isValid() {
    var taskValid = getElement("task");
    var dateValid = getElement("date");
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
function displayTask(task) {
    var taskText = document.createElement("h2");
    taskText.innerText = task.task.toString();
    var taskDate = document.createElement("p");
    taskDate.innerText = task.date.toString();
    var taskDiv = document.createElement("div");
    if (task.completed) { /* adds completed task
                            to class for styling */
        taskDiv.classList.add("complete");
    }
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(taskDate);
    if (task.completed) {
        var completedTasks = document.getElementById("complete");
        completedTasks.appendChild(taskDiv);
    }
    else {
        var notCompletedTasks = document.getElementById("incomplete");
        notCompletedTasks.appendChild(taskDiv);
    }
}
function getElement(id) {
    // returns an element as a HTMLInputElement
    return document.getElementById(id);
}
function getTask() {
    var thisTask = new ToDoTask();
    // get name of task
    var taskInput = getElement("task");
    thisTask.task = taskInput.value;
    // get date of task
    var dateInput = getElement("date");
    thisTask.date = dateInput.value;
    // get completion statuc
    var completed = getElement("completed");
    thisTask.completed = completed.checked;
    // return the task object
    return thisTask;
}
function main() {
    if (isValid()) { // if valid
        var task = getTask(); // get task information
        displayTask(task); // display the task information
    }
}
window.onload = function () {
    // get button from HTML
    var taskToAdd = document.getElementById("addTask");
    // executes main on button click
    taskToAdd.onclick = main;
};
