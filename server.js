const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

});

server.listen(3000, 'localhost', () => {
<<<<<<< HEAD
//   console.log('Server running at http://localhost:3000/');
=======
  console.log('Server running at http://localhost:3000/');
>>>>>>> 486e368745edb11bc28bb2e239542f7d77c8ea20
});