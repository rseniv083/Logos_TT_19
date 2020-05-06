//Variant1:
function getDigits(number){
    console.log(number - Math.trunc(number));
}

getDigits(7.313);


//Variant2:
function getDigits2(number){
    console.log(number % 1);
}

getDigits2(1.232);
