# GLAB 318.1.1: NodeJS Installation and Basics
Date: 1/12/2024
GitHub: link
## Introduction
This lab will walk you through the steps of installing Node and the Node Package Manager (npm) on Windows.

## Objectives
Install Node, Install npm, Use basic npm commands to create a package file,install packages, and run a program.

#### Part 1: Node Installation:  
Completed!

#### Part 2: Node Command Line Interface: 
DONE! Completed using Git Bash!
node -v: v21.5.0
npm -v: 10.2.4

#### Part 3: Node Package Manager (npm):
- Initiating npm: DONE! a "package.json" file is created for the project. 

- npm: package installation. Development dependency nodemon is installed! and Express dependency as well.

- Updating the package.json file. DONE! Within the “scripts” object, “start” and "dev" aliases are added for "node index.js" and "nodemon index.js" respectively. 

#### Part 4: Creating a (back-end system) Server:
A server that listens for communication from the client and returns a response.
Empty the contents of your index.js file, and follow along with the code below.
First, we want to use the require keyword to include the http module, which is built into Node (and does not need to be installed separately by npm). This module allows node to transfer data over the Hyper Text Transfer Protocol (HTTP) used by the internet.
const http = require('http');
Next, we need to define the location and port of the server. For now, we will use a local address; there are better ways to handle this, which we will explore in future lessons.
const hostname = '127.0.0.1';const port = 3000;
The createServer method of the http object allows us to define how the server will behave. The configuration below is extremely simple for example purposes, and will only ever respond with a status code of 200 (meaning “success”) and the text content “Hello World!”
The variables req and res correspond to the request and response objects of the server communications. Each of these has a variety of properties and methods that we will explore in future lessons. These abbreviations are used almost everywhere, so you should familiarize yourself with them.
const server = http.createServer((req, res) => {  res.statusCode = 200;  res.setHeader('Content-Type', 'text/plain');  res.end('Hello World!\n');});
Finally, we need to tell the server to actually listen for communications. We do this by calling the listen method of the server object we just created, and passing it the port and hostname we previously defined. It also accepts a callback function that we can use to indicate that the server is running.
server.listen(port, hostname, () => {  console.log(`Server running at http://${hostname}:${port}/`);});
Save the file, and use nodemon to start the application.
Open a web browser, and navigate to 127.0.0.1:3000 (or localhost:3000).
You should see the response being sent from the server: Hello World!
Congratulations, you just created your first Node server! Time permitting, feel free to explore the other options available to you within your Node server. For example, what happens if we change our createServer call to the following? Try it!
const server = http.createServer((req, res) => {  res.statusCode = 200;  res.setHeader('Content-Type', 'text/html');  res.write('<h1 style="color: red">Hello World!</h1>');  res.write('<p>I wonder what else we can send...</p>');  res.end();});

Part 5: Open Exploration
Using what you have learned about HTTP request routing, create at least two different routes for your application. Have the “default” route continue to render the content above.
Within those custom routes, explore your options! Be creative, and see what you can build by writing HTML to the response, reading and parsing different portions of the request, and implementing specific logic to create a unique experience.
This lab is not graded, so do not worry if your routes end up being silly, impractical, inefficient, or ineffective. This time is for you to explore the new possibilities of using JavaScript outside of the context of a web browser.
Use whatever time is available to continue your exploration. Brainstorm with your peers, reference documentation, and research the possibilities available to you.
When you begin running out of time, make sure that you comment out any code that prevents the program from running.

Part 6: Completion
Upload your project to a GitHub repository, and submit it according to the submission instructions at the beginning of this document.