// node modules
const express 			= require('express');
const bodyParser 		= require('body-parser');
const methodOverride = require('method-override');
const fs					= require('fs');

// use express
const app = express();

// server will listen on this port
const PORT = 3000;

// database connection
require('./db/db.js');

// middleware

// parse req.body
app.use(bodyParser.urlencoded({extended:false}));

// interpret query strings: ?_method=PUT or ?_method=DELETE
app.use(methodOverride('_method'));

// controllers
const usersController = require('./controllers/users');
const toolsController = require('./controllers/tools');
const rentalsController = require('./controllers/rentals');

app.use('/users', usersController);
app.use('/tools', toolsController);
app.use('/rentals', rentalsController);



// server listening at PORT number defined above
app.listen(PORT, () => {
  console.log(`listening... on port ${PORT} at ${Date().toLocaleString}`);
});