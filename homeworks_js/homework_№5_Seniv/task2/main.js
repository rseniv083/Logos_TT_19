let number = +prompt('Вкажіть число');

function numb(a){
    if(a == 1){
        console.log('Складне число');
        return;
    }
    for(let n = 2; n < a; n++){
        let result = a % n;
        if(result == 0){
            console.log('Складне число');
            return;
        }
    }
    console.log('Просте число');
}
numb(number);