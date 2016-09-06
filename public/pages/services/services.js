var app = angular.module("ForSaleApp");

app.service("services", ["$http", function ($http) {
    var self = this;
    this.allinfo = [];
    this.allitems = [];

    this.addInfo = function (newInfo) {
        return $http.post("/info", newInfo).then(function (response) {
            self.allinfo.push(response.data);
        });
    }

    this.getItems = function () {
        return $http.get("/trading?forsell=true").then(function (response) {
            self.allitems = response.data;
            return response.data;
        });
    }

    this.getinfo = function () {
        return $http.get("/info").then(function (response) {
            self.allinfo = response.data;
            return response.data;
        });
    }

    this.additem = function (newitem) {
        return $http.post("/trading", newitem).then(function (response) {
            self.allitems.push(response.data);
        });
    }

    this.buyItem = function (item, buyer, index) {
        item.forsell = false;
        item.owner = buyer._id;
        return $http.put("/trading/" + item._id, item).then(function (response) {
            self.allitems[index] = response.data;
        })
    }

    this.getMyitems = function (person) {
        return $http.get("/trading?owner=" + person._id).then(function (response) {
            return response.data;
        })
    }

}]);