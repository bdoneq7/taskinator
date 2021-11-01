var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// When Add Task Button is Clicked, Add new Task Item
var createTaskHandler = function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

// Listen for Add Task Button Click by User
buttonEl.addEventListener("click", createTaskHandler);