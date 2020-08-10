const dayjs = require('dayjs');
const debug = require('debug')('dayjs-with-plugins');

[
  'advancedFormat',
  'badMutable',
  'buddhistEra',
  'calendar',
  'customParseFormat',
  'dayOfYear',
  'duration',
  'isBetween',
  'isLeapYear',
  'isMoment',
  'isSameOrAfter',
  'isSameOrBefore',
  'isToday',
  'isTomorrow',
  'isYesterday',
  'isoWeek',
  'isoWeeksInYear',
  'localeData',
  'localizedFormat',
  'minMax',
  'objectSupport',
  'pluralGetSet',
  'quarterOfYear',
  'relativeTime',
  'timezone',
  'toArray',
  'toObject',
  'updateLocale',
  'utc',
  'weekOfYear',
  'weekYear',
  'weekday'
].forEach((pluginName) => {
  try {
    const plugin = require(`dayjs/plugin/${pluginName}`);
    dayjs.extend(plugin);
    debug(`added ${plugin} plugin to dayjs with dayjs.extend`);
  } catch (err) {
    debug(err);
  }
});

module.exports = dayjs;
