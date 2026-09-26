const express = require("express");

const productRoutes = require("./routes/product.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Product API is running",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Product API is healthy",
  });
});

app.use("/api/products", productRoutes);

module.exports = app;