function calcularPuntuacionRecomendacion(e, r, interacciones, similitudes) {
    let puntuacion = 0;

    for (let estudiante = 0; estudiante < interacciones.length; estudiante++) {
        if (estudiante !== e && interacciones[estudiante][r] !== 0) {
            puntuacion += similitudes[e][estudiante] * interacciones[estudiante][r];
        }
    }

    return puntuacion;
}

// Ejemplo de uso
const interacciones = [
    [1, 0, 1],
    [0, 1, 1],
    [1, 1, 0]
];

const similitudes = [
    [1.0, 0.8, 0.6],
    [0.8, 1.0, 0.7],
    [0.6, 0.7, 1.0]
];

const e = 0;  // Estudiante 0
const r = 2;  // Recurso 2

const puntuacion = calcularPuntuacionRecomendacion(e, r, interacciones, similitudes);
console.log(`La puntuación de recomendación para el estudiante ${e} y el recurso ${r} es: ${puntuacion}`);
