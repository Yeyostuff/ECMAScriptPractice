// Enahced objet literals
//Antes se trabajaba así:

function newUser (user, age, country, uId){
    return{
        user,
        age, 
        country,
        uId
    }
}

console.log(newUser("Jason", 29, "GT", 22))