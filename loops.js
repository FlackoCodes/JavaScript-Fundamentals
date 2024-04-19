// loops -> doing something over and over again, stop until a conditio is met.

// using a loop to count numbers from 1 to 10

for (let index = 1; index < 11; index++) {
    console.log(index);
}
  
// counting backwards from 10
for (let index = 10; index > 0; index--) {
    console.log(index);
}


// forEach loop --> applies to a callback function to each element in the array


// adding all elements in an array using forEach
const array = [1,2,3,4,5]
let sum = 0
array.forEach(element => {
    sum+= element
});
console.log(sum);


// forof --> similar to the regular for loop, used to iterate over iterables like arrays, maps

const array2 = [6,7,8,9,10]
for (const iterator of array2) {
    console.log(iterator); // logs the elements in the array2 to the console.
}


// forin --> used commonly to iterate over enumerable properties of an object

const object = {
    name: "Tito",
    profession: "Software Engineer"
}

for (const key in object) {
    console.log(key);
}

