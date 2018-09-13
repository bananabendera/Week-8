var mongo = require('mongodb'); 

require('add.js')(app, fs);
require('app.js')(app, fs);
require('create.js')(app, fs);
require('read.js')(app, fs);
require('remove.js')(app, fs);
require('update.js')(app, fs);

