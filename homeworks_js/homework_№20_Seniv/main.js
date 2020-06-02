const form = document.forms["form"];

let arrUsers = [];

form.addUser.addEventListener("click", addUser);

const tableBody = document.querySelector("table").tBodies[0];

//1
function addUser() {
  getUser();

  tableBody.innerHTML = "";

  arrUsers.push(getUser());
  console.log(arrUsers);

  form.reset();

  render();
}

function render() {
  for (let i = 0; i < arrUsers.length; i++) {
    const trElement = document.createElement("tr");

    createTdElement(i + 1, trElement);
    createTdElement(arrUsers[i].login, trElement);
    createTdElement(arrUsers[i].password, trElement);
    createTdElement(arrUsers[i].email, trElement);
    createButtonEdit(trElement, "Edit");
    createButtonEdit(trElement, "Delete");

    tableBody.appendChild(trElement);

    let findDelete = document.getElementsByClassName("delete");
    findDelete[i].addEventListener("click", function () {
      deleteUser(i);
    });

    let findEdit = document.getElementsByClassName("edit");
    findEdit[i].addEventListener("click", function () {
      editUser(i);
    });
  }
}

function createTdElement(textContent, trElement) {
  const tdElement = document.createElement("td");
  tdElement.textContent = textContent;
  trElement.appendChild(tdElement);
}

function createButtonEdit(trElement, editDelete) {
  const editButton = document.createElement("button");
  editButton.textContent = editDelete;
  editButton.classList += editDelete.toLowerCase();

  const tdElement = document.createElement("td");
  tdElement.appendChild(editButton);

  trElement.appendChild(tdElement);
}

//2
function deleteUser(i) {
  arrUsers.splice(i, 1);
  tableBody.innerHTML = "";
  render();
}

//3
function editUser(i) {
  let userIndex = i;
  let elem = arrUsers[userIndex];

  form.login.value = elem.login;
  form.email.value = elem.email;
  form.password.value = elem.password;

  form.addUser.style.display = "none";
  form.editUser.style.display = "block";

  form.editUser.addEventListener("click", function () {
    saveEditUser(userIndex);
  });
}

function saveEditUser(userIndex) {
  let user = new getUser();
  arrUsers[userIndex] = user;

  tableBody.innerHTML = "";
  form.reset();
  render();

  form.addUser.style.display = "block";
  form.editUser.style.display = "none";
}

function getUser() {
  const login = form.login.value;
  const password = form.password.value;
  const email = form.email.value;

  let user = {
    login: login,
    password: password,
    email: email,
  };

  return user;
}
