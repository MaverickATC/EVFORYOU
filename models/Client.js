const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  creationDate: { type: Date, default: Date.now },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: false },
  fullName: { type: String, required: true },
  remark: { type: String, required: false },
});

module.exports = model("Client", schema);
