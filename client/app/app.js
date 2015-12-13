import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-simple-logger';
import 'ui-leaflet';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
  uiRouter,
  'nemLogging',
  'ui-leaflet',
  Common.name,
  Components.name
])

.directive('app', AppComponent);
