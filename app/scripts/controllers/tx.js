'use strict';

/**
 * @ngdoc function
 * @name infernoApp.controller:TxCtrl
 * @description
 * # TxCtrl
 * Controller of the infernoApp
 */
angular.module('infernoApp')
  .controller('TxCtrl', function ($scope, fileReader) {

    $scope.comments = [
{ name: "stray", sec: 1, line: 1, comment: "deviate" },
{ name: "savage", sec: 1, line: 4, comment: "wild" },
{ name: "ray", sec: 1,line: 16, comment: "a narrow beam of light" },
{ name: "fugitive", sec: 1,line: 25, comment: "straying" },
{ name: "lithe", sec: 1,line: 31, comment: "flexible" },
{ name: "hide", sec: 1,line: 31, comment: "n. skin" },
{ name: "impede", sec: 1,line: 34, comment: "prevent" },
{ name: "ascent", sec: 1,line: 34, comment: "upward movement" },


{ name: "cowardice", sec: 1,line: 1, comment: "lack of courage to face difficulty" },
{ name: "pallor", sec: 1,line: 1, comment: "pale" },

];


    $scope.visible = false;

    $scope.parseCSV = function(s,sep) {
            // http://stackoverflow.com/questions/1155678/javascript-string-newline-character
            var universalNewline = /\r\n|\r|\n/g;
            var a = s.split(universalNewline);
            for(var i in a){
                for (var f = a[i].split(sep = sep || ","), x = f.length - 1, tl; x >= 0; x--) {
                    if (f[x].replace(/"\s+$/, '"').charAt(f[x].length - 1) == '"') {
                        if ((tl = f[x].replace(/^\s+"/, '"')).length > 1 && tl.charAt(0) == '"') {
                            f[x] = f[x].replace(/^\s*"|"\s*$/g, '').replace(/""/g, '"');
                          } else if (x) {
                        f.splice(x - 1, 2, [f[x - 1], f[x]].join(sep));
                      } else { 
                        f = f.shift().split(sep).concat(f);
                      }
                    } else {
                        f[x].replace(/""/g, '"');
                    }

                  } a[i] = f;
        }
        return a;
   };

  $scope.getFile = function () {
        $scope.progress = 0;
        $scope.textSrc = '';
        $scope.totalSymbols = 0;    
        $scope.totalLHs = 0;

        localStorage.setItem("totalSymbols", $scope.totalSymbols);
        localStorage.setItem("totalLHs", $scope.totalLHs);

        fileReader.readAsText($scope.file, $scope)
                      .then(function(result) {
                          $scope.textSrc = result;
                          $scope.lines= $scope.parseCSV(result, ",");
                          
                          $scope.lines.forEach(function (line) { 
                             var regex = /LH/;
                             if(regex.test(line)) {
                                $scope.totalSymbols += line.length - 4;
                                $scope.totalLHs ++;
                             }
                           });
                          localStorage.setItem("totalSymbols", $scope.totalSymbols);
                          localStorage.setItem("totalLHs", $scope.totalLHs);

                          //$scope.textSrc =angular.fromJson(result);
                          console.log(typeof(result));
                          console.log(typeof($scope.textSrc));
                      });
    };
 
    $scope.$on("fileProgress", function(e, progress) {
        $scope.progress = progress.loaded / progress.total;
    });
  })
  .directive("ngFileSelect",function(){

    return {
        link: function($scope,el){
      
          el.bind("change", function(e){
          
            $scope.file = (e.srcElement || e.target).files[0];
            $scope.getFile();
      
          });
      
        }
    
    }; 
   })
   .factory("fileReader", function ($q, $log) {

        $log.log("fileReader"); 

        var onLoad = function(reader, deferred, scope) {
            return function () {
                scope.$apply(function () {
                    deferred.resolve(reader.result);
                });
            };
        };
 
        var onError = function (reader, deferred, scope) {
            return function () {
                scope.$apply(function () {
                    deferred.reject(reader.result);
                });
            };
        };
 
        var onProgress = function(reader, scope) {
            return function (event) {
                scope.$broadcast("fileProgress",
                    {
                        total: event.total,
                        loaded: event.loaded
                    });
            };
        };
 
        var getReader = function(deferred, scope) {
            var reader = new FileReader();
            reader.onload = onLoad(reader, deferred, scope);
            reader.onerror = onError(reader, deferred, scope);
            reader.onprogress = onProgress(reader, scope);
            return reader;
        };
 
        var readAsText = function (file, scope) {
            var deferred = $q.defer();
             
            var reader = getReader(deferred, scope);         
            reader.readAsText(file);
             
            return deferred.promise;
        };
 
        return {
            readAsText: readAsText  
        };
    }
)
;
