describe 'postItem directive', ->

  beforeEach(module('cth'))
  beforeEach(module('post/postItem.html'))

  post =
    title: "Hello World"
    images:
      url: "#/images/test0.jpg"

  beforeEach ->
    inject ($injector) ->
      @$scope = $injector.get '$rootScope'
      $compile = $injector.get '$compile'
      @$scope.post = post
      @element = angular.element("<post-item post='post'></post-item>")
      $compile(@element)(@$scope)
      @$scope.$digest()

  it 'should have a class of post', ->
    expect(@element.hasClass('post')).toBe(true)
