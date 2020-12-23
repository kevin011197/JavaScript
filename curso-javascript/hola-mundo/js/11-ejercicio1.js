'use stric'

/**
 * Programa que pida 2 numeros y que nos diga cual es el mayor, el menor y si son iguales
 */

var numero1 = parseInt(prompt("Ingresa primer numero", 0));
var numero2 = parseInt(prompt("Ingresa segundo numero", 0));


if (numero1>numero2) {
    console.log('Numero: ' + numero1 + ' es mayor que nuemro: ' +numero2);
}else if (numero1 == numero2) {
    console.log('Los numeros son iguale');
}else{
    console.log('Numero: ' + numero2 + ' es mayor que nuemro: ' +numero1);
}