app.config(function($routeProvider, $locationProvider, configuration) {
  $locationProvider.html5Mode(false);
  $routeProvider
        .when('/', {
          templateUrl: "/templates/login.html",
          controller:'LoginController',
        })
        .when('/chat', {
          templateUrl: "/templates/chat.html",
          controller:'ChatController',
        })
        .otherwise({
            template: 'does not exists'
        });
});

app.factory('Session', function () {

    var username = '';

    return {
      getUsername: function () {
          token = window.localStorage.getItem("username");
          return token;
      },
      setUsername: function (t) {
          window.localStorage.setItem("username", t);
          token = t;
      },
    };
});
