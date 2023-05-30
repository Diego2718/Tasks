// script.js

// Function to handle form submission for login
function handleLogin(event) {
  event.preventDefault(); // Prevent form submission

  // Get the values from the input fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform login validation or any other necessary logic
  // ...

  // Redirect to the dashboard page after successful login
  window.location.href = 'dashboard.php';
}

// Function to handle form submission for creating a new task
function handleCreateTask(event) {
  event.preventDefault(); // Prevent form submission

  // Get the values from the input fields
  const taskName = document.getElementById('task-name').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;

  // Perform task creation or any other necessary logic
  // ...

  // Clear the form fields after successful task creation
  document.getElementById('task-name').value = '';
  document.getElementById('description').value = '';
  document.getElementById('due-date').value = '';
  document.getElementById('priority').value = 'low';

  // Display a success message or perform any other desired actions
  // ...
}

// Add event listeners to the login and create task forms
document.getElementById('login-form').addEventListener('submit', handleLogin);
document.getElementById('create-task-form').addEventListener('submit', handleCreateTask);
