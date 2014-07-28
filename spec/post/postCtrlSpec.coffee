dasherize = (str)->
  str.replace(/\s+/g, '-').toLowerCase()

describe 'PostCtrl', ->

  beforeEach(module('cth'))

  posts = [
    title: "Hello World"
    images: [
      url: "#/images/test0.jpg"
    ]
  ,
    title: "Goodbye Day"
    images: [
      url: "#/images/test1.jpg"
    ]
    selected: true
  ]

  firstPostId = dasherize(posts[0].title)
  secondPostId = dasherize(posts[1].title)

  beforeEach ->
    inject ($injector) ->
      Post = $injector.get 'Post'
      $q = $injector.get '$q'
      $httpBackend = $injector.get '$httpBackend'

      $controller = $injector.get '$controller'
      @$rootScope = $injector.get '$rootScope'

      $httpBackend.expectGET().respond()

      deferred = $q.defer()
      deferred.resolve(posts)
      spyOn(Post, 'getAll').and.returnValue(deferred.promise)
      @scope = @$rootScope.$new()
      @PostCtrl = $controller('PostCtrl', {$scope: @scope})


  describe 'posts property', ->
    describe 'object retrieval', ->
      beforeEach ->
        inject () ->
          @$rootScope.$apply()
          @posts = @PostCtrl.posts

      it 'is only defined after it calls the post service', ->
        expect(@posts).toBeDefined

      it 'is an Array', ->
        expect(Array.isArray(@posts)).toBeTruthy()

  xdescribe 'selecting and expanding posts', ->
    beforeEach ->
      inject ($injector) ->
        @$state = $injector.get '$state'
        @$rootScope.$apply()
        @posts = @PostCtrl.posts

    describe 'without url', ->
      it 'has no selected posts after retrieval', ->
        hasSelectedPost = _.some(@posts, 'selected')
        expect(hasSelectedPost).toBe(false)

    describe 'with url', ->
      beforeEach ->
        @$state.params.post_id = firstPostId
        @$rootScope.$broadcast('itemSelected')
        @selectedPosts = _.filter(@posts, 'selected')
        
      it 'has one selected posts if page corresponds', ->
        expect(@selectedPosts.length).toBe(1)

      it 'has the right title', ->
        expect(@selectedPosts[0].title).toBe(posts[0].title)

      it 'is expanded', ->
        expect(@selectedPosts[0].expanded).toBe(true)

      describe 'when selection changes', ->
        beforeEach ->
          @$state.params.post_id = secondPostId
          @$rootScope.$broadcast('itemSelected')
          @selectedPosts = _.filter(@posts, 'selected')
          @expandedPosts = _.filter(@posts, 'expanded')

        it 'still has one selected post', ->
          expect(@selectedPosts.length).toBe(1)

        it 'has the correct new title', ->
          expect(@selectedPosts[0].title).toBe(posts[1].title)

        it 'leaves the other post expanded', ->
          expect(@expandedPosts.length).toBe(2)

