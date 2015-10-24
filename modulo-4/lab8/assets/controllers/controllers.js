angular.module('lab8.controllers', ['lab8.services'])
.controller('lab8Controller', function($scope, data){		//objeto data
    'use strict';
    data.query(function(data){							
       $scope.data = data;									//traiga la informacion del data que entrega el router
    });
});