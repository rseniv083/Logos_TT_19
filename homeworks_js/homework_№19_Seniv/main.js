const accountForm = document.forms["accountForm"];

$(".phone_mask").mask("+38(999)999-99-99");

accountForm.signUp.addEventListener("click", function () {
  const name = /^[a-zA-Z]{1,20}$/;
  const email = /^[\w,.-]+@[\w,.-]+$/;
  const phone = /^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
  const pass = /^\w{8,15}$/;

  coincidence(accountForm.firstName, name);
  coincidence(accountForm.secondName, name);
  coincidence(accountForm.email, email);
  coincidence(accountForm.phoneNumber, phone);
  coincidence(accountForm.password, pass);
});

function coincidence(element, regExp) {
  const label = document.querySelector(`.${element.name}`);

  if (element.value.match(regExp) == null) {
    element.style.borderColor = "red";
    label.style.display = "block";
  } else {
    element.style.borderColor = "green";
    label.style.display = "none";
  }
}
