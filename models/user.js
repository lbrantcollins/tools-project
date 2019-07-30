const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	name: String,
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	balance: Number,
	admin: Boolean
})

const User = new mongoose.model("User", userSchema);

module.exports = User;