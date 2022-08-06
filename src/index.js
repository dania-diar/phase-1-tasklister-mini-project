document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");

  taskForm.addEventListener("submit", createTask);
});

const createTask = (event) => {
  event.preventDefault();

  const taskDescription = document.getElementById("new-task-description");
  const task = document.createElement("li");
  task.innerText = taskDescription.value;

  document.getElementById("tasks").appendChild(task);
  event.target.reset();
};
