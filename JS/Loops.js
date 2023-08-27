/*JavaScript #07 - Loops*/

export const Loops = () => {
    // for(let index = 0; index < 10; index ++){
    //     console.log(index);
    // }

    // const cars = ['ferrari', 'tesla', 'mercedes'];

    // for (let i = 0; i <cars.length; i++){
    //     console.log(cars[i]);
    // }

    // for(let car of cars){
    //     console.log(car);
    // }

    // cars.forEach(function (car, index){
    //     console.log(index);
    //     console.log(car);
    // });

    let index = 0;

    //executa enquanto a condição for verdadeira
    while (index < 10) {
        console.log("index é menor do que 10!")
        index = index + 1;

    }

    //
    const person = {
        name: 'Jane',
        age: 21,
    };

    for (property in person) {
        console.log(person[property]);
    }
}