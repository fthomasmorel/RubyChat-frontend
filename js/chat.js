app.controller('ChatController', ['$scope', '$resource', 'Session', '$location', 'configuration', '$timeout', '$anchorScroll', function($scope, $resource, Session, $location, configuration, $timeout, $anchorScroll) {
  var Messages = $resource(configuration.api + '/messages')

  if(Session.getUsername() == '' || Session.getUsername() == null){
    $location.path('/')
  }

  $scope.currentMessage = {username : Session.getUsername(), content : ""}
  $scope.messageContent = ""
  $scope.messages = []

  $scope.getClassForMessage = function(message){
    if (message.username == Session.getUsername()) {
      return "self"
    }else{
      return "other"
    }
  }

  $scope.getMessages = function(){
    Messages.query({}, function(messages) {
      if (messages.length > $scope.messages.length) {
        $scope.messages = messages
        $timeout(function() {
          $location.hash("chatBar");
        $anchorScroll();
      });
      }
    }, function(error) {
    });
  }

  $scope.sendMessage = function(){
    if ($scope.messageContent.length > 0) {
      $scope.currentMessage.content = $scope.messageContent
      $scope.messageContent = ""
      Messages.save({}, $scope.currentMessage, function() {
        $scope.getMessages()
      }, function(error) {
      });
    }
  }

  $scope.intervalFunction = function(){
    $timeout(function() {
      $scope.getMessages()
      $scope.intervalFunction();
    }, 1000)
  };

  $scope.intervalFunction();

}]);
