(function () {
  'use strict';

  Ember.Handlebars.helper('convert-markdown', function(markdown) {
    return new Ember.Handlebars.SafeString(marked(markdown));
  });

  var App = Ember.Application.create();

  App.ApplicationController = Ember.Controller.extend({
    actions: {
      toggleOpen: function(){
        this.toggleProperty('isOpen');
      },
    },
    isOpen: false
  });

  App.Router.map(function() {
    this.resource('posts', {path: '/'});
  });

  App.PostsRoute = Ember.Route.extend({
    model: function () {
      return Ember.$.getJSON('api/posts.json').then(function(response){
        response.posts.forEach(function(post){
          console.log(post.posted);
        });
        return response.posts;
      });
    }
  });

  App.PostSnippetComponent = Ember.Component.extend({
    classNames: ['featured-spotlight'],
    classNameBindings: ['isExpanded:expanded'],
    actions: {
      toggleExpanded: function(){
        this.toggleProperty('isExpanded');
      }
    },
    isExpanded: false
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

