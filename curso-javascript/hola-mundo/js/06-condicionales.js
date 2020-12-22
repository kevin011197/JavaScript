"use strict"

// Condicional IF
// Si A es igual a B entonces haz algo

var edad = 74;
var nombre = 'David Suarez';

/**
 * Operadores relacionales
 * Mayor: >
 * Menor: <
 * Mayor o igual: >=
 * Menor o igual: <=
 * Igual: ==
 * Distinto: !=
 */

if (edad >= 18) {
    //Es mayor de eddad
    console.log(nombre + ' ' + 'tiene: ' + edad + ' ' + 'años es mayor de edad');

    if (edad <= 33) {
        console.log('Todavia eres millenial');
    }else if(edad >= 70){
        console.log('Eres anciano');
    }else{
        console.log('Ya no eres milenial');
    }
}else{
    //Es menor de edad
    console.log(nombre + ' ' + 'tiene: ' + edad + ' ' + 'años no es mayor de edad');
}

/**
 * Operadores logicos
 * AND(Y): &&
 * OR(O): ||
 * Negacion: !
 */

var year = 2028;

 //Negacion 
 if (year != 2016) {
     console.log('el año no es 2020 realmente es: ' + year);
 }

 //AND
 if (year >= 2000 && year <= 2020 && year != 2020) {
     console.log('Estamos en la era actual');
 }else{
    console.log('Estamos en la era moderna');
 }

 if (year == 2009 || (year >= 2020 && year == 2028)) {
     console.log('El año aaba en 20');
 }else{
     console.log('Año no registrado');
}

