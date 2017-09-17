import bands from '../constants/bands';
import multipliers from '../constants/multipliers';
import tolerances from '../constants/tolerances';

export default ["$scope", "$sce", function($scope, $sce) {
  $scope.bands = bands;
  $scope.multipliers = multipliers.map(function(multiplier) {
    return Object.assign({}, multiplier, { label: $sce.trustAsHtml(multiplier.label) });
  });
  $scope.tolerances = tolerances.map(function(tolerance) {
    return Object.assign({}, tolerance, { label: $sce.trustAsHtml(tolerance.label) });
  });

  $scope.resistance = function() {
    if ($scope.numberOfBands === 4) {
      return ($scope.resistor.first.value * 10 + $scope.resistor.second.value) * $scope.resistor.multiplier.value;
    } else {
      return ($scope.resistor.first.value * 100 + $scope.resistor.second.value * 10 + $scope.resistor.third.value) * $scope.resistor.multiplier.value;
    }
  };

  $scope.tolerance = function() {
    return $scope.resistor.tolerance.value;
  };

  $scope.numberOfBands = 4;

  $scope.resistor = {
    first: $scope.bands[1],
    second: $scope.bands[0],
    third: $scope.bands[0],
    multiplier: $scope.multipliers[2],
    tolerance: $scope.tolerances[6]
  };
}];