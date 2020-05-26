let loginForm = document.forms['loginForm'];

loginForm.move.addEventListener('click', function(){
    let text = loginForm.text.value;
    loginForm.textPlaceholder.placeholder = text;
});


loginForm.placeholderInput.addEventListener('blur', function(){
    let plchldrInput = loginForm.placeholderInput.value;
    loginForm.placeholderInput.placeholder = plchldrInput;
    loginForm.placeholderInput.value = '';
})
