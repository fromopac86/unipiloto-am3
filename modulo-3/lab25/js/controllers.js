angular.module('initial_spi.controllers', [])

.controller('mobileController', function($scope){
	$scope.mobile_message = 'Algún ';
})

.controller('smartphoneController', function($scope){
	$scope.smartphone_message = 'Otro Mensaje';
});