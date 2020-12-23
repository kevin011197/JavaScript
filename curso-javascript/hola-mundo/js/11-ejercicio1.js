'use stric'

/**
 * Programa que pida 2 numeros y que nos diga cual es el mayor, el menor y si son iguales
 * Si los numeros no son un numero o son menores o iguales a 0
 */

var numero1 = parseInt(prompt("Ingresa primer numero", 0));
var numero2 = parseInt(prompt("Ingresa segundo numero", 0));


while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Ingresa primer numero", 0));
    numero2 = parseInt(prompt("Ingresa segundo numero", 0));
}

if (numero1>numero2) {
    console.log('Numero: ' + numero1 + ' es mayor que nuemro: ' +numero2);
}else if (numero1 == numero2) {
    console.log('Los numeros son iguales');
}else if (numero1<numero2) {
    console.log('Numero: ' + numero2 + ' es mayor que nuemro: ' +numero1);
}else{
    console.log('Numeros con formato incorrecto');
}