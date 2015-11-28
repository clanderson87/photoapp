app.controller("MainViewCtrl",
  ["$routeParams", "$location", "dataAccess", "$rootScope",
  function($routeParams, $location, $dataAccess, $rootScope) {

    this.pics = $dataAccess.getPhotosAsArray();
  	this.currentUser = $dataAccess.getUser();

}]);
