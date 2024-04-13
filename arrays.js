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

// shift --> removes the fisrt element int the array

const shiftedArray = ['Git', 'VC', 'GitHub', 'Linux']
shiftedArray.unshift('Kernel')
console.log(shiftedArray);