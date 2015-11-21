app.directive('addPhotoDir', ['dataAccess', function(dataAccess){
	return {
		restrict: 'A', //E for element or A for attribute
		templateUrl: '../../partials/addPhoto.html',
    scope:{

      addPhoto: function(){

  	//check if fields are entered
  	if (profileCtrl.newPhotoTitle.length > 0 &&
  			profileCtrl.newPhotoTags.length > 0 &&
  			profileCtrl.newPhotoAlbum.length > 0 &&
  			profileCtrl.newPhotoImgUrl.length > 0
 			){

  		//build the new photo
	  	var newPhoto = {
	  	uid = dataAccess.getUser();
	  	username = "default";
			imgTitle: profileCtrl.newPhotoTitle,
			tags: profileCtrl.newPhotoTags,
			album: profileCtrl.newPhotoAlbum,
			imgUrl: profileCtrl.newPhotoImgUrl
		};

		songBase.addSong(newSong);
				//reset fields
			profileCtrl.newSongTitle = "";
			profileCtrl.newSongArtist = "";
			profileCtrl.newSongAlbum = "";
			profileCtrl.newSongGenre = "";
		} //end if

	}; //end add new
      rate: "=rate"

    },



	};
}]);