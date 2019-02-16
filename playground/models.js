const {mongoose} = require('../db/mongoose');
const schema = require('./schema');

let Todo = mongoose.model('Todo',schema.todoSchema );
let User = mongoose.model('Users',schema.userSchema);


module.exports = {
  Todo,
  User
}
