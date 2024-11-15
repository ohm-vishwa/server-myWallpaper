const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("DB connected Successfully...");
  } catch (error) {
    console.log("DB connection error...", error);
  }
};

module.exports = connectDB;
