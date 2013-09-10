errorTracker = new BH.Trackers.ErrorTracker(Honeybadger)
analyticsTracker = new BH.Trackers.AnalyticsTracker(_gaq)

localStore = new BH.Lib.LocalStore
  chrome: chrome
  tracker: analyticsTracker

persistence = new BH.Persistence.Tag
  localStore: localStore

chrome.tabs.query active: true, (tabs) =>
  tab = tabs[0] || {}

  attrs =
    title: tab.title
    url: tab.url

  site = new BH.Models.Site attrs,
    chrome: chrome
    persistence: persistence

  taggingView = new BH.Views.TaggingView
    el: $('.app')
    model: site
    tracker: analyticsTracker
  taggingView.render()

  site.fetch()
