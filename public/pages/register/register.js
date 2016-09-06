var app = angular.module("ForSaleApp");

app.controller("InfoController", ["$scope", "services", function($scope, services){
    $scope.addInfo = function(info){
        services.addInfo(info);
        
    }
}]);