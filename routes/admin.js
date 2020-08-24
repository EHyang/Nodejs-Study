var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
	res.send('admin app');
});

router.get('/products', function(req, res) {
	res.render('admin/products.html',
		{ message : "hello"}
	);
});

router.get('/products/write',function(req,res){
	res.render('admin/write.html');
});

router.post('/products/write', function(req, res){
	res.send(req.body);
})

module.exports = router;
