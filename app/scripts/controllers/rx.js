'use strict';

/**
 * @ngdoc function
 * @name infernoApp.controller:RxCtrl
 * @description
 * # RxCtrl
 * Controller of the infernoApp
 */
angular.module('infernoApp')
  .filter('myCantoFilter', function() {
            return function(items, query ) {
                var filtered = [];
                if (query == "") return items;
                var que = query.split(/[,:]/);
                var sec = que[0];
                var start = que[1];
                var end = que[2];
                angular.forEach(items, function(item) {
                    if(item.name.trim()  == sec.trim() && (item.line >= start && item.line < end)) {
                        filtered.push(item);
                    }
                });
                return filtered;
             }
   })
 .controller('RxCtrl', function ($scope, $http) {

       $scope.rxTotalSymbols= 60;
       $scope.rxTotalLHs= 1;
       $scope.myQuery = "";
 
       localStorage.setItem("rxTotalSymbols", $scope.rxTotalSymbols);
       localStorage.setItem("rxTotalLHs", $scope.rxTotalLHs);
       var counter = 0;
       var temp = [];
       $scope.cantoes = [];
       var name = "";
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
                var exp = /^##/;
                if (exp.test(item)) {
                   if(temp.length> 0) {
                         $scope.cantoes.push({
                              name: name,
                              line: counter, 
                              text: temp.join('<br>'), 
                              visible: true});   
                         temp = [];
                   }     
                   name = item.replace(/^## /, "");
                   counter = 0;
                   return;
                }
                var res =item.replace(/--/g, "&#x2012;");
                temp.push(res.trim()); 
                counter ++;
                if(temp.length==3) {
                      $scope.cantoes.push({
                            name: name,
                            line: counter-2, 
                            text: temp.join('<br>'), 
                            visible: true});   
                      temp = [];
                }
            }
        }
    
  });
