function arrCopy(arr){
    return arr.slice();    
}

const arr1 = arrCopy([1,2,3]);
const arr2 = arrCopy([1,2,3,[10,20]]);

console.log(arr1);
console.log(arr2);