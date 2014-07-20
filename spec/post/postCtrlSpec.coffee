describe 'PostCtrl', ->

  beforeEach(module('cth'))

  beforeEach ->
    inject ($injector) ->
      Post = $injector.get 'Post'
      $q = $injector.get '$q'
      $httpBackend = $injector.get '$httpBackend'

      $controller = $injector.get '$controller'
      @$rootScope = $injector.get '$rootScope'

      $httpBackend.expectGET().respond()

      deferred = $q.defer()
      deferred.resolve [
        title: "Hello World"
        images: [
          {url: "#/images/test0.jpg"}
        ]
      ,
        title: "Goodbye Day"
        images: [
          {url: "#/images/test1.jpg"}
        ],
        selected: true
      ]

      spyOn(Post, 'getAll').and.returnValue(deferred.promise)
      @scope = @$rootScope.$new()
      @PostCtrl = $controller('PostCtrl', {$scope: @scope})

  describe 'post property', ->
    describe 'object retrieval', ->
      beforeEach ->
        inject () ->
          @$rootScope.$apply()
          @posts = @PostCtrl.posts

      it 'is only defined after it calls the post service', ->
        expect(@posts).toBeDefined

      it 'is an Array', ->
        expect(Array.isArray(@posts)).toBeTruthy()

      it 'contains objects with an id property that is the dasherized version of title', ->
        expect(@posts[0].id).toBe("hello-world")
        expect(@posts[1].id).toBe("goodbye-day")

      it 'contains objects with the correct headerImage property', ->
        expect(@posts[0].headerImage.url).toBe("#/images/test0.jpg")
        expect(@posts[1].headerImage.url).toBe("#/images/test1.jpg")

  describe 'selecting and expanding posts', ->
    beforeEach ->
      inject ($injector) ->
        @$state = $injector.get '$state'
        spyOn(@PostCtrl, 'checkIfSelected').and.callThrough()

    describe 'without url', ->
      beforeEach ->
        @$rootScope.$apply()
        @posts = @PostCtrl.posts
        
      it 'has no selected posts after retrieval', ->
        hasSelectedPost = _.some(@posts, 'selected')
        expect(hasSelectedPost).toBe(false)

    describe 'with url', ->
      beforeEach ->
        @$state.params.post_id = "hello-world"
        @$rootScope.$apply()
        @posts = @PostCtrl.posts
        @PostCtrl.checkIfSelected()
        @selectedPosts = _.filter(@posts, 'selected')
        
      it 'has one selected posts if page corresponds', ->

        expect(@selectedPosts.length).toBe(1)

      it 'has the right title', ->
        expect(@selectedPosts[0].expanded).toBe(true)

      it 'is expanded', ->
        expect(@selectedPosts[0].expanded).toBe(true)

      describe 'when selection changes', ->
        beforeEach ->
          @$state.params.post_id = "goodbye-day"
          @$rootScope.$apply()
          @PostCtrl.checkIfSelected()
          @selectedPosts = _.filter(@posts, 'selected')
          @expandedPosts = _.filter(@posts, 'expanded')

        it 'still has one selected post', ->
          expect(@selectedPosts.length).toBe(1)

        it 'has the correct new title', ->
          expect(@selectedPosts[0].id).toBe("goodbye-day")

        it 'leaves the other post expanded', ->
          expect(@expandedPosts.length).toBe(2)
