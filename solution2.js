// The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

//solution :

let array = [1, 2, 3, 3, 4, 5, 6, 6, 2];
function doublearray(e,index,array) {
    if (index !== array.length - 1) {
        return(e * 2);
    }else{
        return(e);
    }
};
let doubledarray = array.map(doublearray);
console.log(doubledarray);

