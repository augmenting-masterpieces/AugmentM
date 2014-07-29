(function(){
  'use strict';
  angular.module('cth').controller('PostCtrl', ['$scope', 'posts', '$state', 'stringManipulators', '_', PostCtrl]);

  function PostCtrl($scope, posts, $state, stringManipulators, _){

    var vm = this;

    var params = $state.params;
    vm.posts = selectPost(posts, params);

    $scope.$on('$stateChangeSuccess', 
      function(event, toState, toParams, fromState, fromParams){
        var params = toParams; 
        vm.posts = selectPost(posts, params);
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
        posts[0].initial = true;
      }

      return selectedPosts;
    }

  }
})();
