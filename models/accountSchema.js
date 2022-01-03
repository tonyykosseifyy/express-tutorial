const mongoose = require("mongoose");

const { Schema } = mongoose;

const accountSchema = new Schema({});

module.exports = mongoose.model("Account", accountSchema);
