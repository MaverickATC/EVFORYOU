const { Router } = require("express");
const ClientTD = require("../models/ClientTD");
const Car = require("../models/Car");
const router = Router();

//  client
//  add to db
router.post("/add", async (req, res) => {
  try {
    const data = req.body;

    const fullName = `${data.lastName} ${data.firstName}`;
    if (!req.params.id) {
      const all = await Car.find();
      id = all[0]._id;
      const td = new ClientTD({
        phone: data.phone,
        email: data.email,
        fullName,
        car: id,
      });
      await td.save();
      return res.status(201).json({ td });
    }

    const td = new ClientTD({
      phone: data.phone,
      email: data.email,
      fullName,
      car: req.params.id,
    });
    await td.save();

    res.status(201).json({ td });
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again", e });
  }
});

//  delete one item by id
router.post("/del/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    await ClientTD.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "deleted" });
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again", e });
  }
});

//  get all
router.get("/", async (req, res) => {
  try {
    const td = await ClientTD.find();
    res.json(td);
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again" });
  }
});

//  get by id
router.get("/:id", async (req, res) => {
  try {
    const td = await ClientTD.findOne({ _id: req.params.id });
    res.json(td);
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again" });
  }
});

module.exports = router;
