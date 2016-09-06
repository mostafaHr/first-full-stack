var app = angular.module("ForSaleApp");

app.controller("buyController", ["$scope", "services", function ($scope, services) {
    services.getItems().then(function (data) {
        $scope.items = data;

    });

    services.getinfo().then(function (data) {
        $scope.people = data;
    });
    
    $scope.buyItem = function(item, buyer , index){
        services.buyItem(item, buyer, index);
    }
    
//    services.buyItem(item, name);




}])