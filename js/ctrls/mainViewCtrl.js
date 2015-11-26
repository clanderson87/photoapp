app.controller("MainViewCtrl",
  ["$routeParams", "$location", "dataAccess",
  function($routeParams, $location, $dataAccess) {

    this.pics = $dataAccess.getPhotosAsArray();

    this.friends = [{username: "Friend1", uid: 1},
      {username: "BooTheDog",
      uid: "4691dc32-d44f-487c-a74f-761dc7e25d06"}];



}]);
