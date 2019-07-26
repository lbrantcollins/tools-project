const mongoose = require("mongoose");

const userSchema = {
	name: String,
	email: String,
	password: String,
	balance: Number
}

const User = new mongoose.Schema("User", userSchema);

module.exports = User;