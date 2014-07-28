describe 'AppCtrl', ->

  beforeEach(module('cth'))

  beforeEach ->
    inject ($injector) ->
      $controller = $injector.get '$controller'
      @$rootScope = $injector.get '$rootScope'
      @scope = @$rootScope.$new()
      @AppCtrl = $controller('AppCtrl', {$scope: @scope})

  describe 'setting post order', ->
    it 'should order them by posted date in descending order', ->
      expect(@AppCtrl.postOrder).toBe('-posted')

  describe 'setting post filter', ->
    beforeEach ->
      inject ($injector) ->
        @$state = $injector.get '$state'
        spyOn(@$state, 'go')
      
    it 'should show all posts as default', ->
      expect(@AppCtrl.postFilter).toBe('')

    it 'should show subset after selection', ->
      @AppCtrl.setFilter('about')
      expect(@AppCtrl.postFilter).toBe('about')

    it 'transitions to the posts state after selection', ->
      @AppCtrl.setFilter('posts')
      expect(@$state.go).toHaveBeenCalledWith('posts')

    it 'has set the active property on the corresponding tag', ->
      @AppCtrl.setFilter('about')
      tag = _.find @AppCtrl.tags, (tag) ->
        tag.filter == 'about'
      expect(tag.active).toBe(true)
