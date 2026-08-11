// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");

// const PORT = process.env.PORT || 3002;
// const url = process.env.MONGO_URL || 3002;
// const app = express();

// app.listen(PORT, () => {
//   console.log("app started!");
//   mongoose.connect(url);
// });
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

// Connect to MongoDB using Promises (.then / .catch)
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("DB connected successfully!");
    
    // Start server only after successful DB connection
    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB Connection Error:", err.message);
  });
