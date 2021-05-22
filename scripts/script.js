const form = document.getElementById("form");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const pesan = document.getElementById("pesan");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitForm();
});

function submitForm() {
  const valueNama = nama.value.trim();
  const valueEmail = email.value.trim();
  const valuePesan = pesan.value.trim();

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

  if (valuePesan === "") {
    setError(pesan, "Pesan harus diisi");
  } else if (valuePesan.length < 5) {
    setError(pesan, "Pesan harus berisi minimal 5 Karakter");
  } else {
    setSuccess(pesan);
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
