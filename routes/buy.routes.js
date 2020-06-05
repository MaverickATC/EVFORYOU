const { Router } = require("express");
const ClientBuy = require("../models/ClientBuy");
const Car = require("../models/Car");
const router = Router();

//  client
//  add to db
router.post("/add", async (req, res) => {
  try {
    const data = req.body;

    const fullName = data.firstName.value;
    if (!req.params.id) {
      const all = await Car.find();
       
  
      const link=all[0]._id;
      
      const buy = new ClientBuy({
        phone: data.phone.value,
        fullName,
        link,
      });
      await buy.save();
      return res.status(201).json({ buy });
    }
    const link=req.params.id
    const buy = new ClientBuy({
      phone: data.phone.value,
      fullName,
      link,
    });
    await buy.save();

    res.status(201).json({ buy });
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again", e });
  }
});

//  delete one item by id
router.post("/del/:id", async (req, res) => {
  try {
    await ClientBuy.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "deleted" });
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again", e });
  }
});

//  get all
router.get("/", async (req, res) => {
  try {
    const buy = await ClientBuy.find();
    res.json(buy);
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again" });
  }
});

//  get by id
router.get("/:id", async (req, res) => {
  try {
    const buy = await ClientBuy.findOne({ _id: req.params.id });
    res.json(buy);
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again" });
  }
});

module.exports = router;
