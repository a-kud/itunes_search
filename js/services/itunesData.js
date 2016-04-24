app.service("itunesData", [
  "$http", function($http) {
    return {
      getData: function(term) {
        var data;
        data = {};
        return $http.jsonp("https://itunes.apple.com/search", {
          params: {
            term: term,
            limit: 15,
            callback: 'JSON_CALLBACK'
          }
        });
      }
    };
  }
]);

//# sourceMappingURL=itunesData.js.map