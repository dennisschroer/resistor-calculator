import bands from '../constants/bands';
import multipliers from '../constants/multipliers';
import tolerances from '../constants/tolerances';

export default ["$scope", "$sce", function($scope, $sce) {
  $scope.bands = bands;
  $scope.multipliers = multipliers.map(multiplier => Object.assign({}, multiplier, { label: $sce.trustAsHtml(multiplier.label) }));
  $scope.tolerances = tolerances.map(tolerance => Object.assign({}, tolerance, { label: $sce.trustAsHtml(tolerance.label) }));

  $scope.resistance = function() {
    if ($scope.numberOfBands === 4) {
      return (parseInt($scope.resistor.first.value) * 10 + parseInt($scope.resistor.second.value)) * parseFloat($scope.resistor.multiplier.value);
    } else {
      return (parseInt($scope.resistor.first.value) * 100 + parseInt($scope.resistor.second.value) * 10 + parseInt($scope.resistor.third.value)) * parseFloat($scope.resistor.multiplier.value);
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