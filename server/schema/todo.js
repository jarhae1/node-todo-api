const mongoose = require('mongoose');

let todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required:true,
      minlength:1,
      trim: true
    },
    completed: {
      type: Boolean,
      default:false
    },
    completedAt: {
      type: Number,
      default:null
    }
  });

  module.exports = {
    todoSchema
  }
