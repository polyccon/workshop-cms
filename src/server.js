var http = require('http');

var message = "I am so happy to be part of the Node Girls workshop!";

function handler (request, response) {
  console.log(request.url);
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(message);
  response.end();
}

var server = http.createServer(handler);

server.listen(3000, function (){

  console.log("Server is listening on port 3000. Ready to accept requests!");
});
