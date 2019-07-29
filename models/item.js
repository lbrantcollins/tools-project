const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
	rented: Boolean,
	tool: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tool'
  }
})

const Item = new mongoose.model("Item", itemSchema);

module.exports = Item;