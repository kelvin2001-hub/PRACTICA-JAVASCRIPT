const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function obtenerEdades(turno, cantidad, callback) {
    let edades = [];
    let contador = 0;

    function pedirEdad() {
        readline.question(`Ingrese la edad del estudiante ${contador + 1} del turno ${turno}: `, (edad) => {
            edad = parseInt(edad);
            if (!isNaN(edad)) {
                edades.push(edad);
                contador++;
                if (contador < cantidad) {
                    pedirEdad();
                } else {
                    callback(edades);
                }
            } else {
                console.log("Por favor, ingrese una edad válida.");
                pedirEdad();
            }
        });
    }

    pedirEdad();
}

function calcularPromedio(edades) {
    let suma = edades.reduce((a, b) => a + b, 0);
    return suma / edades.length;
}

obtenerEdades('mañana', 5, (edadesManana) => {
    let promedioManana = calcularPromedio(edadesManana);

    obtenerEdades('tarde', 6, (edadesTarde) => {
        let promedioTarde = calcularPromedio(edadesTarde);

        obtenerEdades('noche', 11, (edadesNoche) => {
            let promedioNoche = calcularPromedio(edadesNoche);

            console.log(`Promedio de edades turno mañana: ${promedioManana}`);
            console.log(`Promedio de edades turno tarde: ${promedioTarde}`);
            console.log(`Promedio de edades turno noche: ${promedioNoche.toFixed(2)}`);

            let promedios = {
                'mañana': promedioManana,
                'tarde': promedioTarde,
                'noche': promedioNoche
            };

            let turnoMayor = Object.keys(promedios).reduce((a, b) => promedios[a] > promedios[b] ? a : b);
            console.log(`El turno con el promedio de edades mayor es: ${turnoMayor}`);

            readline.close();
        });
    });
});