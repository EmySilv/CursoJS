/*JavaScript #04 - Map, Filter & Reduce
const numbers = [1, 2, 3, 4, 5, 6];
const numbersMultiplye = numbers.map(function(number){
    return number * 2;
});

console.log(numbersMultiplye);

const ages = [1, 18, 32, 22, 40, 55, 30];

console.log("===============================")

// const evenAges = ages.filter(function (age) {
//     return age % 2 === 0;
// });

const sumOfAges = ages.reduce(function(age, accumulator){
    return accumulator + age;
}, 0);

console.log(sumOfAges);

console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
*/


/*JavaScript #05 - Objetos
const person = {
    firstName: "emy",
    lastName: "silv",
    age: 18,
    hobbies: ["ler", "comer", "jogar"],
    dog: {
        name: "simba",
        age: "1"
    }
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;


const {firstName: primeiroNome, lastName, age, hobbies, dog: {name}} = person;

const read = person.hobbies[2];

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);


const todos = [
    {
        id: 1,
        description: 'estudar programação nessa caraia',
        isCompleted: false
    },
    {
        id: 2,
        description: 'estudar programação nessa caraia',
        isCompleted: true
    },
    {
        id: 3,
        description: 'comer',
        isCompleted: true
    },
];

const object = todos[1].description;

console.log(object)*/


/*JavaScript #06 - JSON*/
const todos = [
    {
        id: 1,
        description: 'estudar programação nessa caraia',
        isCompleted: false
    },
    {
        id: 2,
        description: 'estudar programação nessa caraia',
        isCompleted: true
    },
    {
        id: 3,
        description: 'comer',
        isCompleted: true
    },
];

const todosJSON = JSON.stringify(todos);
const todosList = JSON.parse(todosJSON);