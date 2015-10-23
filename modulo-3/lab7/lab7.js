//opcion 1

a = prompt("Ingrese A:");
b = prompt("Ingrese B:");

if(a > b){
	console.log("A es mayor a B, SUMA:" + " " + (parseInt(a)+parseInt(b)));
} else if(a < b){
	console.log("A es menor B , MULTIPLICACIÓN:" + " " + (parseInt(a)*parseInt(b)));	
} else if(a === b){
	console.log("A es igual a B, DIVISIÓN:" + " " + (parseInt(a)/parseInt(b)));
}




//opcion 2
var a, b, result, operations;

operations = function(a, b){
	if(a > b){

		result = parseInt(a) + parseInt(b);
	} 
	
	else if (a < b){

		result = parseInt(a) * parseInt(b);

	} else {

		result = parseInt(a) / parseInt(b);
	}

	alert('El resultado es: ' +result);
};

operations(a, b);
