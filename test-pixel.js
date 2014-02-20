var http = require("http");
var fs = require("fs");


http.createServer(function(request, response) {
 console.log("Recieving request: " + request.url);

  if(request.url.indexOf('/testpixel.png') != -1) {
		setTimeout(function() {
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
		}, 5000);
	} else if (request.url.indexOf('/logtimeout') != -1) {
		console.log("Logging timedout request: " + request.url);
	    response.statusCode = 200;
	    response.end();
	} else {
		console.log("unknown request");
	    response.statusCode = 404;
	    response.end();
	}
}).listen(8888);
