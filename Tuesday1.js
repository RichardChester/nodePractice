var http = require('http');
var url = require('url');

http.createServer((req, res) => {
    res.writeHeader(200, {'content-type': 'text/html'});

    let q = url.parse(req.url, true)

    if(q.query.t && !q.query.r) {
        rangeSelecter(q.query.t, res);
    }
    else if(q.query.t && q.query.r) {
        printTimesTable(q.query.t, q.query.r, res);

    }
    else {
        switch(req.url){
            default:
                homepage(res);
        }
    }

    res.end();
}).listen(8079)



var homepage = (res) => {
    res.write(`<h1>Select a number</h1>`)
    for(i=1; i<=1000; i++){
        res.write(`<a href="?t=${i}">${i}</a><br />`);
    }
}

var rangeSelecter = (t, res) => {
    res.write(`<h1>Select range</h1><br />`);
    for(i=10; i<1000; i+=10) {
        res.write(`<a href="?t=${t}&r=${i}">${i}</a><br />`)
    }
}

var printTimesTable = (t, r, res) => {
    res.write(`<a href="/">Go Back</a><br />`)
    for(i=1; i<=r; i++) {
        res.write(`${i} x ${t} = ${i*t} <br />`)
    }
}