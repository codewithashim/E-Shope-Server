const app = require("./app");
const dotenv = require("dotenv");
// config
dotenv.config({ path: "./config/config.env" });

// connect to database
const dbConnected = require("./config/database.js");
dbConnected();
// connect to database

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
