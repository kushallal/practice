const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const { db } = require("../helper/mongoHelper");

router.get("/", async (req, res) => {
  try {
    const options = await db.paperTypes.find().limit(1).toArray();

    res.send(options);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const receivedOptions = await db.paperTypes.insertOne({
      options: req.body.options,
    });
    res.json(receivedOptions);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removedOption = await db.paperTypes.deleteOne({
      _id: ObjectId(req.params.id),
    });
    res.json(removedOption);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
