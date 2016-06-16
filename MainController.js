$app.controller('MainController', ['$scope', function($scope) {
  $scope.Me = {
    icon: 'img/pikame.jpg',
    title: 'ME',
    developer: 'Professional fool',
    price: "9999999999999999"
  };

  $scope.hobbies = {
    icon: 'img/usd.jpg',
    title: 'Rollerblading',
    developer: 'Chico Dusty',
    price: 500
  };

  $scope.result = {
    icon: 'img/Roller.jpg',
    title: 'frontslide',
    developer: 'skate tricks',
    price: 1500
  };
}]);
