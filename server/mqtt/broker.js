'use strict'

var mosca = require('mosca');
var config = require('./config');

var server = new mosca.Server(config);

server.on('error', function(err){
  //console.log(err);
});

server.on('ready', setup);

// fired when a message is received
server.on('published', function(packet, client) {
  if (!client) return;
  console.log('Published ', packet.payload.toString());
});


// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}
