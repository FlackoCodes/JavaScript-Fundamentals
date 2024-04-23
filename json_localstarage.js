// JSON --> JavaScript Object Notation
/*
similar to an object(syntax wise) in JavaScript but with less features

-- doesnt support functions
-- used to transfer / send  data  between two computers
-- used to store data 

*/

let _jsonObject = {
    "name": "Joe",
    "age": 26
}


// built in JSON object

// JSON.strigify() --> turns a JavaScript object into a JSON
// JSON.parse() --> turns the JSON back to a JavaScript object.

const obj1 = {
    name: 'Tito',
    age: 26,
    profession: 'engineering',
    fun: function objectFunc (){
         console.log('this is a function in an object');
    }
}

console.log(obj1);

let json1 = JSON.stringify(obj1)
console.log(json1);
 
let parsedObject = JSON.parse(json1)
console.log(parsedObject);


// localstaroage --> used to save data "more permanently"

localStorage.setItem('message', 'hello, world');
console.log(localStorage.getItem('message'));
