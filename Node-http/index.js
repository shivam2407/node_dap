const http = require('http');
const path = require('path');
const fs = require('fs');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res) => {
    console.log(req.headers);

    if(req.method == "GET"){
        var fileUrl;
        if(req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./public'+fileUrl);
        const fileExt = path.extname(filePath);
        if(fileExt == '.html'){
            fs.exists(filePath, (exists) => {
                if(!exists){
                    res.statusCode = 404;
                    res.setHeader('Content-Type','text/html');
                    res.end('<html><body><h1> Wrong url bro!</h1></body></html>');
                }
                else{
                    res.statusCode=200
                    res.setHeader('Content-Type','text/html');
                    fs.createReadStream(filePath).pipe(res);
                }
            });
        }
        else{
            res.statusCode = 404;
            res.setHeader('Content-Type','text/html');
            res.end('<html><body><h1> Not a html file bro!</h1></body></html>');
        }
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.end('<html><body><h1> Only get method!</h1></body></html>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running att http://${hostname}:${port}`);
});
