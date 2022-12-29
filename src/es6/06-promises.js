//La lógica de las promesas es esta;
//Resolve o Reject, es decir va a pasar o no va a pasar

const anotherFunction = () =>  {
    return new Promise( (resolve, reject) =>{
        if (false) {
            resolve('Hey!!');
        } else {
            reject('No funcionó!'); 
        }
    } )
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));