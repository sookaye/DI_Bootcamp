

// crud operation
// GET, PUT, POST, DELETE
// GET => read
// PUT => update
// POST => CREATE
// DELETE => delete

const express = require('express');
const router = express.Router();
const { createProduct } = require('../controllers/products.js');
const { getProductById } = require('../controllers/products.js');

router.post('/', createProduct);
router.get('/', getProductById);

module.exports = router;