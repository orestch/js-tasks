function parseUrl(urlString) {
  let url = urlString || window.location.href,
    parsedUrl = urlString.match(/:\/\/(?:www\.)?(.[^/]+)(.*)/i),
    params = parsedUrl[2] || null,
    paramsObj = {};

  params.match(/\w+=\w+/g).forEach(paramString => {
    let splittedParam = paramString.split('=');

    return paramsObj[splittedParam[0]] = splittedParam[1];
  });

  return {
    hostname: parsedUrl[1],
    params: paramsObj
  };
}

console.log(parseUrl('https://www.google.com/dir/1/2/search.html?city=lviv&age=1&name=test'));
