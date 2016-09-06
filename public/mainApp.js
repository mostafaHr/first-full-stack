var app = angular.module("ForSaleApp", ["ngRoute"]);
app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "pages/register/register.html",
            controller: "InfoController"
        })
        .when("/sell", {
            templateUrl: "pages/sell/sell.html",
            controller: "SellController"
        })
        .when("/buy", {
            templateUrl: "pages/buy/buy.html",
            controller: "buyController"
        })
        .when("/myItems", {
            templateUrl: "pages/myItems/myItems.html",
            controller: "myItemsController"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);

app.service("TestService", [function () {
    this.name = "Bob";
}]);