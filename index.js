console.log('this is server for Glass Cutting');

const http = require('http');
const url = require('url');
var loginPOST = require('./APIs/loginPOST');

http.createServer((req, res) => {

  var httpHandlers = { //APIs Manager

    login:{
      POST:loginPOST.loginPOST
    }

  }

  const queryObject = url.parse(req.url,true);
  pathname = queryObject.pathname.split('/');
  if (httpHandlers[pathname[1]] && httpHandlers[pathname[1]][req.method]) {

    httpHandlers[pathname[1]][req.method](req, res)   //فراخوانی تابع مورد نظر

  } else {
    res.statusCode = 400;
    res.write("err from url or method");
    res.end();
  }

}).listen(80, () => console.log("server start"));