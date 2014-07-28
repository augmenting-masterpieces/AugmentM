dasherize = (str)->
  str.replace(/\s+/g, '-').toLowerCase()

describe 'PostItemCtrl', ->

  beforeEach(module('cth'))

  Post = ()->
    title: "Hello World"
    images: [
      url: "#/images/test0.jpg"
    ]

  beforeEach ->
    inject ($injector) ->
      @$controller = $injector.get '$controller'
      $rootScope = $injector.get '$rootScope'
      @stringManipulators = $injector.get 'stringManipulators'

      @scope = $rootScope.$new()
      @scope.post = new Post()
      @PostItemCtrl = @$controller('PostItemCtrl', {$scope: @scope})
      @post = @PostItemCtrl.post

  describe 'post property', ->
    beforeEach ->
      inject ($injector) ->

    it 'has the correct id', ->
      expect(@post.id).not.toBe(undefined)

   it 'has the correct headerImage property', ->
     expect(@post.headerImage.url).toBe("#/images/test0.jpg")

  describe 'expanded function', ->
    it "toggles state", ->
      @scope.toggleExpanded()
      expect(@PostItemCtrl.post.expanded).toBe(true)
      @scope.toggleExpanded()
      expect(@PostItemCtrl.post.expanded).toBe(false)

  # describe 'scrolling', ->
  #   beforeEach ->
  #     spyOn(@PostItemCtrl)
  #     expect(@PostItemCtrl).toHaveBeenCalled()

  #   it 'should scroll to top if selected', ->

