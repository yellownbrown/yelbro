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
// all about
.controller('AboutYellowCtrl',['$scope', '$location',
    function($scope, $location) {
        console.log('About - yellow');
        
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