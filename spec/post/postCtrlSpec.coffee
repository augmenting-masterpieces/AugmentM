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

  beforeEach ->
    inject ($injector) ->
      Post = $injector.get 'Post'
      $q = $injector.get '$q'

      @controllerConstructor = $injector.get '$controller'
      @$rootScope = $injector.get '$rootScope'
      @$state = $injector.get '$state'

      @deferred = $q.defer()
      @scope = @$rootScope.$new()

      spyOn(Post, 'getAll').and.returnValue(@deferred.promise)



  describe 'posts property', ->
    describe 'object retrieval', ->
      beforeEach ->
        @deferred.resolve(posts)
        @PostCtrl = @controllerConstructor('PostCtrl', {$scope: @scope})
        @$rootScope.$apply()
        @posts = @PostCtrl.posts

      it 'is only defined after it calls the post service', ->
        expect(@posts).toBeDefined

      it 'is an Array', ->
        expect(Array.isArray(@posts)).toBeTruthy()

  describe 'selecting and expanding posts', ->

    describe 'without url', ->
      beforeEach ->
        @$state.params.post_id = ""
        @deferred.resolve(posts)
        @PostCtrl = @controllerConstructor('PostCtrl', {$scope: @scope})
        @$rootScope.$apply()
        @posts = @PostCtrl.posts
        @selectedPosts = _.filter(@posts, 'selected')

      it 'has the first posts selected after retrieval', ->
        expect(@selectedPosts.length).toBe(1)

      it 'has the right title', ->
        expect(@selectedPosts[0].title).toBe(posts[0].title)

      it 'is not expanded', ->
        expect(@selectedPosts[0].expanded).toBe(undefined)

    describe 'with url', ->
      beforeEach ->
        @$state.params.post_id = "goodbye-day"
        @deferred.resolve(posts)
        @PostCtrl = @controllerConstructor('PostCtrl', {$scope: @scope})
        @$rootScope.$apply()
        @posts = @PostCtrl.posts
        @selectedPosts = _.filter(@posts, 'selected')
        
      it 'has one selected posts if page corresponds', ->
        expect(@selectedPosts.length).toBe(1)

      it 'has the right title', ->
        expect(@selectedPosts[0].title).toBe(posts[1].title)

      it 'is expanded', ->
        expect(@selectedPosts[0].expanded).toBe(true)

      describe 'when selection changes', ->
        beforeEach ->
          @$state.params.postId = "hello-world"
          @selectedPosts = _.filter(@posts, 'selected')
          @expandedPosts = _.filter(@posts, 'expanded')

        it 'still has one selected post', ->
          expect(@selectedPosts.length).toBe(1)

        xit 'has the correct new title', ->
          expect(@selectedPosts[0].title).toBe(posts[0].title)

        xit 'leaves the other post expanded', ->
          expect(@expandedPosts.length).toBe(2)
