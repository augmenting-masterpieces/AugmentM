describe 'AppCtrl', ->

  beforeEach(module('cth'))

  beforeEach ->
    inject ($injector) ->
      $controller = $injector.get '$controller'
      @$rootScope = $injector.get '$rootScope'
      @scope = @$rootScope.$new()
      @AppCtrl = $controller('AppCtrl', {$scope: @scope})

  describe 'navbar', ->
    it 'is closed by default', ->
      expect(@AppCtrl.navbarOpen).toBe(false)

    it 'can toggle state', ->
      @AppCtrl.toggleNavDrawer()
      expect(@AppCtrl.navbarOpen).toBe(true)

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

    it 'toggles navbar state after selecting filter', ->
      expect(@AppCtrl.navbarOpen).toBe(false)
      @AppCtrl.setFilter('about')
      expect(@AppCtrl.navbarOpen).toBe(true)
