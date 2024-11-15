const mongoose = require("mongoose");
const wallpaperSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const category = mongoose.model("wallpapers", wallpaperSchema);
module.exports = category;
