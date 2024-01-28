const subcribe = document.getElementById("subcribe");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");
subcribe.addEventListener("submit", validationEmail);

function validationEmail(e) {
  e.preventDefault();

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var email = emailInput.value.trim();
  if (!emailRegex.test(email)) {
    emailInput.classList.add("border-red-500");
    message.classList.add("pointer-events-auto", "block");
    message.classList.remove("pointer-events-none", "hidden");
  } else {
    emailInput.classList.remove("border-red-500");
    message.classList.remove("pointer-events-auto", "block");
    message.classList.add("pointer-events-none", "hidden");
  }
}
