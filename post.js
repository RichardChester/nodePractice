var mysql = require("mysql");
var http= require('http');
var qs=require('querystring');
var url=require("url")
var fs = require("fs");

var con = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        port:'3306',
        password:'',
        database:'chiken'
    }
);

var form = "";

var server= http.createServer(function(Req,res) {
    var p=url.parse(Req.url).pathname;
    if(p=="/") {
        fs.readFile("sql1.html",function(E,D){
            res.write(D);
            if(E){
                console.log("eror");
            }
            res.end();
    });
    }
    if(p=="/singUp"){
        con.connect(function (E) {
            var Data1 = ""
            Req.on("data", function (D) {
                Data1 = D;
                form = qs.parse(Data1.toString());
                var insertQuery = `insert into school values('${form.Regno}','${form.Name}',${form.Marks})`
                con.query(insertQuery, function (E) {
                    if (E) {
                        console.log(E);
                    }
                    res.end();
                });
            });



            // var insertQuery = `insert into school values(${form.Regno}','${form.Name}','${form.Marks}')`
            // con.query(insertQuery, function (E, result) {
            //     if (E) {
            //         console.log(E);
            //     }
            //     else {
            //         console.log(`${results}`)
            //
            //     }
            //     res.end();
            //
            // });

        })
    }

})

server.listen(8585);