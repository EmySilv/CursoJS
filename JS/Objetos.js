/*JavaScript #05 - Objetos*/

export const Objetos = () => {
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


    const { firstName: primeiroNome, lastName, age, hobbies, dog: { name } } = person;

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

    console.log(object)
}