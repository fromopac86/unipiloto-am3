angular.module('lab7.controllers', ['lab7.services'])
.controller('lab7Controller', function($scope, data){		//objeto data
    'use strict';
    data.query(function(data){							
       $scope.data = data;									//traiga la informacion del data que entrega el router
    });
});