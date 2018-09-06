var mysql = require("mysql");
var http = require('http');
var qs = require('querystring');

var con = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        port: '3306',
        password: '',
        database: 'qa'
    }
);


var server = http.createServer(function (Req, res) {
    console.log("helloooooooooooooo");

    res.writeHeader(200, {'content-type': 'Text/HTML'});
    res.write(`
                        <html lang="en">
                        <head>
                        <meta charset="UTF-8">
                        <title>Title</title>
                        <!-- Latest compiled and minified CSS -->
                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                
                        <!-- Optional theme -->
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
                        </head>
                        <body>
                        <div class="container">
                        <div class="jumbotron"> QA </div>
                        <div class="jumbotron">
                        <div class="row">
                        <div class="col-sm-9">
                        trainers & schedual
                        <div class="row">
                        <div class="col-xs-8 col-sm-6">
                        Rotar
                        </div>
                        <div class="col-xs-4 col-sm-6">
                        Trainers
                        </div>
                        <div class="row">
                        <div class="col-xs-8 col-sm-6">
                        <tbody>
                        <table class='table table-hover'>
                        <tr>
                        <td>Week one</td>
                    <td>button</td>
                    <td>button</td>
                    <td>button</td>
                    <td>button</td>
                    <td>button</td>
                    </tr>
                    <tr>
                    <td>Week two</td>
                    <td>button</td>
                    <td>button</td>
                    <td>button</td>
                    <td>button</td>
                    <td>button</td>
                    </tr>
                    <tr>
                    <td>Week three</td>
                    <td>button</td>
                    <td>button</td>
                    <td>button</td>
                    <td>button</td>
                    <td>button</td>
                    </tr>
                    <tr>
                    <td>Week four"</td>
                    <td>button</td>
                    <td>button</td>
                    <td>button</td>
                    <td>button</td>
                    <td>button</td>
                    </tr>
                    <tr>
                    <td>Week five</td>
                    <td>button</td>
                    <td>button</td>
                    <td>button</td>
                    <td>button</td>
                    <td>button</td>
                    </tr>
                
                    </table>
                    </tbody>
                    </div>
                    <div class="col-xs-4 col-sm-6">
                        <tbody>
                        <table class='table table-hover'>`);
    con.connect(function (E) {
        con.query("select * from staff", function (E, result) {
            if (E) {
                console.log(E);
            }
            else {

                result.forEach(function (record) {
                    console.log(record.name)
                    res.write(`<tr>
                        <td>${record.name}</td>
                        <td>availability</td>
                        <td>button</td>
                        <td>button</td>
                        </tr>`);
                });
                res.write(`
                        
                        </table>
                        </tbody>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                
                
                
                        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
                        <!-- Latest compiled and minified JavaScript -->
                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
                        </body>
                        </html>
                
                            `);
                res.end();

            }


        })


    })


})
console.log("hello world");
server.listen(8098);