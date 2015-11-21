app.module('PhotoApp'['firebase', 'ngRoute'])

app.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: ''
      }
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: ''
      })
      .when('/register', {
        templateUrl: 'partials/register.html',
        controller: ''
      })
      .when('/songs/list', {
        templateUrl: 'partials/profile.html',
        controller: ''
      }).
      otherwise({
        redirectTo: '/route'
    });
  }
]);
