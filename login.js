document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "password") {
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            errorMessage.textContent = "Invalid username or password!";
            errorMessage.style.display = "block";
        }
    });
});
