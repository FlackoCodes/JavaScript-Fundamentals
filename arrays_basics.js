// arrays --> data structure used to store a collection of elements

// nested arrays

const array = [['Flacko','Tito'],['Frontend', 'Fullstack'], 'Engineer', 'Developer']

// getting elements from arrays using their indexes, arrays are 0 indexed

console.log(array[0][1]); // selecting the second element in the fisrt array inside the 'array'

// array methods

// pop --> removes the last element in the array at index -1 or array.length -1 

const poppedArray = ['fisrt', 'second', 'third']
poppedArray.pop()
console.log(poppedArray);

// push --> appends an element to the array

const appendedArray = ['Js', 'Python', 'Java', 'Ruby']
appendedArray.push('Assembly')
console.log(appendedArray);

// shift --> removes the fisrt element in the array

const shiftedArray = ['Git', 'VC', 'GitHub', 'Linux']
shiftedArray.shift('Kernel')
console.log(shiftedArray);

// unshift --> prepends an element to the array

const unshiftedArray = ['code', 'develop', 'program']
unshiftedArray.unshift('debug')
console.log(unshiftedArray);


// slice --> takes an array and returns a shallow copy of the array

const slicedArray = ['callstack', 'callback', 'prototype', 'stack']
console.log(slicedArray.slice(0, 2)); // start and end, when end is given, automatically  ends at the last index
