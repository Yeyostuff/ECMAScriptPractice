//Declarando
class User {};

//Instancia de una clase
//const newUser = new User();

class Nuser{
    //métodos
    greeting(){
        return 'Hello!';
    }
};

const gndx = new Nuser();
console.log(gndx.greeting());

const bebeloper = new Nuser();
console.log(bebeloper.greeting()); 

class user{
//Constructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello!';
    }
}

const david = new user();

//This
class userN{
    constructor(name){
        this.name = name;
    }
    //methods
    speak(){
        return 'Hello!';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new userN('Ana');
console.log(ana.greeting());