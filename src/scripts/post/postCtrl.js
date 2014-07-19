(function(){
  'use strict';

  angular.module('cth').controller('PostCtrl', ['Post', '$scope', '$state', PostCtrl]);

  function PostCtrl(Post, $scope, $state){

    var vm = this;
    var oldSelectedPost;
    var selectedPost;

    Post.getAll().then(function(posts){
      var postsWithImageProps = createImageProps(posts);
      var postsWithId = createPostIds(postsWithImageProps);
      vm.posts = postsWithId;
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

    function createPostIds(posts){
      return posts.map(function(post){
        post.id = dasherize(post.title);
        return post;
      }); 
    }

    function createImageProps(posts){
      return posts.map(function(post){
        post.headerImage = post.images[0];
        return post;
      }); 
    }

    function dasherize(str){
      return str.replace(/\s+/g, '-').toLowerCase(); 
    }

    return vm;
  }
})();
