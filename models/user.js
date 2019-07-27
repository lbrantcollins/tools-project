const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	name: String,
	email: String,
	password: String,
	balance: Number
})

const User = new mongoose.model("User", userSchema);

module.exports = User;