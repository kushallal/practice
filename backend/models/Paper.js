const mongoose = require("mongoose");

const paperSchema = mongoose.Schema(
  {
    paperType: {
      type: String,
      required: true,
    },
    paperLength: {
      type: Number,
      required: true,
    },
    paperHeight: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);
module.exports = mongoose.model("Paper", paperSchema);
