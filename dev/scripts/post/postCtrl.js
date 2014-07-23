(function(){
  'use strict';

  angular.module('cth').controller('PostCtrl', ['Post', '$scope', '$state', '$rootScope', '_', PostCtrl]);

  function PostCtrl(Post, $scope, $state, $rootScope, _){

    var vm = this;
    var oldSelectedPost;
    var selectedPost;

    vm.postOrder = '-posted';
    vm.postFilter = '';

    vm.tags = [{
      name: 'About',
      filter: 'about'
    }, {
      name: 'Posts', 
      filter: 'post',
      active: true
    }, {
      name: 'Articles',
      filter: 'article'
    }, {
      name: 'All',
      filter: ''
    }];

    vm.setFilter = function(filter){
      vm.postFilter = filter;
      _.each(vm.tags, function(tag){
        tag.active = false;
        if(tag.filter === filter){
          tag.active = true;
        }
        return tag;
      });
      $state.go('posts');

    };

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
