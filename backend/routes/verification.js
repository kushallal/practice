// const express = require("express");
// const { verifySignature } = require("../helper/ethersHelper");
// const router = express.Router();

// router.post("/", (req, res) => {
//   const signed = verifySignature(
//     req.body.message,
//     req.body.signature,
//     req.body.address
//   );

//   if (signed == true) {
//     res.json({ signed: true });
//   } else {
//     res.json({ signed: false });
//   }
// });

// module.exports = router;
