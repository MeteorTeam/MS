var app = angular.module('msApp', []);

app.controller('headerCtrl',['$scope','$window', function ($scope, $window) {

  $scope.mainViewSelector = 'explore';
  $scope.headerText = {
    explore: 'stop reinventing the wheel. explore friends\' designs',
    yourSpace: 'your legacy. one space.'
  };

  // allow user to toggle between the main views: {explore / your-space}
  $scope.setMainView = function(view) {
    $scope.mainViewSelector = view;
  }

// enable fixed header animation
  $scope.shrinkTopHeader = false;

  angular.element($window).bind("scroll", function() {
     if (this.pageYOffset > 1) {
         $scope.shrinkTopHeader = true;
     } else {
         $scope.shrinkTopHeader = false;
     }
    $scope.$apply();
});

}]);
