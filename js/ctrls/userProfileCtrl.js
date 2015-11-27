angular.module('PhotoApp').controller("UserProfileCtrl", ["$routeParams", "$location", "dataAccess", "$firebaseObject",
	function($routeParams, $location, dataAccess, $firebaseObject) {

		this.following = false;
		this.allPhotos = dataAccess.getPhotosAsArray();
		this.currentUser = dataAccess.getUser();

		var userRef = new Firebase("https://photo-app.firebaseio.com/users/" + $routeParams.uid);
    this.displayUser = $firebaseObject(userRef);

    //check if this user is already friended and hide the follow botton as needed
    this.currentUser.friends.forEach(function(element, index){
				console.log(element.uid);
				console.log(this.displayUser.$id);

    	if (element.uid === this.displayUser.$id) {
    		this.following = true;
    	}

    }.bind(this));

    console.log(this.displayUser);

    this.follow = function() {

    	if (this.currentUser.friends === undefined) {

    		this.currentUser.friends = [];

    	};

    	this.currentUser.friends.push(this.displayUser);
    	dataAccess.updateProfile(this.currentUser);
    	this.following = true;

    };



}]);