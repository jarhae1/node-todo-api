const mongoose = require('mongoose');
const schema = require('../schema/user');

let User = mongoose.model('Users',schema.userSchema);

module.exports = {
  User
}
