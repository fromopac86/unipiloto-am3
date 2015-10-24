angular.module('initial_spi.controllers', [])


	.controller('ProductController', function($scope, $http){
			
			var url = "js/data.json";
			
			$http.get(url).success(function(response){
				$scope.products = response;
			});
	})
			  
	.controller('ContactController', function($scope){
	
		$scope.reset = function(){
			$scope.firstName = ' Nombre ';
			$scope.lastName = ' Apellido',
			$scope.email = "nombre@email.com";
			$scope.age = 00;
		}
	
		$scope.reset();
		
			$scope.submit = function(){		//funcion al darle click al boton que invierte los valores de revaldiv
			
			localStorage.setItem('firstName', $scope.firstName);
			localStorage.setItem('lastName',$scope.lastName);
			localStorage.setItem('email', $scope.email);
			localStorage.setItem('age', $scope.age);
			
		}
	});