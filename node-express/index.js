const exprees = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = exprees();
const dishRouter = require('./routers/dishRouter');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(exprees.static(__dirname+'/public'));

app.use('/dishes',dishRouter); 

app.get('/dishes/:dishId', (req,res,next) =>{
    res.end('Will send all details of '+req.params.dishId+' to you!');
});

app.post('/dishes/:dishId',(req,res,next)=>{
    res.statusCode = 403;
    res.end('post operation not supported on dishes: '+req.params.dishId);
});

app.put('/dishes/:dishId',(req,res,next)=>{
    res.write('Updating the dish '+req.params.dishId+'\n');
    res.end('will update the dish '+req.body.name);
});

app.delete('/dishes/:dishId',(req,res,next)=>{
    // Dangerous operation
    res.end('Deleting dish'+req.params.dishId);
});

app.use((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Hey it works!</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port,hostname,() => {
     console.log("Server started at port"+port);
});