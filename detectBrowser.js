const browsers = [
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

function detectBrowser(userAgent) {
  if (!userAgent) return null;

  return browsers.filter(browser => browser.regexp.test(userAgent)).shift().name;
}

console.log('Your browser is', detectBrowser(navigator.userAgent));
