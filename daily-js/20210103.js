const logger = require('morgan');
const express = require('express');

// ES6 -> mjs
// import logger from 'morgan';
// import express from 'express';

const app = express();

app.set('port',3000);

app.use(logger('dev'));

app.get('/',(_,res)=>{
    res.send("hello");
})

app.listen(app.get('port'), () =>{
    console.log('Express server listening on port ' + app.get('port'));
});