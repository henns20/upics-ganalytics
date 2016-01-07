/**
 * Created by john on 11/3/15.
 */

angular.module('ganalytics')
  .controller('GalleryController', GalleryController);

function GalleryController(PicsService1) { /* $mdSidenav, was a service injected */
  var vm = this;
  vm.testingbinding = 'yes binding is working';
  vm.myFilter = {category: "silicon valley"};
//  vm.openLeftMenu = function() {
//    $mdSidenav('left').toggle();
//  };

//  vm.pics = picsOptions.getPics();
//  vm.pics2 = picsOptions.getPics2();
  vm.picsList = PicsService1.query();
  console.log(PicsService1);
  console.log('hello');
  console.log(vm.picsList);

}