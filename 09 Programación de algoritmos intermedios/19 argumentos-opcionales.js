/*

Argumentos opcionales

Crea una función que sume dos argumentos. Si sólo se proporciona un argumento, entonces devuelve una función que espera un argumento y devuelve la suma.

Por ejemplo, addTogether(2, 3) debe devolver 5 y addTogether(2) debe devolver una función.

Si se llama a esta función devuelta con un solo argumento, se obtendrá la suma:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) devuelve 5.

Si cualquiera de los dos argumentos no es un número válido, devuelve undefined.

*/

function addTogether() {

  let [arg1, arg2] = arguments;

  if (typeof (arg1) !== "number")
    return undefined;

  if (arguments.length === 1)
    return (arg2) => addTogether(arg1, arg2);

  if (typeof (arg2) !== "number")
    return undefined;

  return arg1 + arg2;

}

addTogether(2, 3);