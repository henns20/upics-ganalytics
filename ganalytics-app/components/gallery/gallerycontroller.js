/**
 * Created by john on 11/3/15.
 */

angular.module('ganalytics')
  .controller('GalleryController', GalleryController);

function GalleryController(picsOptions, PicsService1) { /* $mdSidenav, was a service injected */
  var vm = this;
  vm.testingbinding = 'yes binding is working';
//  vm.openLeftMenu = function() {
//    $mdSidenav('left').toggle();
//  };

  vm.pics = picsOptions.getPics();
  vm.pics2 = picsOptions.getPics2();
  vm.picsList = PicsService1.query();
}