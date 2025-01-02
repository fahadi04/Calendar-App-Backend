const mongoose = require("mongoose");

const MethodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  sequence: { type: Number, required: true, unique: true },
  mandatory: { type: Boolean, required: true },
});

const Method = mongoose.model("Method", MethodSchema);
module.exports = Method;
