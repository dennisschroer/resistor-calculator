import angular from 'angular';

import MainController from './controllers/main';

import NumberFormatFilter from './filters/number-format'

angular.module('resistorCalculator', ['ngMaterial'])
  .controller('MainController', MainController)
  .filter('numberFormat', NumberFormatFilter);