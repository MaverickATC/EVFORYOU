const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  creationDate: { type: Date, default: Date.now },
  model: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  manufacturer: { type: String, required: true },
  carModel: { type: String, required: true },
  bodyType: { type: String, required: true },
  year: { type: String, required: true },
  place: { type: String, required: true },
  color: { type: String, required: true },
  fuel: { type: String, required: true },
  country: { type: String, required: true },
  distance: { type: String, required: true },
  drive: { type: String, required: true },
  gear: { type: String, required: true },
  maxSpeed: { type: String, required: true },
  power: { type: String, required: true },
  start: { type: String, required: true },
  maxCharge: { type: String, required: true },
  state: { type: String, required: true },
  seats: { type: String, required: true },
  complectSafetyArr: [{ type: String, required: false }],
  complectInteriorArr: [{ type: String, required: false }],
  complectClimateArr: [{ type: String, required: false }],
  testdriveImgPath: { type: String, required: false },
  catalogImgsPathArr: [{ type: String, required: false }],
  galleryImgsPathArr: [{ type: String, required: false }],
});

module.exports = model("Car", schema);
