var HTTP=require('http');
var server=HTTP.createServer(function(req,res){
    var ABC=req.url;
    if (abc=="/") {
        res.write("home Page");
    }
    if (abc=="/login"){
        res.write("login Page")
    }

});
console.log("hello");
server.listen(9003);