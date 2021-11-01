var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// When Add Task Button is Clicked in the Form, Add new Task Item
var createTaskHandler = function(event) {
  event.preventDefault();      

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

// Listen for Add Task Button Click in the Form by User and Run Task Function
formEl.addEventListener("submit", createTaskHandler);