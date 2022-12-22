var give = require('../Tools/getBody');

function loginPOST(req, res) {
    give.getBody(req)
        .then(body => {
            console.log(body);
            res.statusCode = 400;
            res.write("update was successful");
            res.end();
        })
}

module.exports.loginPOST = loginPOST;