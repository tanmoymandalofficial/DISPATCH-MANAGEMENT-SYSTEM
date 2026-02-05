const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    const mongoURL = process.env.MONGODB;
    await mongoose.connect(mongoURL);
    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.error("Mongodb connection failed", error);
    process.exit(1);
  }
};

module.exports = connectToDb;
