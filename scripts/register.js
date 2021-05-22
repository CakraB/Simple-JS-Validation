const form = document.getElementById("register-form");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitForm();
});

function submitRegister() {
  const valueNama = nama.value.trim();
  const valueEmail = email.value.trim();
  const valuePassword = password.value.trim();

  if (valueNama === "") {
    setError(nama, "Nama harus diisi");
  } else {
    setSuccess(nama);
  }

  if (valueEmail === "") {
    setError(email, "Email harus diisi");
  } else if (!validateEmail(valueEmail)) {
    setError(email, "Email harus terdapat '@' dan '.'");
  } else {
    setSuccess(email);
  }

  if (valuePassword === "") {
    setError(password, "Password harus diisi");
  } else if (valuePassword.length < 5) {
    setError(password, "Password harus berisi minimal 5 Karakter");
  } else {
    setSuccess(password);
  }
}

function setError(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");

  small.innerText = message;

  formGroup.className = "form-group error";
}

function setSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

function validateEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
