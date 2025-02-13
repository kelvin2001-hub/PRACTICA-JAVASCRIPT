const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese la temperatura en Celsius: ', (celsius) => {
    celsius = parseFloat(celsius);

    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * 9/5) + 32;
        console.log(`Temperatura en Fahrenheit: ${fahrenheit}°F`);
        if (fahrenheit >= 14 && fahrenheit < 32) {
            console.log("Temperatura baja");
        } else if (fahrenheit >= 32 && fahrenheit <= 68) {
            console.log("Temperatura adecuada");
        } else if (fahrenheit >= 68 && fahrenheit <= 96) {
            console.log("Temperatura alta");
        } else {
            console.log("Temperatura desconocida");
        }
    } else {
        console.log("Por favor, ingrese una temperatura válida.");
    }

    readline.close();
});