
/* objetos y funciones */
var my_object = new Object();

var other_object = {};


my_object = {					//Elementos tipo clave valor
	firstName: 'Alejandro',
	lastName: 'Romero',
	phone: 1137373
};

var person = {					//Elementos tipo clave valor
	firstName: 'Francisco',
	lastName: 'Rodrìguez',
	phone: 3066971
};


console.log(my_object.firstName);	//muestra lo que tiene la clave first name del objeto 
console.log(my_object['lastName']); //otra forma de llamar la clave

console.log(person.firstName);
console.log(person['lastName']);

var key;
for(key in my_object){
	console.log(my_object[key]);  //recorra y muestre todo lo que tiene my_objet y lo guarda en variable key
}

var valores = {					//Elementos tipo clave valor
	a : '1',
	b : '2',
	c : '3',
	d : 4,
	e : 5
};
var ret;
for(ret in valores){
	console.log(valores[ret]);  //recorra y muestre todo lo que tiene my_objet y lo guarda en variable key
}
console.log(Number(valores.a) + Number(valores.b));

// Funciones

function test(){
	console.log('ejecutando una funcion');
}

test();

// usando funcion anonima

var bye_bye = function(){
	console.log('Que tengan una feliz semana santa');
}

bye_bye();