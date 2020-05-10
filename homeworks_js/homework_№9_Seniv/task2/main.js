let email = prompt('Write your email');

if(email.indexOf('@') > 0 && email.indexOf('@') < email.length - 1){
    console.log('Write');
}
else{
    console.log('Incorrect email');
}