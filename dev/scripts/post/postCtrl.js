(function(){
  'use strict';

  angular.module('cth').controller('PostCtrl', ['Post', '$scope', '$state', PostCtrl]);

  function PostCtrl(Post, $scope, $state){

    var vm = this;
    var oldSelectedPost;
    var selectedPost;

    Post.getAll().then(function(posts){

      var processedPosts = posts.map(function(post){
        post.headerImage = post.images[0];
        post.id  = dasherize(post.title);
        post.selected = false;
        return post;
      });
      vm.posts = processedPosts;
    });

    $scope.$on('itemSelected', function(){
      checkIfSelected();
    });

    $scope.toggleExpanded = function(post){
      post.expanded = !post.expanded;
    };

    function checkIfSelected(){
      var postId = $state.params.post_id;
      _.each(vm.posts, function(post){
        if(postId === post.id){
          selectedPost = post;
          selectPost();
        } else {
          deselectPost(post);
        }
      });
    }
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

    vm.checkIfSelected = checkIfSelected;
    return vm;
  }
})();
