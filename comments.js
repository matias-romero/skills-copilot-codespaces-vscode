// Create web server and listen to port 8080
// Handle GET request to /comment
// Return JSON object with a message

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    if (q.pathname == '/comment') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: 'Hello, this is a comment.'}));
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('404 Not Found');
    }
    res.end();
}).listen(8080);
console.log('Server running at http://localhost:8080/');
