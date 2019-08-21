var mqtt = require('mqtt')

var client  = mqtt.connect('mqtt://localhost')

client.on('connect', function () {
    client.subscribe('myTopic')
});

client.on('message', function (topic, message) {
  var context = message.toString();
  console.log(context)
});
