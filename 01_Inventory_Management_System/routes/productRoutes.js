const express = require('express');
const { addProduct, updateQuantity, getTotalInventoryValue } = require('../controllers/productController');

const router = express.Router();

router.post('/products', addProduct);
router.put('/products/:id', updateQuantity);
router.get('/inventory/value', getTotalInventoryValue);

module.exports = router;

