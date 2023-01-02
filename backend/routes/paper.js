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
      height: 0,
      length: 0,
    };
    const _types = await db.papers.find().project(projection).toArray();
    const paperTypes = _types.map((paper) => paper.type);
    res.json(paperTypes);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const document = await db.papers.insertOne({
      type: req.body.paperType,
      length: req.body.paperLength,
      height: req.body.paperHeight,
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
