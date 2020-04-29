// 3= 3*2*1

let number = +prompt('Write number');

let result = 1;
let r = 0;

for(let i = number; i >=1; i--){
    result= result * i;
}
console.log(result);