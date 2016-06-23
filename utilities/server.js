var http = require('http');
var routes = require('./routes.js');

//Start Server
module.exports.startEngine = function () 
{
    try
    {
        http.createServer(function (req, res) 
        {
            routes.trafficCop(req, res);
        }).listen(1337, '127.0.0.1');
        console.log('Server running @ http://127.0.0.1:1337/');
    }
    catch (err)
    {
        console.error('Unexpected error starting server: ' + err.message);
    }
}