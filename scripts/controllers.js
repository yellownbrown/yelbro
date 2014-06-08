var app = angular.module('ngControllers', []);

app
.controller('MainCtrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {
        console.log('MainCtrl');
        
    }
])
// all work
.controller('WorkCollaboCtrl',['$scope', '$location', '$http', 
    function($scope, $location, $http) {
        console.log('Works / collabo', $scope);

        // $http.get('/works.json')
        $http.get('http://yellownbrown.github.io/yelbro/works.json')
        .success(function(data) {
            // console.log(data, 'received');
            $scope.workslist = data;
        }).error(function(data, status) {
            console.log('error',data);
        });
        
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
.controller('WorkCollaboDetailCtrl',['$scope', '$location', '$routeParams', '$rootScope', '$timeout', '$http', 
    function($scope, $location, $routeParams, $rootScope, $timeout, $http) {
        console.log('Work - collabo - detail');

        $rootScope.title = $routeParams.params;

        // http://yellownbrown.github.io/yelbro/collabo/collabo1.json
        // $http.get('collabo/'+$routeParams.params+'.json', {cache: true})
        $http.get('http://yellownbrown.github.io/yelbro/collabo/'+$routeParams.params+'.json', {cache: true})
        .success(function(data) {
            console.log(data, 'received');
            $scope.work = data;
        }).error(function(data, status) {
            console.log('error',data);
        });

        $timeout(function() {
            $('#detail').addClass('show');
            $('#closebutton').addClass('close')
        }, 50);
        
        $scope.close = function() {
            $timeout(function() {
                $('#detail').removeClass('show');
                $('#closebutton').removeClass('close')
                $location.path('/works');
            }, 50);
        }
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