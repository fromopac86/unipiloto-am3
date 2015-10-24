/**
 * Created by alejo8591 on 21/04/15.
 */
// Express Framewor "MVC" para crear aplicaciones web con Node.js
var express = require('express')
  , path    = require('path')				//modulo especifo node js ya instalado
  , bodyParser = require('body-parser')
  , cons = require('consolidate');

// Creando la primera instancia de mi aplicacion
var app = express();						//internamente ya creo servidor

var debug = require('debug')('lab8');

// Configurando parametros de funcionamiento para express con respecto a la aplicacion

// Puerto de trabajo para la url
app.set('port', process.env.PORT || 3636);

// Motor de templates utilizando Consolidate y swig
app.engine('html', cons.swig);

// Tipo de templates que utilizaran; en nuestro caso `html`
app.set('view engine', 'html');

// Path o directorio donde se encuentran los templates
app.set('views', path.join(__dirname, 'views'));

// Encoding para las tramas HTTP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended : true
}));

// Sirviendo los estaticos de la aplicacion en nuestro caso los `assets` especifica donde estaran esos archivos y a quien se los va a servir
app.use(express.static(path.join(__dirname, 'assets')));

// Quien resuelve y gestiona las url a través del controlador, identifica el archivo router 
var controllers = require('./controllers/router');

app.use(controllers);

// En el caso en que la url no sea conocida o resuelta
app.get('*', function(req, res){
	res.status(405).send('Esta jodido');
});

// ya hizo toda la gestion
var server = app.listen(app.get('port'), function(){
	debug('Express esta escuchando por el puerto' + server.address().port);
});