const Product = require('../models/product');

//=========================== add new product ===========================
exports.addProduct = async (req, res) => {
  try {
    const { name, quantity, price } = req.body;
    const newProduct = await Product.create({ name, quantity, price });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//=================== update product quantity ===========================
exports.updateQuantity = async (req, res) => {
  try {
    const  id = req.params;
    const quantity= req.body;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    product.quantity = quantity;
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// =========================== total Inventory value =========================
exports.getTotalInventoryValue = async (req, res) => {
  try {
    const products = await Product.findAll();
    const totalValue = products.reduce((total, product) => total + product.quantity * product.price, 0);
    res.status(200).json({ total_inventory_value: totalValue });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
