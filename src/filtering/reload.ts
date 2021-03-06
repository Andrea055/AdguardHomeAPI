var get = require('node-fetch');
module.exports = async function reload_filter(url: string, username: string, password: string, whitelist: boolean) {
  var body = {
    whitelist: whitelist,
  };
  var response = await get(url + '/control/filtering/refresh', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from(username + ':' + password).toString('base64'),
    },
    body: JSON.stringify(body),
  });

  var data = await response.status;
  if (data == 400) {
    return 0;
  } else {
    return 1;
  }
};
