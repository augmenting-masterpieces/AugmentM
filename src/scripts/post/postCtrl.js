(function(){
  'use strict';

  angular.module('cth').controller('PostCtrl', ['Post', '$scope', '$timeout', '$state', PostCtrl]);

  function PostCtrl(Post, $scope, $timeout, $state){

    var vm = this;

    Post.getAll().then(function(posts){
      var postsWithId = createPostIds(posts);
      vm.posts = postsWithId;
    });

    vm.togglePost = function(post){
      console.log(post);
    };

    $scope.$on('itemSelected', function(){
      deSelectPost();
      selectPost();
    });

    function deSelectPost(){
      _.each(vm.posts, function(post){
        post.selected = false;
      });
    }

    function selectPost(){
      var postId = $state.params.post_id;
      _.each(vm.posts, function(post){
        if(postId === post.id){
          post.selected = true;
        }
      });
    }

    function createPostIds(posts){
      return posts.map(function(post){
        post.id = dasherize(post.title);
        return post;
      }); 
    }

    function dasherize(str){
      return str.replace(/\s+/g, '-').toLowerCase(); 
    }

    return vm;
  }
})();
