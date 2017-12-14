/*jslint white:true */
/*global angular */
var myApp = angular.module('myApp', []);

myApp.controller('ctrl2', function totalCostChange($scope) {
    "use strict";
    $scope.totalCostChange = {
        "value": "100"
        /* (price*amount of bitcoin owned)+(price*amount of etheruem owned)+(price*amount of litecoin owned)*/
    };
});