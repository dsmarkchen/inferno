"use strict";angular.module("helloApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$locationProvider","$routeProvider",function(a,b){var c="/hello";b.when(c+"/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when(c+"/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when(c+"/todo",{templateUrl:"views/todo.html",controller:"TodoCtrl",controllerAs:"todo"}).when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/todo",{templateUrl:"views/todo.html",controller:"TodoCtrl",controllerAs:"todo"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"}),a.html5Mode(!0)}]),angular.module("helloApp").controller("MainCtrl",["$scope","$route","$routeParams","$location","Page",function(a,b,c,d,e){this.$route=b,this.$location=d,this.$routeParams=c,console.log(" "+this.$route+"loc:"+this.$location+"route: "+this.$routeParams),a.isActive=function(a){return a===d.path()},a.Page=e,this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]).factory("Page",function(){var a="default";return{title:function(){return a},setTitle:function(b){a=b}}}),angular.module("helloApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("helloApp").controller("TodoCtrl",["$scope",function(a){a.todoList=["list item 1","list item 2","list item 3"]}]),angular.module("helloApp").run(["$templateCache",function(a){a.put("views/about.html",'<section id="intro"> <div class="container"> <div class="row"> <div class="col-md-7 col-sm-12"> <p>This is the about view.</p> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id </p> </div> <div class="col-md-5 col-sm-12"> <div class="about"></div> </div> </div> </div> </section>'),a.put("views/main.html",'<div class="jumbotron jumbotron-fluid"> <div class="container"> <div class="block"> <h1 class="animated fadeInUp">Hello</h1> <p class="animated fadeInUp">World</p> </div> </div> </div> <div class="container"> <div class="row marketing"> <div class="col"> <div class="block"> <h4>Chapter 1</h4> <p> riverrun, past Eve and Adam\'s, from swerve of shore to bend of bay, brings us by a commodius vicus of recirculation back to Howth Castle and Environs. </p> <p> Sir Tristram, violer d\'amores, fr\'over the short sea, had passen- core rearrived from North Armorica on this side the scraggy isthmus of Europe Minor to wielderfight his penisolate war: nor had topsawyer\'s rocks by the stream Oconee exaggerated themselse to Laurens County\'s gorgios while they went doublin their mumper all the time: nor avoice from afire bellowsed mishe mishe to tauftauf thuartpeatrick: not yet, though venissoon after, had a kidscad buttended a bland old isaac: not yet, though all\'s fair in vanessy, were sosie sesthers wroth with twone nathandjoe. Rot a peck of pa\'s malt had Jhem or Shen brewed by arclight and rory end to the regginbrow was to be seen ringsome on the aquaface. </p> <p> The fall (bababadalgharaghtakamminarronnkonnbronntonner- ronntuonnthunntrovarrhounawnskawntoohoohoordenenthur- nuk!) of a once wallstrait oldparr is retaled early in bed and later on life down through all christian minstrelsy. The great fall of the offwall entailed at such short notice the pftjschute of Finnegan, erse solid man, that the humptyhillhead of humself prumptly sends an unquiring one well to the west in quest of his tumptytumtoes: and their upturnpikepointandplace is at the knock out in the park where oranges have been laid to rust upon the green since dev- linsfirst loved livvy. </p> </div> </div> </div> </div>'),a.put("views/todo.html",'<div class="jumbotron jumbotron-fluid"> <div class="container"> <div class="block"> <h1 class="animated fadeInUp">{{titleIntro}}</h1> <p class="animated fadeInUp">{{titleDesc}}</p> </div> </div> </div> <div class="container"> <p>This is the todo view.</p> <ul> <li ng-repeat=" todo in todoList"> {{todo}} </li> </ul> </div> <section id="portfolio-work"> <div class="container"> <div class="row"> <div class="col-md-12"> <div class="block"> <div class="portfolio-menu"> <ul> <li class="filter" data-filter="all">Everything</li> <li class="filter" data-filter=".Branding">Branding</li> <li class="filter" data-filter=".Websites">Websites</li> <li class="filter" data-filter=".Graphic">Graphic</li> <li class="filter" data-filter=".design">design</li> <li class="filter active" data-filter=".Video">Video</li> </ul> </div> <div class="portfolio-contant"> <ul id="portfolio-contant-active"> <li class="mix Branding"> <a href="#"> <img src="/img/portfolio/work1.jpg" alt=""> <div class="overly"> <div class="position-center"> <h2>Tesla Motors</h2> <p>Labore et dolore magna aliqua. Ut enim ad </p> </div> </div> </a> </li> <li class="mix Websites"> <a href="#"> <img src="/img/portfolio/work2.jpg" alt=""> <div class="overly"> <div class="position-center"> <h2>Tesla Motors</h2> <p>Labore et dolore magna aliqua. Ut enim ad </p> </div> </div> </a> </li> <li class="mix Graphic"> <a href="#"> <img src="/img/portfolio/work3.jpg" alt=""> <div class="overly"> <div class="position-center"> <h2>Tesla Motors</h2> <p>Labore et dolore magna aliqua. Ut enim ad </p> </div> </div> </a> </li> <li class="mix design"> <a href="#"> <img src="/img/portfolio/work4.jpg" alt=""> <div class="overly"> <div class="position-center"> <h2>Tesla Motors</h2> <p>Labore et dolore magna aliqua. Ut enim ad </p> </div> </div> </a> </li> <li class="mix Video" style="display: inline-block"> <a href="#"> <img src="/img/portfolio/work5.jpg" alt=""> <div class="overly"> <div class="position-center"> <h2>Tesla Motors</h2> <p>Labore et dolore magna aliqua. Ut enim ad </p> </div> </div> </a> </li> <li class="mix Graphic"> <a href="#"> <img src="/img/portfolio/work6.jpg" alt=""> <div class="overly"> <div class="position-center"> <h2>Tesla Motors</h2> <p>Labore et dolore magna aliqua. Ut enim ad </p> </div> </div> </a> </li> </ul> </div> </div> </div> </div> </div> </section>')}]);