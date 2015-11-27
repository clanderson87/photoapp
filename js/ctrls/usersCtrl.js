app.controller("UsersCtrl",
  ["$routeParams", "$location", "dataAccess",
  function($routeParams, $location, dataAccess) {

  this.allUsers = dataAccess.getUsersAsArray();
  this.currentUser = dataAccess.getUser();


}]);