// high order array methods

//  map --> creates a new instance of an array by iterating over each element over tha array and applying a callback function to the element

const arr = [1,2,3,4]

const arr2 = [-1, -2, -3, -4]
function binary(x){
    return x.toString(2);
}

output = arr.map(binary)

const binary2 = arr2.map((x) => x.toString(2)) // implicit return


console.log(binary2);
console.log(output);

// filter --> used to filter arrays by applying a function to the array

// funtion to filter even numbers in a given array

const numbers = [1,2,3,4,5,6,7]

function filterEven(numbers){
    return numbers % 2 == 0
}

const result = numbers.filter(filterEven)

const oddNumbers = numbers.filter((number) => number % 2)

console.log(oddNumbers);
console.log(result);

// reduce --> takes up to four prameters prev and next and apply a function to it

const toReduce = [1, 2, 3, 4]

const total = toReduce.reduce((prev, next) => prev + next)
console.log(total);



let max = 0;
const arry = [1,2,3,4]
arry.forEach(element => {
    if (element > max){
        max = element;
    }
});
console.log(max);

