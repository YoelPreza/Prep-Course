// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1);
}


function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
cb();

}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
return cb(n1,n2);

}



function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma = numeros.reduce(function(acm,ele){
    return acm + ele;
  })
cb(suma);
}


function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(elemento){
    return cb(elemento)
  })
}



function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevaArray = array.map(function(elemento){
    return cb(elemento);
  })
  return nuevaArray;
}


function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
var letrasFiltro = array.filter (function(elemento){
  if( elemento[0] === "a" ){
    return elemento;
  }
});
return letrasFiltro;
}
// tambien puede ser esta manera mas facil y sin escribir el if

//  return array.filter(function(elemento){
//    return elemnto[0] === 'a';
// });

// Ejemplo 3 --------

// var NuevaArray = array.filter(function(elemento){
//  return elemento [0] === 'a';
//  });
// return NuevaArray;
// }

// ejemplo 4 
// return array.filter(function(elemeento){
//   if(elemento[0] === 'a'){
//  return elemento;
//}
//});


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
