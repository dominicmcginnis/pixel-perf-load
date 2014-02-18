var http = require("http");
var fs = require("fs");


http.createServer(function(request, response) {
 console.log("Recieving request: " + request.url);

setTimeout(function() {
  if(request.url.indexOf('/testpixel.png') != -1) {
 	fs.readFile("test.png", "binary", function(error, file) {
	    if(error) {
	      console.log("Error encountered");
	      response.writeHead(500, {"Content-Type": "text/plain"});
	      response.write(error + "\n");
	      response.end();
	    } else {
	      console.log("Sending Response...");
	      response.writeHead(200, {"Content-Type": "image/png"});
	      response.write(file, "binary");
	      response.end();
	    }
	  });

	} else {
		console.log("Unrecognized path");
	}
}, 5000);

}).listen(8888);
