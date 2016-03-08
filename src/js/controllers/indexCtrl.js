
app.controller('indexCtrl', ['$scope', '$rootScope', '$routeParams', 'dataService', function($scope, $rootScope, $routeParams, dataService) {

  //init
  $scope.index = [];
  $scope.pages = [];
  $scope.blogOrderOption = "order";

  function getIndividualData(postId){
    dataService.getData($scope.index.pages[postId]).then( //call the getData service
      function(data){
        $scope.pages.push({
          "title" : data.title,
          "dateCreated" : data.date,
          "name" : data.name,
          "author" : data.author,
          "content" : data.content,
          "tags" : data.tags,
          "blurb" : data.blurb,
          "order" : data.order,
          "image" : data.image
        });
      },
      function(err){
        console.log("error: " + err);
      }
    );
  }

  // retrieve the data from the service
  function getData() {
    dataService.getIndexData().then(
      function(data) {
        $scope.index = data;
        // Now we have the list of files
        // We can retrieve each file and add it to $scope.data
        for(var i = 0; i < $scope.index.pages.length; i++){ //for each item in the index
          getIndividualData(i);
        }
        $rootScope.finishedLoading = true; //we have finished loading
      },
      function() {
        console.log("error getting index file");
        $rootScope.finishedLoading = true; //we have finished loading
      });
  }


  getData();

  $scope.postContent = function(content, blurb){
    if(blurb){ // Display the blurb if there is one
      return blurb;
    }
    else{ // otherwise, display the full content
      return content;
    }
  };

  $scope.setColor = function(id){
    return "blog-container__header--" + id;
  };
}]);