var isAppRouting;
angular.module('VitApp', [
  'ngAnimate',
	'ngMaterial',
  'ngRoute',
  'ngMessages'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'templates/login.html'
    })
    .when('/login', {
      templateUrl:'templates/login.html'
    })
    .when('/about', {
      templateUrl:'templates/about.html'
    })
    .when('/version', {
      templateUrl:'templates/version.html'
    })
    .when('/feedback', {
      templateUrl:'templates/feedback.html'
    })
    .when('/courses', {
      templateUrl:'templates/courses.html'
    })
    .when('/timetable', {
      templateUrl:'templates/timetable.html'
    })
    .when('/advisor', {
      templateUrl:'templates/advisor.html'
    })
    .when('/logout', {
      template:'Logging Out...'
    })

  $routeProvider.otherwise({
    redirectTo: function() {
      console.log('Redirecting...')
      Auth.logout()
      return '/'
    }
  });
}])
.config(['$mdThemingProvider', function($mdThemingProvider) {
  // Define a Color Palette
  $mdThemingProvider.theme('default')
    .backgroundPalette('grey');

  $mdThemingProvider.theme('darkTheme')
    .primaryPalette('blue-grey')
    .accentPalette('deep-purple')
    .dark()
}])
.run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {
    $rootScope.$on('$routeChangeStart', function (event) {
        if (!Auth.isLoggedIn()) {
            console.log('DENY');
            //event.preventDefault();
            $location.path('/');
        }
        else {
            if($location.path() == '/') {
              $location.path('/courses');
            }
            else if($location.path() == '/logout'){
              console.log('Logging Out');
              Auth.logout()
              $location.path('/advisor');
            }
        }
    });
}]);