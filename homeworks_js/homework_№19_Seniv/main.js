let accountForm = document.forms["accountForm"];

const name = /^[a-zA-Z]{1,20}$/;
const email = /^[\w,.-]+@[\w,.-]+$/;
const phone = /^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
$(".phone_mask").mask("+38(999)999-99-99");
const pass = /^\w{8,15}$/;

accountForm.signUp.addEventListener("click", function () {
  const firstName = accountForm.firstName;
  const secondName = accountForm.secondName;
  const emailAdress = accountForm.email;
  const phoneNumber = accountForm.phoneNumber;
  const password = accountForm.password;

  coincidence(firstName, name);
  coincidence(secondName, name);
  coincidence(emailAdress, email);
  coincidence(phoneNumber, phone);
  coincidence(password, pass);
});

function coincidence(element, regExp) {
  let className = element.name;
  let label = document.getElementsByClassName(`${className}`);

  if (element.value.match(regExp) == null) {
    element.style.borderColor = "red";
    label[0].style.display = "block";
  } else {
    element.style.borderColor = "green";
    label[0].style.display = "none";
  }
}
