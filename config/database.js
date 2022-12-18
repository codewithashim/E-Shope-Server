const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
mongoose.set("strictQuery", true);

const connection_string = process.env.DB_URI;

const dbConnected = () => {
  try {
    mongoose.connect(connection_string);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnected;
