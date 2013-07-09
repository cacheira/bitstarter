var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

function read_index(){
    var buffer = new Buffer(255);
    buffer = fs.readFileSync('index.html');
    //console.log("File contents:" + buffer);
    return buffer.toString('utf-8');
}

app.get('/', function(request, response) {
    
    response.send(read_index());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});