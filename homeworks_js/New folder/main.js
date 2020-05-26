let bottomContainer = document.querySelector('.bottomContainer');
let edit = document.querySelector('.edit')

edit.onclick = function(){
    let createTextarea = document.createElement('textArea');
    let buttnAdd = document.createElement('button');
    let buttnSave = document.createElement('button');
    bottomContainer.appendChild(createTextarea);
    bottomContainer.appendChild(buttnAdd);
    bottomContainer.appendChild(buttnSave);
}