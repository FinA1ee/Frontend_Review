var http = require("http");
var fs = require("fs");

var server = new http.Server();
server.listen(8000);
console.log("Listening...");
