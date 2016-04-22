# out: ../../js/controllers/$1.js, bare: true, sourcemap: true

app.controller("searchCtrl", ($scope, $http, itunesData) ->

        $scope.searchTerm = ""
        $scope.results = []
        $scope.doSearch = () ->
            itunesData.getData($scope.searchTerm).then (data) ->
                results = data.data
                if results.results.length >= 0
                    $scope.results = results.results
                    console.log($scope.results)
                else
                    console.error('404. Not found')
)
