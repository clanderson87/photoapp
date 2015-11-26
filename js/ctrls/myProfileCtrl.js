app.controller("MyProfileCtrl", ["$routeParams", "$location", "dataAccess", "$firebaseObject", "$uibModal",
	function($routeParams, $location, dataAccess, $firebaseObject, $uibModal) {

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

	  		currentUser = dataAccess.getUser();
	  		//build the new photo
		  	var newPhoto = {
		  	uid: currentUser.uid,
		  	username: currentUser.username,
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

		this.toggleEdits = function(){
			$('.editProfile').toggle('display');
		};

		this.editProfile = function(){
			dataAccess.updateProfile(this.currentUser);
			$('.editProfile').toggle('display');

		};

		this.toggleEditPhoto = function(){
			$('.editPhoto').toggle('display');
		};

		this.editPhoto = function(photo){
			dataAccess.editPhoto(photo);
			$('.editPhoto').toggle('display');
		};

		this.removePhoto = function(photoid){
			dataAccess.removePhoto(photoid);
			$('.editPhoto').toggle('display');
		};

		this.open = function () {

	    var modalInstance = $uibModal.open({
	      animation: true,
	      templateUrl: './partials/addPhoto.html',
	      controller: 'AddPhotoCtrl as profileCtrl',
	      size: 'lg',

	    });

  	};

  	this.closeModal = function () {

			 $uibModalInstance.close()

  	};


}]);