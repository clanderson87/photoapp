app.controller("MainViewCtrl",
  ["$routeParams", "$location", "dataAccess",
  function($routeParams, $location, $dataAccess) {

    this.pics = $dataAccess.getPhotosAsArray();
    this.friends = [{username: "Friend1", uid: 001},
      {username: "BooTheDog",
      uid: "4691dc32-d44f-487c-a74f-761dc7e25d06"}];

    if ($dataAccess.getUser() === null) {
      console.log(this.pics);
    } else {
      this.pics = $dataAccess.getPhotosAsArray();
      // this.friends = dataAccess.getFriends();
      console.log(pics, friends);
    }

}]);
