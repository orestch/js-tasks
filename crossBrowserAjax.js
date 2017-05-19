function ajax(url, method, callback, async, data) {
  try {
    let xmlHttp = new(XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');

    xmlHttp.open(method, url, async);

    xmlHttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xmlHttp.onreadystatechange = function () {
      xmlHttp.readyState === 4 && callback && callback(xmlHttp.responseText);
    };

    xmlHttp.send(data)
  } catch (e) {
    console.log(e);
  }
}

function displayData(data) {
  console.log(data);
}

ajax('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo', 'GET', displayData, true);
