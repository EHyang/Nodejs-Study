var express = require('express');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var logger = require('morgan');

var app = express();

app.use(bodyParser.json());

var admin = require('./routes/admin');


nunjucks.configure('template',{
	autoscape: true,
	express: app
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extende:false}));


app.set('port', 3000);

app.get('/',function(req,res){
	res.send("hello");
});


app.use('/admin', admin);

app.listen(3000, function() {
	console.log('Express server listening on port ' + app.get('port'));
});
