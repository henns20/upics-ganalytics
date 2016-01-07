/**
 * Created by john on 8/18/15.
 */
angular.module('ganalytics')
  .controller('PicsDetailCtrl',  function($scope, $stateParams, PicsService1) {
    PicsService1.get({picsId: $stateParams.picsId}, function(pic) {
      $scope.name = pic.name;
      $scope.imageUrl = pic.imageUrl;

    });
});