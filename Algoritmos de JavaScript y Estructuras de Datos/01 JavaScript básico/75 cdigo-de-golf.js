/*

Código de golf

En el juego de Golf, cada agujero tiene un par, que significa, el número promedio de strokes que se espera que haga un golfista para hundir la pelota en el agujero para completar el juego. Dependiendo de qué tan por encima o por debajo del par estén tus strokes, hay un nombre diferente.

Tu función recibirá los argumentos par y strokes. Devuelve la cadena correcta según esta tabla que muestra los golpes en orden de prioridad; superior (más alto) a inferior (más bajo):

Strokes (golpes)	Devuelve
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par y strokes siempre serán numéricos y positivos. Hemos añadido un arreglo de todos los nombres para tu conveniencia.

*/

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Cambia solo el código debajo de esta línea
    if (strokes === 1) {
      return "Hole-in-one!";
    }

    else if (strokes <= par - 2) {
      return "Eagle";
    }

    else if (strokes === par - 1) {
      return "Birdie";
    }

    else if (strokes == par) {
      return "Par";
    }

    else if (strokes == par + 1) {
      return "Bogey";
    }

    else if (strokes == par + 2) {
      return "Double Bogey";
    }

    else {
      return "Go Home!";
    }
  // Cambia solo el código encima de esta línea
}

golfScore(5, 4);