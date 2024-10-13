let {model} = require('mongoose');
const { UserSchema } = require('../Schemas/UserSchema');
const Users = model("User",UserSchema);


module.exports.Users = Users;