/**
 * Created by john on 11/23/15.
 */
//'use strict';

angular.module('ganalytics')
  .filter('underscore_join', function() {
    return function(input) {
      // requirement join the category names by underscore to use for image url
      if (!input ) {
        // all does not have an image at this point
        return "All"
      } else {
        return input.split(" ").join("_");
      }
    };
  })
  .filter('capitalize', function() {

    return function(input) {
      // requirement capitalize the first letter of each word in the category title
      // method 1. No regex


      if (!input ) {
        // all is not listed in the category
        return "All"
      } else {
        var inputArray = input.split(" ");
        var newArray = [];
        newArray = inputArray.map(function(word) {

          return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()

        });

        return newArray.join(' ')

//      return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
      }
    }
  });


