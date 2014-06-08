var app = angular.module('ngControllers', []);

app
.controller('MainCtrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {
        console.log('MainCtrl');
        
    }
])
// all work
.controller('WorkCollaboCtrl',['$scope', '$location',
    function($scope, $location) {
        console.log('Work - collabo');
        
    }
])
.controller('WorkYellowCtrl',['$scope', '$location',
    function($scope, $location) {
        console.log('Work - gary');
    }
])
.controller('WorkBrownCtrl',['$scope', '$location',
    function($scope, $location) {
        console.log('Work - nikhil');
        
    }
])
.controller('WorkCollaboDetailCtrl',['$scope', '$location', '$routeParams', '$rootScope', 
    function($scope, $location, $routeParams, $rootScope) {
        console.log('Work - collabo -detail', $routeParams);

        $rootScope.title = $routeParams.params;
        
    }
])
// all about
.controller('AboutYellowCtrl',['$scope', '$location', '$rootScope',
    function($scope, $location, $rootScope) {
        console.log('About - yellow',$rootScope);
        $rootScope.showNav == false;
    }
])
.controller('AboutBrownCtrl',['$scope', '$location',
    function($scope, $location) {
        console.log('About - brown');
        
    }
])
// cv pages
.controller('CvBrownCtrl',['$scope', '$location',
    function($scope, $location) {
        console.log('CV - nkhil');
        
    }
])
.controller('CvYellowCtrl',['$scope', '$location',
    function($scope, $location) {
        console.log('CV - gary');
        
    }
])
.controller('GapsCtrl',['$scope', '$location',
	function($scope, $location) {
        console.log('GapsCtrl');
		
	}
])
.controller('DickiesCtrl',['$scope', '$location',
    function($scope, $location) {
        console.log('DickiesCtrl');
        
    }
])
.controller('OraclesCtrl',['$scope', '$location',
    function($scope, $location) {
        console.log('OraclesCtrl');
        
    }
])
.controller('TestCtrl',['$scope', '$location',
    function($scope, $location) {
        console.log('test');
        
    }
]);