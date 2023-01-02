/*

Mapea el Debris

De acuerdo con la Tercera Ley de Kepler, el período orbital  T  de dos puntos se orbitan mutuamente en una órbita circular o elíptica es:

T=2π√a3/μ
(t igual a 2 pi por raiz cuadrada de (a exponencial 3 dividido mu))
 
a  es el eje semi-mayor de la órbita
μ=GM  es el parámetro gravitatorio estándar
G  es la constante gravitatoria,
M  es la masa del cuerpo más masivo.
Devuelve un nuevo arreglo que transforma la altitud media de los elementos en sus periodos orbitales (en segundos).

El arreglo contendrá objetos en el formato {name: 'name', avgAlt: avgAlt}.

Los valores deben redondearse al número entero más cercano. El cuerpo orbitado es la Tierra.

El radio de la tierra es de, 6367.4447 kilómetros y el valor GM de la tierra es de, 398600.4418 km3s-2.

*/

function orbitalPeriod(arr) {
  
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let newArr = [];
  let period;

  for (let i = 0; i < arr.length; i++) {

    period = 2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM);

    newArr.push({ name: arr[i].name, orbitalPeriod: Math.round(period) })
  }

  return newArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);