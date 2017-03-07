var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/home.html"
    })
    .when("/winshell", {
        templateUrl : "pages/winshell.html"
    })
    .when("/winfile", {
        templateUrl : "pages/winfile.html"
    })
    .when("/macshell", {
        templateUrl : "pages/macshell.html"
    })
    .when("/macfile", {
        templateUrl : "pages/macfile.html"
    })
    .when("/linshell", {
        templateUrl : "pages/linshell.html"
    })
    .when("/linfile", {
        templateUrl : "pages/linfile.html"
    });
});
