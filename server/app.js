const http = require('http');//import
const fs=require('fs');


//view one html file in browser
const server = http.createServer((req, res) => {
    fs.readFile('index.html', function(err, data) {
        if (err) throw err;
        res.write(data);
        res.end();
      });
    
  });
  
server.listen(7000, () => {
    console.log('Server running on port 7000');
  });//listen on port