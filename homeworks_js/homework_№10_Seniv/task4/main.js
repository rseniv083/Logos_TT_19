
function removeDuplicates(arr){
const newArr = [ ... new Set ( arr ) ] ;
return newArr;
}


const arr1 = removeDuplicates(['html','css','html','js']);
const arr2 = removeDuplicates(['html','css','js','html','js','python','js','scss']);

console.log(arr1);
console.log(arr2);