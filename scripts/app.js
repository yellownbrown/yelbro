'use strict';

/* App Module */
var app = angular.module('yelbroApp', [
    'ngRoute',
    'ngControllers',
    // 'ngServices',
    'ngAnimate'
]);

app.run(['$location', '$rootScope', '$timeout', '$routeParams', 
    function($location, $rootScope, $timeout, $routeParams) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            // when change route, page always goes top (jquery attached)
            $(window).scrollTop(0);
            // metadata
            $rootScope.title = current.$$route.title;
            $rootScope.keywords = current.$$route.keywords;
            $rootScope.description = current.$$route.description;
            $rootScope.navclass = current.$$route.navclass;
            $rootScope.sidebarclass = current.$$route.sidebarclass;
    
            $rootScope.hideNav = false;
            $rootScope.showNav = false;
    
            if($location.path() != current.$$route.originalPath ) {
                $rootScope.showNav = false;
            }
    
            // console.log($location.url());
            
            if ($location.url().match('works/')) {
                console.log('has params');
                $rootScope.hideNav = true;
                // $rootScope.
            }
    
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
        // work page
        .when('/works', {
            templateUrl: 'views/work-collabo.html',
            controller: 'WorkCollaboCtrl',
            title: 'Work, Gary Lim, Nikhil, Gary and Nikhil',
            keywords: 'Work, Gary, Nikhil, Gary Lim',
            description: 'Yellow and Brown, Collaboration',
            navclass: 'navcollabo',
            sidebarclass: 'sidecollabo'
        })
        .when('/works/:params', {
            templateUrl: 'views/work-collabo-detail.html',
            controller: 'WorkCollaboDetailCtrl',
            title: 'Work, Gary Lim, Nikhil, Gary and Nikhil',
            keywords: 'collabo work - detail',
            description: 'Yellow and Brown, Collaboration',
            navclass: 'navcollabo',
            sidebarclass: 'sidecollabo'
        })
        .when('/work/gary-lim', {
            templateUrl: 'views/work-yellow.html',
            controller: 'WorkYellowCtrl',
            title: 'Work, Gary Lim',
            keywords: 'Work, Gary, Gary Lim',
            description: 'Yellow and Brown, Gary',
            navclass: 'navyellow',
            sidebarclass: 'sideyellow'
        })
        .when('/work/nikhil', {
            templateUrl: 'views/work-brown.html',
            controller: 'WorkBrownCtrl',
            title: 'Work, Nikyil',
            keywords: 'Work, Nikyil',
            description: 'Yellow and Brown, Nikyil',
            navclass: 'navbrown',
            sidebarclass: 'sidebrown'
        })
        // about page
        .when('/about/gary-lim', {
            templateUrl: 'views/about-yellow.html',
            controller: 'AboutYellowCtrl',
            title: 'About Gary',
            keywords: 'Yello & Brown, About, Gary',
            description: 'Yello & Brown, about Gary',
            navclass: 'navyellow',
            sidebarclass: 'sideyellow'
        })
        .when('/about/nikhil', {
            templateUrl: 'views/about-brown.html',
            controller: 'AboutBrownCtrl',
            title: 'About Nikhil',
            keywords: 'Yello & Brown, About, Nikhil',
            description: 'Yello & Brown, about Nikhil',
            navclass: 'navbrown',
            sidebarclass: 'sidebrown'
        })
        // cv page
        .when('/cv/gary-lim', {
            templateUrl: 'views/cv-yellow.html',
            controller: 'CvYellowCtrl',
            title: 'CV',
            keywords: 'Yello & Brown, work experience of Gary',
            description: 'CV, Gary',
            navclass: 'navyellow',
            sidebarclass: 'sideyellow'
        })
        .when('/cv/nikhil', {
            templateUrl: 'views/cv-brown.html',
            controller: 'CvBrownCtrl',
            title: 'CV',
            keywords: 'Yello & Brown, work experience of Nikhil',
            description: 'CV, Nikhil',
            navclass: 'navbrown',
            sidebarclass: 'sidebrown'
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