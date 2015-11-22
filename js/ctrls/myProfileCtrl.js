app.controller("MyProfileCtrl", ["$routeParams", "$location", "dataAccess",
	function($routeParams, $location, dataAccess) {

		this.currentUser = dataAccess.getUser();

    this.addPhoto = function(){

	  	//check if fields are entered
	  	if (this.newPhotoTitle.length > 0 &&
	  			this.newPhotoTags.length > 0 &&
	  			this.newPhotoAlbum.length > 0 &&
	  			this.newPhotoImgUrl.length > 0
	 			){

	  		currentUser = dataAccess.getUser();
	  		//build the new photo
		  	var newPhoto = {
		  	uid: currentUser.uid,
		  	username: currentUser.username,
				imgTitle: this.newPhotoTitle,
				tags: this.newPhotoTags.split(" "),
				album: this.newPhotoAlbum,
				imgUrl: this.newPhotoImgUrl
			};

			dataAccess.addPhoto(newPhoto);
			this.newPhotoTitle = "";
			this.newPhotoTags = "";
			this.newPhotoAlbum = "";
			this.newPhotoImgUrl = "";

			} //end if

		} //end add new Song

}]);