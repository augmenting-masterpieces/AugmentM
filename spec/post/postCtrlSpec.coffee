describe 'PostCtrl', ->

  post = undefined
  scope = undefined

  beforeEach(module('cth'))

  beforeEach ->
    inject ($injector) ->
      post = $injector.get 'postDataService'
      spyOn(post, 'getPosts').andCallFake ->
        [1,2,3]
      $controller = $injector.get '$controller'
      $rootScope = $injector.get '$rootScope'
      scope = $rootScope.$new()
      PostCtrl = $controller('PostCtrl', {$scope: scope})

  it 'should call the post service', ->
    expect(post.getPosts).toHaveBeenCalled()
