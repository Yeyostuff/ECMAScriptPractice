var lastName = 'David';

lastName = 'Oscar';
console.log(lastName)

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log (animal)

const fruits = () => {
    if(true){
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; //block scope solo pueden accederse desde el bloque en el que esta instaladas
        var fruit3 = 'Banana'; // block scope solo se accede en este bloque
}
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruit();