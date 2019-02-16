const mongoose = require('mongoose');
const schema = require('../schema/todo');

let Todo = mongoose.model('Todo',schema.todoSchema );

module.exports = {
  Todo
}
