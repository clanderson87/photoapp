app.controller("AddPhotoCtrl", ["$routeParams", "$location", "dataAccess", "$firebaseObject", "$uibModalInstance",
	function($routeParams, $location, dataAccess, $firebaseObject, $uibModalInstance) {


		this.allPhotos = dataAccess.getPhotosAsArray();

		this.currentUser = dataAccess.getUser();



    this.addPhoto = function(){
    	//get current user data from the log in screen

			  	//check if fields are entered
	  	if (this.newPhotoTitle.length > 0 &&
	  			this.newPhotoTags.length > 0 &&
	  			this.newPhotoAlbum.length > 0 &&
	  			this.newPhotoImgUrl.length > 0
	 			){

	  		// currentUser = dataAccess.getUser();
	  		//build the new photo
		  	var newPhoto = {
		  	uid: this.currentUser.uid,
		  	username: this.currentUser.username,
				imgTitle: this.newPhotoTitle,
				tags: this.newPhotoTags.toLowerCase().split(" "), //split tags at spaces and convert to lowercase
				album: this.newPhotoAlbum,
				imgUrl: this.newPhotoImgUrl
			};

			dataAccess.addPhoto(newPhoto);
			this.newPhotoTitle = "";
			this.newPhotoTags = "";
			this.newPhotoAlbum = "";
			this.newPhotoImgUrl = "";

			} //end if

		}; //end add new Photo


  	this.closeModal = function () {

			 $uibModalInstance.close()

  	};


}]);