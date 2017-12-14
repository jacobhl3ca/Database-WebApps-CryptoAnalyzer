/*jslint white:true */
/*global angular */
var myApp = angular.module('myApp', []);

myApp.controller('ctrl1', function totalInvestedAmount($scope, $http) {
    "use strict";
    $scope.totalInvestedAmount = {
        "valueToday": "16500"
        /* (price*amount of bitcoin owned)+(price*amount of etheruem owned)+(price*amount of litecoin owned)*/
    };
    $http.get("https://coinbase-analytics-api.appspot.com/pricing",{
        params:{
        coin: "BTC"
        //date: "2016-07-12"
        }
    })
    .then(function(response) {
    	console.log(response)
        $scope.BTCPrice = response.data.amount;
    });
    $http.get("https://coinbase-analytics-api.appspot.com/pricing",{
        params:{
        coin: "ETH"
        //date: "2016-07-12"
        }
    })
    .then(function(response) {
    	console.log(response)
        $scope.ETHPrice = response.data.amount;
    });
     $http.get("https://coinbase-analytics-api.appspot.com/pricing",{
        params:{
        coin: "LTC"
        //date: "2016-07-12"
        }
    })
    .then(function(response) {
    	console.log(response)
        $scope.LTCPrice = response.data.amount;
    });
});