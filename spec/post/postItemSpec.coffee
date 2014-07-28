describe 'postItem directive', ->

  beforeEach(module('cth'))
  beforeEach(module('post/postItem.html'))

  post =
    title: "Hello World"
    images:
      url: "#/images/test0.jpg"

  beforeEach ->
    inject ($injector, $state) ->
      @$scope = $injector.get '$rootScope'
      $compile = $injector.get '$compile'
      @$state = $injector.get '$state'
      @$scope.post = post
      @element = angular.element("<post-item post='post'></post-item>")
      $compile(@element)(@$scope)
      @$scope.$digest()

      @stateLink = @element.find('.state-link')
      @expansionLink = @element.find('.expansion-link')


  describe 'default state', ->
    it 'has a class of post', ->
      expect(@element.hasClass('post')).toBe(true)

    it 'does not have a class selected', ->
      expect(@element.hasClass('selected')).toBe(false)

    it 'has a visible state link', ->
      expect(@stateLink.hasClass('ng-hide')).toBe(false)

    it 'has an invisible expansion link', ->
      expect(@expansionLink.hasClass('ng-hide')).toBe(true)

  describe 'expand item', ->
    beforeEach ->
      @expansionLink.click()

    it 'toggles its expanded class', ->
      expect(@element.hasClass('expanded')).toBe(true)
      @expansionLink.click()
      expect(@element.hasClass('expanded')).toBe(false)


  describe 'selected item', ->
    beforeEach ->
      @$scope.post.selected = true;
      @$scope.$apply()

    it 'has a class of selected', ->
      expect(@element.hasClass('selected')).toBe(true)

    it 'does not have a visible state link', ->
      expect(@stateLink.hasClass('ng-hide')).toBe(true)

    it 'has a visible expansion link', ->
      expect(@expansionLink.hasClass('ng-hide')).toBe(false)
