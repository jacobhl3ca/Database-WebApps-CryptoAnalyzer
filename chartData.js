$http.get('')
    .success(function(data) {
        $scope.names = eval(data);
        console.log(data)
    })
    .error(function(data) {
        alert(data);
        console.log('Error: ' + data);
    });