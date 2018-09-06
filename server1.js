


var http=require("http")
var fs=require("fs")
var url=require("url")

var server=http.createServer(function(Req,res){
    var p=url.parse(Req.url).pathname;
    if(p=="/"){
        fs.readFile("login.html",function(E,D){
            if(E){
                console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
            }else{
                res.writeHead(200,{'content-type':'text/html'});
                res.write(D);

            }

        });
    }
    if(p=="/loginprocessing"){
        res.write("login [processingggggggggggggggggggggggg");
    }
    res.end();
});

server.listen(2000)

