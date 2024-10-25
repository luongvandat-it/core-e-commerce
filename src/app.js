"use strict";
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");

const routers = require("./routes");
const db = require("./db/connectDB");

const app = express();

// middlewares
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("combined"));
app.use(cors());

// connect to database
(async () => {
  try {
    await db.connect();
  } catch (error) {
    process.exit(1);
  }
})();

// routes
app.use("/", routers);

// error handling middleware
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  return res.status(statusCode).json({
    error: {
      status: "error",
      code: statusCode,
      message: statusCode === 404 ? "Resource not found" : "Internal Server Error",
    },
  });
});

module.exports = app;
