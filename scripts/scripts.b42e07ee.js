"use strict";angular.module("infernoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(t,e){t.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/inferno/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/main",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/inferno/main",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/inferno/tx",{templateUrl:"views/tx.html",controller:"TxCtrl",controllerAs:"tx"}).when("/tx",{templateUrl:"views/tx.html",controller:"TxCtrl",controllerAs:"tx"}).when("/inferno/rx",{templateUrl:"views/rx.html",controller:"RxCtrl",controllerAs:"rx"}).when("/rx",{templateUrl:"views/rx.html",controller:"RxCtrl",controllerAs:"rx"}).otherwise({redirectTo:"/"})}]),angular.module("infernoApp").filter("split",function(){return function(t){var e=t.split(/([!,.;?-])/g),l="",o="",r="";return e.forEach(function(t){if(l+=t,52<t.length){return l.split(/(that|where|which|when|who)/g).forEach(n),o+=r,void(l="")}((o+=t).endsWith("--")&&"-"==t||"?"==t||";"==t||"."==t||"!"==t||","==t)&&(o+="\n",l="")}),console.log("line_index:0"),o;function n(t){if("that"==t||"where"==t||"when"==t||"who"==t||"which"==t)return r+="\n ",void(r+=t);r+=t}}}).controller("MainCtrl",["$scope","$location",function(t,e){var l,o;t.txTotalSymbols=localStorage.getItem("totalSymbols"),t.txTotalLHs=localStorage.getItem("totalLHs"),t.rxTotalSymbols=localStorage.getItem("rxTotalSymbols"),t.rxTotalLHs=localStorage.getItem("rxTotalLHs"),t.isActive=function(t){return t===e.path()},t.ie=(l=window.navigator.userAgent,0<(o=l.indexOf("MSIE"))?parseInt(l.substring(o+5,l.indexOf(".",o))):navigator.userAgent.match(/Trident\/7\./)?11:0)}]),angular.module("infernoApp").controller("RxCtrl",["$scope","$http",function(o,t){o.rxTotalSymbols=60,o.rxTotalLHs=1,localStorage.setItem("rxTotalSymbols",o.rxTotalSymbols),localStorage.setItem("rxTotalLHs",o.rxTotalLHs);var r=0,n=[];o.cantoes=[];t.get("https://dsmarkchen.github.io/inferno/inferno.txt").then(function(t){o.inferno=t.data.split(/\r?\n/),o.inferno.forEach(o.buildone),0<n.length&&o.cantoes.push({line:r-1,text:n.join("<br>")})}),o.buildone=function(t,e){if(0<t.trim().length){var l=t.replace(/--/g,"&#x2012;");n.push(l.trim()),3==n.length&&(o.cantoes.push({line:r-2,text:n.join("<br>")}),n=[]),r++}}}]),angular.module("infernoApp").controller("TxCtrl",["$scope","fileReader",function(l,t){l.visible=!1,l.parseCSV=function(t,e){var l=t.split(/\r\n|\r|\n/g);for(var o in l){for(var r,n=l[o].split(e=e||","),i=n.length-1;0<=i;i--)'"'==n[i].replace(/"\s+$/,'"').charAt(n[i].length-1)?1<(r=n[i].replace(/^\s+"/,'"')).length&&'"'==r.charAt(0)?n[i]=n[i].replace(/^\s*"|"\s*$/g,"").replace(/""/g,'"'):i?n.splice(i-1,2,[n[i-1],n[i]].join(e)):n=n.shift().split(e).concat(n):n[i].replace(/""/g,'"');l[o]=n}return l},l.getFile=function(){l.progress=0,l.textSrc="",l.totalSymbols=0,l.totalLHs=0,localStorage.setItem("totalSymbols",l.totalSymbols),localStorage.setItem("totalLHs",l.totalLHs),t.readAsText(l.file,l).then(function(t){l.textSrc=t,l.lines=l.parseCSV(t,","),l.lines.forEach(function(t){/LH/.test(t)&&(l.totalSymbols+=t.length-4,l.totalLHs++)}),localStorage.setItem("totalSymbols",l.totalSymbols),localStorage.setItem("totalLHs",l.totalLHs),console.log(typeof t),console.log(typeof l.textSrc)})},l.$on("fileProgress",function(t,e){l.progress=e.loaded/e.total})}]).directive("ngFileSelect",function(){return{link:function(e,t){t.bind("change",function(t){e.file=(t.srcElement||t.target).files[0],e.getFile()})}}}).factory("fileReader",["$q","$log",function(o,t){t.log("fileReader");return{readAsText:function(t,e){var l=o.defer();return function(t,e){var l=new FileReader;return l.onload=function(t,e,l){return function(){l.$apply(function(){e.resolve(t.result)})}}(l,t,e),l.onerror=function(t,e,l){return function(){l.$apply(function(){e.reject(t.result)})}}(l,t,e),l.onprogress=function(t,e){return function(t){e.$broadcast("fileProgress",{total:t.total,loaded:t.loaded})}}(0,e),l}(l,e).readAsText(t),l.promise}}}]),angular.module("infernoApp").run(["$templateCache",function(t){t.put("views/main.html",'<div class="jumbotron jumbotron-fluid"> <div class="container"> <div class="block"> <h1 class="animated fadeInUp">Inferno</h1> <div ng-hide="ie == 0"> <p class="animated fadeInUp">IE {{ie}}</p> </div> </div> </div> </div> <div class="container"> <p> <strong> Summary </strong> </p> <table class="table table-striped"> <tr> <th> </th> <th> Tx</th> <th> Rx</th> <th> Percentage</th> </tr> <tr> <td> symbols </td> <td>{{txTotalSymbols}} </td> <td>{{rxTotalSymbols}} </td> <td>{{rxTotalSymbols /txTotalSymbols * 100 | number : 2}} </td> </tr> <tr><td> sequences </td> <td> {{txTotalLHs}} </td> <td> {{rxTotalLHs}} </td> <td> {{rxTotalLHs/txTotalLHs * 100 | number : 2}} </td> </tr> </table> </div> '),t.put("views/rx.html",'<div class="container" tabindex="0"> <div ng-repeat="linex in cantoes track by $index"> <div class="row"> <div class="col-3"> <p class="line"> {{linex.line + 1}} </p> </div> <div class="col-9"> <div class="block"> <p class="canto" ng-bind-html="linex.text"></p> </div> </div> </div> </div> </div> '),t.put("views/tx.html",'<div class="container"> <form> <div class="row"> <div class="col-md-12"> <input type="file" ng-file-select="onFileSelect($files)" class="form-control-file border"> </div> </div> </form> <br> <b>Statistics:</b><br> <table class="table table-striped"> <tr> <th>Name</th> <th>Counts </th> </tr> <tr> <td>Total Symbols </td> <td>{{totalSymbols}}</td> </tr> <tr> <td>Total Sequences </td> <td>{{totalLHs}}</td> </tr> </table> <b>Preview:</b> <input ng-model="visible" type="checkbox"> <br> <i ng-hide="textSrc">No text file choosed</i> <pre ng-show="visible">{{textSrc}}</pre> <br> <b>Progress:</b> <progress value="{{progress}}"></progress> </div> ')}]);