
function getSqrt(number) {
  alert(Math.sqrt(number));
}

let n = prompt('Write a number');
if (n <= 0) {
    alert("Please, write a positive number");
    n = prompt("Write a number");
}
while (n != +n) {
  if (n == null) {
    alert("Please, write a number");
  }
  else {
    alert("Just number, please");
  }
  n = prompt("Write a number");
}

getSqrt(n);
