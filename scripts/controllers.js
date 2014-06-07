var app = angular.module('ngControllers', []);

app
.controller('MainCtrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {
        console.log('MainCtrl');
        
    }
])
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