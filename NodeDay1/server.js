// import port from .env
require('dotenv').config();

const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Hello World');
});

server.listen(dot,()=>{
    console.log('Server is running on port 7888');
});

// fs

// path
// os
// http
// crypto
// events
// show each example




