function calcularAumentoSalarial(nombre, salario, categoria, IdTrabajador) {
    let aumento;

    switch (categoria) {
        case 'A':
            aumento = salario * 0.15;
            break;
        case 'B':
            aumento = salario * 0.30;
            break;
        case 'C':
            aumento = salario * 0.10;
            break;
        case 'D':
            aumento = salario * 0.20;
            break;
        case 'E':
            aumento = salario * 0.20;
            break; 
        default:
            aumento = 0; 
            break;
    }

    const nuevoSalario = salario + aumento;
    console.log("Datos del empleado:");
    console.log("Nombre: " + nombre);
    console.log("Salario actual: $" + salario);
    console.log("Categoría: " + categoria);
    console.log("Aumento salarial: $" + aumento);
    console.log("Nuevo salario: $" + nuevoSalario);
    console.log("Id trabajador: #" + IdTrabajador);
}

const nombreEmpleado = "Kelvin Hernandez";
const salarioEmpleado = 365;
const categoriaEmpleado = 'A';
const IdTrabajador = '1515';

calcularAumentoSalarial(nombreEmpleado, salarioEmpleado, categoriaEmpleado, IdTrabajador);