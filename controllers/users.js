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
			// redirect back to registration page
			res.redirect("/users/register");
		} else if (req.body.password.length === 0) {
	      // empty password string, sorry
	      req.session.message = "Please enter a password"
	      req.session.status = "bad"
	      // redirect back to registration page
	      res.redirect("/users/register");
      } else {
			// register new user
			console.log("I'm creating a user");
			const pw = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
			const createdUser = await User.create( {
				name: req.body.name,
				username: req.body.username,
				password: pw,
				balance: 0
			})
			// set user to be logged in
			req.session.loggedIn = true;
			req.session.name = createdUser.name;
			req.session.username = createdUser.username;
			// req.session.message = "Hello, " + createdUser.name + ".  You are signed in as \"" + createdUser.username + "\"";
			req.session.messag = "";
			req.session.status = "good";

			// successful registration: redirect to home page
			res.redirect("/");
		}
	} catch(err) {
		next(err);
	}

})

router.post("/login", async (req, res, next) => {
	console.log(req.body, "<-- req.body in login get route");
	try {
		const userFound = await User.findOne({
			username: req.body.username
		});
		// console.log("user found ----------\n", userFound);

		// if username does not match an existing username...
		if (!userFound) {
			console.log("user does not exist");
			req.session.message = "Invalid username or password.";
			req.session.status = "bad";
			// redirect back to user authentication
			res.redirect("/users/login");
		} else {
			// if user matches an existing username and password matches...
			if (bcrypt.compareSync(req.body.password, userFound.password) === true) {
				// log in user
				req.session.loggedIn = true;
				req.session.name = userFound.name;
				req.session.username = userFound.username;
				// req.session.message = `Logged in as ${userFound.username}`;
				req.session.message = "";
				req.session.status = "good";
				// redirect admin to edit homepage 
				// redirect all other users to main home page
				if (req.body.username === "admin") {
					req.session.admin = true;
					res.redirect("/admins");
				} else {
					req.session.admin = false;
					res.redirect("/");
				}
			} else {
				// bad password
				console.log("bad password");
				req.session.message = "Invalid username or password.";
				req.session.status = "bad";
				// redirect back to user authentication
				res.redirect("/users/login");
			}
		}

	} catch(err) {
		next(err);
	}
})

router.get("/logout", (req, res, next) => {
	req.session.destroy( (err, data) => {
		if (err) next(err);
		else {
			// return back to home page
			res.redirect("/");
		}
		
	})
})


module.exports = router;


