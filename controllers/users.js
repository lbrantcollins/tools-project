const express 		= require("express");
const bcrypt		= require("bcryptjs")
const router 		= express.Router();
const User			= require("../models/user");

router.get("/login", (req, res) => {
	res.render('users/login.ejs');
})

router.get("/register", (req, res) => {
	res.render('users/register.ejs');
})

router.post("/register", async (req, res, next) => {
	console.log(req.body, "<-- req.body in register get route");
	try {
		// check that username is not already taken
		const usersWithThatName = await User.find( {
			username: req.body.username
		})
		// console.log(usersWithThatName, "<-- users with that username");
		if (usersWithThatName.length > 0) {
			console.log("at least one user with that name");
			req.session.message = "That username is taken. Please choose again.";
			req.session.status = "bad";
			res.redirect("/users/register");
		} else {
			// register
			console.log("I'm creating a user");
			const pw = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
			const createdUser = await User.create( {
				name: req.body.name,
				username: req.body.username,
				password: pw
			})
			// set user to be logged in
			req.session.loggedIn = true;
			req.session.username = createdUser.username;
			req.session.message = "Hello, " + createdUser.name + ".  You are signed in as \"" + createdUser.username + "\"";
			req.session.status = "good";

			// redirect home
			res.redirect("/");
		}
	} catch(err) {
		next(err);
	}

})

module.exports = router;