const express = require("express");
const multer = require("multer");
const router = express.Router();
const { ObjectId } = require("mongodb");
const path = require("path");
const { verifySignature } = require("../helper/ethersHelper");

const { db } = require("../helper/mongoHelper");
const { transporter } = require("../helper/mailHelper");
const e = require("express");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
  try {
    const planes = await db.planes.find().toArray();
    res.json(planes);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const signatureObj = {
      message: req.body.message,
      signature: req.body.signature,
      address: req.body.address,
    };
    const planeDocument = {
      planeName: req.body.planeName,
      paperUsed: req.body.paperUsed,
      planeEngineer: req.body.planeEngineer,
      completionDate: req.body.completionDate,
    };
    const verifyBool = verifySignature(signatureObj);

    if (verifyBool) {
      const receivedPlane = await db.planes.insertOne(planeDocument);
      let mailOptions = {
        from: " <laaleey3@gmail.com>",
        to: "graysier@gmail.com",
        subject: req.body.planeName,
        text: JSON.stringify(planeDocument),
        attachments: [{ path: "./Images/" + req.file.originalname }],
      };
      await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.json(receivedPlane);
    }
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
