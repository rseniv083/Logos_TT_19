let numb = +prompt('Write a number');

let one = 1;
let two = 0;
function fib(n){
    for (let i = 1; i <= n; i++) {
        let current = one + two;
        
        one = two;
        two = current;
        
        console.log(current);
    }
}

fib(numb);