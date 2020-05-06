let n = prompt('Write a number');

function getSqrt(number){
    alert(Math.sqrt(number));
}

if(n == null){
    alert('Please, write a number');
    prompt('Write a number');
}
else if(n <= 0){
    alert('Please, write a positive number');
}
else if(n == +n){
    getSqrt(n);
}
else{
    alert('Please, write a number');
}