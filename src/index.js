const { debuglog } = require('util');

const dayjs = require('dayjs');
const locales = require('dayjs/locale.json');

const debug = debuglog('dayjs-with-plugins');

const plugins = [
  'advancedFormat',
  'arraySupport',
  'badMutable',
  'buddhistEra',
  'calendar',
  'customParseFormat',
  'dayOfYear',
  'devHelper',
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
  'preParsePostFormat',
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
];

for (const plugin of plugins) {
  try {
    dayjs.extend(require(`dayjs/plugin/${plugin}`));
    debug(`added ${plugin} plugin to dayjs with dayjs.extend`);
  } catch (err) {
    debug(err);
  }
}

// load locales
// <https://github.com/iamkun/dayjs/issues/1041>
for (const locale of locales) {
  try {
    dayjs.locale(require(`dayjs/locale/${locale}`), null, true);
    debug(`added ${locale} locale to dayjs with dayjs.locale`);
  } catch (err) {
    debug(err);
  }
}

module.exports = dayjs;
