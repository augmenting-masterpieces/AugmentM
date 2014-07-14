describe 'PostController', ->

  $controllerConstructor = {}
  scope = {}

  beforeEach(module('cth'))

  beforeEach ->
    inject ($controller, $rootScope) ->
      $controllerConstructor = $controller
      scope = $rootScope.$new()

  it 'should have three post items', ->
    ctrl = $controllerConstructor('PostCtrl', {$scope:scope})
    expect(ctrl.posts.length).toBe(3)
