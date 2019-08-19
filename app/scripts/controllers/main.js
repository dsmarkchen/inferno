'use strict';

/**
 * @ngdoc function
 * @name infernoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the infernoApp
 */
angular.module('infernoApp')
  .filter('split', function() {
   return function(input) {
  var delimiter = /([,.;!-])/g;
  var res = input.split(delimiter);
  var temp = "";
  var sum = "";
  res.forEach(myfun);
  return sum;
  function myfun(item) {
    sum += item;
    temp += item;
   
    var v = item.endsWith('!');
    var w = item.endsWith('-') && sum.endsWith('--');
    var x = item.endsWith(',');
    var y = item.endsWith(';');
    var z = item.endsWith('.'); 
    if(v || w || x || y || z) {
        if(temp.length < 10)
            return;
        sum += "\n";
        temp = "";
  }  
}} }) 
  .controller('MainCtrl', function ($scope, $location) {

    $scope.txTotalSymbols = localStorage.getItem("totalSymbols");
    $scope.txTotalLHs = localStorage.getItem("totalLHs");
    $scope.rxTotalSymbols = localStorage.getItem("rxTotalSymbols");
    $scope.rxTotalLHs = localStorage.getItem("rxTotalLHs");


    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };


    function getIEVersion() {
      var sAgent = window.navigator.userAgent;
      var Idx = sAgent.indexOf("MSIE");

      // If IE, return version number.
      if (Idx > 0) {
        return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
      }
      // If IE 11 then look for Updated user agent string.
      else if (!!navigator.userAgent.match(/Trident\/7\./))  {
        return 11;
      }
      else {
        return 0; //It is not IE
      }
    }
    $scope.ie = getIEVersion(); 
    
  });
