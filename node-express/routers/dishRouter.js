const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Will send all the details to you!');
})
.post((req,res,next)=>{
    res.end('Will insert all the entries :'+req.body.name+
    'with details as'+ req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('put operation not supported on dishes');
})
.delete((req,res,next)=>{
    // Dangerous operation
    res.end('Deleting all the dishes!');
});

module.exports = dishRouter;