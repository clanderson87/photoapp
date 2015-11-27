app.controller("MainViewCtrl",
  ["$routeParams", "$location", "dataAccess", "$rootScope",
  function($routeParams, $location, $dataAccess, $rootScope) {

    this.pics = $dataAccess.getPhotosAsArray();
  	this.currentUser = $dataAccess.getUser();

  	this.checkUid = function(pic, index, array) {
  			console.log(this.currentUser);
	  		if (this.currentUser) {
  			return pic.uid != this.currentUser.uid;
  		} else {
  			return true;
  		}
 	 };

 	$rootScope.$on('$routeChangeSuccess', function () {
  		this.checkUid();
	}.bind(this));

}]);
