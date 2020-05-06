
function getArea(radius){
    let s = Math.PI * Math.pow(radius, 2);
    alert(Math.round(s) + ' square units');
}

let r = prompt('Write a radius');
while(r != +r){
    if(r == null){
        alert('Please, write a radius'); 
    }
    else{
        alert('Just number, please')
    }
    r = prompt('Write a radius');
}
getArea(r);
