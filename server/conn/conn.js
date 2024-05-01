const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

const conn = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

conn();
