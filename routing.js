angular.module("digitbit",["ngRoute"])
.config(function($routeProvider){
$routeProvider
.when("/",{
   templateUrl:"digibit.html"
})
.when("/html",{
    templateUrl:"cours.html"
})
.when("/css",{
    templateUrl:"courscss.html"
})
.when("/javascript",{
    templateUrl:"coursjs.html"
})

})





