const mongoose = require('mongoose');
let { OrdersSchema } =  require("../Schemas/OrdersSchema");

const Orders = mongoose.model("Order",OrdersSchema);

module.exports.Orders = Orders;