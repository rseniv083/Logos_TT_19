
let accForm = document.forms['account'];

accForm.signUp.disabled = true;
accForm.checkbox.addEventListener('change', function(){
    accForm.signUp.disabled = true;
    if(accForm.checkbox.checked == true){
        accForm.signUp.disabled = false;
    }
});

accForm.signUp.addEventListener('click', function(){
    const firstName = accForm.first_name.value;
    const secondName = accForm.second_name.value;
    const email = accForm.email.value;
    const manOrWoman = accForm.man_woman.value;
    const position = accForm.position.value;

    let containerForm = document.querySelector('.containerForm');
    containerForm.style.display = 'none';
    let account = document.forms['containerAcc']
    account.style.display = 'flex'

    let image = document.querySelector('.image')
    if(manOrWoman == 'woman'){
        image.style.backgroundImage = 'url(female-avatar-icon-18.png)';
    }
    if(manOrWoman == 'man'){
        image.style.backgroundImage = 'url(avatar-170-132161.png)';
    }
    if(manOrWoman == ''){
        image.style.backgroundImage = 'url(anonim.png)';
    }

    let headerText = document.querySelector('h3');
    headerText.textContent = `${firstName} ${secondName}`;

    let info = document.querySelector('span');
    info.innerHTML = `<p>${email}</p> <p>${position}</p>`;

    account.signOut.addEventListener('click', function(){
        account.style.display = 'none'
        containerForm.style.display = 'flex';
        accForm.reset();
    });
});


