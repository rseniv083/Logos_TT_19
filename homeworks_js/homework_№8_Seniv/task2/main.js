let r = prompt('Write a radius');

function getArea(radius){
    let s = Math.PI * Math.pow(radius, 2);
    alert(Math.round(s) + ' square units');
}

if(r == null){
    alert('Please, write a radius');
    prompt('Write a radius');
}
else if(r == +r){
    getArea(r);
}
else{
    alert('Please, write a number');
}