describe 'PostItemCtrl', ->

  beforeEach(module('cth'))

  Post = ()->
    title: "Hello World"
    images: [
      url: "#/images/test0.jpg"
    ]


  beforeEach ->
    inject ($injector) ->
      @controllerConstructor = $injector.get '$controller'

      @scope = {}
      @scope.post = new Post

      @dasherize = spyOn(stringManipulators, 'dasherize').and.callThrough()
      @scrollToTop = spyOn(scroll, 'toTop')

      PostItemCtrl = @controllerConstructor 'PostItemCtrl',
        $scope: @scope
        $element: {}
        stringManipulators: stringManipulators
        scroll: scroll

      @post = PostItemCtrl.post

  describe 'post property', ->
     it 'has the correct id', ->
       expect(@dasherize).toHaveBeenCalledWith 'Hello World'
       expect(@post.id).not.toBe undefined

     it 'has the correct headerImage property', ->
       expect(@post.headerImage.url).toBe "#/images/test0.jpg"
  
  describe 'post expansion', ->
    it "toggles state", ->
      @scope.toggleExpanded()
      expect(@post.expanded).toBe(true)
      @scope.toggleExpanded()
      expect(@post.expanded).toBe(false)

  xdescribe 'selection', ->
    describe 'not selected', ->
      it 'does not scroll to top if not selected', ->
        expect(@scrollToTop).not.toHaveBeenCalled()

    describe 'selected', ->

      beforeEach ->
        @scope.post.selected = true
        PostItemCtrl = @controllerConstructor 'PostItemCtrl',
          $scope: @scope
          $element: "<p></p>"
          stringManipulators: stringManipulators
          scroll: scroll
        @post = PostItemCtrl.post

      it 'scroll to top if selected', ->
        expect(@scrollToTop).toHaveBeenCalledWith("<p></p>")

  stringManipulators =
    dasherize: (string) ->
      return 'hello-world'

  scroll =
    toTop: (element) ->
