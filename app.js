const MongoClient = require('mongodb').MongoClient;





// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  const dbName = 'week8';
  const db = client.db(dbName);
  require('./create.js')(db);
  require('./add.js')(db);
  require('./remove.js')(db);
  require('./update.js')(db);
  require('./read.js')(db);

client.close();
});

