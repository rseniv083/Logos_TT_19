//2.1:
//let count = +prompt('Write count elements');
//let denominator = +prompt('Write a denominator');

// let func = function(n, q){
//     let result = 0;
//     for(let b = 1; n; b = b * q, n--){
//         result = result + b;
//     }
//     console.log(result);
// }

// func(count, denominator);


//2.2:
let count = +prompt('Write count elements');
let denominator = +prompt('Write a denominator');

let func = function(n, q){
    let b = 1;
    let s = b * (1 - q ** n) / (1 - q);
    console.log(s);
}

func(count, denominator);