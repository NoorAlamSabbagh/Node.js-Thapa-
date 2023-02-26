//Lec 16
//The http.createServer() method includes request and response parameters which is supplied by Node.js

//The request object can be used to get the information about the current  HTTP request
//e.g., url, request, header, and data.

//The response object can be used to be send a response for a current HTTP request.

//If the response from the HTTP server is supposed to be displayed as HTML,
//you should include an HTTP header with correct content type:



//server banaya
/*
const http = require("http");
const server = http.createServer((req, res) =>{
    res.end('Hello from the other sides Noor Alam');
});
server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to the port no 8000")
});
*/

//Lec 17 Node.js Routing
const http = require("http");
const server = http.createServer((req, res) =>{
    console.log(req.url);
    if(req.url == "/"){
        res.end('Hello from the other sides Noor Alam');
    }else if (req.url == "/about"){
        res.end("Hello from the AboutUs sides");
    }
    else if (req.url == "/contact"){
        res.end("Hello from the contactUs sides");
    }
    else{
        res.writeHead(404, {"Content-type": "text/html" });
        res.end("<h1>404 error pages. Page doesn't exit </h1>");
    }
});
server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to the port no 8000")
});

