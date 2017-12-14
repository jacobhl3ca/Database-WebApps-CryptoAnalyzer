/*jslint white:true */
/*global angular */
var myApp = angular.module('myApp', []);

myApp.controller('ctrl1', function totalInvestedAmount($scope, $http) {
    "use strict";
    $scope.totalInvestedAmount = {
        "valueToday": "8500"
        /* (price*amount of bitcoin owned)+(price*amount of etheruem owned)+(price*amount of litecoin owned)*/
    };
    console.log("CP");
    $http.get("https://coinbase-analytics-api.appspot.com/pricing",{
        params:{
        coin: "BTC",
        //date: "2016-07-12"
        }
    })
    .then(function(response) {
        console.log("CP2");
    	console.log(response)
        $scope.myWelcome = response.data.amount;
    });
    
});