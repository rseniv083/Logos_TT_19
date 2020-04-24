let name = prompt('Введіть імя');
let password;
if(name =='імя'){
    password = prompt('Ваш пароль');
}
else if(name == null){
    alert('Вхід скасовано');
}
else{
    alert('Я вас не знаю');
}

if(password =='логос'){
    alert('Ласкаво просимо');
}
else if(password == null){
    alert('Вхід скасовано');
}
else{
    alert('Пароль невірний');
}