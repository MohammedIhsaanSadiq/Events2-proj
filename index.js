const http = require('http');
const fs = require('fs');

http.createServer((_req, res) => {
    fs.appendFile('demo.txt', 'Good Night!', (err  ) => {
        if(err){
            console.log(err);
        } else {
            res.write('File created and data added');
            res.end();
        }
    });
}).listen(3001);
