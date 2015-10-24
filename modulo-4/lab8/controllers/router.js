var express = require('express'); 			//instaciando modulo express

var router = express.Router();				//

router.get('/', function(req, res){
	res.render('index', {'title' : 'Lab8'});	//objeto enviado al template estoy entregando el index mas el tiulo (carga pagina inicio)
});

router.get('/contact', function(req, res){
	res.render('contact', {'title' : 'contacto'});
});



module.exports = router;