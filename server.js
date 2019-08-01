
// we will store session secret as an environment variable 
require('dotenv').config()

// node modules
const express 			= require('express');
const bodyParser 		= require('body-parser');
const session 			= require('express-session');
const methodOverride 	= require('method-override');
const fs				= require('fs');

// use express
const app = express();

// server will listen on this port

const PORT = process.env.PORT || 3000;

// database connection
require('./db/db.js');

// middleware
app.use(express.static('public'));

// parse req.body
app.use(bodyParser.urlencoded({extended:false}));

// interpret query strings: ?_method=PUT or ?_method=DELETE
app.use(methodOverride('_method'));

// store css and other external files
app.use(express.static('public'));

// start a user session
app.use(session( {
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}))

// custom middleware to help with handling user auth messages
app.use( (req, res, next) => {
	// console.log("custom middleware is running");
	// console.log("req.session ------>\n", req.session);
	// vars stored in res.locals are avail in any ejs when rendered
	res.locals.loggedIn = req.session.loggedIn;
	res.locals.admin = req.session.admin;
	res.locals.username = req.session.username;
	res.locals.name = req.session.name;

	if(req.session.message) {
		res.locals.message = req.session.message;
		res.locals.status = req.session.status;
	} else {
		res.locals.message = undefined;
		res.locals.status = undefined;
	}

	req.session.message = undefined;
	req.session.status = undefined;

	next();
})

// controllers
const seedingController = require('./controllers/seed');
const adminsController = require('./controllers/admins');
const usersController = require('./controllers/users');
const itemsController = require('./controllers/items');
const toolsController = require('./controllers/tools');
const rentalsController = require('./controllers/rentals');


app.use('/seed', seedingController);
app.use('/admins', adminsController);
app.use('/users', usersController);
app.use('/items', itemsController);
app.use('/tools', toolsController);
app.use('/rentals', rentalsController);








app.get("/", (req, res, next) => {
	res.render("index.ejs");
})

// server listening at PORT number defined above
app.listen(PORT, () => {
  console.log(`listening... on port ${PORT} at ${Date().toLocaleString}`);
});