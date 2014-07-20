(function(){
  'use strict';

  angular.module('cth').controller('PostCtrl', ['Post', '$scope', '$state', '$rootScope', '_', PostCtrl]);

  function PostCtrl(Post, $scope, $state, $rootScope, _){

    var vm = this;
    var oldSelectedPost;
    var selectedPost;

    Post.getAll().then(function(posts){

      var processedPosts = posts.map(function(post){
        post.selected = false;
        return post;
      });
      vm.posts = processedPosts;
    });


    $scope.$on('itemSelected', function(){
      checkIfSelected();
    });

    $scope.$on('noItemSelected', function(){
      _.each(vm.posts, function(post){
        oldSelectedPost = undefined;
        post.selected = false;
        post.expanded = false;
      });
    });

    function checkIfSelected(){
      var postId = $state.params.post_id;
      _.each(vm.posts, function(post){
        if(postId === dasherize(post.title)){
          selectedPost = post;
          selectPost();
        } else {
          deselectPost(post);
        }
      });
    }

    $scope.toggleExpanded = function(post){
      post.expanded = !post.expanded;
    };

    function deselectPost(post){
      post.selected = false;
    }

    function selectPost(){
      if(oldSelectedPost !== selectedPost){
        selectedPost.selected = true;
        selectedPost.expanded = true;
      }
      oldSelectedPost = selectedPost;
    }

    function dasherize(str){
      return str.replace(/\s+/g, '-').toLowerCase(); 
    }

    return vm;
  }
})();
