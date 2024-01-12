// require HTTP file
const http = require('http');

const hostname = '127.0.0.1';
const PORT = 3000;

//Create Server response using HTTP CreateServer methode
const server = http.createServer((req, res) => {  res.statusCode = 200;  res.setHeader('Content-Type', 'text/plain');  res.write('<h1>Hello Hicham...I love you..</h1>');
res.write('<p>I wonder what elese we can recieve here.. </p>');
res.end()
});

//Event Listener for Client requests:
server.listen(PORT, hostname, () => {  console.log(`Server running at http://${hostname}:${PORT}/`)
});