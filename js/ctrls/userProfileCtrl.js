angular.module('PhotoApp').controller("UserProfileCtrl", ["$routeParams", "$location", "dataAccess", "$firebaseObject",
    function($routeParams, $location, dataAccess, $firebaseObject) {

        this.following = false;
        this.allPhotos = dataAccess.getPhotosAsArray();
        this.currentUser = dataAccess.getUser();

        var userRef = new Firebase("https://photo-app.firebaseio.com/users/" + $routeParams.uid);
        this.displayUser = $firebaseObject(userRef);
        console.log(this.displayUser);

    if (this.currentUser === null) {
        this.following = true;
    }

    //check if this user is already friended and hide the follow botton as needed
    if (this.currentUser && this.currentUser.friends) {

    this.currentUser.friends.forEach(function(element, index){
                console.log(element.uid);
                console.log(this.displayUser.$id);

        if (element.uid === this.displayUser.$id) {
            this.following = true;
        }

    }.bind(this));

}


    this.follow = function() {

    	if (this.currentUser.friends === undefined) {

    		this.currentUser.friends = [];

    	}

    	this.currentUser.friends.push(this.displayUser);
    	dataAccess.updateProfile(this.currentUser);
    	this.following = true;

    };



}]);