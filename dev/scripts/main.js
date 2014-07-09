(function () {
  'use strict';

  Ember.Handlebars.helper('convert-markdown', function(markdown) {
    return new Ember.Handlebars.SafeString(marked(markdown));
  });

  var App = Ember.Application.create({
    LOG_TRANSITIONS: true
  });

  App.Router.map(function() {
    this.resource('posts');
    this.resource('post', {path: '/posts/:post_id'});
  });


  App.IndexRoute = Ember.Route.extend({
    beforeModel: function() {
      this.transitionTo('posts');
    }
  });


  App.Post = Ember.Object.extend({
  });

  App.Post.reopenClass({
    findAll: function () {
      return Ember.$.getJSON('api/posts.json').then(function(response){
        return response.posts.map(function(post){
          post.id = post.title.dasherize();
          post.postContent = post.content;
          return post;
        });
      });
    },
    find: function(params){
      return this.findAll().then(function(posts){
        posts[0].isChosen = true;
        return posts[0];
      });
    }
  });

  App.PostsRoute = Ember.Route.extend({
    model: function(params) {
      return App.Post.findAll();
    }
  });

  App.PostRoute = Ember.Route.extend({
    model: function(params){
      return App.Post.findAll().then(function(posts){
        return _.map(posts, function(post){
          if(params.post_id === post.id){
            post.isExpanded = true;
          }
          return post;
        });
      })
    }
  });

  App.ApplicationController = Ember.Controller.extend({
    actions: {
      toggleOpen: function(){
        this.toggleProperty('isOpen');
      },
    },
    isOpen: false
  });

  App.PostItemView = Ember.View.extend({
    tagName: 'section',
    classNames: ['featured-spotlight'],
    classNameBindings: ['controller.isExpanded:expanded']
  });
})();

// function legacyStuff(){
//   var querySelector = document.querySelector.bind(document);

//   var navdrawerContainer = querySelector('.navdrawer-container');
//   var appbarElement = querySelector('.app-bar');
//   var menuBtn = querySelector('.menu');
//   var main = querySelector('main');
//   console.log(main);


//   function closeMenu() {
//     appbarElement.classList.remove('open');
//     navdrawerContainer.classList.remove('open');
//   }

//   function toggleMenu() {
//     appbarElement.classList.toggle('open');
//     navdrawerContainer.classList.toggle('open');
//   }

//   main.addEventListener('click', closeMenu);
//   menuBtn.addEventListener('click', toggleMenu);
//   navdrawerContainer.addEventListener('click', function (event) {
//     if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
//       closeMenu();
//     }
//   });
// };

