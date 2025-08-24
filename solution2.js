// The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

//solution :

// let array = [1, 2, 3, 3, 4, 5, 6, 6, 2];
// function doublearray(e,index,array) {
//     if (index !== array.length - 1) {
//         return(e * 2);
//     }else{
//         return(e);
//     }
// };
// let doubledarray = array.map(doublearray);
// console.log(doubledarray);

//optimised solution :

let array = [1, 2, 3, 3, 4, 5, 6, 6, 8];
let doubledarray = array.map((element, index, array) =>
    element === array[index + 1] ? element : element * 2);    //if curr element is similar to next element i.e array[index+1] then print e as it is and double the next one ...if we want to double the first one in pair simply change logic of index to index-1;
console.log(doubledarray);




