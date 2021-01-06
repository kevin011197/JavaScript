'use strict'

/**
 * Que nos diga si un numero es par o impar 
 * 1. ventana prompt
 * 2. Si no es valido que pida denuevo el numero
 */

 var number = parseInt(prompt('Introduce un numero',0));

 while(isNaN(number)){
    number = parseInt(prompt('Introduce un numero',0));
 }

 if (number % 2 == 0) {
     alert('es un numero par');
 }else{
     alert('es impar')
 }