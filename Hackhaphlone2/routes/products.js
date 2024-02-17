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