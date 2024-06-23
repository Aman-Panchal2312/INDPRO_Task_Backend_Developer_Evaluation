const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const OrderItem = require('./orderItem');

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0
    }
  },
  {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    createdAt: true,
    updatedAt:false
  }
);

Order.hasMany(OrderItem, { foreignKey: 'order_id' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id' });

module.exports = Order;
