const { Router } = require("express");
const Car = require("../models/Car");
const router = Router();

//  add to db
router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    data.creationDate = new Date();

    data.catalogImgsPathArr = data.catalogImgsPath.split(' ');
    data.galleryImgsPathArr = data.galleryImgsPath.split(' ');
    
    for (let index = 0; index < data.catalogImgsPathArr.length; index++) {
      let pathId = "";
      for (let i = (data.catalogImgsPathArr[index].indexOf('=')+1); i < data.catalogImgsPathArr[index].length; i++) {
        pathId += data.catalogImgsPathArr[index][i];        
      }
      data.catalogImgsPathArr[index] = `https://drive.google.com/uc?export=view&id=${pathId}`
      
    }

    for (let index = 0; index < data.galleryImgsPathArr.length; index++) {
      let pathId = "";
      for (let i = (data.galleryImgsPathArr[index].indexOf('=')+1); i < data.galleryImgsPathArr[index].length; i++) {
        pathId += data.galleryImgsPathArr[index][i];        
      }
      data.galleryImgsPathArr[index] = `https://drive.google.com/uc?export=view&id=${pathId}`
      
    }

    {
      let pathId = "";
      for (let i = (data.testdriveImgPath.indexOf('=')+1); i < data.testdriveImgPath.length; i++) {
        pathId += data.testdriveImgPath[i];        
      }
      data.testdriveImgPath = `https://drive.google.com/uc?export=view&id=${pathId}`
    }

    data.complectSafetyArr = data.complectSafety.split(',');
    data.complectInteriorArr = data.complectInterior.split(',');
    data.complectClimateArr = data.complectClimate.split(',');

    const car = new Car({ ...data });
    await car.save();

    res.status(201).json({ car });
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again", e });
  }
});

//  delete one item by id
router.post("/del/:id", async (req,res) => {
  try {
    console.log(req.params.id)
    await Car.deleteOne({_id: req.params.id})
    res.status(201).json({ message: "deleted" });
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again", e });
  }
  
});

//  get all
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again" });
  }
});

//  get by id
router.get("/:id", async (req, res) => {
  try {
    const car = await Car.findOne({ _id: req.params.id});
    res.json(car);
  } catch (e) {
    res.status(500).json({ message: "smth went wrong, try again" });
  }
});

module.exports = router;
