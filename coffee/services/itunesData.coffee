# out: ../../js/services/$1.js, bare: true, sourcemap: true

app.service "itunesData", ["$http", ($http) ->
    getData: (term) ->
        data = {}
        $http.jsonp ("https://itunes.apple.com/search"),
            params:
                term: term
                limit: 15
                callback: 'JSON_CALLBACK'
]
