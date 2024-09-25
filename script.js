// Simulate a simple user login system
document.getElementById("login-form")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple hardcoded login for demonstration
  if (username === "admin" && password === "password") {
      alert("Login successful!");
      window.location.href = "add-book.html"; // Redirect after successful login
  } else {
      alert("Invalid username or password");
  }
});

// Simulate adding a book to the library
document.getElementById("add-book-form")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // Here, you would typically send the data to a server
  console.log(`Book Added: ${title} by ${author} (ISBN: ${isbn})`);
  alert("Book added successfully!");
});
// Simulate a simple user login system
document.getElementById("login-form")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple hardcoded login for demonstration
  if (username === "admin" && password === "password") {
      alert("Login successful!");
      window.location.href = "add-book.html"; // Redirect after successful login
  } else {
      alert("Invalid username or password");
  }
});
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const department = document.getElementById("department").value;
  const alertMessage = document.getElementById("alert-message");

  // Simple hardcoded login for demonstration
  if (username === "admin" && password === "password" && department) {
      alert("Login successful!");
      window.location.href = "add-book.html"; // Redirect after successful login
  } else {
      alertMessage.textContent = "Invalid username, password, or department";
  }
});
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const department = document.getElementById("department").value;
  const profilePhoto = document.getElementById("profile-photo").files[0];
  const alertMessage = document.getElementById("alert-message");

  // Simple hardcoded login for demonstration
  if (username === "admin" && password === "password" && department && profilePhoto) {
      alert("Login successful!");
      window.location.href = "add-book.html"; // Redirect after successful login
  } else {
      alertMessage.textContent = "Invalid username, password, department, or profile photo";
  }
});

