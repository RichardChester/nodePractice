var htt= require('http');

var ProcessRequest = function (request,response) {
    response.writeHeader(200,{'content-type':'Text/HTML'});
    response.write("<h1>emails</h1>");
    response.write("<B> None</B>");

    response.end();

};

var server = htt.createServer(ProcessRequest);

server.listen(8001);