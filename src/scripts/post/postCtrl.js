(function(){
  'use strict';

  angular.module('cth').controller('PostCtrl', ['Post', '$http', '$stateParams', PostCtrl]);

  function PostCtrl(Post, $http, $stateParams){

    var vm = this;

    Post.getAll().then(function(posts){
      var postsWithId = createPostIds(posts);
      vm.posts = selectPost(postsWithId, $stateParams.post_id);
    });

    function selectPost(posts, params){
      return posts.map(function(post){
        post.selected = false;
        if(params === post.id){
          post.selected = true;
        }
        return post;
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
  }
})();
