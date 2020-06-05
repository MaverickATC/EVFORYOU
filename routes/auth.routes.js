const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const router = Router();

//  /adm/auth/register
router.post(
  "/register",
  [
    check("name", "Wrong user name").exists(),
    check("password", "Weak password(need to be 6 or more symbols)").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ errors: errors.array(), message: "Wrong registration data" });
      }
      const { name, password, admin} = req.body;

      const candidate = await User.findOne({ name });
      if (candidate) {
        return res.status(400).json({ message: "User is currently exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      
 

      const user = new User({ name, password: hashedPassword, admin });
   
      await user.save();

      res.status(201).json({ message: "User created" });
    } catch (e) {
      res.status(500).json({ message: "Smth went wrong, try again"});
    }
  }
);

//  /adm/auth/login
router.post(
  "/login",
  [
    check("name", "Enter correct user name").exists(),
    check("password", "Enter password").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ errors: errors.array(), message: "Wrong entry data" });
      }

      const { name, password } = req.body;

      const user = await User.findOne({ name });

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Wrong password" });
      }

      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });

      res.json({ token, userId: user.id, isAdmin: user.admin });
    } catch (e) {
      res.status(500).json({ message: "smth went wrong, try again" });
    }
  }
);

//  delete one item by id
router.post("/del/:id", async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "deleted" });
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again", e });
  }
});

//  get all
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again" });
  }
});

module.exports = router;
