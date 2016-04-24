var app;

app = angular.module("itunesSearch", ["ngRoute"]);

app.config([
  "$routeProvider", function($routeProvider) {
    return $routeProvider.when("/", {
      templateUrl: "../html/searchForm.html",
      controller: "searchCtrl"
    });
  }
]);

//# sourceMappingURL=app.js.map