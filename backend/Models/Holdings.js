const mongoose = require('mongoose');
const { HoldingsSchema } = require('../Schemas/HoldingsSchema');

const Holdings = mongoose.model("holding", HoldingsSchema); 

module.exports.Holdings = Holdings;
