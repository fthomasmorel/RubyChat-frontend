app.controller('LoginController', ['$scope', '$resource', '$location', 'Session', 'configuration', function($scope, $resource, $location, Session, configuration) {
  var Login = $resource(configuration.api + '/login/association');

  if(Session.getUsername() == '' || Session.getUsername() == null){
    $location.path('/')
  }

  $scope.username = ""

  $scope.setLogin = function() {
    if ($scope.username.length > 0) {
      Session.setUsername($scope.username)
      $location.path('/chat')
    }
   };

}]);
