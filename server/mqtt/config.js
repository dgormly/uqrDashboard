var mosca = require('mosca');

module.exports = {
  id: 'iothub', // used to publish in the $SYS/<id> topicspace
  stats: true, // publish stats in the $SYS/<id> topicspace
  logger: {
    //level: 'debug'
  },
  backend: {
    type: 'mongodb',
    url: "mongodb://localhost:27017/iothub"
  },
  persistence: {
    factory: mosca.persistence.Mongo,
    url: "mongodb://localhost:27017/iothub"
  },
  http: {
   port: 3000,
   bundle: true,
   static: './'
 }
};
