const mongoose = require("mongoose");
const planeSchema = mongoose.Schema(
  {
    planeName: {
      type: String,
      required: true,
    },
    paperUsed: {
      type: String,
      required: true,
    },
    planeEngineer: {
      type: String,
      required: true,
    },
    completionDate: {
      type: Date,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Planes", planeSchema);
