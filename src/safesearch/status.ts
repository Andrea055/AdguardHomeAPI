var get = require('node-fetch');
module.exports = async function safebrowsing_status(url: string, username: string, password: string) {
  var response = await get(url + '/control/safesearch/status', {
    method: 'GET',
    headers: { Authorization: 'Basic ' + Buffer.from(username + ':' + password).toString('base64') },
  });

  var data = await response.json();
  return data;
};
