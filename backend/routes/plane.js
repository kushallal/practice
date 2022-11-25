const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");
const { db } = require("../helper/mongoHelper");

router.get("/", async (req, res) => {
  try {
    const planes = await db.planes.find().toArray();
    res.json(planes);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const receivedPlane = await db.planes.insertOne({
      planeName: req.body.planeName,
      paperUsed: req.body.paperUsed,
      planeEngineer: req.body.planeEngineer,
      completionDate: req.body.completionDate,
    });
    res.json(receivedPlane);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removedPlane = await db.planes.deleteOne({
      _id: ObjectId(req.params.id),
    });
    res.json(removedPlane);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
