

  app.directive('urlBuilder', [function() {
    return {
      restrict: 'E',
      template: function(elem, attr){
        if(attr.href === "index"){
          return '<a href="index.html">' + attr.title + '</a>';
        }
        return '<a href="page/' + attr.href + '">' + attr.title + '</a>';
      }
    };
  }]);
