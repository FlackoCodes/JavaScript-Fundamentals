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

const  {middlename = "Leslie", nextAge = 27} = person2 // adding new keys

console.log(middlename)