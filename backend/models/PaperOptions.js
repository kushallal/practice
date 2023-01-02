const mongoose = require("mongoose");

const PaperOptionsSchema = mongoose.Schema(
  {
    options: {
      type: Array,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("PaperOptions", PaperOptionsSchema);
