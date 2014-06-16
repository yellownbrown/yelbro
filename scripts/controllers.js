var app = angular.module('ngControllers', []);

app
.controller('MainCtrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {
        
    }
])
// all work
.controller('WorkCollaboCtrl',['$scope', '$location', '$http', 
    function($scope, $location, $http) {
        // $http.get('/works.json', { cache: true })
        $http.get('http://yellowandbrown.co/works.json', { cache: true })
        .success(function(data) {
            $scope.workslist = data;
        }).error(function(data, status) {
            console.log('error',data);
        });        
    }
])
.controller('WorkYellowCtrl',['$scope', '$location', '$http',
    function($scope, $location, $http) {
        // $http.get('/works-g.json', { cache: true })
        $http.get('http://yellowandbrown.co/works-g.json', { cache: true })
        .success(function(data) {
            $scope.workslistg = data;
        }).error(function(data, status) {
            console.log('error',data);
        });  
    }
])
.controller('WorkBrownCtrl',['$scope', '$location', '$http',
    function($scope, $location, $http) {
        // $http.get('/works-n.json', { cache: true })
        $http.get('http://yellowandbrown.co/works-n.json', { cache: true })
        .success(function(data) {
            $scope.workslistn = data;
        }).error(function(data, status) {
            console.log('error',data);
        });  
    }
])
.controller('WorkYellowDetailCtrl',['$scope', '$location', '$routeParams', '$rootScope', '$timeout', '$http', 
    function($scope, $location, $routeParams, $rootScope, $timeout, $http) {
        $rootScope.title = $routeParams.params;

        // $http.get('gary/'+$routeParams.params+'.json', {cache: true})
        $http.get('http://yellowandbrown.co/gary/'+$routeParams.params+'.json', {cache: true})
        .success(function(data) {
            $scope.work = data;
        }).error(function(data, status) {
            console.log('error',data);
        });

        $timeout(function() {
            $('#detail').addClass('show');
            $('#closebutton').addClass('close')
        }, 80);
        
        $scope.close = function() {
            $timeout(function() {
                $('#detail').removeClass('show');
                $('#closebutton').removeClass('close')
                $location.path('/work/gary');
            }, 50);
        }
    }
])
.controller('WorkBrownDetailCtrl',['$scope', '$location', '$routeParams', '$rootScope', '$timeout', '$http', 
    function($scope, $location, $routeParams, $rootScope, $timeout, $http) {
        $rootScope.title = $routeParams.params;

        // $http.get('nikhil/'+$routeParams.params+'.json', {cache: true})
        $http.get('http://yellowandbrown.co/nikhil/'+$routeParams.params+'.json', {cache: true})
        .success(function(data) {
            $scope.work = data;
        }).error(function(data, status) {
            console.log('error',data);
        });

        $timeout(function() {
            $('#detail').addClass('show');
            $('#closebutton').addClass('close')
        }, 80);
        
        $scope.close = function() {
            $timeout(function() {
                $('#detail').removeClass('show');
                $('#closebutton').removeClass('close')
                $location.path('/work/nikhil');
            }, 50);
        }
    }
])
.controller('WorkCollaboDetailCtrl',['$scope', '$location', '$routeParams', '$rootScope', '$timeout', '$http', 
    function($scope, $location, $routeParams, $rootScope, $timeout, $http) {

        $rootScope.title = $routeParams.params;

        // $http.get('collabo/'+$routeParams.params+'.json', {cache: true})
        $http.get('http://yellowandbrown.co/collabo/'+$routeParams.params+'.json', {cache: true})
        .success(function(data) {
            $scope.work = data;
        }).error(function(data, status) {
            console.log('error',data);
        });

        $timeout(function() {
            $('#detail').addClass('show');
            $('#closebutton').addClass('close')
        }, 80);
        
        $scope.close = function() {
            $timeout(function() {
                $('#detail').removeClass('show');
                $('#closebutton').removeClass('close')
                $location.path('/works');
            }, 50);
        }
    }
]);