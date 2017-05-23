/**
 * Browsers and corresponding RegExps list
 */
var browsers = [
  {
    name: 'Edge',
    regexp: /Edge\/([0-9\._]+)/
  },
  {
    name: 'Mozilla Firefox',
    regexp: /Firefox\/([0-9\.]+)(?:\s|$)/
  },
  {
    name: 'Internet Explorer',
    regexp: /Trident\/7\.0.*rv\:([0-9\.]+)\).*Gecko$/
  },
  {
    name: 'Internet Explorer',
    regexp: /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/
  },
  {
    name: 'Internet Explorer',
    regexp: /MSIE\s(7\.0)/
  },
  {
    name: 'Opera',
    regexp: /OPR\/([0-9\.]+)(:?\s|$)$/
  },
  {
    name: 'Opera',
    regexp: /Opera\/([0-9\.]+)(?:\s|$)/
  },
  {
    name: 'Apple Safari',
    regexp: /Version\/([0-9\._]+).*Safari/
  },
  {
    name: 'Google Chrome',
    regexp: /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  }
];

/**
 * Detects browser based on userAgent information with the help of RegExp
 * @param {String} userAgent
 * @returns {String} Browser name
 */
function detectBrowser(userAgent) {
  if (!userAgent) return null;

  try {
      return browsers.filter(function(browser) {
        return browser.regexp.test(userAgent);
      }).shift().name;
  } catch(e) {
      return 'not detected';
  }
}

// Test it
alert('Your browser is ' + detectBrowser(navigator.userAgent));
