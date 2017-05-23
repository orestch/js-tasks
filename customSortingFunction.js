/**
 * List of events
 */
var events = [
  {
    id: 3,
    name: 'evaluation meeting',
    date: '25 May 2017'
  },
  {
    id: 1,
    name: 'new year',
    date: '01 Jan 2017'
  },
  {
    id: 2,
    name: 'workday launch',
    date: '22 May 2017'
  },
];

/**
 * Compares two numbers. If the value returned is less than 0, sort a to an index lower than b, i.e. a comes first.
 * If the function returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
 * If the value returned is greater than 0, sort b to a lower index than a.
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} Diff between a and b
 */
function compareById(a, b) {
  return a.id - b.id;
}

/**
 * Compares two strings in Unicode code point order.
 * @param {String} a
 * @param {String} b
 * @returns {Number} -1, 0 or 1
 */
function compareByName(a, b) {
  var firstEventName = a.name.toLowerCase(), secondEventName = b.name.toLowerCase();

  if(firstEventName < secondEventName) return -1;
  if(firstEventName > secondEventName) return 1;

  return 0;
}

/**
 * Compares two dates
 * @param {String} a
 * @param {String} b
 * @returns {Number} Diff between a and b (milliseconds elapsed between 1 January 1970 00:00:00 UTC and given diff).
 */
function compareByDate(a, b) {
  return new Date(a.date) - new Date(b.date);
}

// Test it
console.log('Sort by id:\n', JSON.stringify(events.sort(compareById)));
console.log('Sort by name:\n', JSON.stringify(events.sort(compareByName)));
console.log('Sort by date:\n', JSON.stringify(events.sort(compareByDate)));
