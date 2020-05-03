function maxNumb(a, b){
    let n = Math.max(a, b, ...arguments);
    console.log(n);
}

maxNumb(1, 300, 40, 4, 5)