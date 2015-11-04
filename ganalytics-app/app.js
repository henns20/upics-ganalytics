/**
 * Created by john on 9/12/15.
 */

angular.module('ganalytics', [
  'ngAnimate',
  'ngMaterial',
  'ngAria',
  'ui.router',
  'myAmModule'
])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
          function($stateProvider, $urlRouterProvider, $locationProvider) {

            $stateProvider
              .state('home', {
              url: '/',
                views: {
                  main_content: {
                    templateUrl: 'views/landing.html'
                  }
                }
              })
              .state('gallery', {
                url: '/gallery',
                views: {
                  main_content: {
                    templateUrl: 'components/gallery/gallery.html'
                  }
                }
              });

            $urlRouterProvider.otherwise('/');
//            $locationProvider.html5Mode({
//              enabled: true,
//            });

  }]);


