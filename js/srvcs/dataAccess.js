//factory for working with user's songs
app.factory("dataAccess", ['$firebaseObject', '$firebaseArray', '$route', '$location', function($firebaseObject, $firebaseArray, $route, $location) {


		//create a globally available 'songs' object
	var photosObject = {};
	var photosArray = [];
	var currentUser = null;
  var currentUserId = null;

  ref = new Firebase("https://photo-app.firebaseio.com/photos/");
        // download the data into a local object
  photoObject = $firebaseObject(ref);
  photosArray = $firebaseArray(ref);

  return {

  	setUser: function(userData) {


  ///read current user's data from firebase and add it to the currentUser object
    var userRef = new Firebase("https://photo-app.firebaseio.com/users/" + userData.uid);
    var userRefObj = $firebaseObject(userRef);

    //promise that is resolved once the data is available from firebase
    userRefObj.$loaded()
      .then(function(){

      currentUser = userRefObj;

      console.log('userRefObj username', userRefObj.username);
      console.log(userData.facebook);


      if (userRefObj.username !== undefined) {
        //set currentUser's username to their chosen alias
        currentUser.username = userRefObj.username;
      } else if (userData.facebook !== undefined) {
        //or use first name from facebook log in
        currentUser.username = userData.facebook.cachedUserProfile.first_name;
      } else {currentUser.username = "Generic Username";}
        console.log('current username = ', currentUser.username);


      if (userRefObj.userPhoto !== undefined) {
        //set currentUser's username to their chosen alias
        currentUser.userPhoto = userRefObj.userPhoto;
      } else if (userData.facebook !== undefined) {
        //or use first name from facebook log in
        currentUser.userPhoto = userData.facebook.profileImageURL;
      } else {currentUser.userPhoto = "./styles/pics/genericUserIcon.png";}
        console.log('current userPhoto = ', currentUser.userPhoto);

      console.log("currentUser set as ", currentUser);
     currentUser.uid = userData.uid;

    $location.path("/users/myProfile");

     }); //end promise

  //current user set to the auth data

    },// end set user

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

    updateProfile: function(userData){
      currentUser.about = userData.about;
      currentUser.userPhoto = userData.userPhoto;
      currentUser.$save();

    }

  }; //end return

}]);
