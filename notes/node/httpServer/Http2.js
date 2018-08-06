const http = require('http');
const fs = require('fs');

const onRequest = (request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    const myHtml = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myHtml.pipe(response);
}

const server = http.createServer(onRequest)

server.listen(3001);
console.log('server start on http://localhost:3001')