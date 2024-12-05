// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new task item
    const taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    // Mark task as completed on click
    taskItem.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
    });

    // Append task to the list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
}

// Function to delete a task
function deleteTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}

// Add task when button is clicked
addTaskButton.addEventListener("click", addTask);

// Add task when Enter key is pressed
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
