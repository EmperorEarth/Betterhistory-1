// Generated by CoffeeScript 1.3.1
(function() {

  moment.lang('en', {
    months: [chrome.i18n.getMessage('january'), chrome.i18n.getMessage('february'), chrome.i18n.getMessage('march'), chrome.i18n.getMessage('april'), chrome.i18n.getMessage('may'), chrome.i18n.getMessage('june'), chrome.i18n.getMessage('july'), chrome.i18n.getMessage('august'), chrome.i18n.getMessage('september'), chrome.i18n.getMessage('october'), chrome.i18n.getMessage('november'), chrome.i18n.getMessage('december')],
    monthsShort: [chrome.i18n.getMessage('january_short'), chrome.i18n.getMessage('february_short'), chrome.i18n.getMessage('march_short'), chrome.i18n.getMessage('april_short'), chrome.i18n.getMessage('may_short'), chrome.i18n.getMessage('june_short'), chrome.i18n.getMessage('july_short'), chrome.i18n.getMessage('august_short'), chrome.i18n.getMessage('september_short'), chrome.i18n.getMessage('october_short'), chrome.i18n.getMessage('november_short'), chrome.i18n.getMessage('december_short')],
    weekdays: [chrome.i18n.getMessage('sunday'), chrome.i18n.getMessage('monday'), chrome.i18n.getMessage('tuesday'), chrome.i18n.getMessage('wednesday'), chrome.i18n.getMessage('thursday'), chrome.i18n.getMessage('friday'), chrome.i18n.getMessage('saturday')],
    weekdaysShort: [chrome.i18n.getMessage('sunday_short'), chrome.i18n.getMessage('monday_short'), chrome.i18n.getMessage('tuesday_short'), chrome.i18n.getMessage('wednesday_short'), chrome.i18n.getMessage('thursday_short'), chrome.i18n.getMessage('friday_short'), chrome.i18n.getMessage('sunday_short')],
    longDateFormat: {
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    meridiem: {
      AM: chrome.i18n.getMessage('morning'),
      am: chrome.i18n.getMessage('morning'),
      PM: chrome.i18n.getMessage('evening'),
      pm: chrome.i18n.getMessage('evening')
    },
    calendar: {
      sameDay: "[Ajourd'hui à] LT",
      nextDay: '[Demain à] LT',
      nextWeek: 'dddd [à] LT',
      lastDay: '[Hier à] LT',
      lastWeek: 'dddd [denier à] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: "in %s",
      past: "il y a %s",
      s: "secondes",
      m: "une minute",
      mm: "%d minutes",
      h: "une heure",
      hh: "%d heures",
      d: "un jour",
      dd: "%d jours",
      M: "un mois",
      MM: "%d mois",
      y: "une année",
      yy: "%d années"
    },
    ordinal: function(number) {
      return chrome.i18n.getMessage("ordinal_" + number);
    }
  });

}).call(this);
