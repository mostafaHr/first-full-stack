var app = angular.module("ForSaleApp");

app.controller("myItemsController", ["$scope", "services", function ($scope, services) {

    services.getinfo().then(function (data) {
        $scope.people = data;

    });

    $scope.getMyitems = function (person) {
        services.getMyitems(person).then(function(data){
            $scope.myItems = data;
        });
        
        
    }

}]);