var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://10.225.201.130');

var options = {
  retain: true
}

client.on('connect', function () {
      setInterval(function() {
        client.publish('hello_world', Math.random().toString(), options);
        console.log('Message Sent');
}, 5000);
});
