app.controller("MainViewCtrl",
  ["$routeParams", "$location", "dataAccess",
  function($routeParams, $location, $dataAccess) {


    this.pics = $dataAccess.getPhotosAsArray();

  	this.currentUser = $dataAccess.getUser();




}]);
