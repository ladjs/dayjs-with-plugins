const dayjs = require('dayjs');
const debug = require('debug')('dayjs-with-plugins');

[
  'advancedFormat',
  'badMutable',
  'buddhistEra',
  'calendar',
  'customParseFormat',
  'dayOfYear',
  'isBetween',
  'isLeapYear',
  'isMoment',
  'isSameOrAfter',
  'isSameOrBefore',
  'isoWeeksInYear',
  'localeData',
  'localizedFormat',
  'minMax',
  'quarterOfYear',
  'relativeTime',
  'toArray',
  'toObject',
  'utc',
  'weekOfYear',
  'weekYear',
  'weekday'
].forEach(pluginName => {
  try {
    const plugin = require(`dayjs/plugin/${pluginName}`);
    dayjs.extend(plugin);
    debug(`added ${plugin} plugin to dayjs with dayjs.extend`);
  } catch (err) {
    debug(err);
  }
});

module.exports = dayjs;
