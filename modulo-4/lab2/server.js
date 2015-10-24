var http = require('http');				//modulo inmerso en node.js que resuleve peticiones de ese tipo

var server = http.createServer(function(req, res){		//call back que recibe request (peticion servidors) y respose (respuesta servidor)
	res.writeHead(200, {								// escribir cabecera 
		"Content-Type": "text/plain"					//tipo de documento (en este caso texto plano) puede ser html
	});

	res.end("Hello Unipiloto APM-3");
});

server.listen(3333); 								//va a escuchar peticiones por el puerto 3333