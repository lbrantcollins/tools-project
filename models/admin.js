const mongoose = require("mongoose");

const adminSchema = {
	name: String,
	email: String,
	password: String,
}

const Admin = new mongoose.Schema("Admin", adminSchema);

module.exports = User;