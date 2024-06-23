const express = require('express');
const { createOrder, addItemToOrder, getOrderTotal } = require('../controllers/orderController');

const router = express.Router();

router.post('/orders', createOrder);
router.post('/orders/:id/items', addItemToOrder);
router.get('/orders/:id/total', getOrderTotal);

module.exports = router;
