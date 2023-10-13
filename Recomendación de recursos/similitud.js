//La similitud se puede realizar usando el cose no o correlación de pearson, en este caso es con correlacion de pearson
//Se debe hacer un i a simple-statistics
//npm install simple-statistics

const ss = require('simple-statistics');

const estudiante1 = [1, 2, 3, 4, 5]; // Interacciones del estudiante 1
const estudiante2 = [2, 3, 4, 5, 6]; // Interacciones del estudiante 2

function correlacionPearson(arr1, arr2) {
  return ss.sampleCorrelation(arr1, arr2);
}

const correlacion = correlacionPearson(estudiante1, estudiante2);

console.log(`La correlación de Pearson entre los estudiantes es: ${correlacion}`);
//un ejemplo del resultado puede ser 
// La correlación de Pearson entre los estudiantes es: 0.9999999999999999
//osea casi 100% de similitud