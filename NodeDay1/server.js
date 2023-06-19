const { fstat } = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Hello World');
});

server.listen(7888,()=>{
    console.log('Server is running on port 7888');
});

// fs

// path
// os
// http
// crypto
// events
// show each example




