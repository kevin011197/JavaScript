'use strict'

/**
 * Tabla de multiplicar de un numero introducido por pantalla
 */


var number = parseInt(prompt('Ingrese un numero', 1));


while (isNaN(number) || number<=0) {
    var number = parseInt(prompt('Ingrese un numero', 1));
}


document.write('<h1>Tabla del ',number,'</h1>');
if (number >= 1) {
    var resultado = 0;
    for (var i = 1; i <= 10; i++) {
        resultado = number * i;
        document.write(number, ' * ', i, ' = ', resultado, '</br>');
    }
}