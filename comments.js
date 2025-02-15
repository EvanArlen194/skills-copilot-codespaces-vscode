// Create web server 
// 1. Create a web server
// 2. Read the file comment.json
// 3. Parse the file
// 4. Send the parsed file to the client

// 1. Create a web server
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
    // 2. Read the file comment.json
    fs.readFile('comment.json', 'utf-8', function(error, data) {
        // 3. Parse the file
        var comments = JSON.parse(data);
        // 4. Send the parsed file to the client
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(comments));
    });
}).listen(52273, function() {
    console.log('Server running at http://