// objects destructuring --> accessing Objects

const person = {
    fisrtName: "Flacko",
    lastName: "Tito"
}

const {fisrtName, lastName} =  person // destructuring the person Objects
console.log(fisrtName, lastName);

// renaming keys in objects

const {fisrtName:fName, lastName:lName} = person
console.log(fName, lName);


// changing values

let tools = {
    frontend:"Json",
    backend: "NodeJs", 
    VersionControl: "mercurail"
}

let { tools:frontend = 'Html, css, Js', toools: VersionControl = 'git'} = tools;
console.log(frontend, VersionControl);

const person2 = {
    fname : "Joe",
    lname : 'Tito',
    age : 26
}

const  {middlename = "Leslie", nextAge = 27} = person2 // adding new keys which can accessed 

console.log(middlename)


// array destructuring 

const arr = ['foo', 'bar', 'zoo']

let [x,y,z ] = arr
console.log(x);

// skipping items

const  arrayItems = ['code', 'sleep', 'program',]

let [a,,b] = arrayItems // skipping arrayItems[1]

console.log(a);
console.log(b);

// assigning remaining elements to a single variable with the spread operator

const list = ['foo', 'baa', 'zoo',]

let [var1, ...var2] = list
console.log(var2);


// swapping variables using array destructuring
let name1 = 'King';
let name2 = 'Tito';

[name1 , name2] =  [name2, name1];
console.log(name1);


// Nested array destructuring

const obj = {
    id : 1,
    name : {
        fisrt : "Joe",
        last : "Lartey"
    }
}

const {name: { fisrt,  last } } = obj;
console.log(fisrt);


const fullName = ({f_name, l_name}) => `${f_name} ${l_name}`;
console.log(fullName({
    f_name : "Flacko",
    l_name : "Tito"
}));