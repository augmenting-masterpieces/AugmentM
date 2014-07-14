describe 'postDataService', ->
  postDataService = {}

  beforeEach(module('cth'))

  beforeEach inject ($injector) ->
    postDataService = $injector.get('postDataService')

  it 'returns 3 posts', ->
    expect(postDataService.getPosts().length).toBe(3)
