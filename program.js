//var firstDie,secondDie;


var htt= require('http');
var ProcessRequest = function (request,response) {
    response.writeHeader(200,{'content-type':'Text/HTML'});
    response.write("<h1>hello my friends request recived</h1>");
    response.write("<B> request recived</B>");
    response.write("<A href='http://localhost:8001'> emails</A>");
    response.write("<A href='Http://localhost:9000'> Details</A>");
    response.end();

};

var server = htt.createServer(ProcessRequest);
server.listen(8080);


//



// var getdieroll = function(dieSize){
//    var result = Math.ceil(dieSize*Math.random());
//    if (result == 5 || result==6){
//        console.log("great roll")
//    }
//    else if (result ==1){
//        console.log("that sucks")
//    }
//    return result;
// };
//
// var showresults = function(){
//     console.log(firstDie);
//     console.log(secondDie);
//     console.log(firstDie+secondDie);
// };
// firstDie=getdieroll(6);
// secondDie=getdieroll(6);
// showresults();
