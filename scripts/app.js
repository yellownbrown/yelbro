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
        $rootScope.navclass = current.$$route.navclass;
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
        // All works
        .when('/work', {
            templateUrl: 'views/work-collabo.html',
            controller: 'WorkCollaboCtrl',
            title: 'Work, Gary Lim, Nikhil, Gary and Nikhil',
            keywords: 'Work, Gary, Nikhil, Gary Lim',
            description: 'Yellow and Brown, Collaboration',
            navclass: 'navcollabo'
        })
        .when('/work/gary-lim', {
            templateUrl: 'views/work-yellow.html',
            controller: 'WorkYellowCtrl',
            title: 'Work, Gary Lim',
            keywords: 'Work, Gary, Gary Lim',
            description: 'Yellow and Brown, Gary',
            navclass: 'navyellow'
        })
        .when('/work/nikhil', {
            templateUrl: 'views/work-brown.html',
            controller: 'WorkBrownCtrl',
            title: 'Work, Nikyil',
            keywords: 'Work, Nikyil',
            description: 'Yellow and Brown, Nikyil',
            navclass: 'navbrown'
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