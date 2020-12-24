'use strict'

/**
 * Mostar todos lo numeros impares que hayy entre dos numeros introducidos por el usuario
 */

 var numero1 = parseInt(prompt("Ingrese el primer numero", 0));
 var numero2 = parseInt(prompt("Ingrese segundo numero", 0));


while(numero1 < numero2){
    numero1++;

    if (numero1%2 != 0) {
        document.write("El "+numero1+ " Es impar </br>");
    }
}