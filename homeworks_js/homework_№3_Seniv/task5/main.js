let n = 0;

for(let i = 2; i >= n; i *= 2){
    n++
    console.log(i);
    if(n == 20){
        break;
    }
}