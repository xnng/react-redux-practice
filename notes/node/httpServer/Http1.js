const http = require('http');

const data = {
    "name": "bgrc",
    "age": 23,
    "job": "programer"
}

const onRequest = (request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(data));
}

const server = http.createServer(onRequest)

server.listen(3001);
console.log('server start on http://localhost:3001')