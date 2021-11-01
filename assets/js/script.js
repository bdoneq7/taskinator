var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// When Add Task Button is Clicked in the Form, Add new Task Item
var taskFormHandler = function(event) {
  event.preventDefault();    
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value; 

  // package up input data as an object
  var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
  };

  // sends input data as an argument to createTaskEl Function
  createTaskEl(taskDataObj);
};

// createTaskEl Function to Create List Item based on User Input
var createTaskEl = function(taskDataObj) {

    // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");

  // give it a css class name
  taskInfoEl.className = "task-info";

  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);

}

// Listen Method for Add Task Button Click in the Form by User and Run Task Function
formEl.addEventListener("submit", taskFormHandler);