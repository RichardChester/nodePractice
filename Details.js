var htt= require('http');
var ProcessRequest = function (request,response) {
    response.writeHeader(200, {'content-type': 'Text/HTML'});
    response.write("<h1>Details</h1>");
    response.write("<B> None</B>");

    response.end();
}

    var server = htt.createServer(ProcessRequest);
    server.listen(9000);

var firstDie,secondDie;
class math{
    constructor(){
        this.st=0;
        this.nd=0;
        this.rd=0;
        this.show = function(){
            let total = this.st+this.nd+this.rd;
            let per=total*100/450;
            console.log("percentage is: "+per);
            console.log("total marks:"+ total);
        };
    }
}

var getdieroll = function(dieSize){
    var result = Math.ceil(dieSize*Math.random());
    return result;
}


var ref=new math();
ref.st=getdieroll(150);
ref.nd=getdieroll(150);
ref.rd=getdieroll(150);
ref.show();