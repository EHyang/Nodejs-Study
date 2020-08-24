var app = require('./app');

app.set('port', 3000);
app.listen(3000, () => {
  console.log('Express server listening on port ' + app.get('port'));
});
