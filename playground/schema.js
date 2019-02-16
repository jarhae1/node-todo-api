const {mongoose} = require('../db/mongoose');

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
      todoSchema,
      userSchema
    }
