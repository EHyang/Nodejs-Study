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
app.set('port', 3000);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extende:false}));

app.use('/uploads', express.static('uploads'));
app.use((req,res,next)=>{
	app.locals.isLogin = true;
	app.locals.req_path = req.path;
	next();
});

app.get('/',function(req,res){
	res.send("hello");
});

app.use('/admin', admin);

app.use((req,res) => {
	res.status(404).render('common/404.html');
});

app.use((req,res) => {
	res.status(500).render('common/500.html');
});


app.listen(3000, function() {
	console.log('Express server listening on port ' + app.get('port'));
});
