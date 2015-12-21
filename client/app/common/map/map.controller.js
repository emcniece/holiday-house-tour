class MapController {
  constructor($scope, $http) {
    this.$scope = $scope;
    this.$http = $http;

    this.name = 'map';

    angular.extend(this.$scope, {
      center: {
        lat: 51.505,
        lng: -123.36564440000001,
        zoom: 5
      },
      markers : [{
        lat: 51.505,
        lng: -123.36564440000001,
        message: 'Hi!'
      }],
      layers: {
        overlays:{
          earthquake: {
            name: 'earthquake',
            type: 'markercluster',
            visible: true
          }
        }
      }
    });

    /*
    this.$scope.center = {
      lat: 51.505,
      lng: -123.36564440000001,
      zoom: 5
    };

    this.$scope.markers = [{
        lat: 48.4284207,
        lng: -0.09,
        message: 'Hi!'
    }];
    */
  }
}

MapController.$inject = ['$scope', '$http'];

export default MapController;
