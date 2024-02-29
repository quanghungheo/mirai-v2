let logger = require("./utils/log");
let http = require('http');

let server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World!');
});

server.listen(1006, ()=> {
    logger(`Đã mở máy chủ.`, `SERVER`);
    require('./mirai.js');
});