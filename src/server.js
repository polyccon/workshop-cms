var http = require('http');
var fs = require('fs');

var message = "I am so happy to be part of the Node Girls workshop!";

var contentType = {
  html: "text/html",
  css: "text/css",
  javascript: "applications/javascript",
  ico: "image/x-icon",
  jpg: "image/jpeg",
  png: "image/png"
};

function handler(request, response) {
  var endpoint = request.url;
  console.log(endpoint);
  var extension = endpoint.split('.')[1];

  if (endpoint === "/") {
    response.writeHead(200, {
      "Content-Type": "text/html"
    });

    fs.readFile(__dirname + "/../public/index.html", function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.end(file);
    });
  } else if (endpoint === "/node") {
    message = "You requested node";
  // var method = request.method;
     console.log(method);
     response.writeHead(200, {"Content-Type": "text/html"});
     response.write(message);
     response.end();

  } else if (endpoint === "/girls") {
    message = "we are node girls";
    console.log(method);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(message);
    response.end();
  } else if {
    if (url.indexOf(public) != -1) {
      response.writeHead(200, {
        "Content-Type": contentType[extension]
      });
    }
  }
}

var server = http.createServer(handler);

server.listen(3000, function() {

  console.log("Server is listening on port 3000. Ready to accept requests!");
});
