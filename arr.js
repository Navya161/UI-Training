/*function squared(a){
    return a*a;
}
let arr1=[1,2,3,4];
let arr2=arr1.map(squared);
console.log(arr2);
for(let i of arr1){
    let value = squared(i);
    arr2.push(value)
}
//  function -->accept individual elements of this  array and it will retrun sqaure of the elements
// arr2=[1,2,3,4]*/
function checkeven(a){
    return a%2 == 0;
}
let arr1=[1,2,3,4];
let arr2=arr1.filter(checkeven);
console.log(arr2);