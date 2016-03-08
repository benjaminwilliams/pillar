
app.controller('pageCtrl', ['$scope', '$rootScope', '$routeParams', 'dataService', function($scope, $rootScope, $routeParams, dataService) {
  $scope.currentPost = "";
  $scope.postId = $routeParams.postId;

  function getCurrentPage() {

    var post = $routeParams.postId;

    dataService.getData(post).then( //call the getData service
      function (data) {
        $scope.currentPage = data;
        $rootScope.finishedLoading = true; //we have finished loading;
      },
      function (err) {
        console.log("error getting file with id: " + post);
        $rootScope.finishedLoading = true; //we have finished loading
      }
    );
  }

  getCurrentPage();

  $scope.setColor = function(id){
    return "blog-container__header--" + id;
  };
}]);