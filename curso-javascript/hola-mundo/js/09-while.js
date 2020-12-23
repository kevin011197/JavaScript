'use strict'

// Bucle while

var year = 2020;

while(year != 1991){
    // Ejecuta esto
    console.log("Estamos en el año: "+year);

    if (year == 2000) {
        break;
    }
    year--;
}

// Do while

var years = 30;

do {
    alert("Solo cuando sea diferente a 20");
    years--;
} while (years >= 25);