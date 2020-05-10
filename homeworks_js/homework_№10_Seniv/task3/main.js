function getLength(arr){
   let arrCopy = arr.slice();
  
   for(let key in arrCopy){
    arrCopy[key] = arrCopy[key].length;
    }
    
    return arrCopy;
}

const arr1 = getLength(['Ivan','Pavlo','Ira']);
const arr2 = getLength(['Oleksiy','Andriana']);

console.log(arr1)
console.log(arr2)