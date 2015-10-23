// JavaScript Document

// Crear arreglo
var my_array = [1986, 'francisco', 'javier', 1, 'rodriguez', 'montaña', true ];
console.log(my_array);

//organizar arreglo
my_array.sort();
console.log(my_array);

//agregar elemento al final
my_array.push('Diplomado');
console.log(my_array);

//eliminar primer elemento
my_array.shift();
console.log(my_array);

//agregar 2 elementos a partir de la posicion 5
my_array.splice(5, 2, "aplicaicones", "mòviles");  
console.log(my_array);