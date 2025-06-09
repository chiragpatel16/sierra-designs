// ========== LOGIN ==========
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const msg = document.getElementById("loginMsg");

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email);

  if (!user) {
    msg.style.color = "red";
    msg.textContent = "Please create a new account";
  } else if (user.password !== password) {
    msg.style.color = "red";
    msg.textContent = "Incorrect password";
  } else {
    msg.style.color = "lightgreen";
    msg.textContent = "Login successful!";
  }
}

// ========== SIGNUP ==========
function handleSignup(e) {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("signupMsg");

  if (!firstName || !lastName || !email || !password) {
    msg.style.color = "red";
    msg.textContent = "All fields are required.";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find(user => user.email === email)) {
    msg.style.color = "orange";
    msg.textContent = "User already exists!";
    return;
  }

  users.push({ firstName, lastName, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  msg.style.color = "lightgreen";
  msg.textContent = "Signup successful! Redirecting...";
}
