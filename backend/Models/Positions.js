const mongoose = require('mongoose');
const { PoitionsSchema } = require('../Schemas/PositionsSchema');


const Positions = mongoose.model("position", PoitionsSchema); 


module.exports.Positions = Positions;
