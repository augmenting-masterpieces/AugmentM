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
      @controllerConstructor = $injector.get '$controller'
      @$state = $injector.get '$state'
      @$rootScope = $injector.get '$rootScope'


  describe 'posts property', ->
    describe 'object retrieval', ->
      beforeEach ->
        @$scope = @$rootScope.$new @$rootScope

        @PostCtrl = @controllerConstructor 'PostCtrl',
          $scope: @$scope
          posts: posts
        @posts = @PostCtrl.posts

      it 'is only defined after it calls the post service', ->
        expect(@posts).toBeDefined()

      it 'is an Array', ->
        expect((@posts).length).toBe(2)

  describe 'selecting and expanding posts', ->

    describe 'without url', ->
      beforeEach ->
        @$state.params.post_id = ""
        @$scope = @$rootScope.$new @$rootScope

        @PostCtrl = @controllerConstructor 'PostCtrl',
          $scope: @$scope
          posts: posts
        @selectedPosts = _.filter(@PostCtrl.posts, 'selected')

      it 'has the first posts selected after retrieval', ->
        expect(@selectedPosts.length).toBe(1)

      it 'has the right title', ->
        expect(@selectedPosts[0].title).toBe('Hello World')

      it 'is not expanded', ->
        expect(@selectedPosts[0].expanded).toBe(undefined)

    describe 'with url', ->
      beforeEach ->
        @$state.params.post_id = "goodbye-day"
        @$scope = @$rootScope.$new @$rootScope

        @PostCtrl = @controllerConstructor 'PostCtrl',
          $scope: @$scope
          posts: posts
        @selectedPosts = _.filter(@PostCtrl.posts, 'selected')
        
      it 'has one selected posts if page corresponds', ->
        expect(@selectedPosts.length).toBe(1)

      it 'has the right title', ->
        expect(@selectedPosts[0].title).toBe('Goodbye Day')

      it 'is expanded', ->
        expect(@selectedPosts[0].expanded).toBe(true)

      describe 'when selection changes', ->
        beforeEach ->
          @$rootScope.$broadcast '$stateChangeSuccess', {},
            post_id: "hello-world"
          @selectedPosts = _.filter(@PostCtrl.posts, 'selected')
          @expandedPosts = _.filter(@PostCtrl.posts, 'expanded')

        it 'still has one selected post', ->
          expect(@selectedPosts.length).toBe(1)

        it 'has the correct new title', ->
          expect(@selectedPosts[0].title).toBe(posts[0].title)

        it 'leaves the other post expanded', ->
          expect(@expandedPosts.length).toBe(2)
