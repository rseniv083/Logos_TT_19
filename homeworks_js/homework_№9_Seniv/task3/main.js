let ask = prompt('Write something with "html"');
ask = ask.toLocaleLowerCase().split(' ');
let res = 0;

for(let i = 0; i < ask.length; i++){
    if(ask[i] == 'html'){
        res = res + 1;
    }
}

console.log(res);

