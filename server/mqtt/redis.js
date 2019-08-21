var redis = require("redis")
  , subscriber = redis.createClient()
  , publisher  = redis.createClient();

subscriber.on("message", function(channel, message) {
  console.log("Message '" + message + "' on channel '" + channel + "' arrived!")
});

subscriber.on("subscribed", () => console.log("subscribed"));

publisher.publish("test", "haaaaai");
publisher.publish("test", "kthxbai");

subscriber.subscribe("test");
