const mongoose = require('mongoose');
const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },

  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number']
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

const Transactions = mongoose.model('Transaction', TransactionSchema);
module.exports = Transactions