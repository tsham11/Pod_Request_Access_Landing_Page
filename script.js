function validateEmail() {
  var emailInput = document.getElementById("emailInput");
  var message = document.getElementById("message");
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var userEmail = emailInput.value;

  if (emailRegex.test(userEmail)) {
    message.innerHTML = "Submitted! Email is valid.";
    message.style.color = "#54E6AF";
  } else {
    message.innerHTML = "Oops! Please check your email.";
    message.style.color = "#FB3E3E";
  }
}
