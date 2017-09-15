angular.module('resistorCalculator').filter('numberFormat', function() {
  return function(input) {
    if (angular.isNumber(input)) {
      if (input >= 1000000) {
        return (input / 1000000) + 'M';
      }
      if (input >= 1000) {
        return (input / 1000) + 'k';
      }
      return input;
    } else {
      return NaN;
    }
    return input ? '\u2713' : '\u2718';
  };
});