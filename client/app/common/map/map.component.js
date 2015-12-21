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

      // Extract injections from vm
      var $http = vm.$http;

      var url = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson";
      $http.get(url).success(function(response) {
        var points =  response.features.map(function(d) {
          return {
            //layer: "earthquake",
            lat: d.geometry.coordinates[1],
            lng: d.geometry.coordinates[0],
            message: d.id
          };
        });

        console.log(points.length);

        angular.extend(scope, {
          markers: points
        });
      });

    }
  };
};

export default mapComponent;


