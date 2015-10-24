angular.module('initial_spi', ['ngRoute', 'initial_spi.controllers'])

.config(['$routeProvider', function($routeProvider){

	$routeProvider

		.when('/products', {
			templateUrl : "views/products.html",
			controller: 'ProductController'
		})

		.when('/contact', {
			templateUrl: "views/contact.html",
			controller: 'ContactController'
		})
	
		.otherwise({
			redirectTo: '/',
			templateUrl: 'otherwise.html'
		});
 }]);
 