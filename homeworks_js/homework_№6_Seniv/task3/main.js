let firstNumber = +prompt('Write number');
let lastNumber = +prompt('Write last number');

let i, j;
function printPrimeNumbers(first, last) {
    for (i = first, j = 2; i <= last; j++) {
        if (i == 1) {
            i++;
        }
        if (j >= i / 2 + 1) {
            j = 2;
            console.log(i);
            i++;
        }
        if (i % j == 0) {
            i++;
            j = 2;
        }
    }
}
printPrimeNumbers(1, 20);