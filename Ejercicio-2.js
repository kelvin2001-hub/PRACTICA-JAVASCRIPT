function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
        const notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);

    console.log("Datos del alumno:");
    console.log("Nombre: " + nombre);
    console.log("Carnet: " + carnet);
    console.log("Nota Final: " + notaFinal);
}

const nombreAlumno = "Juan Pérez";
const carnetAlumno = "ALUMNO10";
const notaExamen = 80;
const notaTareas = 90;
const notaAsistencia = 90;
const notaInvestigacion = 60;

calcularNotaFinal(nombreAlumno, carnetAlumno, notaExamen, notaTareas, notaAsistencia, notaInvestigacion);