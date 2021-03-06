var _            = require('lodash');
var loadEvents   = require('../data/loaders/archive-loader');

var events = loadEvents()
  .filter((event) => {
    return event.location.indexOf('г. Брест') === -1 &&
      event.location.indexOf('г. Гомель') === -1 &&
      event.location.indexOf('Krakow') === -1 &&
      event.location.indexOf('г. Гродно') === -1 &&
      event.location.indexOf('Gdansk') === -1;
  });

var currentEvent = events[0];

module.exports = {
  page: {
    title: 'RS | Minsk'
  },
  event: currentEvent
}
