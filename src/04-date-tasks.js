/* *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Date_object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date     *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Parses a rfc2822 string date representation into date value
 * For rfc2822 date specification refer to : http://tools.ietf.org/html/rfc2822#page-14
 *
 * @param {string} value
 * @return {date}
 *
 * @example:
 *    'December 17, 1995 03:24:00'    => Date()
 *    'Tue, 26 Jan 2016 13:48:02 GMT' => Date()
 *    'Sun, 17 May 1998 03:00:00 GMT+01' => Date()
 */
function parseDataFromRfc2822(value) {
  const date = new Date(value);
  const year = +date.toLocaleString('en', { year: 'numeric' });
  const month = +date.toLocaleString('en', { month: 'numeric' });
  const day = +date.toLocaleString('en', { day: 'numeric' });
  const hour = +date.toLocaleString('ru', { hour: 'numeric' });
  const minute = +date.toLocaleString('en', { minute: 'numeric' });
  const second = +date.toLocaleString('en', { second: 'numeric' });

  const res = new Date(year, month - 1, day, hour, minute, second).valueOf();
  return res;
}

/**
 * Parses an ISO 8601 string date representation into date value
 * For ISO 8601 date specification refer to : https://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {string} value
 * @return {date}
 *
 * @example :
 *    '2016-01-19T16:07:37+00:00'    => Date()
 *    '2016-01-19T08:07:37Z' => Date()
 */
function parseDataFromIso8601(value) {
  const date = new Date(value).valueOf();
  return date;
}


/**
 * Returns true if specified date is leap year and false otherwise
 * Please find algorithm here: https://en.wikipedia.org/wiki/Leap_year#Algorithm
 *
 * @param {date} date
 * @return {bool}
 *
 * @example :
 *    Date(1900,1,1)    => false
 *    Date(2000,1,1)    => true
 *    Date(2001,1,1)    => false
 *    Date(2012,1,1)    => true
 *    Date(2015,1,1)    => false
 */
function isLeapYear(date) {
  const locDate = new Date(date);
  const year = +locDate.toLocaleString('en', { year: 'numeric' });

  if (year % 4 !== 0) {
    return false;
  // eslint-disable-next-line no-else-return
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}


/**
 * Returns the string represention of the timespan between two dates.
 * The format of output string is "HH:mm:ss.sss"
 *
 * @param {date} startDate
 * @param {date} endDate
 * @return {string}
 *
 * @example:
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,11,0,0)   => "01:00:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,30,0)       => "00:30:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,20)        => "00:00:20.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,0,250)     => "00:00:00.250"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,15,20,10,453)   => "05:20:10.453"
 */
function timeSpanToString(startDate, endDate) {
  const stamp1 = new Date(startDate);
  const stamp2 = new Date(endDate);
  let ms = (stamp2 - stamp1) % 1000;
  if (ms < 10) ms = `00${ms}`;
  if (ms < 100 && ms > 9) ms = `0${ms}`;

  const time1 = new Date(startDate).toLocaleTimeString();
  const time2 = new Date(endDate).toLocaleTimeString();
  const arr1 = time1.split(':');
  const arr2 = time2.split(':');

  let timeDiff = arr2.map((i, idx) => i - arr1[idx]);
  timeDiff = timeDiff.map((i) => {
    let unit = null;
    unit = (i < 10) ? `0${i}` : `${i}`;
    return unit;
  });

  const res = `${timeDiff[0]}:${timeDiff[1]}:${timeDiff[2]}.${ms}`;
  return res;
}


/**
 * Returns the angle (in radians) between the hands of an analog clock
 * for the specified Greenwich time.
 * If you have problem with solution please read: https://en.wikipedia.org/wiki/Clock_angle_problem
 *
 * @param {date} date
 * @return {number}
 *
 * @example:
 *    Date.UTC(2016,2,5, 0, 0) => 0
 *    Date.UTC(2016,3,5, 3, 0) => Math.PI/2
 *    Date.UTC(2016,3,5,18, 0) => Math.PI
 *    Date.UTC(2016,3,5,21, 0) => Math.PI/2
 */
function angleBetweenClockHands(/* date */) {
  throw new Error('Not implemented');
}


module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
};
