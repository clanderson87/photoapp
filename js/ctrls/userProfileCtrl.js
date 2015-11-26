app.controller("UserProfileCtrl", ["$routeParams", "$location", "dataAccess", "$firebaseObject",
	function($routeParams, $location, dataAccess, $firebaseObject) {

		this.allPhotos = dataAccess.getPhotosAsArray();
		this.currentUser = dataAccess.getUser();

		var userRef = new Firebase("https://photo-app.firebaseio.com/users/" + $routeParams.uid);
    this.displayUser = $firebaseObject(userRef);

    console.log(this.displayUser);


}]);