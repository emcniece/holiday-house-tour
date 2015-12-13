import template from './map.html';
import controller from './map.controller';
import './map.styl';

let mapComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    link: function (scope, el, attr, vm){
      angular.extend(scope, {
        center: {
            lat: 51.505,
            lng: -0.09,
            zoom: 5
        },
        markers: [{
            lat: 51.505,
            lng: -0.09,
            message: 'Hi!'
        }]
      });

    }
  };
};

export default mapComponent;


