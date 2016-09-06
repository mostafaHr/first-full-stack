var app = angular.module("ForSaleApp");

app.controller("SellController", ["$scope", "services", function ($scope, services) {
    services.getinfo().then(function (data) {
        $scope.info = data;
        console.log($scope.info);
    });
    
    
       $scope.additem = function(trading){
        services.additem(trading);
        
    }




}]);