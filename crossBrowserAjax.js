/**
 * Creates cross-browser xhr request object and sends request to the given url
 * @param {String} url
 * @param {String} method
 * @param {Object} callback
 * @param {Boolean} async
 * @param {Mixed} data
 */
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

/**
 * Callback function
*/
function displayData(data) {
  console.log(data);
}

// Test it
ajax('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo', 'GET', displayData, true);
