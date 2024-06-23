const Order = require('../models/order');
const OrderItem = require('../models/orderItem');

// ================== create a new order ===========================
exports.createOrder = async (req, res) => {
  try {
    const { user_id } = req.body;
    const newOrder = await Order.create({ user_id });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ====================== add items to an order========================
exports.addItemToOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { product_id, quantity, price } = req.body;
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    const newItem = await OrderItem.create({ order_id: id, product_id, quantity, price });
    // ================== update the total price of the order =============
    order.total_price += quantity * price;
    await order.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ==================== get the total price of an order ========================
exports.getOrderTotal = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json({ order_id: id, total_price: order.total_price });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
