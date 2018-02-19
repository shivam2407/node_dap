const exprees = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = exprees();

app.use(morgan('dev'));
app.use(exprees.static(__dirname+'/public'));

app.use((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Hey it works!</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port,hostname,() => {
     
});