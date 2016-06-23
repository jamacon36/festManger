var http = require('http');

routes = {};

//Homepage Routing
routes.home = function (req, res) 
{
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('Header\n');
    res.write('Body\n');
    res.end('Footer\n'); 
}

//Route Filter
module.exports.trafficCop = function (req, res) 
{
    if (req.url == '/')
    {
        routes.home(req, res);
    }
}