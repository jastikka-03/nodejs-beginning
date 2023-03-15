const http = require('http');
const fs = require('fs');

//view many html file 
const server = http.createServer((req, res) => {
  let filePath;
  switch (req.url) {
    case '/':
      filePath = 'server/index.html';
      break;
    case '/about':
      filePath = 'server/about.html';
      break;
    case '/contact':
      filePath = 'server/contact.html';
      break;
    default:
      filePath = './404.html';
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.end('404 Not Found');
    }

    res.write(data);
    res.end();
  });
});

server.listen(7020, () => {
  console.log('Server started on port 3000');
});
//to view in brower use localhost:7020 