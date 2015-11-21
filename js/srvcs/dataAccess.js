//factory for working with user's songs
app.factory("dataAccess", ['$firebaseObject', '$firebaseArray', '$route', function($firebaseObject, $firebaseArray, $route) {


		//create a globally available 'songs' object
	var photosObject = {};
	var photosArray = [];
	var currentUser;

  ref = new Firebase("https://photo-app.firebaseio.com/photos/");
        // download the data into a local object
  photoObject = $firebaseObject(ref);
  photosArray = $firebaseArray(ref);

  return {

  	setUser: function(userData) {
  		currentUser = userData;

  	},

    getUser: function(){
      return currentUser;
    },
    getPhotosAsObject: function() {
      return songsObject;
    },
    getPhotosAsArray: function() {
      return photosArray;
    },
    getPhoto: function(photoId) {
      return photosArray.filter(function(photo){

        return photo.id == photoId;
      })[0];
    },

    addPhoto: function(newPhoto) {
      // song_list.push(photo);
			photosArray.$add(newPhoto)
				.then(function(newPhotoRef) {
					//add generated key as 'key' and save again
		  		var id = newPhotoRef.key();
		  		// console.log("added record with id " + id);
					var index = photosArray.$indexFor(id);
					// console.log(index);
					photosArray[index].id = id;
					photosArray.$save(index);
				}); //end then
   	}, //end add photo
		removePhoto: function(photoKey) {
					var index = photosArray.$indexFor(photoKey);
					photosArray.$remove(index);
   	}, //end remove photo
    editPhoto: function(editedPhotoData) {
      var index = photosArray.$indexFor(editedPhotoData.id);
      photosArray[index] = editedPhotoData;
      photosArray.$save(index);

    }, //end edit photo

  }; //end return

}]);
