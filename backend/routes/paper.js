const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");
const { db } = require("../helper/mongoHelper");

router.get("/", async (req, res) => {
  try {
    const papers = await db.papers.find().toArray();
    res.json(papers);
  } catch (err) {
    res.json({ message: err });
  }
});
router.get("/types", async (req, res) => {
  try {
    const projection = {
      _id: 0,
      paperHeight: 0,
      paperLength: 0,
    };
    const paperTypes = await db.papers.find().project(projection).toArray();
    res.json(paperTypes);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const document = await db.papers.insertOne({
      paperType: req.body.paperType,
      paperLength: req.body.paperLength,
      paperHeight: req.body.paperHeight,
    });
    res.send(document);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removedPaper = await db.papers.deleteOne({
      _id: ObjectId(req.params.id),
    });
    res.json(removedPaper);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
