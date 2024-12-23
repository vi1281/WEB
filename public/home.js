// Get the email from localStorage
const email = localStorage.getItem("userEmail");

// Check if email exists
if (email) {
  document.getElementById("email").textContent = email;
} else {
  // Redirect to login page if no email found
  window.location.href = "index.html";
}
