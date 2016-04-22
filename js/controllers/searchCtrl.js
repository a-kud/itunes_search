app.controller("searchCtrl", function($scope, $http, itunesData) {
  $scope.searchTerm = "";
  $scope.results = [];
  return $scope.doSearch = function() {
    return itunesData.getData($scope.searchTerm).then(function(data) {
      var results;
      results = data.data;
      if (results.results.length >= 0) {
        $scope.results = results.results;
        return console.log($scope.results);
      } else {
        return console.error('404. Not found');
      }
    });
  };
});

//# sourceMappingURL=searchCtrl.js.map