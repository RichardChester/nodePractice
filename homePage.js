var mysql = require("mysql");
var http= require('http');
var qs=require('queryStrings');

var con = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        port:'3306',
        password:'',
        database:'QA'
    }
);

var server= http.createServer(function(Req,res) {
    var p=url.parse(Req.url).pathname;
    if(p=="/") {
        fs.readFile("sql1.html",function(E,D){
            res.write(D);
            if(E){
                console.log("eror");
            }
            res.end();

var server= http.createServer(function(Req,res) {
    con.connect(function (E)  {
        con.query("select * from TrainerInfo", function (E, result) {
            if (E) {
                console.log(E);
            }
            else {
                result.forEach(function (record) {
                    res.write(" Regno: "+record.regno+"<br>");
                    res.write(" Name: "+record.name+"<br>");
                    res.write(" Marks: "+record.marks+"<br>");
                })
            }
            res.end();
        })



    })


})

server.listen(8585);