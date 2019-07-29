const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	name: String,
	email: String,
	password: String,
	balance: Number,
	admin: Boolean
})

const User = new mongoose.model("User", userSchema);

module.exports = User;