
let a = +prompt('Write number');
let b = +prompt('Write second number');
let b_ = b;

let result = 1;

if(b < 0){
    b_ = b * -1;
}
for(let i = 1; i <= b_; i ++) {
    result = result * a;
}
if(b < 0){
    result = 1/result;
}

if(b == 0){
    result = 1;
}
console.log(result)