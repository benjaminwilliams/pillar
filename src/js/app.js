'use strict';

var app = angular.module('app', [
    'ngRoute'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/', {
            templateUrl: 'partials/index.html',
            controller: 'indexCtrl'
        }).
        when('/page/:postId', {
            templateUrl: 'partials/page.html',
            controller: 'pageCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);



//Controller
app.controller('appCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.currentYear = new Date().getFullYear();
    $rootScope.finishedLoading = false;
}]);


