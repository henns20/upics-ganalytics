/**
 * Created by john on 8/18/15.
 */
angular.module('myubrApp')
  .controller('PicsDetailCtrl',  function($scope, $stateParams, Pics) {
  $scope.a = 'this is working';
    $scope.b = $stateParams.picsId;
    Pics.get({picsId: $stateParams.picsId}, function(pic) {
      console.log(pic.name);
      $scope.name = pic.name;
      $scope.imageUrl = pic.imageUrl;


    });


    console.log($scope.b);
});