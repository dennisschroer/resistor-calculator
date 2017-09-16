export default ["$scope", "$sce", function($scope, $sce) {
  $scope.resistance = function() {
    if ($scope.numberOfBands === 4) {
      return (parseInt($scope.resistor.first) * 10 + parseInt($scope.resistor.second)) * parseFloat($scope.resistor.multiplier);
    } else {
      return (parseInt($scope.resistor.first) * 100 + parseInt($scope.resistor.second) * 10 + parseInt($scope.resistor.third)) * parseFloat($scope.resistor.multiplier);
    }
  };

  $scope.tolerance = function() {
    return $scope.resistor.tolerance;
  };

  $scope.bands = {
    black: {
      value: 0,
      label: 0
    },
    brown: {
      value: 1,
      label: 1
    },
    red: {
      value: 2,
      label: 2
    },
    orange: {
      value: 3,
      label: 3
    },
    yellow: {
      value: 4,
      label: 4
    },
    green: {
      value: 5,
      label: 5
    },
    blue: {
      value: 6,
      label: 6
    },
    violet: {
      value: 7,
      label: 7
    },
    grey: {
      value: 8,
      label: 8
    },
    white: {
      value: 9,
      label: 9
    },
  };

  $scope.multipliers = {
    black: {
      value: 1,
      label: $sce.trustAsHtml("1 &#8486;")
    },
    brown: {
      value: 10,
      label: $sce.trustAsHtml("10 &#8486;")
    },
    red: {
      value: 100,
      label: $sce.trustAsHtml("100 &#8486;")
    },
    orange: {
      value: 1000,
      label: $sce.trustAsHtml("1k &#8486;")
    },
    yellow: {
      value: 10000,
      label: $sce.trustAsHtml("10k &#8486;")
    },
    green: {
      value: 100000,
      label: $sce.trustAsHtml("100k &#8486;")
    },
    blue: {
      value: 1000000,
      label: $sce.trustAsHtml("1M &#8486;")
    },
    violet: {
      value: 10000000,
      label: $sce.trustAsHtml("10M &#8486;")
    },
    gold: {
      value: 0.1,
      label: $sce.trustAsHtml("0.1 &#8486;")
    },
    silver: {
      value: 0.01,
      label: $sce.trustAsHtml("0.01 &#8486;")
    }
  };

  $scope.tolerances = {
    brown: {
      value: 1,
      label: $sce.trustAsHtml("&plusmn; 1%")
    },
    red: {
      value: 2,
      label: $sce.trustAsHtml("&plusmn; 2%")
    },
    green: {
      value: 0.5,
      label: $sce.trustAsHtml("&plusmn; 0.5%")
    },
    blue: {
      value: 0.25,
      label: $sce.trustAsHtml("&plusmn; 0.25%")
    },
    violet: {
      value: 0.10,
      label: $sce.trustAsHtml("&plusmn; 0.10%")
    },
    grey: {
      value: 0.05,
      label: $sce.trustAsHtml("&plusmn; 0.05%")
    },
    gold: {
      value: 5,
      label: $sce.trustAsHtml("&plusmn; 5%")
    },
    silver: {
      value: 10,
      label: $sce.trustAsHtml("&plusmn; 10%")
    }
  };

  $scope.numberOfBands = 4;

  $scope.resistor = {
    first: 1,
    second: 0,
    third: 0,
    multiplier: 100,
    tolerance: 5
  };
}];