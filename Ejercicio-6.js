function calcularDescuento(origen, destino) {
    let descuento = 0;

    origen = origen.toUpperCase();
    
    if (origen === "PALMA") {
        switch (destino) {
            case "La costa del Sol":
                descuento = 5;
                break;
            case "Panchimalco":
                descuento = 10;
                break;
            case "Puerto el Triunfo":
                descuento = 15;
                break;
            case "El Tunco":
                descuento = 50;
                break;
            default:
                descuento = 0;
                break;
        }
    }
    if (descuento > 0) {
        console.log(`Origen: ${origen}`);
        console.log(`Destino: ${destino}`);
        console.log(`Descuento aplicado: ${descuento}%`);
    } else {
        console.log("No hay descuento disponible para la ruta seleccionada.");
    }
}
const origenUsuario = "El Tunco"; 
const destinoUsuario = "Panchimalco";
calcularDescuento(origenUsuario, destinoUsuario);