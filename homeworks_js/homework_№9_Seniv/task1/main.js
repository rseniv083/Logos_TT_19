let ask = prompt('Write something');
let res = 0;
for(let i = 0; i < ask.length; i++){
    if(ask.charAt(i) == ' '){
        res = res + 1; 
    }
}
console.log(res);
