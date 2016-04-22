app.service("itunesData", function($http) {
  return this.getData = function(url) {
    return $http.jsonp(url).success(function(data) {
      return console.log(data);
    });
  };
});

//# sourceMappingURL=getJSON.js.map