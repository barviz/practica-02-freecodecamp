/*

Pig Latin (Latin de los cerdos)

Pig Latin (latin de los cerdos) es una manera de alterar las palabras en inglés. Las normas son las siguientes:

- Si una palabra comienza con una consonante, toma la primer consonante o grupo de consonantes, muévela al final de la palabra, y añade ay a ella.

- Si una palabra comienza con una vocal, solo añade way al final.

Traduce la cadena proporcionada a Pig Latin. Las cadenas de entrada están garantizadas como palabras en inglés en minúsculas.

*/

function translatePigLatin(str) {

  let pigLatin = "";
  let regex = /[aeiou]/gi;

  if (str[0].match(regex)) {
    pigLatin = str + "way";

  } else if (str.match(regex) === null) {
    pigLatin = str + "ay";

  } else {
    let iVocal = str.indexOf(str.match(regex)[0]); //cuantas consonantes hay antes de la primera vocal

    pigLatin = str.substr(iVocal) + str.substr(0, iVocal) + "ay";

  }

  return pigLatin;

}

translatePigLatin("consonant");