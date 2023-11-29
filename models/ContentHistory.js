const mongoose = require('mongoose');

//schema
const historySchema = new mongoose.Schema(
  {
    userName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//! Compiler to form the model
const ContentHistory = mongoose.model('ContentHistory', historySchema);

module.exports = ContentHistory;
