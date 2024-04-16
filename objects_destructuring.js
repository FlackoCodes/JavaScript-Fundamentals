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
