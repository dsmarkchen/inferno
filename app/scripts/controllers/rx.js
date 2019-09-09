'use strict';

/**
 * @ngdoc function
 * @name infernoApp.controller:RxCtrl
 * @description
 * # RxCtrl
 * Controller of the infernoApp
 */
angular.module('infernoApp')
    .directive('xelement', function ($timeout) {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          element.ready(function () {
            var height,
                width;
            $timeout(function () {
              height  = element[0].offsetHeight;
              width  = element[0].offsetWidth;
              if (attrs.key) {
                scope[attrs.key] = {
                  height: height,
                  width: width
                };
                return;
              }

              scope.elementSize = {
                height: height,
                width: width
              };
            });
          });
        }
      };
    })
  .filter('myCantoFilter', function() {
            return function(items, query ) {
                var filtered = [];
                if (query == "") return items;
                var que = query.split(/[,:]/);
                var sec = que[0];
                var start = que[1];
                var end = que[2];
                angular.forEach(items, function(item) {
                    if((item.name != null) && item.name.trim()  == sec.trim() && (item.line >= start && item.line < end)) {
                        filtered.push(item);
                    }
                });
                return filtered;
             }
   })
  .filter('conto', function() {
    return function(comments, query) {
        var filtered = [];
        if (query == "") return filtered;
        var que = query.split(/[,:]/);
        var conto = que[0];
        var start = que[1];
        var end = que[2];
        angular.forEach(comments, function(item) {
            if(item.conto == conto && (item.line >= start && item.line <= end))
                filtered.push(item);
        });

        //then we return the filtered items array
        return filtered;
    }
  })
  .controller('RxCtrl', function ($scope, $http, $filter) {



       $scope.isNullOrEmpty = function (value) {
                return value == null || value === "";
       }
   
       $scope.comments = JSON.parse(localStorage.getItem("myComments")) || [];

     
       $scope.getFilteredComments = function() {
           return $filter('conto')($scope.comments, 1, 1, 9);
        }


       $scope.rxTotalSymbols= 60;
       $scope.rxTotalLHs= 1;
       $scope.myQuery= localStorage.getItem("myQuery");
       if($scope.isNullOrEmpty($scope.myQuery)) {
            $scope.myQuery = "1:1,25";
            localStorage.setItem("myQuery", $scope.myQuery);
        }
 
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

        var step = 3;
        $scope.move = function() {
            var query = $scope.myQuery;
             if (query == "") return ;
             var que = query.split(/[,:]/);
             var sec = que[0].trim();
             var start = parseInt(que[1].trim(), 10);
             var end = parseInt(que[2].trim(), 10);

             var len = end-start;
             if(step > 0) {
             start = start + len  + 1 ;
             end = end + len + 1;
                 var x = start % 3;
                 if(x == 0) {
                    start +=1;
                    end +=1;
                 }
                 if(x == 2) {
                     start -= 1;
                    end -= 1;
                }
              }
             if(step < 0) {

                start = start - len -1;
                end = end - len -1;
 
                 if(x == 0) {
                    start +=1;
                    end +=1;
                 }
                 if(x == 2) {
                     start -= 1;
                    end -= 1;
                 }
              }
           

              if(start < 0) start = 1;
            
             $scope.myQuery = sec + ":" + start.toString() + "," + end.toString();
             localStorage.setItem("myQuery", $scope.myQuery);
         }

        $scope.prev = function() {
            step = -3;
            $scope.move();
        }
        $scope.next = function() {
            step = 3;
            $scope.move();

        }    

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

