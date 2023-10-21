// crud operation
// GET, PUT, POST, DELETE
// GET => read
// PUT => update
// POST => CREATE
// DELETE => delete

const express = require('express');
const router = express.Router();
const { createProduct, getProduct } = require('../controllers/products.js');

router.post('/', createProduct);

router.get('/id/:id', getProduct)

module.exports = router;

connectionString="Data Source=DESKTOP-B63A2D5\SQLEXPRESS;Initial Catalog=V1-15062021;Integrated Security=True;MultipleActiveResultSets=False;Connect Timeout=30;" 
providerName="System.Data.SqlClient"
