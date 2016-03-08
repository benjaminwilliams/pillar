app.factory('dataService', ['$http', '$q', function($http, $q) {
  return {
    /**
     * Gets the index.json file that contains the location of each post's JSON file
     * @returns {*} contents of index.json
     */
    getIndexData: function() {
      var deferred = $q.defer();
      $http.get('data/index.json')
        .success(function(data) {
          deferred.resolve(data);
        }).error(function(msg, code) {
        deferred.reject(msg);
        console.log("error: " + msg);
      });
      return deferred.promise;
    },

    /**
     * Returns the JSON for a specified id
     * @param id name of the file, including .json file extension
     * @returns {*} contents of the requested JSON file
     */
    getData: function(id) {

      if(id){
        var deferred = $q.defer();
        $http.get('data/' + id + '/details.json')
          .success(function(data) {
            deferred.resolve(data);
          }).error(function(msg, code) {
          deferred.reject(msg);
          console.log("error: " + msg);
        });
        return deferred.promise;
      }
    }
  };
}]);