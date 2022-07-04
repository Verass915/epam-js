const car = {
    color: "black",
}
car.color = "green"
console.log(car.color);

car.power = function () {
    console.log("engine power");
} 
car.power();


function acceptedAppleAndPears (apple, pears) {
    let adding = apple + pears;
    console.log(adding);
    return adding;
}
acceptedAppleAndPears(8,5)


function definition (name) {
    if(name == "Vera"){
    console.log("Здравствуйте" + "," + " " + name);
    }
    else {
    console.log("Такого имени нет");
    }
}
definition("Vera");


function typeArgument (arg) {
    console.log(typeof arg);
}
typeArgument(5);
typeArgument('5');
typeArgument(false);
typeArgument(0);


// function primeNumber (num) {
//     if ( num % (num-1) === 0) return "it's not a prime num";
//     primeNumber(num);
// }
// console.log(primeNumber(4));