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
       var url = '/inferno.txt';
       var url2 = 'https://dsmarkchen.github.io/inferno/inferno.txt';
       $http.get(url2).then(function (rsp) {
            
            $scope.inferno = rsp.data.split(/\r?\n/) ;
        
            $scope.inferno.forEach($scope.buildone); 
            if(temp.length > 0) {   
                $scope.cantoes.push({line: counter-1, text: temp.join('<br>')}); 
            }  
        });

        $scope.buildone = function(item, index) {
            if(item.trim().length > 0) {
                var res =item.replace(/--/g, "&#x2012;");
                temp.push(res.trim()); 
                if(temp.length==3) {
                      $scope.cantoes.push({line: counter-2, text: temp.join('<br>')});   
                      temp = [];
                }
                counter ++;
            }
        }
    
  });
