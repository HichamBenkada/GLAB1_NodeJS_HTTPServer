// require HTTP file
const http = require("http");

const hostname = "127.0.0.1";
const PORT = 3000;

//Create Server response using HTTP CreateServer methode
const server = http.createServer((req, res) => {
  //track user request
  console.log(req.url);
  //creating multiple routes with it
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write('<h1 style="color: red;text-align: center">Hello World!</h1>');
      res.write("<p>Welcome to my Node Server...</p>");
      res.write('<a href="http://localhost:3000/"> Home </a> <br/>');
      res.write('<a href="http://localhost:3000/about"> About </a><br/>');
      res.write("<a href='http://localhost:3000/signin'> LogIn </a>");
      res.end();
      break;
    case "/about":
        res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write('<h1 style="color: red; text-aligne = center">About:</h1>');
      res.write("<p>WOW!!! I am a guinuis LOL...This is my first attempt to create a back-end application and it is really cool!...</p>");
      res.write('<a href="http://localhost:3000/"> Home </a> <br/>');
      res.write('<a href="http://localhost:3000/about"> About </a><br/>');
      res.write("<a href='http://localhost:3000/signin'> LogIn </a>");
      res.end();
      break;
    case "/signin":
        res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
     
      res.write("<p>Awesome! since you get here, go ahead and log in:</p>");
      res.write('<h1 style="color: red;text-align: center">Sign IN</h1>');

      res.write(`
      <form style="text-align:center">
      <input type="text" placeholder="Email"/><br/>
      <br/> <input type="text" placeholder="Password" /><br/><br/>
       <input type="Submit" />
      </form>
      `);


      res.write('<a href="http://localhost:3000/"> Home </a> <br/>');
      res.write('<a href="http://localhost:3000/about"> About </a><br/>');
      res.write("<a href='http://localhost:3000/signin'> LogIn </a>");
      res.end();
      break;
  }
});

//Server-Client Listener for Client requests:
server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
