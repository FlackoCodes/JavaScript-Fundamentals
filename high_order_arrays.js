// high order array methods

//  map --> creates a new instance of an array by iterating over each element over tha array and applying a callback function to the element

const arr = [1,2,3,4]

function binary(x){
    return x.toString(2);
}

output = arr.map(binary)

console.log(output);