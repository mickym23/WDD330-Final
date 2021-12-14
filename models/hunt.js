//Basic library model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = mongoose.model('Hunt', new Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}),
'lodges');
