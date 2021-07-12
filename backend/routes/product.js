const express = require("express");
const router = express.Router();
const db = require("../db");

//to return all products
router.get("/", (req, res) => {
  res.send("products");
});

//return specfic product

//post a new product

//delete a product

//delete some quanity of a specific product

//detect from quantity when an order is placed

//update product details {price,name,specs}

//return a specific product

//return product by their category

module.exports = router;
