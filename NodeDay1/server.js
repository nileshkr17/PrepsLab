const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Hello World');
});

server.listen(7888,()=>{
    console.log('Server is running on port 7888');
});