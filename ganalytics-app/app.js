/**
 * Created by john on 9/12/15.
 */

angular.module('ganalytics', [
  'ngAnimate',
  'ngMaterial',
  'ngAria',
  'ui.router',
  'myAmModule',
  'ngResource'
])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
          function($stateProvider, $urlRouterProvider, $locationProvider) {

            $stateProvider
              .state('home', {
              url: '/home',
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
              })
              .state('for-individuals', {
                url: '/for-individuals',
                views: {
                  main_content: {
                    templateUrl: 'views/for-individuals.html'
                  }
                }
              })
              .state('for-groups', {
                url: '/for-groups',
                views: {
                  main_content: {
                    templateUrl: 'views/for-groups.html'
                  }
                }
              })
              .state("otherwise", {
                url: '/',
                views: {
                  main_content: {
                    templateUrl: 'views/landing.html'
                  }
                }
              }).state('picDetails', {
                url: '/photo-detail/{picsId}',
                views: {
                  main_content: {
                    templateUrl: 'components/pics.detail/pics.detail.html',
                    controller: 'PicsDetailCtrl'
                  }
                }
              })
              .state('contact-us', {
                url: '/contact-us',
                views: {
                  main_content: {
                    templateUrl: 'views/contact-us.html',
                  }
                }
              })
              .state('custom-services', {
                url: '/custom-services',
                views: {
                  main_content: {
                    templateUrl: 'views/custom-services.html',
                  }
                }
              });

            $urlRouterProvider.otherwise('/');
//            $locationProvider.html5Mode({
//              enabled: true,
//            });

  }]);
