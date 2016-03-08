'use strict';

var app = angular.module('app', [
    'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider) {

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


