document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual form submission

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Simple fake login logic (customize as needed)
  if (username === "admin" && password === "1234") {
    alert("🎉 Login successful!");
  } else if (username === "" || password === "") {
    alert("⚠ Please fill in all fields.");
  } else {
    alert("❌ Invalid username or password.");
  }
});

