function suma(num1 , num2){
    return num1 + num2
}


//callback

function calc(num1 , num2 , callback){
    return callback(num1 , num2)
};


console.log(calc(2 , 3 , suma))



//Ejemplo de callback parte 2 

function saludar ( nombre ){
    alert ( ' hola ' + nombre)
}

function entradaDeUsuario(callback){
    var nombre = prompt('Ingrese un nombre por favor ' )
    callback(nombre)
}

entradaDeUsuario(saludar)



// ejemplo 3 

function saludar( name ){
    console.log(`hola ${name}`)
}

setTimeout(saludar , 10000 , "Marcos")