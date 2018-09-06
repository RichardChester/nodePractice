var fs = require('fs');

fs.readFile('data.txt', (err, data)=> {
    if(err) throw err;
    fs.writeFile('data2.txt', data, (err) =>{
        if (err) throw err;
        console.log("Successfully Written to File.");
    });
});

