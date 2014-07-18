(function(){
  'use strict';

  angular.module('cth').controller('PostCtrl', ['Post', '$scope', '$timeout', '$state', PostCtrl]);

  function PostCtrl(Post, $scope, $timeout, $state){

    var vm = this;

    Post.getAll().then(function(posts){
      var postsWithImageProps = createImageProps(posts);
      var postsWithId = createPostIds(postsWithImageProps);
      vm.posts = postsWithId;
    });

    $scope.$on('itemSelected', function(){
      deSelectPosts();
      selectPost();
    });

    $scope.toggleExpanded = function(post){
      post.expanded = !post.expanded;
    };

    function deSelectPosts(){
      _.each(vm.posts, function(post){
        post.selected = false;
      });
    }

    function selectPost(){
      var postId = $state.params.post_id;
      _.each(vm.posts, function(post){
        if(postId === post.id){
          console.log("selected: " + post.selected);
          console.log("expanded:" + post.expanded);
          post.selected = true;
          post.expanded = true;
        }
      });
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
