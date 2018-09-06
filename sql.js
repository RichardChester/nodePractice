var mysql = require("mysql");
var http= require('http');
var qs=require('queryStrings');

var con = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        port:'3306',
        password:'',
        database:'chiken'
    }
);
var server= http.createServer(function(Req,res) {
    con.connect(function (E)  {
        con.query("select * from school", function (E, result) {
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