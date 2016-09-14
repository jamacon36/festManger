var http = require('http');
var routes = require('./routes.js');

//Set Server Info and export to module
function setInfo (url = '127.0.0.1', protocol = 'http', port = '1337') {
   var self = this;
   self.url = url;
   self.protocol = protocol;
   self.port = port;
   return self;
}

var info = setInfo();

module.exports.info = info;

//Start Server
module.exports.startEngine = function () {
    try {
        http.createServer(function (req, res) {
            routes.trafficCop(req, res);
        }).listen(info.port, info.url);
        console.log('Server running @ ' + info.protocol + '//' + info.url + ':' + info.port);
    }
    catch (err) {
        console.error('Unexpected error starting server: ' + err.message);
    }
}