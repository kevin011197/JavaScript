'use strict'
//Pruebas con Let y Var

//Prueba con var
var numero = 40;
console.log(numero); //valor 40

if(true){
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); //valor 50

//Prueba con Let
var texto = "Curso JS con kevin Llanquel";
console.log(texto); //Valor JS

if(true){
    let texto = "Curso Laravel 5 kevin llanquel";
    console.log(texto); //Valor Laravel 5
}

console.log(texto); //Valor JS