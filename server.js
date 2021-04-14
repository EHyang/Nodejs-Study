var app = require('./app');
import wifi from 'node-wifi';
const dotenv = require('dotenv');

app.set('port', 3000);

wifi.init({
	iface: null // network interface, choose a random wifi interface if set to null
});
wifi.getCurrentConnections((error, currentConnections) => {
	console.log(currentConnections);
});


app.listen(3000, () => {
  console.log('Express server listening on port ' + app.get('port'));
});
