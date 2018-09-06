var Text = ""
var FS = require("fs");
var replace = require("replace");
var QAF = FS.createReadStream('./data.txt',{encoding:'utf8'});
var QAR=FS.createWriteStream('./data2.txt');
var count=0;
QAF.on("data",function(xyz){
    Text+=(xyz.replace(/the/g,"D"));
})
QAF.on("data",function(ABC){
    count=count+1
})
QAF.on("end",function () {
    QAR.write(Text);
})
