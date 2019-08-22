'use strict';

/**
 * @ngdoc function
 * @name infernoApp.controller:RxCtrl
 * @description
 * # RxCtrl
 * Controller of the infernoApp
 */
angular.module('infernoApp')
  .controller('RxCtrl', function ($scope, $http) {

       $scope.rxTotalSymbols= 60;
       $scope.rxTotalLHs= 1;
 
       localStorage.setItem("rxTotalSymbols", $scope.rxTotalSymbols);
       localStorage.setItem("rxTotalLHs", $scope.rxTotalLHs);
       var counter = 0;
       var temp = [];
       $scope.cantoes = [];
       $http.get('/inferno.txt').then(function (rsp) {
            
            $scope.inferno = rsp.data.split(/\r?\n/) ;
        
            $scope.inferno.forEach($scope.buildone);    
        });

        $scope.buildone = function(item, index) {
            if(item.trim().length > 0) {
                temp.push(item.trim()); 
                if(temp.length==3) {
                      $scope.cantoes.push({line: counter-2, text: temp.join('\n')});   
                      temp = [];
                }
                counter ++;
            }
        }
    
  });
