angular.module('resistor-calculator').controller('MainController', ['$scope', function($scope){
    $scope.bands = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        violet: 7,
        grey: 8,
        white: 9
    };


    $scope.numberOfBands = 4;

    $scope.resistor = {
        first: 0
    }
}]);