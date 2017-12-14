$http.get('https://coinbase-analytics-api.appspot.com/')
    .success(function(data) {
        $scope.names = eval(data);
        console.log(data)
    })
    .error(function(data) {
        alert(data);
        console.log('Error: ' + data);
    });