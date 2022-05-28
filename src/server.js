const http = require('http');
require('dotenv').config()

port = 3000
hostname = '127.0.0.4'

if (process.env.HEROKU_APP_NAME){
   port = process.env.PORT
   hostname = `${process.env.HEROKU_APP_NAME}.herokuapp.com`
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);;
});