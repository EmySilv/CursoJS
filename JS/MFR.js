/*JavaScript #04 - Map, Filter & Reduce*/

export const MFR = () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const numbersMultiplye = numbers.map(function (number) {
        return number * 2;
    });

    console.log(numbersMultiplye);

    const ages = [1, 18, 32, 22, 40, 55, 30];

    console.log("===============================")

    // const evenAges = ages.filter(function (age) {
    //     return age % 2 === 0;
    // });

    const sumOfAges = ages.reduce(function (age, accumulator) {
        return accumulator + age;
    }, 0);

    console.log(sumOfAges);

    console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
}