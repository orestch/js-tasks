/**
 * Parses URL into hostname and params
 * @param {String} url
 * @returns {Object} Parsed URL
 */
function parseUrl(url) {
  var url = url || window.location.href,
    parsedUrl = url.match(/:\/\/(?:www\.)?(.[^/]+)(.*)/i),
    params = parsedUrl[2] || null,
    paramsObj = {};

  params.match(/\w+=\w+/g).forEach(function(paramString) {
    var splittedParam = paramString.split('=');

    return paramsObj[splittedParam[0]] = splittedParam[1];
  });

  return {
    hostname: parsedUrl[1],
    params: paramsObj
  };
}

// Test it
console.log(JSON.stringify(parseUrl('https://www.google.com/dir/1/2/search.html?city=lviv&age=1&name=test')));
