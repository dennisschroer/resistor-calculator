import angular from 'angular';

import MainController from './controllers/main';
import NumberFormatFilter from './filters/number-format';

import 'angular-material/angular-material.css';
import './app.less';

angular.module('resistorCalculator', ['ngMaterial'])
  .controller('MainController', MainController)
  .filter('numberFormat', NumberFormatFilter);