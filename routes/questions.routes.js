const { Router } = require("express");
const Question = require("../models/ClientQuestion");
const router = Router();

//  client
//  add to db
router.post("/add", async (req, res) => {
  try {
    const data = req.body;

    const fullName = data.firstName.value;

    const question = new Question({
      phone: data.phone.value,
      question: data.question.value,
      fullName,
    });
    await question.save();

    res.status(201).json({ question });
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again", e });
  }
});

//  delete one item by id
router.post("/del/:id", async (req, res) => {
  try {
    await Question.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "deleted" });
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again", e });
  }
});

//  get all
router.get("/", async (req, res) => {
  try {
    const question = await Question.find();
    res.json(question);
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again" });
  }
});

//  get by id
router.get("/:id", async (req, res) => {
  try {
    const question = await Question.findOne({ _id: req.params.id });
    res.json(question);
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again" });
  }
});

module.exports = router;
