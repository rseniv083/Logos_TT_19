let edit = document.querySelector(".edit");
let save = document.querySelector(".save");

let bttmEditContent = document.querySelector(".bttmEditContent");
let topContent = document.querySelector(".topContent");
let textarea = document.querySelector("textarea");

edit.addEventListener("click", function () {
  bttmEditContent.style.display = "flex";
  textarea.value = topContent.innerHTML;
  bttmStyleContent.style.display = "none";
});

save.addEventListener("click", function () {
  bttmEditContent.style.display = "none";
  topContent.innerHTML = textarea.value;
});

let style = document.querySelector(".style");
let bttmStyleContent = document.querySelector(".bttmStyleContent");
style.addEventListener("click", function () {
  bttmEditContent.style.display = "none";
  bttmStyleContent.style.display = "flex";
});

let form = document.forms["form"];
form.addEventListener("click", function () {
  if (form.boldStyle.checked) {
    topContent.style.fontWeight = form.boldStyle.value;
  } else {
    topContent.style.fontWeight = "";
  }
  if (form.italicStyle.checked) {
    topContent.style.fontStyle = form.italicStyle.value;
  } else {
    topContent.style.fontStyle = "";
  }
  topContent.style.fontSize = form.size.value;
  topContent.style.fontFamily = form.family.value;
});

let colors = document.querySelector(".colors");
function createContainerColor(type) {
  let container = document.createElement("div");
  for (let i = 0; i < 9; i++) {
    container.classList.add("colorsContainer");
    let backgroundColors = [
      "red",
      "blue",
      "black",
      "green",
      "chocolate",
      "gold",
      "silver",
      "pink",
      "brown",
    ];
    let childBox = document.createElement("div");
    childBox.style.backgroundColor = backgroundColors[i];
    childBox.classList.add("childBox");
    childBox.addEventListener("click", function () {
      if (type == "textColor") {
        topContent.style.color = backgroundColors[i];
      }

      if (type == "backgroundColor") {
        topContent.style.backgroundColor = backgroundColors[i];
      }
    });

    container.appendChild(childBox);
  }
  colors.appendChild(container);
  isContainerCreated = true;
}

form.textColor.addEventListener("click", function () {
  colors.innerHTML = "";
  let h2 = document.createElement("h2");
  h2.textContent = "Text color";
  colors.appendChild(h2);
  console.log("textColor");
  createContainerColor("textColor");
});

form.backgroundColor.addEventListener("click", function () {
  colors.innerHTML = "";
  let h2 = document.createElement("h2");
  h2.textContent = "Background color";
  colors.appendChild(h2);
  createContainerColor("backgroundColor");
});

let headContainer = document.querySelector(".headContainer");
let containerTableList = document.querySelector(".containerTableList");
let add = document.querySelector(".add");
let tableForm = document.forms["tableForm"];
add.addEventListener("click", function () {
  headContainer.style.display = "none";
  containerTableList.style.display = "flex";
});

let divChooseCreate = document.querySelector(".chooseCreate");
let tableList = document.forms["tableList"];
let tableCreateForm = document.forms["tableCreateForm"];
let createList = document.forms["createList"];

tableList.addEventListener("click", function () {
  if (tableList.chooseCreate.value == "table") {
    divChooseCreate.style.height = 500 + "px";
    tableCreateForm.style.display = "flex";
    createList.style.display = "none";
  }
  if (tableList.chooseCreate.value == "list") {
    createList.style.display = "flex";
    tableCreateForm.style.display = "none";
    divChooseCreate.style.height = 300 + "px";
  }
});

let createTable = document.querySelector(".createTable");
createTable.addEventListener("click", function () {
  countTR = tableCreateForm.countTR.value;
  countTD = tableCreateForm.countTD.value;
  let table = document.createElement("table");
  for (let i = 1; i <= countTR; i++) {
    let tr = document.createElement("tr");
    console.log("tr");

    for (let j = 1; j <= countTD; j++) {
      let td = document.createElement("td");
      td.style.width = tableCreateForm.widthTD.value + "px";
      td.style.height = tableCreateForm.heightTD.value + "px";
      td.style.borderStyle = tableCreateForm.typeBd.value;
      td.style.borderColor = tableCreateForm.colorBd.value;
      tr.appendChild(td);
      console.log(td);
    }
    table.appendChild(tr);
  }
  table.style.borderWidth = tableCreateForm.widthBd.value + "px";
  table.style.display = "block";
  table.style.borderCollapse = "collapse";

  let div = document.createElement("div");
  div.appendChild(table);
  textarea.value += div.innerHTML;

  headContainer.style.display = "flex";
  containerTableList.style.display = "none";

  tableCreateForm.reset();
  tableCreateForm.style.display = "none";
  divChooseCreate.style.height = 300 + "px";
  tableList.reset();
});

let listForm = document.querySelector(".createList");
listForm.addEventListener("click", function () {
  let listCreate = document.createElement("ul");
  let countLi = createList.countLi.value;
  for (let i = 1; i <= countLi; i++) {
    let li = document.createElement("li");
    li.style.listStyleType = createList.marksType.value;
    li.textContent = `item ${i}`;
    listCreate.appendChild(li);
  }
  let div = document.createElement("div");
  div.appendChild(listCreate);
  textarea.value += div.innerHTML;

  headContainer.style.display = "flex";
  containerTableList.style.display = "none";

  createList.reset();
  createList.style.display = "none";
  tableList.reset();
});
