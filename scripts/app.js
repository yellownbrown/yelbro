'use strict';

/* App Module */
var app = angular.module('yelbroApp', [
    'ngRoute',
    'ngControllers',
    'ngAnimate'
]);

app.run(['$location', '$rootScope', '$timeout', function($location, $rootScope, $timeout) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        // when change route, page always goes top (jquery attached)
        $(window).scrollTop(0);
        // metadata
        $rootScope.title = current.$$route.title;
        $rootScope.keywords = current.$$route.keywords;
        $rootScope.description = current.$$route.description;
    });
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    // $locationProvider.html5Mode(true);

    $routeProvider
	   .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            title: 'Yello & Brown',
            keywords: 'Yello & Brown, Yellow and Brown',
            description: 'Yellow and Brown'
        })
        // gaps
        .when('/gaps', {
            templateUrl: 'views/gaps.html',
            controller: 'GapsCtrl',
            title: 'Gaps',
            keywords: 'Yello & Brown, Yellow and Brown, Gaps',
            description: 'Yellow and Brown - Gaps',
            navclass: 'gaps'
        })
        // dickies
        .when('/dickies', {
            templateUrl: 'views/dickies.html',
            controller: 'DickiesCtrl',
            title: 'Dickies',
            keywords: 'Yello & Brown, Yellow and Brown, Dickies',
            description: 'Yellow and Brown - Dickies',
            navclass: 'dickies'
        })
        // oracles
        .when('/oracles', {
            templateUrl: 'views/oracles.html',
            controller: 'OraclesCtrl',
            title: 'Oracles',
            keywords: 'Yello & Brown, Yellow and Brown, Oracles',
            description: 'Oracles',
            navclass: 'oracles'
        })
        .when('/test', {
            templateUrl: 'views/test.html',
            controller: 'TestCtrl',
            title: 'Test',
            keywords: 'Yello & Brown, Yellow and Brown, Oracles',
            description: 'Yellow and Brown - Oracles'
        })
	   .otherwise({
        	redirectTo: '/'
        });
    }]);