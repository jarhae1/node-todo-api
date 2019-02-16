const mongoose = require('mongoose');

let userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required:true,
      minlength:1,
      trim: true
    }
  });

  module.exports = {
    userSchema
  }
