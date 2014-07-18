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
        ]
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
