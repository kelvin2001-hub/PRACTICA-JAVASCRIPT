function verificarEdad(edad) {
    const mensaje = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
    return mensaje;
}


const edadUsuario = 20;
console.log(verificarEdad(edadUsuario));