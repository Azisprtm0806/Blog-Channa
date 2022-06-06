const mongoose = require("mongoose");

const channaSchema = new mongoose.Schema({
  namaJenis: {
    type: String,
    required: true,
  },
  lokality: {
    type: String,
    required: true,
  },
  perawatan: {
    type: String,
    required: true,
  },
  treatment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("channaSchema", channaSchema);
