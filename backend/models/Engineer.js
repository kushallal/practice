const mongoose = require("mongoose");
const engineerSchema = mongoose.Schema(
  {
    engineerName: {
      type: String,
      required: true,
    },
    engineerAge: {
      type: Number,
      required: true,
    },
    engineerExperience: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);
module.exports = mongoose.model("Engineer", engineerSchema);
