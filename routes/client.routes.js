const { Router } = require("express");
const Client = require("../models/Client");
const router = Router();

//  client
//  add to db
router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const candidate = await Client.findOne({phone: data.phone});

    if (candidate) {
      return res.status(400).json({ message: "Client is currently exists" });
    }

    const fullName = data.firstName;
    if(!data.email){
      data.email = '';
    }
    const client = new Client({
      phone: data.phone,
      email: data.email,
      remark: data.remark,
      fullName
    });
    await client.save();

    res.status(201).json({ client });
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again", e });
  }
});

//  client
//  auto add to db
router.post("/add/auto", async (req, res) => {
  try {
    const data = req.body;
    const candidate = await Client.findOne({phone: data.phone.value});

    if (candidate) {
      return res.status(400).json({ message: "Client is currently exists" });
    }

    const fullName = data.firstName.value;
    
    
    const client = new Client({
      phone: data.phone.value,
      fullName
    });
    await client.save();

    res.status(201).json({ client });
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again", e });
  }
});

//  delete one item by id
router.post("/del/:id", async (req, res) => {
  try {
    await Client.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "deleted" });
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again", e });
  }
});

//  get all
router.get("/", async (req, res) => {
  try {
    const client = await Client.find();
    res.json(client);
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again" });
  }
});

//  get by id
router.get("/:id", async (req, res) => {
  try {
    const client = await Client.findOne({ _id: req.params.id });
    res.json(client);
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again" });
  }
});

module.exports = router;
