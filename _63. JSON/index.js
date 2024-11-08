// JSON = JavaScript Object Notation
//        Data interchange format
//        Used to exchange data between a server and a web application
//        JSON files contain key value pairs. {key: value}

//        JSON.stringify() = converts a JS object to a JSON string or simply string
//        JSON.prase() = converts a JSON string or simply string into a JS object

/********** JSON.stringify() ***************/
/******************************************/

const names = ["Mohit", "Raj", "Ram", "Roy"];
const jsonNames = JSON.stringify(names); // names array will be converted into a long string
console.log(jsonNames); // ["Mohit","Raj","Ram","Roy"]
console.log(typeof jsonNames); // string

/******************************************/

const person = {
    name: "Mohit",
    age: 30,
    isEmployed: true,
    hobbies: ["Cooking", "Reading"],
};
const jsonPerson = JSON.stringify(person); // person object will be converted into a long string
console.log(jsonPerson); // {"name":"Mohit","age":30,"isEmployed":true,"hobbies":["Cooking","Reading"]}
console.log(typeof jsonPerson); // string

/******************************************/

const people = [
    {
        name: "Mohit",
        age: 30,
        isEmployed: true,
        hobbies: ["Cooking", "Reading"],
    },
    {
        name: "Raj",
        age: 35,
        isEmployed: true,
        hobbies: ["Cooking", "Running"],
    },
    {
        name: "Ram",
        age: 43,
        isEmployed: true,
        hobbies: ["Fasting", "Reading"],
    },
];

const jsonPeople = JSON.stringify(people); // people array of object will be converted into a long string
console.log(jsonPeople);
// [{"name":"Mohit","age":30,"isEmployed":true,"hobbies":["Cooking","Reading"]},{"name":"Raj","age":35,"isEmployed":true,"hobbies":["Cooking","Running"]},{"name":"Ram","age":43,"isEmployed":true,"hobbies":["Fasting","Reading"]}]
console.log(typeof jsonPeople); // string

/********** JSON.prase() ***************/
/******************************************/

const jsonNames1 = `["Mohit", "Raj", "Ram", "Roy"]`;
const namesObject = JSON.parse(jsonNames1); // jsonNames1 json string will be converted into JS object
console.log(namesObject); // [ 'Mohit', 'Raj', 'Ram', 'Roy' ]
console.log(typeof namesObject); // object

/******************************************/

const jsonPerson1 = `{
    "name": "Mohit",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Cooking", "Reading"]
}`;
const personObject = JSON.parse(jsonPerson1); // jsonPerson1 json string will be converted into JS object
console.log(personObject);
// {
//     name: 'Mohit',
//     age: 30,
//     isEmployed: true,
//     hobbies: [ 'Cooking', 'Reading' ]
// }
console.log(typeof personObject); // object

/******************************************/

const jsonPeople1 = `[
    {
        "name": "Mohit",
        "age": 30,
        "isEmployed": true,
        "hobbies": ["Cooking", "Reading"]
    },
    {
        "name": "Raj",
        "age": 35,
        "isEmployed": true,
        "hobbies": ["Cooking", "Running"]
    },
    {
        "name": "Ram",
        "age": 43,
        "isEmployed": true,
        "hobbies": ["Fasting", "Reading"]
    }
]`;

const peopleObject = JSON.parse(jsonPeople1); // jsonPeople1 json string will be converted into JS object
console.log(peopleObject);
// [
//     {
//       name: 'Mohit',
//       age: 30,
//       isEmployed: true,
//       hobbies: [ 'Cooking', 'Reading' ]
//     },
//     {
//       name: 'Raj',
//       age: 35,
//       isEmployed: true,
//       hobbies: [ 'Cooking', 'Running' ]
//     },
//     {
//       name: 'Ram',
//       age: 43,
//       isEmployed: true,
//       hobbies: [ 'Fasting', 'Reading' ]
//     }
// ]
console.log(typeof peopleObject); // object
