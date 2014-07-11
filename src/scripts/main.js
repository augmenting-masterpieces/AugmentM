(function () {
  'use strict';

  Ember.Handlebars.helper('convert-markdown', function(markdown) {
    return new Ember.Handlebars.SafeString(marked(markdown));
  });

  var App = Ember.Application.create({
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
            post.isSelected = true;
          }
          return post;
        });
      });
    },
    actions: {
      willTransition: function(transition){
        console.log(Ember.$(window).scrollTop());
      }
    }
  });

  App.ApplicationController = Ember.Controller.extend({
    actions: {
      toggleOpen: function(){
        this.toggleProperty('isOpen');
      }
    },
    isOpen: false
  });

  App.PostController = Ember.ArrayController.extend({
    actions: {
      viewUpdated: function(message){
      } 
    },
    activeObject: function(){
      this.toggleProperty('isTriggered');
    }.observes('model')
  });

  App.PostView = Ember.View.extend({
    scrollTo: function(){
      Ember.run.next(this, function(){
        if(this.$('.expanded')){
          $('html, body').animate({
            scrollTop: this.$('.expanded').offset().top
          }, 500);
        }
      });
    }.observes('controller.isTriggered'),
  });

  App.PostItemController = Ember.ObjectController.extend({
    actions: {
      toggleArticle: function(){
        this.toggleProperty('isOpen');
      },
    },
    isActive: function(){
      if(this.get('isSelected')){
        this.set('isOpen', true);
        return true;
      }
      return false;
    }.property('isSelected'),
    isOpen: false
  });


  App.PostItemView = Ember.View.extend({
    tagName: 'section',
    classNames: ['featured-spotlight'],
    classNameBindings: ['controller.isOpen:expanded', 'controller.id'],
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

