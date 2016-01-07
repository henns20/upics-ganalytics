/**
 * Created by john on 11/4/15.
 */
angular.module('ganalytics')
  .factory('PicsService1', function($resource) {
    return $resource('./pics/:picsId.json', {}, {
      query: {method: 'GET', params:{picsId: 'picsoptions'}, isArray:true}
    });
  });


