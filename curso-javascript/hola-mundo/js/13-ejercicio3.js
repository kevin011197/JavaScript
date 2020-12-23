'use stritc'

/**
 * Hacer un programa que muestre todos los numeros entre todos los nuemros introducidos por el usuario
 */

var numero1 = parseInt(prompt('Ingrese primer numero',0));
var numero2 = parseInt(prompt('Ingrese segundo numero',0));

document.write("<h1>De "+numero1 +" a " +numero2+" estas estos numeros</h1>");
for (var i = numero1; i <= numero2; i++) {
    document.write('Numero: '+ i + "</br>");
}