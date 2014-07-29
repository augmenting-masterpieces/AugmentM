(function(){
  'use strict';
  angular.module('cth').controller('PostCtrl', ['$scope', 'Post', '$state', 'stringManipulators', '_', PostCtrl]);

  function PostCtrl($scope, Post, $state, stringManipulators, _){

    var vm = this;

    Post.getAll().then(function(posts){
      var params = $state.params; 
      var processedPosts = selectPost(posts, params);
      vm.posts = processedPosts;
    });

    $scope.$on('$stateChangeSuccess', 
      function(event, toState, toParams, fromState, fromParams){
      }
    );

    return vm;

    function selectPost(posts, params){
      var selectedPosts = _.map(posts, function(post, index){
        var post_id = stringManipulators.dasherize(post.title);
        if(params.post_id === post_id){
          post.selected = true;
          post.expanded = true;
        } else {
          post.selected = false;
        } 
        return post;
      });

      var selectedPostExists = _.some(selectedPosts, 'selected');

      if(!selectedPostExists){
        posts[0].selected = true;
      }

      return selectedPosts;
    }

  }
})();
