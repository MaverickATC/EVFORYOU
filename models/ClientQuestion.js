const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  creationDate: { type: Date, default: Date.now },
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  question: { type: String, required: true },
});

module.exports = model("Question", schema);
