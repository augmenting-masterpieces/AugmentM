(function(){
  'use strict';
  angular.module('cth').controller('PostCtrl', ['Post', '_', PostCtrl]);

  function PostCtrl(Post, _){

    var vm = this;

    Post.getAll().then(function(posts){
      var processedPosts = _.map(posts, function(post){
        post.selected = false;
        return post;
      });
      vm.posts = processedPosts;
    });

    function dasherize(str){
      return str.replace(/\s+/g, '-').toLowerCase(); 
    }

    return vm;
  }
})();
