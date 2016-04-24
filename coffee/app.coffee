# out: ../js/$1.js, bare: true, sourcemap: true

app = angular.module("itunesSearch", ["ngRoute"])

app.config(["$routeProvider", ($routeProvider) ->
        $routeProvider.when("/",
            templateUrl: "../html/searchForm.html"
            controller: "searchCtrl"
        )
    ])
