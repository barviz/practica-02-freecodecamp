/*

Haz que la primera letra de una palabra este en mayúscula

Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. Asegúrate de que el resto de la palabra esté en minúsculas.

Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of.

*/

function titleCase(str) {

  let titulo = str.split(" ");
  let tituloNuevo = [];

  for (let palabra in titulo) {

    tituloNuevo[palabra] = titulo[palabra][0].toUpperCase() + titulo[palabra].slice(1).toLowerCase();
  }

  return tituloNuevo.join(" ");
}

titleCase("I'm a little tea pot");