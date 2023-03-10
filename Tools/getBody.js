const q = require('q');

function getBody(req) {
    let defer = q.defer();
    let body = [];
    let processData;
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      if (body == "" || body == null || body == undefined) {
        defer.resolve(null)
      } else {
        try {
          processData = JSON.parse(body);
          defer.resolve(processData)
        } catch (error) {
          defer.resolve(null)
        }
      }
    });
    return defer.promise;
  }

  module.exports.getBody = getBody;