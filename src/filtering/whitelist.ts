var get = require('node-fetch');
module.exports = async function filtering_whitelist(url: string, username: string, password: string) {
  var response = await get(url + '/control/filtering/status', {
    method: 'GET',
    headers: { Authorization: 'Basic ' + Buffer.from(username + ':' + password).toString('base64') },
  });

  var data = await response.json();
  return data.whitelist_filters;
};
