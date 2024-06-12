const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRouter = require("./routes/authRoutes");
const app = express();

// 1) Middlewares
app.use(cors());
app.use(express.json());

// 2) Route
app.use("/api/auth", authRouter);

// 3) MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/authentication")
  .then(() => console.log("Connected to MongoDB :)"))
  .catch((err) => console.error(`Failed to connect to MongoDB ${err}`));

// 4) Global error handle
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err,
    message: err.message,
  });
});

//  5) SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
