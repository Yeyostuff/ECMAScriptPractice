//Se hacía así anteriormente:
function newUser(name, age, country){
    var name = name || "Jason";
    var age = age || 30;
    var country = country || "Guatemala";
    console.log(name, age, country);
}

//newUser();
//newUser("Pedro", 20, "Colombia")

//Nueva forma de hacerlo con ECMAScript6:
function newAdmin(name = "Jason", age = 30, country = "GT"){
    console.log(name, age, country);
}

newAdmin();
