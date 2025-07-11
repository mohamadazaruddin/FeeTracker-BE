// Code Generated by Sidekick is for learning and experimentation purposes only.
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoDB = require("./config");

const studentRoutes = require("./routes/students");
const paymentRoutes = require("./routes/payments");

const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoDB(); // Db invok
app.get("/", (req, res) => {
  res.json({ success: true });
});

app.use("/api/students", studentRoutes);
app.use("/api/payments", paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
