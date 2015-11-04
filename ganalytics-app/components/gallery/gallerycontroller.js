/**
 * Created by john on 11/3/15.
 */

angular.module('ganalytics')
  .controller('GalleryController', GalleryController);

function GalleryController($mdSidenav, picsOptions) {
  var vm = this;
  vm.testingbinding = 'yes binding is working';
  vm.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
}