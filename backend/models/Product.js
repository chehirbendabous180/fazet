const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: { type: String, enum: ['boys', 'girls'] },
  image: String,
  sizes: [String],
  description: String,
});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);