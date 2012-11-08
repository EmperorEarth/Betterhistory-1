class BH.Models.Day extends BH.Models.Base
  initialize: (attrs, options) ->
    @settings = options.settings
    @set id: @get('date').format('M-D-YY')

  toHistory: ->
    date: @get('date')

  toTemplate: ->
    date = @get('date')
    properties =
      title: date.format(@t('day_date'))
      formalDate: date.format(@t('formal_date'))
      weekUrl: "#weeks/#{moment(date).past(@settings.get('startingWeekDay'), 0).format('M-D-YY')}"

    _.extend properties, @toJSON()
