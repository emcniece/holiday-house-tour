import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-simple-logger';
import 'ui-leaflet';
import mapComponent from './map.component';

let mapModule = angular.module('map', [
  uiRouter,
  'nemLogging',
  'ui-leaflet'
])

.directive('map', mapComponent);

export default mapModule;
