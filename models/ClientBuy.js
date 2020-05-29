const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  creationDate: { type: Date, default: Date.now },
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  car: { type: Types.ObjectId, ref: "Car" },
});

module.exports = model("ClientBuy", schema);
