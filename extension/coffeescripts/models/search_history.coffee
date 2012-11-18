class BH.Models.SearchHistory extends Backbone.Model
  @include BH.Modules.I18n
  @include BH.Modules.historySupport

  initialize: ->
    @historyQuery = new BH.Lib.HistoryQuery(@chromeAPI)

  sync: (method, model, options) ->
    if method == 'read'
      @historyQuery.run @toChrome(), (history) ->
        options.success(history)

  toTemplate: ->
    @get('history').toTemplate grouped: false

  toChrome: ->
    text: @get('query')
    searching: true

  parse: (data) ->
    visits = new BH.Collections.Visits()

    for visit in data
      visits.add(new BH.Models.Visit(visit))

    history: visits
