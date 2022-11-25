const express = require("express");
const { ObjectId } = require("mongodb");
const { db } = require("../helper/mongoHelper");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const engineers = await db.engineers.find().toArray();
    res.json(engineers);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/names", async (req, res) => {
  try {
    const projection = {
      engineerAge: 0,
      engineerExperience: 0,
      _id: 0,
    };
    const engineerNames = await db.engineers
      .find()
      .project(projection)
      .toArray();

    res.json(engineerNames);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const receivedEngineer = await db.engineers.insertOne({
      engineerName: req.body.engineerName,
      engineerAge: req.body.engineerAge,
      engineerExperience: req.body.engineerExperience,
    });
    res.json(receivedEngineer);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removedEngineer = await db.engineers.deleteOne({
      _id: ObjectId(req.params.id),
    });
    res.json(removedEngineer);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
