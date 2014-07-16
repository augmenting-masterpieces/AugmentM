(function(){
  'use strict';

  angular.module('cth').controller('PostCtrl', ['Post', '$http', '$stateParams', '$rootScope', PostCtrl]);

  function PostCtrl(Post, $http, $stateParams, $rootScope){

    var vm = this;

    Post.getAll().then(function(posts){
      var postsWithId = createPostIds(posts);
      vm.posts = selectPost(postsWithId);
    });

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams){
      var params = toParams.post_id || "no params";
      var selectedPost = selectPost(vm.posts, params);
      vm.posts = selectedPost; 
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
