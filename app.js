const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Import Routes
const Product = require("./routs/productsRouts");

// Route Middlewares
app.use("/api/v1/", Product);

// Route Middlewares

module.exports = app;
