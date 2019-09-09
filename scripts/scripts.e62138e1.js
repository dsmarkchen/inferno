"use strict";angular.module("infernoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).directive("xwindow",["$window",function(i){return{link:function(t,e,n){function o(){console.log(i.innerWidth),t.width!==i.innerWidth&&(t.width=i.innerWidth,t.$digest()),t.height!==i.innerHeight&&(t.height=i.innerHeight,t.$digest())}t.width=i.innerWidth,t.height=i.innerHeight,angular.element(i).on("resize",o),t.$on("$destroy",function(){angular.element(i).off("resize",o)})},restrict:"A"}}]).directive("tooltip",["$compile","$sce",function(i,r){return{restrict:"A",scope:{content:"=tooltipContent"},link:function(e,t,n){e.displayTooltip=!1,e.updateTooltipOpacity=function(t){o.css({opacity:t,"max-width":340})},e.updateTooltipPosition=function(t,e){var n=$(this);n.offset().left,n.outerWidth();o.css({top:t+"px",left:e+"px"})},e.getSafeContent=function(t){return r.trustAsHtml(t)};var o=angular.element('<div ng-show="displayTooltip" id="tooltip">        \t<span ng-bind-html="getSafeContent(content)"></span>        </div>');angular.element('<div ng-show="displayTooltip" class="tooltip">        \t<span ng-bind-html="getSafeContent(content)"></span>        </div>');angular.element(document.querySelector("body")).append(o),t.on("mouseenter",function(t){e.displayTooltip=!0,e.$digest()}),t.on("mousemove",function(t){e.updateTooltipOpacity(.5),e.updateTooltipPosition(t.clientY-5,t.clientX+5)}),t.on("mouseleave",function(){e.displayTooltip=!1,e.$digest()}),i(o)(e)}}}]).directive("xtooltip",function(){return{restrict:"A",link:function(t,e,n){e.hover(function(){e.tooltip({html:"true",container:"body"}),e.tooltip("show")},function(){e.tooltip("hide")})}}}).directive("bs-tooltip",function(){return function(t,e,n){n.$observe("title",function(t){e.tooltip("destroy"),jQuery.trim(t)&&e.tooltip()}),e.on("$destroy",function(){e.tooltip("destroy"),delete n.$$observers.title})}}).config(["$routeProvider",function(t,e){t.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/inferno/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/main",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/inferno/main",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/inferno/tx",{templateUrl:"views/tx.html",controller:"TxCtrl",controllerAs:"tx"}).when("/tx",{templateUrl:"views/tx.html",controller:"TxCtrl",controllerAs:"tx"}).when("/inferno/rx",{templateUrl:"views/rx.html",controller:"RxCtrl",controllerAs:"rx"}).when("/rx",{templateUrl:"views/rx.html",controller:"RxCtrl",controllerAs:"rx"}).otherwise({redirectTo:"/"})}]),angular.module("infernoApp").filter("split",function(){return function(t){var e=t.split(/([!,.;?-])/g),n="",o="",i="";return e.forEach(function(t){if(n+=t,52<t.length){return n.split(/(that|where|which|when|who)/g).forEach(r),o+=i,void(n="")}((o+=t).endsWith("--")&&"-"==t||"?"==t||";"==t||"."==t||"!"==t||","==t)&&(o+="\n",n="")}),console.log("line_index:0"),o;function r(t){if("that"==t||"where"==t||"when"==t||"who"==t||"which"==t)return i+="\n ",void(i+=t);i+=t}}}).controller("MainCtrl",["$window","$scope","$location",function(t,e,n){var o,i;this.test="testing mainController",e.txTotalSymbols=localStorage.getItem("totalSymbols"),e.txTotalLHs=localStorage.getItem("totalLHs"),e.rxTotalSymbols=localStorage.getItem("rxTotalSymbols"),e.rxTotalLHs=localStorage.getItem("rxTotalLHs"),e.isActive=function(t){return t===n.path()},e.ie=(o=window.navigator.userAgent,0<(i=o.indexOf("MSIE"))?parseInt(o.substring(i+5,o.indexOf(".",i))):navigator.userAgent.match(/Trident\/7\./)?11:0)}]),angular.module("infernoApp").directive("xelement",["$timeout",function(r){return{restrict:"A",link:function(n,o,i){o.ready(function(){var t,e;r(function(){t=o[0].offsetHeight,e=o[0].offsetWidth,i.key?n[i.key]={height:t,width:e}:n.elementSize={height:t,width:e}})})}}}]).filter("myCantoFilter",function(){return function(t,e){var n=[];if(""==e)return t;var o=e.split(/[,:]/),i=o[0],r=o[1],l=o[2];return angular.forEach(t,function(t){null!=t.name&&t.name.trim()==i.trim()&&t.line>=r&&t.line<l&&n.push(t)}),n}}).filter("conto",function(){return function(t,e){var n=[];if(""==e)return n;var o=e.split(/[,:]/),i=o[0],r=o[1],l=o[2];return angular.forEach(t,function(t){t.conto==i&&t.line>=r&&t.line<=l&&n.push(t)}),n}}).controller("RxCtrl",["$scope","$http","$filter",function(a,t,e){a.isNullOrEmpty=function(t){return null==t||""===t},a.comments=JSON.parse(localStorage.getItem("myComments"))||[],a.getFilteredComments=function(){return e("conto")(a.comments,1,1,9)},a.rxTotalSymbols=60,a.rxTotalLHs=1,a.myQuery=localStorage.getItem("myQuery"),a.isNullOrEmpty(a.myQuery)&&(a.myQuery="1:1,25",localStorage.setItem("myQuery",a.myQuery)),localStorage.setItem("rxTotalSymbols",a.rxTotalSymbols),localStorage.setItem("rxTotalLHs",a.rxTotalLHs);var o=0,i=[];a.cantoes=[];var r="";t.get("https://dsmarkchen.github.io/inferno/inferno.txt").then(function(t){a.inferno=t.data.split(/\r?\n/),a.inferno.forEach(a.buildone),0<i.length&&a.cantoes.push({line:o-1,text:i.join("<br>")})});var s=3;a.move=function(){var t=a.myQuery;if(""!=t){var e=t.split(/[,:]/),n=e[0].trim(),o=parseInt(e[1].trim(),10),i=parseInt(e[2].trim(),10),r=i-o;if(0<s){i=i+r+1;var l=(o=o+r+1)%3;0==l&&(o+=1,i+=1),2==l&&(o-=1,i-=1)}s<0&&(o=o-r-1,i=i-r-1,0==l&&(o+=1,i+=1),2==l&&(o-=1,i-=1)),o<0&&(o=1),a.myQuery=n+":"+o.toString()+","+i.toString(),localStorage.setItem("myQuery",a.myQuery)}},a.prev=function(){s=-3,a.move()},a.next=function(){s=3,a.move()},a.buildone=function(t,e){if(0<t.trim().length){if(/^##/.test(t))return 0<i.length&&(a.cantoes.push({name:r,line:o,text:i.join("<br>"),visible:!0}),i=[]),r=t.replace(/^## /,""),void(o=0);var n=t.replace(/--/g,"&#x2012;");i.push(n.trim()),o++,3==i.length&&(a.cantoes.push({name:r,line:o-2,text:i.join("<br>"),visible:!0}),i=[])}}}]),angular.module("infernoApp").controller("TxCtrl",["$scope","fileReader",function(n,t){n.isNullOrEmpty=function(t){return null==t||""===t},n.comments=null,n.isNullOrEmpty(n.comments)&&(n.comments=[{conto:1,line:1,name:"stray",comment:"deviate"},{conto:1,line:4,name:"savage",comment:"wild"},{conto:1,line:16,name:"ray",comment:"a narrow beam of light"},{name:"fugitive",conto:1,line:25,comment:"straying"},{name:"lithe",conto:1,line:31,comment:"flexible"},{name:"hide",conto:1,line:31,comment:"n. skin"},{conto:1,line:34,name:"impede",comment:"prevent"},{conto:1,line:34,name:"ascent",comment:"upward movement"},{conto:1,line:88,name:"shudder",comment:"tremble"},{name:"cowardice",conto:9,line:1,comment:"lack of courage to face difficulty"},{name:"pallor",conto:9,line:1,comment:"pale"}],localStorage.setItem("myComments",JSON.stringify(n.comments))),n.comments=JSON.parse(localStorage.getItem("myComments"))||[],n.visible=!1,n.parseCSV=function(t,e){var n=t.split(/\r\n|\r|\n/g);for(var o in n){for(var i,r=n[o].split(e=e||","),l=r.length-1;0<=l;l--)'"'==r[l].replace(/"\s+$/,'"').charAt(r[l].length-1)?1<(i=r[l].replace(/^\s+"/,'"')).length&&'"'==i.charAt(0)?r[l]=r[l].replace(/^\s*"|"\s*$/g,"").replace(/""/g,'"'):l?r.splice(l-1,2,[r[l-1],r[l]].join(e)):r=r.shift().split(e).concat(r):r[l].replace(/""/g,'"');n[o]=r}return n},n.addComment=function(){var t={conto:n.addConto,line:n.addLine,name:n.addName,comment:n.addNote};n.comments.push(t)},n.getFile=function(){n.progress=0,n.textSrc="",n.totalSymbols=0,n.totalLHs=0,localStorage.setItem("totalSymbols",n.totalSymbols),localStorage.setItem("totalLHs",n.totalLHs),t.readAsText(n.file,n).then(function(t){n.textSrc=t,n.lines=n.parseCSV(t,","),n.lines.forEach(function(t){/LH/.test(t)&&(n.totalSymbols+=t.length-4,n.totalLHs++)}),localStorage.setItem("totalSymbols",n.totalSymbols),localStorage.setItem("totalLHs",n.totalLHs),console.log(typeof t),console.log(typeof n.textSrc)})},n.$on("fileProgress",function(t,e){n.progress=e.loaded/e.total})}]).directive("ngFileSelect",function(){return{link:function(e,t){t.bind("change",function(t){e.file=(t.srcElement||t.target).files[0],e.getFile()})}}}).factory("fileReader",["$q","$log",function(o,t){t.log("fileReader");return{readAsText:function(t,e){var n=o.defer();return function(t,e){var n=new FileReader;return n.onload=function(t,e,n){return function(){n.$apply(function(){e.resolve(t.result)})}}(n,t,e),n.onerror=function(t,e,n){return function(){n.$apply(function(){e.reject(t.result)})}}(n,t,e),n.onprogress=function(t,e){return function(t){e.$broadcast("fileProgress",{total:t.total,loaded:t.loaded})}}(0,e),n}(n,e).readAsText(t),n.promise}}}]),angular.module("infernoApp").run(["$templateCache",function(t){t.put("views/main.html",'<div class="jumbotron jumbotron-fluid"> <div class="container"> <div class="block"> <h1 class="animated fadeInUp">Inferno</h1> <p class="animated fadeInUp">Just Another Dante Suite</p> <div ng-hide="ie == 0"> <p class="animated fadeInUp">IE {{ie}}</p> </div> </div> </div> </div> <div class="container"> <p> <strong> Summary </strong> </p> <table class="table table-striped"> <tr> <th> </th> <th> Tx</th> <th> Rx</th> <th> Percentage</th> </tr> <tr> <td> symbols </td> <td>{{txTotalSymbols}} </td> <td>{{rxTotalSymbols}} </td> <td>{{rxTotalSymbols /txTotalSymbols * 100 | number : 2}} </td> </tr> <tr><td> sequences </td> <td> {{txTotalLHs}} </td> <td> {{rxTotalLHs}} </td> <td> {{rxTotalLHs/txTotalLHs * 100 | number : 2}} </td> </tr> </table> <div xwindow> <p ng-if="width > 320">The device window is: [{{width}}, {{height}}].</p> </div> </div> '),t.put("views/rx.html",'<div class="container"> <div class="row"> <div class="col-md-3 col-sm-12"> <div class="row"> <div class="col"> <form> <div class="form-group"> <div class="input-group"> <div class="input-group-addon"><i class="fa fa-search"></i></div> <input type="text" class="form-control" placeholder="query: start, end" ng-model="myQuery"> </div> </div> </form> </div> </div> <div class="row"> <div class="col"> <button class="btn btn-secondary" ng-click="prev()"> prev</button> <button class="btn btn-secondary" ng-click="next()"> next</button> </div> </div> </div> <div class="col-md-9 col-sm-12"> <div ng-repeat="linex in cantoes | myCantoFilter: myQuery  track by $index "> <div class="row" ng-if="linex.visible"> <div class="col-2" style="margin:0px 0px 0px 0px;padding:0px 0px; border: 1px solid #f8f9fa"> <p class="line" style="margin:0px 0px 0px 0px;padding:0px 0px;background-color:#f8f9fa">{{linex.name}}:{{linex.line}} </p> </div> <div class="col-10"> <div xelement> <p ng-if="elementSize.width > 100 && $index == 0">The element width: {{elementSize.width}}.</p> </div> <p class="canto" style="padding:0px 15px" ng-bind-html="linex.text"></p> </div> </div> </div> </div> </div> <div class="row"> <div class="col"> <br><br> <ul class="list-group list-group-flush"> <li class="list-group-item" ng-repeat="comment in comments  | conto: myQuery track by $index"> <strong tooltip tooltip-content="comment.comment">{{comment.name}}</strong> </li> </ul> </div> </div> </div> '),t.put("views/tx.html",'<div class="container"> <table> <tr ng-repeat="comment in comments track by $index"> <td> {{comment.conto}} </td> <td> {{comment.line}} </td> <td> {{comment.name}} </td> <td> {{comment.comment}} </td><td> </td></tr> </table> </div> <div class="form-group"> <label for="addComment">Conto</label> <input ng-model="addConto"> <label for="addComment">Number </label> <input ng-model="addLine"> <br> <label for="addComment">Name </label> <input ng-model="addName"> <label for="addComment">Comment</label> <input ng-model="addNote"> <button ng-click="addComment()" class="button button-primary">Add</button> </div> <form> <div class="row"> <div class="col-md-12"> <input type="file" ng-file-select="onFileSelect($files)" class="form-control-file border"> </div> </div> </form> <br> \x3c!--\r\n   <b>Statistics:</b><br />\r\n\r\n    <table class="table table-striped">\r\n     <tr>\r\n        <th>Name</th>\r\n        <th>Counts </th>\r\n     </tr>\r\n     <tr> \r\n        <td>Total Symbols </td>\r\n        <td>{{totalSymbols}}</td>\r\n     </tr>\r\n     <tr> \r\n        <td>Total Sequences </td>\r\n        <td>{{totalLHs}}</td>\r\n     </tr>\r\n    </table>\r\n   \r\n   <b>Preview:</b> \r\n   <input ng-model="visible" type="checkbox"/>\r\n   <br />\r\n   <i ng-hide="textSrc">No text file choosed</i>\r\n   <pre ng-show="visible">{{textSrc}}</pre>\r\n   \r\n   <br/> \r\n   <b>Progress:</b>\r\n  <progress value="{{progress}}"></progress>\r\n</div>\r\n--\x3e ')}]);