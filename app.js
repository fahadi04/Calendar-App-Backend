const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const companyRoutes = require("./routes/AdminRoutes/companyRoutes");
const methodRoutes = require("./routes/AdminRoutes/methodRoutes");
const connectDB = require("./config/db");
const app = express();
const port = 5000;

// Middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(bodyParser.json());

// Database Connection
connectDB(process.env.MONGO_URI);

app.get((req, res) => {
  res.send("I am listening");
});

// Routes
app.use("/api/companies", companyRoutes);
app.use("/api/methods", methodRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
