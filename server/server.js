// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const expenseRoutes = require("./routes/expenses");
app.use("/api/transactions", expenseRoutes); 

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB: ExpenseTracker");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });
