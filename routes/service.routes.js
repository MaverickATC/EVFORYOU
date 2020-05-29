const { Router } = require("express");
const ClientService = require("../models/ClientService");
const router = Router();

//  add to db
router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const fullName = `${data.lastName} ${data.firstName}`;
    const service = new ClientService({
       ...data, fullName
    });
    await service.save();

    res.status(201).json({ service });
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again", e });
  }
});

//  delete one item by id
router.post("/del/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    await ClientService.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "deleted" });
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again", e });
  }
});

//  get all
router.get("/", async (req, res) => {
  try {
    const service = await ClientService.find();
    res.json(service);
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again" });
  }
});

//  get by id
router.get("/:id", async (req, res) => {
  try {
    const service = await ClientService.findOne({ _id: req.params.id });
    res.json(service);
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again" });
  }
});

module.exports = router;
