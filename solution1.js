// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

// solution :

let array = ['alexanderarnold', 'samuelmitchek', 'amendasarsew', 'nesta', 'camuel', 'si', 'palomaswetchenigher'];
let sortedarray = [];
for (student of array) {
    if (student.length < 6) {
        sortedarray.push('Gryffindor');
    }
    else if (student.length < 8) {
        sortedarray.push('Hufflepuff');
    }
    else if (student.length < 12) {
        sortedarray.push('Ravenclaw');
    }
    else {
        sortedarray.push('Slytherin');
    }
};
console.log(sortedarray);
