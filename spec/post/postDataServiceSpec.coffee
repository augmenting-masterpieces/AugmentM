describe 'postDataService', ->
  service = {}
  $httpBackend = {}

  beforeEach(module('cth'))

  beforeEach inject ($injector) ->
    service = $injector.get('postDataService')
    $httpBackend = $injector.get('$httpBackend') 

   afterEach ->
     $httpBackend.verifyNoOutstandingExpectation()
     $httpBackend.verifyNoOutstandingRequest()

  it "makes an ajax call to '/api/posts.json'", ->
    $httpBackend.expectGET('api/posts.json').respond({})
    service.getPosts().then()
    $httpBackend.flush()
