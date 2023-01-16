//http response status codes
//informational responses(100-199)
//successful responses (200-299)
//redirects (300,399)
//client errors (400-499)
//server errors(500-599)

const http = require("http");

const { readFileSync } = require("fs");
//get all files
const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url;
  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    //res.write("<h1>Home Page</h1>");
    res.write(homePage);
    res.end();
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(5000);
