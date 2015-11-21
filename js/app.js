<<<<<<< HEAD
var app = angular.module('photoApp', ["firebase", 'angular.filter', 'ngRoute']);

//Setting Up routes
app.config(['$routeProvider', function($routeProvider){

	//route for log in
	$routeProvider
		.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'AuthCtrl as authCtrl'
		})
	//route for register
		.when('/register', {
			templateUrl: 'partials/register.html',
			controller: 'AuthCtrl as authCtrl'
		})
	//route for main view
		.when('/main', {
			templateUrl: 'mainView.html',
			controller: 'MainViewCtrl as viewCtrl'
		})
	//route for userProfile
		.when('/users/myProfile', {
			templateUrl: 'myProfile.html',
			controller: 'MyProfileCtrl as profileCtrl'
	})
		//route for other user profile
		.when('/users/:uid', {
			templateUrl: 'userProfile.html',
			controller: 'UserProfileCtrl as profileCtrl'
	})
    .when('/users', {
      templateUrl: 'users.html',
      controller: 'UsersCtrl as usersCtrl'
    })
    .otherwise({ redirectTo: 'main' });

}]);

