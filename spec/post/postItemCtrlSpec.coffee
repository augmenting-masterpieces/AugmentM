dasherize = (str)->
  str.replace(/\s+/g, '-').toLowerCase()

describe 'PostCtrl', ->

  beforeEach(module('cth'))

  post =
    title: "Hello World"
    images: [
      url: "#/images/test0.jpg"
    ]

  postId = dasherize(post.title)

  beforeEach ->
    inject ($injector) ->
      Post = $injector.get 'Post'

      $controller = $injector.get '$controller'
      $rootScope = $injector.get '$rootScope'

      @scope = $rootScope.$new()
      @scope.post = post
      PostItemCtrl = $controller('PostItemCtrl', {$scope: @scope})
      @post = PostItemCtrl.post

  describe 'post property', ->
    
   it 'has the correct id', ->
    expect(@post.id).toBe(postId)

   it 'has the correct headerImage property', ->
     expect(@post.headerImage.url).toBe("#/images/test0.jpg")

  describe 'expanded function', ->
    it "toggles state", ->
      @scope.toggleExpanded()
      expect(post.expanded).toBe(true)
      @scope.toggleExpanded()
      expect(post.expanded).toBe(false)
