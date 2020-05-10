
function getSqrt(number) {
  alert(Math.sqrt(number));
}

// let n = prompt('Write a number');
// if (n <= 0) {
//     alert("Please, write a positive number");
//     n = prompt("Write a number");
// }
// while (n != +n) {
//   if (n == null) {
//     alert("Please, write a number");
//   }
//   else {
//     alert("Just number, please");
//   }
//   n = prompt("Write a number");
// }

// getSqrt(n);

//------------------------------------------------------------

while(true) {
    let n = prompt('Write a number');
    
    if (n === null) {
        alert("Please, write a number");
    }
    else if (n != +n) {
        alert("Just number, please");
    } 
    else if (n <= 0) {
        alert("Please, write a positive number");
    }
    else if (n == +n) {
        getSqrt(n);
        break;
    } 
}
